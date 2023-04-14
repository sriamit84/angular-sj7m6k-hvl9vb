import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, Inject, Injector, Input, Optional, Output, QueryList, TemplateRef, ViewChild, ViewChildren, ViewEncapsulation } from '@angular/core';
import { DOWN_ARROW, LEFT_ARROW, RIGHT_ARROW, UP_ARROW } from '@angular/cdk/keycodes';
import { combineLatest, fromEvent, merge, Subject, Subscription } from 'rxjs';
import { throttleTime, switchMap, mapTo, map, startWith, distinctUntilChanged } from 'rxjs/operators';
import { KeyUtil, RtlService } from '@fundamental-ngx/cdk/utils';
import { GridListComponent } from '@fundamental-ngx/core/grid-list';
import { DialogService } from '@fundamental-ngx/core/dialog';
import { ApprovalFlowApproverDetailsComponent } from './approval-flow-approver-details/approval-flow-approver-details.component';
import { ApprovalFlowNodeComponent } from './approval-flow-node/approval-flow-node.component';
import { APPROVAL_FLOW_NODE_TYPES, ApprovalFlowAddNodeComponent } from './approval-flow-add-node/approval-flow-add-node.component';
import { displayUserFn, getBlankApprovalGraphNode, getGraphNodes, isNodeTargetsIncludeId, trackByFn, userValueFn } from './helpers';
import { ApprovalFlowSelectTypeComponent } from './approval-flow-select-type/approval-flow-select-type.component';
import { generateApprovalFlowGraph, generateApprovalFlowGraphMetadata } from './approval-flow-graph';
import { DATA_PROVIDERS, ApprovalFlowTeamDataSource, ApprovalFlowUserDataSource } from '@fundamental-ngx/platform/shared';
import { cloneDeep, uniqBy } from 'lodash-es';
import * as i0 from "@angular/core";
import * as i1 from "@fundamental-ngx/core/dialog";
import * as i2 from "@fundamental-ngx/cdk/utils";
import * as i3 from "@angular/common";
import * as i4 from "@angular/forms";
import * as i5 from "@fundamental-ngx/core/avatar";
import * as i6 from "@fundamental-ngx/core/bar";
import * as i7 from "@fundamental-ngx/core/content-density";
import * as i8 from "@fundamental-ngx/core/button";
import * as i9 from "@fundamental-ngx/core/icon";
import * as i10 from "@fundamental-ngx/core/grid-list";
import * as i11 from "@fundamental-ngx/core/multi-input";
import * as i12 from "@angular/cdk/drag-drop";
import * as i13 from "@fundamental-ngx/core/illustrated-message";
import * as i14 from "./approval-flow-node/approval-flow-node.component";
import * as i15 from "./approval-flow-messages/approval-flow-messages.component";
import * as i16 from "./approval-flow-toolbar-actions/approval-flow-toolbar-actions.component";
import * as i17 from "@fundamental-ngx/i18n";
const _c0 = ["graphContainerEl"];
const _c1 = ["graphEl"];
const _c2 = ["gridList"];
function ApprovalFlowComponent_fdp_approval_flow_toolbar_actions_7_Template(rf, ctx) { if (rf & 1) {
    const _r8 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "fdp-approval-flow-toolbar-actions", 10);
    i0.ɵɵlistener("enterEditMode", function ApprovalFlowComponent_fdp_approval_flow_toolbar_actions_7_Template_fdp_approval_flow_toolbar_actions_enterEditMode_0_listener() { i0.ɵɵrestoreView(_r8); const ctx_r7 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r7._enterEditMode()); })("addNode", function ApprovalFlowComponent_fdp_approval_flow_toolbar_actions_7_Template_fdp_approval_flow_toolbar_actions_addNode_0_listener($event) { i0.ɵɵrestoreView(_r8); const ctx_r9 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r9._addNode($event.node, $event.target)); })("editSelectedNode", function ApprovalFlowComponent_fdp_approval_flow_toolbar_actions_7_Template_fdp_approval_flow_toolbar_actions_editSelectedNode_0_listener($event) { i0.ɵɵrestoreView(_r8); const ctx_r10 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r10._editNode($event)); })("deleteSelectedNodes", function ApprovalFlowComponent_fdp_approval_flow_toolbar_actions_7_Template_fdp_approval_flow_toolbar_actions_deleteSelectedNodes_0_listener() { i0.ɵɵrestoreView(_r8); const ctx_r11 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r11._deleteSelectedNodes()); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("graph", ctx_r1._graph)("selectedNodes", ctx_r1._selectedNodes)("graphMetadata", ctx_r1._graphMetadata)("isEditMode", ctx_r1._isEditMode);
} }
function ApprovalFlowComponent_div_8_ng_container_4_fd_avatar_1_Template(rf, ctx) { if (rf & 1) {
    const _r17 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "fd-avatar", 15);
    i0.ɵɵlistener("avatarClicked", function ApprovalFlowComponent_div_8_ng_container_4_fd_avatar_1_Template_fd_avatar_avatarClicked_0_listener($event) { const restoredCtx = i0.ɵɵrestoreView(_r17); const watcher_r15 = restoredCtx.$implicit; const ctx_r16 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r16._onWatcherClick(watcher_r15, $event)); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const watcher_r15 = ctx.$implicit;
    i0.ɵɵproperty("image", watcher_r15.imgUrl || "")("label", watcher_r15.name)("clickable", true)("circle", true);
} }
function ApprovalFlowComponent_div_8_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, ApprovalFlowComponent_div_8_ng_container_4_fd_avatar_1_Template, 1, 4, "fd-avatar", 14);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r12 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r12._approvalProcess == null ? null : ctx_r12._approvalProcess.watchers)("ngForTrackBy", ctx_r12._trackByFn);
} }
function ApprovalFlowComponent_div_8_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r19 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 16)(1, "fd-multi-input", 17);
    i0.ɵɵlistener("ngModelChange", function ApprovalFlowComponent_div_8_div_5_Template_fd_multi_input_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r19); const ctx_r18 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r18._selectedWatcherIds = $event); })("ngModelChange", function ApprovalFlowComponent_div_8_div_5_Template_fd_multi_input_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r19); const ctx_r20 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r20._watchersSelectionChanged($event)); });
    i0.ɵɵpipe(2, "fdTranslate");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r13 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("dropdownValues", ctx_r13._usersForWatchersList)("placeholder", i0.ɵɵpipeBind1(2, 6, "platformApprovalFlow.watchersInputPlaceholder"))("displayFn", ctx_r13._displayUserFn)("valueFn", ctx_r13._userValueFn)("showAllButton", true)("ngModel", ctx_r13._selectedWatcherIds);
} }
function ApprovalFlowComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 11)(1, "p", 12);
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "fdTranslate");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(4, ApprovalFlowComponent_div_8_ng_container_4_Template, 2, 2, "ng-container", 7);
    i0.ɵɵtemplate(5, ApprovalFlowComponent_div_8_div_5_Template, 3, 8, "div", 13);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵattribute("aria-label", ctx_r2.watchersLabel);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r2.watchersLabel || i0.ɵɵpipeBind1(3, 4, "platformApprovalFlow.defaultWatchersLabel"), " ");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", !ctx_r2._isEditMode);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r2._isEditMode);
} }
function ApprovalFlowComponent_ng_container_9_ng_container_1_div_2_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r29 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 29);
    i0.ɵɵlistener("click", function ApprovalFlowComponent_ng_container_9_ng_container_1_div_2_button_1_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r29); const ctx_r28 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r28.nextSlide(-1)); });
    i0.ɵɵpipe(1, "fdTranslate");
    i0.ɵɵelement(2, "fd-icon", 30);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r26 = i0.ɵɵnextContext(4);
    i0.ɵɵattribute("aria-label", i0.ɵɵpipeBind1(1, 3, "platformApprovalFlow.prevButtonAriaLabel"));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("glyph", "navigation-" + (ctx_r26._rtl ? "right" : "left") + "-arrow");
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r26._carouselStepsLeft, " ");
} }
function ApprovalFlowComponent_ng_container_9_ng_container_1_div_2_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r31 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 31);
    i0.ɵɵlistener("click", function ApprovalFlowComponent_ng_container_9_ng_container_1_div_2_button_2_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r31); const ctx_r30 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r30.nextSlide()); });
    i0.ɵɵpipe(1, "fdTranslate");
    i0.ɵɵtext(2);
    i0.ɵɵelement(3, "fd-icon", 30);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r27 = i0.ɵɵnextContext(4);
    i0.ɵɵattribute("aria-label", i0.ɵɵpipeBind1(1, 3, "platformApprovalFlow.nextButtonAriaLabel"));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r27._carouselStepsRight, " ");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("glyph", "navigation-" + (ctx_r27._rtl ? "left" : "right") + "-arrow");
} }
function ApprovalFlowComponent_ng_container_9_ng_container_1_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 26);
    i0.ɵɵtemplate(1, ApprovalFlowComponent_ng_container_9_ng_container_1_div_2_button_1_Template, 4, 5, "button", 27);
    i0.ɵɵtemplate(2, ApprovalFlowComponent_ng_container_9_ng_container_1_div_2_button_2_Template, 4, 5, "button", 28);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r22 = i0.ɵɵnextContext(3);
    i0.ɵɵclassProp("fdp-approval-flow-carousel-controls--edit-mode", ctx_r22._isEditMode);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r22._carouselStepsLeft > 0);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r22._carouselStepsRight > 0);
} }
function ApprovalFlowComponent_ng_container_9_ng_container_1_div_7_fdp_approval_flow_node_1_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementContainer(1, 39);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    i0.ɵɵnextContext();
    const _r37 = i0.ɵɵreference(1);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", _r37._overflowMenuButton);
} }
function ApprovalFlowComponent_ng_container_9_ng_container_1_div_7_fdp_approval_flow_node_1_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0, 39);
} if (rf & 2) {
    i0.ɵɵnextContext();
    const _r37 = i0.ɵɵreference(1);
    i0.ɵɵproperty("ngTemplateOutlet", _r37._nodeContent);
} }
function ApprovalFlowComponent_ng_container_9_ng_container_1_div_7_fdp_approval_flow_node_1_Template(rf, ctx) { if (rf & 1) {
    const _r41 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "fdp-approval-flow-node", 34, 35);
    i0.ɵɵlistener("onAdd", function ApprovalFlowComponent_ng_container_9_ng_container_1_div_7_fdp_approval_flow_node_1_Template_fdp_approval_flow_node_onAdd_0_listener($event) { const restoredCtx = i0.ɵɵrestoreView(_r41); const node_r35 = restoredCtx.$implicit; const ctx_r40 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r40._addNode(node_r35, $event)); })("onEdit", function ApprovalFlowComponent_ng_container_9_ng_container_1_div_7_fdp_approval_flow_node_1_Template_fdp_approval_flow_node_onEdit_0_listener() { const restoredCtx = i0.ɵɵrestoreView(_r41); const node_r35 = restoredCtx.$implicit; const ctx_r42 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r42._editNode(node_r35)); })("onDelete", function ApprovalFlowComponent_ng_container_9_ng_container_1_div_7_fdp_approval_flow_node_1_Template_fdp_approval_flow_node_onDelete_0_listener() { const restoredCtx = i0.ɵɵrestoreView(_r41); const node_r35 = restoredCtx.$implicit; const ctx_r43 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r43._onNodeDelete(node_r35)); })("keydown", function ApprovalFlowComponent_ng_container_9_ng_container_1_div_7_fdp_approval_flow_node_1_Template_fdp_approval_flow_node_keydown_0_listener($event) { const restoredCtx = i0.ɵɵrestoreView(_r41); const node_r35 = restoredCtx.$implicit; const ctx_r44 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r44._onNodeKeyDown($event, node_r35)); })("cdkDragStarted", function ApprovalFlowComponent_ng_container_9_ng_container_1_div_7_fdp_approval_flow_node_1_Template_fdp_approval_flow_node_cdkDragStarted_0_listener() { i0.ɵɵrestoreView(_r41); const ctx_r45 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r45._dragDropInProgress = true); })("cdkDragReleased", function ApprovalFlowComponent_ng_container_9_ng_container_1_div_7_fdp_approval_flow_node_1_Template_fdp_approval_flow_node_cdkDragReleased_0_listener($event) { const restoredCtx = i0.ɵɵrestoreView(_r41); const node_r35 = restoredCtx.$implicit; const ctx_r46 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r46._onNodeDrop(node_r35, $event.source)); })("cdkDragMoved", function ApprovalFlowComponent_ng_container_9_ng_container_1_div_7_fdp_approval_flow_node_1_Template_fdp_approval_flow_node_cdkDragMoved_0_listener() { const restoredCtx = i0.ɵɵrestoreView(_r41); const node_r35 = restoredCtx.$implicit; const ctx_r47 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r47._onNodeDragMoved(node_r35)); });
    i0.ɵɵelementStart(2, "fd-grid-list-item", 36);
    i0.ɵɵlistener("press", function ApprovalFlowComponent_ng_container_9_ng_container_1_div_7_fdp_approval_flow_node_1_Template_fd_grid_list_item_press_2_listener() { const restoredCtx = i0.ɵɵrestoreView(_r41); const node_r35 = restoredCtx.$implicit; const ctx_r48 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r48._onNodeClick(node_r35)); });
    i0.ɵɵelementStart(3, "fd-grid-list-item-toolbar");
    i0.ɵɵtemplate(4, ApprovalFlowComponent_ng_container_9_ng_container_1_div_7_fdp_approval_flow_node_1_ng_container_4_Template, 2, 1, "ng-container", 7);
    i0.ɵɵelementEnd();
    i0.ɵɵelement(5, "fd-avatar", 37);
    i0.ɵɵtemplate(6, ApprovalFlowComponent_ng_container_9_ng_container_1_div_7_fdp_approval_flow_node_1_ng_template_6_Template, 1, 1, "ng-template", 38);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const node_r35 = ctx.$implicit;
    const nodeIndex_r36 = ctx.index;
    const _r37 = i0.ɵɵreference(1);
    const ctx_r49 = i0.ɵɵnextContext();
    const columnIndex_r33 = ctx_r49.index;
    const column_r32 = ctx_r49.$implicit;
    const ctx_r34 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("cdkDragDisabled", ctx_r34._isCdkDragDisabled(node_r35))("node", node_r35)("meta", ctx_r34._graphMetadata[node_r35.id])("isEdit", ctx_r34._isEditMode)("isNextNodeBlank", ctx_r34._isNextNodeBlank(node_r35, columnIndex_r33, nodeIndex_r36))("checkDueDate", ctx_r34.checkDueDate)("dueDateThreshold", ctx_r34.dueDateThreshold)("renderArrow", columnIndex_r33 > 0)("allNodesInColumnApproved", !!column_r32.allNodesApproved);
    i0.ɵɵadvance(2);
    i0.ɵɵclassProp("fdp-approval-flow__graph-node-inner--edit", ctx_r34._isEditMode);
    i0.ɵɵproperty("value", node_r35)("selected", !!node_r35.selected)("ariaLabelledBy", _r37.approvalFlowNodeId)("disableToolbarClick", true);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r34._isEditMode);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("image", node_r35.approvers.length === 1 ? node_r35.approvers[0].imgUrl : null)("label", node_r35.approvers.length > 1 ? node_r35.description : null)("circle", true);
} }
function ApprovalFlowComponent_ng_container_9_ng_container_1_div_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 32);
    i0.ɵɵtemplate(1, ApprovalFlowComponent_ng_container_9_ng_container_1_div_7_fdp_approval_flow_node_1_Template, 7, 19, "fdp-approval-flow-node", 33);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const column_r32 = ctx.$implicit;
    const ctx_r25 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", column_r32.nodes)("ngForTrackBy", ctx_r25._trackByFn);
} }
function ApprovalFlowComponent_ng_container_9_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 19);
    i0.ɵɵtemplate(2, ApprovalFlowComponent_ng_container_9_ng_container_1_div_2_Template, 3, 4, "div", 20);
    i0.ɵɵelementStart(3, "div", 21, 22)(5, "div", 23, 24);
    i0.ɵɵtemplate(7, ApprovalFlowComponent_ng_container_9_ng_container_1_div_7_Template, 2, 2, "div", 25);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r21 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵclassProp("fdp-approval-flow__container--extra-padding-start", true)("fdp-approval-flow__container--extra-padding-end", true);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r21._scrollDiff > 0);
    i0.ɵɵadvance(1);
    i0.ɵɵclassProp("fdp-approval-flow__graph-container--multiple-root-nodes", ctx_r21._multipleRootNodes)("fdp-approval-flow__graph-container--multiple-final-nodes", ctx_r21._multipleFinalNodes)("fd-scrollbar", true);
    i0.ɵɵadvance(2);
    i0.ɵɵclassProp("fdp-approval-flow__graph--edit-mode", ctx_r21._isEditMode);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r21._graph.columns);
} }
function ApprovalFlowComponent_ng_container_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, ApprovalFlowComponent_ng_container_9_ng_container_1_Template, 8, 14, "ng-container", 18);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    const _r5 = i0.ɵɵreference(12);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r3._graph.columns.length)("ngIfElse", _r5);
} }
function ApprovalFlowComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    const _r51 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 40)(1, "div", 41)(2, "fd-bar-element")(3, "button", 42);
    i0.ɵɵlistener("click", function ApprovalFlowComponent_div_10_Template_button_click_3_listener() { i0.ɵɵrestoreView(_r51); const ctx_r50 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r50._saveEditModeChanges()); });
    i0.ɵɵpipe(4, "fdTranslate");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(5, "fd-bar-element")(6, "button", 43);
    i0.ɵɵlistener("click", function ApprovalFlowComponent_div_10_Template_button_click_6_listener() { i0.ɵɵrestoreView(_r51); const ctx_r52 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r52._exitEditMode()); });
    i0.ɵɵpipe(7, "fdTranslate");
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("label", i0.ɵɵpipeBind1(4, 4, "platformApprovalFlow.editModeSaveButtonLabel"))("disabled", ctx_r4.disableSaveButton);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("label", i0.ɵɵpipeBind1(7, 6, "platformApprovalFlow.editModeExitButtonLabel"))("disabled", ctx_r4.disableExitButton);
} }
function ApprovalFlowComponent_ng_template_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "figure", 44)(1, "figcaption", 45)(2, "h3", 46);
    i0.ɵɵtext(3);
    i0.ɵɵpipe(4, "fdTranslate");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "p", 47);
    i0.ɵɵtext(6);
    i0.ɵɵpipe(7, "fdTranslate");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(8, "div", 48);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(9, "svg", 49);
    i0.ɵɵelement(10, "path", 50)(11, "path", 51)(12, "path", 52)(13, "path", 53)(14, "path", 54)(15, "path", 55)(16, "path", 56);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r6 = i0.ɵɵnextContext();
    i0.ɵɵproperty("svgConfig", ctx_r6._emptyApprovalFlowSpotConfig);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(4, 3, "platformApprovalFlow.emptyTitle"), " ");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(7, 5, "platformApprovalFlow.emptyHint"), " ");
} }
let defaultId = 0;
/**
 * @deprecated
 * Approval Flow component is depricated since version 0.40.0
 */
