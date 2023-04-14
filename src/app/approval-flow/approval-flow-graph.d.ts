import { ApprovalGraphNode, ApprovalGraphNodeMetadata } from './interfaces';
export interface ApprovalFlowGraph {
    columns: ApprovalGraphColumn[];
    errors?: boolean;
}
export interface ApprovalGraphColumn {
    nodes: ApprovalGraphNode[];
    index?: number;
    allNodesApproved?: boolean;
}
export interface ApprovalGraphMetadata {
    [key: string]: ApprovalGraphNodeMetadata;
}
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
export declare function generateApprovalFlowGraph(nodes: ApprovalGraphNode[]): ApprovalFlowGraph;
/** Generate graph metadata */
export declare function generateApprovalFlowGraphMetadata(graph: ApprovalFlowGraph): ApprovalGraphMetadata;
//# sourceMappingURL=approval-flow-graph.d.ts.map