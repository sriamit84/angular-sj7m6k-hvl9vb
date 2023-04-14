import { getBlankApprovalGraphNode, getGraphNodes, getParentNodes, getSpaceApprovalGraphNode, isNodeApproved, isNodeStarted, isNodeTargetsIncludeId } from './helpers';
/** Algorithm in short:
 * 1. Find all possible paths (longest path length = amount of the columns in the graph)
 * 2. Trim paths (remove blank nodes at the end of the paths)
 * 3. Make all paths the same length (= longest path length) to make every unique node be present at the same index across all paths
 * 4. Sort paths by their likeness between each other to avoid paths crossing
 * 5. Remove "duplicate" nodes in paths (make every unique node be present only once across all paths)
 * 6. Remove empty paths
 * 7. Transform paths into the columns
 * 8. Trim columns (remove space nodes at the end of columns)
 * 9. Remove columns which contain only blank and empty nodes
 * 10. Transform columns into the graph columns
 */
export function generateApprovalFlowGraph(nodes) {
    const graph = { columns: [], errors: false };
    if (!nodes.length) {
        return graph;
    }
    const rootNodes = findRootNodes(nodes);
    const finalNodes = findFinalNodes(nodes);
    if (!rootNodes.length || !finalNodes.length) {
        console.warn(`Err: Not possible to build graph because root or final nodes aren't present!`);
        graph.errors = true;
        return graph;
    }
    const paths = getPaths(rootNodes, nodes);
    if (!paths.length) {
        console.warn('Err: Not possible to build graph!');
        graph.errors = true;
        return graph;
    }
    const trimmedPaths = trimPaths(paths);
    const sameLengthPaths = makePathsSameLength(trimmedPaths);
    const pathsBySimilarity = sortPaths(sameLengthPaths);
    const pathsWithUniqueNodes = removeDuplicateNodes(pathsBySimilarity);
    const notEmptyPaths = removeEmptyPaths(pathsWithUniqueNodes);
    const columns = getColumnsFromPaths(notEmptyPaths);
    const trimmedColumns = trimColumns(columns);
    const notEmptyColumns = removeEmptyColumns(trimmedColumns);
    graph.columns = getGraphColumnsFromPaths(notEmptyColumns);
    return graph;
}
/** Generate graph metadata */
export function generateApprovalFlowGraphMetadata(graph) {
    const nodes = getGraphNodes(graph);
    const metadata = {};
    graph.columns.forEach((column, columnIndex) => {
        column.nodes.forEach((node, nodeIndex) => {
            const parents = getParentNodes(node, nodes);
            const parentsApproved = parents.length ? parents.every((_node) => isNodeApproved(_node)) : false;
            const isRoot = !parents.length && !node.space;
            const isFinal = !node.targets.length && !node.space;
            const parallelEnd = parents.length > 1;
            const firstOfMultipleRootNodes = columnIndex === 0 && column.nodes.length > 1 && nodeIndex === 0;
            const firstOfMultipleFinalNodes = columnIndex === graph.columns.length - 1 && column.nodes.length > 1 && nodeIndex === 0;
            metadata[node.id] = {
                parents,
                isRoot,
                isFinal,
                parallelStart: node.targets.length > 1,
                parallelEnd,
                columnIndex,
                nodeIndex,
                canAddNodeBefore: !isNodeStarted(node) && !parentsApproved,
                canAddNodeBeforeAll: isRoot && firstOfMultipleRootNodes,
                canAddNodeAfter: !isNodeApproved(node),
                canAddNodeAfterAll: !isNodeApproved(node) && ((isFinal && firstOfMultipleFinalNodes) || (parallelEnd && node.blank)),
                canAddParallel: !isNodeApproved(node),
                isVerticalLineBeforeSolid: node.space && graph.columns[columnIndex - 1]?.allNodesApproved,
                isVerticalLineAfterSolid: node.space && column.allNodesApproved,
                firstOfMultipleRootNodes,
                firstOfMultipleFinalNodes,
                rootNodesApproved: columnIndex === 0 && column.allNodesApproved
            };
        });
    });
    /* Some flags can be calculated only on the second run, when all nodes already have base metadata */
    graph.columns.forEach((column) => {
        column.nodes.forEach((node, nodeIndex) => {
            const nodeMetadata = metadata[node.id];
            nodeMetadata.isLastInParallel = metadata[node.targets[0]]?.parallelEnd;
            nodeMetadata.isFirstInParallel = metadata[nodeMetadata.parents[0]?.id]?.parallelStart;
            const columnIndex = column.index;
            const graphPrevColumn = columnIndex ? graph.columns[columnIndex - 1] : undefined;
            const graphNextColumn = columnIndex ? graph.columns[columnIndex + 1] : undefined;
            const prevHNode = graphPrevColumn?.nodes[nodeIndex];
            const nextHNode = graphNextColumn?.nodes[nodeIndex];
            nodeMetadata.renderAddNodeAfterButton =
                nodeMetadata.canAddNodeAfter &&
                    (nodeMetadata.isFinal ||
                        nodeMetadata.parallelStart ||
                        nodeMetadata.isLastInParallel ||
                        nextHNode?.blank);
            const nextColumnNodes = graphNextColumn?.nodes;
            if (nodeMetadata.parallelStart && nextColumnNodes) {
                const children = nextColumnNodes.filter((_node) => node.targets.includes(_node.id));
                const firstChildIndex = nextColumnNodes.findIndex((_node) => _node.id === children[0].id);
                const lastChildIndex = nextColumnNodes.findIndex((_node) => _node.id === children[children.length - 1].id);
                for (let i = firstChildIndex + 1; i <= lastChildIndex; i++) {
                    metadata[nextColumnNodes[i].id].renderVerticalLineBefore = true;
                }
            }
            const prevColumnNodes = graphPrevColumn?.nodes;
            if (nodeMetadata.parallelEnd && prevColumnNodes) {
                const firstParentIndex = prevColumnNodes.findIndex((_node) => _node.id === nodeMetadata.parents[0].id);
                const lastParentIndex = prevColumnNodes.findIndex((_node) => _node.id === nodeMetadata.parents[nodeMetadata.parents.length - 1].id);
                for (let i = firstParentIndex + 1; i <= lastParentIndex; i++) {
                    metadata[prevColumnNodes[i].id].renderVerticalLineAfter = true;
                }
            }
            nodeMetadata.renderVerticalLineBefore = !nodeMetadata.renderVerticalLineBefore
                ? nodeIndex > 0 && !prevHNode
                : true;
            nodeMetadata.renderVerticalLineAfter = !nodeMetadata.renderVerticalLineAfter
                ? nodeIndex > 0 && !nextHNode
                : true;
        });
    });
    return metadata;
}
function findRootNodes(nodes) {
    return nodes.filter((node) => nodes.every((n) => !isNodeTargetsIncludeId(n, node.id)));
}
function findFinalNodes(nodes) {
    return nodes.filter((node) => !node.targets.length);
}
/** Find all possible paths (longest path length = amount of the columns in the graph) */
function getPaths(rootNodes, nodes) {
    const paths = [];
    const queue = [];
    for (let i = 0; i < rootNodes.length; i++) {
        queue.push([rootNodes[i]]);
        while (queue.length) {
            const path = queue.pop();
            let lastNodeInPath;
            if (path) {
                lastNodeInPath = path[path.length - 1];
            }
            /** Indicates about an error */
            if (!lastNodeInPath) {
                return [];
            }
            if (!lastNodeInPath.targets.length) {
                paths.push(path);
            }
            else {
                lastNodeInPath.targets.forEach((targetId) => {
                    const targetNode = nodes.find((node) => node.id === targetId);
                    if (!targetNode) {
                        return;
                    }
                    const newPath = [...path, targetNode];
                    queue.push(newPath);
                });
            }
        }
    }
    return paths;
}
/** Trim paths (remove blank nodes at the end of the paths) */
function trimPaths(paths) {
    const processedPaths = [];
    paths.forEach((path) => {
        let indexToSlice = path.length - 1;
        for (let i = path.length - 1; i > 0; --i) {
            if (path[i].blank) {
                indexToSlice = i - 1;
            }
            else {
                break;
            }
        }
        path[indexToSlice].targets = [];
        processedPaths.push(path.slice(0, indexToSlice + 1));
    });
    return processedPaths;
}
/** Make all paths the same length (= longest path length) to make every unique node be present at the same index across all paths */
function makePathsSameLength(paths) {
    const processedPaths = [];
    const pathLengths = paths.map((path) => path.length);
    const longestPathLength = Math.max(...pathLengths);
    paths.forEach((path) => {
        if (path.length === longestPathLength) {
            processedPaths.push(path);
            return;
        }
        path.forEach((node, nodeIndex) => {
            /** Try to get blank nodes from already processed paths as paths may be the same within some part */
            let blankNodes = getBlankNodesAfterNode(node, processedPaths);
            if (blankNodes.length && blankNodes[0].id !== path[nodeIndex + 1]?.id) {
                path.splice(nodeIndex + 1, 0, ...blankNodes);
                return;
            }
            const nodeIndexInPaths = paths.map((_path) => _path.indexOf(node));
            const mostFarNodeIndexInPaths = Math.max(...nodeIndexInPaths);
            if (nodeIndex < mostFarNodeIndexInPaths) {
                blankNodes = getBlankNodes(mostFarNodeIndexInPaths - nodeIndex, path[nodeIndex - 1].status);
                blankNodes[blankNodes.length - 1].targets = [node.id];
                path[nodeIndex - 1].targets = [blankNodes[0].id];
                path.splice(nodeIndex, 0, ...blankNodes);
                return;
            }
            if (nodeIndex === mostFarNodeIndexInPaths && nodeIndex === path.length - 1) {
                blankNodes = getBlankNodes(longestPathLength - path.length, path[nodeIndex].status);
                path[nodeIndex].targets = [blankNodes[0].id];
                path.splice(nodeIndex + 1, 0, ...blankNodes);
                return;
            }
        });
        processedPaths.push(path);
    });
    return processedPaths;
}
/** Try to get blank nodes from already processed paths as paths may be the same within some part */
function getBlankNodesAfterNode(node, paths) {
    const blankNodes = [];
    const pathWithBlankNodeAfter = paths.find((path) => {
        const nodeIndex = path.indexOf(node);
        return nodeIndex > -1 && path[nodeIndex + 1]?.blank;
    });
    if (pathWithBlankNodeAfter) {
        const nodeIndex = pathWithBlankNodeAfter.indexOf(node) + 1;
        const nextNotBlankNodeIndex = pathWithBlankNodeAfter.findIndex((_node, _index) => _index > nodeIndex && !_node.blank);
        blankNodes.push(...pathWithBlankNodeAfter.slice(nodeIndex, nextNotBlankNodeIndex > 0 ? nextNotBlankNodeIndex : undefined));
    }
    return blankNodes;
}
/** Generate blank nodes sequential */
function getBlankNodes(count, status) {
    const nodes = [];
    let node;
    let nodeId;
    for (let i = count; i > 0; i--) {
        node = Object.assign({}, getBlankApprovalGraphNode(), { targets: nodeId ? [nodeId] : [], status });
        nodeId = node.id;
        nodes.unshift(node);
    }
    return nodes;
}
/** Sort paths by their likeness (= count of the same nodes relatively to the other paths) between each other to avoid paths crossing */
function sortPaths(paths) {
    if (paths.length === 1) {
        return paths;
    }
    /** [pathIndex, relativeToPathIndex, sameNodesCount][] */
    let similarities = [];
    let pathSimilarity = 0;
    paths.forEach((path, index) => {
        for (let i = 0; i < paths.length; i++) {
            if (index !== i && !similarities.some((likely) => index === likely[1] && i === likely[0])) {
                pathSimilarity = 0;
                for (let j = 0; j < path.length; j++) {
                    if (path[j].id === paths[i][j].id) {
                        pathSimilarity++;
                    }
                }
                similarities.push([index, i, pathSimilarity]);
            }
        }
    });
    similarities = similarities.sort((a, b) => (a[2] > b[2] ? -1 : 1));
    const usedPathIndexes = [];
    const processedPaths = [];
    similarities.forEach((similarity) => {
        if (!usedPathIndexes.some((i) => i === similarity[0])) {
            processedPaths.push(paths[similarity[0]]);
            usedPathIndexes.push(similarity[0]);
        }
        if (!usedPathIndexes.some((i) => i === similarity[1])) {
            processedPaths.push(paths[similarity[1]]);
            usedPathIndexes.push(similarity[1]);
        }
    });
    return processedPaths;
}
/** Remove "duplicate" nodes in paths (make every unique node be present only once across all paths) */
function removeDuplicateNodes(paths) {
    const processedPaths = [];
    paths.forEach((path, index) => {
        path.forEach((node) => {
            paths.forEach((_path, _index) => {
                const isNodeInPath = _index !== index && _path.indexOf(node) > -1;
                if (isNodeInPath) {
                    /** Instead of node place space node */
                    _path.splice(_path.indexOf(node), 1, getSpaceApprovalGraphNode());
                }
            });
        });
        processedPaths.push(path);
    });
    return processedPaths;
}
/** Remove empty paths (which contains only empty nodes) */
function removeEmptyPaths(paths) {
    return paths.reduce((acc, path) => {
        if (!path.every((node) => node.space)) {
            acc.push(path);
        }
        return acc;
    }, []);
}
/** Transform paths into the columns (it's possible as they're all the same length) */
function getColumnsFromPaths(paths) {
    const columns = [];
    let column = [];
    for (let i = 0; i < paths[0].length; i++) {
        column = [];
        for (let v = 0; v < paths.length; v++) {
            column.push(paths[v][i]);
        }
        columns.push(column);
    }
    return columns;
}
/** Trim space nodes at the end of the columns. */
function trimColumns(columns) {
    const processedColumns = [];
    columns.forEach((column) => {
        let lastNotSpaceNodeIndex;
        for (let i = column.length - 1; i >= 0; i--) {
            if (!column[i].space) {
                lastNotSpaceNodeIndex = i;
                break;
            }
        }
        if (lastNotSpaceNodeIndex < column.length) {
            processedColumns.push(column.slice(0, lastNotSpaceNodeIndex + 1));
        }
        else {
            processedColumns.push(column);
        }
    });
    return processedColumns;
}
/** Remove empty columns (where every node is a blank node)  */
function removeEmptyColumns(columns) {
    const processedColumns = [];
    columns.forEach((column) => {
        const areAllNodesEmpty = column.every((node) => node.blank || node.space);
        if (areAllNodesEmpty) {
            column.forEach((node) => {
                if (node.blank) {
                    /** Connect previous column to the next column, omitting current column. */
                    replaceTargets(node.id, node.targets, columns);
                }
            });
        }
        else {
            processedColumns.push(column);
        }
    });
    return processedColumns;
}
function replaceTargets(replaceId, replaceWithId, columns) {
    columns.forEach((column) => {
        column.forEach((n) => {
            if (isNodeTargetsIncludeId(n, replaceId)) {
                n.targets = n.targets.filter((_id) => _id !== replaceId);
                n.targets.push(...replaceWithId);
            }
        });
    });
}
/** Transform columns into the graph columns (with additional metadata). */
function getGraphColumnsFromPaths(columns) {
    const graphColumns = [];
    columns.forEach((column, index) => {
        column.forEach((node) => (node.colIndex = index));
        graphColumns.push({
            nodes: column,
            index,
            allNodesApproved: column.every((node) => isNodeApproved(node))
        });
    });
    return graphColumns;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwcm92YWwtZmxvdy1ncmFwaC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2xpYnMvcGxhdGZvcm0vc3JjL2xpYi9hcHByb3ZhbC1mbG93L2FwcHJvdmFsLWZsb3ctZ3JhcGgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUEsT0FBTyxFQUNILHlCQUF5QixFQUN6QixhQUFhLEVBQ2IsY0FBYyxFQUNkLHlCQUF5QixFQUN6QixjQUFjLEVBQ2QsYUFBYSxFQUNiLHNCQUFzQixFQUN6QixNQUFNLFdBQVcsQ0FBQztBQWlCbkI7Ozs7Ozs7Ozs7O0dBV0c7QUFDSCxNQUFNLFVBQVUseUJBQXlCLENBQUMsS0FBMEI7SUFDaEUsTUFBTSxLQUFLLEdBQXNCLEVBQUUsT0FBTyxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLENBQUM7SUFFaEUsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUU7UUFDZixPQUFPLEtBQUssQ0FBQztLQUNoQjtJQUVELE1BQU0sU0FBUyxHQUFHLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN2QyxNQUFNLFVBQVUsR0FBRyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUM7SUFFekMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxFQUFFO1FBQ3pDLE9BQU8sQ0FBQyxJQUFJLENBQUMsOEVBQThFLENBQUMsQ0FBQztRQUM3RixLQUFLLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztRQUNwQixPQUFPLEtBQUssQ0FBQztLQUNoQjtJQUVELE1BQU0sS0FBSyxHQUFHLFFBQVEsQ0FBQyxTQUFTLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFFekMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUU7UUFDZixPQUFPLENBQUMsSUFBSSxDQUFDLG1DQUFtQyxDQUFDLENBQUM7UUFDbEQsS0FBSyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFD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LEVBQUUsT0FBOEI7SUFDOUYsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLE1BQU0sRUFBRSxFQUFFO1FBQ3ZCLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRTtZQUNqQixJQUFJLHNCQUFzQixDQUFDLENBQUMsRUFBRSxTQUFTLENBQUMsRUFBRTtnQkFDdEMsQ0FBQyxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsR0FBRyxLQUFLLFNBQVMsQ0FBQyxDQUFDO2dCQUN6RCxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLGFBQWEsQ0FBQyxDQUFDO2FBQ3BDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDLENBQUMsQ0FBQztBQUNQLENBQUM7QUFFRCwyRUFBMkU7QUFDM0UsU0FBUyx3QkFBd0IsQ0FBQyxPQUE4QjtJQUM1RCxNQUFNLFlBQVksR0FBMEIsRUFBRSxDQUFDO0lBRS9DLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxNQUFNLEVBQUUsS0FBSyxFQUFFLEVBQUU7UUFDOUIsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFFbEQsWUFBWSxDQUFDLElBQUksQ0FBQztZQUNkLEtBQUssRUFBRSxNQUFNO1lBQ2IsS0FBSztZQUNMLGdCQUFnQixFQUFFLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUNqRSxDQUFDLENBQUM7SUFDUCxDQUFDLENBQUMsQ0FBQztJQUVILE9BQU8sWUFBWSxDQUFDO0FBQ3hCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHByb3ZhbEdyYXBoTm9kZSwgQXBwcm92YWxHcmFwaE5vZGVNZXRhZGF0YSwgQXBwcm92YWxOb2RlLCBBcHByb3ZhbFN0YXR1cyB9IGZyb20gJy4vaW50ZXJmYWNlcyc7XG5cbmltcG9ydCB7XG4gICAgZ2V0QmxhbmtBcHByb3ZhbEdyYXBoTm9kZSxcbiAgICBnZXRHcmFwaE5vZGVzLFxuICAgIGdldFBhcmVudE5vZGVzLFxuICAgIGdldFNwYWNlQXBwcm92YWxHcmFwaE5vZGUsXG4gICAgaXNOb2RlQXBwcm92ZWQsXG4gICAgaXNOb2RlU3RhcnRlZCxcbiAgICBpc05vZGVUYXJnZXRzSW5jbHVkZUlkXG59IGZyb20gJy4vaGVscGVycyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQXBwcm92YWxGbG93R3JhcGgge1xuICAgIGNvbHVtbnM6IEFwcHJvdmFsR3JhcGhDb2x1bW5bXTtcbiAgICBlcnJvcnM/OiBib29sZWFuO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEFwcHJvdmFsR3JhcGhDb2x1bW4ge1xuICAgIG5vZGVzOiBBcHByb3ZhbEdyYXBoTm9kZVtdO1xuICAgIGluZGV4PzogbnVtYmVyO1xuICAgIGFsbE5vZGVzQXBwcm92ZWQ/OiBib29sZWFuO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEFwcHJvdmFsR3JhcGhNZXRhZGF0YSB7XG4gICAgW2tleTogc3RyaW5nXTogQXBwcm92YWxHcmFwaE5vZGVNZXRhZGF0YTtcbn1cblxuLyoqIEFsZ29yaXRobSBpbiBzaG9ydDpcbiAqIDEuIEZpbmQgYWxsIHBvc3NpYmxlIHBhdGhzIChsb25nZXN0IHBhdGggbGVuZ3RoID0gYW1vdW50IG9mIHRoZSBjb2x1bW5zIGluIHRoZSBncmFwaClcbiAqIDIuIFRyaW0gcGF0aHMgKHJlbW92ZSBibGFuayBub2RlcyBhdCB0aGUgZW5kIG9mIHRoZSBwYXRocylcbiAqIDMuIE1ha2UgYWxsIHBhdGhzIHRoZSBzYW1lIGxlbmd0aCAoPSBsb25nZXN0IHBhdGggbGVuZ3RoKSB0byBtYWtlIGV2ZXJ5IHVuaXF1ZSBub2RlIGJlIHByZXNlbnQgYXQgdGhlIHNhbWUgaW5kZXggYWNyb3NzIGFsbCBwYXRoc1xuICogNC4gU29ydCBwYXRocyBieSB0aGVpciBsaWtlbmVzcyBiZXR3ZWVuIGVhY2ggb3RoZXIgdG8gYXZvaWQgcGF0aHMgY3Jvc3NpbmdcbiAqIDUuIFJlbW92ZSBcImR1cGxpY2F0ZVwiIG5vZGVzIGluIHBhdGhzIChtYWtlIGV2ZXJ5IHVuaXF1ZSBub2RlIGJlIHByZXNlbnQgb25seSBvbmNlIGFjcm9zcyBhbGwgcGF0aHMpXG4gKiA2LiBSZW1vdmUgZW1wdHkgcGF0aHNcbiAqIDcuIFRyYW5zZm9ybSBwYXRocyBpbnRvIHRoZSBjb2x1bW5zXG4gKiA4LiBUcmltIGNvbHVtbnMgKHJlbW92ZSBzcGFjZSBub2RlcyBhdCB0aGUgZW5kIG9mIGNvbHVtbnMpXG4gKiA5LiBSZW1vdmUgY29sdW1ucyB3aGljaCBjb250YWluIG9ubHkgYmxhbmsgYW5kIGVtcHR5IG5vZGVzXG4gKiAxMC4gVHJhbnNmb3JtIGNvbHVtbnMgaW50byB0aGUgZ3JhcGggY29sdW1uc1xuICovXG5leHBvcnQgZnVuY3Rpb24gZ2VuZXJhdGVBcHByb3ZhbEZsb3dHcmFwaChub2RlczogQXBwcm92YWxHcmFwaE5vZGVbXSk6IEFwcHJvdmFsRmxvd0dyYXBoIHtcbiAgICBjb25zdCBncmFwaDogQXBwcm92YWxGbG93R3JhcGggPSB7IGNvbHVtbnM6IFtdLCBlcnJvcnM6IGZhbHNlIH07XG5cbiAgICBpZiAoIW5vZGVzLmxlbmd0aCkge1xuICAgICAgICByZXR1cm4gZ3JhcGg7XG4gICAgfVxuXG4gICAgY29uc3Qgcm9vdE5vZGVzID0gZmluZFJvb3ROb2Rlcyhub2Rlcyk7XG4gICAgY29uc3QgZmluYWxOb2RlcyA9IGZpbmRGaW5hbE5vZGVzKG5vZGVzKTtcblxuICAgIGlmICghcm9vdE5vZGVzLmxlbmd0aCB8fCAhZmluYWxOb2Rlcy5sZW5ndGgpIHtcbiAgICAgICAgY29uc29sZS53YXJuKGBFcnI6IE5vdCBwb3NzaWJsZSB0byBidWlsZCBncmFwaCBiZWNhdXNlIHJvb3Qgb3IgZmluYWwgbm9kZXMgYXJlbid0IHByZXNlbnQhYCk7XG4gICAgICAgIGdyYXBoLmVycm9ycyA9IHRydWU7XG4gICAgICAgIHJldHVybiBncmFwaDtcbiAgICB9XG5cbiAgICBjb25zdCBwYXRocyA9IGdldFBhdGhzKHJvb3ROb2Rlcywgbm9kZXMpO1xuXG4gICAgaWYgKCFwYXRocy5sZW5ndGgpIHtcbiAgICAgICAgY29uc29sZS53YXJuKCdFcnI6IE5vdCBwb3NzaWJsZSB0byBidWlsZCBncmFwaCEnKTtcbiAgICAgICAgZ3JhcGguZXJyb3JzID0gdHJ1ZTtcbiAgICAgICAgcmV0dXJuIGdyYXBoO1xuICAgIH1cblxuICAgIGNvbnN0IHRyaW1tZWRQYXRocyA9IHRyaW1QYXRocyhwYXRocyk7XG4gICAgY29uc3Qgc2FtZUxlbmd0aFBhdGhzID0gbWFrZVBhdGhzU2FtZUxlbmd0aCh0cmltbWVkUGF0aHMpO1xuICAgIGNvbnN0IHBhdGhzQnlTaW1pbGFyaXR5ID0gc29ydFBhdGhzKHNhbWVMZW5ndGhQYXRocyk7XG4gICAgY29uc3QgcGF0aHNXaXRoVW5pcXVlTm9kZXMgPSByZW1vdmVEdXBsaWNhdGVOb2RlcyhwYXRoc0J5U2ltaWxhcml0eSk7XG4gICAgY29uc3Qgbm90RW1wdHlQYXRocyA9IHJlbW92ZUVtcHR5UGF0aHMocGF0aHNXaXRoVW5pcXVlTm9kZXMpO1xuICAgIGNvbnN0IGNvbHVtbnMgPSBnZXRDb2x1bW5zRnJvbVBhdGhzKG5vdEVtcHR5UGF0aHMpO1xuICAgIGNvbnN0IHRyaW1tZWRDb2x1bW5zID0gdHJpbUNvbHVtbnMoY29sdW1ucyk7XG4gICAgY29uc3Qgbm90RW1wdHlDb2x1bW5zID0gcmVtb3ZlRW1wdHlDb2x1bW5zKHRyaW1tZWRDb2x1bW5zKTtcbiAgICBncmFwaC5jb2x1bW5zID0gZ2V0R3JhcGhDb2x1bW5zRnJvbVBhdGhzKG5vdEVtcHR5Q29sdW1ucyk7XG5cbiAgICByZXR1cm4gZ3JhcGg7XG59XG5cbi8qKiBHZW5lcmF0ZSBncmFwaCBtZXRhZGF0YSAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdlbmVyYXRlQXBwcm92YWxGbG93R3JhcGhNZXRhZGF0YShncmFwaDogQXBwcm92YWxGbG93R3JhcGgpOiBBcHByb3ZhbEdyYXBoTWV0YWRhdGEge1xuICAgIGNvbnN0IG5vZGVzID0gZ2V0R3JhcGhOb2RlcyhncmFwaCk7XG4gICAgY29uc3QgbWV0YWRhdGE6IEFwcHJvdmFsR3JhcGhNZXRhZGF0YSA9IHt9O1xuXG4gICAgZ3JhcGguY29sdW1ucy5mb3JFYWNoKChjb2x1bW4sIGNvbHVtbkluZGV4KSA9PiB7XG4gICAgICAgIGNvbHVtbi5ub2Rlcy5mb3JFYWNoKChub2RlLCBub2RlSW5kZXgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHBhcmVudHMgPSBnZXRQYXJlbnROb2Rlcyhub2RlLCBub2Rlcyk7XG4gICAgICAgICAgICBjb25zdCBwYXJlbnRzQXBwcm92ZWQgPSBwYXJlbnRzLmxlbmd0aCA/IHBhcmVudHMuZXZlcnkoKF9ub2RlKSA9PiBpc05vZGVBcHByb3ZlZChfbm9kZSkpIDogZmFsc2U7XG4gICAgICAgICAgICBjb25zdCBpc1Jvb3QgPSAhcGFyZW50cy5sZW5ndGggJiYgIW5vZGUuc3BhY2U7XG4gICAgICAgICAgICBjb25zdCBpc0ZpbmFsID0gIW5vZGUudGFyZ2V0cy5sZW5ndGggJiYgIW5vZGUuc3BhY2U7XG4gICAgICAgICAgICBjb25zdCBwYXJhbGxlbEVuZCA9IHBhcmVudHMubGVuZ3RoID4gMTtcbiAgICAgICAgICAgIGNvbnN0IGZpcnN0T2ZNdWx0aXBsZVJvb3ROb2RlcyA9IGNvbHVtbkluZGV4ID09PSAwICYmIGNvbHVtbi5ub2Rlcy5sZW5ndGggPiAxICYmIG5vZGVJbmRleCA9PT0gMDtcbiAgICAgICAgICAgIGNvbnN0IGZpcnN0T2ZNdWx0aXBsZUZpbmFsTm9kZXMgPVxuICAgICAgICAgICAgICAgIGNvbHVtbkluZGV4ID09PSBncmFwaC5jb2x1bW5zLmxlbmd0aCAtIDEgJiYgY29sdW1uLm5vZGVzLmxlbmd0aCA+IDEgJiYgbm9kZUluZGV4ID09PSAwO1xuXG4gICAgICAgICAgICBtZXRhZGF0YVtub2RlLmlkXSA9IHtcbiAgICAgICAgICAgICAgICBwYXJlbnRzLFxuICAgICAgICAgICAgICAgIGlzUm9vdCxcbiAgICAgICAgICAgICAgICBpc0ZpbmFsLFxuICAgICAgICAgICAgICAgIHBhcmFsbGVsU3RhcnQ6IG5vZGUudGFyZ2V0cy5sZW5ndGggPiAxLFxuICAgICAgICAgICAgICAgIHBhcmFsbGVsRW5kLFxuICAgICAgICAgICAgICAgIGNvbHVtbkluZGV4LFxuICAgICAgICAgICAgICAgIG5vZGVJbmRleCxcbiAgICAgICAgICAgICAgICBjYW5BZGROb2RlQmVmb3JlOiAhaXNOb2RlU3RhcnRlZChub2RlKSAmJiAhcGFyZW50c0FwcHJvdmVkLFxuICAgICAgICAgICAgICAgIGNhbkFkZE5vZGVCZWZvcmVBbGw6IGlzUm9vdCAmJiBmaXJzdE9mTXVsdGlwbGVSb290Tm9kZXMsXG4gICAgICAgICAgICAgICAgY2FuQWRkTm9kZUFmdGVyOiAhaXNOb2RlQXBwcm92ZWQobm9kZSksXG4gICAgICAgICAgICAgICAgY2FuQWRkTm9kZUFmdGVyQWxsOlxuICAgICAgICAgICAgICAgICAgICAhaXNOb2RlQXBwcm92ZWQobm9kZSkgJiYgKChpc0ZpbmFsICYmIGZpcnN0T2ZNdWx0aXBsZUZpbmFsTm9kZXMpIHx8IChwYXJhbGxlbEVuZCAmJiBub2RlLmJsYW5rKSksXG4gICAgICAgICAgICAgICAgY2FuQWRkUGFyYWxsZWw6ICFpc05vZGVBcHByb3ZlZChub2RlKSxcbiAgICAgICAgICAgICAgICBpc1ZlcnRpY2FsTGluZUJlZm9yZVNvbGlkOiBub2RlLnNwYWNlICYmIGdyYXBoLmNvbHVtbnNbY29sdW1uSW5kZXggLSAxXT8uYWxsTm9kZXNBcHByb3ZlZCxcbiAgICAgICAgICAgICAgICBpc1ZlcnRpY2FsTGluZUFmdGVyU29saWQ6IG5vZGUuc3BhY2UgJiYgY29sdW1uLmFsbE5vZGVzQXBwcm92ZWQsXG4gICAgICAgICAgICAgICAgZmlyc3RPZk11bHRpcGxlUm9vdE5vZGVzLFxuICAgICAgICAgICAgICAgIGZpcnN0T2ZNdWx0aXBsZUZpbmFsTm9kZXMsXG4gICAgICAgICAgICAgICAgcm9vdE5vZGVzQXBwcm92ZWQ6IGNvbHVtbkluZGV4ID09PSAwICYmIGNvbHVtbi5hbGxOb2Rlc0FwcHJvdmVkXG4gICAgICAgICAgICB9O1xuICAgICAgICB9KTtcbiAgICB9KTtcblxuICAgIC8qIFNvbWUgZmxhZ3MgY2FuIGJlIGNhbGN1bGF0ZWQgb25seSBvbiB0aGUgc2Vjb25kIHJ1biwgd2hlbiBhbGwgbm9kZXMgYWxyZWFkeSBoYXZlIGJhc2UgbWV0YWRhdGEgKi9cbiAgICBncmFwaC5jb2x1bW5zLmZvckVhY2goKGNvbHVtbikgPT4ge1xuICAgICAgICBjb2x1bW4ubm9kZXMuZm9yRWFjaCgobm9kZSwgbm9kZUluZGV4KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBub2RlTWV0YWRhdGEgPSBtZXRhZGF0YVtub2RlLmlkXTtcblxuICAgICAgICAgICAgbm9kZU1ldGFkYXRhLmlzTGFzdEluUGFyYWxsZWwgPSBtZXRhZGF0YVtub2RlLnRhcmdldHNbMF1dPy5wYXJhbGxlbEVuZDtcbiAgICAgICAgICAgIG5vZGVNZXRhZGF0YS5pc0ZpcnN0SW5QYXJhbGxlbCA9IG1ldGFkYXRhW25vZGVNZXRhZGF0YS5wYXJlbnRzWzBdPy5pZF0/LnBhcmFsbGVsU3RhcnQ7XG5cbiAgICAgICAgICAgIGNvbnN0IGNvbHVtbkluZGV4ID0gY29sdW1uLmluZGV4O1xuICAgICAgICAgICAgY29uc3QgZ3JhcGhQcmV2Q29sdW1uID0gY29sdW1uSW5kZXggPyBncmFwaC5jb2x1bW5zW2NvbHVtbkluZGV4IC0gMV0gOiB1bmRlZmluZWQ7XG4gICAgICAgICAgICBjb25zdCBncmFwaE5leHRDb2x1bW4gPSBjb2x1bW5JbmRleCA/IGdyYXBoLmNvbHVtbnNbY29sdW1uSW5kZXggKyAxXSA6IHVuZGVmaW5lZDtcblxuICAgICAgICAgICAgY29uc3QgcHJldkhOb2RlID0gZ3JhcGhQcmV2Q29sdW1uPy5ub2Rlc1tub2RlSW5kZXhdO1xuICAgICAgICAgICAgY29uc3QgbmV4dEhOb2RlID0gZ3JhcGhOZXh0Q29sdW1uPy5ub2Rlc1tub2RlSW5kZXhdO1xuXG4gICAgICAgICAgICBub2RlTWV0YWRhdGEucmVuZGVyQWRkTm9kZUFmdGVyQnV0dG9uID1cbiAgICAgICAgICAgICAgICBub2RlTWV0YWRhdGEuY2FuQWRkTm9kZUFmdGVyICYmXG4gICAgICAgICAgICAgICAgKG5vZGVNZXRhZGF0YS5pc0ZpbmFsIHx8XG4gICAgICAgICAgICAgICAgICAgIG5vZGVNZXRhZGF0YS5wYXJhbGxlbFN0YXJ0IHx8XG4gICAgICAgICAgICAgICAgICAgIG5vZGVNZXRhZGF0YS5pc0xhc3RJblBhcmFsbGVsIHx8XG4gICAgICAgICAgICAgICAgICAgIG5leHRITm9kZT8uYmxhbmspO1xuXG4gICAgICAgICAgICBjb25zdCBuZXh0Q29sdW1uTm9kZXMgPSBncmFwaE5leHRDb2x1bW4/Lm5vZGVzO1xuICAgICAgICAgICAgaWYgKG5vZGVNZXRhZGF0YS5wYXJhbGxlbFN0YXJ0ICYmIG5leHRDb2x1bW5Ob2Rlcykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNoaWxkcmVuID0gbmV4dENvbHVtbk5vZGVzLmZpbHRlcigoX25vZGUpID0+IG5vZGUudGFyZ2V0cy5pbmNsdWRlcyhfbm9kZS5pZCkpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGZpcnN0Q2hpbGRJbmRleCA9IG5leHRDb2x1bW5Ob2Rlcy5maW5kSW5kZXgoKF9ub2RlKSA9PiBfbm9kZS5pZCA9PT0gY2hpbGRyZW5bMF0uaWQpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGxhc3RDaGlsZEluZGV4ID0gbmV4dENvbHVtbk5vZGVzLmZpbmRJbmRleChcbiAgICAgICAgICAgICAgICAgICAgKF9ub2RlKSA9PiBfbm9kZS5pZCA9PT0gY2hpbGRyZW5bY2hpbGRyZW4ubGVuZ3RoIC0gMV0uaWRcbiAgICAgICAgICAgICAgICApO1xuXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IGZpcnN0Q2hpbGRJbmRleCArIDE7IGkgPD0gbGFzdENoaWxkSW5kZXg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBtZXRhZGF0YVtuZXh0Q29sdW1uTm9kZXNbaV0uaWRdLnJlbmRlclZlcnRpY2FsTGluZUJlZm9yZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCBwcmV2Q29sdW1uTm9kZXMgPSBncmFwaFByZXZDb2x1bW4/Lm5vZGVzO1xuICAgICAgICAgICAgaWYgKG5vZGVNZXRhZGF0YS5wYXJhbGxlbEVuZCAmJiBwcmV2Q29sdW1uTm9kZXMpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBmaXJzdFBhcmVudEluZGV4ID0gcHJldkNvbHVtbk5vZGVzLmZpbmRJbmRleCgoX25vZGUpID0+IF9ub2RlLmlkID09PSBub2RlTWV0YWRhdGEucGFyZW50c1swXS5pZCk7XG4gICAgICAgICAgICAgICAgY29uc3QgbGFzdFBhcmVudEluZGV4ID0gcHJldkNvbHVtbk5vZGVzLmZpbmRJbmRleChcbiAgICAgICAgICAgICAgICAgICAgKF9ub2RlKSA9PiBfbm9kZS5pZCA9PT0gbm9kZU1ldGFkYXRhLnBhcmVudHNbbm9kZU1ldGFkYXRhLnBhcmVudHMubGVuZ3RoIC0gMV0uaWRcbiAgICAgICAgICAgICAgICApO1xuXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IGZpcnN0UGFyZW50SW5kZXggKyAxOyBpIDw9IGxhc3RQYXJlbnRJbmRleDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIG1ldGFkYXRhW3ByZXZDb2x1bW5Ob2Rlc1tpXS5pZF0ucmVuZGVyVmVydGljYWxMaW5lQWZ0ZXIgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbm9kZU1ldGFkYXRhLnJlbmRlclZlcnRpY2FsTGluZUJlZm9yZSA9ICFub2RlTWV0YWRhdGEucmVuZGVyVmVydGljYWxMaW5lQmVmb3JlXG4gICAgICAgICAgICAgICAgPyBub2RlSW5kZXggPiAwICYmICFwcmV2SE5vZGVcbiAgICAgICAgICAgICAgICA6IHRydWU7XG4gICAgICAgICAgICBub2RlTWV0YWRhdGEucmVuZGVyVmVydGljYWxMaW5lQWZ0ZXIgPSAhbm9kZU1ldGFkYXRhLnJlbmRlclZlcnRpY2FsTGluZUFmdGVyXG4gICAgICAgICAgICAgICAgPyBub2RlSW5kZXggPiAwICYmICFuZXh0SE5vZGVcbiAgICAgICAgICAgICAgICA6IHRydWU7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIG1ldGFkYXRhO1xufVxuXG5mdW5jdGlvbiBmaW5kUm9vdE5vZGVzKG5vZGVzOiBBcHByb3ZhbE5vZGVbXSk6IEFwcHJvdmFsTm9kZVtdIHtcbiAgICByZXR1cm4gbm9kZXMuZmlsdGVyKChub2RlKSA9PiBub2Rlcy5ldmVyeSgobikgPT4gIWlzTm9kZVRhcmdldHNJbmNsdWRlSWQobiwgbm9kZS5pZCkpKTtcbn1cblxuZnVuY3Rpb24gZmluZEZpbmFsTm9kZXMobm9kZXM6IEFwcHJvdmFsTm9kZVtdKTogQXBwcm92YWxOb2RlW10ge1xuICAgIHJldHVybiBub2Rlcy5maWx0ZXIoKG5vZGUpID0+ICFub2RlLnRhcmdldHMubGVuZ3RoKTtcbn1cblxuLyoqIEZpbmQgYWxsIHBvc3NpYmxlIHBhdGhzIChsb25nZXN0IHBhdGggbGVuZ3RoID0gYW1vdW50IG9mIHRoZSBjb2x1bW5zIGluIHRoZSBncmFwaCkgKi9cbmZ1bmN0aW9uIGdldFBhdGhzKHJvb3ROb2RlczogQXBwcm92YWxHcmFwaE5vZGVbXSwgbm9kZXM6IEFwcHJvdmFsR3JhcGhOb2RlW10pOiBBcHByb3ZhbEdyYXBoTm9kZVtdW10ge1xuICAgIGNvbnN0IHBhdGhzOiBBcHByb3ZhbEdyYXBoTm9kZVtdW10gPSBbXTtcbiAgICBjb25zdCBxdWV1ZTogQXBwcm92YWxHcmFwaE5vZGVbXVtdID0gW107XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJvb3ROb2Rlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBxdWV1ZS5wdXNoKFtyb290Tm9kZXNbaV1dKTtcblxuICAgICAgICB3aGlsZSAocXVldWUubGVuZ3RoKSB7XG4gICAgICAgICAgICBjb25zdCBwYXRoID0gcXVldWUucG9wKCk7XG4gICAgICAgICAgICBsZXQgbGFzdE5vZGVJblBhdGg6IEFwcHJvdmFsR3JhcGhOb2RlIHwgdW5kZWZpbmVkO1xuICAgICAgICAgICAgaWYgKHBhdGgpIHtcbiAgICAgICAgICAgICAgICBsYXN0Tm9kZUluUGF0aCA9IHBhdGhbcGF0aC5sZW5ndGggLSAxXTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLyoqIEluZGljYXRlcyBhYm91dCBhbiBlcnJvciAqL1xuICAgICAgICAgICAgaWYgKCFsYXN0Tm9kZUluUGF0aCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBbXTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCFsYXN0Tm9kZUluUGF0aC50YXJnZXRzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHBhdGhzLnB1c2gocGF0aCEpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBsYXN0Tm9kZUluUGF0aC50YXJnZXRzLmZvckVhY2goKHRhcmdldElkKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRhcmdldE5vZGUgPSBub2Rlcy5maW5kKChub2RlKSA9PiBub2RlLmlkID09PSB0YXJnZXRJZCk7XG4gICAgICAgICAgICAgICAgICAgIGlmICghdGFyZ2V0Tm9kZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG5ld1BhdGggPSBbLi4ucGF0aCEsIHRhcmdldE5vZGVdO1xuXG4gICAgICAgICAgICAgICAgICAgIHF1ZXVlLnB1c2gobmV3UGF0aCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcGF0aHM7XG59XG5cbi8qKiBUcmltIHBhdGhzIChyZW1vdmUgYmxhbmsgbm9kZXMgYXQgdGhlIGVuZCBvZiB0aGUgcGF0aHMpICovXG5mdW5jdGlvbiB0cmltUGF0aHMocGF0aHM6IEFwcHJvdmFsR3JhcGhOb2RlW11bXSk6IEFwcHJvdmFsR3JhcGhOb2RlW11bXSB7XG4gICAgY29uc3QgcHJvY2Vzc2VkUGF0aHM6IEFwcHJvdmFsR3JhcGhOb2RlW11bXSA9IFtdO1xuXG4gICAgcGF0aHMuZm9yRWFjaCgocGF0aCkgPT4ge1xuICAgICAgICBsZXQgaW5kZXhUb1NsaWNlID0gcGF0aC5sZW5ndGggLSAxO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSBwYXRoLmxlbmd0aCAtIDE7IGkgPiAwOyAtLWkpIHtcbiAgICAgICAgICAgIGlmIChwYXRoW2ldLmJsYW5rKSB7XG4gICAgICAgICAgICAgICAgaW5kZXhUb1NsaWNlID0gaSAtIDE7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcGF0aFtpbmRleFRvU2xpY2VdLnRhcmdldHMgPSBbXTtcbiAgICAgICAgcHJvY2Vzc2VkUGF0aHMucHVzaChwYXRoLnNsaWNlKDAsIGluZGV4VG9TbGljZSArIDEpKTtcbiAgICB9KTtcblxuICAgIHJldHVybiBwcm9jZXNzZWRQYXRocztcbn1cblxuLyoqIE1ha2UgYWxsIHBhdGhzIHRoZSBzYW1lIGxlbmd0aCAoPSBsb25nZXN0IHBhdGggbGVuZ3RoKSB0byBtYWtlIGV2ZXJ5IHVuaXF1ZSBub2RlIGJlIHByZXNlbnQgYXQgdGhlIHNhbWUgaW5kZXggYWNyb3NzIGFsbCBwYXRocyAqL1xuZnVuY3Rpb24gbWFrZVBhdGhzU2FtZUxlbmd0aChwYXRoczogQXBwcm92YWxHcmFwaE5vZGVbXVtdKTogQXBwcm92YWxHcmFwaE5vZGVbXVtdIHtcbiAgICBjb25zdCBwcm9jZXNzZWRQYXRoczogQXBwcm92YWxHcmFwaE5vZGVbXVtdID0gW107XG4gICAgY29uc3QgcGF0aExlbmd0aHMgPSBwYXRocy5tYXAoKHBhdGgpID0+IHBhdGgubGVuZ3RoKTtcbiAgICBjb25zdCBsb25nZXN0UGF0aExlbmd0aCA9IE1hdGgubWF4KC4uLnBhdGhMZW5ndGhzKTtcblxuICAgIHBhdGhzLmZvckVhY2goKHBhdGgpID0+IHtcbiAgICAgICAgaWYgKHBhdGgubGVuZ3RoID09PSBsb25nZXN0UGF0aExlbmd0aCkge1xuICAgICAgICAgICAgcHJvY2Vzc2VkUGF0aHMucHVzaChwYXRoKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHBhdGguZm9yRWFjaCgobm9kZSwgbm9kZUluZGV4KSA9PiB7XG4gICAgICAgICAgICAvKiogVHJ5IHRvIGdldCBibGFuayBub2RlcyBmcm9tIGFscmVhZHkgcHJvY2Vzc2VkIHBhdGhzIGFzIHBhdGhzIG1heSBiZSB0aGUgc2FtZSB3aXRoaW4gc29tZSBwYXJ0ICovXG4gICAgICAgICAgICBsZXQgYmxhbmtOb2RlcyA9IGdldEJsYW5rTm9kZXNBZnRlck5vZGUobm9kZSwgcHJvY2Vzc2VkUGF0aHMpO1xuICAgICAgICAgICAgaWYgKGJsYW5rTm9kZXMubGVuZ3RoICYmIGJsYW5rTm9kZXNbMF0uaWQgIT09IHBhdGhbbm9kZUluZGV4ICsgMV0/LmlkKSB7XG4gICAgICAgICAgICAgICAgcGF0aC5zcGxpY2Uobm9kZUluZGV4ICsgMSwgMCwgLi4uYmxhbmtOb2Rlcyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCBub2RlSW5kZXhJblBhdGhzID0gcGF0aHMubWFwKChfcGF0aCkgPT4gX3BhdGguaW5kZXhPZihub2RlKSk7XG4gICAgICAgICAgICBjb25zdCBtb3N0RmFyTm9kZUluZGV4SW5QYXRocyA9IE1hdGgubWF4KC4uLm5vZGVJbmRleEluUGF0aHMpO1xuXG4gICAgICAgICAgICBpZiAobm9kZUluZGV4IDwgbW9zdEZhck5vZGVJbmRleEluUGF0aHMpIHtcbiAgICAgICAgICAgICAgICBibGFua05vZGVzID0gZ2V0QmxhbmtOb2Rlcyhtb3N0RmFyTm9kZUluZGV4SW5QYXRocyAtIG5vZGVJbmRleCwgcGF0aFtub2RlSW5kZXggLSAxXS5zdGF0dXMpO1xuXG4gICAgICAgICAgICAgICAgYmxhbmtOb2Rlc1tibGFua05vZGVzLmxlbmd0aCAtIDFdLnRhcmdldHMgPSBbbm9kZS5pZF07XG4gICAgICAgICAgICAgICAgcGF0aFtub2RlSW5kZXggLSAxXS50YXJnZXRzID0gW2JsYW5rTm9kZXNbMF0uaWRdO1xuXG4gICAgICAgICAgICAgICAgcGF0aC5zcGxpY2Uobm9kZUluZGV4LCAwLCAuLi5ibGFua05vZGVzKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChub2RlSW5kZXggPT09IG1vc3RGYXJOb2RlSW5kZXhJblBhdGhzICYmIG5vZGVJbmRleCA9PT0gcGF0aC5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICAgICAgYmxhbmtOb2RlcyA9IGdldEJsYW5rTm9kZXMobG9uZ2VzdFBhdGhMZW5ndGggLSBwYXRoLmxlbmd0aCwgcGF0aFtub2RlSW5kZXhdLnN0YXR1cyk7XG5cbiAgICAgICAgICAgICAgICBwYXRoW25vZGVJbmRleF0udGFyZ2V0cyA9IFtibGFua05vZGVzWzBdLmlkXTtcblxuICAgICAgICAgICAgICAgIHBhdGguc3BsaWNlKG5vZGVJbmRleCArIDEsIDAsIC4uLmJsYW5rTm9kZXMpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgcHJvY2Vzc2VkUGF0aHMucHVzaChwYXRoKTtcbiAgICB9KTtcblxuICAgIHJldHVybiBwcm9jZXNzZWRQYXRocztcbn1cblxuLyoqIFRyeSB0byBnZXQgYmxhbmsgbm9kZXMgZnJvbSBhbHJlYWR5IHByb2Nlc3NlZCBwYXRocyBhcyBwYXRocyBtYXkgYmUgdGhlIHNhbWUgd2l0aGluIHNvbWUgcGFydCAqL1xuZnVuY3Rpb24gZ2V0QmxhbmtOb2Rlc0FmdGVyTm9kZShub2RlOiBBcHByb3ZhbEdyYXBoTm9kZSwgcGF0aHM6IEFwcHJvdmFsR3JhcGhOb2RlW11bXSk6IEFwcHJvdmFsR3JhcGhOb2RlW10ge1xuICAgIGNvbnN0IGJsYW5rTm9kZXM6IEFwcHJvdmFsR3JhcGhOb2RlW10gPSBbXTtcblxuICAgIGNvbnN0IHBhdGhXaXRoQmxhbmtOb2RlQWZ0ZXIgPSBwYXRocy5maW5kKChwYXRoKSA9PiB7XG4gICAgICAgIGNvbnN0IG5vZGVJbmRleCA9IHBhdGguaW5kZXhPZihub2RlKTtcbiAgICAgICAgcmV0dXJuIG5vZGVJbmRleCA+IC0xICYmIHBhdGhbbm9kZUluZGV4ICsgMV0/LmJsYW5rO1xuICAgIH0pO1xuXG4gICAgaWYgKHBhdGhXaXRoQmxhbmtOb2RlQWZ0ZXIpIHtcbiAgICAgICAgY29uc3Qgbm9kZUluZGV4ID0gcGF0aFdpdGhCbGFua05vZGVBZnRlci5pbmRleE9mKG5vZGUpICsgMTtcbiAgICAgICAgY29uc3QgbmV4dE5vdEJsYW5rTm9kZUluZGV4ID0gcGF0aFdpdGhCbGFua05vZGVBZnRlci5maW5kSW5kZXgoXG4gICAgICAgICAgICAoX25vZGUsIF9pbmRleCkgPT4gX2luZGV4ID4gbm9kZUluZGV4ICYmICFfbm9kZS5ibGFua1xuICAgICAgICApO1xuXG4gICAgICAgIGJsYW5rTm9kZXMucHVzaChcbiAgICAgICAgICAgIC4uLnBhdGhXaXRoQmxhbmtOb2RlQWZ0ZXIuc2xpY2Uobm9kZUluZGV4LCBuZXh0Tm90QmxhbmtOb2RlSW5kZXggPiAwID8gbmV4dE5vdEJsYW5rTm9kZUluZGV4IDogdW5kZWZpbmVkKVxuICAgICAgICApO1xuICAgIH1cblxuICAgIHJldHVybiBibGFua05vZGVzO1xufVxuXG4vKiogR2VuZXJhdGUgYmxhbmsgbm9kZXMgc2VxdWVudGlhbCAqL1xuZnVuY3Rpb24gZ2V0QmxhbmtOb2Rlcyhjb3VudDogbnVtYmVyLCBzdGF0dXM6IEFwcHJvdmFsU3RhdHVzKTogQXBwcm92YWxHcmFwaE5vZGVbXSB7XG4gICAgY29uc3Qgbm9kZXM6IEFwcHJvdmFsR3JhcGhOb2RlW10gPSBbXTtcblxuICAgIGxldCBub2RlOiBBcHByb3ZhbEdyYXBoTm9kZTtcbiAgICBsZXQgbm9kZUlkOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cbiAgICBmb3IgKGxldCBpID0gY291bnQ7IGkgPiAwOyBpLS0pIHtcbiAgICAgICAgbm9kZSA9IE9iamVjdC5hc3NpZ24oe30sIGdldEJsYW5rQXBwcm92YWxHcmFwaE5vZGUoKSwgeyB0YXJnZXRzOiBub2RlSWQgPyBbbm9kZUlkXSA6IFtdLCBzdGF0dXMgfSk7XG4gICAgICAgIG5vZGVJZCA9IG5vZGUuaWQ7XG5cbiAgICAgICAgbm9kZXMudW5zaGlmdChub2RlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbm9kZXM7XG59XG5cbi8qKiBTb3J0IHBhdGhzIGJ5IHRoZWlyIGxpa2VuZXNzICg9IGNvdW50IG9mIHRoZSBzYW1lIG5vZGVzIHJlbGF0aXZlbHkgdG8gdGhlIG90aGVyIHBhdGhzKSBiZXR3ZWVuIGVhY2ggb3RoZXIgdG8gYXZvaWQgcGF0aHMgY3Jvc3NpbmcgKi9cbmZ1bmN0aW9uIHNvcnRQYXRocyhwYXRoczogQXBwcm92YWxHcmFwaE5vZGVbXVtdKTogQXBwcm92YWxHcmFwaE5vZGVbXVtdIHtcbiAgICBpZiAocGF0aHMubGVuZ3RoID09PSAxKSB7XG4gICAgICAgIHJldHVybiBwYXRocztcbiAgICB9XG5cbiAgICAvKiogW3BhdGhJbmRleCwgcmVsYXRpdmVUb1BhdGhJbmRleCwgc2FtZU5vZGVzQ291bnRdW10gKi9cbiAgICBsZXQgc2ltaWxhcml0aWVzOiBudW1iZXJbXVtdID0gW107XG4gICAgbGV0IHBhdGhTaW1pbGFyaXR5ID0gMDtcblxuICAgIHBhdGhzLmZvckVhY2goKHBhdGgsIGluZGV4KSA9PiB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGF0aHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChpbmRleCAhPT0gaSAmJiAhc2ltaWxhcml0aWVzLnNvbWUoKGxpa2VseSkgPT4gaW5kZXggPT09IGxpa2VseVsxXSAmJiBpID09PSBsaWtlbHlbMF0pKSB7XG4gICAgICAgICAgICAgICAgcGF0aFNpbWlsYXJpdHkgPSAwO1xuXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBwYXRoLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChwYXRoW2pdLmlkID09PSBwYXRoc1tpXVtqXS5pZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGF0aFNpbWlsYXJpdHkrKztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHNpbWlsYXJpdGllcy5wdXNoKFtpbmRleCwgaSwgcGF0aFNpbWlsYXJpdHldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgc2ltaWxhcml0aWVzID0gc2ltaWxhcml0aWVzLnNvcnQoKGEsIGIpID0+IChhWzJdID4gYlsyXSA/IC0xIDogMSkpO1xuXG4gICAgY29uc3QgdXNlZFBhdGhJbmRleGVzOiBudW1iZXJbXSA9IFtdO1xuICAgIGNvbnN0IHByb2Nlc3NlZFBhdGhzOiBBcHByb3ZhbEdyYXBoTm9kZVtdW10gPSBbXTtcblxuICAgIHNpbWlsYXJpdGllcy5mb3JFYWNoKChzaW1pbGFyaXR5KSA9PiB7XG4gICAgICAgIGlmICghdXNlZFBhdGhJbmRleGVzLnNvbWUoKGkpID0+IGkgPT09IHNpbWlsYXJpdHlbMF0pKSB7XG4gICAgICAgICAgICBwcm9jZXNzZWRQYXRocy5wdXNoKHBhdGhzW3NpbWlsYXJpdHlbMF1dKTtcbiAgICAgICAgICAgIHVzZWRQYXRoSW5kZXhlcy5wdXNoKHNpbWlsYXJpdHlbMF0pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCF1c2VkUGF0aEluZGV4ZXMuc29tZSgoaSkgPT4gaSA9PT0gc2ltaWxhcml0eVsxXSkpIHtcbiAgICAgICAgICAgIHByb2Nlc3NlZFBhdGhzLnB1c2gocGF0aHNbc2ltaWxhcml0eVsxXV0pO1xuICAgICAgICAgICAgdXNlZFBhdGhJbmRleGVzLnB1c2goc2ltaWxhcml0eVsxXSk7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBwcm9jZXNzZWRQYXRocztcbn1cblxuLyoqIFJlbW92ZSBcImR1cGxpY2F0ZVwiIG5vZGVzIGluIHBhdGhzIChtYWtlIGV2ZXJ5IHVuaXF1ZSBub2RlIGJlIHByZXNlbnQgb25seSBvbmNlIGFjcm9zcyBhbGwgcGF0aHMpICovXG5mdW5jdGlvbiByZW1vdmVEdXBsaWNhdGVOb2RlcyhwYXRoczogQXBwcm92YWxHcmFwaE5vZGVbXVtdKTogQXBwcm92YWxHcmFwaE5vZGVbXVtdIHtcbiAgICBjb25zdCBwcm9jZXNzZWRQYXRoczogQXBwcm92YWxHcmFwaE5vZGVbXVtdID0gW107XG5cbiAgICBwYXRocy5mb3JFYWNoKChwYXRoLCBpbmRleCkgPT4ge1xuICAgICAgICBwYXRoLmZvckVhY2goKG5vZGUpID0+IHtcbiAgICAgICAgICAgIHBhdGhzLmZvckVhY2goKF9wYXRoLCBfaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBpc05vZGVJblBhdGggPSBfaW5kZXggIT09IGluZGV4ICYmIF9wYXRoLmluZGV4T2Yobm9kZSkgPiAtMTtcblxuICAgICAgICAgICAgICAgIGlmIChpc05vZGVJblBhdGgpIHtcbiAgICAgICAgICAgICAgICAgICAgLyoqIEluc3RlYWQgb2Ygbm9kZSBwbGFjZSBzcGFjZSBub2RlICovXG4gICAgICAgICAgICAgICAgICAgIF9wYXRoLnNwbGljZShfcGF0aC5pbmRleE9mKG5vZGUpLCAxLCBnZXRTcGFjZUFwcHJvdmFsR3JhcGhOb2RlKCkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcblxuICAgICAgICBwcm9jZXNzZWRQYXRocy5wdXNoKHBhdGgpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHByb2Nlc3NlZFBhdGhzO1xufVxuXG4vKiogUmVtb3ZlIGVtcHR5IHBhdGhzICh3aGljaCBjb250YWlucyBvbmx5IGVtcHR5IG5vZGVzKSAqL1xuZnVuY3Rpb24gcmVtb3ZlRW1wdHlQYXRocyhwYXRoczogQXBwcm92YWxHcmFwaE5vZGVbXVtdKTogQXBwcm92YWxHcmFwaE5vZGVbXVtdIHtcbiAgICByZXR1cm4gcGF0aHMucmVkdWNlKChhY2MsIHBhdGgpID0+IHtcbiAgICAgICAgaWYgKCFwYXRoLmV2ZXJ5KChub2RlKSA9PiBub2RlLnNwYWNlKSkge1xuICAgICAgICAgICAgYWNjLnB1c2gocGF0aCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gYWNjO1xuICAgIH0sIFtdIGFzIEFwcHJvdmFsR3JhcGhOb2RlW11bXSk7XG59XG5cbi8qKiBUcmFuc2Zvcm0gcGF0aHMgaW50byB0aGUgY29sdW1ucyAoaXQncyBwb3NzaWJsZSBhcyB0aGV5J3JlIGFsbCB0aGUgc2FtZSBsZW5ndGgpICovXG5mdW5jdGlvbiBnZXRDb2x1bW5zRnJvbVBhdGhzKHBhdGhzOiBBcHByb3ZhbEdyYXBoTm9kZVtdW10pOiBBcHByb3ZhbEdyYXBoTm9kZVtdW10ge1xuICAgIGNvbnN0IGNvbHVtbnM6IEFwcHJvdmFsR3JhcGhOb2RlW11bXSA9IFtdO1xuICAgIGxldCBjb2x1bW46IEFwcHJvdmFsR3JhcGhOb2RlW10gPSBbXTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGF0aHNbMF0ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29sdW1uID0gW107XG5cbiAgICAgICAgZm9yIChsZXQgdiA9IDA7IHYgPCBwYXRocy5sZW5ndGg7IHYrKykge1xuICAgICAgICAgICAgY29sdW1uLnB1c2gocGF0aHNbdl1baV0pO1xuICAgICAgICB9XG5cbiAgICAgICAgY29sdW1ucy5wdXNoKGNvbHVtbik7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbHVtbnM7XG59XG5cbi8qKiBUcmltIHNwYWNlIG5vZGVzIGF0IHRoZSBlbmQgb2YgdGhlIGNvbHVtbnMuICovXG5mdW5jdGlvbiB0cmltQ29sdW1ucyhjb2x1bW5zOiBBcHByb3ZhbEdyYXBoTm9kZVtdW10pOiBBcHByb3ZhbEdyYXBoTm9kZVtdW10ge1xuICAgIGNvbnN0IHByb2Nlc3NlZENvbHVtbnM6IEFwcHJvdmFsR3JhcGhOb2RlW11bXSA9IFtdO1xuXG4gICAgY29sdW1ucy5mb3JFYWNoKChjb2x1bW4pID0+IHtcbiAgICAgICAgbGV0IGxhc3ROb3RTcGFjZU5vZGVJbmRleDtcblxuICAgICAgICBmb3IgKGxldCBpID0gY29sdW1uLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgICAgICBpZiAoIWNvbHVtbltpXS5zcGFjZSkge1xuICAgICAgICAgICAgICAgIGxhc3ROb3RTcGFjZU5vZGVJbmRleCA9IGk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobGFzdE5vdFNwYWNlTm9kZUluZGV4IDwgY29sdW1uLmxlbmd0aCkge1xuICAgICAgICAgICAgcHJvY2Vzc2VkQ29sdW1ucy5wdXNoKGNvbHVtbi5zbGljZSgwLCBsYXN0Tm90U3BhY2VOb2RlSW5kZXggKyAxKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBwcm9jZXNzZWRDb2x1bW5zLnB1c2goY29sdW1uKTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHByb2Nlc3NlZENvbHVtbnM7XG59XG5cbi8qKiBSZW1vdmUgZW1wdHkgY29sdW1ucyAod2hlcmUgZXZlcnkgbm9kZSBpcyBhIGJsYW5rIG5vZGUpICAqL1xuZnVuY3Rpb24gcmVtb3ZlRW1wdHlDb2x1bW5zKGNvbHVtbnM6IEFwcHJvdmFsR3JhcGhOb2RlW11bXSk6IEFwcHJvdmFsR3JhcGhOb2RlW11bXSB7XG4gICAgY29uc3QgcHJvY2Vzc2VkQ29sdW1uczogQXBwcm92YWxHcmFwaE5vZGVbXVtdID0gW107XG5cbiAgICBjb2x1bW5zLmZvckVhY2goKGNvbHVtbikgPT4ge1xuICAgICAgICBjb25zdCBhcmVBbGxOb2Rlc0VtcHR5ID0gY29sdW1uLmV2ZXJ5KChub2RlKSA9PiBub2RlLmJsYW5rIHx8IG5vZGUuc3BhY2UpO1xuXG4gICAgICAgIGlmIChhcmVBbGxOb2Rlc0VtcHR5KSB7XG4gICAgICAgICAgICBjb2x1bW4uZm9yRWFjaCgobm9kZSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChub2RlLmJsYW5rKSB7XG4gICAgICAgICAgICAgICAgICAgIC8qKiBDb25uZWN0IHByZXZpb3VzIGNvbHVtbiB0byB0aGUgbmV4dCBjb2x1bW4sIG9taXR0aW5nIGN1cnJlbnQgY29sdW1uLiAqL1xuICAgICAgICAgICAgICAgICAgICByZXBsYWNlVGFyZ2V0cyhub2RlLmlkLCBub2RlLnRhcmdldHMsIGNvbHVtbnMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcHJvY2Vzc2VkQ29sdW1ucy5wdXNoKGNvbHVtbik7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBwcm9jZXNzZWRDb2x1bW5zO1xufVxuXG5mdW5jdGlvbiByZXBsYWNlVGFyZ2V0cyhyZXBsYWNlSWQ6IHN0cmluZywgcmVwbGFjZVdpdGhJZDogc3RyaW5nW10sIGNvbHVtbnM6IEFwcHJvdmFsR3JhcGhOb2RlW11bXSk6IHZvaWQge1xuICAgIGNvbHVtbnMuZm9yRWFjaCgoY29sdW1uKSA9PiB7XG4gICAgICAgIGNvbHVtbi5mb3JFYWNoKChuKSA9PiB7XG4gICAgICAgICAgICBpZiAoaXNOb2RlVGFyZ2V0c0luY2x1ZGVJZChuLCByZXBsYWNlSWQpKSB7XG4gICAgICAgICAgICAgICAgbi50YXJnZXRzID0gbi50YXJnZXRzLmZpbHRlcigoX2lkKSA9PiBfaWQgIT09IHJlcGxhY2VJZCk7XG4gICAgICAgICAgICAgICAgbi50YXJnZXRzLnB1c2goLi4ucmVwbGFjZVdpdGhJZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0pO1xufVxuXG4vKiogVHJhbnNmb3JtIGNvbHVtbnMgaW50byB0aGUgZ3JhcGggY29sdW1ucyAod2l0aCBhZGRpdGlvbmFsIG1ldGFkYXRhKS4gKi9cbmZ1bmN0aW9uIGdldEdyYXBoQ29sdW1uc0Zyb21QYXRocyhjb2x1bW5zOiBBcHByb3ZhbEdyYXBoTm9kZVtdW10pOiBBcHByb3ZhbEdyYXBoQ29sdW1uW10ge1xuICAgIGNvbnN0IGdyYXBoQ29sdW1uczogQXBwcm92YWxHcmFwaENvbHVtbltdID0gW107XG5cbiAgICBjb2x1bW5zLmZvckVhY2goKGNvbHVtbiwgaW5kZXgpID0+IHtcbiAgICAgICAgY29sdW1uLmZvckVhY2goKG5vZGUpID0+IChub2RlLmNvbEluZGV4ID0gaW5kZXgpKTtcblxuICAgICAgICBncmFwaENvbHVtbnMucHVzaCh7XG4gICAgICAgICAgICBub2RlczogY29sdW1uLFxuICAgICAgICAgICAgaW5kZXgsXG4gICAgICAgICAgICBhbGxOb2Rlc0FwcHJvdmVkOiBjb2x1bW4uZXZlcnkoKG5vZGUpID0+IGlzTm9kZUFwcHJvdmVkKG5vZGUpKVxuICAgICAgICB9KTtcbiAgICB9KTtcblxuICAgIHJldHVybiBncmFwaENvbHVtbnM7XG59XG4iXX0=