export class ApprovalFlowComponent {
    /** @hidden */
    constructor(_dialogService, _cdr, _injector, providers, _rtlService) {
        this._dialogService = _dialogService;
        this._cdr = _cdr;
        this._injector = _injector;
        this.providers = providers;
        this._rtlService = _rtlService;
        /** Whether to display due date warning in status */
        this.checkDueDate = false;
        /** Number of days before due date when status changes to `warning` with text 'Due in X days'.
         *  Not used if 'checkDueDate' equals false */
        this.dueDateThreshold = 7;
        /** A list of approval statuses that allow sending reminders to their approvers */
        this.allowSendRemindersForStatuses = ['in progress', 'not started'];
        /** Whether the approval flow is editable */
        this.isEditAvailable = false;
        /** Enables or disables ability to add parallel nodes */
        this.allowAddParallelNodes = true;
        /** Disables save button, save button is enabled by default */
        this.disableSaveButton = false;
        /** Disables exit button, exit button is enabled by default */
        this.disableExitButton = false;
        /** Event emitted on approval flow node click. */
        this.nodeClick = new EventEmitter();
        /** Event emitted on approval flow node add */
        this.afterNodeAdd = new EventEmitter();
        /** Event emitted on approval flow node edit */
        this.afterNodeEdit = new EventEmitter();
        /** Event emitted whenver save is clicked in edit mode  */
        this.valueChange = new EventEmitter();
        /** Event emitted whenever reminders should be sent */
        this.sendReminders = new EventEmitter();
        /** Event emitted when data loading is started. */
        // eslint-disable-next-line @angular-eslint/no-output-on-prefix
        this.onDataRequested = new EventEmitter();
        /** Event emitted when data loading is finished. */
        // eslint-disable-next-line @angular-eslint/no-output-on-prefix
        this.onDataReceived = new EventEmitter();
        /** @hidden */
        this._isCarousel = false;
        /** @hidden */
        this._graphMetadata = {};
        /** @hidden */
        this._isEditMode = false;
        /** @hidden */
        this._usersForWatchersList = [];
        /** @hidden */
        this._selectedWatchers = [];
        /** @hidden */
        this._selectedWatcherIds = [];
        /** @hidden */
        this._messages = [];
        /** @hidden */
        this._displayUserFn = displayUserFn;
        /** @hidden */
        this._userValueFn = userValueFn;
        /** @hidden */
        this._trackByFn = trackByFn;
        /** @hidden */
        this._emptyApprovalFlowSpotConfig = {
            spot: { url: '', id: 'sapIllus-Spot-NoData' }
        };
        /** @hidden */
        this._multipleRootNodes = false;
        /** @hidden */
        this._multipleFinalNodes = false;
        /** @hidden */
        this._dragDropInProgress = false;
        /** @hidden */
        this.approvalFlowUniqueId = `fdp-approval-flow-${++defaultId}`;
        /** @hidden */
        this._subscriptions = new Subscription();
        /** @hidden */
        this._dataSourceChanged$ = new Subject();
        /** @hidden */
        this._getNextHorizontalNode = (nodeIndex, columnIndex, direction) => {
            const indexDiff = direction === 'right' ? 1 : -1;
            const nextColumn = this._graph.columns[columnIndex + indexDiff];
            const nextNode = nextColumn?.nodes[nodeIndex];
            if (!nextNode) {
                return undefined;
            }
            if (nextNode.blank || nextNode.space) {
                return this._getNextHorizontalNode(nodeIndex, columnIndex + indexDiff, direction);
            }
            return nextNode;
        };
        /** @hidden */
        this._getNextVerticalNode = (nodeIndex, columnIndex, direction) => {
            const indexDiff = direction === 'down' ? 1 : -1;
            const currColumn = this._graph.columns[columnIndex];
            const nextNode = currColumn.nodes[nodeIndex + indexDiff];
            if (!nextNode) {
                return undefined;
            }
            if (nextNode.blank || nextNode.space) {
                return this._getNextVerticalNode(nodeIndex + indexDiff, columnIndex, direction);
            }
            return nextNode;
        };
    }
    /** Returns snapshot of the current and initial states of approval process */
    get approvalProcess() {
        return cloneDeep(this._approvalProcess);
    }
    /** @hidden */
    get _rtl() {
        return this._rtlService?.rtl.getValue();
    }
    /** @hidden */
    get _selectedNodes() {
        return getGraphNodes(this._graph).filter((node) => node.selected);
    }
    /** @hidden */
    ngOnInit() {
        if (!this.userDataSource) {
            const usersDP = this.usersDataProviderEntityKey && this.providers?.get(this.usersDataProviderEntityKey);
            if (usersDP) {
                this.userDataSource = new ApprovalFlowUserDataSource(usersDP);
            }
            else {
                console.error('Could not resolve users data source');
            }
        }
        if (!this.watcherDataSource) {
            const watchersDP = this.watchersDataProviderEntityKey && this.providers?.get(this.watchersDataProviderEntityKey);
            if (watchersDP) {
                this.watcherDataSource = new ApprovalFlowUserDataSource(watchersDP);
            }
            else {
                console.error('Could not resolve watchers data source');
            }
        }
        if (!this.teamDataSource) {
            const teamsDP = this.teamsDataProviderEntityKey && this.providers?.get(this.teamsDataProviderEntityKey);
            if (teamsDP) {
                this.teamDataSource = new ApprovalFlowTeamDataSource(teamsDP);
            }
            else {
                console.error('Could not resolve teams data source');
            }
        }
        this._listenOnResize();
        this._setupDataSourceSubscription();
    }
    /** @hidden */
    ngOnChanges(changes) {
        if (changes.value) {
            const process = this.value ?? { watchers: [], nodes: [] };
            this._initialApprovalProcess = cloneDeep(process);
            this._buildView(process);
        }
        if (changes.userDataSource || changes.watcherDataSource || changes.teamDataSource) {
            this._dataSourceChanged$.next();
        }
    }
    /** @hidden */
    ngOnDestroy() {
        this._subscriptions.unsubscribe();
    }
    /** @hidden */
    _isNextNodeBlank(node, columnIndex, nodeIndex) {
        const nextNode = this._graph.columns[columnIndex + 1]?.nodes[nodeIndex];
        const nextNodeBlank = nextNode?.blank;
        const nextNodeParallelEnd = this._graphMetadata[nextNode?.id]?.parallelEnd;
        return !node.blank && !!nextNodeBlank && !nextNodeParallelEnd;
    }
    /** @hidden */
    _isCdkDragDisabled(node) {
        return !this._isEditMode || node.blank || node.space || node.status !== 'not started';
    }
    /** @hidden Node click handler */
    _onNodeClick(node) {
        if (this._dragDropInProgress) {
            return;
        }
        const dialog = this._dialogService.open(ApprovalFlowApproverDetailsComponent, {
            data: {
                node,
                allowSendReminder: this.allowSendRemindersForStatuses.includes(node.status),
                ...this._defaultDialogOptions
            }
        }, this._injector);
        dialog.afterClosed.subscribe((reminderTargets) => {
            if (Array.isArray(reminderTargets)) {
                this.sendReminders.emit({ users: reminderTargets, node });
            }
        });
        this.nodeClick.emit(node);
    }
    /** @hidden */
    _onNodeAdd(node) {
        this.afterNodeAdd.emit(node);
    }
    /** @hidden */
    _onNodeEdit(node) {
        this.afterNodeEdit.emit(node);
    }
    /** @hidden */
    _onNodeSelectionChange(event) {
        this._graph.columns.forEach((column) => {
            column.nodes.forEach((node) => {
                node.selected = !!event.selection.find((_node) => _node.id === node.id);
            });
        });
    }
    /** @hidden Watcher's avatar click handler */
    _onWatcherClick(watcher, event) {
        event.preventDefault();
        this._dialogService.open(ApprovalFlowApproverDetailsComponent, {
            data: {
                watcher,
                ...this._defaultDialogOptions
            }
        });
    }
    /** Retrive metadata by node id */
    getNodeMetadataByNodeId(nodeId) {
        return this._graphMetadata[nodeId];
    }
    /** Scroll to the next horizontal slide */
    nextSlide(dir = 1) {
        const threshold = 1;
        let pos = 0;
        if (dir === 1) {
            const lastStep = this._carouselStepsRight === 1;
            const nextStep = this._carouselStepsCount - this._carouselStepsRight + 1;
            const visibleRightPoint = this._carouselStepSize * nextStep + (lastStep ? 0 : threshold);
            pos = visibleRightPoint - this._graphEl.nativeElement.clientWidth;
        }
        else {
            const lastStep = this._carouselStepsLeft === 1;
            const nextStep = this._carouselStepsLeft - 1;
            pos = this._carouselStepSize * nextStep - (lastStep ? 0 : threshold);
        }
        this._setScrollPosition(pos);
        this._cdr.detectChanges();
    }
    /** @hidden */
    _setScrollPosition(pos) {
        this._graphContainerEl.nativeElement.scrollTo({
            left: pos,
            behavior: 'smooth'
        });
    }
    /** @hidden */
    _moveColInView(colIndex) {
        const node = this._graphEl.nativeElement.children[colIndex].firstElementChild;
        if (!node) {
            return;
        }
        const { x: nodeX, width } = node.getBoundingClientRect();
        const delta = this._graphContainerEl.nativeElement.getBoundingClientRect().x;
        const left = nodeX - delta;
        const right = left + width;
        if (left < 0) {
            this._setScrollPosition(this._graphContainerEl.nativeElement.scrollLeft + left);
        }
        else if (right > this._graphEl.nativeElement.clientWidth) {
            this._setScrollPosition(this._graphContainerEl.nativeElement.scrollLeft + right - this._graphEl.nativeElement.clientWidth);
        }
    }
    /** @hidden Handle node keydown and focus other node based on which key is pressed */
    _onNodeKeyDown(event, node) {
        if (!KeyUtil.isKeyCode(event, [UP_ARROW, DOWN_ARROW, RIGHT_ARROW, LEFT_ARROW])) {
            return;
        }
        const { nodeIndex, columnIndex } = this._graphMetadata[node.id];
        event.preventDefault();
        let nextFocusTarget;
        if (typeof nodeIndex === 'number' && typeof columnIndex === 'number') {
            if (KeyUtil.isKeyCode(event, UP_ARROW)) {
                if (nodeIndex > 0) {
                    nextFocusTarget = this._getNextVerticalNode(nodeIndex, columnIndex, 'up');
                }
            }
            else if (KeyUtil.isKeyCode(event, DOWN_ARROW)) {
                nextFocusTarget = this._getNextVerticalNode(nodeIndex, columnIndex, 'down');
            }
            else if (KeyUtil.isKeyCode(event, LEFT_ARROW)) {
                nextFocusTarget = this._getNextHorizontalNode(nodeIndex, columnIndex, this._rtl ? 'right' : 'left');
            }
            else if (KeyUtil.isKeyCode(event, RIGHT_ARROW)) {
                nextFocusTarget = this._getNextHorizontalNode(nodeIndex, columnIndex, this._rtl ? 'left' : 'right');
            }
        }
        if (nextFocusTarget) {
            this._focusNode(nextFocusTarget);
        }
    }
    /** @hidden Fetch all necessary data and enter edit mode */
    _enterEditMode() {
        // there's no support for searching in multi-input, so grabbing all watchers
        // triggering initial loading of data in data sources
        this.watcherDataSource.match();
        this._editModeInitSub = this.watcherDataSource.open().subscribe((watchers) => {
            this._usersForWatchersList = watchers;
            this._selectedWatchers = this._approvalProcess.watchers;
            this._selectedWatcherIds = this._selectedWatchers.map((w) => w.id);
            this._isEditMode = true;
            this._initialApprovalProcess = cloneDeep(this._approvalProcess);
            this._cdr.detectChanges();
        });
        this._subscriptions.add(this._editModeInitSub);
    }
    /** @hidden Send update approval process calls to DataSource and exit edit mode*/
    _saveEditModeChanges() {
        this._editModeInitSub?.unsubscribe();
        this.watcherDataSource.close();
        this._initialApprovalProcess = undefined;
        this._isEditMode = false;
        this._messages = [];
        const updated = {
            ...this._approvalProcess,
            watchers: this._selectedWatchers
        };
        this._buildView(updated);
        this.valueChange.emit(updated);
    }
    /** @hidden Restore initial approval flow state and exit edit mode */
    _exitEditMode() {
        this._editModeInitSub?.unsubscribe();
        this.watcherDataSource.close();
        this._approvalProcess = cloneDeep(this._initialApprovalProcess);
        this._initialApprovalProcess = undefined;
        this._isEditMode = false;
        this._messages = [];
        this._buildView(this._approvalProcess);
    }
    /** @hidden */
    _watchersSelectionChanged(selectedIds) {
        const idsSet = new Set(selectedIds);
        // updating watchers selection
        // since it's possible "_usersForWatchersList" might not contain all selected values,
        // determine current selection based on what's already selected and "_usersForWatchersList"
        this._selectedWatchers = uniqBy(this._selectedWatchers.concat(this._usersForWatchersList).filter((user) => idsSet.has(user.id)), (u) => u.id);
    }
    /** @hidden Restore previously saved approval process state */
    _undoLastAction() {
        this._approvalProcess = cloneDeep(this._previousApprovalProcess);
        this._previousApprovalProcess = undefined;
        this._buildView(this._approvalProcess);
    }
    /** @hidden Open add node dialog */
    _addNode(source, type) {
        const showNodeTypeSelect = type === 'before' && !source.actionsConfig?.disableAddParallel;
        const dialog = this._dialogService.open(ApprovalFlowAddNodeComponent, {
            data: {
                nodeTarget: type,
                showNodeTypeSelect,
                node: Object.assign(getBlankApprovalGraphNode(), { blank: false }),
                checkDueDate: this.checkDueDate,
                ...this._defaultDialogOptions
            }
        }, this._injector);
        dialog.afterClosed.subscribe((data) => {
            if (!data) {
                return;
            }
            const { node, nodeType, toNextSerial } = data;
            if (!node) {
                return;
            }
            this._cacheCurrentApprovalProcess();
            node.id = `tempId${(Math.random() * 1000).toFixed()}`;
            switch (type) {
                case 'empty':
                    this._enterEditMode();
                    break;
                case 'before':
                    if (nodeType === APPROVAL_FLOW_NODE_TYPES.SERIAL) {
                        node.targets = [source.id];
                        this._replaceTargets(source.id, [node.id]);
                    }
                    if (nodeType === APPROVAL_FLOW_NODE_TYPES.PARALLEL) {
                        this._processAddingParallelNode(node, source, toNextSerial);
                    }
                    break;
                case 'before-all':
                    node.targets = this._graph.columns[0].nodes.map((_node) => _node.id);
                    break;
                case 'after':
                    node.targets = source.targets;
                    source.targets = [node.id];
                    break;
                case 'after-all': {
                    const targetParents = this._graphMetadata[source.targets[0]]?.parents;
                    if (targetParents) {
                        node.targets = source.targets;
                        this._replaceTargets(source.id, [node.id]);
                        this._approvalProcess.nodes = this._approvalProcess.nodes.filter((_node) => _node.id !== source.id);
                    }
                    else {
                        this._graph.columns[this._graph.columns.length - 1].nodes.forEach((_node) => _node.targets.push(node.id));
                    }
                    break;
                }
                case 'parallel':
                    this._processAddingParallelNode(node, source, toNextSerial);
                    break;
            }
            this._showMessage(node.approvalTeamId ? 'teamAddSuccess' : 'approverAddSuccess');
            this._approvalProcess.nodes.push(node);
            this._buildView(this._approvalProcess);
            this._onNodeAdd(node);
        });
    }
    /** @hidden Open edit node dialog */
    _editNode(node) {
        const dialog = this._dialogService.open(ApprovalFlowAddNodeComponent, {
            data: {
                isEdit: true,
                node: Object.assign({}, node),
                checkDueDate: this.checkDueDate,
                ...this._defaultDialogOptions
            }
        }, this._injector);
        dialog.afterClosed.subscribe((data) => {
            const updatedNode = data?.node;
            if (!updatedNode) {
                return;
            }
            this._cacheCurrentApprovalProcess();
            this._updateNode(updatedNode);
            this._showMessage('nodeEdit');
            this._buildView(this._approvalProcess);
            this._onNodeEdit(node);
        });
    }
    /** @hidden "Delete" button click handler */
    _onNodeDelete(nodeToDelete) {
        this._cacheCurrentApprovalProcess();
        this._deleteNode(nodeToDelete);
        this._showMessage(nodeToDelete.approvalTeamId ? 'teamRemove' : 'nodeRemove');
        this._buildView(this._approvalProcess);
    }
    /** @hidden */
    _deleteSelectedNodes() {
        this._cacheCurrentApprovalProcess();
        const nodesToDelete = this._nodeComponents
            .filter((nodeComponent) => nodeComponent._isSelected)
            .map((nodeComponent) => nodeComponent.node);
        nodesToDelete.forEach((node) => {
            this._deleteNode(node);
            this._buildView(this._approvalProcess);
        });
        this._showMessage('nodesRemove');
    }
    /** @hidden Node drag move handler, used to check if need to highlight a drop zone rectangle */
    _onNodeDragMoved(node) {
        const draggedNodeDimensions = this._nodeComponents
            .find((comp) => comp.node === node)
            ?._nativeElement.getBoundingClientRect();
        if (!draggedNodeDimensions) {
            return;
        }
        this._nodeComponents.forEach((component) => {
            if (component.node !== node && Boolean(component._dropZones.length)) {
                component._checkIfNodeDraggedInDropZone(draggedNodeDimensions);
            }
        });
    }
    /** @hidden Node drop handler */
    _onNodeDrop(nodeToDrop, drag) {
        drag.reset();
        setTimeout(() => (this._dragDropInProgress = false));
        const dropTarget = this._nodeComponents.find((n) => n._isAnyDropZoneActive);
        if (!dropTarget) {
            return;
        }
        this._cacheCurrentApprovalProcess();
        const placement = dropTarget._activeDropZones[0].placement;
        this._nodeComponents.forEach((n) => n._deactivateDropZones());
        if (placement === 'after') {
            this._deleteNode(nodeToDrop);
            this._buildView(this._approvalProcess);
            const nextNode = getGraphNodes(this._graph).find((node) => node.id === dropTarget.node.targets[0]);
            if (nextNode?.blank) {
                this._deleteNode(nextNode);
                this._buildView(this._approvalProcess);
            }
            nodeToDrop.targets =
                this._approvalProcess.nodes.find((node) => node.id === dropTarget.node.id)?.targets ?? [];
            dropTarget.node.targets = [nodeToDrop.id];
            this._finishDragDropProcess(nodeToDrop);
        }
        else if (placement === 'before') {
            const dialog = this._dialogService.open(ApprovalFlowSelectTypeComponent, undefined, this._injector);
            dialog.afterClosed.subscribe((data) => {
                if (!data) {
                    return;
                }
                const { type, toNextSerial } = data;
                this._deleteNode(nodeToDrop);
                this._buildView(this._approvalProcess);
                if (type === APPROVAL_FLOW_NODE_TYPES.SERIAL) {
                    this._replaceTargets(dropTarget.node.id, [nodeToDrop.id]);
                    nodeToDrop.targets = [dropTarget.node.id];
                }
                if (type === APPROVAL_FLOW_NODE_TYPES.PARALLEL) {
                    this._processAddingParallelNode(nodeToDrop, dropTarget.node, toNextSerial);
                }
                this._finishDragDropProcess(nodeToDrop);
            });
        }
        else if (placement === 'before-all') {
            this._deleteNode(nodeToDrop);
            const firstColumnNodes = this._graph.columns[0].nodes;
            nodeToDrop.targets = firstColumnNodes.map((node) => node.id);
            this._finishDragDropProcess(nodeToDrop);
        }
        else if (placement === 'after-all') {
            this._deleteNode(nodeToDrop);
            this._buildView(this._approvalProcess);
            nodeToDrop.targets = [...dropTarget.node.targets];
            if (dropTarget.node.targets.length === 0) {
                const lastColumnNodes = this._graph.columns[this._graph.columns.length - 1].nodes;
                lastColumnNodes.forEach((node) => node.targets.push(nodeToDrop.id));
            }
            else {
                this._approvalProcess.nodes = this._approvalProcess.nodes.filter((node) => node.id !== dropTarget.node.id);
                this._replaceTargets(dropTarget.node.id, [nodeToDrop.id]);
            }
            this._finishDragDropProcess(nodeToDrop);
        }
    }
    /** @hidden */
    _finishDragDropProcess(nodeToDrop) {
        this._approvalProcess.nodes.push(nodeToDrop);
        this._buildView(this._approvalProcess);
    }
    /** @hidden */
    _showMessage(type) {
        this._messages = [{ type }];
    }
    /** @hidden Build Approval Flow graph and render it */
    _buildView(approvalProcess) {
        if (!approvalProcess.nodes) {
            approvalProcess.nodes = [];
        }
        if (!approvalProcess.watchers) {
            approvalProcess.watchers = [];
        }
        this._approvalProcess = approvalProcess;
        this._graph = generateApprovalFlowGraph(this._approvalProcess.nodes);
        if (this._graph.errors) {
            this._showMessage('error');
            return;
        }
        this._graphMetadata = generateApprovalFlowGraphMetadata(this._graph);
        const nodes = getGraphNodes(this._graph);
        this._approvalProcess.nodes = nodes.filter((node) => !node.space);
        this._multipleRootNodes = nodes.filter((node) => this._graphMetadata[node.id].isRoot).length > 1;
        this._multipleFinalNodes = nodes.filter((node) => this._graphMetadata[node.id].isFinal).length > 1;
        this._cdr.detectChanges();
        this._gridList?.clearSelection();
        if (!this._isEditMode) {
            this._setScrollPosition(0);
        }
    }
    /** @hidden Listen window resize and distribute cards on column change */
    _listenOnResize() {
        this._subscriptions.add(merge(fromEvent(window, 'resize'), fromEvent(this._graphContainerEl.nativeElement, 'scroll'))
            .pipe(throttleTime(50, undefined, { leading: true, trailing: true }))
            .subscribe(() => {
            this._cdr.detectChanges();
        }));
    }
    /** @hidden */
    _focusNode(node) {
        const nodeToFocus = this._nodeComponents.find((comp) => comp.node === node);
        if (!nodeToFocus) {
            return;
        }
        this._moveColInView(node.colIndex ?? 0);
        nodeToFocus._focus({ preventScroll: true });
    }
    /** @hidden Update node object in local approval process data structure */
    _updateNode(node) {
        const nodeIndex = this._approvalProcess.nodes.findIndex((n) => n.id === node.id);
        if (nodeIndex > -1) {
            this._approvalProcess.nodes[nodeIndex] = node;
        }
    }
    /** @hidden Delete node object in local approval process data structure */
    _deleteNode(nodeToDelete) {
        const nodesToDelete = [nodeToDelete];
        const graphNodes = getGraphNodes(this._graph);
        let currNode = graphNodes.find((node) => node.id === nodeToDelete.id);
        let nextNode;
        do {
            if (currNode?.targets.length === 1) {
                nextNode = graphNodes.find((node) => node.id === currNode?.targets[0]);
                if (nextNode?.blank && this._graphMetadata[nextNode.id].parents.length === 1) {
                    nodesToDelete.push(nextNode);
                    currNode = nextNode;
                    nextNode = graphNodes.find((node) => node.id === currNode?.targets[0]);
                }
            }
        } while (nextNode?.blank && this._graphMetadata[nextNode.id].parents.length === 1);
        const parent = this._graphMetadata[nodeToDelete.id].parents[0];
        const target = nodeToDelete.targets[0];
        const isParentParallelStart = this._graphMetadata[parent?.id]?.parallelStart;
        const isTargetParallelEnd = this._graphMetadata[target]?.parallelEnd;
        const targets = (isParentParallelStart && isTargetParallelEnd) || nodesToDelete.length > 1 ? [] : currNode?.targets ?? [];
        this._replaceTargets(nodeToDelete.id, targets);
        this._approvalProcess.nodes = this._approvalProcess.nodes.filter((node) => !nodesToDelete.includes(node));
    }
    /** @hidden */
    _addParallelTargets(targetNodeId, nodeIdToAdd) {
        this._approvalProcess.nodes.forEach((node) => {
            if (isNodeTargetsIncludeId(node, targetNodeId)) {
                node.targets.push(nodeIdToAdd);
            }
        });
    }
    /** @hidden Replace all occurrences of "idToReplace" in all nodes' "targets" with ones in "replaceWith" array */
    _replaceTargets(IdToReplace, replaceWithId) {
        this._approvalProcess.nodes.forEach((n) => {
            if (isNodeTargetsIncludeId(n, IdToReplace)) {
                n.targets = n.targets.filter((_id) => _id !== IdToReplace);
                n.targets.push(...replaceWithId);
            }
        });
    }
    /** @hidden Save current state of approval process data to be able to undo an action made in edit mode */
    _cacheCurrentApprovalProcess() {
        this._previousApprovalProcess = cloneDeep(this._approvalProcess);
    }
    /** @hidden */
    get _carouselStepSize() {
        return this._graphEl.nativeElement.scrollWidth / this._carouselStepsCount;
    }
    /** @hidden */
    get _scrollDiff() {
        if (!this._graphEl) {
            return 0;
        }
        return this._graphEl.nativeElement.scrollWidth - this._graphEl.nativeElement.clientWidth;
    }
    /** @hidden */
    get _carouselStepsCount() {
        return this._graphEl.nativeElement.children.length;
    }
    /** @hidden */
    get _carouselStepsLeft() {
        return Math.ceil(this._graphContainerEl.nativeElement.scrollLeft / this._carouselStepSize);
    }
    /** @hidden */
    get _carouselStepsRight() {
        return Math.ceil((this._scrollDiff - Math.round(this._graphContainerEl.nativeElement.scrollLeft)) / this._carouselStepSize);
    }
    /** @hidden */
    get _defaultDialogOptions() {
        return {
            teamDataSource: this.teamDataSource,
            userDataSource: this.userDataSource,
            userDetailsTemplate: this.userDetailsTemplate,
            rtl: this._rtl
        };
    }
    /** @hidden */
    _findSerialNode(yIndex, targets) {
        const targetIsParent = Number.isInteger(yIndex) &&
            targets?.some((targetId) => {
                const nodeIndex = this._graphMetadata[targetId]?.nodeIndex;
                return Number.isInteger(nodeIndex) && nodeIndex <= yIndex - 1;
            });
        if (targetIsParent) {
            return targets ?? [];
        }
        const targetNode = this._approvalProcess.nodes.find((node) => node.id === targets?.[0]);
        return this._findSerialNode(yIndex, targetNode?.targets);
    }
    /** @hidden */
    _processAddingParallelNode(addedNode, sourceNode, toNextSerial = false) {
        addedNode.targets = sourceNode.targets;
        this._addParallelTargets(sourceNode.id, addedNode.id);
        if (toNextSerial) {
            let yIndex = this._graphMetadata[sourceNode.id].nodeIndex;
            let targets = sourceNode.targets;
            if (yIndex === 0) {
                const sourceNodeMetadata = this._graphMetadata[sourceNode.id];
                const columnNodes = this._graph.columns?.[sourceNodeMetadata.columnIndex]?.nodes;
                const nextParallelNode = columnNodes.find((node, index) => index > 0 && !node.space);
                if (nextParallelNode) {
                    yIndex = this._graphMetadata[nextParallelNode.id].columnIndex;
                    targets = nextParallelNode.targets;
                    addedNode.targets = this._findSerialNode(yIndex, targets);
                    return;
                }
                addedNode.targets = sourceNode.targets;
                return;
            }
            addedNode.targets = this._findSerialNode(yIndex, targets);
        }
    }
    /** @hidden */
    _setupDataSourceSubscription() {
        const sub = this._dataSourceChanged$
            .pipe(startWith(null), switchMap(() => {
            const loadingStates = [this.teamDataSource, this.userDataSource, this.watcherDataSource]
                .filter(Boolean)
                .map((ds) => merge(ds.onDataRequested().pipe(mapTo(true)), ds.onDataReceived().pipe(mapTo(false))).pipe(startWith(ds.isDataLoading)));
            return combineLatest(loadingStates);
        }), map((loadingStates) => loadingStates.some(Boolean)), distinctUntilChanged())
            .subscribe((someLoading) => {
            if (someLoading) {
                this.onDataRequested.emit();
            }
            else {
                this.onDataReceived.emit();
            }
        });
        this._subscriptions.add(sub);
    }
}
ApprovalFlowComponent.ɵfac = function ApprovalFlowComponent_Factory(t) { return new (t || ApprovalFlowComponent)(i0.ɵɵdirectiveInject(i1.DialogService), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.Injector), i0.ɵɵdirectiveInject(DATA_PROVIDERS, 8), i0.ɵɵdirectiveInject(i2.RtlService, 8)); };
ApprovalFlowComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ApprovalFlowComponent, selectors: [["fdp-approval-flow"]], viewQuery: function ApprovalFlowComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0, 5);
        i0.ɵɵviewQuery(_c1, 5);
        i0.ɵɵviewQuery(_c2, 5);
        i0.ɵɵviewQuery(ApprovalFlowNodeComponent, 5);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx._graphContainerEl = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx._graphEl = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx._gridList = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx._nodeComponents = _t);
    } }, inputs: { title: "title", value: "value", userDataSource: "userDataSource", watcherDataSource: "watcherDataSource", teamDataSource: "teamDataSource", userDetailsTemplate: "userDetailsTemplate", checkDueDate: "checkDueDate", dueDateThreshold: "dueDateThreshold", allowSendRemindersForStatuses: "allowSendRemindersForStatuses", isEditAvailable: "isEditAvailable", watchersLabel: "watchersLabel", allowAddParallelNodes: "allowAddParallelNodes", disableSaveButton: "disableSaveButton", disableExitButton: "disableExitButton", usersDataProviderEntityKey: "usersDataProviderEntityKey", teamsDataProviderEntityKey: "teamsDataProviderEntityKey", watchersDataProviderEntityKey: "watchersDataProviderEntityKey" }, outputs: { nodeClick: "nodeClick", afterNodeAdd: "afterNodeAdd", afterNodeEdit: "afterNodeEdit", valueChange: "valueChange", sendReminders: "sendReminders", onDataRequested: "onDataRequested", onDataReceived: "onDataReceived" }, features: [i0.ɵɵNgOnChangesFeature], decls: 13, vars: 10, consts: [["fdCompact", ""], [3, "messages", "undoLastActionAvailable", "messagesChange", "undoLastAction"], [1, "fdp-approval-flow__toolbar", 3, "selectionMode", "selectionChange"], ["gridList", ""], [3, "title"], [3, "graph", "selectedNodes", "graphMetadata", "isEditMode", "enterEditMode", "addNode", "editSelectedNode", "deleteSelectedNodes", 4, "ngIf"], ["class", "fdp-approval-flow__watchers", 4, "ngIf"], [4, "ngIf"], ["fd-bar", "", 4, "ngIf"], ["emptyApprovalFlowGraph", ""], [3, "graph", "selectedNodes", "graphMetadata", "isEditMode", "enterEditMode", "addNode", "editSelectedNode", "deleteSelectedNodes"], [1, "fdp-approval-flow__watchers"], [1, "fdp-approval-flow__watchers-title"], ["class", "fdp-approval-flow__watchers-input-container", 4, "ngIf"], ["size", "xs", 3, "image", "label", "clickable", "circle", "avatarClicked", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["size", "xs", 3, "image", "label", "clickable", "circle", "avatarClicked"], [1, "fdp-approval-flow__watchers-input-container"], [3, "dropdownValues", "placeholder", "displayFn", "valueFn", "showAllButton", "ngModel", "ngModelChange"], [4, "ngIf", "ngIfElse"], [1, "fdp-approval-flow__container"], ["class", "fdp-approval-flow-carousel-controls", 3, "fdp-approval-flow-carousel-controls--edit-mode", 4, "ngIf"], [1, "fdp-approval-flow__graph-container"], ["graphContainerEl", ""], [1, "fdp-approval-flow__graph"], ["graphEl", ""], ["class", "fdp-approval-flow__graph-column", 4, "ngFor", "ngForOf"], [1, "fdp-approval-flow-carousel-controls"], ["class", "fdp-approval-flow-carousel-controls__button--prev-slide", 3, "click", 4, "ngIf"], ["class", "fdp-approval-flow-carousel-controls__button--next-slide", 3, "click", 4, "ngIf"], [1, "fdp-approval-flow-carousel-controls__button--prev-slide", 3, "click"], [3, "glyph"], [1, "fdp-approval-flow-carousel-controls__button--next-slide", 3, "click"], [1, "fdp-approval-flow__graph-column"], ["cdkDrag", "", 3, "cdkDragDisabled", "node", "meta", "isEdit", "isNextNodeBlank", "checkDueDate", "dueDateThreshold", "renderArrow", "allNodesInColumnApproved", "onAdd", "onEdit", "onDelete", "keydown", "cdkDragStarted", "cdkDragReleased", "cdkDragMoved", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["cdkDrag", "", 3, "cdkDragDisabled", "node", "meta", "isEdit", "isNextNodeBlank", "checkDueDate", "dueDateThreshold", "renderArrow", "allNodesInColumnApproved", "onAdd", "onEdit", "onDelete", "keydown", "cdkDragStarted", "cdkDragReleased", "cdkDragMoved"], ["approvalFlowNode", ""], ["type", "active", 1, "fdp-approval-flow__graph-node-inner", 3, "value", "selected", "ariaLabelledBy", "disableToolbarClick", "press"], ["fd-grid-list-item-image", "", "size", "xs", 3, "image", "label", "circle"], ["fd-grid-list-item-body", ""], [3, "ngTemplateOutlet"], ["fd-bar", ""], ["fd-bar-right", ""], ["fd-button", "", "fdType", "emphasized", 3, "label", "disabled", "click"], ["fd-button", "", "fdType", "transparent", 3, "label", "disabled", "click"], ["fd-illustrated-message", "", "type", "spot", 3, "svgConfig"], ["fd-illustrated-message-figcaption", ""], ["fd-illustrated-message-title", ""], ["fd-illustrated-message-text", ""], [2, "display", "none"], ["xmlns", "http://www.w3.org/2000/svg", "width", "128", "height", "128", "viewBox", "0 0 128 128", "id", "sapIllus-Spot-NoData"], ["d", "M41.6179,32.7174H84.6273a1,1,0,0,1,.723.3092l7.2445,7.5824,7.4817,7.8491a1,1,0,0,1,.2761.69l-.0046,55.6069a4.1038,4.1038,0,0,1-.8787,2.1212A4.0564,4.0564,0,0,1,98.1,107.9631l-56.3858.0313a2.6167,2.6167,0,0,1-3.0812-3.2309l-.0152-69.0594Z", 1, "sapIllus_PatternShadow", 2, "fill", "var(--sapIllus_PatternShadow)"], ["d", "M35.7928,27.4987H78.8022a1,1,0,0,1,.723.3092L86.77,35.39l7.4816,7.8492a1,1,0,0,1,.2762.69l-.0046,55.6069a3,3,0,0,1-3,3H35.808a2.9946,2.9946,0,0,1-3-2.9913c-.01-12.0564-.0423-57.0116-.0152-69.0595A2.9943,2.9943,0,0,1,35.7928,27.4987Z", 1, "sapIllus_ObjectFillColor", 2, "fill", "var(--sapIllus_ObjectFillColor)"], ["d", "M93.2978,44.5335H78.8208a.9925.9925,0,0,1-.974-1.01V28.5108a.97.97,0,0,1,1.6628-.7143L93.9865,42.8092A1.0151,1.0151,0,0,1,93.2978,44.5335Z", 1, "sapIllus_BrandColorSecondary", 2, "fill", "var(--sapIllus_BrandColorSecondary)"], ["d", "M104.608,38.9485l5.9157-1.7721c1.32-.3954.7584-2.5258-.5689-2.1282L104.0392,36.82c-1.32.3953-.7584,2.5258.5688,2.1282Z", 1, "sapIllus_Layering1", 2, "fill", "var(--sapIllus_Layering1)"], ["d", "M85.2973,21.2465l.9718-5.9331c.2154-1.3151-1.777-1.8807-1.9941-.5554l-.9718,5.9332c-.2155,1.3151,1.777,1.8807,1.9941.5553Z", 1, "sapIllus_Layering1", 2, "fill", "var(--sapIllus_Layering1)"], ["d", "M95.3034,29.0015a1.01,1.01,0,0,1-.6837-.267,1.0783,1.0783,0,0,1-.0864-1.4932l5.9511-6.8857a1.01,1.01,0,0,1,1.4538-.0884,1.0785,1.0785,0,0,1,.0865,1.4932l-5.9511,6.8858A1.0164,1.0164,0,0,1,95.3034,29.0015Z", 1, "sapIllus_Layering1", 2, "fill", "var(--sapIllus_Layering1)"], ["d", "M94.8747,42.8861,80.0855,27.4623a1.5152,1.5152,0,0,0-1.0885-.4636H35.807a3.509,3.509,0,0,0-3.5146,3.4836c-.0294,13.2857.0137,66.7559.0157,69.0257a3.5076,3.5076,0,0,0,3.5146,3.4894H91.7709a3.5106,3.5106,0,0,0,3.5146-3.4982l.005-55.5785A1.49,1.49,0,0,0,94.8747,42.8861Zm-16.21-14.8355a1.15,1.15,0,0,1,.2561-.0309,1.04,1.04,0,0,1,.51.2134l14.276,14.8837.0194.02a.5891.5891,0,0,1,.0968.6251c-.1016.1764-.4086.24-.69.24L78.8355,44a.6031.6031,0,0,1-.5472-.6131c-.0087-4.9588-.017-9.9015-.0035-14.8689A.5189.5189,0,0,1,78.6646,28.0506Zm13.1062,73.95H35.8188a2.5045,2.5045,0,0,1-2.5107-2.491c-.002-2.2694-.0451-55.74-.0157-69.0248a2.5054,2.5054,0,0,1,2.5107-2.4861H77.3684a1.49,1.49,0,0,0-.0976.5106V43.4934A1.5145,1.5145,0,0,0,78.7894,45H78.92L94.286,47.9749l-.0046,51.5269A2.5074,2.5074,0,0,1,91.7708,102.0006Z", 1, "sapIllus_StrokeDetailColor", 2, "fill", "var(--sapIllus_StrokeDetailColor)"]], template: function ApprovalFlowComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementContainerStart(0, 0);
        i0.ɵɵelementStart(1, "fdp-approval-flow-messages", 1);
        i0.ɵɵlistener("messagesChange", function ApprovalFlowComponent_Template_fdp_approval_flow_messages_messagesChange_1_listener($event) { return ctx._messages = $event; })("undoLastAction", function ApprovalFlowComponent_Template_fdp_approval_flow_messages_undoLastAction_1_listener() { return ctx._undoLastAction(); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(2, "fd-grid-list", 2, 3);
        i0.ɵɵlistener("selectionChange", function ApprovalFlowComponent_Template_fd_grid_list_selectionChange_2_listener($event) { return ctx._onNodeSelectionChange($event); });
        i0.ɵɵelementStart(4, "fd-grid-list-title-bar", 4);
        i0.ɵɵpipe(5, "fdTranslate");
        i0.ɵɵelement(6, "fd-grid-list-title-bar-spacer");
        i0.ɵɵtemplate(7, ApprovalFlowComponent_fdp_approval_flow_toolbar_actions_7_Template, 1, 4, "fdp-approval-flow-toolbar-actions", 5);
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(8, ApprovalFlowComponent_div_8_Template, 6, 6, "div", 6);
        i0.ɵɵtemplate(9, ApprovalFlowComponent_ng_container_9_Template, 2, 2, "ng-container", 7);
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(10, ApprovalFlowComponent_div_10_Template, 8, 8, "div", 8);
        i0.ɵɵtemplate(11, ApprovalFlowComponent_ng_template_11_Template, 17, 7, "ng-template", null, 9, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵelementContainerEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("messages", ctx._messages)("undoLastActionAvailable", !!ctx._previousApprovalProcess);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("selectionMode", ctx._isEditMode ? "multiSelect" : "none");
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("title", ctx.title || i0.ɵɵpipeBind1(5, 8, "platformApprovalFlow.defaultTitle"));
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("ngIf", ctx.isEditAvailable);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", (ctx._approvalProcess == null ? null : ctx._approvalProcess.watchers == null ? null : ctx._approvalProcess.watchers.length) || ctx._isEditMode);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", !ctx._graph.errors);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx._isEditMode);
    } }, dependencies: [i3.NgForOf, i3.NgIf, i3.NgTemplateOutlet, i4.NgControlStatus, i4.NgModel, i5.AvatarComponent, i6.BarComponent, i6.BarRightDirective, i6.BarElementDirective, i7.ContentDensityDirective, i8.ButtonComponent, i9.IconComponent, i10.GridListComponent, i10.GridListItemComponent, i10.GridListTitleBarComponent, i10.GridListItemToolbarComponent, i10.GridListTitleBarSpacerComponent, i10.GridListItemImageDirective, i10.GridListItemBodyDirective, i11.MultiInputComponent, i12.CdkDrag, i13.IllustratedMessageComponent, i13.IllustratedMessageFigcaptionComponent, i13.IllustratedMessageTextDirective, i13.IllustratedMessageTitleDirective, i14.ApprovalFlowNodeComponent, i15.ApprovalFlowMessagesComponent, i16.ApprovalFlowToolbarActionsComponent, i17.FdTranslatePipe], styles: ["/*!\n * Fundamental Library Styles v0.28.3\n * Copyright (c) 2023 SAP SE or an SAP affiliate company.\n * Licensed under Apache License 2.0 (https://github.com/SAP/fundamental-styles/blob/main/LICENSE)\n */.fd-scrollbar{-webkit-box-sizing:border-box;border:0;box-sizing:border-box;color:var(--sapTextColor);font-family:var(--sapFontFamily);font-size:var(--sapFontSize);font-weight:400;forced-color-adjust:none;line-height:var(--sapContent_LineHeight);margin:0;overflow:auto;padding:0;scrollbar-color:var(--fdScrollbar_Thumb_Color) var(--fdScrollbar_Track_Color)}.fd-scrollbar:after,.fd-scrollbar:before{box-sizing:inherit;font-size:inherit}.fd-scrollbar.is-focus,.fd-scrollbar:focus{outline:none;z-index:5}.fd-scrollbar::-webkit-scrollbar{height:var(--fdScrollbar_Dimension);width:var(--fdScrollbar_Dimension)}.fd-scrollbar::-webkit-scrollbar-corner,.fd-scrollbar::-webkit-scrollbar-track{background-color:var(--fdScrollbar_Track_Color)}.fd-scrollbar::-webkit-scrollbar-thumb{-webkit-box-shadow:inset 0 0 0 var(--fdScrollbar_Dimension) var(--fdScrollbar_Thumb_Color);background-color:transparent;border:var(--fdScrollbar_Thumb_Offset) solid transparent;border-radius:calc(var(--fdScrollbar_Thumb_Border_Radius) - var(--fdScrollbar_Thumb_Offset));box-shadow:inset 0 0 0 var(--fdScrollbar_Dimension) var(--fdScrollbar_Thumb_Color)}.fd-scrollbar::-webkit-scrollbar-thumb:active,.fd-scrollbar::-webkit-scrollbar-thumb:hover{box-shadow:inset 0 0 0 var(--fdScrollbar_Dimension) var(--fdScrollbar_Thumb_Hover_Color)}.fd-scrollbar--container::-webkit-scrollbar-corner,.fd-scrollbar--container::-webkit-scrollbar-track{background-color:var(--fdScrollbar_Track_Color);border-radius:0 var(--fdScrollbar_Border_Radius) var(--fdScrollbar_Border_Radius) 0}.fd-scrollbar--container[dir=rtl]::-webkit-scrollbar-corner,.fd-scrollbar--container[dir=rtl]::-webkit-scrollbar-track,[dir=rtl] .fd-scrollbar--container::-webkit-scrollbar-corner,[dir=rtl] .fd-scrollbar--container::-webkit-scrollbar-track{border-radius:var(--fdScrollbar_Border_Radius) 0 0 var(--fdScrollbar_Border_Radius)}.fdp-approval-flow__watchers{margin-bottom:.5rem;padding-left:.5rem}.fdp-approval-flow__watchers-title{font-size:.875em;color:#6a6d70;color:var(--sapContent_LabelColor, #6a6d70);margin:1rem 0 .5rem}.fdp-approval-flow__watchers fd-avatar{margin-right:.5rem;cursor:pointer}.fdp-approval-flow__watchers fd-avatar:focus{outline-offset:.0625rem;outline-width:.0625rem;outline-style:dotted;outline-color:var(--sapContent_FocusColor, #0854a0)}.fdp-approval-flow__watchers .fdp-approval-flow__watchers-input-container{width:17.375rem}[dir=rtl] .fdp-approval-flow__watchers,.fdp-approval-flow__watchers[dir=rtl]{padding-right:.5rem}[dir=rtl] .fdp-approval-flow__watchers fd-avatar,.fdp-approval-flow__watchers[dir=rtl] fd-avatar{margin-left:.5rem;margin-right:0}.fdp-approval-flow__container{max-width:100%;position:relative;padding:0 .5rem}.fdp-approval-flow__container--extra-padding-start{padding-left:2rem}.fdp-approval-flow__container--extra-padding-end{padding-right:2rem}[dir=rtl] .fdp-approval-flow__container.fdp-approval-flow__container--extra-padding-start,.fdp-approval-flow__container[dir=rtl].fdp-approval-flow__container--extra-padding-start{padding-left:.5rem;padding-right:2rem}[dir=rtl] .fdp-approval-flow__container.fdp-approval-flow__container--extra-padding-end,.fdp-approval-flow__container[dir=rtl].fdp-approval-flow__container--extra-padding-end{padding-right:.5rem;padding-left:2rem}[dir=rtl] .fdp-approval-flow__container.fdp-approval-flow__container--extra-padding-start.fdp-approval-flow__container--extra-padding-end,.fdp-approval-flow__container[dir=rtl].fdp-approval-flow__container--extra-padding-start.fdp-approval-flow__container--extra-padding-end{padding-right:2rem;padding-left:2rem}.fdp-approval-flow__graph-container{position:relative;overflow:auto;padding-top:.5rem;padding-bottom:2rem;padding-left:2rem}.fdp-approval-flow__graph-container--multiple-root-nodes{padding-left:4rem}[dir=rtl] .fdp-approval-flow__graph-container--multiple-root-nodes,.fdp-approval-flow__graph-container--multiple-root-nodes[dir=rtl]{padding-right:2rem}[dir=rtl] .fdp-approval-flow__graph-container--multiple-final-nodes,.fdp-approval-flow__graph-container--multiple-final-nodes[dir=rtl]{padding-left:0}.fdp-approval-flow-carousel-controls{position:absolute;display:flex;align-items:center;width:100%;height:6.375rem;padding-top:.5rem;left:0}.fdp-approval-flow-carousel-controls--edit-mode{height:8.375rem}.fdp-approval-flow-carousel-controls__button--prev-slide,.fdp-approval-flow-carousel-controls__button--next-slide{position:absolute;border:none;background:transparent;color:#6a6d70;color:var(--sapContent_LabelColor, #6a6d70);display:flex;justify-content:space-between;width:2rem;align-items:center;cursor:pointer}.fdp-approval-flow-carousel-controls__button--prev-slide fd-icon,.fdp-approval-flow-carousel-controls__button--next-slide fd-icon{font-size:.875rem;color:#0854a0;color:var(--sapButton_IconColor, #0854a0);position:relative;top:.0625rem}.fdp-approval-flow-carousel-controls__button--prev-slide{left:0}[dir=rtl] .fdp-approval-flow-carousel-controls__button--prev-slide,.fdp-approval-flow-carousel-controls__button--prev-slide[dir=rtl]{left:auto;right:0}.fdp-approval-flow-carousel-controls__button--next-slide{right:0}[dir=rtl] .fdp-approval-flow-carousel-controls__button--next-slide,.fdp-approval-flow-carousel-controls__button--next-slide[dir=rtl]{left:0;right:auto}.fdp-approval-flow__graph{display:flex;align-items:flex-start;position:relative;left:0;transition:left .3s}.fdp-approval-flow__graph-column{margin-right:4rem;position:relative}[dir=rtl] .fdp-approval-flow__graph-column:first-child,.fdp-approval-flow__graph-column[dir=rtl]:first-child{margin-right:2rem}.fdp-approval-flow__graph fdp-approval-flow-node+fdp-approval-flow-node:not(:last-child){margin-bottom:1rem}.fdp-approval-flow__graph .fdp-approval-flow__graph-node-inner{padding:0}.fdp-approval-flow__graph .fdp-approval-flow__graph-node-inner .fd-grid-list__item-toolbar .fd-toolbar--extra-content{margin-left:auto}[dir=rtl] .fdp-approval-flow__graph .fdp-approval-flow__graph-node-inner .fd-grid-list__item-toolbar .fd-toolbar--extra-content,.fdp-approval-flow__graph .fdp-approval-flow__graph-node-inner .fd-grid-list__item-toolbar .fd-toolbar--extra-content[dir=rtl]{margin-left:0;margin-right:auto}.fdp-approval-flow__graph .fdp-approval-flow__graph-node-inner .fd-grid-list__item-toolbar .fd-toolbar--actions{display:none}.fdp-approval-flow__graph .fdp-approval-flow__graph-node-inner:not(.fdp-approval-flow__graph .fdp-approval-flow__graph-node-inner--edit) .fd-toolbar.fd-grid-list__item-toolbar{display:none}.cdk-overlay-container{z-index:1002!important}\n"], encapsulation: 2, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ApprovalFlowComponent, [{
        type: Component,
        args: [{ selector: 'fdp-approval-flow', changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, template: "<ng-container fdCompact>\n    <fdp-approval-flow-messages\n        [(messages)]=\"_messages\"\n        [undoLastActionAvailable]=\"!!_previousApprovalProcess\"\n        (undoLastAction)=\"_undoLastAction()\"\n    ></fdp-approval-flow-messages>\n\n    <fd-grid-list\n        #gridList\n        class=\"fdp-approval-flow__toolbar\"\n        [selectionMode]=\"_isEditMode ? 'multiSelect' : 'none'\"\n        (selectionChange)=\"_onNodeSelectionChange($event)\"\n    >\n        <fd-grid-list-title-bar [title]=\"title || ('platformApprovalFlow.defaultTitle' | fdTranslate)\">\n            <fd-grid-list-title-bar-spacer></fd-grid-list-title-bar-spacer>\n\n            <fdp-approval-flow-toolbar-actions\n                *ngIf=\"isEditAvailable\"\n                [graph]=\"_graph\"\n                [selectedNodes]=\"_selectedNodes\"\n                [graphMetadata]=\"_graphMetadata\"\n                [isEditMode]=\"_isEditMode\"\n                (enterEditMode)=\"_enterEditMode()\"\n                (addNode)=\"_addNode($event.node, $event.target)\"\n                (editSelectedNode)=\"_editNode($event)\"\n                (deleteSelectedNodes)=\"_deleteSelectedNodes()\"\n            ></fdp-approval-flow-toolbar-actions>\n        </fd-grid-list-title-bar>\n\n        <div\n            class=\"fdp-approval-flow__watchers\"\n            *ngIf=\"_approvalProcess?.watchers?.length || _isEditMode\"\n            [attr.aria-label]=\"watchersLabel\"\n        >\n            <p class=\"fdp-approval-flow__watchers-title\">\n                {{ watchersLabel || ('platformApprovalFlow.defaultWatchersLabel' | fdTranslate) }}\n            </p>\n\n            <ng-container *ngIf=\"!_isEditMode\">\n                <fd-avatar\n                    *ngFor=\"let watcher of _approvalProcess?.watchers; trackBy: _trackByFn\"\n                    size=\"xs\"\n                    [image]=\"watcher.imgUrl || ''\"\n                    [label]=\"watcher.name\"\n                    [clickable]=\"true\"\n                    [circle]=\"true\"\n                    (avatarClicked)=\"_onWatcherClick(watcher, $event)\"\n                ></fd-avatar>\n            </ng-container>\n\n            <div class=\"fdp-approval-flow__watchers-input-container\" *ngIf=\"_isEditMode\">\n                <fd-multi-input\n                    [dropdownValues]=\"_usersForWatchersList\"\n                    [placeholder]=\"'platformApprovalFlow.watchersInputPlaceholder' | fdTranslate\"\n                    [displayFn]=\"_displayUserFn\"\n                    [valueFn]=\"_userValueFn\"\n                    [showAllButton]=\"true\"\n                    [(ngModel)]=\"_selectedWatcherIds\"\n                    (ngModelChange)=\"_watchersSelectionChanged($event)\"\n                ></fd-multi-input>\n            </div>\n        </div>\n\n        <ng-container *ngIf=\"!_graph.errors\">\n            <ng-container *ngIf=\"_graph.columns.length; else emptyApprovalFlowGraph\">\n                <div\n                    class=\"fdp-approval-flow__container\"\n                    [class.fdp-approval-flow__container--extra-padding-start]=\"true\"\n                    [class.fdp-approval-flow__container--extra-padding-end]=\"true\"\n                >\n                    <div\n                        class=\"fdp-approval-flow-carousel-controls\"\n                        *ngIf=\"_scrollDiff > 0\"\n                        [class.fdp-approval-flow-carousel-controls--edit-mode]=\"_isEditMode\"\n                    >\n                        <button\n                            *ngIf=\"_carouselStepsLeft > 0\"\n                            class=\"fdp-approval-flow-carousel-controls__button--prev-slide\"\n                            [attr.aria-label]=\"'platformApprovalFlow.prevButtonAriaLabel' | fdTranslate\"\n                            (click)=\"nextSlide(-1)\"\n                        >\n                            <fd-icon [glyph]=\"'navigation-' + (_rtl ? 'right' : 'left') + '-arrow'\"></fd-icon>\n                            {{ _carouselStepsLeft }}\n                        </button>\n\n                        <button\n                            *ngIf=\"_carouselStepsRight > 0\"\n                            class=\"fdp-approval-flow-carousel-controls__button--next-slide\"\n                            [attr.aria-label]=\"'platformApprovalFlow.nextButtonAriaLabel' | fdTranslate\"\n                            (click)=\"nextSlide()\"\n                        >\n                            {{ _carouselStepsRight }}\n                            <fd-icon [glyph]=\"'navigation-' + (_rtl ? 'left' : 'right') + '-arrow'\"></fd-icon>\n                        </button>\n                    </div>\n\n                    <div\n                        class=\"fdp-approval-flow__graph-container\"\n                        [class.fdp-approval-flow__graph-container--multiple-root-nodes]=\"_multipleRootNodes\"\n                        [class.fdp-approval-flow__graph-container--multiple-final-nodes]=\"_multipleFinalNodes\"\n                        [class.fd-scrollbar]=\"true\"\n                        #graphContainerEl\n                    >\n                        <div\n                            class=\"fdp-approval-flow__graph\"\n                            #graphEl\n                            [class.fdp-approval-flow__graph--edit-mode]=\"_isEditMode\"\n                        >\n                            <div\n                                class=\"fdp-approval-flow__graph-column\"\n                                *ngFor=\"let column of _graph.columns; let columnIndex = index\"\n                            >\n                                <fdp-approval-flow-node\n                                    *ngFor=\"let node of column.nodes; let nodeIndex = index; trackBy: _trackByFn\"\n                                    cdkDrag\n                                    #approvalFlowNode\n                                    [cdkDragDisabled]=\"_isCdkDragDisabled(node)\"\n                                    [node]=\"node\"\n                                    [meta]=\"_graphMetadata[node.id]\"\n                                    [isEdit]=\"_isEditMode\"\n                                    [isNextNodeBlank]=\"_isNextNodeBlank(node, columnIndex, nodeIndex)\"\n                                    [checkDueDate]=\"checkDueDate\"\n                                    [dueDateThreshold]=\"dueDateThreshold\"\n                                    [renderArrow]=\"columnIndex > 0\"\n                                    [allNodesInColumnApproved]=\"!!column.allNodesApproved\"\n                                    (onAdd)=\"_addNode(node, $event)\"\n                                    (onEdit)=\"_editNode(node)\"\n                                    (onDelete)=\"_onNodeDelete(node)\"\n                                    (keydown)=\"_onNodeKeyDown($event, node)\"\n                                    (cdkDragStarted)=\"_dragDropInProgress = true\"\n                                    (cdkDragReleased)=\"_onNodeDrop(node, $event.source)\"\n                                    (cdkDragMoved)=\"_onNodeDragMoved(node)\"\n                                >\n                                    <!-- Trick with using projection to make grid list items visible for the grid list -->\n                                    <fd-grid-list-item\n                                        type=\"active\"\n                                        [value]=\"node\"\n                                        [selected]=\"!!node.selected\"\n                                        [ariaLabelledBy]=\"approvalFlowNode.approvalFlowNodeId\"\n                                        [disableToolbarClick]=\"true\"\n                                        class=\"fdp-approval-flow__graph-node-inner\"\n                                        [class.fdp-approval-flow__graph-node-inner--edit]=\"_isEditMode\"\n                                        (press)=\"_onNodeClick(node)\"\n                                    >\n                                        <fd-grid-list-item-toolbar>\n                                            <ng-container *ngIf=\"_isEditMode\">\n                                                <ng-container\n                                                    [ngTemplateOutlet]=\"approvalFlowNode._overflowMenuButton\"\n                                                ></ng-container>\n                                            </ng-container>\n                                        </fd-grid-list-item-toolbar>\n\n                                        <fd-avatar\n                                            fd-grid-list-item-image\n                                            [image]=\"node.approvers.length === 1 ? node.approvers[0].imgUrl : null\"\n                                            [label]=\"node.approvers.length > 1 ? node.description : null\"\n                                            size=\"xs\"\n                                            [circle]=\"true\"\n                                        ></fd-avatar>\n\n                                        <ng-template fd-grid-list-item-body>\n                                            <ng-container\n                                                [ngTemplateOutlet]=\"approvalFlowNode._nodeContent\"\n                                            ></ng-container>\n                                        </ng-template>\n                                    </fd-grid-list-item>\n                                </fdp-approval-flow-node>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </ng-container>\n        </ng-container>\n    </fd-grid-list>\n\n    <div fd-bar *ngIf=\"_isEditMode\">\n        <div fd-bar-right>\n            <fd-bar-element>\n                <button\n                    fd-button\n                    [label]=\"'platformApprovalFlow.editModeSaveButtonLabel' | fdTranslate\"\n                    fdType=\"emphasized\"\n                    [disabled]=\"disableSaveButton\"\n                    (click)=\"_saveEditModeChanges()\"\n                ></button>\n            </fd-bar-element>\n\n            <fd-bar-element>\n                <button\n                    fd-button\n                    [label]=\"'platformApprovalFlow.editModeExitButtonLabel' | fdTranslate\"\n                    fdType=\"transparent\"\n                    [disabled]=\"disableExitButton\"\n                    (click)=\"_exitEditMode()\"\n                ></button>\n            </fd-bar-element>\n        </div>\n    </div>\n\n    <ng-template #emptyApprovalFlowGraph>\n        <figure fd-illustrated-message type=\"spot\" [svgConfig]=\"_emptyApprovalFlowSpotConfig\">\n            <figcaption fd-illustrated-message-figcaption>\n                <h3 fd-illustrated-message-title>\n                    {{ 'platformApprovalFlow.emptyTitle' | fdTranslate }}\n                </h3>\n                <p fd-illustrated-message-text>\n                    {{ 'platformApprovalFlow.emptyHint' | fdTranslate }}\n                </p>\n            </figcaption>\n        </figure>\n\n        <!-- TODO #5178: Replace with illustrated image component after it gets fixed -->\n        <div style=\"display: none\">\n            <svg\n                xmlns=\"http://www.w3.org/2000/svg\"\n                width=\"128\"\n                height=\"128\"\n                viewBox=\"0 0 128 128\"\n                id=\"sapIllus-Spot-NoData\"\n            >\n                <path\n                    d=\"M41.6179,32.7174H84.6273a1,1,0,0,1,.723.3092l7.2445,7.5824,7.4817,7.8491a1,1,0,0,1,.2761.69l-.0046,55.6069a4.1038,4.1038,0,0,1-.8787,2.1212A4.0564,4.0564,0,0,1,98.1,107.9631l-56.3858.0313a2.6167,2.6167,0,0,1-3.0812-3.2309l-.0152-69.0594Z\"\n                    class=\"sapIllus_PatternShadow\"\n                    style=\"fill: var(--sapIllus_PatternShadow)\"\n                ></path>\n                <path\n                    d=\"M35.7928,27.4987H78.8022a1,1,0,0,1,.723.3092L86.77,35.39l7.4816,7.8492a1,1,0,0,1,.2762.69l-.0046,55.6069a3,3,0,0,1-3,3H35.808a2.9946,2.9946,0,0,1-3-2.9913c-.01-12.0564-.0423-57.0116-.0152-69.0595A2.9943,2.9943,0,0,1,35.7928,27.4987Z\"\n                    class=\"sapIllus_ObjectFillColor\"\n                    style=\"fill: var(--sapIllus_ObjectFillColor)\"\n                ></path>\n                <path\n                    d=\"M93.2978,44.5335H78.8208a.9925.9925,0,0,1-.974-1.01V28.5108a.97.97,0,0,1,1.6628-.7143L93.9865,42.8092A1.0151,1.0151,0,0,1,93.2978,44.5335Z\"\n                    class=\"sapIllus_BrandColorSecondary\"\n                    style=\"fill: var(--sapIllus_BrandColorSecondary)\"\n                ></path>\n                <path\n                    d=\"M104.608,38.9485l5.9157-1.7721c1.32-.3954.7584-2.5258-.5689-2.1282L104.0392,36.82c-1.32.3953-.7584,2.5258.5688,2.1282Z\"\n                    class=\"sapIllus_Layering1\"\n                    style=\"fill: var(--sapIllus_Layering1)\"\n                ></path>\n                <path\n                    d=\"M85.2973,21.2465l.9718-5.9331c.2154-1.3151-1.777-1.8807-1.9941-.5554l-.9718,5.9332c-.2155,1.3151,1.777,1.8807,1.9941.5553Z\"\n                    class=\"sapIllus_Layering1\"\n                    style=\"fill: var(--sapIllus_Layering1)\"\n                ></path>\n                <path\n                    d=\"M95.3034,29.0015a1.01,1.01,0,0,1-.6837-.267,1.0783,1.0783,0,0,1-.0864-1.4932l5.9511-6.8857a1.01,1.01,0,0,1,1.4538-.0884,1.0785,1.0785,0,0,1,.0865,1.4932l-5.9511,6.8858A1.0164,1.0164,0,0,1,95.3034,29.0015Z\"\n                    class=\"sapIllus_Layering1\"\n                    style=\"fill: var(--sapIllus_Layering1)\"\n                ></path>\n                <path\n                    d=\"M94.8747,42.8861,80.0855,27.4623a1.5152,1.5152,0,0,0-1.0885-.4636H35.807a3.509,3.509,0,0,0-3.5146,3.4836c-.0294,13.2857.0137,66.7559.0157,69.0257a3.5076,3.5076,0,0,0,3.5146,3.4894H91.7709a3.5106,3.5106,0,0,0,3.5146-3.4982l.005-55.5785A1.49,1.49,0,0,0,94.8747,42.8861Zm-16.21-14.8355a1.15,1.15,0,0,1,.2561-.0309,1.04,1.04,0,0,1,.51.2134l14.276,14.8837.0194.02a.5891.5891,0,0,1,.0968.6251c-.1016.1764-.4086.24-.69.24L78.8355,44a.6031.6031,0,0,1-.5472-.6131c-.0087-4.9588-.017-9.9015-.0035-14.8689A.5189.5189,0,0,1,78.6646,28.0506Zm13.1062,73.95H35.8188a2.5045,2.5045,0,0,1-2.5107-2.491c-.002-2.2694-.0451-55.74-.0157-69.0248a2.5054,2.5054,0,0,1,2.5107-2.4861H77.3684a1.49,1.49,0,0,0-.0976.5106V43.4934A1.5145,1.5145,0,0,0,78.7894,45H78.92L94.286,47.9749l-.0046,51.5269A2.5074,2.5074,0,0,1,91.7708,102.0006Z\"\n                    class=\"sapIllus_StrokeDetailColor\"\n                    style=\"fill: var(--sapIllus_StrokeDetailColor)\"\n                ></path>\n            </svg>\n        </div>\n    </ng-template>\n</ng-container>\n", styles: ["/*!\n * Fundamental Library Styles v0.28.3\n * Copyright (c) 2023 SAP SE or an SAP affiliate company.\n * Licensed under Apache License 2.0 (https://github.com/SAP/fundamental-styles/blob/main/LICENSE)\n */.fd-scrollbar{-webkit-box-sizing:border-box;border:0;box-sizing:border-box;color:var(--sapTextColor);font-family:var(--sapFontFamily);font-size:var(--sapFontSize);font-weight:400;forced-color-adjust:none;line-height:var(--sapContent_LineHeight);margin:0;overflow:auto;padding:0;scrollbar-color:var(--fdScrollbar_Thumb_Color) var(--fdScrollbar_Track_Color)}.fd-scrollbar:after,.fd-scrollbar:before{box-sizing:inherit;font-size:inherit}.fd-scrollbar.is-focus,.fd-scrollbar:focus{outline:none;z-index:5}.fd-scrollbar::-webkit-scrollbar{height:var(--fdScrollbar_Dimension);width:var(--fdScrollbar_Dimension)}.fd-scrollbar::-webkit-scrollbar-corner,.fd-scrollbar::-webkit-scrollbar-track{background-color:var(--fdScrollbar_Track_Color)}.fd-scrollbar::-webkit-scrollbar-thumb{-webkit-box-shadow:inset 0 0 0 var(--fdScrollbar_Dimension) var(--fdScrollbar_Thumb_Color);background-color:transparent;border:var(--fdScrollbar_Thumb_Offset) solid transparent;border-radius:calc(var(--fdScrollbar_Thumb_Border_Radius) - var(--fdScrollbar_Thumb_Offset));box-shadow:inset 0 0 0 var(--fdScrollbar_Dimension) var(--fdScrollbar_Thumb_Color)}.fd-scrollbar::-webkit-scrollbar-thumb:active,.fd-scrollbar::-webkit-scrollbar-thumb:hover{box-shadow:inset 0 0 0 var(--fdScrollbar_Dimension) var(--fdScrollbar_Thumb_Hover_Color)}.fd-scrollbar--container::-webkit-scrollbar-corner,.fd-scrollbar--container::-webkit-scrollbar-track{background-color:var(--fdScrollbar_Track_Color);border-radius:0 var(--fdScrollbar_Border_Radius) var(--fdScrollbar_Border_Radius) 0}.fd-scrollbar--container[dir=rtl]::-webkit-scrollbar-corner,.fd-scrollbar--container[dir=rtl]::-webkit-scrollbar-track,[dir=rtl] .fd-scrollbar--container::-webkit-scrollbar-corner,[dir=rtl] .fd-scrollbar--container::-webkit-scrollbar-track{border-radius:var(--fdScrollbar_Border_Radius) 0 0 var(--fdScrollbar_Border_Radius)}.fdp-approval-flow__watchers{margin-bottom:.5rem;padding-left:.5rem}.fdp-approval-flow__watchers-title{font-size:.875em;color:#6a6d70;color:var(--sapContent_LabelColor, #6a6d70);margin:1rem 0 .5rem}.fdp-approval-flow__watchers fd-avatar{margin-right:.5rem;cursor:pointer}.fdp-approval-flow__watchers fd-avatar:focus{outline-offset:.0625rem;outline-width:.0625rem;outline-style:dotted;outline-color:var(--sapContent_FocusColor, #0854a0)}.fdp-approval-flow__watchers .fdp-approval-flow__watchers-input-container{width:17.375rem}[dir=rtl] .fdp-approval-flow__watchers,.fdp-approval-flow__watchers[dir=rtl]{padding-right:.5rem}[dir=rtl] .fdp-approval-flow__watchers fd-avatar,.fdp-approval-flow__watchers[dir=rtl] fd-avatar{margin-left:.5rem;margin-right:0}.fdp-approval-flow__container{max-width:100%;position:relative;padding:0 .5rem}.fdp-approval-flow__container--extra-padding-start{padding-left:2rem}.fdp-approval-flow__container--extra-padding-end{padding-right:2rem}[dir=rtl] .fdp-approval-flow__container.fdp-approval-flow__container--extra-padding-start,.fdp-approval-flow__container[dir=rtl].fdp-approval-flow__container--extra-padding-start{padding-left:.5rem;padding-right:2rem}[dir=rtl] .fdp-approval-flow__container.fdp-approval-flow__container--extra-padding-end,.fdp-approval-flow__container[dir=rtl].fdp-approval-flow__container--extra-padding-end{padding-right:.5rem;padding-left:2rem}[dir=rtl] .fdp-approval-flow__container.fdp-approval-flow__container--extra-padding-start.fdp-approval-flow__container--extra-padding-end,.fdp-approval-flow__container[dir=rtl].fdp-approval-flow__container--extra-padding-start.fdp-approval-flow__container--extra-padding-end{padding-right:2rem;padding-left:2rem}.fdp-approval-flow__graph-container{position:relative;overflow:auto;padding-top:.5rem;padding-bottom:2rem;padding-left:2rem}.fdp-approval-flow__graph-container--multiple-root-nodes{padding-left:4rem}[dir=rtl] .fdp-approval-flow__graph-container--multiple-root-nodes,.fdp-approval-flow__graph-container--multiple-root-nodes[dir=rtl]{padding-right:2rem}[dir=rtl] .fdp-approval-flow__graph-container--multiple-final-nodes,.fdp-approval-flow__graph-container--multiple-final-nodes[dir=rtl]{padding-left:0}.fdp-approval-flow-carousel-controls{position:absolute;display:flex;align-items:center;width:100%;height:6.375rem;padding-top:.5rem;left:0}.fdp-approval-flow-carousel-controls--edit-mode{height:8.375rem}.fdp-approval-flow-carousel-controls__button--prev-slide,.fdp-approval-flow-carousel-controls__button--next-slide{position:absolute;border:none;background:transparent;color:#6a6d70;color:var(--sapContent_LabelColor, #6a6d70);display:flex;justify-content:space-between;width:2rem;align-items:center;cursor:pointer}.fdp-approval-flow-carousel-controls__button--prev-slide fd-icon,.fdp-approval-flow-carousel-controls__button--next-slide fd-icon{font-size:.875rem;color:#0854a0;color:var(--sapButton_IconColor, #0854a0);position:relative;top:.0625rem}.fdp-approval-flow-carousel-controls__button--prev-slide{left:0}[dir=rtl] .fdp-approval-flow-carousel-controls__button--prev-slide,.fdp-approval-flow-carousel-controls__button--prev-slide[dir=rtl]{left:auto;right:0}.fdp-approval-flow-carousel-controls__button--next-slide{right:0}[dir=rtl] .fdp-approval-flow-carousel-controls__button--next-slide,.fdp-approval-flow-carousel-controls__button--next-slide[dir=rtl]{left:0;right:auto}.fdp-approval-flow__graph{display:flex;align-items:flex-start;position:relative;left:0;transition:left .3s}.fdp-approval-flow__graph-column{margin-right:4rem;position:relative}[dir=rtl] .fdp-approval-flow__graph-column:first-child,.fdp-approval-flow__graph-column[dir=rtl]:first-child{margin-right:2rem}.fdp-approval-flow__graph fdp-approval-flow-node+fdp-approval-flow-node:not(:last-child){margin-bottom:1rem}.fdp-approval-flow__graph .fdp-approval-flow__graph-node-inner{padding:0}.fdp-approval-flow__graph .fdp-approval-flow__graph-node-inner .fd-grid-list__item-toolbar .fd-toolbar--extra-content{margin-left:auto}[dir=rtl] .fdp-approval-flow__graph .fdp-approval-flow__graph-node-inner .fd-grid-list__item-toolbar .fd-toolbar--extra-content,.fdp-approval-flow__graph .fdp-approval-flow__graph-node-inner .fd-grid-list__item-toolbar .fd-toolbar--extra-content[dir=rtl]{margin-left:0;margin-right:auto}.fdp-approval-flow__graph .fdp-approval-flow__graph-node-inner .fd-grid-list__item-toolbar .fd-toolbar--actions{display:none}.fdp-approval-flow__graph .fdp-approval-flow__graph-node-inner:not(.fdp-approval-flow__graph .fdp-approval-flow__graph-node-inner--edit) .fd-toolbar.fd-grid-list__item-toolbar{display:none}.cdk-overlay-container{z-index:1002!important}\n"] }]
    }], function () { return [{ type: i1.DialogService }, { type: i0.ChangeDetectorRef }, { type: i0.Injector }, { type: Map, decorators: [{
                type: Optional
            }, {
                type: Inject,
                args: [DATA_PROVIDERS]
            }] }, { type: i2.RtlService, decorators: [{
                type: Optional
            }] }]; }, { title: [{
            type: Input
        }], value: [{
            type: Input
        }], userDataSource: [{
            type: Input
        }], watcherDataSource: [{
            type: Input
        }], teamDataSource: [{
            type: Input
        }], userDetailsTemplate: [{
            type: Input
        }], checkDueDate: [{
            type: Input
        }], dueDateThreshold: [{
            type: Input
        }], allowSendRemindersForStatuses: [{
            type: Input
        }], isEditAvailable: [{
            type: Input
        }], watchersLabel: [{
            type: Input
        }], allowAddParallelNodes: [{
            type: Input
        }], disableSaveButton: [{
            type: Input
        }], disableExitButton: [{
            type: Input
        }], usersDataProviderEntityKey: [{
            type: Input
        }], teamsDataProviderEntityKey: [{
            type: Input
        }], watchersDataProviderEntityKey: [{
            type: Input
        }], nodeClick: [{
            type: Output
        }], afterNodeAdd: [{
            type: Output
        }], afterNodeEdit: [{
            type: Output
        }], valueChange: [{
            type: Output
        }], sendReminders: [{
            type: Output
        }], onDataRequested: [{
            type: Output
        }], onDataReceived: [{
            type: Output
        }], _graphContainerEl: [{
            type: ViewChild,
            args: ['graphContainerEl']
        }], _graphEl: [{
            type: ViewChild,
            args: ['graphEl']
        }], _gridList: [{
            type: ViewChild,
            args: ['gridList']
        }], _nodeComponents: [{
            type: ViewChildren,
            args: [ApprovalFlowNodeComponent]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwcm92YWwtZmxvdy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9saWJzL3BsYXRmb3JtL3NyYy9saWIvYXBwcm92YWwtZmxvdy9hcHByb3ZhbC1mbG93LmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uL2xpYnMvcGxhdGZvcm0vc3JjL2xpYi9hcHByb3ZhbC1mbG93L2FwcHJvdmFsLWZsb3cuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNILHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFVBQVUsRUFDVixZQUFZLEVBQ1osTUFBTSxFQUNOLFFBQVEsRUFDUixLQUFLLEVBSUwsUUFBUSxFQUNSLE1BQU0sRUFDTixTQUFTLEVBRVQsV0FBVyxFQUNYLFNBQVMsRUFDVCxZQUFZLEVBQ1osaUJBQWlCLEVBQ3BCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxVQUFVLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxRQUFRLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUV0RixPQUFPLEVBQUUsYUFBYSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUM5RSxPQUFPLEVBQUUsWUFBWSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXRHLE9BQU8sRUFBRSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDakUsT0FBTyxFQUFFLGlCQUFpQixFQUEwQixNQUFNLGlDQUFpQyxDQUFDO0FBQzVGLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUU3RCxPQUFPLEVBQ0gsb0NBQW9DLEVBRXZDLE1BQU0sMkVBQTJFLENBQUM7QUFDbkYsT0FBTyxF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QkFBL0MsU0FBUzttQkFBQyxrQkFBa0I7WUFHUCxRQUFRO2tCQUE3QixTQUFTO21CQUFDLFNBQVM7WUFHRyxTQUFTO2tCQUEvQixTQUFTO21CQUFDLFVBQVU7WUFHb0IsZUFBZTtrQkFBdkQsWUFBWTttQkFBQyx5QkFBeUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICAgIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICAgIENoYW5nZURldGVjdG9yUmVmLFxuICAgIENvbXBvbmVudCxcbiAgICBFbGVtZW50UmVmLFxuICAgIEV2ZW50RW1pdHRlcixcbiAgICBJbmplY3QsXG4gICAgSW5qZWN0b3IsXG4gICAgSW5wdXQsXG4gICAgT25DaGFuZ2VzLFxuICAgIE9uRGVzdHJveSxcbiAgICBPbkluaXQsXG4gICAgT3B0aW9uYWwsXG4gICAgT3V0cHV0LFxuICAgIFF1ZXJ5TGlzdCxcbiAgICBTaW1wbGVDaGFuZ2VzLFxuICAgIFRlbXBsYXRlUmVmLFxuICAgIFZpZXdDaGlsZCxcbiAgICBWaWV3Q2hpbGRyZW4sXG4gICAgVmlld0VuY2Fwc3VsYXRpb25cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBET1dOX0FSUk9XLCBMRUZUX0FSUk9XLCBSSUdIVF9BUlJPVywgVVBfQVJST1cgfSBmcm9tICdAYW5ndWxhci9jZGsva2V5Y29kZXMnO1xuaW1wb3J0IHsgQ2RrRHJhZyB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9kcmFnLWRyb3AnO1xuaW1wb3J0IHsgY29tYmluZUxhdGVzdCwgZnJvbUV2ZW50LCBtZXJnZSwgU3ViamVjdCwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyB0aHJvdHRsZVRpbWUsIHN3aXRjaE1hcCwgbWFwVG8sIG1hcCwgc3RhcnRXaXRoLCBkaXN0aW5jdFVudGlsQ2hhbmdlZCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgS2V5VXRpbCwgUnRsU2VydmljZSB9IGZyb20gJ0BmdW5kYW1lbnRhbC1uZ3gvY2RrL3V0aWxzJztcbmltcG9ydCB7IEdyaWRMaXN0Q29tcG9uZW50LCBHcmlkTGlzdFNlbGVjdGlvbkV2ZW50IH0gZnJvbSAnQGZ1bmRhbWVudGFsLW5neC9jb3JlL2dyaWQtbGlzdCc7XG5pbXBvcnQgeyBEaWFsb2dTZXJ2aWNlIH0gZnJvbSAnQGZ1bmRhbWVudGFsLW5neC9jb3JlL2RpYWxvZyc7XG5cbmltcG9ydCB7XG4gICAgQXBwcm92YWxGbG93QXBwcm92ZXJEZXRhaWxzQ29tcG9uZW50LFxuICAgIEFwcHJvdmFsRmxvd0FwcHJvdmVyRGV0YWlsc0RpYWxvZ1JlZkRhdGFcbn0gZnJvbSAnLi9hcHByb3ZhbC1mbG93LWFwcHJvdmVyLWRldGFpbHMvYXBwcm92YWwtZmxvdy1hcHByb3Zlci1kZXRhaWxzLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBBcHByb3ZhbEZsb3dOb2RlQ29tcG9uZW50IH0gZnJvbSAnLi9hcHByb3ZhbC1mbG93LW5vZGUvYXBwcm92YWwtZmxvdy1ub2RlLmNvbXBvbmVudCc7XG5pbXBvcnQge1xuICAgIEFkZE5vZGVEaWFsb2dGb3JtRGF0YSxcbiAgICBBUFBST1ZBTF9GTE9XX05PREVfVFlQRVMsXG4gICAgQXBwcm92YWxGbG93QWRkTm9kZUNvbXBvbmVudCxcbiAgICBBZGROb2RlRGlhbG9nUmVmRGF0YSxcbiAgICBBcHByb3ZhbEZsb3dOb2RlVGFyZ2V0XG59IGZyb20gJy4vYXBwcm92YWwtZmxvdy1hZGQtbm9kZS9hcHByb3ZhbC1mbG93LWFkZC1ub2RlLmNvbXBvbmVudCc7XG5pbXBvcnQge1xuICAgIGRpc3BsYXlVc2VyRm4sXG4gICAgZ2V0QmxhbmtBcHByb3ZhbEdyYXBoTm9kZSxcbiAgICBnZXRHcmFwaE5vZGVzLFxuICAgIGlzTm9kZVRhcmdldHNJbmNsdWRlSWQsXG4gICAgdHJhY2tCeUZuLFxuICAgIHVzZXJWYWx1ZUZuXG59IGZyb20gJy4vaGVscGVycyc7XG5pbXBvcnQge1xuICAgIEFwcHJvdmFsR3JhcGhOb2RlLFxuICAgIEFwcHJvdmFsR3JhcGhOb2RlTWV0YWRhdGEsXG4gICAgQXBwcm92YWxOb2RlLFxuICAgIEFwcHJvdmFsUHJvY2VzcyxcbiAgICBBcHByb3ZhbFN0YXR1cyxcbiAgICBBcHByb3ZhbFRlYW0sXG4gICAgQXBwcm92YWxVc2VyLFxuICAgIFNlbmRSZW1pbmRlcnNEYXRhXG59IGZyb20gJy4vaW50ZXJmYWNlcyc7XG5pbXBvcnQge1xuICAgIEFwcHJvdmFsRmxvd1NlbGVjdFR5cGVDb21wb25lbnQsXG4gICAgU2VsZWN0VHlwZURpYWxvZ0Zvcm1EYXRhXG59IGZyb20gJy4vYXBwcm92YWwtZmxvdy1zZWxlY3QtdHlwZS9hcHByb3ZhbC1mbG93LXNlbGVjdC10eXBlLmNvbXBvbmVudCc7XG5pbXBvcnQge1xuICAgIEFwcHJvdmFsRmxvd0dyYXBoLFxuICAgIEFwcHJvdmFsR3JhcGhNZXRhZGF0YSxcbiAgICBnZW5lcmF0ZUFwcHJvdmFsRmxvd0dyYXBoLFxuICAgIGdlbmVyYXRlQXBwcm92YWxGbG93R3JhcGhNZXRhZGF0YVxufSBmcm9tICcuL2FwcHJvdmFsLWZsb3ctZ3JhcGgnO1xuaW1wb3J0IHtcbiAgICBBcHByb3ZhbEZsb3dNZXNzYWdlLFxuICAgIEFwcHJvdmFsRmxvd01lc3NhZ2VUeXBlXG59IGZyb20gJy4vYXBwcm92YWwtZmxvdy1tZXNzYWdlcy9hcHByb3ZhbC1mbG93LW1lc3NhZ2VzLmNvbXBvbmVudCc7XG5pbXBvcnQge1xuICAgIERhdGFQcm92aWRlcixcbiAgICBEQVRBX1BST1ZJREVSUyxcbiAgICBBcHByb3ZhbEZsb3dUZWFtRGF0YVNvdXJjZSxcbiAgICBBcHByb3ZhbEZsb3dVc2VyRGF0YVNvdXJjZVxufSBmcm9tICdAZnVuZGFtZW50YWwtbmd4L3BsYXRmb3JtL3NoYXJlZCc7XG5pbXBvcnQgeyBjbG9uZURlZXAsIHVuaXFCeSB9IGZyb20gJ2xvZGFzaC1lcyc7XG5cbmxldCBkZWZhdWx0SWQgPSAwO1xuLyoqXG4gKiBAZGVwcmVjYXRlZFxuICogQXBwcm92YWwgRmxvdyBjb21wb25lbnQgaXMgZGVwcmljYXRlZCBzaW5jZSB2ZXJzaW9uIDAuNDAuMFxuICovXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2ZkcC1hcHByb3ZhbC1mbG93JyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vYXBwcm92YWwtZmxvdy5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJy4vYXBwcm92YWwtZmxvdy5jb21wb25lbnQuc2NzcyddLFxuICAgIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICAgIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgQXBwcm92YWxGbG93Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSB7XG4gICAgLyoqIFRpdGxlIHdoaWNoIGlzIGRpc3BsYXllZCBpbiB0aGUgaGVhZGVyIG9mIHRoZSBBcHByb3ZhbCBGbG93IGNvbXBvbmVudC4gKi9cbiAgICBASW5wdXQoKSB0aXRsZTogc3RyaW5nO1xuXG4gICAgLyoqIFZhbHVlIG9mIHRoZSBhcHByb3ZhbCBmbG93IGNvbXBvbmVudC4gKi9cbiAgICBASW5wdXQoKSB2YWx1ZTogQXBwcm92YWxQcm9jZXNzO1xuXG4gICAgLyoqIERhdGEgc291cmNlIGZvciB0aGUgdXNlcnMgb2YgQXBwcm92YWwgRmxvdyBjb21wb25lbnQuICovXG4gICAgQElucHV0KCkgdXNlckRhdGFTb3VyY2U6IEFwcHJvdmFsRmxvd1VzZXJEYXRhU291cmNlPEFwcHJvdmFsVXNlcj47XG5cbiAgICAvKiogRGF0YSBzb3VyY2UgZm9yIHRoZSB3YXRjaGVycyBvZiBBcHByb3ZhbCBGbG93IGNvbXBvbmVudC4gKi9cbiAgICBASW5wdXQoKSB3YXRjaGVyRGF0YVNvdXJjZTogQXBwcm92YWxGbG93VXNlckRhdGFTb3VyY2U8QXBwcm92YWxVc2VyPjtcblxuICAgIC8qKiBEYXRhIHNvdXJjZSBmb3IgdGhlIHRlYW1zIG9mIEFwcHJvdmFsIEZsb3cgY29tcG9uZW50LiAqL1xuICAgIEBJbnB1dCgpIHRlYW1EYXRhU291cmNlOiBBcHByb3ZhbEZsb3dUZWFtRGF0YVNvdXJjZTxBcHByb3ZhbFRlYW0+O1xuXG4gICAgLyoqIEEgcmVmZXJlbmNlIHRvIHRoZSB1c2VyIGRldGFpbHMgdGVtcGxhdGUgKi9cbiAgICBASW5wdXQoKSB1c2VyRGV0YWlsc1RlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG4gICAgLyoqIFdoZXRoZXIgdG8gZGlzcGxheSBkdWUgZGF0ZSB3YXJuaW5nIGluIHN0YXR1cyAqL1xuICAgIEBJbnB1dCgpIGNoZWNrRHVlRGF0ZSA9IGZhbHNlO1xuXG4gICAgLyoqIE51bWJlciBvZiBkYXlzIGJlZm9yZSBkdWUgZGF0ZSB3aGVuIHN0YXR1cyBjaGFuZ2VzIHRvIGB3YXJuaW5nYCB3aXRoIHRleHQgJ0R1ZSBpbiBYIGRheXMnLlxuICAgICAqICBOb3QgdXNlZCBpZiAnY2hlY2tEdWVEYXRlJyBlcXVhbHMgZmFsc2UgKi9cbiAgICBASW5wdXQoKSBkdWVEYXRlVGhyZXNob2xkID0gNztcblxuICAgIC8qKiBBIGxpc3Qgb2YgYXBwcm92YWwgc3RhdHVzZXMgdGhhdCBhbGxvdyBzZW5kaW5nIHJlbWluZGVycyB0byB0aGVpciBhcHByb3ZlcnMgKi9cbiAgICBASW5wdXQoKSBhbGxvd1NlbmRSZW1pbmRlcnNGb3JTdGF0dXNlczogQXBwcm92YWxTdGF0dXNbXSA9IFsnaW4gcHJvZ3Jlc3MnLCAnbm90IHN0YXJ0ZWQnXTtcblxuICAgIC8qKiBXaGV0aGVyIHRoZSBhcHByb3ZhbCBmbG93IGlzIGVkaXRhYmxlICovXG4gICAgQElucHV0KCkgaXNFZGl0QXZhaWxhYmxlID0gZmFsc2U7XG5cbiAgICAvKiogVGV4dCBsYWJlbCBmb3Igd2F0Y2hlcnMgbGlzdCAqL1xuICAgIEBJbnB1dCgpIHdhdGNoZXJzTGFiZWw6IHN0cmluZztcblxuICAgIC8qKiBFbmFibGVzIG9yIGRpc2FibGVzIGFiaWxpdHkgdG8gYWRkIHBhcmFsbGVsIG5vZGVzICovXG4gICAgQElucHV0KCkgYWxsb3dBZGRQYXJhbGxlbE5vZGVzID0gdHJ1ZTtcblxuICAgIC8qKiBEaXNhYmxlcyBzYXZlIGJ1dHRvbiwgc2F2ZSBidXR0b24gaXMgZW5hYmxlZCBieSBkZWZhdWx0ICovXG4gICAgQElucHV0KCkgZGlzYWJsZVNhdmVCdXR0b24gPSBmYWxzZTtcblxuICAgIC8qKiBEaXNhYmxlcyBleGl0IGJ1dHRvbiwgZXhpdCBidXR0b24gaXMgZW5hYmxlZCBieSBkZWZhdWx0ICovXG4gICAgQElucHV0KCkgZGlzYWJsZUV4aXRCdXR0b24gPSBmYWxzZTtcblxuICAgIC8qKlxuICAgICAqIE5hbWUgb2YgdGhlIGVudGl0eSBmb3Igd2hpY2ggdXNlcnMgRGF0YVByb3ZpZGVyIHdpbGwgYmUgbG9hZGVkLlxuICAgICAqIEludGVybmFsbHkgd2Ugc2hvdWxkIGJlIGFibGUgdG8gZG8gbG9va3VwIHRvIHNvbWUgcmVnaXN0cnlcbiAgICAgKiBhbmQgcmV0cmlldmUgdGhlIGJlc3QgbWF0Y2hpbmcgRGF0YVByb3ZpZGVyIHRoYXQgaXMgc2V0IG9uIGFwcGxpY2F0aW9uIGxldmVsXG4gICAgICovXG4gICAgQElucHV0KCkgdXNlcnNEYXRhUHJvdmlkZXJFbnRpdHlLZXk/OiBzdHJpbmc7XG5cbiAgICAvKipcbiAgICAgKiBOYW1lIG9mIHRoZSBlbnRpdHkgZm9yIHdoaWNoIHRlYW1zIERhdGFQcm92aWRlciB3aWxsIGJlIGxvYWRlZC5cbiAgICAgKiBJbnRlcm5hbGx5IHdlIHNob3VsZCBiZSBhYmxlIHRvIGRvIGxvb2t1cCB0byBzb21lIHJlZ2lzdHJ5XG4gICAgICogYW5kIHJldHJpZXZlIHRoZSBiZXN0IG1hdGNoaW5nIERhdGFQcm92aWRlciB0aGF0IGlzIHNldCBvbiBhcHBsaWNhdGlvbiBsZXZlbFxuICAgICAqL1xuICAgIEBJbnB1dCgpIHRlYW1zRGF0YVByb3ZpZGVyRW50aXR5S2V5Pzogc3RyaW5nO1xuXG4gICAgLyoqXG4gICAgICogTmFtZSBvZiB0aGUgZW50aXR5IGZvciB3aGljaCBhcHByb3ZhbCBmbG93IERhdGFQcm92aWRlciB3aWxsIGJlIGxvYWRlZC5cbiAgICAgKiBJbnRlcm5hbGx5IHdlIHNob3VsZCBiZSBhYmxlIHRvIGRvIGxvb2t1cCB0byBzb21lIHJlZ2lzdHJ5XG4gICAgICogYW5kIHJldHJpZXZlIHRoZSBiZXN0IG1hdGNoaW5nIERhdGFQcm92aWRlciB0aGF0IGlzIHNldCBvbiBhcHBsaWNhdGlvbiBsZXZlbFxuICAgICAqL1xuICAgIEBJbnB1dCgpIHdhdGNoZXJzRGF0YVByb3ZpZGVyRW50aXR5S2V5Pzogc3RyaW5nO1xuXG4gICAgLyoqIEV2ZW50IGVtaXR0ZWQgb24gYXBwcm92YWwgZmxvdyBub2RlIGNsaWNrLiAqL1xuICAgIEBPdXRwdXQoKSBub2RlQ2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyPEFwcHJvdmFsTm9kZT4oKTtcblxuICAgIC8qKiBFdmVudCBlbWl0dGVkIG9uIGFwcHJvdmFsIGZsb3cgbm9kZSBhZGQgKi9cbiAgICBAT3V0cHV0KCkgYWZ0ZXJOb2RlQWRkID0gbmV3IEV2ZW50RW1pdHRlcjxBcHByb3ZhbE5vZGU+KCk7XG5cbiAgICAvKiogRXZlbnQgZW1pdHRlZCBvbiBhcHByb3ZhbCBmbG93IG5vZGUgZWRpdCAqL1xuICAgIEBPdXRwdXQoKSBhZnRlck5vZGVFZGl0ID0gbmV3IEV2ZW50RW1pdHRlcjxBcHByb3ZhbE5vZGU+KCk7XG5cbiAgICAvKiogRXZlbnQgZW1pdHRlZCB3aGVudmVyIHNhdmUgaXMgY2xpY2tlZCBpbiBlZGl0IG1vZGUgICovXG4gICAgQE91dHB1dCgpIHZhbHVlQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxBcHByb3ZhbFByb2Nlc3M+KCk7XG5cbiAgICAvKiogRXZlbnQgZW1pdHRlZCB3aGVuZXZlciByZW1pbmRlcnMgc2hvdWxkIGJlIHNlbnQgKi9cbiAgICBAT3V0cHV0KCkgc2VuZFJlbWluZGVycyA9IG5ldyBFdmVudEVtaXR0ZXI8U2VuZFJlbWluZGVyc0RhdGE+KCk7XG5cbiAgICAvKiogRXZlbnQgZW1pdHRlZCB3aGVuIGRhdGEgbG9hZGluZyBpcyBzdGFydGVkLiAqL1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAYW5ndWxhci1lc2xpbnQvbm8tb3V0cHV0LW9uLXByZWZpeFxuICAgIEBPdXRwdXQoKSBvbkRhdGFSZXF1ZXN0ZWQgPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XG5cbiAgICAvKiogRXZlbnQgZW1pdHRlZCB3aGVuIGRhdGEgbG9hZGluZyBpcyBmaW5pc2hlZC4gKi9cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQGFuZ3VsYXItZXNsaW50L25vLW91dHB1dC1vbi1wcmVmaXhcbiAgICBAT3V0cHV0KCkgb25EYXRhUmVjZWl2ZWQgPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XG5cbiAgICAvKiogQGhpZGRlbiAqL1xuICAgIEBWaWV3Q2hpbGQoJ2dyYXBoQ29udGFpbmVyRWwnKSBfZ3JhcGhDb250YWluZXJFbDogRWxlbWVudFJlZjxIVE1MRGl2RWxlbWVudD47XG5cbiAgICAvKiogQGhpZGRlbiAqL1xuICAgIEBWaWV3Q2hpbGQoJ2dyYXBoRWwnKSBfZ3JhcGhFbDogRWxlbWVudFJlZjxIVE1MRGl2RWxlbWVudD47XG5cbiAgICAvKiogQGhpZGRlbiAqL1xuICAgIEBWaWV3Q2hpbGQoJ2dyaWRMaXN0JykgX2dyaWRMaXN0OiBHcmlkTGlzdENvbXBvbmVudDxBcHByb3ZhbEdyYXBoTm9kZT47XG5cbiAgICAvKiogQGhpZGRlbiAqL1xuICAgIEBWaWV3Q2hpbGRyZW4oQXBwcm92YWxGbG93Tm9kZUNvbXBvbmVudCkgX25vZGVDb21wb25lbnRzOiBRdWVyeUxpc3Q8QXBwcm92YWxGbG93Tm9kZUNvbXBvbmVudD47XG5cbiAgICAvKiogQGhpZGRlbiAqL1xuICAgIF9hcHByb3ZhbFByb2Nlc3M6IEFwcHJvdmFsUHJvY2VzcztcblxuICAgIC8qKiBAaGlkZGVuICovXG4gICAgX2luaXRpYWxBcHByb3ZhbFByb2Nlc3M/OiBBcHByb3ZhbFByb2Nlc3M7XG5cbiAgICAvKiogQGhpZGRlbiAqL1xuICAgIF9wcmV2aW91c0FwcHJvdmFsUHJvY2Vzcz86IEFwcHJvdmFsUHJvY2VzcztcblxuICAgIC8qKiBAaGlkZGVuICovXG4gICAgX2dyYXBoOiBBcHByb3ZhbEZsb3dHcmFwaDtcblxuICAgIC8qKiBAaGlkZGVuICovXG4gICAgX2lzQ2Fyb3VzZWwgPSBmYWxzZTtcblxuICAgIC8qKiBAaGlkZGVuICovXG4gICAgX2dyYXBoTWV0YWRhdGE6IEFwcHJvdmFsR3JhcGhNZXRhZGF0YSA9IHt9O1xuXG4gICAgLyoqIEBoaWRkZW4gKi9cbiAgICBfaXNFZGl0TW9kZSA9IGZhbHNlO1xuXG4gICAgLyoqIEBoaWRkZW4gKi9cbiAgICBfdXNlcnNGb3JXYXRjaGVyc0xpc3Q6IEFwcHJvdmFsVXNlcltdID0gW107XG5cbiAgICAvKiogQGhpZGRlbiAqL1xuICAgIHByaXZhdGUgX3NlbGVjdGVkV2F0Y2hlcnM6IEFwcHJvdmFsVXNlcltdID0gW107XG5cbiAgICAvKiogQGhpZGRlbiAqL1xuICAgIF9zZWxlY3RlZFdhdGNoZXJJZHM6IEFwcHJvdmFsVXNlclsnaWQnXVtdID0gW107XG5cbiAgICAvKiogQGhpZGRlbiAqL1xuICAgIF9tZXNzYWdlczogQXBwcm92YWxGbG93TWVzc2FnZVtdID0gW107XG5cbiAgICAvKiogQGhpZGRlbiAqL1xuICAgIF9kaXNwbGF5VXNlckZuID0gZGlzcGxheVVzZXJGbjtcblxuICAgIC8qKiBAaGlkZGVuICovXG4gICAgX3VzZXJWYWx1ZUZuID0gdXNlclZhbHVlRm47XG5cbiAgICAvKiogQGhpZGRlbiAqL1xuICAgIF90cmFja0J5Rm4gPSB0cmFja0J5Rm47XG5cbiAgICAvKiogQGhpZGRlbiAqL1xuICAgIF9lbXB0eUFwcHJvdmFsRmxvd1Nwb3RDb25maWcgPSB7XG4gICAgICAgIHNwb3Q6IHsgdXJsOiAnJywgaWQ6ICdzYXBJbGx1cy1TcG90LU5vRGF0YScgfVxuICAgIH07XG5cbiAgICAvKiogQGhpZGRlbiAqL1xuICAgIF9tdWx0aXBsZVJvb3ROb2RlcyA9IGZhbHNlO1xuXG4gICAgLyoqIEBoaWRkZW4gKi9cbiAgICBfbXVsdGlwbGVGaW5hbE5vZGVzID0gZmFsc2U7XG5cbiAgICAvKiogQGhpZGRlbiAqL1xuICAgIF9kcmFnRHJvcEluUHJvZ3Jlc3MgPSBmYWxzZTtcblxuICAgIC8qKiBAaGlkZGVuICovXG4gICAgcmVhZG9ubHkgYXBwcm92YWxGbG93VW5pcXVlSWQgPSBgZmRwLWFwcHJvdmFsLWZsb3ctJHsrK2RlZmF1bHRJZH1gO1xuXG4gICAgLyoqIEBoaWRkZW4gKi9cbiAgICBwcml2YXRlIF9lZGl0TW9kZUluaXRTdWI6IFN1YnNjcmlwdGlvbjtcblxuICAgIC8qKiBAaGlkZGVuICovXG4gICAgcHJpdmF0ZSBfc3Vic2NyaXB0aW9ucyA9IG5ldyBTdWJzY3JpcHRpb24oKTtcblxuICAgIC8qKiBAaGlkZGVuICovXG4gICAgcHJpdmF0ZSBfZGF0YVNvdXJjZUNoYW5nZWQkID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcblxuICAgIC8qKiBAaGlkZGVuICovXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgcmVhZG9ubHkgX2RpYWxvZ1NlcnZpY2U6IERpYWxvZ1NlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgcmVhZG9ubHkgX2NkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgICAgIHByaXZhdGUgcmVhZG9ubHkgX2luamVjdG9yOiBJbmplY3RvcixcbiAgICAgICAgQE9wdGlvbmFsKCkgQEluamVjdChEQVRBX1BST1ZJREVSUykgcHJpdmF0ZSBwcm92aWRlcnM6IE1hcDxzdHJpbmcsIERhdGFQcm92aWRlcjxhbnk+PixcbiAgICAgICAgQE9wdGlvbmFsKCkgcHJpdmF0ZSByZWFkb25seSBfcnRsU2VydmljZTogUnRsU2VydmljZVxuICAgICkge31cblxuICAgIC8qKiBSZXR1cm5zIHNuYXBzaG90IG9mIHRoZSBjdXJyZW50IGFuZCBpbml0aWFsIHN0YXRlcyBvZiBhcHByb3ZhbCBwcm9jZXNzICovXG4gICAgZ2V0IGFwcHJvdmFsUHJvY2VzcygpOiBBcHByb3ZhbFByb2Nlc3Mge1xuICAgICAgICByZXR1cm4gY2xvbmVEZWVwKHRoaXMuX2FwcHJvdmFsUHJvY2Vzcyk7XG4gICAgfVxuXG4gICAgLyoqIEBoaWRkZW4gKi9cbiAgICBnZXQgX3J0bCgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3J0bFNlcnZpY2U/LnJ0bC5nZXRWYWx1ZSgpO1xuICAgIH1cblxuICAgIC8qKiBAaGlkZGVuICovXG4gICAgZ2V0IF9zZWxlY3RlZE5vZGVzKCk6IEFwcHJvdmFsR3JhcGhOb2RlW10ge1xuICAgICAgICByZXR1cm4gZ2V0R3JhcGhOb2Rlcyh0aGlzLl9ncmFwaCkuZmlsdGVyKChub2RlKSA9PiBub2RlLnNlbGVjdGVkKTtcbiAgICB9XG5cbiAgICAvKiogQGhpZGRlbiAqL1xuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgICBpZiAoIXRoaXMudXNlckRhdGFTb3VyY2UpIHtcbiAgICAgICAgICAgIGNvbnN0IHVzZXJzRFAgPSB0aGlzLnVzZXJzRGF0YVByb3ZpZGVyRW50aXR5S2V5ICYmIHRoaXMucHJvdmlkZXJzPy5nZXQodGhpcy51c2Vyc0RhdGFQcm92aWRlckVudGl0eUtleSk7XG4gICAgICAgICAgICBpZiAodXNlcnNEUCkge1xuICAgICAgICAgICAgICAgIHRoaXMudXNlckRhdGFTb3VyY2UgPSBuZXcgQXBwcm92YWxGbG93VXNlckRhdGFTb3VyY2UodXNlcnNEUCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0NvdWxkIG5vdCByZXNvbHZlIHVzZXJzIGRhdGEgc291cmNlJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCF0aGlzLndhdGNoZXJEYXRhU291cmNlKSB7XG4gICAgICAgICAgICBjb25zdCB3YXRjaGVyc0RQID1cbiAgICAgICAgICAgICAgICB0aGlzLndhdGNoZXJzRGF0YVByb3ZpZGVyRW50aXR5S2V5ICYmIHRoaXMucHJvdmlkZXJzPy5nZXQodGhpcy53YXRjaGVyc0RhdGFQcm92aWRlckVudGl0eUtleSk7XG4gICAgICAgICAgICBpZiAod2F0Y2hlcnNEUCkge1xuICAgICAgICAgICAgICAgIHRoaXMud2F0Y2hlckRhdGFTb3VyY2UgPSBuZXcgQXBwcm92YWxGbG93VXNlckRhdGFTb3VyY2Uod2F0Y2hlcnNEUCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0NvdWxkIG5vdCByZXNvbHZlIHdhdGNoZXJzIGRhdGEgc291cmNlJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCF0aGlzLnRlYW1EYXRhU291cmNlKSB7XG4gICAgICAgICAgICBjb25zdCB0ZWFtc0RQID0gdGhpcy50ZWFtc0RhdGFQcm92aWRlckVudGl0eUtleSAmJiB0aGlzLnByb3ZpZGVycz8uZ2V0KHRoaXMudGVhbXNEYXRhUHJvdmlkZXJFbnRpdHlLZXkpO1xuICAgICAgICAgICAgaWYgKHRlYW1zRFApIHtcbiAgICAgICAgICAgICAgICB0aGlzLnRlYW1EYXRhU291cmNlID0gbmV3IEFwcHJvdmFsRmxvd1RlYW1EYXRhU291cmNlKHRlYW1zRFApO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdDb3VsZCBub3QgcmVzb2x2ZSB0ZWFtcyBkYXRhIHNvdXJjZScpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fbGlzdGVuT25SZXNpemUoKTtcbiAgICAgICAgdGhpcy5fc2V0dXBEYXRhU291cmNlU3Vic2NyaXB0aW9uKCk7XG4gICAgfVxuXG4gICAgLyoqIEBoaWRkZW4gKi9cbiAgICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgICAgIGlmIChjaGFuZ2VzLnZhbHVlKSB7XG4gICAgICAgICAgICBjb25zdCBwcm9jZXNzID0gdGhpcy52YWx1ZSA/PyB7IHdhdGNoZXJzOiBbXSwgbm9kZXM6IFtdIH07XG4gICAgICAgICAgICB0aGlzLl9pbml0aWFsQXBwcm92YWxQcm9jZXNzID0gY2xvbmVEZWVwKHByb2Nlc3MpO1xuICAgICAgICAgICAgdGhpcy5fYnVpbGRWaWV3KHByb2Nlc3MpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNoYW5nZXMudXNlckRhdGFTb3VyY2UgfHwgY2hhbmdlcy53YXRjaGVyRGF0YVNvdXJjZSB8fCBjaGFuZ2VzLnRlYW1EYXRhU291cmNlKSB7XG4gICAgICAgICAgICB0aGlzLl9kYXRhU291cmNlQ2hhbmdlZCQubmV4dCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqIEBoaWRkZW4gKi9cbiAgICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5fc3Vic2NyaXB0aW9ucy51bnN1YnNjcmliZSgpO1xuICAgIH1cblxuICAgIC8qKiBAaGlkZGVuICovXG4gICAgX2lzTmV4dE5vZGVCbGFuayhub2RlOiBBcHByb3ZhbEdyYXBoTm9kZSwgY29sdW1uSW5kZXg6IG51bWJlciwgbm9kZUluZGV4OiBudW1iZXIpOiBib29sZWFuIHtcbiAgICAgICAgY29uc3QgbmV4dE5vZGUgPSB0aGlzLl9ncmFwaC5jb2x1bW5zW2NvbHVtbkluZGV4ICsgMV0/Lm5vZGVzW25vZGVJbmRleF07XG4gICAgICAgIGNvbnN0IG5leHROb2RlQmxhbmsgPSBuZXh0Tm9kZT8uYmxhbms7XG4gICAgICAgIGNvbnN0IG5leHROb2RlUGFyYWxsZWxFbmQgPSB0aGlzLl9ncmFwaE1ldGFkYXRhW25leHROb2RlPy5pZF0/LnBhcmFsbGVsRW5kO1xuXG4gICAgICAgIHJldHVybiAhbm9kZS5ibGFuayAmJiAhIW5leHROb2RlQmxhbmsgJiYgIW5leHROb2RlUGFyYWxsZWxFbmQ7XG4gICAgfVxuXG4gICAgLyoqIEBoaWRkZW4gKi9cbiAgICBfaXNDZGtEcmFnRGlzYWJsZWQobm9kZTogQXBwcm92YWxHcmFwaE5vZGUpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuICF0aGlzLl9pc0VkaXRNb2RlIHx8IG5vZGUuYmxhbmsgfHwgbm9kZS5zcGFjZSB8fCBub2RlLnN0YXR1cyAhPT0gJ25vdCBzdGFydGVkJztcbiAgICB9XG5cbiAgICAvKiogQGhpZGRlbiBOb2RlIGNsaWNrIGhhbmRsZXIgKi9cbiAgICBfb25Ob2RlQ2xpY2sobm9kZTogQXBwcm92YWxOb2RlKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLl9kcmFnRHJvcEluUHJvZ3Jlc3MpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGRpYWxvZyA9IHRoaXMuX2RpYWxvZ1NlcnZpY2Uub3BlbjxBcHByb3ZhbEZsb3dBcHByb3ZlckRldGFpbHNEaWFsb2dSZWZEYXRhPihcbiAgICAgICAgICAgIEFwcHJvdmFsRmxvd0FwcHJvdmVyRGV0YWlsc0NvbXBvbmVudCxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgICAgIG5vZGUsXG4gICAgICAgICAgICAgICAgICAgIGFsbG93U2VuZFJlbWluZGVyOiB0aGlzLmFsbG93U2VuZFJlbWluZGVyc0ZvclN0YXR1c2VzLmluY2x1ZGVzKG5vZGUuc3RhdHVzKSxcbiAgICAgICAgICAgICAgICAgICAgLi4udGhpcy5fZGVmYXVsdERpYWxvZ09wdGlvbnNcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdGhpcy5faW5qZWN0b3JcbiAgICAgICAgKTtcblxuICAgICAgICBkaWFsb2cuYWZ0ZXJDbG9zZWQuc3Vic2NyaWJlKChyZW1pbmRlclRhcmdldHMpID0+IHtcbiAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KHJlbWluZGVyVGFyZ2V0cykpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNlbmRSZW1pbmRlcnMuZW1pdCh7IHVzZXJzOiByZW1pbmRlclRhcmdldHMsIG5vZGUgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMubm9kZUNsaWNrLmVtaXQobm9kZSk7XG4gICAgfVxuXG4gICAgLyoqIEBoaWRkZW4gKi9cbiAgICBfb25Ob2RlQWRkKG5vZGU6IEFwcHJvdmFsTm9kZSk6IHZvaWQge1xuICAgICAgICB0aGlzLmFmdGVyTm9kZUFkZC5lbWl0KG5vZGUpO1xuICAgIH1cblxuICAgIC8qKiBAaGlkZGVuICovXG4gICAgX29uTm9kZUVkaXQobm9kZTogQXBwcm92YWxOb2RlKTogdm9pZCB7XG4gICAgICAgIHRoaXMuYWZ0ZXJOb2RlRWRpdC5lbWl0KG5vZGUpO1xuICAgIH1cblxuICAgIC8qKiBAaGlkZGVuICovXG4gICAgX29uTm9kZVNlbGVjdGlvbkNoYW5nZShldmVudDogR3JpZExpc3RTZWxlY3Rpb25FdmVudDxBcHByb3ZhbEdyYXBoTm9kZT4pOiB2b2lkIHtcbiAgICAgICAgdGhpcy5fZ3JhcGguY29sdW1ucy5mb3JFYWNoKChjb2x1bW4pID0+IHtcbiAgICAgICAgICAgIGNvbHVtbi5ub2Rlcy5mb3JFYWNoKChub2RlKSA9PiB7XG4gICAgICAgICAgICAgICAgbm9kZS5zZWxlY3RlZCA9ICEhZXZlbnQuc2VsZWN0aW9uLmZpbmQoKF9ub2RlKSA9PiBfbm9kZS5pZCA9PT0gbm9kZS5pZCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqIEBoaWRkZW4gV2F0Y2hlcidzIGF2YXRhciBjbGljayBoYW5kbGVyICovXG4gICAgX29uV2F0Y2hlckNsaWNrKHdhdGNoZXI6IEFwcHJvdmFsVXNlciwgZXZlbnQ6IEV2ZW50KTogdm9pZCB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHRoaXMuX2RpYWxvZ1NlcnZpY2Uub3BlbjxBcHByb3ZhbEZsb3dBcHByb3ZlckRldGFpbHNEaWFsb2dSZWZEYXRhPihBcHByb3ZhbEZsb3dBcHByb3ZlckRldGFpbHNDb21wb25lbnQsIHtcbiAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICB3YXRjaGVyLFxuICAgICAgICAgICAgICAgIC4uLnRoaXMuX2RlZmF1bHREaWFsb2dPcHRpb25zXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKiBSZXRyaXZlIG1ldGFkYXRhIGJ5IG5vZGUgaWQgKi9cbiAgICBnZXROb2RlTWV0YWRhdGFCeU5vZGVJZChub2RlSWQ6IHN0cmluZyk6IEFwcHJvdmFsR3JhcGhOb2RlTWV0YWRhdGEge1xuICAgICAgICByZXR1cm4gdGhpcy5fZ3JhcGhNZXRhZGF0YVtub2RlSWRdO1xuICAgIH1cblxuICAgIC8qKiBTY3JvbGwgdG8gdGhlIG5leHQgaG9yaXpvbnRhbCBzbGlkZSAqL1xuICAgIG5leHRTbGlkZShkaXIgPSAxKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IHRocmVzaG9sZCA9IDE7XG5cbiAgICAgICAgbGV0IHBvcyA9IDA7XG5cbiAgICAgICAgaWYgKGRpciA9PT0gMSkge1xuICAgICAgICAgICAgY29uc3QgbGFzdFN0ZXAgPSB0aGlzLl9jYXJvdXNlbFN0ZXBzUmlnaHQgPT09IDE7XG4gICAgICAgICAgICBjb25zdCBuZXh0U3RlcCA9IHRoaXMuX2Nhcm91c2VsU3RlcHNDb3VudCAtIHRoaXMuX2Nhcm91c2VsU3RlcHNSaWdodCArIDE7XG4gICAgICAgICAgICBjb25zdCB2aXNpYmxlUmlnaHRQb2ludCA9IHRoaXMuX2Nhcm91c2VsU3RlcFNpemUgKiBuZXh0U3RlcCArIChsYXN0U3RlcCA/IDAgOiB0aHJlc2hvbGQpO1xuICAgICAgICAgICAgcG9zID0gdmlzaWJsZVJpZ2h0UG9pbnQgLSB0aGlzLl9ncmFwaEVsLm5hdGl2ZUVsZW1lbnQuY2xpZW50V2lkdGg7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBsYXN0U3RlcCA9IHRoaXMuX2Nhcm91c2VsU3RlcHNMZWZ0ID09PSAxO1xuICAgICAgICAgICAgY29uc3QgbmV4dFN0ZXAgPSB0aGlzLl9jYXJvdXNlbFN0ZXBzTGVmdCAtIDE7XG4gICAgICAgICAgICBwb3MgPSB0aGlzLl9jYXJvdXNlbFN0ZXBTaXplICogbmV4dFN0ZXAgLSAobGFzdFN0ZXAgPyAwIDogdGhyZXNob2xkKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX3NldFNjcm9sbFBvc2l0aW9uKHBvcyk7XG5cbiAgICAgICAgdGhpcy5fY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgICB9XG5cbiAgICAvKiogQGhpZGRlbiAqL1xuICAgIF9zZXRTY3JvbGxQb3NpdGlvbihwb3M6IG51bWJlcik6IHZvaWQge1xuICAgICAgICB0aGlzLl9ncmFwaENvbnRhaW5lckVsLm5hdGl2ZUVsZW1lbnQuc2Nyb2xsVG8oe1xuICAgICAgICAgICAgbGVmdDogcG9zLFxuICAgICAgICAgICAgYmVoYXZpb3I6ICdzbW9vdGgnXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKiBAaGlkZGVuICovXG4gICAgcHJpdmF0ZSBfbW92ZUNvbEluVmlldyhjb2xJbmRleDogbnVtYmVyKTogYW55IHtcbiAgICAgICAgY29uc3Qgbm9kZSA9IHRoaXMuX2dyYXBoRWwubmF0aXZlRWxlbWVudC5jaGlsZHJlbltjb2xJbmRleF0uZmlyc3RFbGVtZW50Q2hpbGQ7XG4gICAgICAgIGlmICghbm9kZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgeyB4OiBub2RlWCwgd2lkdGggfSA9IG5vZGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cbiAgICAgICAgY29uc3QgZGVsdGEgPSB0aGlzLl9ncmFwaENvbnRhaW5lckVsLm5hdGl2ZUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkueDtcblxuICAgICAgICBjb25zdCBsZWZ0ID0gbm9kZVggLSBkZWx0YTtcbiAgICAgICAgY29uc3QgcmlnaHQgPSBsZWZ0ICsgd2lkdGg7XG5cbiAgICAgICAgaWYgKGxlZnQgPCAwKSB7XG4gICAgICAgICAgICB0aGlzLl9zZXRTY3JvbGxQb3NpdGlvbih0aGlzLl9ncmFwaENvbnRhaW5lckVsLm5hdGl2ZUVsZW1lbnQuc2Nyb2xsTGVmdCArIGxlZnQpO1xuICAgICAgICB9IGVsc2UgaWYgKHJpZ2h0ID4gdGhpcy5fZ3JhcGhFbC5uYXRpdmVFbGVtZW50LmNsaWVudFdpZHRoKSB7XG4gICAgICAgICAgICB0aGlzLl9zZXRTY3JvbGxQb3NpdGlvbihcbiAgICAgICAgICAgICAgICB0aGlzLl9ncmFwaENvbnRhaW5lckVsLm5hdGl2ZUVsZW1lbnQuc2Nyb2xsTGVmdCArIHJpZ2h0IC0gdGhpcy5fZ3JhcGhFbC5uYXRpdmVFbGVtZW50LmNsaWVudFdpZHRoXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqIEBoaWRkZW4gSGFuZGxlIG5vZGUga2V5ZG93biBhbmQgZm9jdXMgb3RoZXIgbm9kZSBiYXNlZCBvbiB3aGljaCBrZXkgaXMgcHJlc3NlZCAqL1xuICAgIF9vbk5vZGVLZXlEb3duKGV2ZW50OiBLZXlib2FyZEV2ZW50LCBub2RlOiBBcHByb3ZhbEdyYXBoTm9kZSk6IHZvaWQge1xuICAgICAgICBpZiAoIUtleVV0aWwuaXNLZXlDb2RlKGV2ZW50LCBbVVBfQVJST1csIERPV05fQVJST1csIFJJR0hUX0FSUk9XLCBMRUZUX0FSUk9XXSkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHsgbm9kZUluZGV4LCBjb2x1bW5JbmRleCB9ID0gdGhpcy5fZ3JhcGhNZXRhZGF0YVtub2RlLmlkXTtcblxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIGxldCBuZXh0Rm9jdXNUYXJnZXQ6IEFwcHJvdmFsR3JhcGhOb2RlIHwgdW5kZWZpbmVkO1xuXG4gICAgICAgIGlmICh0eXBlb2Ygbm9kZUluZGV4ID09PSAnbnVtYmVyJyAmJiB0eXBlb2YgY29sdW1uSW5kZXggPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICBpZiAoS2V5VXRpbC5pc0tleUNvZGUoZXZlbnQsIFVQX0FSUk9XKSkge1xuICAgICAgICAgICAgICAgIGlmIChub2RlSW5kZXggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIG5leHRGb2N1c1RhcmdldCA9IHRoaXMuX2dldE5leHRWZXJ0aWNhbE5vZGUobm9kZUluZGV4LCBjb2x1bW5JbmRleCwgJ3VwJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmIChLZXlVdGlsLmlzS2V5Q29kZShldmVudCwgRE9XTl9BUlJPVykpIHtcbiAgICAgICAgICAgICAgICBuZXh0Rm9jdXNUYXJnZXQgPSB0aGlzLl9nZXROZXh0VmVydGljYWxOb2RlKG5vZGVJbmRleCwgY29sdW1uSW5kZXgsICdkb3duJyk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKEtleVV0aWwuaXNLZXlDb2RlKGV2ZW50LCBMRUZUX0FSUk9XKSkge1xuICAgICAgICAgICAgICAgIG5leHRGb2N1c1RhcmdldCA9IHRoaXMuX2dldE5leHRIb3Jpem9udGFsTm9kZShub2RlSW5kZXgsIGNvbHVtbkluZGV4LCB0aGlzLl9ydGwgPyAncmlnaHQnIDogJ2xlZnQnKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoS2V5VXRpbC5pc0tleUNvZGUoZXZlbnQsIFJJR0hUX0FSUk9XKSkge1xuICAgICAgICAgICAgICAgIG5leHRGb2N1c1RhcmdldCA9IHRoaXMuX2dldE5leHRIb3Jpem9udGFsTm9kZShub2RlSW5kZXgsIGNvbHVtbkluZGV4LCB0aGlzLl9ydGwgPyAnbGVmdCcgOiAncmlnaHQnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChuZXh0Rm9jdXNUYXJnZXQpIHtcbiAgICAgICAgICAgIHRoaXMuX2ZvY3VzTm9kZShuZXh0Rm9jdXNUYXJnZXQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqIEBoaWRkZW4gRmV0Y2ggYWxsIG5lY2Vzc2FyeSBkYXRhIGFuZCBlbnRlciBlZGl0IG1vZGUgKi9cbiAgICBfZW50ZXJFZGl0TW9kZSgpOiB2b2lkIHtcbiAgICAgICAgLy8gdGhlcmUncyBubyBzdXBwb3J0IGZvciBzZWFyY2hpbmcgaW4gbXVsdGktaW5wdXQsIHNvIGdyYWJiaW5nIGFsbCB3YXRjaGVyc1xuICAgICAgICAvLyB0cmlnZ2VyaW5nIGluaXRpYWwgbG9hZGluZyBvZiBkYXRhIGluIGRhdGEgc291cmNlc1xuICAgICAgICB0aGlzLndhdGNoZXJEYXRhU291cmNlLm1hdGNoKCk7XG4gICAgICAgIHRoaXMuX2VkaXRNb2RlSW5pdFN1YiA9IHRoaXMud2F0Y2hlckRhdGFTb3VyY2Uub3BlbigpLnN1YnNjcmliZSgod2F0Y2hlcnMpID0+IHtcbiAgICAgICAgICAgIHRoaXMuX3VzZXJzRm9yV2F0Y2hlcnNMaXN0ID0gd2F0Y2hlcnM7XG4gICAgICAgICAgICB0aGlzLl9zZWxlY3RlZFdhdGNoZXJzID0gdGhpcy5fYXBwcm92YWxQcm9jZXNzLndhdGNoZXJzO1xuICAgICAgICAgICAgdGhpcy5fc2VsZWN0ZWRXYXRjaGVySWRzID0gdGhpcy5fc2VsZWN0ZWRXYXRjaGVycy5tYXAoKHcpID0+IHcuaWQpO1xuICAgICAgICAgICAgdGhpcy5faXNFZGl0TW9kZSA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLl9pbml0aWFsQXBwcm92YWxQcm9jZXNzID0gY2xvbmVEZWVwKHRoaXMuX2FwcHJvdmFsUHJvY2Vzcyk7XG4gICAgICAgICAgICB0aGlzLl9jZHIuZGV0ZWN0Q2hhbmdlcygpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5fc3Vic2NyaXB0aW9ucy5hZGQodGhpcy5fZWRpdE1vZGVJbml0U3ViKTtcbiAgICB9XG5cbiAgICAvKiogQGhpZGRlbiBTZW5kIHVwZGF0ZSBhcHByb3ZhbCBwcm9jZXNzIGNhbGxzIHRvIERhdGFTb3VyY2UgYW5kIGV4aXQgZWRpdCBtb2RlKi9cbiAgICBfc2F2ZUVkaXRNb2RlQ2hhbmdlcygpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5fZWRpdE1vZGVJbml0U3ViPy51bnN1YnNjcmliZSgpO1xuICAgICAgICB0aGlzLndhdGNoZXJEYXRhU291cmNlLmNsb3NlKCk7XG5cbiAgICAgICAgdGhpcy5faW5pdGlhbEFwcHJvdmFsUHJvY2VzcyA9IHVuZGVmaW5lZDtcbiAgICAgICAgdGhpcy5faXNFZGl0TW9kZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLl9tZXNzYWdlcyA9IFtdO1xuXG4gICAgICAgIGNvbnN0IHVwZGF0ZWQgPSB7XG4gICAgICAgICAgICAuLi50aGlzLl9hcHByb3ZhbFByb2Nlc3MsXG4gICAgICAgICAgICB3YXRjaGVyczogdGhpcy5fc2VsZWN0ZWRXYXRjaGVyc1xuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuX2J1aWxkVmlldyh1cGRhdGVkKTtcblxuICAgICAgICB0aGlzLnZhbHVlQ2hhbmdlLmVtaXQodXBkYXRlZCk7XG4gICAgfVxuXG4gICAgLyoqIEBoaWRkZW4gUmVzdG9yZSBpbml0aWFsIGFwcHJvdmFsIGZsb3cgc3RhdGUgYW5kIGV4aXQgZWRpdCBtb2RlICovXG4gICAgX2V4aXRFZGl0TW9kZSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5fZWRpdE1vZGVJbml0U3ViPy51bnN1YnNjcmliZSgpO1xuICAgICAgICB0aGlzLndhdGNoZXJEYXRhU291cmNlLmNsb3NlKCk7XG5cbiAgICAgICAgdGhpcy5fYXBwcm92YWxQcm9jZXNzID0gY2xvbmVEZWVwKHRoaXMuX2luaXRpYWxBcHByb3ZhbFByb2Nlc3MhKTtcbiAgICAgICAgdGhpcy5faW5pdGlhbEFwcHJvdmFsUHJvY2VzcyA9IHVuZGVmaW5lZDtcbiAgICAgICAgdGhpcy5faXNFZGl0TW9kZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLl9tZXNzYWdlcyA9IFtdO1xuXG4gICAgICAgIHRoaXMuX2J1aWxkVmlldyh0aGlzLl9hcHByb3ZhbFByb2Nlc3MpO1xuICAgIH1cblxuICAgIC8qKiBAaGlkZGVuICovXG4gICAgX3dhdGNoZXJzU2VsZWN0aW9uQ2hhbmdlZChzZWxlY3RlZElkczogQXBwcm92YWxVc2VyWydpZCddW10pOiB2b2lkIHtcbiAgICAgICAgY29uc3QgaWRzU2V0ID0gbmV3IFNldChzZWxlY3RlZElkcyk7XG4gICAgICAgIC8vIHVwZGF0aW5nIHdhdGNoZXJzIHNlbGVjdGlvblxuICAgICAgICAvLyBzaW5jZSBpdCdzIHBvc3NpYmxlIFwiX3VzZXJzRm9yV2F0Y2hlcnNMaXN0XCIgbWlnaHQgbm90IGNvbnRhaW4gYWxsIHNlbGVjdGVkIHZhbHVlcyxcbiAgICAgICAgLy8gZGV0ZXJtaW5lIGN1cnJlbnQgc2VsZWN0aW9uIGJhc2VkIG9uIHdoYXQncyBhbHJlYWR5IHNlbGVjdGVkIGFuZCBcIl91c2Vyc0ZvcldhdGNoZXJzTGlzdFwiXG4gICAgICAgIHRoaXMuX3NlbGVjdGVkV2F0Y2hlcnMgPSB1bmlxQnkoXG4gICAgICAgICAgICB0aGlzLl9zZWxlY3RlZFdhdGNoZXJzLmNvbmNhdCh0aGlzLl91c2Vyc0ZvcldhdGNoZXJzTGlzdCkuZmlsdGVyKCh1c2VyKSA9PiBpZHNTZXQuaGFzKHVzZXIuaWQpKSxcbiAgICAgICAgICAgICh1KSA9PiB1LmlkXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgLyoqIEBoaWRkZW4gUmVzdG9yZSBwcmV2aW91c2x5IHNhdmVkIGFwcHJvdmFsIHByb2Nlc3Mgc3RhdGUgKi9cbiAgICBfdW5kb0xhc3RBY3Rpb24oKTogdm9pZCB7XG4gICAgICAgIHRoaXMuX2FwcHJvdmFsUHJvY2VzcyA9IGNsb25lRGVlcCh0aGlzLl9wcmV2aW91c0FwcHJvdmFsUHJvY2VzcyEpO1xuICAgICAgICB0aGlzLl9wcmV2aW91c0FwcHJvdmFsUHJvY2VzcyA9IHVuZGVmaW5lZDtcblxuICAgICAgICB0aGlzLl9idWlsZFZpZXcodGhpcy5fYXBwcm92YWxQcm9jZXNzKTtcbiAgICB9XG5cbiAgICAvKiogQGhpZGRlbiBPcGVuIGFkZCBub2RlIGRpYWxvZyAqL1xuICAgIF9hZGROb2RlKHNvdXJjZTogQXBwcm92YWxHcmFwaE5vZGUsIHR5cGU6IEFwcHJvdmFsRmxvd05vZGVUYXJnZXQpOiB2b2lkIHtcbiAgICAgICAgY29uc3Qgc2hvd05vZGVUeXBlU2VsZWN0ID0gdHlwZSA9PT0gJ2JlZm9yZScgJiYgIXNvdXJjZS5hY3Rpb25zQ29uZmlnPy5kaXNhYmxlQWRkUGFyYWxsZWw7XG5cbiAgICAgICAgY29uc3QgZGlhbG9nID0gdGhpcy5fZGlhbG9nU2VydmljZS5vcGVuPEFkZE5vZGVEaWFsb2dSZWZEYXRhPihcbiAgICAgICAgICAgIEFwcHJvdmFsRmxvd0FkZE5vZGVDb21wb25lbnQsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgICAgICBub2RlVGFyZ2V0OiB0eXBlLFxuICAgICAgICAgICAgICAgICAgICBzaG93Tm9kZVR5cGVTZWxlY3QsXG4gICAgICAgICAgICAgICAgICAgIG5vZGU6IE9iamVjdC5hc3NpZ24oZ2V0QmxhbmtBcHByb3ZhbEdyYXBoTm9kZSgpLCB7IGJsYW5rOiBmYWxzZSB9KSxcbiAgICAgICAgICAgICAgICAgICAgY2hlY2tEdWVEYXRlOiB0aGlzLmNoZWNrRHVlRGF0ZSxcbiAgICAgICAgICAgICAgICAgICAgLi4udGhpcy5fZGVmYXVsdERpYWxvZ09wdGlvbnNcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdGhpcy5faW5qZWN0b3JcbiAgICAgICAgKTtcblxuICAgICAgICBkaWFsb2cuYWZ0ZXJDbG9zZWQuc3Vic2NyaWJlKChkYXRhOiBBZGROb2RlRGlhbG9nRm9ybURhdGEpID0+IHtcbiAgICAgICAgICAgIGlmICghZGF0YSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgeyBub2RlLCBub2RlVHlwZSwgdG9OZXh0U2VyaWFsIH0gPSBkYXRhO1xuXG4gICAgICAgICAgICBpZiAoIW5vZGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuX2NhY2hlQ3VycmVudEFwcHJvdmFsUHJvY2VzcygpO1xuXG4gICAgICAgICAgICBub2RlLmlkID0gYHRlbXBJZCR7KE1hdGgucmFuZG9tKCkgKiAxMDAwKS50b0ZpeGVkKCl9YDtcblxuICAgICAgICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAnZW1wdHknOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9lbnRlckVkaXRNb2RlKCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgY2FzZSAnYmVmb3JlJzpcbiAgICAgICAgICAgICAgICAgICAgaWYgKG5vZGVUeXBlID09PSBBUFBST1ZBTF9GTE9XX05PREVfVFlQRVMuU0VSSUFMKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlLnRhcmdldHMgPSBbc291cmNlLmlkXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3JlcGxhY2VUYXJnZXRzKHNvdXJjZS5pZCwgW25vZGUuaWRdKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGlmIChub2RlVHlwZSA9PT0gQVBQUk9WQUxfRkxPV19OT0RFX1RZUEVTLlBBUkFMTEVMKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9wcm9jZXNzQWRkaW5nUGFyYWxsZWxOb2RlKG5vZGUsIHNvdXJjZSwgdG9OZXh0U2VyaWFsKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgY2FzZSAnYmVmb3JlLWFsbCc6XG4gICAgICAgICAgICAgICAgICAgIG5vZGUudGFyZ2V0cyA9IHRoaXMuX2dyYXBoLmNvbHVtbnNbMF0ubm9kZXMubWFwKChfbm9kZSkgPT4gX25vZGUuaWQpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIGNhc2UgJ2FmdGVyJzpcbiAgICAgICAgICAgICAgICAgICAgbm9kZS50YXJnZXRzID0gc291cmNlLnRhcmdldHM7XG4gICAgICAgICAgICAgICAgICAgIHNvdXJjZS50YXJnZXRzID0gW25vZGUuaWRdO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIGNhc2UgJ2FmdGVyLWFsbCc6IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdGFyZ2V0UGFyZW50cyA9IHRoaXMuX2dyYXBoTWV0YWRhdGFbc291cmNlLnRhcmdldHNbMF1dPy5wYXJlbnRzO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmICh0YXJnZXRQYXJlbnRzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlLnRhcmdldHMgPSBzb3VyY2UudGFyZ2V0cztcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3JlcGxhY2VUYXJnZXRzKHNvdXJjZS5pZCwgW25vZGUuaWRdKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fYXBwcm92YWxQcm9jZXNzLm5vZGVzID0gdGhpcy5fYXBwcm92YWxQcm9jZXNzLm5vZGVzLmZpbHRlcihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoX25vZGUpID0+IF9ub2RlLmlkICE9PSBzb3VyY2UuaWRcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9ncmFwaC5jb2x1bW5zW3RoaXMuX2dyYXBoLmNvbHVtbnMubGVuZ3RoIC0gMV0ubm9kZXMuZm9yRWFjaCgoX25vZGUpID0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX25vZGUudGFyZ2V0cy5wdXNoKG5vZGUuaWQpXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhc2UgJ3BhcmFsbGVsJzpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fcHJvY2Vzc0FkZGluZ1BhcmFsbGVsTm9kZShub2RlLCBzb3VyY2UsIHRvTmV4dFNlcmlhbCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLl9zaG93TWVzc2FnZShub2RlLmFwcHJvdmFsVGVhbUlkID8gJ3RlYW1BZGRTdWNjZXNzJyA6ICdhcHByb3ZlckFkZFN1Y2Nlc3MnKTtcbiAgICAgICAgICAgIHRoaXMuX2FwcHJvdmFsUHJvY2Vzcy5ub2Rlcy5wdXNoKG5vZGUpO1xuXG4gICAgICAgICAgICB0aGlzLl9idWlsZFZpZXcodGhpcy5fYXBwcm92YWxQcm9jZXNzKTtcbiAgICAgICAgICAgIHRoaXMuX29uTm9kZUFkZChub2RlKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqIEBoaWRkZW4gT3BlbiBlZGl0IG5vZGUgZGlhbG9nICovXG4gICAgX2VkaXROb2RlKG5vZGU6IEFwcHJvdmFsTm9kZSk6IHZvaWQge1xuICAgICAgICBjb25zdCBkaWFsb2cgPSB0aGlzLl9kaWFsb2dTZXJ2aWNlLm9wZW48QWRkTm9kZURpYWxvZ1JlZkRhdGE+KFxuICAgICAgICAgICAgQXBwcm92YWxGbG93QWRkTm9kZUNvbXBvbmVudCxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgICAgIGlzRWRpdDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgbm9kZTogT2JqZWN0LmFzc2lnbih7fSwgbm9kZSksXG4gICAgICAgICAgICAgICAgICAgIGNoZWNrRHVlRGF0ZTogdGhpcy5jaGVja0R1ZURhdGUsXG4gICAgICAgICAgICAgICAgICAgIC4uLnRoaXMuX2RlZmF1bHREaWFsb2dPcHRpb25zXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHRoaXMuX2luamVjdG9yXG4gICAgICAgICk7XG5cbiAgICAgICAgZGlhbG9nLmFmdGVyQ2xvc2VkLnN1YnNjcmliZSgoZGF0YTogeyBub2RlOiBBcHByb3ZhbE5vZGUgfSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdXBkYXRlZE5vZGUgPSBkYXRhPy5ub2RlO1xuXG4gICAgICAgICAgICBpZiAoIXVwZGF0ZWROb2RlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLl9jYWNoZUN1cnJlbnRBcHByb3ZhbFByb2Nlc3MoKTtcbiAgICAgICAgICAgIHRoaXMuX3VwZGF0ZU5vZGUodXBkYXRlZE5vZGUpO1xuICAgICAgICAgICAgdGhpcy5fc2hvd01lc3NhZ2UoJ25vZGVFZGl0Jyk7XG4gICAgICAgICAgICB0aGlzLl9idWlsZFZpZXcodGhpcy5fYXBwcm92YWxQcm9jZXNzKTtcbiAgICAgICAgICAgIHRoaXMuX29uTm9kZUVkaXQobm9kZSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKiBAaGlkZGVuIFwiRGVsZXRlXCIgYnV0dG9uIGNsaWNrIGhhbmRsZXIgKi9cbiAgICBfb25Ob2RlRGVsZXRlKG5vZGVUb0RlbGV0ZTogQXBwcm92YWxOb2RlKTogdm9pZCB7XG4gICAgICAgIHRoaXMuX2NhY2hlQ3VycmVudEFwcHJvdmFsUHJvY2VzcygpO1xuICAgICAgICB0aGlzLl9kZWxldGVOb2RlKG5vZGVUb0RlbGV0ZSk7XG4gICAgICAgIHRoaXMuX3Nob3dNZXNzYWdlKG5vZGVUb0RlbGV0ZS5hcHByb3ZhbFRlYW1JZCA/ICd0ZWFtUmVtb3ZlJyA6ICdub2RlUmVtb3ZlJyk7XG4gICAgICAgIHRoaXMuX2J1aWxkVmlldyh0aGlzLl9hcHByb3ZhbFByb2Nlc3MpO1xuICAgIH1cblxuICAgIC8qKiBAaGlkZGVuICovXG4gICAgX2RlbGV0ZVNlbGVjdGVkTm9kZXMoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuX2NhY2hlQ3VycmVudEFwcHJvdmFsUHJvY2VzcygpO1xuXG4gICAgICAgIGNvbnN0IG5vZGVzVG9EZWxldGUgPSB0aGlzLl9ub2RlQ29tcG9uZW50c1xuICAgICAgICAgICAgLmZpbHRlcigobm9kZUNvbXBvbmVudCkgPT4gbm9kZUNvbXBvbmVudC5faXNTZWxlY3RlZClcbiAgICAgICAgICAgIC5tYXAoKG5vZGVDb21wb25lbnQpID0+IG5vZGVDb21wb25lbnQubm9kZSk7XG5cbiAgICAgICAgbm9kZXNUb0RlbGV0ZS5mb3JFYWNoKChub2RlKSA9PiB7XG4gICAgICAgICAgICB0aGlzLl9kZWxldGVOb2RlKG5vZGUpO1xuICAgICAgICAgICAgdGhpcy5fYnVpbGRWaWV3KHRoaXMuX2FwcHJvdmFsUHJvY2Vzcyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuX3Nob3dNZXNzYWdlKCdub2Rlc1JlbW92ZScpO1xuICAgIH1cblxuICAgIC8qKiBAaGlkZGVuIE5vZGUgZHJhZyBtb3ZlIGhhbmRsZXIsIHVzZWQgdG8gY2hlY2sgaWYgbmVlZCB0byBoaWdobGlnaHQgYSBkcm9wIHpvbmUgcmVjdGFuZ2xlICovXG4gICAgX29uTm9kZURyYWdNb3ZlZChub2RlOiBBcHByb3ZhbEdyYXBoTm9kZSk6IHZvaWQge1xuICAgICAgICBjb25zdCBkcmFnZ2VkTm9kZURpbWVuc2lvbnMgPSB0aGlzLl9ub2RlQ29tcG9uZW50c1xuICAgICAgICAgICAgLmZpbmQoKGNvbXApID0+IGNvbXAubm9kZSA9PT0gbm9kZSlcbiAgICAgICAgICAgID8uX25hdGl2ZUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cbiAgICAgICAgaWYgKCFkcmFnZ2VkTm9kZURpbWVuc2lvbnMpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX25vZGVDb21wb25lbnRzLmZvckVhY2goKGNvbXBvbmVudCkgPT4ge1xuICAgICAgICAgICAgaWYgKGNvbXBvbmVudC5ub2RlICE9PSBub2RlICYmIEJvb2xlYW4oY29tcG9uZW50Ll9kcm9wWm9uZXMubGVuZ3RoKSkge1xuICAgICAgICAgICAgICAgIGNvbXBvbmVudC5fY2hlY2tJZk5vZGVEcmFnZ2VkSW5Ecm9wWm9uZShkcmFnZ2VkTm9kZURpbWVuc2lvbnMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKiogQGhpZGRlbiBOb2RlIGRyb3AgaGFuZGxlciAqL1xuICAgIF9vbk5vZGVEcm9wKG5vZGVUb0Ryb3A6IEFwcHJvdmFsR3JhcGhOb2RlLCBkcmFnOiBDZGtEcmFnKTogdm9pZCB7XG4gICAgICAgIGRyYWcucmVzZXQoKTtcblxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+ICh0aGlzLl9kcmFnRHJvcEluUHJvZ3Jlc3MgPSBmYWxzZSkpO1xuXG4gICAgICAgIGNvbnN0IGRyb3BUYXJnZXQgPSB0aGlzLl9ub2RlQ29tcG9uZW50cy5maW5kKChuKSA9PiBuLl9pc0FueURyb3Bab25lQWN0aXZlKTtcblxuICAgICAgICBpZiAoIWRyb3BUYXJnZXQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX2NhY2hlQ3VycmVudEFwcHJvdmFsUHJvY2VzcygpO1xuXG4gICAgICAgIGNvbnN0IHBsYWNlbWVudCA9IGRyb3BUYXJnZXQuX2FjdGl2ZURyb3Bab25lc1swXS5wbGFjZW1lbnQ7XG5cbiAgICAgICAgdGhpcy5fbm9kZUNvbXBvbmVudHMuZm9yRWFjaCgobikgPT4gbi5fZGVhY3RpdmF0ZURyb3Bab25lcygpKTtcblxuICAgICAgICBpZiAocGxhY2VtZW50ID09PSAnYWZ0ZXInKSB7XG4gICAgICAgICAgICB0aGlzLl9kZWxldGVOb2RlKG5vZGVUb0Ryb3ApO1xuICAgICAgICAgICAgdGhpcy5fYnVpbGRWaWV3KHRoaXMuX2FwcHJvdmFsUHJvY2Vzcyk7XG5cbiAgICAgICAgICAgIGNvbnN0IG5leHROb2RlID0gZ2V0R3JhcGhOb2Rlcyh0aGlzLl9ncmFwaCkuZmluZCgobm9kZSkgPT4gbm9kZS5pZCA9PT0gZHJvcFRhcmdldC5ub2RlLnRhcmdldHNbMF0pO1xuXG4gICAgICAgICAgICBpZiAobmV4dE5vZGU/LmJsYW5rKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fZGVsZXRlTm9kZShuZXh0Tm9kZSk7XG4gICAgICAgICAgICAgICAgdGhpcy5fYnVpbGRWaWV3KHRoaXMuX2FwcHJvdmFsUHJvY2Vzcyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIG5vZGVUb0Ryb3AudGFyZ2V0cyA9XG4gICAgICAgICAgICAgICAgdGhpcy5fYXBwcm92YWxQcm9jZXNzLm5vZGVzLmZpbmQoKG5vZGUpID0+IG5vZGUuaWQgPT09IGRyb3BUYXJnZXQubm9kZS5pZCk/LnRhcmdldHMgPz8gW107XG4gICAgICAgICAgICBkcm9wVGFyZ2V0Lm5vZGUudGFyZ2V0cyA9IFtub2RlVG9Ecm9wLmlkXTtcblxuICAgICAgICAgICAgdGhpcy5fZmluaXNoRHJhZ0Ryb3BQcm9jZXNzKG5vZGVUb0Ryb3ApO1xuICAgICAgICB9IGVsc2UgaWYgKHBsYWNlbWVudCA9PT0gJ2JlZm9yZScpIHtcbiAgICAgICAgICAgIGNvbnN0IGRpYWxvZyA9IHRoaXMuX2RpYWxvZ1NlcnZpY2Uub3BlbihBcHByb3ZhbEZsb3dTZWxlY3RUeXBlQ29tcG9uZW50LCB1bmRlZmluZWQsIHRoaXMuX2luamVjdG9yKTtcblxuICAgICAgICAgICAgZGlhbG9nLmFmdGVyQ2xvc2VkLnN1YnNjcmliZSgoZGF0YTogU2VsZWN0VHlwZURpYWxvZ0Zvcm1EYXRhKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKCFkYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBjb25zdCB7IHR5cGUsIHRvTmV4dFNlcmlhbCB9ID0gZGF0YTtcblxuICAgICAgICAgICAgICAgIHRoaXMuX2RlbGV0ZU5vZGUobm9kZVRvRHJvcCk7XG4gICAgICAgICAgICAgICAgdGhpcy5fYnVpbGRWaWV3KHRoaXMuX2FwcHJvdmFsUHJvY2Vzcyk7XG5cbiAgICAgICAgICAgICAgICBpZiAodHlwZSA9PT0gQVBQUk9WQUxfRkxPV19OT0RFX1RZUEVTLlNFUklBTCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9yZXBsYWNlVGFyZ2V0cyhkcm9wVGFyZ2V0Lm5vZGUuaWQsIFtub2RlVG9Ecm9wLmlkXSk7XG4gICAgICAgICAgICAgICAgICAgIG5vZGVUb0Ryb3AudGFyZ2V0cyA9IFtkcm9wVGFyZ2V0Lm5vZGUuaWRdO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmICh0eXBlID09PSBBUFBST1ZBTF9GTE9XX05PREVfVFlQRVMuUEFSQUxMRUwpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fcHJvY2Vzc0FkZGluZ1BhcmFsbGVsTm9kZShub2RlVG9Ecm9wLCBkcm9wVGFyZ2V0Lm5vZGUsIHRvTmV4dFNlcmlhbCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdGhpcy5fZmluaXNoRHJhZ0Ryb3BQcm9jZXNzKG5vZGVUb0Ryb3ApO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSBpZiAocGxhY2VtZW50ID09PSAnYmVmb3JlLWFsbCcpIHtcbiAgICAgICAgICAgIHRoaXMuX2RlbGV0ZU5vZGUobm9kZVRvRHJvcCk7XG5cbiAgICAgICAgICAgIGNvbnN0IGZpcnN0Q29sdW1uTm9kZXMgPSB0aGlzLl9ncmFwaC5jb2x1bW5zWzBdLm5vZGVzO1xuICAgICAgICAgICAgbm9kZVRvRHJvcC50YXJnZXRzID0gZmlyc3RDb2x1bW5Ob2Rlcy5tYXAoKG5vZGUpID0+IG5vZGUuaWQpO1xuXG4gICAgICAgICAgICB0aGlzLl9maW5pc2hEcmFnRHJvcFByb2Nlc3Mobm9kZVRvRHJvcCk7XG4gICAgICAgIH0gZWxzZSBpZiAocGxhY2VtZW50ID09PSAnYWZ0ZXItYWxsJykge1xuICAgICAgICAgICAgdGhpcy5fZGVsZXRlTm9kZShub2RlVG9Ecm9wKTtcbiAgICAgICAgICAgIHRoaXMuX2J1aWxkVmlldyh0aGlzLl9hcHByb3ZhbFByb2Nlc3MpO1xuXG4gICAgICAgICAgICBub2RlVG9Ecm9wLnRhcmdldHMgPSBbLi4uZHJvcFRhcmdldC5ub2RlLnRhcmdldHNdO1xuXG4gICAgICAgICAgICBpZiAoZHJvcFRhcmdldC5ub2RlLnRhcmdldHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbGFzdENvbHVtbk5vZGVzID0gdGhpcy5fZ3JhcGguY29sdW1uc1t0aGlzLl9ncmFwaC5jb2x1bW5zLmxlbmd0aCAtIDFdLm5vZGVzO1xuICAgICAgICAgICAgICAgIGxhc3RDb2x1bW5Ob2Rlcy5mb3JFYWNoKChub2RlKSA9PiBub2RlLnRhcmdldHMucHVzaChub2RlVG9Ecm9wLmlkKSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuX2FwcHJvdmFsUHJvY2Vzcy5ub2RlcyA9IHRoaXMuX2FwcHJvdmFsUHJvY2Vzcy5ub2Rlcy5maWx0ZXIoXG4gICAgICAgICAgICAgICAgICAgIChub2RlKSA9PiBub2RlLmlkICE9PSBkcm9wVGFyZ2V0Lm5vZGUuaWRcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIHRoaXMuX3JlcGxhY2VUYXJnZXRzKGRyb3BUYXJnZXQubm9kZS5pZCwgW25vZGVUb0Ryb3AuaWRdKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5fZmluaXNoRHJhZ0Ryb3BQcm9jZXNzKG5vZGVUb0Ryb3ApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqIEBoaWRkZW4gKi9cbiAgICBwcml2YXRlIF9maW5pc2hEcmFnRHJvcFByb2Nlc3Mobm9kZVRvRHJvcDogQXBwcm92YWxHcmFwaE5vZGUpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5fYXBwcm92YWxQcm9jZXNzLm5vZGVzLnB1c2gobm9kZVRvRHJvcCk7XG4gICAgICAgIHRoaXMuX2J1aWxkVmlldyh0aGlzLl9hcHByb3ZhbFByb2Nlc3MpO1xuICAgIH1cblxuICAgIC8qKiBAaGlkZGVuICovXG4gICAgcHJpdmF0ZSBfc2hvd01lc3NhZ2UodHlwZTogQXBwcm92YWxGbG93TWVzc2FnZVR5cGUpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5fbWVzc2FnZXMgPSBbeyB0eXBlIH1dO1xuICAgIH1cblxuICAgIC8qKiBAaGlkZGVuIEJ1aWxkIEFwcHJvdmFsIEZsb3cgZ3JhcGggYW5kIHJlbmRlciBpdCAqL1xuICAgIHByaXZhdGUgX2J1aWxkVmlldyhhcHByb3ZhbFByb2Nlc3M6IEFwcHJvdmFsUHJvY2Vzcyk6IHZvaWQge1xuICAgICAgICBpZiAoIWFwcHJvdmFsUHJvY2Vzcy5ub2Rlcykge1xuICAgICAgICAgICAgYXBwcm92YWxQcm9jZXNzLm5vZGVzID0gW107XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFhcHByb3ZhbFByb2Nlc3Mud2F0Y2hlcnMpIHtcbiAgICAgICAgICAgIGFwcHJvdmFsUHJvY2Vzcy53YXRjaGVycyA9IFtdO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX2FwcHJvdmFsUHJvY2VzcyA9IGFwcHJvdmFsUHJvY2VzcztcbiAgICAgICAgdGhpcy5fZ3JhcGggPSBnZW5lcmF0ZUFwcHJvdmFsRmxvd0dyYXBoKHRoaXMuX2FwcHJvdmFsUHJvY2Vzcy5ub2Rlcyk7XG5cbiAgICAgICAgaWYgKHRoaXMuX2dyYXBoLmVycm9ycykge1xuICAgICAgICAgICAgdGhpcy5fc2hvd01lc3NhZ2UoJ2Vycm9yJyk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9ncmFwaE1ldGFkYXRhID0gZ2VuZXJhdGVBcHByb3ZhbEZsb3dHcmFwaE1ldGFkYXRhKHRoaXMuX2dyYXBoKTtcblxuICAgICAgICBjb25zdCBub2RlcyA9IGdldEdyYXBoTm9kZXModGhpcy5fZ3JhcGgpO1xuICAgICAgICB0aGlzLl9hcHByb3ZhbFByb2Nlc3Mubm9kZXMgPSBub2Rlcy5maWx0ZXIoKG5vZGUpID0+ICFub2RlLnNwYWNlKTtcbiAgICAgICAgdGhpcy5fbXVsdGlwbGVSb290Tm9kZXMgPSBub2Rlcy5maWx0ZXIoKG5vZGUpID0+IHRoaXMuX2dyYXBoTWV0YWRhdGFbbm9kZS5pZF0uaXNSb290KS5sZW5ndGggPiAxO1xuICAgICAgICB0aGlzLl9tdWx0aXBsZUZpbmFsTm9kZXMgPSBub2Rlcy5maWx0ZXIoKG5vZGUpID0+IHRoaXMuX2dyYXBoTWV0YWRhdGFbbm9kZS5pZF0uaXNGaW5hbCkubGVuZ3RoID4gMTtcblxuICAgICAgICB0aGlzLl9jZHIuZGV0ZWN0Q2hhbmdlcygpO1xuICAgICAgICB0aGlzLl9ncmlkTGlzdD8uY2xlYXJTZWxlY3Rpb24oKTtcblxuICAgICAgICBpZiAoIXRoaXMuX2lzRWRpdE1vZGUpIHtcbiAgICAgICAgICAgIHRoaXMuX3NldFNjcm9sbFBvc2l0aW9uKDApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqIEBoaWRkZW4gTGlzdGVuIHdpbmRvdyByZXNpemUgYW5kIGRpc3RyaWJ1dGUgY2FyZHMgb24gY29sdW1uIGNoYW5nZSAqL1xuICAgIHByaXZhdGUgX2xpc3Rlbk9uUmVzaXplKCk6IHZvaWQge1xuICAgICAgICB0aGlzLl9zdWJzY3JpcHRpb25zLmFkZChcbiAgICAgICAgICAgIG1lcmdlKGZyb21FdmVudCh3aW5kb3csICdyZXNpemUnKSwgZnJvbUV2ZW50KHRoaXMuX2dyYXBoQ29udGFpbmVyRWwubmF0aXZlRWxlbWVudCwgJ3Njcm9sbCcpKVxuICAgICAgICAgICAgICAgIC5waXBlKHRocm90dGxlVGltZSg1MCwgdW5kZWZpbmVkLCB7IGxlYWRpbmc6IHRydWUsIHRyYWlsaW5nOiB0cnVlIH0pKVxuICAgICAgICAgICAgICAgIC5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9jZHIuZGV0ZWN0Q2hhbmdlcygpO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgLyoqIEBoaWRkZW4gKi9cbiAgICBfZm9jdXNOb2RlKG5vZGU6IEFwcHJvdmFsR3JhcGhOb2RlKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IG5vZGVUb0ZvY3VzID0gdGhpcy5fbm9kZUNvbXBvbmVudHMuZmluZCgoY29tcCkgPT4gY29tcC5ub2RlID09PSBub2RlKTtcblxuICAgICAgICBpZiAoIW5vZGVUb0ZvY3VzKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fbW92ZUNvbEluVmlldyhub2RlLmNvbEluZGV4ID8/IDApO1xuICAgICAgICBub2RlVG9Gb2N1cy5fZm9jdXMoeyBwcmV2ZW50U2Nyb2xsOiB0cnVlIH0pO1xuICAgIH1cblxuICAgIC8qKiBAaGlkZGVuIFVwZGF0ZSBub2RlIG9iamVjdCBpbiBsb2NhbCBhcHByb3ZhbCBwcm9jZXNzIGRhdGEgc3RydWN0dXJlICovXG4gICAgcHJpdmF0ZSBfdXBkYXRlTm9kZShub2RlOiBBcHByb3ZhbE5vZGUpOiB2b2lkIHtcbiAgICAgICAgY29uc3Qgbm9kZUluZGV4ID0gdGhpcy5fYXBwcm92YWxQcm9jZXNzLm5vZGVzLmZpbmRJbmRleCgobikgPT4gbi5pZCA9PT0gbm9kZS5pZCk7XG5cbiAgICAgICAgaWYgKG5vZGVJbmRleCA+IC0xKSB7XG4gICAgICAgICAgICB0aGlzLl9hcHByb3ZhbFByb2Nlc3Mubm9kZXNbbm9kZUluZGV4XSA9IG5vZGU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKiogQGhpZGRlbiBEZWxldGUgbm9kZSBvYmplY3QgaW4gbG9jYWwgYXBwcm92YWwgcHJvY2VzcyBkYXRhIHN0cnVjdHVyZSAqL1xuICAgIHByaXZhdGUgX2RlbGV0ZU5vZGUobm9kZVRvRGVsZXRlOiBBcHByb3ZhbE5vZGUpOiB2b2lkIHtcbiAgICAgICAgY29uc3Qgbm9kZXNUb0RlbGV0ZSA9IFtub2RlVG9EZWxldGVdO1xuICAgICAgICBjb25zdCBncmFwaE5vZGVzID0gZ2V0R3JhcGhOb2Rlcyh0aGlzLl9ncmFwaCk7XG4gICAgICAgIGxldCBjdXJyTm9kZSA9IGdyYXBoTm9kZXMuZmluZCgobm9kZSkgPT4gbm9kZS5pZCA9PT0gbm9kZVRvRGVsZXRlLmlkKTtcbiAgICAgICAgbGV0IG5leHROb2RlOiBBcHByb3ZhbEdyYXBoTm9kZSB8IHVuZGVmaW5lZDtcblxuICAgICAgICBkbyB7XG4gICAgICAgICAgICBpZiAoY3Vyck5vZGU/LnRhcmdldHMubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgICAgICAgbmV4dE5vZGUgPSBncmFwaE5vZGVzLmZpbmQoKG5vZGUpID0+IG5vZGUuaWQgPT09IGN1cnJOb2RlPy50YXJnZXRzWzBdKTtcblxuICAgICAgICAgICAgICAgIGlmIChuZXh0Tm9kZT8uYmxhbmsgJiYgdGhpcy5fZ3JhcGhNZXRhZGF0YVtuZXh0Tm9kZS5pZF0ucGFyZW50cy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgbm9kZXNUb0RlbGV0ZS5wdXNoKG5leHROb2RlKTtcblxuICAgICAgICAgICAgICAgICAgICBjdXJyTm9kZSA9IG5leHROb2RlO1xuICAgICAgICAgICAgICAgICAgICBuZXh0Tm9kZSA9IGdyYXBoTm9kZXMuZmluZCgobm9kZSkgPT4gbm9kZS5pZCA9PT0gY3Vyck5vZGU/LnRhcmdldHNbMF0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSB3aGlsZSAobmV4dE5vZGU/LmJsYW5rICYmIHRoaXMuX2dyYXBoTWV0YWRhdGFbbmV4dE5vZGUuaWRdLnBhcmVudHMubGVuZ3RoID09PSAxKTtcblxuICAgICAgICBjb25zdCBwYXJlbnQgPSB0aGlzLl9ncmFwaE1ldGFkYXRhW25vZGVUb0RlbGV0ZS5pZF0ucGFyZW50c1swXTtcbiAgICAgICAgY29uc3QgdGFyZ2V0ID0gbm9kZVRvRGVsZXRlLnRhcmdldHNbMF07XG4gICAgICAgIGNvbnN0IGlzUGFyZW50UGFyYWxsZWxTdGFydCA9IHRoaXMuX2dyYXBoTWV0YWRhdGFbcGFyZW50Py5pZF0/LnBhcmFsbGVsU3RhcnQ7XG4gICAgICAgIGNvbnN0IGlzVGFyZ2V0UGFyYWxsZWxFbmQgPSB0aGlzLl9ncmFwaE1ldGFkYXRhW3RhcmdldF0/LnBhcmFsbGVsRW5kO1xuICAgICAgICBjb25zdCB0YXJnZXRzID1cbiAgICAgICAgICAgIChpc1BhcmVudFBhcmFsbGVsU3RhcnQgJiYgaXNUYXJnZXRQYXJhbGxlbEVuZCkgfHwgbm9kZXNUb0RlbGV0ZS5sZW5ndGggPiAxID8gW10gOiBjdXJyTm9kZT8udGFyZ2V0cyA/PyBbXTtcblxuICAgICAgICB0aGlzLl9yZXBsYWNlVGFyZ2V0cyhub2RlVG9EZWxldGUuaWQsIHRhcmdldHMpO1xuXG4gICAgICAgIHRoaXMuX2FwcHJvdmFsUHJvY2Vzcy5ub2RlcyA9IHRoaXMuX2FwcHJvdmFsUHJvY2Vzcy5ub2Rlcy5maWx0ZXIoKG5vZGUpID0+ICFub2Rlc1RvRGVsZXRlLmluY2x1ZGVzKG5vZGUpKTtcbiAgICB9XG5cbiAgICAvKiogQGhpZGRlbiAqL1xuICAgIHByaXZhdGUgX2FkZFBhcmFsbGVsVGFyZ2V0cyh0YXJnZXROb2RlSWQ6IHN0cmluZywgbm9kZUlkVG9BZGQ6IHN0cmluZyk6IHZvaWQge1xuICAgICAgICB0aGlzLl9hcHByb3ZhbFByb2Nlc3Mubm9kZXMuZm9yRWFjaCgobm9kZSkgPT4ge1xuICAgICAgICAgICAgaWYgKGlzTm9kZVRhcmdldHNJbmNsdWRlSWQobm9kZSwgdGFyZ2V0Tm9kZUlkKSkge1xuICAgICAgICAgICAgICAgIG5vZGUudGFyZ2V0cy5wdXNoKG5vZGVJZFRvQWRkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqIEBoaWRkZW4gUmVwbGFjZSBhbGwgb2NjdXJyZW5jZXMgb2YgXCJpZFRvUmVwbGFjZVwiIGluIGFsbCBub2RlcycgXCJ0YXJnZXRzXCIgd2l0aCBvbmVzIGluIFwicmVwbGFjZVdpdGhcIiBhcnJheSAqL1xuICAgIHByaXZhdGUgX3JlcGxhY2VUYXJnZXRzKElkVG9SZXBsYWNlOiBzdHJpbmcsIHJlcGxhY2VXaXRoSWQ6IHN0cmluZ1tdKTogdm9pZCB7XG4gICAgICAgIHRoaXMuX2FwcHJvdmFsUHJvY2Vzcy5ub2Rlcy5mb3JFYWNoKChuKSA9PiB7XG4gICAgICAgICAgICBpZiAoaXNOb2RlVGFyZ2V0c0luY2x1ZGVJZChuLCBJZFRvUmVwbGFjZSkpIHtcbiAgICAgICAgICAgICAgICBuLnRhcmdldHMgPSBuLnRhcmdldHMuZmlsdGVyKChfaWQpID0+IF9pZCAhPT0gSWRUb1JlcGxhY2UpO1xuICAgICAgICAgICAgICAgIG4udGFyZ2V0cy5wdXNoKC4uLnJlcGxhY2VXaXRoSWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKiogQGhpZGRlbiBTYXZlIGN1cnJlbnQgc3RhdGUgb2YgYXBwcm92YWwgcHJvY2VzcyBkYXRhIHRvIGJlIGFibGUgdG8gdW5kbyBhbiBhY3Rpb24gbWFkZSBpbiBlZGl0IG1vZGUgKi9cbiAgICBwcml2YXRlIF9jYWNoZUN1cnJlbnRBcHByb3ZhbFByb2Nlc3MoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuX3ByZXZpb3VzQXBwcm92YWxQcm9jZXNzID0gY2xvbmVEZWVwKHRoaXMuX2FwcHJvdmFsUHJvY2Vzcyk7XG4gICAgfVxuXG4gICAgLyoqIEBoaWRkZW4gKi9cbiAgICBwcml2YXRlIF9nZXROZXh0SG9yaXpvbnRhbE5vZGUgPSAoXG4gICAgICAgIG5vZGVJbmRleDogbnVtYmVyLFxuICAgICAgICBjb2x1bW5JbmRleDogbnVtYmVyLFxuICAgICAgICBkaXJlY3Rpb246ICdsZWZ0JyB8ICdyaWdodCdcbiAgICApOiBBcHByb3ZhbEdyYXBoTm9kZSB8IHVuZGVmaW5lZCA9PiB7XG4gICAgICAgIGNvbnN0IGluZGV4RGlmZiA9IGRpcmVjdGlvbiA9PT0gJ3JpZ2h0JyA/IDEgOiAtMTtcbiAgICAgICAgY29uc3QgbmV4dENvbHVtbiA9IHRoaXMuX2dyYXBoLmNvbHVtbnNbY29sdW1uSW5kZXggKyBpbmRleERpZmZdO1xuICAgICAgICBjb25zdCBuZXh0Tm9kZSA9IG5leHRDb2x1bW4/Lm5vZGVzW25vZGVJbmRleF07XG5cbiAgICAgICAgaWYgKCFuZXh0Tm9kZSkge1xuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChuZXh0Tm9kZS5ibGFuayB8fCBuZXh0Tm9kZS5zcGFjZSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2dldE5leHRIb3Jpem9udGFsTm9kZShub2RlSW5kZXgsIGNvbHVtbkluZGV4ICsgaW5kZXhEaWZmLCBkaXJlY3Rpb24pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG5leHROb2RlO1xuICAgIH07XG5cbiAgICAvKiogQGhpZGRlbiAqL1xuICAgIHByaXZhdGUgX2dldE5leHRWZXJ0aWNhbE5vZGUgPSAoXG4gICAgICAgIG5vZGVJbmRleDogbnVtYmVyLFxuICAgICAgICBjb2x1bW5JbmRleDogbnVtYmVyLFxuICAgICAgICBkaXJlY3Rpb246ICd1cCcgfCAnZG93bidcbiAgICApOiBBcHByb3ZhbEdyYXBoTm9kZSB8IHVuZGVmaW5lZCA9PiB7XG4gICAgICAgIGNvbnN0IGluZGV4RGlmZiA9IGRpcmVjdGlvbiA9PT0gJ2Rvd24nID8gMSA6IC0xO1xuICAgICAgICBjb25zdCBjdXJyQ29sdW1uID0gdGhpcy5fZ3JhcGguY29sdW1uc1tjb2x1bW5JbmRleF07XG4gICAgICAgIGNvbnN0IG5leHROb2RlID0gY3VyckNvbHVtbi5ub2Rlc1tub2RlSW5kZXggKyBpbmRleERpZmZdO1xuXG4gICAgICAgIGlmICghbmV4dE5vZGUpIHtcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobmV4dE5vZGUuYmxhbmsgfHwgbmV4dE5vZGUuc3BhY2UpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9nZXROZXh0VmVydGljYWxOb2RlKG5vZGVJbmRleCArIGluZGV4RGlmZiwgY29sdW1uSW5kZXgsIGRpcmVjdGlvbik7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbmV4dE5vZGU7XG4gICAgfTtcblxuICAgIC8qKiBAaGlkZGVuICovXG4gICAgcHJpdmF0ZSBnZXQgX2Nhcm91c2VsU3RlcFNpemUoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dyYXBoRWwubmF0aXZlRWxlbWVudC5zY3JvbGxXaWR0aCAvIHRoaXMuX2Nhcm91c2VsU3RlcHNDb3VudDtcbiAgICB9XG5cbiAgICAvKiogQGhpZGRlbiAqL1xuICAgIGdldCBfc2Nyb2xsRGlmZigpOiBudW1iZXIge1xuICAgICAgICBpZiAoIXRoaXMuX2dyYXBoRWwpIHtcbiAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLl9ncmFwaEVsLm5hdGl2ZUVsZW1lbnQuc2Nyb2xsV2lkdGggLSB0aGlzLl9ncmFwaEVsLm5hdGl2ZUVsZW1lbnQuY2xpZW50V2lkdGg7XG4gICAgfVxuXG4gICAgLyoqIEBoaWRkZW4gKi9cbiAgICBnZXQgX2Nhcm91c2VsU3RlcHNDb3VudCgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5fZ3JhcGhFbC5uYXRpdmVFbGVtZW50LmNoaWxkcmVuLmxlbmd0aDtcbiAgICB9XG5cbiAgICAvKiogQGhpZGRlbiAqL1xuICAgIGdldCBfY2Fyb3VzZWxTdGVwc0xlZnQoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIE1hdGguY2VpbCh0aGlzLl9ncmFwaENvbnRhaW5lckVsLm5hdGl2ZUVsZW1lbnQuc2Nyb2xsTGVmdCAvIHRoaXMuX2Nhcm91c2VsU3RlcFNpemUpO1xuICAgIH1cblxuICAgIC8qKiBAaGlkZGVuICovXG4gICAgZ2V0IF9jYXJvdXNlbFN0ZXBzUmlnaHQoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIE1hdGguY2VpbChcbiAgICAgICAgICAgICh0aGlzLl9zY3JvbGxEaWZmIC0gTWF0aC5yb3VuZCh0aGlzLl9ncmFwaENvbnRhaW5lckVsLm5hdGl2ZUVsZW1lbnQuc2Nyb2xsTGVmdCkpIC8gdGhpcy5fY2Fyb3VzZWxTdGVwU2l6ZVxuICAgICAgICApO1xuICAgIH1cblxuICAgIC8qKiBAaGlkZGVuICovXG4gICAgcHJpdmF0ZSBnZXQgX2RlZmF1bHREaWFsb2dPcHRpb25zKCk6IERlZmF1bHREaWFsb2dPcHRpb25zIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHRlYW1EYXRhU291cmNlOiB0aGlzLnRlYW1EYXRhU291cmNlLFxuICAgICAgICAgICAgdXNlckRhdGFTb3VyY2U6IHRoaXMudXNlckRhdGFTb3VyY2UsXG4gICAgICAgICAgICB1c2VyRGV0YWlsc1RlbXBsYXRlOiB0aGlzLnVzZXJEZXRhaWxzVGVtcGxhdGUsXG4gICAgICAgICAgICBydGw6IHRoaXMuX3J0bFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIC8qKiBAaGlkZGVuICovXG4gICAgcHJpdmF0ZSBfZmluZFNlcmlhbE5vZGUoeUluZGV4PzogbnVtYmVyLCB0YXJnZXRzPzogc3RyaW5nW10pOiBzdHJpbmdbXSB7XG4gICAgICAgIGNvbnN0IHRhcmdldElzUGFyZW50ID1cbiAgICAgICAgICAgIE51bWJlci5pc0ludGVnZXIoeUluZGV4KSAmJlxuICAgICAgICAgICAgdGFyZ2V0cz8uc29tZSgodGFyZ2V0SWQpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBub2RlSW5kZXggPSB0aGlzLl9ncmFwaE1ldGFkYXRhW3RhcmdldElkXT8ubm9kZUluZGV4O1xuICAgICAgICAgICAgICAgIHJldHVybiBOdW1iZXIuaXNJbnRlZ2VyKG5vZGVJbmRleCkgJiYgbm9kZUluZGV4ISA8PSB5SW5kZXghIC0gMTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIGlmICh0YXJnZXRJc1BhcmVudCkge1xuICAgICAgICAgICAgcmV0dXJuIHRhcmdldHMgPz8gW107XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB0YXJnZXROb2RlID0gdGhpcy5fYXBwcm92YWxQcm9jZXNzLm5vZGVzLmZpbmQoKG5vZGUpID0+IG5vZGUuaWQgPT09IHRhcmdldHM/LlswXSk7XG4gICAgICAgIHJldHVybiB0aGlzLl9maW5kU2VyaWFsTm9kZSh5SW5kZXgsIHRhcmdldE5vZGU/LnRhcmdldHMpO1xuICAgIH1cblxuICAgIC8qKiBAaGlkZGVuICovXG4gICAgcHJpdmF0ZSBfcHJvY2Vzc0FkZGluZ1BhcmFsbGVsTm9kZShcbiAgICAgICAgYWRkZWROb2RlOiBBcHByb3ZhbEdyYXBoTm9kZSxcbiAgICAgICAgc291cmNlTm9kZTogQXBwcm92YWxHcmFwaE5vZGUsXG4gICAgICAgIHRvTmV4dFNlcmlhbCA9IGZhbHNlXG4gICAgKTogdm9pZCB7XG4gICAgICAgIGFkZGVkTm9kZS50YXJnZXRzID0gc291cmNlTm9kZS50YXJnZXRzO1xuXG4gICAgICAgIHRoaXMuX2FkZFBhcmFsbGVsVGFyZ2V0cyhzb3VyY2VOb2RlLmlkLCBhZGRlZE5vZGUuaWQpO1xuXG4gICAgICAgIGlmICh0b05leHRTZXJpYWwpIHtcbiAgICAgICAgICAgIGxldCB5SW5kZXggPSB0aGlzLl9ncmFwaE1ldGFkYXRhW3NvdXJjZU5vZGUuaWRdLm5vZGVJbmRleDtcbiAgICAgICAgICAgIGxldCB0YXJnZXRzID0gc291cmNlTm9kZS50YXJnZXRzO1xuXG4gICAgICAgICAgICBpZiAoeUluZGV4ID09PSAwKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc291cmNlTm9kZU1ldGFkYXRhID0gdGhpcy5fZ3JhcGhNZXRhZGF0YVtzb3VyY2VOb2RlLmlkXTtcbiAgICAgICAgICAgICAgICBjb25zdCBjb2x1bW5Ob2RlcyA9IHRoaXMuX2dyYXBoLmNvbHVtbnM/Lltzb3VyY2VOb2RlTWV0YWRhdGEuY29sdW1uSW5kZXghXT8ubm9kZXM7XG4gICAgICAgICAgICAgICAgY29uc3QgbmV4dFBhcmFsbGVsTm9kZSA9IGNvbHVtbk5vZGVzLmZpbmQoKG5vZGUsIGluZGV4KSA9PiBpbmRleCA+IDAgJiYgIW5vZGUuc3BhY2UpO1xuXG4gICAgICAgICAgICAgICAgaWYgKG5leHRQYXJhbGxlbE5vZGUpIHtcbiAgICAgICAgICAgICAgICAgICAgeUluZGV4ID0gdGhpcy5fZ3JhcGhNZXRhZGF0YVtuZXh0UGFyYWxsZWxOb2RlLmlkXS5jb2x1bW5JbmRleDtcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0cyA9IG5leHRQYXJhbGxlbE5vZGUudGFyZ2V0cztcblxuICAgICAgICAgICAgICAgICAgICBhZGRlZE5vZGUudGFyZ2V0cyA9IHRoaXMuX2ZpbmRTZXJpYWxOb2RlKHlJbmRleCwgdGFyZ2V0cyk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBhZGRlZE5vZGUudGFyZ2V0cyA9IHNvdXJjZU5vZGUudGFyZ2V0cztcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGFkZGVkTm9kZS50YXJnZXRzID0gdGhpcy5fZmluZFNlcmlhbE5vZGUoeUluZGV4LCB0YXJnZXRzKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKiBAaGlkZGVuICovXG4gICAgcHJpdmF0ZSBfc2V0dXBEYXRhU291cmNlU3Vic2NyaXB0aW9uKCk6IHZvaWQge1xuICAgICAgICBjb25zdCBzdWIgPSB0aGlzLl9kYXRhU291cmNlQ2hhbmdlZCRcbiAgICAgICAgICAgIC5waXBlKFxuICAgICAgICAgICAgICAgIHN0YXJ0V2l0aChudWxsKSxcbiAgICAgICAgICAgICAgICBzd2l0Y2hNYXAoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBsb2FkaW5nU3RhdGVzID0gW3RoaXMudGVhbURhdGFTb3VyY2UsIHRoaXMudXNlckRhdGFTb3VyY2UsIHRoaXMud2F0Y2hlckRhdGFTb3VyY2VdXG4gICAgICAgICAgICAgICAgICAgICAgICAuZmlsdGVyKEJvb2xlYW4pXG4gICAgICAgICAgICAgICAgICAgICAgICAubWFwKChkcykgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXJnZShkcy5vbkRhdGFSZXF1ZXN0ZWQoKS5waXBlKG1hcFRvKHRydWUpKSwgZHMub25EYXRhUmVjZWl2ZWQoKS5waXBlKG1hcFRvKGZhbHNlKSkpLnBpcGUoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0V2l0aChkcy5pc0RhdGFMb2FkaW5nKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBjb21iaW5lTGF0ZXN0KGxvYWRpbmdTdGF0ZXMpO1xuICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgIG1hcCgobG9hZGluZ1N0YXRlcykgPT4gbG9hZGluZ1N0YXRlcy5zb21lKEJvb2xlYW4pKSxcbiAgICAgICAgICAgICAgICBkaXN0aW5jdFVudGlsQ2hhbmdlZCgpXG4gICAgICAgICAgICApXG4gICAgICAgICAgICAuc3Vic2NyaWJlKChzb21lTG9hZGluZykgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChzb21lTG9hZGluZykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm9uRGF0YVJlcXVlc3RlZC5lbWl0KCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vbkRhdGFSZWNlaXZlZC5lbWl0KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuX3N1YnNjcmlwdGlvbnMuYWRkKHN1Yik7XG4gICAgfVxufVxuXG5pbnRlcmZhY2UgRGVmYXVsdERpYWxvZ09wdGlvbnMge1xuICAgIHRlYW1EYXRhU291cmNlOiBBcHByb3ZhbEZsb3dUZWFtRGF0YVNvdXJjZTxBcHByb3ZhbFRlYW0+O1xuICAgIHVzZXJEYXRhU291cmNlOiBBcHByb3ZhbEZsb3dVc2VyRGF0YVNvdXJjZTxBcHByb3ZhbFVzZXI+O1xuICAgIHVzZXJEZXRhaWxzVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG4gICAgcnRsOiBib29sZWFuO1xufVxuIiwiPG5nLWNvbnRhaW5lciBmZENvbXBhY3Q+XG4gICAgPGZkcC1hcHByb3ZhbC1mbG93LW1lc3NhZ2VzXG4gICAgICAgIFsobWVzc2FnZXMpXT1cIl9tZXNzYWdlc1wiXG4gICAgICAgIFt1bmRvTGFzdEFjdGlvbkF2YWlsYWJsZV09XCIhIV9wcmV2aW91c0FwcHJvdmFsUHJvY2Vzc1wiXG4gICAgICAgICh1bmRvTGFzdEFjdGlvbik9XCJfdW5kb0xhc3RBY3Rpb24oKVwiXG4gICAgPjwvZmRwLWFwcHJvdmFsLWZsb3ctbWVzc2FnZXM+XG5cbiAgICA8ZmQtZ3JpZC1saXN0XG4gICAgICAgICNncmlkTGlzdFxuICAgICAgICBjbGFzcz1cImZkcC1hcHByb3ZhbC1mbG93X190b29sYmFyXCJcbiAgICAgICAgW3NlbGVjdGlvbk1vZGVdPVwiX2lzRWRpdE1vZGUgPyAnbXVsdGlTZWxlY3QnIDogJ25vbmUnXCJcbiAgICAgICAgKHNlbGVjdGlvbkNoYW5nZSk9XCJfb25Ob2RlU2VsZWN0aW9uQ2hhbmdlKCRldmVudClcIlxuICAgID5cbiAgICAgICAgPGZkLWdyaWQtbGlzdC10aXRsZS1iYXIgW3RpdGxlXT1cInRpdGxlIHx8ICgncGxhdGZvcm1BcHByb3ZhbEZsb3cuZGVmYXVsdFRpdGxlJyB8IGZkVHJhbnNsYXRlKVwiPlxuICAgICAgICAgICAgPGZkLWdyaWQtbGlzdC10aXRsZS1iYXItc3BhY2VyPjwvZmQtZ3JpZC1saXN0LXRpdGxlLWJhci1zcGFjZXI+XG5cbiAgICAgICAgICAgIDxmZHAtYXBwcm92YWwtZmxvdy10b29sYmFyLWFjdGlvbnNcbiAgICAgICAgICAgICAgICAqbmdJZj1cImlzRWRpdEF2YWlsYWJsZVwiXG4gICAgICAgICAgICAgICAgW2dyYXBoXT1cIl9ncmFwaFwiXG4gICAgICAgICAgICAgICAgW3NlbGVjdGVkTm9kZXNdPVwiX3NlbGVjdGVkTm9kZXNcIlxuICAgICAgICAgICAgICAgIFtncmFwaE1ldGFkYXRhXT1cIl9ncmFwaE1ldGFkYXRhXCJcbiAgICAgICAgICAgICAgICBbaXNFZGl0TW9kZV09XCJfaXNFZGl0TW9kZVwiXG4gICAgICAgICAgICAgICAgKGVudGVyRWRpdE1vZGUpPVwiX2VudGVyRWRpdE1vZGUoKVwiXG4gICAgICAgICAgICAgICAgKGFkZE5vZGUpPVwiX2FkZE5vZGUoJGV2ZW50Lm5vZGUsICRldmVudC50YXJnZXQpXCJcbiAgICAgICAgICAgICAgICAoZWRpdFNlbGVjdGVkTm9kZSk9XCJfZWRpdE5vZGUoJGV2ZW50KVwiXG4gICAgICAgICAgICAgICAgKGRlbGV0ZVNlbGVjdGVkTm9kZXMpPVwiX2RlbGV0ZVNlbGVjdGVkTm9kZXMoKVwiXG4gICAgICAgICAgICA+PC9mZHAtYXBwcm92YWwtZmxvdy10b29sYmFyLWFjdGlvbnM+XG4gICAgICAgIDwvZmQtZ3JpZC1saXN0LXRpdGxlLWJhcj5cblxuICAgICAgICA8ZGl2XG4gICAgICAgICAgICBjbGFzcz1cImZkcC1hcHByb3ZhbC1mbG93X193YXRjaGVyc1wiXG4gICAgICAgICAgICAqbmdJZj1cIl9hcHByb3ZhbFByb2Nlc3M/LndhdGNoZXJzPy5sZW5ndGggfHwgX2lzRWRpdE1vZGVcIlxuICAgICAgICAgICAgW2F0dHIuYXJpYS1sYWJlbF09XCJ3YXRjaGVyc0xhYmVsXCJcbiAgICAgICAgPlxuICAgICAgICAgICAgPHAgY2xhc3M9XCJmZHAtYXBwcm92YWwtZmxvd19fd2F0Y2hlcnMtdGl0bGVcIj5cbiAgICAgICAgICAgICAgICB7eyB3YXRjaGVyc0xhYmVsIHx8ICgncGxhdGZvcm1BcHByb3ZhbEZsb3cuZGVmYXVsdFdhdGNoZXJzTGFiZWwnIHwgZmRUcmFuc2xhdGUpIH19XG4gICAgICAgICAgICA8L3A+XG5cbiAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCIhX2lzRWRpdE1vZGVcIj5cbiAgICAgICAgICAgICAgICA8ZmQtYXZhdGFyXG4gICAgICAgICAgICAgICAgICAgICpuZ0Zvcj1cImxldCB3YXRjaGVyIG9mIF9hcHByb3ZhbFByb2Nlc3M/LndhdGNoZXJzOyB0cmFja0J5OiBfdHJhY2tCeUZuXCJcbiAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInhzXCJcbiAgICAgICAgICAgICAgICAgICAgW2ltYWdlXT1cIndhdGNoZXIuaW1nVXJsIHx8ICcnXCJcbiAgICAgICAgICAgICAgICAgICAgW2xhYmVsXT1cIndhdGNoZXIubmFtZVwiXG4gICAgICAgICAgICAgICAgICAgIFtjbGlja2FibGVdPVwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgICAgIFtjaXJjbGVdPVwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgICAgIChhdmF0YXJDbGlja2VkKT1cIl9vbldhdGNoZXJDbGljayh3YXRjaGVyLCAkZXZlbnQpXCJcbiAgICAgICAgICAgICAgICA+PC9mZC1hdmF0YXI+XG4gICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZkcC1hcHByb3ZhbC1mbG93X193YXRjaGVycy1pbnB1dC1jb250YWluZXJcIiAqbmdJZj1cIl9pc0VkaXRNb2RlXCI+XG4gICAgICAgICAgICAgICAgPGZkLW11bHRpLWlucHV0XG4gICAgICAgICAgICAgICAgICAgIFtkcm9wZG93blZhbHVlc109XCJfdXNlcnNGb3JXYXRjaGVyc0xpc3RcIlxuICAgICAgICAgICAgICAgICAgICBbcGxhY2Vob2xkZXJdPVwiJ3BsYXRmb3JtQXBwcm92YWxGbG93LndhdGNoZXJzSW5wdXRQbGFjZWhvbGRlcicgfCBmZFRyYW5zbGF0ZVwiXG4gICAgICAgICAgICAgICAgICAgIFtkaXNwbGF5Rm5dPVwiX2Rpc3BsYXlVc2VyRm5cIlxuICAgICAgICAgICAgICAgICAgICBbdmFsdWVGbl09XCJfdXNlclZhbHVlRm5cIlxuICAgICAgICAgICAgICAgICAgICBbc2hvd0FsbEJ1dHRvbl09XCJ0cnVlXCJcbiAgICAgICAgICAgICAgICAgICAgWyhuZ01vZGVsKV09XCJfc2VsZWN0ZWRXYXRjaGVySWRzXCJcbiAgICAgICAgICAgICAgICAgICAgKG5nTW9kZWxDaGFuZ2UpPVwiX3dhdGNoZXJzU2VsZWN0aW9uQ2hhbmdlZCgkZXZlbnQpXCJcbiAgICAgICAgICAgICAgICA+PC9mZC1tdWx0aS1pbnB1dD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiIV9ncmFwaC5lcnJvcnNcIj5cbiAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJfZ3JhcGguY29sdW1ucy5sZW5ndGg7IGVsc2UgZW1wdHlBcHByb3ZhbEZsb3dHcmFwaFwiPlxuICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJmZHAtYXBwcm92YWwtZmxvd19fY29udGFpbmVyXCJcbiAgICAgICAgICAgICAgICAgICAgW2NsYXNzLmZkcC1hcHByb3ZhbC1mbG93X19jb250YWluZXItLWV4dHJhLXBhZGRpbmctc3RhcnRdPVwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgICAgIFtjbGFzcy5mZHAtYXBwcm92YWwtZmxvd19fY29udGFpbmVyLS1leHRyYS1wYWRkaW5nLWVuZF09XCJ0cnVlXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZmRwLWFwcHJvdmFsLWZsb3ctY2Fyb3VzZWwtY29udHJvbHNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgKm5nSWY9XCJfc2Nyb2xsRGlmZiA+IDBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgW2NsYXNzLmZkcC1hcHByb3ZhbC1mbG93LWNhcm91c2VsLWNvbnRyb2xzLS1lZGl0LW1vZGVdPVwiX2lzRWRpdE1vZGVcIlxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKm5nSWY9XCJfY2Fyb3VzZWxTdGVwc0xlZnQgPiAwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImZkcC1hcHByb3ZhbC1mbG93LWNhcm91c2VsLWNvbnRyb2xzX19idXR0b24tLXByZXYtc2xpZGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFthdHRyLmFyaWEtbGFiZWxdPVwiJ3BsYXRmb3JtQXBwcm92YWxGbG93LnByZXZCdXR0b25BcmlhTGFiZWwnIHwgZmRUcmFuc2xhdGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChjbGljayk9XCJuZXh0U2xpZGUoLTEpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZmQtaWNvbiBbZ2x5cGhdPVwiJ25hdmlnYXRpb24tJyArIChfcnRsID8gJ3JpZ2h0JyA6ICdsZWZ0JykgKyAnLWFycm93J1wiPjwvZmQtaWNvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyBfY2Fyb3VzZWxTdGVwc0xlZnQgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKm5nSWY9XCJfY2Fyb3VzZWxTdGVwc1JpZ2h0ID4gMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJmZHAtYXBwcm92YWwtZmxvdy1jYXJvdXNlbC1jb250cm9sc19fYnV0dG9uLS1uZXh0LXNsaWRlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbYXR0ci5hcmlhLWxhYmVsXT1cIidwbGF0Zm9ybUFwcHJvdmFsRmxvdy5uZXh0QnV0dG9uQXJpYUxhYmVsJyB8IGZkVHJhbnNsYXRlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoY2xpY2spPVwibmV4dFNsaWRlKClcIlxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7IF9jYXJvdXNlbFN0ZXBzUmlnaHQgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZmQtaWNvbiBbZ2x5cGhdPVwiJ25hdmlnYXRpb24tJyArIChfcnRsID8gJ2xlZnQnIDogJ3JpZ2h0JykgKyAnLWFycm93J1wiPjwvZmQtaWNvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImZkcC1hcHByb3ZhbC1mbG93X19ncmFwaC1jb250YWluZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgW2NsYXNzLmZkcC1hcHByb3ZhbC1mbG93X19ncmFwaC1jb250YWluZXItLW11bHRpcGxlLXJvb3Qtbm9kZXNdPVwiX211bHRpcGxlUm9vdE5vZGVzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIFtjbGFzcy5mZHAtYXBwcm92YWwtZmxvd19fZ3JhcGgtY29udGFpbmVyLS1tdWx0aXBsZS1maW5hbC1ub2Rlc109XCJfbXVsdGlwbGVGaW5hbE5vZGVzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIFtjbGFzcy5mZC1zY3JvbGxiYXJdPVwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAjZ3JhcGhDb250YWluZXJFbFxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJmZHAtYXBwcm92YWwtZmxvd19fZ3JhcGhcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICNncmFwaEVsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW2NsYXNzLmZkcC1hcHByb3ZhbC1mbG93X19ncmFwaC0tZWRpdC1tb2RlXT1cIl9pc0VkaXRNb2RlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZmRwLWFwcHJvdmFsLWZsb3dfX2dyYXBoLWNvbHVtblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICpuZ0Zvcj1cImxldCBjb2x1bW4gb2YgX2dyYXBoLmNvbHVtbnM7IGxldCBjb2x1bW5JbmRleCA9IGluZGV4XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxmZHAtYXBwcm92YWwtZmxvdy1ub2RlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqbmdGb3I9XCJsZXQgbm9kZSBvZiBjb2x1bW4ubm9kZXM7IGxldCBub2RlSW5kZXggPSBpbmRleDsgdHJhY2tCeTogX3RyYWNrQnlGblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjZGtEcmFnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAjYXBwcm92YWxGbG93Tm9kZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2Nka0RyYWdEaXNhYmxlZF09XCJfaXNDZGtEcmFnRGlzYWJsZWQobm9kZSlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW25vZGVdPVwibm9kZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbbWV0YV09XCJfZ3JhcGhNZXRhZGF0YVtub2RlLmlkXVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbaXNFZGl0XT1cIl9pc0VkaXRNb2RlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtpc05leHROb2RlQmxhbmtdPVwiX2lzTmV4dE5vZGVCbGFuayhub2RlLCBjb2x1bW5JbmRleCwgbm9kZUluZGV4KVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbY2hlY2tEdWVEYXRlXT1cImNoZWNrRHVlRGF0ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbZHVlRGF0ZVRocmVzaG9sZF09XCJkdWVEYXRlVGhyZXNob2xkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtyZW5kZXJBcnJvd109XCJjb2x1bW5JbmRleCA+IDBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2FsbE5vZGVzSW5Db2x1bW5BcHByb3ZlZF09XCIhIWNvbHVtbi5hbGxOb2Rlc0FwcHJvdmVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChvbkFkZCk9XCJfYWRkTm9kZShub2RlLCAkZXZlbnQpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChvbkVkaXQpPVwiX2VkaXROb2RlKG5vZGUpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChvbkRlbGV0ZSk9XCJfb25Ob2RlRGVsZXRlKG5vZGUpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChrZXlkb3duKT1cIl9vbk5vZGVLZXlEb3duKCRldmVudCwgbm9kZSlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGNka0RyYWdTdGFydGVkKT1cIl9kcmFnRHJvcEluUHJvZ3Jlc3MgPSB0cnVlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChjZGtEcmFnUmVsZWFzZWQpPVwiX29uTm9kZURyb3Aobm9kZSwgJGV2ZW50LnNvdXJjZSlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGNka0RyYWdNb3ZlZCk9XCJfb25Ob2RlRHJhZ01vdmVkKG5vZGUpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPCEtLSBUcmljayB3aXRoIHVzaW5nIHByb2plY3Rpb24gdG8gbWFrZSBncmlkIGxpc3QgaXRlbXMgdmlzaWJsZSBmb3IgdGhlIGdyaWQgbGlzdCAtLT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxmZC1ncmlkLWxpc3QtaXRlbVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJhY3RpdmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFt2YWx1ZV09XCJub2RlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbc2VsZWN0ZWRdPVwiISFub2RlLnNlbGVjdGVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbYXJpYUxhYmVsbGVkQnldPVwiYXBwcm92YWxGbG93Tm9kZS5hcHByb3ZhbEZsb3dOb2RlSWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtkaXNhYmxlVG9vbGJhckNsaWNrXT1cInRydWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZmRwLWFwcHJvdmFsLWZsb3dfX2dyYXBoLW5vZGUtaW5uZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtjbGFzcy5mZHAtYXBwcm92YWwtZmxvd19fZ3JhcGgtbm9kZS1pbm5lci0tZWRpdF09XCJfaXNFZGl0TW9kZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKHByZXNzKT1cIl9vbk5vZGVDbGljayhub2RlKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGZkLWdyaWQtbGlzdC1pdGVtLXRvb2xiYXI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJfaXNFZGl0TW9kZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtuZ1RlbXBsYXRlT3V0bGV0XT1cImFwcHJvdmFsRmxvd05vZGUuX292ZXJmbG93TWVudUJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+PC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZmQtZ3JpZC1saXN0LWl0ZW0tdG9vbGJhcj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxmZC1hdmF0YXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmQtZ3JpZC1saXN0LWl0ZW0taW1hZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2ltYWdlXT1cIm5vZGUuYXBwcm92ZXJzLmxlbmd0aCA9PT0gMSA/IG5vZGUuYXBwcm92ZXJzWzBdLmltZ1VybCA6IG51bGxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbbGFiZWxdPVwibm9kZS5hcHByb3ZlcnMubGVuZ3RoID4gMSA/IG5vZGUuZGVzY3JpcHRpb24gOiBudWxsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInhzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2NpcmNsZV09XCJ0cnVlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+PC9mZC1hdmF0YXI+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bmctdGVtcGxhdGUgZmQtZ3JpZC1saXN0LWl0ZW0tYm9keT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW25nVGVtcGxhdGVPdXRsZXRdPVwiYXBwcm92YWxGbG93Tm9kZS5fbm9kZUNvbnRlbnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+PC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9uZy10ZW1wbGF0ZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZmQtZ3JpZC1saXN0LWl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZmRwLWFwcHJvdmFsLWZsb3ctbm9kZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICA8L2ZkLWdyaWQtbGlzdD5cblxuICAgIDxkaXYgZmQtYmFyICpuZ0lmPVwiX2lzRWRpdE1vZGVcIj5cbiAgICAgICAgPGRpdiBmZC1iYXItcmlnaHQ+XG4gICAgICAgICAgICA8ZmQtYmFyLWVsZW1lbnQ+XG4gICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICBmZC1idXR0b25cbiAgICAgICAgICAgICAgICAgICAgW2xhYmVsXT1cIidwbGF0Zm9ybUFwcHJvdmFsRmxvdy5lZGl0TW9kZVNhdmVCdXR0b25MYWJlbCcgfCBmZFRyYW5zbGF0ZVwiXG4gICAgICAgICAgICAgICAgICAgIGZkVHlwZT1cImVtcGhhc2l6ZWRcIlxuICAgICAgICAgICAgICAgICAgICBbZGlzYWJsZWRdPVwiZGlzYWJsZVNhdmVCdXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAoY2xpY2spPVwiX3NhdmVFZGl0TW9kZUNoYW5nZXMoKVwiXG4gICAgICAgICAgICAgICAgPjwvYnV0dG9uPlxuICAgICAgICAgICAgPC9mZC1iYXItZWxlbWVudD5cblxuICAgICAgICAgICAgPGZkLWJhci1lbGVtZW50PlxuICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgZmQtYnV0dG9uXG4gICAgICAgICAgICAgICAgICAgIFtsYWJlbF09XCIncGxhdGZvcm1BcHByb3ZhbEZsb3cuZWRpdE1vZGVFeGl0QnV0dG9uTGFiZWwnIHwgZmRUcmFuc2xhdGVcIlxuICAgICAgICAgICAgICAgICAgICBmZFR5cGU9XCJ0cmFuc3BhcmVudFwiXG4gICAgICAgICAgICAgICAgICAgIFtkaXNhYmxlZF09XCJkaXNhYmxlRXhpdEJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgIChjbGljayk9XCJfZXhpdEVkaXRNb2RlKClcIlxuICAgICAgICAgICAgICAgID48L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZmQtYmFyLWVsZW1lbnQ+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuXG4gICAgPG5nLXRlbXBsYXRlICNlbXB0eUFwcHJvdmFsRmxvd0dyYXBoPlxuICAgICAgICA8ZmlndXJlIGZkLWlsbHVzdHJhdGVkLW1lc3NhZ2UgdHlwZT1cInNwb3RcIiBbc3ZnQ29uZmlnXT1cIl9lbXB0eUFwcHJvdmFsRmxvd1Nwb3RDb25maWdcIj5cbiAgICAgICAgICAgIDxmaWdjYXB0aW9uIGZkLWlsbHVzdHJhdGVkLW1lc3NhZ2UtZmlnY2FwdGlvbj5cbiAgICAgICAgICAgICAgICA8aDMgZmQtaWxsdXN0cmF0ZWQtbWVzc2FnZS10aXRsZT5cbiAgICAgICAgICAgICAgICAgICAge3sgJ3BsYXRmb3JtQXBwcm92YWxGbG93LmVtcHR5VGl0bGUnIHwgZmRUcmFuc2xhdGUgfX1cbiAgICAgICAgICAgICAgICA8L2gzPlxuICAgICAgICAgICAgICAgIDxwIGZkLWlsbHVzdHJhdGVkLW1lc3NhZ2UtdGV4dD5cbiAgICAgICAgICAgICAgICAgICAge3sgJ3BsYXRmb3JtQXBwcm92YWxGbG93LmVtcHR5SGludCcgfCBmZFRyYW5zbGF0ZSB9fVxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDwvZmlnY2FwdGlvbj5cbiAgICAgICAgPC9maWd1cmU+XG5cbiAgICAgICAgPCEtLSBUT0RPICM1MTc4OiBSZXBsYWNlIHdpdGggaWxsdXN0cmF0ZWQgaW1hZ2UgY29tcG9uZW50IGFmdGVyIGl0IGdldHMgZml4ZWQgLS0+XG4gICAgICAgIDxkaXYgc3R5bGU9XCJkaXNwbGF5OiBub25lXCI+XG4gICAgICAgICAgICA8c3ZnXG4gICAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICAgICAgICAgICAgd2lkdGg9XCIxMjhcIlxuICAgICAgICAgICAgICAgIGhlaWdodD1cIjEyOFwiXG4gICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAxMjggMTI4XCJcbiAgICAgICAgICAgICAgICBpZD1cInNhcElsbHVzLVNwb3QtTm9EYXRhXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgICAgICBkPVwiTTQxLjYxNzksMzIuNzE3NEg4NC42MjczYTEsMSwwLDAsMSwuNzIzLjMwOTJsNy4yNDQ1LDcuNTgyNCw3LjQ4MTcsNy44NDkxYTEsMSwwLDAsMSwuMjc2MS42OWwtLjAwNDYsNTUuNjA2OWE0LjEwMzgsNC4xMDM4LDAsMCwxLS44Nzg3LDIuMTIxMkE0LjA1NjQsNC4wNTY0LDAsMCwxLDk4LjEsMTA3Ljk2MzFsLTU2LjM4NTguMDMxM2EyLjYxNjcsMi42MTY3LDAsMCwxLTMuMDgxMi0zLjIzMDlsLS4wMTUyLTY5LjA1OTRaXCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJzYXBJbGx1c19QYXR0ZXJuU2hhZG93XCJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9XCJmaWxsOiB2YXIoLS1zYXBJbGx1c19QYXR0ZXJuU2hhZG93KVwiXG4gICAgICAgICAgICAgICAgPjwvcGF0aD5cbiAgICAgICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgICAgICBkPVwiTTM1Ljc5MjgsMjcuNDk4N0g3OC44MDIyYTEsMSwwLDAsMSwuNzIzLjMwOTJMODYuNzcsMzUuMzlsNy40ODE2LDcuODQ5MmExLDEsMCwwLDEsLjI3NjIuNjlsLS4wMDQ2LDU1LjYwNjlhMywzLDAsMCwxLTMsM0gzNS44MDhhMi45OTQ2LDIuOTk0NiwwLDAsMS0zLTIuOTkxM2MtLjAxLTEyLjA1NjQtLjA0MjMtNTcuMDExNi0uMDE1Mi02OS4wNTk1QTIuOTk0MywyLjk5NDMsMCwwLDEsMzUuNzkyOCwyNy40OTg3WlwiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVwic2FwSWxsdXNfT2JqZWN0RmlsbENvbG9yXCJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9XCJmaWxsOiB2YXIoLS1zYXBJbGx1c19PYmplY3RGaWxsQ29sb3IpXCJcbiAgICAgICAgICAgICAgICA+PC9wYXRoPlxuICAgICAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgICAgIGQ9XCJNOTMuMjk3OCw0NC41MzM1SDc4LjgyMDhhLjk5MjUuOTkyNSwwLDAsMS0uOTc0LTEuMDFWMjguNTEwOGEuOTcuOTcsMCwwLDEsMS42NjI4LS43MTQzTDkzLjk4NjUsNDIuODA5MkExLjAxNTEsMS4wMTUxLDAsMCwxLDkzLjI5NzgsNDQuNTMzNVpcIlxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cInNhcElsbHVzX0JyYW5kQ29sb3JTZWNvbmRhcnlcIlxuICAgICAgICAgICAgICAgICAgICBzdHlsZT1cImZpbGw6IHZhcigtLXNhcElsbHVzX0JyYW5kQ29sb3JTZWNvbmRhcnkpXCJcbiAgICAgICAgICAgICAgICA+PC9wYXRoPlxuICAgICAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgICAgIGQ9XCJNMTA0LjYwOCwzOC45NDg1bDUuOTE1Ny0xLjc3MjFjMS4zMi0uMzk1NC43NTg0LTIuNTI1OC0uNTY4OS0yLjEyODJMMTA0LjAzOTIsMzYuODJjLTEuMzIuMzk1My0uNzU4NCwyLjUyNTguNTY4OCwyLjEyODJaXCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJzYXBJbGx1c19MYXllcmluZzFcIlxuICAgICAgICAgICAgICAgICAgICBzdHlsZT1cImZpbGw6IHZhcigtLXNhcElsbHVzX0xheWVyaW5nMSlcIlxuICAgICAgICAgICAgICAgID48L3BhdGg+XG4gICAgICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICAgICAgZD1cIk04NS4yOTczLDIxLjI0NjVsLjk3MTgtNS45MzMxYy4yMTU0LTEuMzE1MS0xLjc3Ny0xLjg4MDctMS45OTQxLS41NTU0bC0uOTcxOCw1LjkzMzJjLS4yMTU1LDEuMzE1MSwxLjc3NywxLjg4MDcsMS45OTQxLjU1NTNaXCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJzYXBJbGx1c19MYXllcmluZzFcIlxuICAgICAgICAgICAgICAgICAgICBzdHlsZT1cImZpbGw6IHZhcigtLXNhcElsbHVzX0xheWVyaW5nMSlcIlxuICAgICAgICAgICAgICAgID48L3BhdGg+XG4gICAgICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICAgICAgZD1cIk05NS4zMDM0LDI5LjAwMTVhMS4wMSwxLjAxLDAsMCwxLS42ODM3LS4yNjcsMS4wNzgzLDEuMDc4MywwLDAsMS0uMDg2NC0xLjQ5MzJsNS45NTExLTYuODg1N2ExLjAxLDEuMDEsMCwwLDEsMS40NTM4LS4wODg0LDEuMDc4NSwxLjA3ODUsMCwwLDEsLjA4NjUsMS40OTMybC01Ljk1MTEsNi44ODU4QTEuMDE2NCwxLjAxNjQsMCwwLDEsOTUuMzAzNCwyOS4wMDE1WlwiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVwic2FwSWxsdXNfTGF5ZXJpbmcxXCJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9XCJmaWxsOiB2YXIoLS1zYXBJbGx1c19MYXllcmluZzEpXCJcbiAgICAgICAgICAgICAgICA+PC9wYXRoPlxuICAgICAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgICAgIGQ9XCJNOTQuODc0Nyw0Mi44ODYxLDgwLjA4NTUsMjcuNDYyM2ExLjUxNTIsMS41MTUyLDAsMCwwLTEuMDg4NS0uNDYzNkgzNS44MDdhMy41MDksMy41MDksMCwwLDAtMy41MTQ2LDMuNDgzNmMtLjAyOTQsMTMuMjg1Ny4wMTM3LDY2Ljc1NTkuMDE1Nyw2OS4wMjU3YTMuNTA3NiwzLjUwNzYsMCwwLDAsMy41MTQ2LDMuNDg5NEg5MS43NzA5YTMuNTEwNiwzLjUxMDYsMCwwLDAsMy41MTQ2LTMuNDk4MmwuMDA1LTU1LjU3ODVBMS40OSwxLjQ5LDAsMCwwLDk0Ljg3NDcsNDIuODg2MVptLTE2LjIxLTE0LjgzNTVhMS4xNSwxLjE1LDAsMCwxLC4yNTYxLS4wMzA5LDEuMDQsMS4wNCwwLDAsMSwuNTEuMjEzNGwxNC4yNzYsMTQuODgzNy4wMTk0LjAyYS41ODkxLjU4OTEsMCwwLDEsLjA5NjguNjI1MWMtLjEwMTYuMTc2NC0uNDA4Ni4yNC0uNjkuMjRMNzguODM1NSw0NGEuNjAzMS42MDMxLDAsMCwxLS41NDcyLS42MTMxYy0uMDA4Ny00Ljk1ODgtLjAxNy05LjkwMTUtLjAwMzUtMTQuODY4OUEuNTE4OS41MTg5LDAsMCwxLDc4LjY2NDYsMjguMDUwNlptMTMuMTA2Miw3My45NUgzNS44MTg4YTIuNTA0NSwyLjUwNDUsMCwwLDEtMi41MTA3LTIuNDkxYy0uMDAyLTIuMjY5NC0uMDQ1MS01NS43NC0uMDE1Ny02OS4wMjQ4YTIuNTA1NCwyLjUwNTQsMCwwLDEsMi41MTA3LTIuNDg2MUg3Ny4zNjg0YTEuNDksMS40OSwwLDAsMC0uMDk3Ni41MTA2VjQzLjQ5MzRBMS41MTQ1LDEuNTE0NSwwLDAsMCw3OC43ODk0LDQ1SDc4LjkyTDk0LjI4Niw0Ny45NzQ5bC0uMDA0Niw1MS41MjY5QTIuNTA3NCwyLjUwNzQsMCwwLDEsOTEuNzcwOCwxMDIuMDAwNlpcIlxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cInNhcElsbHVzX1N0cm9rZURldGFpbENvbG9yXCJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9XCJmaWxsOiB2YXIoLS1zYXBJbGx1c19TdHJva2VEZXRhaWxDb2xvcilcIlxuICAgICAgICAgICAgICAgID48L3BhdGg+XG4gICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9uZy10ZW1wbGF0ZT5cbjwvbmctY29udGFpbmVyPlxuIl19