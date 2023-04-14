import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ViewEncapsulation } from '@angular/core';
import { combineLatest } from 'rxjs';
import { FdDate } from '@fundamental-ngx/core/datetime';
import { DialogRef } from '@fundamental-ngx/core/dialog';
import { ApprovalFlowAddNodeViewService, VIEW_MODES } from '../services/approval-flow-add-node-view.service';
import { displayTeamFn, displayUserFn, filterByName, trackByFn } from '../helpers';
import * as i0 from "@angular/core";
import * as i1 from "@fundamental-ngx/core/dialog";
import * as i2 from "../services/approval-flow-add-node-view.service";
import * as i3 from "@angular/common";
import * as i4 from "@angular/forms";
import * as i5 from "@fundamental-ngx/core/content-density";
import * as i6 from "@fundamental-ngx/core/button";
import * as i7 from "@fundamental-ngx/core/icon";
import * as i8 from "@fundamental-ngx/cdk/utils";
import * as i9 from "@fundamental-ngx/platform/search-field";
import * as i10 from "@fundamental-ngx/core/multi-input";
import * as i11 from "@fundamental-ngx/core/checkbox";
import * as i12 from "@fundamental-ngx/core/select";
import * as i13 from "@fundamental-ngx/core/date-picker";
import * as i14 from "@fundamental-ngx/core/busy-indicator";
import * as i15 from "@fundamental-ngx/core/form";
import * as i16 from "../approval-flow-user-list/approval-flow-user-list.component";
import * as i17 from "../approval-flow-user-details/approval-flow-user-details.component";
import * as i18 from "../approval-flow-team-list/approval-flow-team-list.component";
import * as i19 from "@fundamental-ngx/i18n";
function ApprovalFlowAddNodeComponent_ng_template_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "fdTranslate");
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(2, 1, "platformApprovalFlow.addNodeDialogHeaderAddApprovers"), " ");
} }
function ApprovalFlowAddNodeComponent_ng_template_2_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "fdTranslate");
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(2, 1, "platformApprovalFlow.addNodeDialogHeaderEditApprover"), " ");
} }
function ApprovalFlowAddNodeComponent_ng_template_2_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "fdTranslate");
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(2, 1, "platformApprovalFlow.addNodeDialogHeaderAddApproverTeam"), " ");
} }
function ApprovalFlowAddNodeComponent_ng_template_2_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    const _r14 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "fd-icon", 5);
    i0.ɵɵlistener("click", function ApprovalFlowAddNodeComponent_ng_template_2_ng_container_4_Template_fd_icon_click_1_listener() { i0.ɵɵrestoreView(_r14); const ctx_r13 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r13._exitTeamMembersMode()); });
    i0.ɵɵelementEnd();
    i0.ɵɵtext(2);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r10 = i0.ɵɵnextContext(2);
    let tmp_1_0;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("glyph", ctx_r10._headerArrowGlyph);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate2(" ", (tmp_1_0 = ctx_r10.viewService.team == null ? null : ctx_r10.viewService.team.name) !== null && tmp_1_0 !== undefined ? tmp_1_0 : "", " (", (tmp_1_0 = ctx_r10.viewService.team == null ? null : ctx_r10.viewService.team.members == null ? null : ctx_r10.viewService.team.members.length) !== null && tmp_1_0 !== undefined ? tmp_1_0 : 0, ") ");
} }
function ApprovalFlowAddNodeComponent_ng_template_2_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    const _r16 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "fd-icon", 5);
    i0.ɵɵlistener("click", function ApprovalFlowAddNodeComponent_ng_template_2_ng_container_5_Template_fd_icon_click_1_listener() { i0.ɵɵrestoreView(_r16); const ctx_r15 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r15._exitUserDetailsMode()); });
    i0.ɵɵelementEnd();
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "fdTranslate");
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r11 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("glyph", ctx_r11._headerArrowGlyph);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(3, 2, "platformApprovalFlow.addNodeDialogHeaderDetail"), " ");
} }
const _c0 = function () { return []; };
function ApprovalFlowAddNodeComponent_ng_template_2_fdp_search_field_6_Template(rf, ctx) { if (rf & 1) {
    const _r18 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "fdp-search-field", 6);
    i0.ɵɵlistener("inputChange", function ApprovalFlowAddNodeComponent_ng_template_2_fdp_search_field_6_Template_fdp_search_field_inputChange_0_listener($event) { i0.ɵɵrestoreView(_r18); const ctx_r17 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r17._onSearchStringChange($event.text)); });
    i0.ɵɵpipe(1, "fdTranslate");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵproperty("placeholder", i0.ɵɵpipeBind1(1, 2, "platformApprovalFlow.addNodeSearchPlaceholder"))("suggestions", i0.ɵɵpureFunction0(4, _c0));
} }
function ApprovalFlowAddNodeComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p");
    i0.ɵɵtemplate(1, ApprovalFlowAddNodeComponent_ng_template_2_ng_container_1_Template, 3, 3, "ng-container", 2);
    i0.ɵɵtemplate(2, ApprovalFlowAddNodeComponent_ng_template_2_ng_container_2_Template, 3, 3, "ng-container", 2);
    i0.ɵɵtemplate(3, ApprovalFlowAddNodeComponent_ng_template_2_ng_container_3_Template, 3, 3, "ng-container", 2);
    i0.ɵɵtemplate(4, ApprovalFlowAddNodeComponent_ng_template_2_ng_container_4_Template, 3, 3, "ng-container", 2);
    i0.ɵɵtemplate(5, ApprovalFlowAddNodeComponent_ng_template_2_ng_container_5_Template, 4, 4, "ng-container", 2);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(6, ApprovalFlowAddNodeComponent_ng_template_2_fdp_search_field_6_Template, 2, 5, "fdp-search-field", 4);
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r0._selectMode && !ctx_r0._data.isEdit);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r0._selectMode && ctx_r0._data.isEdit);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.viewService.isSelectUserMode || ctx_r0.viewService.isSelectTeamMode);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.viewService.isTeamMembersMode);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.viewService.isUserDetailsMode);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0._selectMode && !ctx_r0._userToShowDetails);
} }
function ApprovalFlowAddNodeComponent_ng_container_4_div_1_ng_container_5_li_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li", 16);
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "fdTranslate");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const option_r26 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵproperty("value", option_r26);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(2, 2, "platformApprovalFlow.addNodeDialogNodeTypeSerial"), " ");
} }
function ApprovalFlowAddNodeComponent_ng_container_4_div_1_ng_container_5_li_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li", 16);
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "fdTranslate");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const option_r26 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵproperty("value", option_r26);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(2, 2, "platformApprovalFlow.addNodeDialogNodeTypeParallel"), " ");
} }
function ApprovalFlowAddNodeComponent_ng_container_4_div_1_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0)(1, 14);
    i0.ɵɵtemplate(2, ApprovalFlowAddNodeComponent_ng_container_4_div_1_ng_container_5_li_2_Template, 3, 4, "li", 15);
    i0.ɵɵtemplate(3, ApprovalFlowAddNodeComponent_ng_container_4_div_1_ng_container_5_li_3_Template, 3, 4, "li", 15);
    i0.ɵɵelementContainerEnd()();
} if (rf & 2) {
    const option_r26 = ctx.$implicit;
    const ctx_r25 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitch", option_r26);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitchCase", ctx_r25._nodeTypes.SERIAL);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitchCase", ctx_r25._nodeTypes.PARALLEL);
} }
function ApprovalFlowAddNodeComponent_ng_container_4_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r32 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 8)(1, "label", 9);
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "fdTranslate");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "fd-select", 10);
    i0.ɵɵlistener("valueChange", function ApprovalFlowAddNodeComponent_ng_container_4_div_1_Template_fd_select_valueChange_4_listener($event) { i0.ɵɵrestoreView(_r32); const ctx_r31 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r31._nodeType = $event); });
    i0.ɵɵtemplate(5, ApprovalFlowAddNodeComponent_ng_container_4_div_1_ng_container_5_Template, 4, 3, "ng-container", 11);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r19 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(3, 3, "platformApprovalFlow.addNodeDialogNodeType"), " ");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("value", ctx_r19._nodeType);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r19._nodeTypesArray);
} }
function ApprovalFlowAddNodeComponent_ng_container_4_ng_container_7_li_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li", 16);
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "fdTranslate");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const option_r33 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵproperty("value", option_r33);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(2, 2, "platformApprovalFlow.addNodeDialogApproverTypeUser"), " ");
} }
function ApprovalFlowAddNodeComponent_ng_container_4_ng_container_7_li_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li", 16);
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "fdTranslate");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const option_r33 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵproperty("value", option_r33);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(2, 2, "platformApprovalFlow.addNodeDialogApproverTypeTeamAnyone"), " ");
} }
function ApprovalFlowAddNodeComponent_ng_container_4_ng_container_7_li_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li", 16);
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "fdTranslate");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const option_r33 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵproperty("value", option_r33);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(2, 2, "platformApprovalFlow.addNodeDialogApproverTypeTeamEveryone"), " ");
} }
function ApprovalFlowAddNodeComponent_ng_container_4_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0)(1, 14);
    i0.ɵɵtemplate(2, ApprovalFlowAddNodeComponent_ng_container_4_ng_container_7_li_2_Template, 3, 4, "li", 15);
    i0.ɵɵtemplate(3, ApprovalFlowAddNodeComponent_ng_container_4_ng_container_7_li_3_Template, 3, 4, "li", 15);
    i0.ɵɵtemplate(4, ApprovalFlowAddNodeComponent_ng_container_4_ng_container_7_li_4_Template, 3, 4, "li", 15);
    i0.ɵɵelementContainerEnd()();
} if (rf & 2) {
    const option_r33 = ctx.$implicit;
    const ctx_r20 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitch", option_r33);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitchCase", ctx_r20._approverTypes.SINGLE_USER);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitchCase", ctx_r20._approverTypes.ANYONE);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitchCase", ctx_r20._approverTypes.EVERYONE);
} }
function ApprovalFlowAddNodeComponent_ng_container_4_fd_multi_input_12_Template(rf, ctx) { if (rf & 1) {
    const _r41 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "fd-multi-input", 17);
    i0.ɵɵlistener("ngModelChange", function ApprovalFlowAddNodeComponent_ng_container_4_fd_multi_input_12_Template_fd_multi_input_ngModelChange_0_listener($event) { i0.ɵɵrestoreView(_r41); const ctx_r40 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r40._selectedApprovers = $event); })("openChange", function ApprovalFlowAddNodeComponent_ng_container_4_fd_multi_input_12_Template_fd_multi_input_openChange_0_listener() { i0.ɵɵrestoreView(_r41); const ctx_r42 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r42._goToSelectMode()); })("selectedChange", function ApprovalFlowAddNodeComponent_ng_container_4_fd_multi_input_12_Template_fd_multi_input_selectedChange_0_listener($event) { i0.ɵɵrestoreView(_r41); const ctx_r43 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r43._setSelectedApprovers($event)); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r21 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("showAllButton", false)("dropdownValues", ctx_r21._selectedApprovers)("ngModel", ctx_r21._selectedApprovers)("displayFn", ctx_r21._displayUserFn);
} }
function ApprovalFlowAddNodeComponent_ng_container_4_fd_multi_input_13_Template(rf, ctx) { if (rf & 1) {
    const _r45 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "fd-multi-input", 18);
    i0.ɵɵlistener("ngModelChange", function ApprovalFlowAddNodeComponent_ng_container_4_fd_multi_input_13_Template_fd_multi_input_ngModelChange_0_listener($event) { i0.ɵɵrestoreView(_r45); const ctx_r44 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r44._selectedTeamArray = $event); })("openChange", function ApprovalFlowAddNodeComponent_ng_container_4_fd_multi_input_13_Template_fd_multi_input_openChange_0_listener() { i0.ɵɵrestoreView(_r45); const ctx_r46 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r46._goToSelectMode()); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r22 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("showAllButton", false)("dropdownValues", ctx_r22._selectedTeamArray)("ngModel", ctx_r22._selectedTeamArray)("displayFn", ctx_r22._displayTeamFn);
} }
function ApprovalFlowAddNodeComponent_ng_container_4_div_14_Template(rf, ctx) { if (rf & 1) {
    const _r48 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 8)(1, "fd-checkbox", 19);
    i0.ɵɵlistener("ngModelChange", function ApprovalFlowAddNodeComponent_ng_container_4_div_14_Template_fd_checkbox_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r48); const ctx_r47 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r47._addToNextSerial = $event); });
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "fdTranslate");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r23 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngModel", ctx_r23._addToNextSerial);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(3, 2, "platformApprovalFlow.addNodeDialogAddToNext"), " ");
} }
function ApprovalFlowAddNodeComponent_ng_container_4_div_15_Template(rf, ctx) { if (rf & 1) {
    const _r50 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 8)(1, "label", 9);
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "fdTranslate");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "fd-date-picker", 20);
    i0.ɵɵlistener("ngModelChange", function ApprovalFlowAddNodeComponent_ng_container_4_div_15_Template_fd_date_picker_ngModelChange_4_listener($event) { i0.ɵɵrestoreView(_r50); const ctx_r49 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r49._dueDate = $event); });
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r24 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(3, 3, "platformApprovalFlow.addNodeDialogDueDate"));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("state", !ctx_r24._dueDate ? "error" : null)("ngModel", ctx_r24._dueDate);
} }
function ApprovalFlowAddNodeComponent_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    const _r52 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, ApprovalFlowAddNodeComponent_ng_container_4_div_1_Template, 6, 5, "div", 7);
    i0.ɵɵelementStart(2, "div", 8)(3, "label", 9);
    i0.ɵɵtext(4);
    i0.ɵɵpipe(5, "fdTranslate");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "fd-select", 10);
    i0.ɵɵlistener("valueChange", function ApprovalFlowAddNodeComponent_ng_container_4_Template_fd_select_valueChange_6_listener($event) { i0.ɵɵrestoreView(_r52); const ctx_r51 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r51._approverType = $event); });
    i0.ɵɵtemplate(7, ApprovalFlowAddNodeComponent_ng_container_4_ng_container_7_Template, 5, 4, "ng-container", 11);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(8, "div", 8)(9, "label", 9);
    i0.ɵɵtext(10);
    i0.ɵɵpipe(11, "fdTranslate");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(12, ApprovalFlowAddNodeComponent_ng_container_4_fd_multi_input_12_Template, 1, 4, "fd-multi-input", 12);
    i0.ɵɵtemplate(13, ApprovalFlowAddNodeComponent_ng_container_4_fd_multi_input_13_Template, 1, 4, "fd-multi-input", 13);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(14, ApprovalFlowAddNodeComponent_ng_container_4_div_14_Template, 4, 4, "div", 7);
    i0.ɵɵtemplate(15, ApprovalFlowAddNodeComponent_ng_container_4_div_15_Template, 5, 5, "div", 7);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r1._data.showNodeTypeSelect);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(5, 9, "platformApprovalFlow.addNodeDialogApproverType"), " ");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("value", ctx_r1._approverType);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r1._approverTypesArray);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(11, 11, "platformApprovalFlow.addNodeDialogUserOrTeam"));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r1._isSingleUserMode);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r1._isSingleUserMode);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r1._nodeType === ctx_r1._nodeTypes.PARALLEL);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r1._checkDueDate);
} }
function ApprovalFlowAddNodeComponent_ng_container_5_ng_container_1_fdp_approval_flow_team_list_1_Template(rf, ctx) { if (rf & 1) {
    const _r58 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "fdp-approval-flow-team-list", 23);
    i0.ɵɵlistener("onTeamClick", function ApprovalFlowAddNodeComponent_ng_container_5_ng_container_1_fdp_approval_flow_team_list_1_Template_fdp_approval_flow_team_list_onTeamClick_0_listener($event) { i0.ɵɵrestoreView(_r58); const ctx_r57 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r57._viewTeamMembers($event)); })("onTeamRadioClick", function ApprovalFlowAddNodeComponent_ng_container_5_ng_container_1_fdp_approval_flow_team_list_1_Template_fdp_approval_flow_team_list_onTeamRadioClick_0_listener($event) { i0.ɵɵrestoreView(_r58); const ctx_r59 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r59._setSelectedTeam($event)); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r56 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("isRtl", ctx_r56._data.rtl)("teams", ctx_r56._teams)("selectedTeamId", ctx_r56._selectedTeam == null ? null : ctx_r56._selectedTeam.id);
} }
function ApprovalFlowAddNodeComponent_ng_container_5_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, ApprovalFlowAddNodeComponent_ng_container_5_ng_container_1_fdp_approval_flow_team_list_1_Template, 1, 3, "fdp-approval-flow-team-list", 22);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r53 = i0.ɵɵnextContext(2);
    const _r5 = i0.ɵɵreference(10);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r53._data.teamDataSource.isDataLoading)("ngIfElse", _r5);
} }
function ApprovalFlowAddNodeComponent_ng_container_5_ng_container_2_fdp_approval_flow_user_list_1_Template(rf, ctx) { if (rf & 1) {
    const _r62 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "fdp-approval-flow-user-list", 25);
    i0.ɵɵlistener("onUserClick", function ApprovalFlowAddNodeComponent_ng_container_5_ng_container_2_fdp_approval_flow_user_list_1_Template_fdp_approval_flow_user_list_onUserClick_0_listener($event) { i0.ɵɵrestoreView(_r62); const ctx_r61 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r61._seeUserDetails($event)); })("onSelectionChange", function ApprovalFlowAddNodeComponent_ng_container_5_ng_container_2_fdp_approval_flow_user_list_1_Template_fdp_approval_flow_user_list_onSelectionChange_0_listener($event) { i0.ɵɵrestoreView(_r62); const ctx_r63 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r63._selectedApprovers = $event); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r60 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("users", ctx_r60.viewService.isSelectUserMode ? ctx_r60._approvers : ctx_r60._filteredTeamMembers)("isSelectable", ctx_r60.viewService.isSelectUserMode)("selectedUsers", ctx_r60._selectedApprovers);
} }
function ApprovalFlowAddNodeComponent_ng_container_5_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, ApprovalFlowAddNodeComponent_ng_container_5_ng_container_2_fdp_approval_flow_user_list_1_Template, 1, 3, "fdp-approval-flow-user-list", 24);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r54 = i0.ɵɵnextContext(2);
    const _r5 = i0.ɵɵreference(10);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r54.viewService.isSelectUserMode || !ctx_r54._data.userDataSource.isDataLoading)("ngIfElse", _r5);
} }
function ApprovalFlowAddNodeComponent_ng_container_5_fdp_approval_flow_user_details_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "fdp-approval-flow-user-details", 26);
} if (rf & 2) {
    const ctx_r55 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("user", ctx_r55._userToShowDetails)("detailsTemplate", ctx_r55._data.userDetailsTemplate)("details", ctx_r55._userToShowDetailsData$);
} }
function ApprovalFlowAddNodeComponent_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, ApprovalFlowAddNodeComponent_ng_container_5_ng_container_1_Template, 2, 2, "ng-container", 2);
    i0.ɵɵtemplate(2, ApprovalFlowAddNodeComponent_ng_container_5_ng_container_2_Template, 2, 2, "ng-container", 2);
    i0.ɵɵtemplate(3, ApprovalFlowAddNodeComponent_ng_container_5_fdp_approval_flow_user_details_3_Template, 1, 3, "fdp-approval-flow-user-details", 21);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r2.viewService.isSelectTeamMode);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r2.viewService.isSelectUserMode || ctx_r2.viewService.isTeamMembersMode);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r2.viewService.isUserDetailsMode && ctx_r2._userToShowDetails);
} }
function ApprovalFlowAddNodeComponent_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    const _r65 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "fd-dialog-footer-button")(2, "button", 27);
    i0.ɵɵlistener("click", function ApprovalFlowAddNodeComponent_ng_container_7_Template_button_click_2_listener() { i0.ɵɵrestoreView(_r65); const ctx_r64 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r64._submit()); });
    i0.ɵɵpipe(3, "fdTranslate");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(4, "fd-dialog-footer-button")(5, "button", 28);
    i0.ɵɵlistener("click", function ApprovalFlowAddNodeComponent_ng_container_7_Template_button_click_5_listener() { i0.ɵɵrestoreView(_r65); const ctx_r66 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r66.dialogRef.close()); });
    i0.ɵɵpipe(6, "fdTranslate");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("label", i0.ɵɵpipeBind1(3, 3, "platformApprovalFlow.addNodeAddActionBtnLabel"))("disabled", ctx_r3._isMainSubmitButtonDisabled);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("label", i0.ɵɵpipeBind1(6, 5, "platformApprovalFlow.addNodeCancelActionBtnLabel"));
} }
function ApprovalFlowAddNodeComponent_ng_container_8_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r72 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "fd-dialog-footer-button")(2, "button", 29);
    i0.ɵɵlistener("click", function ApprovalFlowAddNodeComponent_ng_container_8_ng_container_1_Template_button_click_2_listener() { i0.ɵɵrestoreView(_r72); const ctx_r71 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r71._confirmSelectedApprovers()); });
    i0.ɵɵpipe(3, "fdTranslate");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(4, "fd-dialog-footer-button")(5, "button", 30);
    i0.ɵɵlistener("click", function ApprovalFlowAddNodeComponent_ng_container_8_ng_container_1_Template_button_click_5_listener() { i0.ɵɵrestoreView(_r72); const ctx_r73 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r73._exitSelectMode()); });
    i0.ɵɵpipe(6, "fdTranslate");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r67 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("label", i0.ɵɵpipeBind1(3, 3, "platformApprovalFlow.addNodeSelectApproverActionBtnLabel"))("disabled", !ctx_r67._selectedApprovers.length);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("label", i0.ɵɵpipeBind1(6, 5, "platformApprovalFlow.addNodeCancelApproverSelectionActionBtnLabel"));
} }
function ApprovalFlowAddNodeComponent_ng_container_8_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    const _r75 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "fd-dialog-footer-button")(2, "button", 29);
    i0.ɵɵlistener("click", function ApprovalFlowAddNodeComponent_ng_container_8_ng_container_2_Template_button_click_2_listener() { i0.ɵɵrestoreView(_r75); const ctx_r74 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r74._confirmSelectedTeam()); });
    i0.ɵɵpipe(3, "fdTranslate");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(4, "fd-dialog-footer-button")(5, "button", 30);
    i0.ɵɵlistener("click", function ApprovalFlowAddNodeComponent_ng_container_8_ng_container_2_Template_button_click_5_listener() { i0.ɵɵrestoreView(_r75); const ctx_r76 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r76._exitSelectMode()); });
    i0.ɵɵpipe(6, "fdTranslate");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r68 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("label", i0.ɵɵpipeBind1(3, 3, "platformApprovalFlow.addNodeSelectApproverActionBtnLabel"))("disabled", !ctx_r68._selectedTeam && !ctx_r68.viewService.team);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("label", i0.ɵɵpipeBind1(6, 5, "platformApprovalFlow.addNodeCancelApproverSelectionActionBtnLabel"));
} }
function ApprovalFlowAddNodeComponent_ng_container_8_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    const _r78 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "fd-dialog-footer-button")(2, "button", 30);
    i0.ɵɵlistener("click", function ApprovalFlowAddNodeComponent_ng_container_8_ng_container_3_Template_button_click_2_listener() { i0.ɵɵrestoreView(_r78); const ctx_r77 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r77._exitTeamMembersMode()); });
    i0.ɵɵpipe(3, "fdTranslate");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("label", i0.ɵɵpipeBind1(3, 1, "platformApprovalFlow.addNodeApproverOrTeamDetailsCloseActionBtnLabel"));
} }
function ApprovalFlowAddNodeComponent_ng_container_8_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    const _r80 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "fd-dialog-footer-button")(2, "button", 30);
    i0.ɵɵlistener("click", function ApprovalFlowAddNodeComponent_ng_container_8_ng_container_4_Template_button_click_2_listener() { i0.ɵɵrestoreView(_r80); const ctx_r79 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r79._exitUserDetailsMode()); });
    i0.ɵɵpipe(3, "fdTranslate");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("label", i0.ɵɵpipeBind1(3, 1, "platformApprovalFlow.addNodeApproverOrTeamDetailsCloseActionBtnLabel"));
} }
function ApprovalFlowAddNodeComponent_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, ApprovalFlowAddNodeComponent_ng_container_8_ng_container_1_Template, 7, 7, "ng-container", 2);
    i0.ɵɵtemplate(2, ApprovalFlowAddNodeComponent_ng_container_8_ng_container_2_Template, 7, 7, "ng-container", 2);
    i0.ɵɵtemplate(3, ApprovalFlowAddNodeComponent_ng_container_8_ng_container_3_Template, 4, 3, "ng-container", 2);
    i0.ɵɵtemplate(4, ApprovalFlowAddNodeComponent_ng_container_8_ng_container_4_Template, 4, 3, "ng-container", 2);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r4.viewService.isSelectUserMode);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r4.viewService.isSelectTeamMode);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r4.viewService.isTeamMembersMode);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r4.viewService.isUserDetailsMode);
} }
function ApprovalFlowAddNodeComponent_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "fd-busy-indicator", 31);
} if (rf & 2) {
    i0.ɵɵproperty("loading", true)("block", true);
} }
export var APPROVAL_FLOW_NODE_TYPES;
(function (APPROVAL_FLOW_NODE_TYPES) {
    APPROVAL_FLOW_NODE_TYPES["SERIAL"] = "SERIAL";
    APPROVAL_FLOW_NODE_TYPES["PARALLEL"] = "PARALLEL";
})(APPROVAL_FLOW_NODE_TYPES || (APPROVAL_FLOW_NODE_TYPES = {}));
export var APPROVAL_FLOW_APPROVER_TYPES;
(function (APPROVAL_FLOW_APPROVER_TYPES) {
    APPROVAL_FLOW_APPROVER_TYPES["SINGLE_USER"] = "SINGLE_USER";
    APPROVAL_FLOW_APPROVER_TYPES["ANYONE"] = "ANYONE";
    APPROVAL_FLOW_APPROVER_TYPES["EVERYONE"] = "EVERYONE";
})(APPROVAL_FLOW_APPROVER_TYPES || (APPROVAL_FLOW_APPROVER_TYPES = {}));
/**
 * @deprecated
 * ApprovalFlowAddNode component is depricated since version 0.40.0
 */
