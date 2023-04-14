import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { isNodeApproved } from '../helpers';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@fundamental-ngx/core/content-density";
import * as i3 from "@fundamental-ngx/core/button";
import * as i4 from "@fundamental-ngx/i18n";
function ApprovalFlowToolbarActionsComponent_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 3);
    i0.ɵɵlistener("click", function ApprovalFlowToolbarActionsComponent_button_1_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r4); const ctx_r3 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r3._addNode("empty")); });
    i0.ɵɵpipe(1, "fdTranslate");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵproperty("label", i0.ɵɵpipeBind1(1, 1, "platformApprovalFlow.toolbarAddStepButton"));
} }
function ApprovalFlowToolbarActionsComponent_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 3);
    i0.ɵɵlistener("click", function ApprovalFlowToolbarActionsComponent_button_2_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r6); const ctx_r5 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r5.enterEditMode.emit()); });
    i0.ɵɵpipe(1, "fdTranslate");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵproperty("label", i0.ɵɵpipeBind1(1, 1, "platformApprovalFlow.toolbarEditButton"));
} }
function ApprovalFlowToolbarActionsComponent_ng_container_3_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r13 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 3);
    i0.ɵɵlistener("click", function ApprovalFlowToolbarActionsComponent_ng_container_3_button_1_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r13); const ctx_r12 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r12._addNode("before")); });
    i0.ɵɵpipe(1, "fdTranslate");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵproperty("label", i0.ɵɵpipeBind1(1, 1, "platformApprovalFlow.toolbarAddApproversBefore"));
} }
function ApprovalFlowToolbarActionsComponent_ng_container_3_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r15 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 3);
    i0.ɵɵlistener("click", function ApprovalFlowToolbarActionsComponent_ng_container_3_button_2_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r15); const ctx_r14 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r14._addNode("after")); });
    i0.ɵɵpipe(1, "fdTranslate");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵproperty("label", i0.ɵɵpipeBind1(1, 1, "platformApprovalFlow.toolbarAddApproversAfter"));
} }
function ApprovalFlowToolbarActionsComponent_ng_container_3_button_3_Template(rf, ctx) { if (rf & 1) {
    const _r17 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 3);
    i0.ɵɵlistener("click", function ApprovalFlowToolbarActionsComponent_ng_container_3_button_3_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r17); const ctx_r16 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r16._addNode("parallel")); });
    i0.ɵɵpipe(1, "fdTranslate");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵproperty("label", i0.ɵɵpipeBind1(1, 1, "platformApprovalFlow.toolbarAddApproversParallel"));
} }
function ApprovalFlowToolbarActionsComponent_ng_container_3_button_4_Template(rf, ctx) { if (rf & 1) {
    const _r19 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 3);
    i0.ɵɵlistener("click", function ApprovalFlowToolbarActionsComponent_ng_container_3_button_4_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r19); const ctx_r18 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r18.deleteSelectedNodes.emit()); });
    i0.ɵɵpipe(1, "fdTranslate");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵproperty("label", i0.ɵɵpipeBind1(1, 1, "platformApprovalFlow.toolbarRemove"));
} }
function ApprovalFlowToolbarActionsComponent_ng_container_3_button_5_Template(rf, ctx) { if (rf & 1) {
    const _r21 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 3);
    i0.ɵɵlistener("click", function ApprovalFlowToolbarActionsComponent_ng_container_3_button_5_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r21); const ctx_r20 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r20._editSelectedNode()); });
    i0.ɵɵpipe(1, "fdTranslate");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵproperty("label", i0.ɵɵpipeBind1(1, 1, "platformApprovalFlow.toolbarEditApprover"));
} }
function ApprovalFlowToolbarActionsComponent_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, ApprovalFlowToolbarActionsComponent_ng_container_3_button_1_Template, 2, 3, "button", 1);
    i0.ɵɵtemplate(2, ApprovalFlowToolbarActionsComponent_ng_container_3_button_2_Template, 2, 3, "button", 1);
    i0.ɵɵtemplate(3, ApprovalFlowToolbarActionsComponent_ng_container_3_button_3_Template, 2, 3, "button", 1);
    i0.ɵɵtemplate(4, ApprovalFlowToolbarActionsComponent_ng_container_3_button_4_Template, 2, 3, "button", 1);
    i0.ɵɵtemplate(5, ApprovalFlowToolbarActionsComponent_ng_container_3_button_5_Template, 2, 3, "button", 1);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r2._canAddBefore);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r2._canAddAfter);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r2._canAddParallel);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r2._canRemoveSelectedNodes);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r2._canEditNode);
} }
/**
 * @deprecated
 * ApprovalFlowToolbarActions component is depricated since version 0.40.0
 */
