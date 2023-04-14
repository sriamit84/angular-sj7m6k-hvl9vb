import { EventEmitter } from '@angular/core';
import { ApprovalFlowNodeTarget } from '../approval-flow-add-node/approval-flow-add-node.component';
import { ApprovalFlowGraph, ApprovalGraphMetadata } from '../approval-flow-graph';
import { ApprovalGraphNode } from '../interfaces/approval-node';
import * as i0 from "@angular/core";
/**
 * @deprecated
 * ApprovalFlowToolbarActions component is depricated since version 0.40.0
 */
export declare class ApprovalFlowToolbarActionsComponent {
    /** Approval flow graph */
    graph: ApprovalFlowGraph;
    /** Approval flow graph metadata */
    graphMetadata: ApprovalGraphMetadata;
    /** Array of selected approval flow graph nodes */
    set selectedNodes(value: ApprovalGraphNode[]);
    get selectedNodes(): ApprovalGraphNode[];
    /** Whether approval flow in the edit mode */
    isEditMode: boolean;
    /** Event emitted when edit mode toggled */
    enterEditMode: EventEmitter<void>;
    /** Event emitted when node added */
    addNode: EventEmitter<{
        node: ApprovalGraphNode;
        target: ApprovalFlowNodeTarget;
    }>;
    /** Event emitted when selected node edited */
    editSelectedNode: EventEmitter<ApprovalGraphNode>;
    /** Event emitted when selected nodes deleted (bulk) */
    deleteSelectedNodes: EventEmitter<void>;
    /** @hidden */
    _canRemoveSelectedNodes: boolean;
    /** @hidden */
    private _selectedNodes;
    /** @hidden */
    get _notApprovedSelectedNode(): ApprovalGraphNode | null;
    /** @hidden */
    get _canAddBefore(): boolean;
    /** @hidden */
    get _canAddAfter(): boolean;
    /** @hidden */
    get _canAddParallel(): boolean;
    /** @hidden */
    get _canEditNode(): boolean;
    /** @hidden */
    _addNode(target: ApprovalFlowNodeTarget): void;
    /** @hidden */
    _editSelectedNode(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ApprovalFlowToolbarActionsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ApprovalFlowToolbarActionsComponent, "fdp-approval-flow-toolbar-actions", never, { "graph": "graph"; "graphMetadata": "graphMetadata"; "selectedNodes": "selectedNodes"; "isEditMode": "isEditMode"; }, { "enterEditMode": "enterEditMode"; "addNode": "addNode"; "editSelectedNode": "editSelectedNode"; "deleteSelectedNodes": "deleteSelectedNodes"; }, never, never, false, never>;
}
//# sourceMappingURL=approval-flow-toolbar-actions.component.d.ts.map