import { ApprovalGraphNode, ApprovalNode, ApprovalTeam, ApprovalUser } from '../interfaces';
import { ApprovalFlowGraph } from '../approval-flow-graph';
/** @hidden */
export declare function isNodeApproved(node: ApprovalNode): boolean;
/** @hidden */
export declare function isNodeStarted(node: ApprovalNode): boolean;
/** @hidden */
export declare function displayTeamFn(team: ApprovalTeam): string;
/** @hidden */
export declare function displayUserFn(user: ApprovalUser): string;
/** @hidden */
export declare function userValueFn(user: ApprovalUser): string;
/** @hidden */
export declare function filterByName(obj: {
    name: string;
}, searchString: string): boolean;
/** @hidden */
export declare function trackByFn(index: number, item: {
    id: string;
}): number | string;
/** @hidden */
export declare function getGraphNodes(graph: ApprovalFlowGraph): ApprovalGraphNode[];
/** @hidden */
export declare function getParentNodes(node: ApprovalNode, nodes: ApprovalNode[]): ApprovalNode[];
/** @hidden */
export declare function getBlankApprovalGraphNode(): ApprovalGraphNode;
/** @hidden */
export declare function getSpaceApprovalGraphNode(): ApprovalGraphNode;
/** @hidden */
export declare function isNodeTargetsIncludeId(node: ApprovalNode, id: string): boolean;
//# sourceMappingURL=index.d.ts.map