export class ApprovalFlowToolbarActionsComponent {
    constructor() {
        /** Whether approval flow in the edit mode */
        this.isEditMode = false;
        /** Event emitted when edit mode toggled */
        this.enterEditMode = new EventEmitter();
        /** Event emitted when node added */
        this.addNode = new EventEmitter();
        /** Event emitted when selected node edited */
        this.editSelectedNode = new EventEmitter();
        /** Event emitted when selected nodes deleted (bulk) */
        this.deleteSelectedNodes = new EventEmitter();
        /** @hidden */
        this._canRemoveSelectedNodes = false;
        /** @hidden */
        this._selectedNodes = [];
    }
    /** Array of selected approval flow graph nodes */
    set selectedNodes(value) {
        this._selectedNodes = value;
        this._canRemoveSelectedNodes =
            !!this.selectedNodes.length &&
                this.selectedNodes.every((node) => !node.disableActions && !node.actionsConfig?.disableRemove);
    }
    get selectedNodes() {
        return this._selectedNodes;
    }
    /** @hidden */
    get _notApprovedSelectedNode() {
        if (this.selectedNodes.length !== 1) {
            return null;
        }
        return !isNodeApproved(this.selectedNodes[0]) ? this.selectedNodes[0] : null;
    }
    /** @hidden */
    get _canAddBefore() {
        const node = this._notApprovedSelectedNode;
        return (!!node &&
            !node.disableActions &&
            !node.actionsConfig?.disableAddBefore &&
            !!this.graphMetadata[node.id].canAddNodeBefore);
    }
    /** @hidden */
    get _canAddAfter() {
        const node = this._notApprovedSelectedNode;
        return (!!node &&
            !node.disableActions &&
            !node.actionsConfig?.disableAddAfter &&
            !!this.graphMetadata[node.id].canAddNodeAfter);
    }
    /** @hidden */
    get _canAddParallel() {
        const node = this._notApprovedSelectedNode;
        return (!!this._notApprovedSelectedNode &&
            !node?.disableActions &&
            !node?.actionsConfig?.disableAddParallel &&
            !!this.graphMetadata[node.id].canAddParallel);
    }
    /** @hidden */
    get _canEditNode() {
        const node = this._notApprovedSelectedNode;
        return !!node && !node.disableActions && !node.actionsConfig?.disableEdit;
    }
    /** @hidden */
    _addNode(target) {
        const node = this.selectedNodes[0];
        this.addNode.emit({ node, target });
    }
    /** @hidden */
    _editSelectedNode() {
        const node = this.selectedNodes[0];
        this.editSelectedNode.emit(node);
    }
}
ApprovalFlowToolbarActionsComponent.ɵfac = function ApprovalFlowToolbarActionsComponent_Factory(t) { return new (t || ApprovalFlowToolbarActionsComponent)(); };
ApprovalFlowToolbarActionsComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ApprovalFlowToolbarActionsComponent, selectors: [["fdp-approval-flow-toolbar-actions"]], hostAttrs: [1, "fdp-approval-flow-toolbar-actions"], inputs: { graph: "graph", graphMetadata: "graphMetadata", selectedNodes: "selectedNodes", isEditMode: "isEditMode" }, outputs: { enterEditMode: "enterEditMode", addNode: "addNode", editSelectedNode: "editSelectedNode", deleteSelectedNodes: "deleteSelectedNodes" }, decls: 4, vars: 3, consts: [["fdCompact", ""], ["fd-button", "", 3, "label", "click", 4, "ngIf"], [4, "ngIf"], ["fd-button", "", 3, "label", "click"]], template: function ApprovalFlowToolbarActionsComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementContainerStart(0, 0);
        i0.ɵɵtemplate(1, ApprovalFlowToolbarActionsComponent_button_1_Template, 2, 3, "button", 1);
        i0.ɵɵtemplate(2, ApprovalFlowToolbarActionsComponent_button_2_Template, 2, 3, "button", 1);
        i0.ɵɵtemplate(3, ApprovalFlowToolbarActionsComponent_ng_container_3_Template, 6, 5, "ng-container", 2);
        i0.ɵɵelementContainerEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", !(ctx.graph == null ? null : ctx.graph.columns == null ? null : ctx.graph.columns.length) && !(ctx.graph == null ? null : ctx.graph.errors));
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", !!(ctx.graph == null ? null : ctx.graph.columns == null ? null : ctx.graph.columns.length) && !ctx.isEditMode);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.isEditMode);
    } }, dependencies: [i1.NgIf, i2.ContentDensityDirective, i3.ButtonComponent, i4.FdTranslatePipe], styles: [".fdp-approval-flow-toolbar-actions .fd-button:not(:last-child){margin-right:.5rem}[dir=rtl] .fdp-approval-flow-toolbar-actions .fd-button:not(:last-child),.fdp-approval-flow-toolbar-actions[dir=rtl] .fd-button:not(:last-child){margin-right:0;margin-left:.5rem}\n"], encapsulation: 2, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ApprovalFlowToolbarActionsComponent, [{
        type: Component,
        args: [{ selector: 'fdp-approval-flow-toolbar-actions', encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, host: {
                    class: 'fdp-approval-flow-toolbar-actions'
                }, template: "<ng-container fdCompact>\n    <button\n        *ngIf=\"!graph?.columns?.length && !graph?.errors\"\n        fd-button\n        [label]=\"'platformApprovalFlow.toolbarAddStepButton' | fdTranslate\"\n        (click)=\"_addNode('empty')\"\n    ></button>\n\n    <button\n        *ngIf=\"!!graph?.columns?.length && !isEditMode\"\n        fd-button\n        [label]=\"'platformApprovalFlow.toolbarEditButton' | fdTranslate\"\n        (click)=\"enterEditMode.emit()\"\n    ></button>\n\n    <ng-container *ngIf=\"isEditMode\">\n        <button\n            *ngIf=\"_canAddBefore\"\n            fd-button\n            [label]=\"'platformApprovalFlow.toolbarAddApproversBefore' | fdTranslate\"\n            (click)=\"_addNode('before')\"\n        ></button>\n\n        <button\n            *ngIf=\"_canAddAfter\"\n            fd-button\n            [label]=\"'platformApprovalFlow.toolbarAddApproversAfter' | fdTranslate\"\n            (click)=\"_addNode('after')\"\n        ></button>\n\n        <button\n            *ngIf=\"_canAddParallel\"\n            fd-button\n            [label]=\"'platformApprovalFlow.toolbarAddApproversParallel' | fdTranslate\"\n            (click)=\"_addNode('parallel')\"\n        ></button>\n\n        <button\n            *ngIf=\"_canRemoveSelectedNodes\"\n            fd-button\n            [label]=\"'platformApprovalFlow.toolbarRemove' | fdTranslate\"\n            (click)=\"deleteSelectedNodes.emit()\"\n        ></button>\n\n        <button\n            *ngIf=\"_canEditNode\"\n            fd-button\n            [label]=\"'platformApprovalFlow.toolbarEditApprover' | fdTranslate\"\n            (click)=\"_editSelectedNode()\"\n        ></button>\n    </ng-container>\n</ng-container>\n", styles: [".fdp-approval-flow-toolbar-actions .fd-button:not(:last-child){margin-right:.5rem}[dir=rtl] .fdp-approval-flow-toolbar-actions .fd-button:not(:last-child),.fdp-approval-flow-toolbar-actions[dir=rtl] .fd-button:not(:last-child){margin-right:0;margin-left:.5rem}\n"] }]
    }], null, { graph: [{
            type: Input
        }], graphMetadata: [{
            type: Input
        }], selectedNodes: [{
            type: Input
        }], isEditMode: [{
            type: Input
        }], enterEditMode: [{
            type: Output
        }], addNode: [{
            type: Output
        }], editSelectedNode: [{
            type: Output
        }], deleteSelectedNodes: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwcm92YWwtZmxvdy10b29sYmFyLWFjdGlvbnMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vbGlicy9wbGF0Zm9ybS9zcmMvbGliL2FwcHJvdmFsLWZsb3cvYXBwcm92YWwtZmxvdy10b29sYmFyLWFjdGlvbnMvYXBwcm92YWwtZmxvdy10b29sYmFyLWFjdGlvbnMuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vbGlicy9wbGF0Zm9ybS9zcmMvbGliL2FwcHJvdmFsLWZsb3cvYXBwcm92YWwtZmxvdy10b29sYmFyLWFjdGlvbnMvYXBwcm92YWwtZmxvdy10b29sYmFyLWFjdGlvbnMuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUtuSCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sWUFBWSxDQUFDOzs7Ozs7OztJQ0p4QyxpQ0FLQztJQURHLG1MQUFTLGVBQUEsZ0JBQVMsT0FBTyxDQUFDLENBQUEsSUFBQzs7SUFDOUIsaUJBQVM7O0lBRk4seUZBQW1FOzs7O0lBSXZFLGlDQUtDO0lBREcsbUxBQVMsZUFBQSwyQkFBb0IsQ0FBQSxJQUFDOztJQUNqQyxpQkFBUzs7SUFGTixzRkFBZ0U7Ozs7SUFLaEUsaUNBS0M7SUFERyxxTUFBUyxlQUFBLGlCQUFTLFFBQVEsQ0FBQyxDQUFBLElBQUM7O0lBQy9CLGlCQUFTOztJQUZOLDhGQUF3RTs7OztJQUk1RSxpQ0FLQztJQURHLHFNQUFTLGVBQUEsaUJBQVMsT0FBTyxDQUFDLENBQUEsSUFBQzs7SUFDOUIsaUJBQVM7O0lBRk4sNkZBQXVFOzs7O0lBSTNFLGlDQUtDO0lBREcscU1BQVMsZUFBQSxpQkFBUyxVQUFVLENBQUMsQ0FBQSxJQUFDOztJQUNq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QTZDO1FBTW5DLGVBQWdCO1FBQWhCLHFDQUFnQjs7dUZETXRCLG1DQUFtQztjQVYvQyxTQUFTOzJCQUNJLG1DQUFtQyxpQkFHOUIsaUJBQWlCLENBQUMsSUFBSSxtQkFDcEIsdUJBQXVCLENBQUMsTUFBTSxRQUN6QztvQkFDRixLQUFLLEVBQUUsbUNBQW1DO2lCQUM3QztnQkFLRCxLQUFLO2tCQURKLEtBQUs7WUFLTixhQUFhO2tCQURaLEtBQUs7WUFLRixhQUFhO2tCQURoQixLQUFLO1lBY04sVUFBVTtrQkFEVCxLQUFLO1lBS04sYUFBYTtrQkFEWixNQUFNO1lBS1AsT0FBTztrQkFETixNQUFNO1lBS1AsZ0JBQWdCO2tCQURmLE1BQU07WUFLUCxtQkFBbUI7a0JBRGxCLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPdXRwdXQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEFwcHJvdmFsRmxvd05vZGVUYXJnZXQgfSBmcm9tICcuLi9hcHByb3ZhbC1mbG93LWFkZC1ub2RlL2FwcHJvdmFsLWZsb3ctYWRkLW5vZGUuY29tcG9uZW50JztcbmltcG9ydCB7IEFwcHJvdmFsRmxvd0dyYXBoLCBBcHByb3ZhbEdyYXBoTWV0YWRhdGEgfSBmcm9tICcuLi9hcHByb3ZhbC1mbG93LWdyYXBoJztcbmltcG9ydCB7IEFwcHJvdmFsR3JhcGhOb2RlIH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9hcHByb3ZhbC1ub2RlJztcbmltcG9ydCB7IGlzTm9kZUFwcHJvdmVkIH0gZnJvbSAnLi4vaGVscGVycyc7XG5cbi8qKlxuICogQGRlcHJlY2F0ZWRcbiAqIEFwcHJvdmFsRmxvd1Rvb2xiYXJBY3Rpb25zIGNvbXBvbmVudCBpcyBkZXByaWNhdGVkIHNpbmNlIHZlcnNpb24gMC40MC4wXG4gKi9cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnZmRwLWFwcHJvdmFsLWZsb3ctdG9vbGJhci1hY3Rpb25zJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vYXBwcm92YWwtZmxvdy10b29sYmFyLWFjdGlvbnMuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWycuL2FwcHJvdmFsLWZsb3ctdG9vbGJhci1hY3Rpb25zLmNvbXBvbmVudC5zY3NzJ10sXG4gICAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgICBob3N0OiB7XG4gICAgICAgIGNsYXNzOiAnZmRwLWFwcHJvdmFsLWZsb3ctdG9vbGJhci1hY3Rpb25zJ1xuICAgIH1cbn0pXG5leHBvcnQgY2xhc3MgQXBwcm92YWxGbG93VG9vbGJhckFjdGlvbnNDb21wb25lbnQge1xuICAgIC8qKiBBcHByb3ZhbCBmbG93IGdyYXBoICovXG4gICAgQElucHV0KClcbiAgICBncmFwaDogQXBwcm92YWxGbG93R3JhcGg7XG5cbiAgICAvKiogQXBwcm92YWwgZmxvdyBncmFwaCBtZXRhZGF0YSAqL1xuICAgIEBJbnB1dCgpXG4gICAgZ3JhcGhNZXRhZGF0YTogQXBwcm92YWxHcmFwaE1ldGFkYXRhO1xuXG4gICAgLyoqIEFycmF5IG9mIHNlbGVjdGVkIGFwcHJvdmFsIGZsb3cgZ3JhcGggbm9kZXMgKi9cbiAgICBASW5wdXQoKVxuICAgIHNldCBzZWxlY3RlZE5vZGVzKHZhbHVlOiBBcHByb3ZhbEdyYXBoTm9kZVtdKSB7XG4gICAgICAgIHRoaXMuX3NlbGVjdGVkTm9kZXMgPSB2YWx1ZTtcblxuICAgICAgICB0aGlzLl9jYW5SZW1vdmVTZWxlY3RlZE5vZGVzID1cbiAgICAgICAgICAgICEhdGhpcy5zZWxlY3RlZE5vZGVzLmxlbmd0aCAmJlxuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZE5vZGVzLmV2ZXJ5KChub2RlKSA9PiAhbm9kZS5kaXNhYmxlQWN0aW9ucyAmJiAhbm9kZS5hY3Rpb25zQ29uZmlnPy5kaXNhYmxlUmVtb3ZlKTtcbiAgICB9XG4gICAgZ2V0IHNlbGVjdGVkTm9kZXMoKTogQXBwcm92YWxHcmFwaE5vZGVbXSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9zZWxlY3RlZE5vZGVzO1xuICAgIH1cblxuICAgIC8qKiBXaGV0aGVyIGFwcHJvdmFsIGZsb3cgaW4gdGhlIGVkaXQgbW9kZSAqL1xuICAgIEBJbnB1dCgpXG4gICAgaXNFZGl0TW9kZSA9IGZhbHNlO1xuXG4gICAgLyoqIEV2ZW50IGVtaXR0ZWQgd2hlbiBlZGl0IG1vZGUgdG9nZ2xlZCAqL1xuICAgIEBPdXRwdXQoKVxuICAgIGVudGVyRWRpdE1vZGUgPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XG5cbiAgICAvKiogRXZlbnQgZW1pdHRlZCB3aGVuIG5vZGUgYWRkZWQgKi9cbiAgICBAT3V0cHV0KClcbiAgICBhZGROb2RlID0gbmV3IEV2ZW50RW1pdHRlcjx7IG5vZGU6IEFwcHJvdmFsR3JhcGhOb2RlOyB0YXJnZXQ6IEFwcHJvdmFsRmxvd05vZGVUYXJnZXQgfT4oKTtcblxuICAgIC8qKiBFdmVudCBlbWl0dGVkIHdoZW4gc2VsZWN0ZWQgbm9kZSBlZGl0ZWQgKi9cbiAgICBAT3V0cHV0KClcbiAgICBlZGl0U2VsZWN0ZWROb2RlID0gbmV3IEV2ZW50RW1pdHRlcjxBcHByb3ZhbEdyYXBoTm9kZT4oKTtcblxuICAgIC8qKiBFdmVudCBlbWl0dGVkIHdoZW4gc2VsZWN0ZWQgbm9kZXMgZGVsZXRlZCAoYnVsaykgKi9cbiAgICBAT3V0cHV0KClcbiAgICBkZWxldGVTZWxlY3RlZE5vZGVzID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xuXG4gICAgLyoqIEBoaWRkZW4gKi9cbiAgICBfY2FuUmVtb3ZlU2VsZWN0ZWROb2RlcyA9IGZhbHNlO1xuXG4gICAgLyoqIEBoaWRkZW4gKi9cbiAgICBwcml2YXRlIF9zZWxlY3RlZE5vZGVzOiBBcHByb3ZhbEdyYXBoTm9kZVtdID0gW107XG5cbiAgICAvKiogQGhpZGRlbiAqL1xuICAgIGdldCBfbm90QXBwcm92ZWRTZWxlY3RlZE5vZGUoKTogQXBwcm92YWxHcmFwaE5vZGUgfCBudWxsIHtcbiAgICAgICAgaWYgKHRoaXMuc2VsZWN0ZWROb2Rlcy5sZW5ndGggIT09IDEpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuICFpc05vZGVBcHByb3ZlZCh0aGlzLnNlbGVjdGVkTm9kZXNbMF0pID8gdGhpcy5zZWxlY3RlZE5vZGVzWzBdIDogbnVsbDtcbiAgICB9XG5cbiAgICAvKiogQGhpZGRlbiAqL1xuICAgIGdldCBfY2FuQWRkQmVmb3JlKCk6IGJvb2xlYW4ge1xuICAgICAgICBjb25zdCBub2RlID0gdGhpcy5fbm90QXBwcm92ZWRTZWxlY3RlZE5vZGU7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICEhbm9kZSAmJlxuICAgICAgICAgICAgIW5vZGUuZGlzYWJsZUFjdGlvbnMgJiZcbiAgICAgICAgICAgICFub2RlLmFjdGlvbnNDb25maWc/LmRpc2FibGVBZGRCZWZvcmUgJiZcbiAgICAgICAgICAgICEhdGhpcy5ncmFwaE1ldGFkYXRhW25vZGUuaWRdLmNhbkFkZE5vZGVCZWZvcmVcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICAvKiogQGhpZGRlbiAqL1xuICAgIGdldCBfY2FuQWRkQWZ0ZXIoKTogYm9vbGVhbiB7XG4gICAgICAgIGNvbnN0IG5vZGUgPSB0aGlzLl9ub3RBcHByb3ZlZFNlbGVjdGVkTm9kZTtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgISFub2RlICYmXG4gICAgICAgICAgICAhbm9kZS5kaXNhYmxlQWN0aW9ucyAmJlxuICAgICAgICAgICAgIW5vZGUuYWN0aW9uc0NvbmZpZz8uZGlzYWJsZUFkZEFmdGVyICYmXG4gICAgICAgICAgICAhIXRoaXMuZ3JhcGhNZXRhZGF0YVtub2RlLmlkXS5jYW5BZGROb2RlQWZ0ZXJcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICAvKiogQGhpZGRlbiAqL1xuICAgIGdldCBfY2FuQWRkUGFyYWxsZWwoKTogYm9vbGVhbiB7XG4gICAgICAgIGNvbnN0IG5vZGUgPSB0aGlzLl9ub3RBcHByb3ZlZFNlbGVjdGVkTm9kZTtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgISF0aGlzLl9ub3RBcHByb3ZlZFNlbGVjdGVkTm9kZSAmJlxuICAgICAgICAgICAgIW5vZGU/LmRpc2FibGVBY3Rpb25zICYmXG4gICAgICAgICAgICAhbm9kZT8uYWN0aW9uc0NvbmZpZz8uZGlzYWJsZUFkZFBhcmFsbGVsICYmXG4gICAgICAgICAgICAhIXRoaXMuZ3JhcGhNZXRhZGF0YVtub2RlIS5pZF0uY2FuQWRkUGFyYWxsZWxcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICAvKiogQGhpZGRlbiAqL1xuICAgIGdldCBfY2FuRWRpdE5vZGUoKTogYm9vbGVhbiB7XG4gICAgICAgIGNvbnN0IG5vZGUgPSB0aGlzLl9ub3RBcHByb3ZlZFNlbGVjdGVkTm9kZTtcblxuICAgICAgICByZXR1cm4gISFub2RlICYmICFub2RlLmRpc2FibGVBY3Rpb25zICYmICFub2RlLmFjdGlvbnNDb25maWc/LmRpc2FibGVFZGl0O1xuICAgIH1cblxuICAgIC8qKiBAaGlkZGVuICovXG4gICAgX2FkZE5vZGUodGFyZ2V0OiBBcHByb3ZhbEZsb3dOb2RlVGFyZ2V0KTogdm9pZCB7XG4gICAgICAgIGNvbnN0IG5vZGUgPSB0aGlzLnNlbGVjdGVkTm9kZXNbMF07XG4gICAgICAgIHRoaXMuYWRkTm9kZS5lbWl0KHsgbm9kZSwgdGFyZ2V0IH0pO1xuICAgIH1cblxuICAgIC8qKiBAaGlkZGVuICovXG4gICAgX2VkaXRTZWxlY3RlZE5vZGUoKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IG5vZGUgPSB0aGlzLnNlbGVjdGVkTm9kZXNbMF07XG4gICAgICAgIHRoaXMuZWRpdFNlbGVjdGVkTm9kZS5lbWl0KG5vZGUpO1xuICAgIH1cbn1cbiIsIjxuZy1jb250YWluZXIgZmRDb21wYWN0PlxuICAgIDxidXR0b25cbiAgICAgICAgKm5nSWY9XCIhZ3JhcGg/LmNvbHVtbnM/Lmxlbmd0aCAmJiAhZ3JhcGg/LmVycm9yc1wiXG4gICAgICAgIGZkLWJ1dHRvblxuICAgICAgICBbbGFiZWxdPVwiJ3BsYXRmb3JtQXBwcm92YWxGbG93LnRvb2xiYXJBZGRTdGVwQnV0dG9uJyB8IGZkVHJhbnNsYXRlXCJcbiAgICAgICAgKGNsaWNrKT1cIl9hZGROb2RlKCdlbXB0eScpXCJcbiAgICA+PC9idXR0b24+XG5cbiAgICA8YnV0dG9uXG4gICAgICAgICpuZ0lmPVwiISFncmFwaD8uY29sdW1ucz8ubGVuZ3RoICYmICFpc0VkaXRNb2RlXCJcbiAgICAgICAgZmQtYnV0dG9uXG4gICAgICAgIFtsYWJlbF09XCIncGxhdGZvcm1BcHByb3ZhbEZsb3cudG9vbGJhckVkaXRCdXR0b24nIHwgZmRUcmFuc2xhdGVcIlxuICAgICAgICAoY2xpY2spPVwiZW50ZXJFZGl0TW9kZS5lbWl0KClcIlxuICAgID48L2J1dHRvbj5cblxuICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJpc0VkaXRNb2RlXCI+XG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICpuZ0lmPVwiX2NhbkFkZEJlZm9yZVwiXG4gICAgICAgICAgICBmZC1idXR0b25cbiAgICAgICAgICAgIFtsYWJlbF09XCIncGxhdGZvcm1BcHByb3ZhbEZsb3cudG9vbGJhckFkZEFwcHJvdmVyc0JlZm9yZScgfCBmZFRyYW5zbGF0ZVwiXG4gICAgICAgICAgICAoY2xpY2spPVwiX2FkZE5vZGUoJ2JlZm9yZScpXCJcbiAgICAgICAgPjwvYnV0dG9uPlxuXG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICpuZ0lmPVwiX2NhbkFkZEFmdGVyXCJcbiAgICAgICAgICAgIGZkLWJ1dHRvblxuICAgICAgICAgICAgW2xhYmVsXT1cIidwbGF0Zm9ybUFwcHJvdmFsRmxvdy50b29sYmFyQWRkQXBwcm92ZXJzQWZ0ZXInIHwgZmRUcmFuc2xhdGVcIlxuICAgICAgICAgICAgKGNsaWNrKT1cIl9hZGROb2RlKCdhZnRlcicpXCJcbiAgICAgICAgPjwvYnV0dG9uPlxuXG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICpuZ0lmPVwiX2NhbkFkZFBhcmFsbGVsXCJcbiAgICAgICAgICAgIGZkLWJ1dHRvblxuICAgICAgICAgICAgW2xhYmVsXT1cIidwbGF0Zm9ybUFwcHJvdmFsRmxvdy50b29sYmFyQWRkQXBwcm92ZXJzUGFyYWxsZWwnIHwgZmRUcmFuc2xhdGVcIlxuICAgICAgICAgICAgKGNsaWNrKT1cIl9hZGROb2RlKCdwYXJhbGxlbCcpXCJcbiAgICAgICAgPjwvYnV0dG9uPlxuXG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICpuZ0lmPVwiX2NhblJlbW92ZVNlbGVjdGVkTm9kZXNcIlxuICAgICAgICAgICAgZmQtYnV0dG9uXG4gICAgICAgICAgICBbbGFiZWxdPVwiJ3BsYXRmb3JtQXBwcm92YWxGbG93LnRvb2xiYXJSZW1vdmUnIHwgZmRUcmFuc2xhdGVcIlxuICAgICAgICAgICAgKGNsaWNrKT1cImRlbGV0ZVNlbGVjdGVkTm9kZXMuZW1pdCgpXCJcbiAgICAgICAgPjwvYnV0dG9uPlxuXG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICpuZ0lmPVwiX2NhbkVkaXROb2RlXCJcbiAgICAgICAgICAgIGZkLWJ1dHRvblxuICAgICAgICAgICAgW2xhYmVsXT1cIidwbGF0Zm9ybUFwcHJvdmFsRmxvdy50b29sYmFyRWRpdEFwcHJvdmVyJyB8IGZkVHJhbnNsYXRlXCJcbiAgICAgICAgICAgIChjbGljayk9XCJfZWRpdFNlbGVjdGVkTm9kZSgpXCJcbiAgICAgICAgPjwvYnV0dG9uPlxuICAgIDwvbmctY29udGFpbmVyPlxuPC9uZy1jb250YWluZXI+XG4iXX0=