export class ApprovalFlowAddNodeComponent {
    /** @hidden */
    constructor(dialogRef, viewService, _cdr) {
        this.dialogRef = dialogRef;
        this.viewService = viewService;
        this._cdr = _cdr;
        /** @hidden */
        this._nodeType = APPROVAL_FLOW_NODE_TYPES.SERIAL;
        /** @hidden */
        this._nodeTypes = APPROVAL_FLOW_NODE_TYPES;
        /** @hidden */
        this._nodeTypesArray = Object.keys(APPROVAL_FLOW_NODE_TYPES);
        /** @hidden */
        this._approverType = APPROVAL_FLOW_APPROVER_TYPES.SINGLE_USER;
        /** @hidden */
        this._approverTypes = APPROVAL_FLOW_APPROVER_TYPES;
        /** @hidden */
        this._approverTypesArray = Object.keys(APPROVAL_FLOW_APPROVER_TYPES);
        /** @hidden */
        this._dueDate = FdDate.getNow();
        /** @hidden */
        this._selectMode = false;
        /** @hidden */
        this._approvers = [];
        /** @hidden */
        this._teams = [];
        /** @hidden */
        this._selectedApprovers = [];
        /** @hidden */
        this._selectedTeamArray = [];
        /** @hidden */
        this._selectedTeamMembers = [];
        /** @hidden */
        this._filteredTeamMembers = [];
        /** @hidden */
        this._checkDueDate = false;
        /** @hidden */
        this._displayUserFn = displayUserFn;
        /** @hidden */
        this._displayTeamFn = displayTeamFn;
        /** @hidden */
        this._trackByFn = trackByFn;
        /** @hidden */
        this._addToNextSerial = false;
    }
    /** @hidden */
    get _data() {
        return this.dialogRef.data;
    }
    /** @hidden */
    get _isSingleUserMode() {
        return this._approverType === this._approverTypes.SINGLE_USER;
    }
    /** @hidden */
    get _isMainSubmitButtonDisabled() {
        const approvers = this._isSingleUserMode ? this._selectedApprovers : this._selectedTeamArray;
        return !approvers.length || (this._checkDueDate && !this._dueDate);
    }
    /** @hidden */
    get _headerArrowGlyph() {
        return 'navigation-' + (this._data.rtl ? 'right' : 'left') + '-arrow';
    }
    /** @hidden */
    ngOnInit() {
        // triggering initial loading of data in data sources.
        this._data.teamDataSource.match();
        this._data.userDataSource.match();
        const teams$ = this._data.teamDataSource.open();
        const approvers$ = this._data.userDataSource.open();
        this._dataSourceSub = combineLatest([teams$, approvers$]).subscribe(([teams, approvers]) => {
            this._teams = teams;
            this._approvers = approvers;
            if (this._data.isEdit) {
                this._checkDueDate = !!this._data.checkDueDate;
                if (this._checkDueDate && this._data.node?.dueDate) {
                    this._dueDate = FdDate.getFdDateByDate(new Date(this._data.node.dueDate));
                }
                this._selectedApprovers = [...(this._data.node?.approvers ?? [])];
                const team = this._data.node?.approvalTeamId &&
                    this._teams.find((t) => t.id === this._data.node?.approvalTeamId);
                if (team) {
                    this.viewService.selectTeam(team);
                    this._selectedTeam = team;
                    this._selectedTeamArray = [team];
                    this._approverType = this._data.node?.isEveryoneApprovalNeeded
                        ? this._approverTypes.EVERYONE
                        : this._approverTypes.ANYONE;
                }
            }
            this._cdr.detectChanges();
        });
        this._viewChangeSub = this.viewService.onViewChange.subscribe(() => {
            this._onSearchStringChange('');
            this._cdr.detectChanges();
        });
        switch (this._data.nodeTarget) {
            case 'empty':
            case 'before':
            case 'after':
                this._nodeType = this._nodeTypes.SERIAL;
                break;
            case 'parallel':
                this._nodeType = this._nodeTypes.PARALLEL;
                break;
        }
    }
    /** @hidden */
    ngOnDestroy() {
        this._viewChangeSub.unsubscribe();
        this._dataSourceSub.unsubscribe();
        this._data.userDataSource.close();
        this._data.teamDataSource.close();
    }
    /** @hidden */
    _goToSelectMode() {
        this._selectMode = true;
        this.viewService.setCurrentView(this._isSingleUserMode ? VIEW_MODES.SELECT_USER : VIEW_MODES.SELECT_TEAM);
        this._cdr.detectChanges();
    }
    /** @hidden */
    _exitSelectMode() {
        if (this._selectedApprovers.length && !this._data.node?.approvers.length) {
            this._selectedApprovers = [];
        }
        if (!this._data.isEdit && !this._data.node?.approvalTeamId) {
            this.viewService.resetTeam();
        }
        this._selectMode = false;
        this.viewService.resetView();
        this._cdr.detectChanges();
    }
    /** @hidden */
    _setSelectedApprovers(approvers) {
        this._selectedApprovers = approvers;
        this._confirmSelectedApprovers();
    }
    /** @hidden */
    _confirmSelectedApprovers() {
        if (!this._data.node) {
            return;
        }
        this._data.node.approvers = this._selectedApprovers;
        this._data.node.variousTeams = this._data.node.approvers.some((u) => u.teamId !== this._data.node.approvers[0].teamId);
        this._data.node.description = this._data.node.variousTeams ? '' : this._selectedApprovers[0]?.description;
        delete this._data.node.approvalTeamId;
        delete this._data.node.isEveryoneApprovalNeeded;
        this._exitSelectMode();
    }
    /** @hidden */
    _setSelectedTeam(team) {
        this.viewService.selectTeam(team);
    }
    /** @hidden */
    _confirmSelectedTeam() {
        if (!this.viewService.team) {
            return;
        }
        this._selectedTeam = this.viewService.team;
        this._selectedTeamArray = [this.viewService.team];
        if (this._data.node) {
            this._data.node.variousTeams = false;
            this._data.node.approvalTeamId = this.viewService.team.id;
            this._data.node.description = this.viewService.team.name;
            this._data.node.isEveryoneApprovalNeeded = this._approverType === APPROVAL_FLOW_APPROVER_TYPES.EVERYONE;
        }
        this._exitSelectMode();
    }
    /** @hidden */
    _seeUserDetails(user) {
        this.viewService.setCurrentView(VIEW_MODES.USER_DETAILS);
        this._userToShowDetails = user;
        this._userToShowDetailsData$ = this._data.userDataSource.dataProvider.getOne(new Map([['id', user.id]]));
        this._cdr.detectChanges();
    }
    /** @hidden */
    _exitUserDetailsMode() {
        this.viewService.setCurrentView(this.viewService.team ? VIEW_MODES.VIEW_TEAM_MEMBERS : VIEW_MODES.SELECT_USER);
        this._userToShowDetails = undefined;
        this._userToShowDetailsData$ = undefined;
        this._cdr.detectChanges();
    }
    /** @hidden */
    _viewTeamMembers(team) {
        this.viewService.selectTeam(team);
        this.viewService.setCurrentView(VIEW_MODES.VIEW_TEAM_MEMBERS);
        this._selectedTeamMembers = team.members;
        this._setFilteredTeamMembers(this._selectedTeamMembers); // applying local filtering
        this._cdr.detectChanges();
    }
    /** @hidden */
    _exitTeamMembersMode() {
        this.viewService.setCurrentView(VIEW_MODES.SELECT_TEAM);
        this.viewService.resetTeam();
        this._selectedTeamMembers = [];
        this._cdr.detectChanges();
    }
    /** @hidden */
    _submit() {
        if (this._data.node && !this._isSingleUserMode && this._selectedTeam) {
            this._data.node.approvers = [...this._selectedTeam.members];
        }
        if (this._data.node && this._checkDueDate) {
            this._data.node.dueDate = this._dueDate.toDate();
        }
        this.dialogRef.close({
            node: this._data.node,
            nodeType: this._nodeType,
            toNextSerial: this._addToNextSerial
        });
    }
    /** @hidden */
    _onSearchStringChange(searchString = '') {
        const params = new Map([['query', searchString]]);
        if (this.viewService.isSelectUserMode) {
            this._data.userDataSource.match(params);
        }
        else if (this.viewService.isSelectTeamMode) {
            this._data.teamDataSource.match(params);
        }
        else if (this.viewService.isTeamMembersMode) {
            this._setFilteredTeamMembers(this._selectedTeamMembers.filter((user) => filterByName(user, searchString)));
        }
    }
    /** @hidden */
    _setFilteredTeamMembers(users) {
        this._filteredTeamMembers = [...users];
        this._cdr.detectChanges();
    }
}
ApprovalFlowAddNodeComponent.ɵfac = function ApprovalFlowAddNodeComponent_Factory(t) { return new (t || ApprovalFlowAddNodeComponent)(i0.ɵɵdirectiveInject(i1.DialogRef), i0.ɵɵdirectiveInject(i2.ApprovalFlowAddNodeViewService), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
ApprovalFlowAddNodeComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ApprovalFlowAddNodeComponent, selectors: [["fdp-approval-flow-add-node"]], hostAttrs: [1, "fdp-approval-flow-dialog", "fdp-approval-flow-add-node"], decls: 11, vars: 8, consts: [["fdCompact", ""], ["fdkTemplate", "header"], [4, "ngIf"], ["loadingTpl", ""], [3, "placeholder", "suggestions", "inputChange", 4, "ngIf"], [3, "glyph", "click"], [3, "placeholder", "suggestions", "inputChange"], ["fd-form-item", "", 4, "ngIf"], ["fd-form-item", ""], ["fd-form-label", ""], [3, "value", "valueChange"], [4, "ngFor", "ngForOf"], [3, "showAllButton", "dropdownValues", "ngModel", "displayFn", "ngModelChange", "openChange", "selectedChange", 4, "ngIf"], [3, "showAllButton", "dropdownValues", "ngModel", "displayFn", "ngModelChange", "openChange", 4, "ngIf"], [3, "ngSwitch"], ["fd-option", "", 3, "value", 4, "ngSwitchCase"], ["fd-option", "", 3, "value"], [3, "showAllButton", "dropdownValues", "ngModel", "displayFn", "ngModelChange", "openChange", "selectedChange"], [3, "showAllButton", "dropdownValues", "ngModel", "displayFn", "ngModelChange", "openChange"], [3, "ngModel", "ngModelChange"], ["type", "single", 3, "state", "ngModel", "ngModelChange"], [3, "user", "detailsTemplate", "details", 4, "ngIf"], [3, "isRtl", "teams", "selectedTeamId", "onTeamClick", "onTeamRadioClick", 4, "ngIf", "ngIfElse"], [3, "isRtl", "teams", "selectedTeamId", "onTeamClick", "onTeamRadioClick"], [3, "users", "isSelectable", "selectedUsers", "onUserClick", "onSelectionChange", 4, "ngIf", "ngIfElse"], [3, "users", "isSelectable", "selectedUsers", "onUserClick", "onSelectionChange"], [3, "user", "detailsTemplate", "details"], ["fd-button", "", "fd-dialog-decisive-button", "", "fdType", "emphasized", 3, "label", "disabled", "click"], ["fd-button", "", "fd-initial-focus", "", "fd-dialog-decisive-button", "", "fdType", "transparent", 3, "label", "click"], ["fd-button", "", "fdType", "emphasized", 3, "label", "disabled", "click"], ["fd-button", "", "fd-initial-focus", "", "fdType", "transparent", 3, "label", "click"], [3, "loading", "block"]], template: function ApprovalFlowAddNodeComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "fd-dialog", 0)(1, "fd-dialog-header");
        i0.ɵɵtemplate(2, ApprovalFlowAddNodeComponent_ng_template_2_Template, 7, 6, "ng-template", 1);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "fd-dialog-body");
        i0.ɵɵtemplate(4, ApprovalFlowAddNodeComponent_ng_container_4_Template, 16, 13, "ng-container", 2);
        i0.ɵɵtemplate(5, ApprovalFlowAddNodeComponent_ng_container_5_Template, 4, 3, "ng-container", 2);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(6, "fd-dialog-footer");
        i0.ɵɵtemplate(7, ApprovalFlowAddNodeComponent_ng_container_7_Template, 7, 7, "ng-container", 2);
        i0.ɵɵtemplate(8, ApprovalFlowAddNodeComponent_ng_container_8_Template, 5, 4, "ng-container", 2);
        i0.ɵɵelementEnd()();
        i0.ɵɵtemplate(9, ApprovalFlowAddNodeComponent_ng_template_9_Template, 1, 2, "ng-template", null, 3, i0.ɵɵtemplateRefExtractor);
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵclassProp("show-search", ctx._selectMode && !ctx._userToShowDetails);
        i0.ɵɵadvance(2);
        i0.ɵɵclassProp("fd-dialog__body--auto-height", ctx.viewService.isUserDetailsMode);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", !ctx._selectMode);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx._selectMode);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", !ctx._selectMode);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx._selectMode);
    } }, dependencies: [i3.NgForOf, i3.NgIf, i3.NgSwitch, i3.NgSwitchCase, i4.NgControlStatus, i4.NgModel, i5.ContentDensityDirective, i6.ButtonComponent, i7.IconComponent, i1.DialogComponent, i1.DialogBodyComponent, i1.DialogFooterComponent, i1.DialogHeaderComponent, i1.DialogFooterButtonComponent, i1.DialogDecisiveButtonDirective, i8.TemplateDirective, i8.InitialFocusDirective, i8.DeprecatedInitialFocusDirective, i9.SearchFieldComponent, i10.MultiInputComponent, i11.CheckboxComponent, i12.SelectComponent, i12.OptionComponent, i13.DatePickerComponent, i14.BusyIndicatorComponent, i15.FormItemComponent, i15.FormLabelComponent, i16.ApprovalFlowUserListComponent, i17.ApprovalFlowUserDetailsComponent, i18.ApprovalFlowTeamListComponent, i19.FdTranslatePipe], styles: [".fdp-approval-flow-dialog a{color:#0a6ed1;color:var(--sapLinkColor, #0a6ed1)}.fdp-approval-flow-dialog .fd-list--byline .fd-list__byline-left{width:100%}.fdp-approval-flow-dialog fd-popover{width:100%}.fdp-approval-flow-dialog fd-dialog fd-dialog-header{margin-bottom:1rem}.fdp-approval-flow-dialog fd-dialog fd-dialog-header .fd-bar--header{flex-direction:column;padding-bottom:1rem}.fdp-approval-flow-dialog fd-dialog fd-dialog-header p{font-size:1rem;margin:.65rem 0}.fdp-approval-flow-dialog fd-dialog fd-dialog-header p fd-icon{font-size:.875rem;color:#0854a0;color:var(--sapButton_IconColor, #0854a0);position:relative;cursor:pointer;margin-right:.75rem}.fdp-approval-flow-dialog fd-dialog fd-dialog-header.show-search{margin-bottom:0}.fdp-approval-flow-dialog fd-dialog fd-dialog-header.show-search .fd-bar--header{min-height:2.5rem;height:auto}.fdp-approval-flow-dialog fd-dialog fd-avatar{margin-right:.652rem}.fdp-approval-flow-dialog fd-dialog fd-dialog-body{padding:1rem}.fdp-approval-flow-dialog fd-dialog fd-dialog-body fdp-list{display:block;margin-left:-1rem;margin-right:-1rem}.fdp-approval-flow-dialog fd-dialog fdp-standard-list-item .fd-checkbox__label{position:relative;left:.3125rem}.fdp-approval-flow-dialog fd-dialog fdp-standard-list-item fd-avatar{margin-left:.1875rem}.fdp-approval-flow-dialog .fd-form-item{margin-bottom:1rem}[dir=rtl] .fdp-approval-flow-dialog fd-dialog-header p fd-icon,.fdp-approval-flow-dialog[dir=rtl] fd-dialog-header p fd-icon{margin-right:0;margin-left:.75rem}[dir=rtl] .fdp-approval-flow-dialog fd-avatar,.fdp-approval-flow-dialog[dir=rtl] fd-avatar{margin-right:0;margin-left:.652rem}[dir=rtl] .fdp-approval-flow-dialog fdp-standard-list-item .fd-checkbox__label,.fdp-approval-flow-dialog[dir=rtl] fdp-standard-list-item .fd-checkbox__label{left:auto;right:.3125rem}\n", ".fdp-approval-flow-add-node .fd-dialog__body{width:20rem;height:27rem}.fdp-approval-flow-add-node .fd-dialog__body--auto-height{height:auto}\n"], encapsulation: 2, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ApprovalFlowAddNodeComponent, [{
        type: Component,
        args: [{ selector: 'fdp-approval-flow-add-node', encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, host: {
                    class: 'fdp-approval-flow-dialog fdp-approval-flow-add-node'
                }, template: "<fd-dialog fdCompact>\n    <fd-dialog-header [class.show-search]=\"_selectMode && !_userToShowDetails\">\n        <ng-template fdkTemplate=\"header\">\n            <p>\n                <ng-container *ngIf=\"!_selectMode && !_data.isEdit\">\n                    {{ 'platformApprovalFlow.addNodeDialogHeaderAddApprovers' | fdTranslate }}\n                </ng-container>\n\n                <ng-container *ngIf=\"!_selectMode && _data.isEdit\">\n                    {{ 'platformApprovalFlow.addNodeDialogHeaderEditApprover' | fdTranslate }}\n                </ng-container>\n\n                <ng-container *ngIf=\"viewService.isSelectUserMode || viewService.isSelectTeamMode\">\n                    {{ 'platformApprovalFlow.addNodeDialogHeaderAddApproverTeam' | fdTranslate }}\n                </ng-container>\n\n                <ng-container *ngIf=\"viewService.isTeamMembersMode\">\n                    <fd-icon [glyph]=\"_headerArrowGlyph\" (click)=\"_exitTeamMembersMode()\"></fd-icon>\n                    {{ viewService.team?.name ?? '' }} ({{ viewService.team?.members?.length ?? 0 }})\n                </ng-container>\n\n                <ng-container *ngIf=\"viewService.isUserDetailsMode\">\n                    <fd-icon [glyph]=\"_headerArrowGlyph\" (click)=\"_exitUserDetailsMode()\"></fd-icon>\n                    {{ 'platformApprovalFlow.addNodeDialogHeaderDetail' | fdTranslate }}\n                </ng-container>\n            </p>\n\n            <fdp-search-field\n                *ngIf=\"_selectMode && !_userToShowDetails\"\n                [placeholder]=\"'platformApprovalFlow.addNodeSearchPlaceholder' | fdTranslate\"\n                [suggestions]=\"[]\"\n                (inputChange)=\"_onSearchStringChange($event.text)\"\n            ></fdp-search-field>\n        </ng-template>\n    </fd-dialog-header>\n\n    <fd-dialog-body [class.fd-dialog__body--auto-height]=\"viewService.isUserDetailsMode\">\n        <ng-container *ngIf=\"!_selectMode\">\n            <div fd-form-item *ngIf=\"_data.showNodeTypeSelect\">\n                <label fd-form-label>\n                    {{ 'platformApprovalFlow.addNodeDialogNodeType' | fdTranslate }}\n                </label>\n\n                <fd-select [(value)]=\"_nodeType\">\n                    <ng-container *ngFor=\"let option of _nodeTypesArray\">\n                        <ng-container [ngSwitch]=\"option\">\n                            <li fd-option *ngSwitchCase=\"_nodeTypes.SERIAL\" [value]=\"option\">\n                                {{ 'platformApprovalFlow.addNodeDialogNodeTypeSerial' | fdTranslate }}\n                            </li>\n\n                            <li fd-option *ngSwitchCase=\"_nodeTypes.PARALLEL\" [value]=\"option\">\n                                {{ 'platformApprovalFlow.addNodeDialogNodeTypeParallel' | fdTranslate }}\n                            </li>\n                        </ng-container>\n                    </ng-container>\n                </fd-select>\n            </div>\n\n            <div fd-form-item>\n                <label fd-form-label>\n                    {{ 'platformApprovalFlow.addNodeDialogApproverType' | fdTranslate }}\n                </label>\n\n                <fd-select [(value)]=\"_approverType\">\n                    <ng-container *ngFor=\"let option of _approverTypesArray\">\n                        <ng-container [ngSwitch]=\"option\">\n                            <li fd-option *ngSwitchCase=\"_approverTypes.SINGLE_USER\" [value]=\"option\">\n                                {{ 'platformApprovalFlow.addNodeDialogApproverTypeUser' | fdTranslate }}\n                            </li>\n\n                            <li fd-option *ngSwitchCase=\"_approverTypes.ANYONE\" [value]=\"option\">\n                                {{ 'platformApprovalFlow.addNodeDialogApproverTypeTeamAnyone' | fdTranslate }}\n                            </li>\n\n                            <li fd-option *ngSwitchCase=\"_approverTypes.EVERYONE\" [value]=\"option\">\n                                {{ 'platformApprovalFlow.addNodeDialogApproverTypeTeamEveryone' | fdTranslate }}\n                            </li>\n                        </ng-container>\n                    </ng-container>\n                </fd-select>\n            </div>\n\n            <div fd-form-item>\n                <label fd-form-label>{{ 'platformApprovalFlow.addNodeDialogUserOrTeam' | fdTranslate }}</label>\n\n                <fd-multi-input\n                    *ngIf=\"_isSingleUserMode\"\n                    [showAllButton]=\"false\"\n                    [dropdownValues]=\"_selectedApprovers\"\n                    [(ngModel)]=\"_selectedApprovers\"\n                    [displayFn]=\"_displayUserFn\"\n                    (openChange)=\"_goToSelectMode()\"\n                    (selectedChange)=\"_setSelectedApprovers($event)\"\n                ></fd-multi-input>\n\n                <fd-multi-input\n                    *ngIf=\"!_isSingleUserMode\"\n                    [showAllButton]=\"false\"\n                    [dropdownValues]=\"_selectedTeamArray\"\n                    [(ngModel)]=\"_selectedTeamArray\"\n                    [displayFn]=\"_displayTeamFn\"\n                    (openChange)=\"_goToSelectMode()\"\n                ></fd-multi-input>\n            </div>\n\n            <div *ngIf=\"_nodeType === _nodeTypes.PARALLEL\" fd-form-item>\n                <fd-checkbox [(ngModel)]=\"_addToNextSerial\">\n                    {{ 'platformApprovalFlow.addNodeDialogAddToNext' | fdTranslate }}\n                </fd-checkbox>\n            </div>\n\n            <div *ngIf=\"_checkDueDate\" fd-form-item>\n                <label fd-form-label>{{ 'platformApprovalFlow.addNodeDialogDueDate' | fdTranslate }}</label>\n\n                <fd-date-picker type=\"single\" [state]=\"!this._dueDate ? 'error' : null\" [(ngModel)]=\"_dueDate\">\n                </fd-date-picker>\n            </div>\n        </ng-container>\n\n        <ng-container *ngIf=\"_selectMode\">\n            <ng-container *ngIf=\"viewService.isSelectTeamMode\">\n                <fdp-approval-flow-team-list\n                    *ngIf=\"!_data.teamDataSource.isDataLoading; else loadingTpl\"\n                    [isRtl]=\"_data.rtl\"\n                    [teams]=\"_teams\"\n                    [selectedTeamId]=\"_selectedTeam?.id\"\n                    (onTeamClick)=\"_viewTeamMembers($event)\"\n                    (onTeamRadioClick)=\"_setSelectedTeam($event)\"\n                ></fdp-approval-flow-team-list>\n            </ng-container>\n\n            <ng-container *ngIf=\"viewService.isSelectUserMode || viewService.isTeamMembersMode\">\n                <fdp-approval-flow-user-list\n                    *ngIf=\"viewService.isSelectUserMode || !_data.userDataSource.isDataLoading; else loadingTpl\"\n                    [users]=\"viewService.isSelectUserMode ? _approvers : _filteredTeamMembers\"\n                    [isSelectable]=\"viewService.isSelectUserMode\"\n                    [selectedUsers]=\"_selectedApprovers\"\n                    (onUserClick)=\"_seeUserDetails($event)\"\n                    (onSelectionChange)=\"_selectedApprovers = $event\"\n                ></fdp-approval-flow-user-list>\n            </ng-container>\n\n            <fdp-approval-flow-user-details\n                *ngIf=\"viewService.isUserDetailsMode && _userToShowDetails\"\n                [user]=\"_userToShowDetails\"\n                [detailsTemplate]=\"_data.userDetailsTemplate\"\n                [details]=\"_userToShowDetailsData$\"\n            ></fdp-approval-flow-user-details>\n        </ng-container>\n    </fd-dialog-body>\n\n    <fd-dialog-footer>\n        <ng-container *ngIf=\"!_selectMode\">\n            <fd-dialog-footer-button>\n                <button\n                    fd-button\n                    fd-dialog-decisive-button\n                    fdType=\"emphasized\"\n                    [label]=\"'platformApprovalFlow.addNodeAddActionBtnLabel' | fdTranslate\"\n                    [disabled]=\"_isMainSubmitButtonDisabled\"\n                    (click)=\"_submit()\"\n                ></button>\n            </fd-dialog-footer-button>\n\n            <fd-dialog-footer-button>\n                <button\n                    fd-button\n                    fd-initial-focus\n                    fd-dialog-decisive-button\n                    fdType=\"transparent\"\n                    [label]=\"'platformApprovalFlow.addNodeCancelActionBtnLabel' | fdTranslate\"\n                    (click)=\"dialogRef.close()\"\n                ></button>\n            </fd-dialog-footer-button>\n        </ng-container>\n\n        <ng-container *ngIf=\"_selectMode\">\n            <ng-container *ngIf=\"viewService.isSelectUserMode\">\n                <fd-dialog-footer-button>\n                    <button\n                        fd-button\n                        fdType=\"emphasized\"\n                        [label]=\"'platformApprovalFlow.addNodeSelectApproverActionBtnLabel' | fdTranslate\"\n                        [disabled]=\"!_selectedApprovers.length\"\n                        (click)=\"_confirmSelectedApprovers()\"\n                    ></button>\n                </fd-dialog-footer-button>\n\n                <fd-dialog-footer-button>\n                    <button\n                        fd-button\n                        fd-initial-focus\n                        fdType=\"transparent\"\n                        [label]=\"'platformApprovalFlow.addNodeCancelApproverSelectionActionBtnLabel' | fdTranslate\"\n                        (click)=\"_exitSelectMode()\"\n                    ></button>\n                </fd-dialog-footer-button>\n            </ng-container>\n\n            <ng-container *ngIf=\"viewService.isSelectTeamMode\">\n                <fd-dialog-footer-button>\n                    <button\n                        fd-button\n                        fdType=\"emphasized\"\n                        [label]=\"'platformApprovalFlow.addNodeSelectApproverActionBtnLabel' | fdTranslate\"\n                        [disabled]=\"!_selectedTeam && !viewService.team\"\n                        (click)=\"_confirmSelectedTeam()\"\n                    ></button>\n                </fd-dialog-footer-button>\n\n                <fd-dialog-footer-button>\n                    <button\n                        fd-button\n                        fd-initial-focus\n                        fdType=\"transparent\"\n                        [label]=\"'platformApprovalFlow.addNodeCancelApproverSelectionActionBtnLabel' | fdTranslate\"\n                        (click)=\"_exitSelectMode()\"\n                    ></button>\n                </fd-dialog-footer-button>\n            </ng-container>\n\n            <ng-container *ngIf=\"viewService.isTeamMembersMode\">\n                <fd-dialog-footer-button>\n                    <button\n                        fd-button\n                        fd-initial-focus\n                        fdType=\"transparent\"\n                        [label]=\"'platformApprovalFlow.addNodeApproverOrTeamDetailsCloseActionBtnLabel' | fdTranslate\"\n                        (click)=\"_exitTeamMembersMode()\"\n                    ></button>\n                </fd-dialog-footer-button>\n            </ng-container>\n\n            <ng-container *ngIf=\"viewService.isUserDetailsMode\">\n                <fd-dialog-footer-button>\n                    <button\n                        fd-button\n                        fd-initial-focus\n                        fdType=\"transparent\"\n                        [label]=\"'platformApprovalFlow.addNodeApproverOrTeamDetailsCloseActionBtnLabel' | fdTranslate\"\n                        (click)=\"_exitUserDetailsMode()\"\n                    ></button>\n                </fd-dialog-footer-button>\n            </ng-container>\n        </ng-container>\n    </fd-dialog-footer>\n</fd-dialog>\n\n<ng-template #loadingTpl>\n    <fd-busy-indicator [loading]=\"true\" [block]=\"true\"> </fd-busy-indicator>\n</ng-template>\n", styles: [".fdp-approval-flow-dialog a{color:#0a6ed1;color:var(--sapLinkColor, #0a6ed1)}.fdp-approval-flow-dialog .fd-list--byline .fd-list__byline-left{width:100%}.fdp-approval-flow-dialog fd-popover{width:100%}.fdp-approval-flow-dialog fd-dialog fd-dialog-header{margin-bottom:1rem}.fdp-approval-flow-dialog fd-dialog fd-dialog-header .fd-bar--header{flex-direction:column;padding-bottom:1rem}.fdp-approval-flow-dialog fd-dialog fd-dialog-header p{font-size:1rem;margin:.65rem 0}.fdp-approval-flow-dialog fd-dialog fd-dialog-header p fd-icon{font-size:.875rem;color:#0854a0;color:var(--sapButton_IconColor, #0854a0);position:relative;cursor:pointer;margin-right:.75rem}.fdp-approval-flow-dialog fd-dialog fd-dialog-header.show-search{margin-bottom:0}.fdp-approval-flow-dialog fd-dialog fd-dialog-header.show-search .fd-bar--header{min-height:2.5rem;height:auto}.fdp-approval-flow-dialog fd-dialog fd-avatar{margin-right:.652rem}.fdp-approval-flow-dialog fd-dialog fd-dialog-body{padding:1rem}.fdp-approval-flow-dialog fd-dialog fd-dialog-body fdp-list{display:block;margin-left:-1rem;margin-right:-1rem}.fdp-approval-flow-dialog fd-dialog fdp-standard-list-item .fd-checkbox__label{position:relative;left:.3125rem}.fdp-approval-flow-dialog fd-dialog fdp-standard-list-item fd-avatar{margin-left:.1875rem}.fdp-approval-flow-dialog .fd-form-item{margin-bottom:1rem}[dir=rtl] .fdp-approval-flow-dialog fd-dialog-header p fd-icon,.fdp-approval-flow-dialog[dir=rtl] fd-dialog-header p fd-icon{margin-right:0;margin-left:.75rem}[dir=rtl] .fdp-approval-flow-dialog fd-avatar,.fdp-approval-flow-dialog[dir=rtl] fd-avatar{margin-right:0;margin-left:.652rem}[dir=rtl] .fdp-approval-flow-dialog fdp-standard-list-item .fd-checkbox__label,.fdp-approval-flow-dialog[dir=rtl] fdp-standard-list-item .fd-checkbox__label{left:auto;right:.3125rem}\n", ".fdp-approval-flow-add-node .fd-dialog__body{width:20rem;height:27rem}.fdp-approval-flow-add-node .fd-dialog__body--auto-height{height:auto}\n"] }]
    }], function () { return [{ type: i1.DialogRef }, { type: i2.ApprovalFlowAddNodeViewService }, { type: i0.ChangeDetectorRef }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwcm92YWwtZmxvdy1hZGQtbm9kZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9saWJzL3BsYXRmb3JtL3NyYy9saWIvYXBwcm92YWwtZmxvdy9hcHByb3ZhbC1mbG93LWFkZC1ub2RlL2FwcHJvdmFsLWZsb3ctYWRkLW5vZGUuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vbGlicy9wbGF0Zm9ybS9zcmMvbGliL2FwcHJvdmFsLWZsb3cvYXBwcm92YWwtZmxvdy1hZGQtbm9kZS9hcHByb3ZhbC1mbG93LWFkZC1ub2RlLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDSCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFJVCxpQkFBaUIsRUFDcEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGFBQWEsRUFBNEIsTUFBTSxNQUFNLENBQUM7QUFFL0QsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQ3hELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUV6RCxPQUFPLEVBQUUsOEJBQThCLEVBQUUsVUFBVSxFQUFFLE1BQU0saURBQWlELENBQUM7QUFDN0csT0FBTyxFQUFFLGFBQWEsRUFBRSxhQUFhLEVBQUUsWUFBWSxFQUFFLFNBQVMsRUFBRSxNQUFNLFlBQVksQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQ1huRSw2QkFBb0Q7SUFDaEQsWUFDSjs7SUFBQSwwQkFBZTs7SUFEWCxlQUNKO0lBREksNkdBQ0o7OztJQUVBLDZCQUFtRDtJQUMvQyxZQUNKOztJQUFBLDBCQUFlOztJQURYLGVBQ0o7SUFESSw2R0FDSjs7O0lBRUEsNkJBQW1GO0lBQy9FLFlBQ0o7O0lBQUEsMEJBQWU7O0lBRFgsZUFDSjtJQURJLGdIQUNKOzs7O0lBRUEsNkJBQW9EO0lBQ2hELGtDQUFzRTtJ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QixpQkFBbUIsRUFBQTtRQUd2Qiw4SEFFYzs7UUF6UFEsZUFBd0Q7UUFBeEQseUVBQXdEO1FBbUMxRCxlQUFvRTtRQUFwRSxpRkFBb0U7UUFDakUsZUFBa0I7UUFBbEIsdUNBQWtCO1FBa0ZsQixlQUFpQjtRQUFqQixzQ0FBaUI7UUFpQ2pCLGVBQWtCO1FBQWxCLHVDQUFrQjtRQXdCbEIsZUFBaUI7UUFBakIsc0NBQWlCOzt1RkQ3RzNCLDRCQUE0QjtjQVZ4QyxTQUFTOzJCQUNJLDRCQUE0QixpQkFHdkIsaUJBQWlCLENBQUMsSUFBSSxtQkFDcEIsdUJBQXVCLENBQUMsTUFBTSxRQUN6QztvQkFDRixLQUFLLEVBQUUscURBQXFEO2lCQUMvRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gICAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gICAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgQ29tcG9uZW50LFxuICAgIE9uRGVzdHJveSxcbiAgICBPbkluaXQsXG4gICAgVGVtcGxhdGVSZWYsXG4gICAgVmlld0VuY2Fwc3VsYXRpb25cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBjb21iaW5lTGF0ZXN0LCBPYnNlcnZhYmxlLCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgRmREYXRlIH0gZnJvbSAnQGZ1bmRhbWVudGFsLW5neC9jb3JlL2RhdGV0aW1lJztcbmltcG9ydCB7IERpYWxvZ1JlZiB9IGZyb20gJ0BmdW5kYW1lbnRhbC1uZ3gvY29yZS9kaWFsb2cnO1xuXG5pbXBvcnQgeyBBcHByb3ZhbEZsb3dBZGROb2RlVmlld1NlcnZpY2UsIFZJRVdfTU9ERVMgfSBmcm9tICcuLi9zZXJ2aWNlcy9hcHByb3ZhbC1mbG93LWFkZC1ub2RlLXZpZXcuc2VydmljZSc7XG5pbXBvcnQgeyBkaXNwbGF5VGVhbUZuLCBkaXNwbGF5VXNlckZuLCBmaWx0ZXJCeU5hbWUsIHRyYWNrQnlGbiB9IGZyb20gJy4uL2hlbHBlcnMnO1xuaW1wb3J0IHsgQXBwcm92YWxOb2RlLCBBcHByb3ZhbFRlYW0sIEFwcHJvdmFsVXNlciB9IGZyb20gJy4uL2ludGVyZmFjZXMnO1xuaW1wb3J0IHsgQXBwcm92YWxGbG93VGVhbURhdGFTb3VyY2UsIEFwcHJvdmFsRmxvd1VzZXJEYXRhU291cmNlIH0gZnJvbSAnQGZ1bmRhbWVudGFsLW5neC9wbGF0Zm9ybS9zaGFyZWQnO1xuaW1wb3J0IHsgTnVsbGFibGUgfSBmcm9tICdAZnVuZGFtZW50YWwtbmd4L2Nkay91dGlscyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQWRkTm9kZURpYWxvZ1JlZkRhdGEge1xuICAgIGlzRWRpdD86IGJvb2xlYW47XG4gICAgc2hvd05vZGVUeXBlU2VsZWN0PzogYm9vbGVhbjtcbiAgICBub2RlPzogQXBwcm92YWxOb2RlO1xuICAgIG5vZGVUYXJnZXQ/OiBBcHByb3ZhbEZsb3dOb2RlVGFyZ2V0O1xuICAgIHRlYW1EYXRhU291cmNlOiBBcHByb3ZhbEZsb3dUZWFtRGF0YVNvdXJjZTxBcHByb3ZhbFRlYW0+O1xuICAgIHVzZXJEYXRhU291cmNlOiBBcHByb3ZhbEZsb3dVc2VyRGF0YVNvdXJjZTxBcHByb3ZhbFVzZXI+O1xuICAgIHVzZXJEZXRhaWxzVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG4gICAgY2hlY2tEdWVEYXRlPzogYm9vbGVhbjtcbiAgICBydGw6IGJvb2xlYW47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQWRkTm9kZURpYWxvZ0Zvcm1EYXRhIHtcbiAgICBub2RlOiBBcHByb3ZhbE5vZGU7XG4gICAgbm9kZVR5cGU6IEFQUFJPVkFMX0ZMT1dfTk9ERV9UWVBFUztcbiAgICB0b05leHRTZXJpYWw6IGJvb2xlYW47XG59XG5cbmV4cG9ydCB0eXBlIEFwcHJvdmFsRmxvd05ld05vZGVQbGFjZW1lbnQgPSAnYmVmb3JlJyB8ICdhZnRlcicgfCAnYmVmb3JlLWFsbCcgfCAnYWZ0ZXItYWxsJztcblxuZXhwb3J0IHR5cGUgQXBwcm92YWxGbG93Tm9kZVRhcmdldCA9IEFwcHJvdmFsRmxvd05ld05vZGVQbGFjZW1lbnQgfCAnZW1wdHknIHwgJ3BhcmFsbGVsJztcblxuZXhwb3J0IGVudW0gQVBQUk9WQUxfRkxPV19OT0RFX1RZUEVTIHtcbiAgICBTRVJJQUwgPSAnU0VSSUFMJyxcbiAgICBQQVJBTExFTCA9ICdQQVJBTExFTCdcbn1cblxuZXhwb3J0IGVudW0gQVBQUk9WQUxfRkxPV19BUFBST1ZFUl9UWVBFUyB7XG4gICAgU0lOR0xFX1VTRVIgPSAnU0lOR0xFX1VTRVInLFxuICAgIEFOWU9ORSA9ICdBTllPTkUnLFxuICAgIEVWRVJZT05FID0gJ0VWRVJZT05FJ1xufVxuXG4vKipcbiAqIEBkZXByZWNhdGVkXG4gKiBBcHByb3ZhbEZsb3dBZGROb2RlIGNvbXBvbmVudCBpcyBkZXByaWNhdGVkIHNpbmNlIHZlcnNpb24gMC40MC4wXG4gKi9cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnZmRwLWFwcHJvdmFsLWZsb3ctYWRkLW5vZGUnLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9hcHByb3ZhbC1mbG93LWFkZC1ub2RlLmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnLi4vc3R5bGVzL2FwcHJvdmFsLWZsb3ctZGlhbG9nLnNjc3MnLCAnLi9hcHByb3ZhbC1mbG93LWFkZC1ub2RlLmNvbXBvbmVudC5zY3NzJ10sXG4gICAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgICBob3N0OiB7XG4gICAgICAgIGNsYXNzOiAnZmRwLWFwcHJvdmFsLWZsb3ctZGlhbG9nIGZkcC1hcHByb3ZhbC1mbG93LWFkZC1ub2RlJ1xuICAgIH1cbn0pXG5leHBvcnQgY2xhc3MgQXBwcm92YWxGbG93QWRkTm9kZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgICAvKiogQGhpZGRlbiAqL1xuICAgIF9ub2RlVHlwZSA9IEFQUFJPVkFMX0ZMT1dfTk9ERV9UWVBFUy5TRVJJQUw7XG5cbiAgICAvKiogQGhpZGRlbiAqL1xuICAgIF9ub2RlVHlwZXMgPSBBUFBST1ZBTF9GTE9XX05PREVfVFlQRVM7XG5cbiAgICAvKiogQGhpZGRlbiAqL1xuICAgIF9ub2RlVHlwZXNBcnJheSA9IE9iamVjdC5rZXlzKEFQUFJPVkFMX0ZMT1dfTk9ERV9UWVBFUyk7XG5cbiAgICAvKiogQGhpZGRlbiAqL1xuICAgIF9hcHByb3ZlclR5cGUgPSBBUFBST1ZBTF9GTE9XX0FQUFJPVkVSX1RZUEVTLlNJTkdMRV9VU0VSO1xuXG4gICAgLyoqIEBoaWRkZW4gKi9cbiAgICBfYXBwcm92ZXJUeXBlcyA9IEFQUFJPVkFMX0ZMT1dfQVBQUk9WRVJfVFlQRVM7XG5cbiAgICAvKiogQGhpZGRlbiAqL1xuICAgIF9hcHByb3ZlclR5cGVzQXJyYXkgPSBPYmplY3Qua2V5cyhBUFBST1ZBTF9GTE9XX0FQUFJPVkVSX1RZUEVTKTtcblxuICAgIC8qKiBAaGlkZGVuICovXG4gICAgX2R1ZURhdGUgPSBGZERhdGUuZ2V0Tm93KCk7XG5cbiAgICAvKiogQGhpZGRlbiAqL1xuICAgIF9zZWxlY3RNb2RlID0gZmFsc2U7XG5cbiAgICAvKiogQGhpZGRlbiAqL1xuICAgIF9hcHByb3ZlcnM6IEFwcHJvdmFsVXNlcltdID0gW107XG5cbiAgICAvKiogQGhpZGRlbiAqL1xuICAgIF90ZWFtczogQXBwcm92YWxUZWFtW10gPSBbXTtcblxuICAgIC8qKiBAaGlkZGVuICovXG4gICAgX3NlbGVjdGVkQXBwcm92ZXJzOiBBcHByb3ZhbFVzZXJbXSA9IFtdO1xuXG4gICAgLyoqIEBoaWRkZW4gKi9cbiAgICBfc2VsZWN0ZWRUZWFtOiBOdWxsYWJsZTxBcHByb3ZhbFRlYW0+O1xuXG4gICAgLyoqIEBoaWRkZW4gKi9cbiAgICBfc2VsZWN0ZWRUZWFtQXJyYXk6IEFwcHJvdmFsVGVhbVtdID0gW107XG5cbiAgICAvKiogQGhpZGRlbiAqL1xuICAgIF9zZWxlY3RlZFRlYW1NZW1iZXJzOiBBcHByb3ZhbFVzZXJbXSA9IFtdO1xuXG4gICAgLyoqIEBoaWRkZW4gKi9cbiAgICBfZmlsdGVyZWRUZWFtTWVtYmVyczogQXBwcm92YWxVc2VyW10gPSBbXTtcblxuICAgIC8qKiBAaGlkZGVuICovXG4gICAgX3VzZXJUb1Nob3dEZXRhaWxzPzogQXBwcm92YWxVc2VyO1xuXG4gICAgLyoqIEBoaWRkZW4gKi9cbiAgICBfdXNlclRvU2hvd0RldGFpbHNEYXRhJD86IE9ic2VydmFibGU8YW55PjtcblxuICAgIC8qKiBAaGlkZGVuICovXG4gICAgX2NoZWNrRHVlRGF0ZSA9IGZhbHNlO1xuXG4gICAgLyoqIEBoaWRkZW4gKi9cbiAgICBfZGlzcGxheVVzZXJGbiA9IGRpc3BsYXlVc2VyRm47XG5cbiAgICAvKiogQGhpZGRlbiAqL1xuICAgIF9kaXNwbGF5VGVhbUZuID0gZGlzcGxheVRlYW1GbjtcblxuICAgIC8qKiBAaGlkZGVuICovXG4gICAgX3RyYWNrQnlGbiA9IHRyYWNrQnlGbjtcblxuICAgIC8qKiBAaGlkZGVuICovXG4gICAgX2FkZFRvTmV4dFNlcmlhbCA9IGZhbHNlO1xuXG4gICAgLyoqIEBoaWRkZW4gKi9cbiAgICBwcml2YXRlIF92aWV3Q2hhbmdlU3ViOiBTdWJzY3JpcHRpb247XG5cbiAgICAvKiogQGhpZGRlbiAqL1xuICAgIHByaXZhdGUgX2RhdGFTb3VyY2VTdWI6IFN1YnNjcmlwdGlvbjtcblxuICAgIC8qKiBAaGlkZGVuICovXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHB1YmxpYyBkaWFsb2dSZWY6IERpYWxvZ1JlZjxBZGROb2RlRGlhbG9nUmVmRGF0YT4sXG4gICAgICAgIHB1YmxpYyB2aWV3U2VydmljZTogQXBwcm92YWxGbG93QWRkTm9kZVZpZXdTZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIF9jZHI6IENoYW5nZURldGVjdG9yUmVmXG4gICAgKSB7fVxuXG4gICAgLyoqIEBoaWRkZW4gKi9cbiAgICBnZXQgX2RhdGEoKTogQWRkTm9kZURpYWxvZ1JlZkRhdGEge1xuICAgICAgICByZXR1cm4gdGhpcy5kaWFsb2dSZWYuZGF0YTtcbiAgICB9XG5cbiAgICAvKiogQGhpZGRlbiAqL1xuICAgIGdldCBfaXNTaW5nbGVVc2VyTW9kZSgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FwcHJvdmVyVHlwZSA9PT0gdGhpcy5fYXBwcm92ZXJUeXBlcy5TSU5HTEVfVVNFUjtcbiAgICB9XG5cbiAgICAvKiogQGhpZGRlbiAqL1xuICAgIGdldCBfaXNNYWluU3VibWl0QnV0dG9uRGlzYWJsZWQoKTogYm9vbGVhbiB7XG4gICAgICAgIGNvbnN0IGFwcHJvdmVycyA9IHRoaXMuX2lzU2luZ2xlVXNlck1vZGUgPyB0aGlzLl9zZWxlY3RlZEFwcHJvdmVycyA6IHRoaXMuX3NlbGVjdGVkVGVhbUFycmF5O1xuXG4gICAgICAgIHJldHVybiAhYXBwcm92ZXJzLmxlbmd0aCB8fCAodGhpcy5fY2hlY2tEdWVEYXRlICYmICF0aGlzLl9kdWVEYXRlKTtcbiAgICB9XG5cbiAgICAvKiogQGhpZGRlbiAqL1xuICAgIGdldCBfaGVhZGVyQXJyb3dHbHlwaCgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gJ25hdmlnYXRpb24tJyArICh0aGlzLl9kYXRhLnJ0bCA/ICdyaWdodCcgOiAnbGVmdCcpICsgJy1hcnJvdyc7XG4gICAgfVxuXG4gICAgLyoqIEBoaWRkZW4gKi9cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgICAgLy8gdHJpZ2dlcmluZyBpbml0aWFsIGxvYWRpbmcgb2YgZGF0YSBpbiBkYXRhIHNvdXJjZXMuXG4gICAgICAgIHRoaXMuX2RhdGEudGVhbURhdGFTb3VyY2UubWF0Y2goKTtcbiAgICAgICAgdGhpcy5fZGF0YS51c2VyRGF0YVNvdXJjZS5tYXRjaCgpO1xuICAgICAgICBjb25zdCB0ZWFtcyQgPSB0aGlzLl9kYXRhLnRlYW1EYXRhU291cmNlLm9wZW4oKTtcbiAgICAgICAgY29uc3QgYXBwcm92ZXJzJCA9IHRoaXMuX2RhdGEudXNlckRhdGFTb3VyY2Uub3BlbigpO1xuICAgICAgICB0aGlzLl9kYXRhU291cmNlU3ViID0gY29tYmluZUxhdGVzdChbdGVhbXMkLCBhcHByb3ZlcnMkXSkuc3Vic2NyaWJlKChbdGVhbXMsIGFwcHJvdmVyc10pID0+IHtcbiAgICAgICAgICAgIHRoaXMuX3RlYW1zID0gdGVhbXM7XG5cbiAgICAgICAgICAgIHRoaXMuX2FwcHJvdmVycyA9IGFwcHJvdmVycztcblxuICAgICAgICAgICAgaWYgKHRoaXMuX2RhdGEuaXNFZGl0KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fY2hlY2tEdWVEYXRlID0gISF0aGlzLl9kYXRhLmNoZWNrRHVlRGF0ZTtcblxuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9jaGVja0R1ZURhdGUgJiYgdGhpcy5fZGF0YS5ub2RlPy5kdWVEYXRlKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2R1ZURhdGUgPSBGZERhdGUuZ2V0RmREYXRlQnlEYXRlKG5ldyBEYXRlKHRoaXMuX2RhdGEubm9kZS5kdWVEYXRlKSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdGhpcy5fc2VsZWN0ZWRBcHByb3ZlcnMgPSBbLi4uKHRoaXMuX2RhdGEubm9kZT8uYXBwcm92ZXJzID8/IFtdKV07XG5cbiAgICAgICAgICAgICAgICBjb25zdCB0ZWFtID1cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fZGF0YS5ub2RlPy5hcHByb3ZhbFRlYW1JZCAmJlxuICAgICAgICAgICAgICAgICAgICB0aGlzLl90ZWFtcy5maW5kKCh0KSA9PiB0LmlkID09PSB0aGlzLl9kYXRhLm5vZGU/LmFwcHJvdmFsVGVhbUlkKTtcbiAgICAgICAgICAgICAgICBpZiAodGVhbSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnZpZXdTZXJ2aWNlLnNlbGVjdFRlYW0odGVhbSk7XG5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fc2VsZWN0ZWRUZWFtID0gdGVhbTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fc2VsZWN0ZWRUZWFtQXJyYXkgPSBbdGVhbV07XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2FwcHJvdmVyVHlwZSA9IHRoaXMuX2RhdGEubm9kZT8uaXNFdmVyeW9uZUFwcHJvdmFsTmVlZGVkXG4gICAgICAgICAgICAgICAgICAgICAgICA/IHRoaXMuX2FwcHJvdmVyVHlwZXMuRVZFUllPTkVcbiAgICAgICAgICAgICAgICAgICAgICAgIDogdGhpcy5fYXBwcm92ZXJUeXBlcy5BTllPTkU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5fY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5fdmlld0NoYW5nZVN1YiA9IHRoaXMudmlld1NlcnZpY2Uub25WaWV3Q2hhbmdlLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLl9vblNlYXJjaFN0cmluZ0NoYW5nZSgnJyk7XG4gICAgICAgICAgICB0aGlzLl9jZHIuZGV0ZWN0Q2hhbmdlcygpO1xuICAgICAgICB9KTtcblxuICAgICAgICBzd2l0Y2ggKHRoaXMuX2RhdGEubm9kZVRhcmdldCkge1xuICAgICAgICAgICAgY2FzZSAnZW1wdHknOlxuICAgICAgICAgICAgY2FzZSAnYmVmb3JlJzpcbiAgICAgICAgICAgIGNhc2UgJ2FmdGVyJzpcbiAgICAgICAgICAgICAgICB0aGlzLl9ub2RlVHlwZSA9IHRoaXMuX25vZGVUeXBlcy5TRVJJQUw7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdwYXJhbGxlbCc6XG4gICAgICAgICAgICAgICAgdGhpcy5fbm9kZVR5cGUgPSB0aGlzLl9ub2RlVHlwZXMuUEFSQUxMRUw7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKiogQGhpZGRlbiAqL1xuICAgIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgICAgICB0aGlzLl92aWV3Q2hhbmdlU3ViLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgIHRoaXMuX2RhdGFTb3VyY2VTdWIudW5zdWJzY3JpYmUoKTtcbiAgICAgICAgdGhpcy5fZGF0YS51c2VyRGF0YVNvdXJjZS5jbG9zZSgpO1xuICAgICAgICB0aGlzLl9kYXRhLnRlYW1EYXRhU291cmNlLmNsb3NlKCk7XG4gICAgfVxuXG4gICAgLyoqIEBoaWRkZW4gKi9cbiAgICBfZ29Ub1NlbGVjdE1vZGUoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuX3NlbGVjdE1vZGUgPSB0cnVlO1xuXG4gICAgICAgIHRoaXMudmlld1NlcnZpY2Uuc2V0Q3VycmVudFZpZXcodGhpcy5faXNTaW5nbGVVc2VyTW9kZSA/IFZJRVdfTU9ERVMuU0VMRUNUX1VTRVIgOiBWSUVXX01PREVTLlNFTEVDVF9URUFNKTtcbiAgICAgICAgdGhpcy5fY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgICB9XG5cbiAgICAvKiogQGhpZGRlbiAqL1xuICAgIF9leGl0U2VsZWN0TW9kZSgpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMuX3NlbGVjdGVkQXBwcm92ZXJzLmxlbmd0aCAmJiAhdGhpcy5fZGF0YS5ub2RlPy5hcHByb3ZlcnMubGVuZ3RoKSB7XG4gICAgICAgICAgICB0aGlzLl9zZWxlY3RlZEFwcHJvdmVycyA9IFtdO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCF0aGlzLl9kYXRhLmlzRWRpdCAmJiAhdGhpcy5fZGF0YS5ub2RlPy5hcHByb3ZhbFRlYW1JZCkge1xuICAgICAgICAgICAgdGhpcy52aWV3U2VydmljZS5yZXNldFRlYW0oKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX3NlbGVjdE1vZGUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy52aWV3U2VydmljZS5yZXNldFZpZXcoKTtcbiAgICAgICAgdGhpcy5fY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgICB9XG5cbiAgICAvKiogQGhpZGRlbiAqL1xuICAgIF9zZXRTZWxlY3RlZEFwcHJvdmVycyhhcHByb3ZlcnM6IEFwcHJvdmFsVXNlcltdKTogdm9pZCB7XG4gICAgICAgIHRoaXMuX3NlbGVjdGVkQXBwcm92ZXJzID0gYXBwcm92ZXJzO1xuXG4gICAgICAgIHRoaXMuX2NvbmZpcm1TZWxlY3RlZEFwcHJvdmVycygpO1xuICAgIH1cblxuICAgIC8qKiBAaGlkZGVuICovXG4gICAgX2NvbmZpcm1TZWxlY3RlZEFwcHJvdmVycygpOiB2b2lkIHtcbiAgICAgICAgaWYgKCF0aGlzLl9kYXRhLm5vZGUpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9kYXRhLm5vZGUuYXBwcm92ZXJzID0gdGhpcy5fc2VsZWN0ZWRBcHByb3ZlcnM7XG4gICAgICAgIHRoaXMuX2RhdGEubm9kZS52YXJpb3VzVGVhbXMgPSB0aGlzLl9kYXRhLm5vZGUuYXBwcm92ZXJzLnNvbWUoXG4gICAgICAgICAgICAodSkgPT4gdS50ZWFtSWQgIT09IHRoaXMuX2RhdGEubm9kZSEuYXBwcm92ZXJzWzBdLnRlYW1JZFxuICAgICAgICApO1xuICAgICAgICB0aGlzLl9kYXRhLm5vZGUuZGVzY3JpcHRpb24gPSB0aGlzLl9kYXRhLm5vZGUudmFyaW91c1RlYW1zID8gJycgOiB0aGlzLl9zZWxlY3RlZEFwcHJvdmVyc1swXT8uZGVzY3JpcHRpb247XG5cbiAgICAgICAgZGVsZXRlIHRoaXMuX2RhdGEubm9kZS5hcHByb3ZhbFRlYW1JZDtcbiAgICAgICAgZGVsZXRlIHRoaXMuX2RhdGEubm9kZS5pc0V2ZXJ5b25lQXBwcm92YWxOZWVkZWQ7XG5cbiAgICAgICAgdGhpcy5fZXhpdFNlbGVjdE1vZGUoKTtcbiAgICB9XG5cbiAgICAvKiogQGhpZGRlbiAqL1xuICAgIF9zZXRTZWxlY3RlZFRlYW0odGVhbTogQXBwcm92YWxUZWFtKTogdm9pZCB7XG4gICAgICAgIHRoaXMudmlld1NlcnZpY2Uuc2VsZWN0VGVhbSh0ZWFtKTtcbiAgICB9XG5cbiAgICAvKiogQGhpZGRlbiAqL1xuICAgIF9jb25maXJtU2VsZWN0ZWRUZWFtKCk6IHZvaWQge1xuICAgICAgICBpZiAoIXRoaXMudmlld1NlcnZpY2UudGVhbSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX3NlbGVjdGVkVGVhbSA9IHRoaXMudmlld1NlcnZpY2UudGVhbTtcbiAgICAgICAgdGhpcy5fc2VsZWN0ZWRUZWFtQXJyYXkgPSBbdGhpcy52aWV3U2VydmljZS50ZWFtXTtcblxuICAgICAgICBpZiAodGhpcy5fZGF0YS5ub2RlKSB7XG4gICAgICAgICAgICB0aGlzLl9kYXRhLm5vZGUudmFyaW91c1RlYW1zID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLl9kYXRhLm5vZGUuYXBwcm92YWxUZWFtSWQgPSB0aGlzLnZpZXdTZXJ2aWNlLnRlYW0uaWQ7XG4gICAgICAgICAgICB0aGlzLl9kYXRhLm5vZGUuZGVzY3JpcHRpb24gPSB0aGlzLnZpZXdTZXJ2aWNlLnRlYW0ubmFtZTtcbiAgICAgICAgICAgIHRoaXMuX2RhdGEubm9kZS5pc0V2ZXJ5b25lQXBwcm92YWxOZWVkZWQgPSB0aGlzLl9hcHByb3ZlclR5cGUgPT09IEFQUFJPVkFMX0ZMT1dfQVBQUk9WRVJfVFlQRVMuRVZFUllPTkU7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9leGl0U2VsZWN0TW9kZSgpO1xuICAgIH1cblxuICAgIC8qKiBAaGlkZGVuICovXG4gICAgX3NlZVVzZXJEZXRhaWxzKHVzZXI6IEFwcHJvdmFsVXNlcik6IHZvaWQge1xuICAgICAgICB0aGlzLnZpZXdTZXJ2aWNlLnNldEN1cnJlbnRWaWV3KFZJRVdfTU9ERVMuVVNFUl9ERVRBSUxTKTtcblxuICAgICAgICB0aGlzLl91c2VyVG9TaG93RGV0YWlscyA9IHVzZXI7XG4gICAgICAgIHRoaXMuX3VzZXJUb1Nob3dEZXRhaWxzRGF0YSQgPSB0aGlzLl9kYXRhLnVzZXJEYXRhU291cmNlLmRhdGFQcm92aWRlci5nZXRPbmUobmV3IE1hcChbWydpZCcsIHVzZXIuaWRdXSkpO1xuXG4gICAgICAgIHRoaXMuX2Nkci5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgfVxuXG4gICAgLyoqIEBoaWRkZW4gKi9cbiAgICBfZXhpdFVzZXJEZXRhaWxzTW9kZSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy52aWV3U2VydmljZS5zZXRDdXJyZW50Vmlldyh0aGlzLnZpZXdTZXJ2aWNlLnRlYW0gPyBWSUVXX01PREVTLlZJRVdfVEVBTV9NRU1CRVJTIDogVklFV19NT0RFUy5TRUxFQ1RfVVNFUik7XG5cbiAgICAgICAgdGhpcy5fdXNlclRvU2hvd0RldGFpbHMgPSB1bmRlZmluZWQ7XG4gICAgICAgIHRoaXMuX3VzZXJUb1Nob3dEZXRhaWxzRGF0YSQgPSB1bmRlZmluZWQ7XG5cbiAgICAgICAgdGhpcy5fY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgICB9XG5cbiAgICAvKiogQGhpZGRlbiAqL1xuICAgIF92aWV3VGVhbU1lbWJlcnModGVhbTogQXBwcm92YWxUZWFtKTogdm9pZCB7XG4gICAgICAgIHRoaXMudmlld1NlcnZpY2Uuc2VsZWN0VGVhbSh0ZWFtKTtcbiAgICAgICAgdGhpcy52aWV3U2VydmljZS5zZXRDdXJyZW50VmlldyhWSUVXX01PREVTLlZJRVdfVEVBTV9NRU1CRVJTKTtcblxuICAgICAgICB0aGlzLl9zZWxlY3RlZFRlYW1NZW1iZXJzID0gdGVhbS5tZW1iZXJzO1xuXG4gICAgICAgIHRoaXMuX3NldEZpbHRlcmVkVGVhbU1lbWJlcnModGhpcy5fc2VsZWN0ZWRUZWFtTWVtYmVycyk7IC8vIGFwcGx5aW5nIGxvY2FsIGZpbHRlcmluZ1xuICAgICAgICB0aGlzLl9jZHIuZGV0ZWN0Q2hhbmdlcygpO1xuICAgIH1cblxuICAgIC8qKiBAaGlkZGVuICovXG4gICAgX2V4aXRUZWFtTWVtYmVyc01vZGUoKTogdm9pZCB7XG4gICAgICAgIHRoaXMudmlld1NlcnZpY2Uuc2V0Q3VycmVudFZpZXcoVklFV19NT0RFUy5TRUxFQ1RfVEVBTSk7XG4gICAgICAgIHRoaXMudmlld1NlcnZpY2UucmVzZXRUZWFtKCk7XG5cbiAgICAgICAgdGhpcy5fc2VsZWN0ZWRUZWFtTWVtYmVycyA9IFtdO1xuXG4gICAgICAgIHRoaXMuX2Nkci5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgfVxuXG4gICAgLyoqIEBoaWRkZW4gKi9cbiAgICBfc3VibWl0KCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5fZGF0YS5ub2RlICYmICF0aGlzLl9pc1NpbmdsZVVzZXJNb2RlICYmIHRoaXMuX3NlbGVjdGVkVGVhbSkge1xuICAgICAgICAgICAgdGhpcy5fZGF0YS5ub2RlLmFwcHJvdmVycyA9IFsuLi50aGlzLl9zZWxlY3RlZFRlYW0ubWVtYmVyc107XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5fZGF0YS5ub2RlICYmIHRoaXMuX2NoZWNrRHVlRGF0ZSkge1xuICAgICAgICAgICAgdGhpcy5fZGF0YS5ub2RlLmR1ZURhdGUgPSB0aGlzLl9kdWVEYXRlLnRvRGF0ZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5kaWFsb2dSZWYuY2xvc2Uoe1xuICAgICAgICAgICAgbm9kZTogdGhpcy5fZGF0YS5ub2RlLFxuICAgICAgICAgICAgbm9kZVR5cGU6IHRoaXMuX25vZGVUeXBlLFxuICAgICAgICAgICAgdG9OZXh0U2VyaWFsOiB0aGlzLl9hZGRUb05leHRTZXJpYWxcbiAgICAgICAgfSBhcyBBZGROb2RlRGlhbG9nRm9ybURhdGEpO1xuICAgIH1cblxuICAgIC8qKiBAaGlkZGVuICovXG4gICAgX29uU2VhcmNoU3RyaW5nQ2hhbmdlKHNlYXJjaFN0cmluZyA9ICcnKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IHBhcmFtcyA9IG5ldyBNYXAoW1sncXVlcnknLCBzZWFyY2hTdHJpbmddXSk7XG5cbiAgICAgICAgaWYgKHRoaXMudmlld1NlcnZpY2UuaXNTZWxlY3RVc2VyTW9kZSkge1xuICAgICAgICAgICAgdGhpcy5fZGF0YS51c2VyRGF0YVNvdXJjZS5tYXRjaChwYXJhbXMpO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMudmlld1NlcnZpY2UuaXNTZWxlY3RUZWFtTW9kZSkge1xuICAgICAgICAgICAgdGhpcy5fZGF0YS50ZWFtRGF0YVNvdXJjZS5tYXRjaChwYXJhbXMpO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMudmlld1NlcnZpY2UuaXNUZWFtTWVtYmVyc01vZGUpIHtcbiAgICAgICAgICAgIHRoaXMuX3NldEZpbHRlcmVkVGVhbU1lbWJlcnModGhpcy5fc2VsZWN0ZWRUZWFtTWVtYmVycy5maWx0ZXIoKHVzZXIpID0+IGZpbHRlckJ5TmFtZSh1c2VyLCBzZWFyY2hTdHJpbmcpKSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKiogQGhpZGRlbiAqL1xuICAgIF9zZXRGaWx0ZXJlZFRlYW1NZW1iZXJzKHVzZXJzOiBBcHByb3ZhbFVzZXJbXSk6IHZvaWQge1xuICAgICAgICB0aGlzLl9maWx0ZXJlZFRlYW1NZW1iZXJzID0gWy4uLnVzZXJzXTtcbiAgICAgICAgdGhpcy5fY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgICB9XG59XG4iLCI8ZmQtZGlhbG9nIGZkQ29tcGFjdD5cbiAgICA8ZmQtZGlhbG9nLWhlYWRlciBbY2xhc3Muc2hvdy1zZWFyY2hdPVwiX3NlbGVjdE1vZGUgJiYgIV91c2VyVG9TaG93RGV0YWlsc1wiPlxuICAgICAgICA8bmctdGVtcGxhdGUgZmRrVGVtcGxhdGU9XCJoZWFkZXJcIj5cbiAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCIhX3NlbGVjdE1vZGUgJiYgIV9kYXRhLmlzRWRpdFwiPlxuICAgICAgICAgICAgICAgICAgICB7eyAncGxhdGZvcm1BcHByb3ZhbEZsb3cuYWRkTm9kZURpYWxvZ0hlYWRlckFkZEFwcHJvdmVycycgfCBmZFRyYW5zbGF0ZSB9fVxuICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuXG4gICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIiFfc2VsZWN0TW9kZSAmJiBfZGF0YS5pc0VkaXRcIj5cbiAgICAgICAgICAgICAgICAgICAge3sgJ3BsYXRmb3JtQXBwcm92YWxGbG93LmFkZE5vZGVEaWFsb2dIZWFkZXJFZGl0QXBwcm92ZXInIHwgZmRUcmFuc2xhdGUgfX1cbiAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cblxuICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJ2aWV3U2VydmljZS5pc1NlbGVjdFVzZXJNb2RlIHx8IHZpZXdTZXJ2aWNlLmlzU2VsZWN0VGVhbU1vZGVcIj5cbiAgICAgICAgICAgICAgICAgICAge3sgJ3BsYXRmb3JtQXBwcm92YWxGbG93LmFkZE5vZGVEaWFsb2dIZWFkZXJBZGRBcHByb3ZlclRlYW0nIHwgZmRUcmFuc2xhdGUgfX1cbiAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cblxuICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJ2aWV3U2VydmljZS5pc1RlYW1NZW1iZXJzTW9kZVwiPlxuICAgICAgICAgICAgICAgICAgICA8ZmQtaWNvbiBbZ2x5cGhdPVwiX2hlYWRlckFycm93R2x5cGhcIiAoY2xpY2spPVwiX2V4aXRUZWFtTWVtYmVyc01vZGUoKVwiPjwvZmQtaWNvbj5cbiAgICAgICAgICAgICAgICAgICAge3sgdmlld1NlcnZpY2UudGVhbT8ubmFtZSA/PyAnJyB9fSAoe3sgdmlld1NlcnZpY2UudGVhbT8ubWVtYmVycz8ubGVuZ3RoID8/IDAgfX0pXG4gICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG5cbiAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwidmlld1NlcnZpY2UuaXNVc2VyRGV0YWlsc01vZGVcIj5cbiAgICAgICAgICAgICAgICAgICAgPGZkLWljb24gW2dseXBoXT1cIl9oZWFkZXJBcnJvd0dseXBoXCIgKGNsaWNrKT1cIl9leGl0VXNlckRldGFpbHNNb2RlKClcIj48L2ZkLWljb24+XG4gICAgICAgICAgICAgICAgICAgIHt7ICdwbGF0Zm9ybUFwcHJvdmFsRmxvdy5hZGROb2RlRGlhbG9nSGVhZGVyRGV0YWlsJyB8IGZkVHJhbnNsYXRlIH19XG4gICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICA8L3A+XG5cbiAgICAgICAgICAgIDxmZHAtc2VhcmNoLWZpZWxkXG4gICAgICAgICAgICAgICAgKm5nSWY9XCJfc2VsZWN0TW9kZSAmJiAhX3VzZXJUb1Nob3dEZXRhaWxzXCJcbiAgICAgICAgICAgICAgICBbcGxhY2Vob2xkZXJdPVwiJ3BsYXRmb3JtQXBwcm92YWxGbG93LmFkZE5vZGVTZWFyY2hQbGFjZWhvbGRlcicgfCBmZFRyYW5zbGF0ZVwiXG4gICAgICAgICAgICAgICAgW3N1Z2dlc3Rpb25zXT1cIltdXCJcbiAgICAgICAgICAgICAgICAoaW5wdXRDaGFuZ2UpPVwiX29uU2VhcmNoU3RyaW5nQ2hhbmdlKCRldmVudC50ZXh0KVwiXG4gICAgICAgICAgICA+PC9mZHAtc2VhcmNoLWZpZWxkPlxuICAgICAgICA8L25nLXRlbXBsYXRlPlxuICAgIDwvZmQtZGlhbG9nLWhlYWRlcj5cblxuICAgIDxmZC1kaWFsb2ctYm9keSBbY2xhc3MuZmQtZGlhbG9nX19ib2R5LS1hdXRvLWhlaWdodF09XCJ2aWV3U2VydmljZS5pc1VzZXJEZXRhaWxzTW9kZVwiPlxuICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiIV9zZWxlY3RNb2RlXCI+XG4gICAgICAgICAgICA8ZGl2IGZkLWZvcm0taXRlbSAqbmdJZj1cIl9kYXRhLnNob3dOb2RlVHlwZVNlbGVjdFwiPlxuICAgICAgICAgICAgICAgIDxsYWJlbCBmZC1mb3JtLWxhYmVsPlxuICAgICAgICAgICAgICAgICAgICB7eyAncGxhdGZvcm1BcHByb3ZhbEZsb3cuYWRkTm9kZURpYWxvZ05vZGVUeXBlJyB8IGZkVHJhbnNsYXRlIH19XG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cblxuICAgICAgICAgICAgICAgIDxmZC1zZWxlY3QgWyh2YWx1ZSldPVwiX25vZGVUeXBlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nRm9yPVwibGV0IG9wdGlvbiBvZiBfbm9kZVR5cGVzQXJyYXlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgW25nU3dpdGNoXT1cIm9wdGlvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBmZC1vcHRpb24gKm5nU3dpdGNoQ2FzZT1cIl9ub2RlVHlwZXMuU0VSSUFMXCIgW3ZhbHVlXT1cIm9wdGlvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyAncGxhdGZvcm1BcHByb3ZhbEZsb3cuYWRkTm9kZURpYWxvZ05vZGVUeXBlU2VyaWFsJyB8IGZkVHJhbnNsYXRlIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBmZC1vcHRpb24gKm5nU3dpdGNoQ2FzZT1cIl9ub2RlVHlwZXMuUEFSQUxMRUxcIiBbdmFsdWVdPVwib3B0aW9uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7ICdwbGF0Zm9ybUFwcHJvdmFsRmxvdy5hZGROb2RlRGlhbG9nTm9kZVR5cGVQYXJhbGxlbCcgfCBmZFRyYW5zbGF0ZSB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgPC9mZC1zZWxlY3Q+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdiBmZC1mb3JtLWl0ZW0+XG4gICAgICAgICAgICAgICAgPGxhYmVsIGZkLWZvcm0tbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIHt7ICdwbGF0Zm9ybUFwcHJvdmFsRmxvdy5hZGROb2RlRGlhbG9nQXBwcm92ZXJUeXBlJyB8IGZkVHJhbnNsYXRlIH19XG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cblxuICAgICAgICAgICAgICAgIDxmZC1zZWxlY3QgWyh2YWx1ZSldPVwiX2FwcHJvdmVyVHlwZVwiPlxuICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCBvcHRpb24gb2YgX2FwcHJvdmVyVHlwZXNBcnJheVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciBbbmdTd2l0Y2hdPVwib3B0aW9uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGZkLW9wdGlvbiAqbmdTd2l0Y2hDYXNlPVwiX2FwcHJvdmVyVHlwZXMuU0lOR0xFX1VTRVJcIiBbdmFsdWVdPVwib3B0aW9uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7ICdwbGF0Zm9ybUFwcHJvdmFsRmxvdy5hZGROb2RlRGlhbG9nQXBwcm92ZXJUeXBlVXNlcicgfCBmZFRyYW5zbGF0ZSB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgZmQtb3B0aW9uICpuZ1N3aXRjaENhc2U9XCJfYXBwcm92ZXJUeXBlcy5BTllPTkVcIiBbdmFsdWVdPVwib3B0aW9uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7ICdwbGF0Zm9ybUFwcHJvdmFsRmxvdy5hZGROb2RlRGlhbG9nQXBwcm92ZXJUeXBlVGVhbUFueW9uZScgfCBmZFRyYW5zbGF0ZSB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgZmQtb3B0aW9uICpuZ1N3aXRjaENhc2U9XCJfYXBwcm92ZXJUeXBlcy5FVkVSWU9ORVwiIFt2YWx1ZV09XCJvcHRpb25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgJ3BsYXRmb3JtQXBwcm92YWxGbG93LmFkZE5vZGVEaWFsb2dBcHByb3ZlclR5cGVUZWFtRXZlcnlvbmUnIHwgZmRUcmFuc2xhdGUgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICAgIDwvZmQtc2VsZWN0PlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXYgZmQtZm9ybS1pdGVtPlxuICAgICAgICAgICAgICAgIDxsYWJlbCBmZC1mb3JtLWxhYmVsPnt7ICdwbGF0Zm9ybUFwcHJvdmFsRmxvdy5hZGROb2RlRGlhbG9nVXNlck9yVGVhbScgfCBmZFRyYW5zbGF0ZSB9fTwvbGFiZWw+XG5cbiAgICAgICAgICAgICAgICA8ZmQtbXVsdGktaW5wdXRcbiAgICAgICAgICAgICAgICAgICAgKm5nSWY9XCJfaXNTaW5nbGVVc2VyTW9kZVwiXG4gICAgICAgICAgICAgICAgICAgIFtzaG93QWxsQnV0dG9uXT1cImZhbHNlXCJcbiAgICAgICAgICAgICAgICAgICAgW2Ryb3Bkb3duVmFsdWVzXT1cIl9zZWxlY3RlZEFwcHJvdmVyc1wiXG4gICAgICAgICAgICAgICAgICAgIFsobmdNb2RlbCldPVwiX3NlbGVjdGVkQXBwcm92ZXJzXCJcbiAgICAgICAgICAgICAgICAgICAgW2Rpc3BsYXlGbl09XCJfZGlzcGxheVVzZXJGblwiXG4gICAgICAgICAgICAgICAgICAgIChvcGVuQ2hhbmdlKT1cIl9nb1RvU2VsZWN0TW9kZSgpXCJcbiAgICAgICAgICAgICAgICAgICAgKHNlbGVjdGVkQ2hhbmdlKT1cIl9zZXRTZWxlY3RlZEFwcHJvdmVycygkZXZlbnQpXCJcbiAgICAgICAgICAgICAgICA+PC9mZC1tdWx0aS1pbnB1dD5cblxuICAgICAgICAgICAgICAgIDxmZC1tdWx0aS1pbnB1dFxuICAgICAgICAgICAgICAgICAgICAqbmdJZj1cIiFfaXNTaW5nbGVVc2VyTW9kZVwiXG4gICAgICAgICAgICAgICAgICAgIFtzaG93QWxsQnV0dG9uXT1cImZhbHNlXCJcbiAgICAgICAgICAgICAgICAgICAgW2Ryb3Bkb3duVmFsdWVzXT1cIl9zZWxlY3RlZFRlYW1BcnJheVwiXG4gICAgICAgICAgICAgICAgICAgIFsobmdNb2RlbCldPVwiX3NlbGVjdGVkVGVhbUFycmF5XCJcbiAgICAgICAgICAgICAgICAgICAgW2Rpc3BsYXlGbl09XCJfZGlzcGxheVRlYW1GblwiXG4gICAgICAgICAgICAgICAgICAgIChvcGVuQ2hhbmdlKT1cIl9nb1RvU2VsZWN0TW9kZSgpXCJcbiAgICAgICAgICAgICAgICA+PC9mZC1tdWx0aS1pbnB1dD5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2ICpuZ0lmPVwiX25vZGVUeXBlID09PSBfbm9kZVR5cGVzLlBBUkFMTEVMXCIgZmQtZm9ybS1pdGVtPlxuICAgICAgICAgICAgICAgIDxmZC1jaGVja2JveCBbKG5nTW9kZWwpXT1cIl9hZGRUb05leHRTZXJpYWxcIj5cbiAgICAgICAgICAgICAgICAgICAge3sgJ3BsYXRmb3JtQXBwcm92YWxGbG93LmFkZE5vZGVEaWFsb2dBZGRUb05leHQnIHwgZmRUcmFuc2xhdGUgfX1cbiAgICAgICAgICAgICAgICA8L2ZkLWNoZWNrYm94PlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXYgKm5nSWY9XCJfY2hlY2tEdWVEYXRlXCIgZmQtZm9ybS1pdGVtPlxuICAgICAgICAgICAgICAgIDxsYWJlbCBmZC1mb3JtLWxhYmVsPnt7ICdwbGF0Zm9ybUFwcHJvdmFsRmxvdy5hZGROb2RlRGlhbG9nRHVlRGF0ZScgfCBmZFRyYW5zbGF0ZSB9fTwvbGFiZWw+XG5cbiAgICAgICAgICAgICAgICA8ZmQtZGF0ZS1waWNrZXIgdHlwZT1cInNpbmdsZVwiIFtzdGF0ZV09XCIhdGhpcy5fZHVlRGF0ZSA/ICdlcnJvcicgOiBudWxsXCIgWyhuZ01vZGVsKV09XCJfZHVlRGF0ZVwiPlxuICAgICAgICAgICAgICAgIDwvZmQtZGF0ZS1waWNrZXI+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9uZy1jb250YWluZXI+XG5cbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIl9zZWxlY3RNb2RlXCI+XG4gICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwidmlld1NlcnZpY2UuaXNTZWxlY3RUZWFtTW9kZVwiPlxuICAgICAgICAgICAgICAgIDxmZHAtYXBwcm92YWwtZmxvdy10ZWFtLWxpc3RcbiAgICAgICAgICAgICAgICAgICAgKm5nSWY9XCIhX2RhdGEudGVhbURhdGFTb3VyY2UuaXNEYXRhTG9hZGluZzsgZWxzZSBsb2FkaW5nVHBsXCJcbiAgICAgICAgICAgICAgICAgICAgW2lzUnRsXT1cIl9kYXRhLnJ0bFwiXG4gICAgICAgICAgICAgICAgICAgIFt0ZWFtc109XCJfdGVhbXNcIlxuICAgICAgICAgICAgICAgICAgICBbc2VsZWN0ZWRUZWFtSWRdPVwiX3NlbGVjdGVkVGVhbT8uaWRcIlxuICAgICAgICAgICAgICAgICAgICAob25UZWFtQ2xpY2spPVwiX3ZpZXdUZWFtTWVtYmVycygkZXZlbnQpXCJcbiAgICAgICAgICAgICAgICAgICAgKG9uVGVhbVJhZGlvQ2xpY2spPVwiX3NldFNlbGVjdGVkVGVhbSgkZXZlbnQpXCJcbiAgICAgICAgICAgICAgICA+PC9mZHAtYXBwcm92YWwtZmxvdy10ZWFtLWxpc3Q+XG4gICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cblxuICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cInZpZXdTZXJ2aWNlLmlzU2VsZWN0VXNlck1vZGUgfHwgdmlld1NlcnZpY2UuaXNUZWFtTWVtYmVyc01vZGVcIj5cbiAgICAgICAgICAgICAgICA8ZmRwLWFwcHJvdmFsLWZsb3ctdXNlci1saXN0XG4gICAgICAgICAgICAgICAgICAgICpuZ0lmPVwidmlld1NlcnZpY2UuaXNTZWxlY3RVc2VyTW9kZSB8fCAhX2RhdGEudXNlckRhdGFTb3VyY2UuaXNEYXRhTG9hZGluZzsgZWxzZSBsb2FkaW5nVHBsXCJcbiAgICAgICAgICAgICAgICAgICAgW3VzZXJzXT1cInZpZXdTZXJ2aWNlLmlzU2VsZWN0VXNlck1vZGUgPyBfYXBwcm92ZXJzIDogX2ZpbHRlcmVkVGVhbU1lbWJlcnNcIlxuICAgICAgICAgICAgICAgICAgICBbaXNTZWxlY3RhYmxlXT1cInZpZXdTZXJ2aWNlLmlzU2VsZWN0VXNlck1vZGVcIlxuICAgICAgICAgICAgICAgICAgICBbc2VsZWN0ZWRVc2Vyc109XCJfc2VsZWN0ZWRBcHByb3ZlcnNcIlxuICAgICAgICAgICAgICAgICAgICAob25Vc2VyQ2xpY2spPVwiX3NlZVVzZXJEZXRhaWxzKCRldmVudClcIlxuICAgICAgICAgICAgICAgICAgICAob25TZWxlY3Rpb25DaGFuZ2UpPVwiX3NlbGVjdGVkQXBwcm92ZXJzID0gJGV2ZW50XCJcbiAgICAgICAgICAgICAgICA+PC9mZHAtYXBwcm92YWwtZmxvdy11c2VyLWxpc3Q+XG4gICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cblxuICAgICAgICAgICAgPGZkcC1hcHByb3ZhbC1mbG93LXVzZXItZGV0YWlsc1xuICAgICAgICAgICAgICAgICpuZ0lmPVwidmlld1NlcnZpY2UuaXNVc2VyRGV0YWlsc01vZGUgJiYgX3VzZXJUb1Nob3dEZXRhaWxzXCJcbiAgICAgICAgICAgICAgICBbdXNlcl09XCJfdXNlclRvU2hvd0RldGFpbHNcIlxuICAgICAgICAgICAgICAgIFtkZXRhaWxzVGVtcGxhdGVdPVwiX2RhdGEudXNlckRldGFpbHNUZW1wbGF0ZVwiXG4gICAgICAgICAgICAgICAgW2RldGFpbHNdPVwiX3VzZXJUb1Nob3dEZXRhaWxzRGF0YSRcIlxuICAgICAgICAgICAgPjwvZmRwLWFwcHJvdmFsLWZsb3ctdXNlci1kZXRhaWxzPlxuICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICA8L2ZkLWRpYWxvZy1ib2R5PlxuXG4gICAgPGZkLWRpYWxvZy1mb290ZXI+XG4gICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCIhX3NlbGVjdE1vZGVcIj5cbiAgICAgICAgICAgIDxmZC1kaWFsb2ctZm9vdGVyLWJ1dHRvbj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgIGZkLWJ1dHRvblxuICAgICAgICAgICAgICAgICAgICBmZC1kaWFsb2ctZGVjaXNpdmUtYnV0dG9uXG4gICAgICAgICAgICAgICAgICAgIGZkVHlwZT1cImVtcGhhc2l6ZWRcIlxuICAgICAgICAgICAgICAgICAgICBbbGFiZWxdPVwiJ3BsYXRmb3JtQXBwcm92YWxGbG93LmFkZE5vZGVBZGRBY3Rpb25CdG5MYWJlbCcgfCBmZFRyYW5zbGF0ZVwiXG4gICAgICAgICAgICAgICAgICAgIFtkaXNhYmxlZF09XCJfaXNNYWluU3VibWl0QnV0dG9uRGlzYWJsZWRcIlxuICAgICAgICAgICAgICAgICAgICAoY2xpY2spPVwiX3N1Ym1pdCgpXCJcbiAgICAgICAgICAgICAgICA+PC9idXR0b24+XG4gICAgICAgICAgICA8L2ZkLWRpYWxvZy1mb290ZXItYnV0dG9uPlxuXG4gICAgICAgICAgICA8ZmQtZGlhbG9nLWZvb3Rlci1idXR0b24+XG4gICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICBmZC1idXR0b25cbiAgICAgICAgICAgICAgICAgICAgZmQtaW5pdGlhbC1mb2N1c1xuICAgICAgICAgICAgICAgICAgICBmZC1kaWFsb2ctZGVjaXNpdmUtYnV0dG9uXG4gICAgICAgICAgICAgICAgICAgIGZkVHlwZT1cInRyYW5zcGFyZW50XCJcbiAgICAgICAgICAgICAgICAgICAgW2xhYmVsXT1cIidwbGF0Zm9ybUFwcHJvdmFsRmxvdy5hZGROb2RlQ2FuY2VsQWN0aW9uQnRuTGFiZWwnIHwgZmRUcmFuc2xhdGVcIlxuICAgICAgICAgICAgICAgICAgICAoY2xpY2spPVwiZGlhbG9nUmVmLmNsb3NlKClcIlxuICAgICAgICAgICAgICAgID48L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZmQtZGlhbG9nLWZvb3Rlci1idXR0b24+XG4gICAgICAgIDwvbmctY29udGFpbmVyPlxuXG4gICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJfc2VsZWN0TW9kZVwiPlxuICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cInZpZXdTZXJ2aWNlLmlzU2VsZWN0VXNlck1vZGVcIj5cbiAgICAgICAgICAgICAgICA8ZmQtZGlhbG9nLWZvb3Rlci1idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgIGZkLWJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgZmRUeXBlPVwiZW1waGFzaXplZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBbbGFiZWxdPVwiJ3BsYXRmb3JtQXBwcm92YWxGbG93LmFkZE5vZGVTZWxlY3RBcHByb3ZlckFjdGlvbkJ0bkxhYmVsJyB8IGZkVHJhbnNsYXRlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIFtkaXNhYmxlZF09XCIhX3NlbGVjdGVkQXBwcm92ZXJzLmxlbmd0aFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAoY2xpY2spPVwiX2NvbmZpcm1TZWxlY3RlZEFwcHJvdmVycygpXCJcbiAgICAgICAgICAgICAgICAgICAgPjwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZmQtZGlhbG9nLWZvb3Rlci1idXR0b24+XG5cbiAgICAgICAgICAgICAgICA8ZmQtZGlhbG9nLWZvb3Rlci1idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgIGZkLWJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgZmQtaW5pdGlhbC1mb2N1c1xuICAgICAgICAgICAgICAgICAgICAgICAgZmRUeXBlPVwidHJhbnNwYXJlbnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgW2xhYmVsXT1cIidwbGF0Zm9ybUFwcHJvdmFsRmxvdy5hZGROb2RlQ2FuY2VsQXBwcm92ZXJTZWxlY3Rpb25BY3Rpb25CdG5MYWJlbCcgfCBmZFRyYW5zbGF0ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAoY2xpY2spPVwiX2V4aXRTZWxlY3RNb2RlKClcIlxuICAgICAgICAgICAgICAgICAgICA+PC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9mZC1kaWFsb2ctZm9vdGVyLWJ1dHRvbj5cbiAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuXG4gICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwidmlld1NlcnZpY2UuaXNTZWxlY3RUZWFtTW9kZVwiPlxuICAgICAgICAgICAgICAgIDxmZC1kaWFsb2ctZm9vdGVyLWJ1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgZmQtYnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICBmZFR5cGU9XCJlbXBoYXNpemVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIFtsYWJlbF09XCIncGxhdGZvcm1BcHByb3ZhbEZsb3cuYWRkTm9kZVNlbGVjdEFwcHJvdmVyQWN0aW9uQnRuTGFiZWwnIHwgZmRUcmFuc2xhdGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgW2Rpc2FibGVkXT1cIiFfc2VsZWN0ZWRUZWFtICYmICF2aWV3U2VydmljZS50ZWFtXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIChjbGljayk9XCJfY29uZmlybVNlbGVjdGVkVGVhbSgpXCJcbiAgICAgICAgICAgICAgICAgICAgPjwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZmQtZGlhbG9nLWZvb3Rlci1idXR0b24+XG5cbiAgICAgICAgICAgICAgICA8ZmQtZGlhbG9nLWZvb3Rlci1idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgIGZkLWJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgZmQtaW5pdGlhbC1mb2N1c1xuICAgICAgICAgICAgICAgICAgICAgICAgZmRUeXBlPVwidHJhbnNwYXJlbnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgW2xhYmVsXT1cIidwbGF0Zm9ybUFwcHJvdmFsRmxvdy5hZGROb2RlQ2FuY2VsQXBwcm92ZXJTZWxlY3Rpb25BY3Rpb25CdG5MYWJlbCcgfCBmZFRyYW5zbGF0ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAoY2xpY2spPVwiX2V4aXRTZWxlY3RNb2RlKClcIlxuICAgICAgICAgICAgICAgICAgICA+PC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9mZC1kaWFsb2ctZm9vdGVyLWJ1dHRvbj5cbiAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuXG4gICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwidmlld1NlcnZpY2UuaXNUZWFtTWVtYmVyc01vZGVcIj5cbiAgICAgICAgICAgICAgICA8ZmQtZGlhbG9nLWZvb3Rlci1idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgIGZkLWJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgZmQtaW5pdGlhbC1mb2N1c1xuICAgICAgICAgICAgICAgICAgICAgICAgZmRUeXBlPVwidHJhbnNwYXJlbnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgW2xhYmVsXT1cIidwbGF0Zm9ybUFwcHJvdmFsRmxvdy5hZGROb2RlQXBwcm92ZXJPclRlYW1EZXRhaWxzQ2xvc2VBY3Rpb25CdG5MYWJlbCcgfCBmZFRyYW5zbGF0ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAoY2xpY2spPVwiX2V4aXRUZWFtTWVtYmVyc01vZGUoKVwiXG4gICAgICAgICAgICAgICAgICAgID48L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2ZkLWRpYWxvZy1mb290ZXItYnV0dG9uPlxuICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG5cbiAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJ2aWV3U2VydmljZS5pc1VzZXJEZXRhaWxzTW9kZVwiPlxuICAgICAgICAgICAgICAgIDxmZC1kaWFsb2ctZm9vdGVyLWJ1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgZmQtYnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICBmZC1pbml0aWFsLWZvY3VzXG4gICAgICAgICAgICAgICAgICAgICAgICBmZFR5cGU9XCJ0cmFuc3BhcmVudFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBbbGFiZWxdPVwiJ3BsYXRmb3JtQXBwcm92YWxGbG93LmFkZE5vZGVBcHByb3Zlck9yVGVhbURldGFpbHNDbG9zZUFjdGlvbkJ0bkxhYmVsJyB8IGZkVHJhbnNsYXRlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIChjbGljayk9XCJfZXhpdFVzZXJEZXRhaWxzTW9kZSgpXCJcbiAgICAgICAgICAgICAgICAgICAgPjwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZmQtZGlhbG9nLWZvb3Rlci1idXR0b24+XG4gICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgPC9mZC1kaWFsb2ctZm9vdGVyPlxuPC9mZC1kaWFsb2c+XG5cbjxuZy10ZW1wbGF0ZSAjbG9hZGluZ1RwbD5cbiAgICA8ZmQtYnVzeS1pbmRpY2F0b3IgW2xvYWRpbmddPVwidHJ1ZVwiIFtibG9ja109XCJ0cnVlXCI+IDwvZmQtYnVzeS1pbmRpY2F0b3I+XG48L25nLXRlbXBsYXRlPlxuIl19