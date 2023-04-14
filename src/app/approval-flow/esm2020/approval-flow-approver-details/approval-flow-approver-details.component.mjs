import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ViewEncapsulation } from '@angular/core';
import { DialogRef } from '@fundamental-ngx/core/dialog';
import { filterByName } from '../helpers';
import * as i0 from "@angular/core";
import * as i1 from "@fundamental-ngx/core/dialog";
import * as i2 from "@angular/common";
import * as i3 from "@fundamental-ngx/core/content-density";
import * as i4 from "@fundamental-ngx/core/button";
import * as i5 from "@fundamental-ngx/core/icon";
import * as i6 from "@fundamental-ngx/cdk/utils";
import * as i7 from "@fundamental-ngx/platform/search-field";
import * as i8 from "../approval-flow-user-list/approval-flow-user-list.component";
import * as i9 from "../approval-flow-user-details/approval-flow-user-details.component";
import * as i10 from "@fundamental-ngx/i18n";
function ApprovalFlowApproverDetailsComponent_ng_template_2_fd_icon_1_Template(rf, ctx) { if (rf & 1) {
    const _r10 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "fd-icon", 10);
    i0.ɵɵlistener("click", function ApprovalFlowApproverDetailsComponent_ng_template_2_fd_icon_1_Template_fd_icon_click_0_listener() { i0.ɵɵrestoreView(_r10); const ctx_r9 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r9._exitUserDetailsMode()); })("keyup.space", function ApprovalFlowApproverDetailsComponent_ng_template_2_fd_icon_1_Template_fd_icon_keyup_space_0_listener() { i0.ɵɵrestoreView(_r10); const ctx_r11 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r11._exitUserDetailsMode()); })("keyup.enter", function ApprovalFlowApproverDetailsComponent_ng_template_2_fd_icon_1_Template_fd_icon_keyup_enter_0_listener() { i0.ɵɵrestoreView(_r10); const ctx_r12 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r12._exitUserDetailsMode()); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r6 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("glyph", "navigation-" + (ctx_r6._data.rtl ? "right" : "left") + "-arrow");
} }
function ApprovalFlowApproverDetailsComponent_ng_template_2_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r7 = i0.ɵɵnextContext(2);
    let tmp_0_0;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate2("", ctx_r7._data.node == null ? null : ctx_r7._data.node.description, " (", (tmp_0_0 = ctx_r7._data.node == null ? null : ctx_r7._data.node.approvers == null ? null : ctx_r7._data.node.approvers.length) !== null && tmp_0_0 !== undefined ? tmp_0_0 : 0, ")");
} }
const _c0 = function () { return []; };
function ApprovalFlowApproverDetailsComponent_ng_template_2_fdp_search_field_3_Template(rf, ctx) { if (rf & 1) {
    const _r14 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "fdp-search-field", 11);
    i0.ɵɵlistener("inputChange", function ApprovalFlowApproverDetailsComponent_ng_template_2_fdp_search_field_3_Template_fdp_search_field_inputChange_0_listener($event) { i0.ɵɵrestoreView(_r14); const ctx_r13 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r13._onSearchStringChange($event.text)); });
    i0.ɵɵpipe(1, "fdTranslate");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵproperty("placeholder", i0.ɵɵpipeBind1(1, 2, "platformApprovalFlow.addNodeSearchPlaceholder"))("suggestions", i0.ɵɵpureFunction0(4, _c0));
} }
function ApprovalFlowApproverDetailsComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p");
    i0.ɵɵtemplate(1, ApprovalFlowApproverDetailsComponent_ng_template_2_fd_icon_1_Template, 1, 1, "fd-icon", 7);
    i0.ɵɵtemplate(2, ApprovalFlowApproverDetailsComponent_ng_template_2_ng_container_2_Template, 2, 2, "ng-container", 8);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(3, ApprovalFlowApproverDetailsComponent_ng_template_2_fdp_search_field_3_Template, 2, 5, "fdp-search-field", 9);
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    const _r4 = i0.ɵɵreference(12);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0._userToShowDetails && (ctx_r0._data.node == null ? null : ctx_r0._data.node.approvers) && ctx_r0._data.node.approvers.length > 1);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0._isListMode && !ctx_r0._userToShowDetails)("ngIfElse", _r4);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r0._userToShowDetails && ctx_r0._isListMode);
} }
function ApprovalFlowApproverDetailsComponent_fdp_approval_flow_user_details_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "fdp-approval-flow-user-details", 12);
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("user", ctx_r1._userToShowDetails)("detailsTemplate", ctx_r1._data.userDetailsTemplate)("details", ctx_r1._userToShowDetailsData$);
} }
function ApprovalFlowApproverDetailsComponent_fdp_approval_flow_user_list_5_Template(rf, ctx) { if (rf & 1) {
    const _r16 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "fdp-approval-flow-user-list", 13);
    i0.ɵɵlistener("onUserClick", function ApprovalFlowApproverDetailsComponent_fdp_approval_flow_user_list_5_Template_fdp_approval_flow_user_list_onUserClick_0_listener($event) { i0.ɵɵrestoreView(_r16); const ctx_r15 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r15._seeUserDetails($event)); })("onSelectionChange", function ApprovalFlowApproverDetailsComponent_fdp_approval_flow_user_list_5_Template_fdp_approval_flow_user_list_onSelectionChange_0_listener($event) { i0.ɵɵrestoreView(_r16); const ctx_r17 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r17._selectedUsers = $event); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵproperty("users", ctx_r2._listItems);
} }
function ApprovalFlowApproverDetailsComponent_fd_dialog_footer_button_7_Template(rf, ctx) { if (rf & 1) {
    const _r19 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "fd-dialog-footer-button")(1, "button", 14);
    i0.ɵɵlistener("click", function ApprovalFlowApproverDetailsComponent_fd_dialog_footer_button_7_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r19); const ctx_r18 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r18._sendReminder()); });
    i0.ɵɵpipe(2, "fdTranslate");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("label", i0.ɵɵpipeBind1(2, 2, "platformApprovalFlow.userDetailsSendReminderBtnLabel"))("disabled", !ctx_r3._data.allowSendReminder || ctx_r3._isListMode && !ctx_r3._selectedUsers.length);
} }
function ApprovalFlowApproverDetailsComponent_ng_template_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0);
    i0.ɵɵpipe(1, "fdTranslate");
} if (rf & 2) {
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(1, 1, "platformApprovalFlow.userDetailsHeader"), "\n");
} }
/**
 * @deprecated
 * ApprovalFlowApproverDetails component is depricated since version 0.40.0
 */
export class ApprovalFlowApproverDetailsComponent {
    /** @hidden */
    constructor(dialogRef, _cdr) {
        this.dialogRef = dialogRef;
        this._cdr = _cdr;
        /** @hidden */
        this._isListMode = false;
        /** @hidden */
        this._listItems = [];
        /** @hidden */
        this._selectedUsers = [];
    }
    /** @hidden */
    get _data() {
        return this.dialogRef.data;
    }
    /** @hidden */
    ngOnInit() {
        this._isListMode = (this._data.node?.approvers.length ?? 0) > 1;
        if (this._isListMode) {
            this._setListItems(this._data.node?.approvers ?? []);
        }
        else {
            const user = this._data.watcher || this._data.node?.approvers[0];
            if (user) {
                this._seeUserDetails(user);
            }
            else {
                this.dialogRef.close();
            }
        }
    }
    /** @hidden */
    _setListItems(items = []) {
        this._listItems = [...items];
        this._cdr.detectChanges();
    }
    /** @hidden */
    _exitUserDetailsMode() {
        this._userToShowDetails = undefined;
        this._isListMode = true;
    }
    /** @hidden */
    _seeUserDetails(user) {
        this._userToShowDetails = user;
        this._userToShowDetailsData$ = this._data.userDataSource.dataProvider.getOne(new Map([['id', user.id]]));
        this._isListMode = false;
        this._selectedUsers = [];
        this._cdr.detectChanges();
    }
    /** @hidden */
    _sendReminder() {
        const reminderTargets = this._isListMode ? this._selectedUsers : this._data.node?.approvers;
        this.dialogRef.close(reminderTargets);
    }
    /** @hidden */
    _onSearchStringChange(searchString) {
        if (!searchString) {
            this._setListItems(this._data.node?.approvers);
            return;
        }
        this._setListItems(this._data.node?.approvers.filter((user) => filterByName(user, searchString)));
    }
}
ApprovalFlowApproverDetailsComponent.ɵfac = function ApprovalFlowApproverDetailsComponent_Factory(t) { return new (t || ApprovalFlowApproverDetailsComponent)(i0.ɵɵdirectiveInject(i1.DialogRef), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
ApprovalFlowApproverDetailsComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ApprovalFlowApproverDetailsComponent, selectors: [["fdp-approval-flow-approver-details"]], hostAttrs: [1, "fdp-approval-flow-dialog", "fdp-approval-flow-approver-details"], decls: 13, vars: 8, consts: [["fdkTemplate", "header"], [3, "user", "detailsTemplate", "details", 4, "ngIf"], [3, "users", "onUserClick", "onSelectionChange", 4, "ngIf"], ["fdCompact", ""], [4, "ngIf"], ["fd-button", "", "fd-initial-focus", "", "fd-dialog-decisive-button", "", "fdType", "transparent", 3, "label", "click"], ["defaultHeader", ""], ["tabindex", "0", "role", "button", 3, "glyph", "click", "keyup.space", "keyup.enter", 4, "ngIf"], [4, "ngIf", "ngIfElse"], ["fdCompact", "", 3, "placeholder", "suggestions", "inputChange", 4, "ngIf"], ["tabindex", "0", "role", "button", 3, "glyph", "click", "keyup.space", "keyup.enter"], ["fdCompact", "", 3, "placeholder", "suggestions", "inputChange"], [3, "user", "detailsTemplate", "details"], [3, "users", "onUserClick", "onSelectionChange"], ["fd-button", "", "fd-dialog-decisive-button", "", "fdType", "emphasized", 3, "label", "disabled", "click"]], template: function ApprovalFlowApproverDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "fd-dialog")(1, "fd-dialog-header");
        i0.ɵɵtemplate(2, ApprovalFlowApproverDetailsComponent_ng_template_2_Template, 4, 4, "ng-template", 0);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "fd-dialog-body");
        i0.ɵɵtemplate(4, ApprovalFlowApproverDetailsComponent_fdp_approval_flow_user_details_4_Template, 1, 3, "fdp-approval-flow-user-details", 1);
        i0.ɵɵtemplate(5, ApprovalFlowApproverDetailsComponent_fdp_approval_flow_user_list_5_Template, 1, 1, "fdp-approval-flow-user-list", 2);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(6, "fd-dialog-footer", 3);
        i0.ɵɵtemplate(7, ApprovalFlowApproverDetailsComponent_fd_dialog_footer_button_7_Template, 3, 4, "fd-dialog-footer-button", 4);
        i0.ɵɵelementStart(8, "fd-dialog-footer-button")(9, "button", 5);
        i0.ɵɵlistener("click", function ApprovalFlowApproverDetailsComponent_Template_button_click_9_listener() { return ctx.dialogRef.close("Cancel"); });
        i0.ɵɵpipe(10, "fdTranslate");
        i0.ɵɵelementEnd()()()();
        i0.ɵɵtemplate(11, ApprovalFlowApproverDetailsComponent_ng_template_11_Template, 2, 3, "ng-template", null, 6, i0.ɵɵtemplateRefExtractor);
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵclassProp("show-search", !ctx._userToShowDetails && ctx._isListMode);
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("ngIf", ctx._userToShowDetails);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx._isListMode);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", ctx._isListMode || ctx._userToShowDetails && (ctx._data.node == null ? null : ctx._data.node.approvers == null ? null : ctx._data.node.approvers.length) === 1);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("label", i0.ɵɵpipeBind1(10, 6, "platformApprovalFlow.userDetailsCancelBtnLabel"));
    } }, dependencies: [i2.NgIf, i3.ContentDensityDirective, i4.ButtonComponent, i5.IconComponent, i1.DialogComponent, i1.DialogBodyComponent, i1.DialogFooterComponent, i1.DialogHeaderComponent, i1.DialogFooterButtonComponent, i1.DialogDecisiveButtonDirective, i6.TemplateDirective, i6.InitialFocusDirective, i6.DeprecatedInitialFocusDirective, i7.SearchFieldComponent, i8.ApprovalFlowUserListComponent, i9.ApprovalFlowUserDetailsComponent, i10.FdTranslatePipe], styles: [".fdp-approval-flow-dialog a{color:#0a6ed1;color:var(--sapLinkColor, #0a6ed1)}.fdp-approval-flow-dialog .fd-list--byline .fd-list__byline-left{width:100%}.fdp-approval-flow-dialog fd-popover{width:100%}.fdp-approval-flow-dialog fd-dialog fd-dialog-header{margin-bottom:1rem}.fdp-approval-flow-dialog fd-dialog fd-dialog-header .fd-bar--header{flex-direction:column;padding-bottom:1rem}.fdp-approval-flow-dialog fd-dialog fd-dialog-header p{font-size:1rem;margin:.65rem 0}.fdp-approval-flow-dialog fd-dialog fd-dialog-header p fd-icon{font-size:.875rem;color:#0854a0;color:var(--sapButton_IconColor, #0854a0);position:relative;cursor:pointer;margin-right:.75rem}.fdp-approval-flow-dialog fd-dialog fd-dialog-header.show-search{margin-bottom:0}.fdp-approval-flow-dialog fd-dialog fd-dialog-header.show-search .fd-bar--header{min-height:2.5rem;height:auto}.fdp-approval-flow-dialog fd-dialog fd-avatar{margin-right:.652rem}.fdp-approval-flow-dialog fd-dialog fd-dialog-body{padding:1rem}.fdp-approval-flow-dialog fd-dialog fd-dialog-body fdp-list{display:block;margin-left:-1rem;margin-right:-1rem}.fdp-approval-flow-dialog fd-dialog fdp-standard-list-item .fd-checkbox__label{position:relative;left:.3125rem}.fdp-approval-flow-dialog fd-dialog fdp-standard-list-item fd-avatar{margin-left:.1875rem}.fdp-approval-flow-dialog .fd-form-item{margin-bottom:1rem}[dir=rtl] .fdp-approval-flow-dialog fd-dialog-header p fd-icon,.fdp-approval-flow-dialog[dir=rtl] fd-dialog-header p fd-icon{margin-right:0;margin-left:.75rem}[dir=rtl] .fdp-approval-flow-dialog fd-avatar,.fdp-approval-flow-dialog[dir=rtl] fd-avatar{margin-right:0;margin-left:.652rem}[dir=rtl] .fdp-approval-flow-dialog fdp-standard-list-item .fd-checkbox__label,.fdp-approval-flow-dialog[dir=rtl] fdp-standard-list-item .fd-checkbox__label{left:auto;right:.3125rem}\n"], encapsulation: 2, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ApprovalFlowApproverDetailsComponent, [{
        type: Component,
        args: [{ selector: 'fdp-approval-flow-approver-details', changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, host: {
                    class: 'fdp-approval-flow-dialog fdp-approval-flow-approver-details'
                }, template: "<fd-dialog>\n    <fd-dialog-header [class.show-search]=\"!_userToShowDetails && _isListMode\">\n        <ng-template fdkTemplate=\"header\">\n            <p>\n                <fd-icon\n                    *ngIf=\"_userToShowDetails && _data.node?.approvers && _data.node!.approvers!.length > 1\"\n                    [glyph]=\"'navigation-' + (_data.rtl ? 'right' : 'left') + '-arrow'\"\n                    tabindex=\"0\"\n                    role=\"button\"\n                    (click)=\"_exitUserDetailsMode()\"\n                    (keyup.space)=\"_exitUserDetailsMode()\"\n                    (keyup.enter)=\"_exitUserDetailsMode()\"\n                ></fd-icon>\n                <ng-container *ngIf=\"_isListMode && !_userToShowDetails; else defaultHeader\"\n                    >{{ _data.node?.description }} ({{ _data.node?.approvers?.length ?? 0 }})</ng-container\n                >\n            </p>\n\n            <fdp-search-field\n                *ngIf=\"!_userToShowDetails && _isListMode\"\n                [placeholder]=\"'platformApprovalFlow.addNodeSearchPlaceholder' | fdTranslate\"\n                fdCompact\n                [suggestions]=\"[]\"\n                (inputChange)=\"_onSearchStringChange($event.text)\"\n            ></fdp-search-field>\n        </ng-template>\n    </fd-dialog-header>\n\n    <fd-dialog-body>\n        <fdp-approval-flow-user-details\n            *ngIf=\"_userToShowDetails\"\n            [user]=\"_userToShowDetails\"\n            [detailsTemplate]=\"_data.userDetailsTemplate\"\n            [details]=\"_userToShowDetailsData$\"\n        ></fdp-approval-flow-user-details>\n        <fdp-approval-flow-user-list\n            *ngIf=\"_isListMode\"\n            [users]=\"_listItems\"\n            (onUserClick)=\"_seeUserDetails($event)\"\n            (onSelectionChange)=\"_selectedUsers = $event\"\n        ></fdp-approval-flow-user-list>\n    </fd-dialog-body>\n\n    <fd-dialog-footer fdCompact>\n        <fd-dialog-footer-button *ngIf=\"_isListMode || (_userToShowDetails && _data.node?.approvers?.length === 1)\">\n            <button\n                fd-button\n                fd-dialog-decisive-button\n                fdType=\"emphasized\"\n                [label]=\"'platformApprovalFlow.userDetailsSendReminderBtnLabel' | fdTranslate\"\n                [disabled]=\"!_data.allowSendReminder || (_isListMode && !_selectedUsers.length)\"\n                (click)=\"_sendReminder()\"\n            ></button>\n        </fd-dialog-footer-button>\n\n        <fd-dialog-footer-button>\n            <button\n                fd-button\n                fd-initial-focus\n                fd-dialog-decisive-button\n                fdType=\"transparent\"\n                [label]=\"'platformApprovalFlow.userDetailsCancelBtnLabel' | fdTranslate\"\n                (click)=\"dialogRef.close('Cancel')\"\n            ></button>\n        </fd-dialog-footer-button>\n    </fd-dialog-footer>\n</fd-dialog>\n\n<ng-template #defaultHeader>\n    {{ 'platformApprovalFlow.userDetailsHeader' | fdTranslate }}\n</ng-template>\n", styles: [".fdp-approval-flow-dialog a{color:#0a6ed1;color:var(--sapLinkColor, #0a6ed1)}.fdp-approval-flow-dialog .fd-list--byline .fd-list__byline-left{width:100%}.fdp-approval-flow-dialog fd-popover{width:100%}.fdp-approval-flow-dialog fd-dialog fd-dialog-header{margin-bottom:1rem}.fdp-approval-flow-dialog fd-dialog fd-dialog-header .fd-bar--header{flex-direction:column;padding-bottom:1rem}.fdp-approval-flow-dialog fd-dialog fd-dialog-header p{font-size:1rem;margin:.65rem 0}.fdp-approval-flow-dialog fd-dialog fd-dialog-header p fd-icon{font-size:.875rem;color:#0854a0;color:var(--sapButton_IconColor, #0854a0);position:relative;cursor:pointer;margin-right:.75rem}.fdp-approval-flow-dialog fd-dialog fd-dialog-header.show-search{margin-bottom:0}.fdp-approval-flow-dialog fd-dialog fd-dialog-header.show-search .fd-bar--header{min-height:2.5rem;height:auto}.fdp-approval-flow-dialog fd-dialog fd-avatar{margin-right:.652rem}.fdp-approval-flow-dialog fd-dialog fd-dialog-body{padding:1rem}.fdp-approval-flow-dialog fd-dialog fd-dialog-body fdp-list{display:block;margin-left:-1rem;margin-right:-1rem}.fdp-approval-flow-dialog fd-dialog fdp-standard-list-item .fd-checkbox__label{position:relative;left:.3125rem}.fdp-approval-flow-dialog fd-dialog fdp-standard-list-item fd-avatar{margin-left:.1875rem}.fdp-approval-flow-dialog .fd-form-item{margin-bottom:1rem}[dir=rtl] .fdp-approval-flow-dialog fd-dialog-header p fd-icon,.fdp-approval-flow-dialog[dir=rtl] fd-dialog-header p fd-icon{margin-right:0;margin-left:.75rem}[dir=rtl] .fdp-approval-flow-dialog fd-avatar,.fdp-approval-flow-dialog[dir=rtl] fd-avatar{margin-right:0;margin-left:.652rem}[dir=rtl] .fdp-approval-flow-dialog fdp-standard-list-item .fd-checkbox__label,.fdp-approval-flow-dialog[dir=rtl] fdp-standard-list-item .fd-checkbox__label{left:auto;right:.3125rem}\n"] }]
    }], function () { return [{ type: i1.DialogRef }, { type: i0.ChangeDetectorRef }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwcm92YWwtZmxvdy1hcHByb3Zlci1kZXRhaWxzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvcGxhdGZvcm0vc3JjL2xpYi9hcHByb3ZhbC1mbG93L2FwcHJvdmFsLWZsb3ctYXBwcm92ZXItZGV0YWlscy9hcHByb3ZhbC1mbG93LWFwcHJvdmVyLWRldGFpbHMuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vbGlicy9wbGF0Zm9ybS9zcmMvbGliL2FwcHJvdmFsLWZsb3cvYXBwcm92YWwtZmxvdy1hcHByb3Zlci1kZXRhaWxzL2FwcHJvdmFsLWZsb3ctYXBwcm92ZXItZGV0YWlscy5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0gsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBR1QsaUJBQWlCLEVBQ3BCLE1BQU0sZUFBZSxDQUFDO0FBR3ZCLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUd6RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sWUFBWSxDQUFDOzs7Ozs7Ozs7Ozs7OztJQ1QxQixtQ0FRQztJQUhHLHNNQUFTLGVBQUEsNkJBQXNCLENBQUEsSUFBQyxzTUFDakIsZUFBQSw4QkFBc0IsQ0FBQSxJQURMLHNNQUVqQixlQUFBLDhCQUFzQixDQUFBLElBRkw7SUFHbkMsaUJBQVU7OztJQU5QLHdGQUFtRTs7O0lBT3ZFLDZCQUNLO0lBQUEsWUFBd0U7SUFBQSwwQkFDNUU7Ozs7SUFESSxlQUF3RTtJQUF4RSxzUkFBd0U7Ozs7O0lBSWpGLDRDQU1DO0lBREcsMk9BQWUsZUFBQSwwQ0FBa0MsQ0FBQSxJQUFDOztJQUNyRCxpQkFBbUI7O0lBSmhCLG1HQUE2RSwyQ0FBQTs7O0lBakJqRix5QkFBRztJQUNDLDJHQVFXO0lBQ1gscUhBRUM7SUFDTCxpQkFBSTtJQUVKLDZIQU1vQjs7OztJQW5C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SUFBSSxRQUMvQjtvQkFDRixLQUFLLEVBQUUsNkRBQTZEO2lCQUN2RSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gICAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gICAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgQ29tcG9uZW50LFxuICAgIE9uSW5pdCxcbiAgICBUZW1wbGF0ZVJlZixcbiAgICBWaWV3RW5jYXBzdWxhdGlvblxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgRGlhbG9nUmVmIH0gZnJvbSAnQGZ1bmRhbWVudGFsLW5neC9jb3JlL2RpYWxvZyc7XG5cbmltcG9ydCB7IEFwcHJvdmFsTm9kZSwgQXBwcm92YWxVc2VyIH0gZnJvbSAnLi4vaW50ZXJmYWNlcyc7XG5pbXBvcnQgeyBmaWx0ZXJCeU5hbWUgfSBmcm9tICcuLi9oZWxwZXJzJztcbmltcG9ydCB7IEFwcHJvdmFsRmxvd1VzZXJEYXRhU291cmNlIH0gZnJvbSAnQGZ1bmRhbWVudGFsLW5neC9wbGF0Zm9ybS9zaGFyZWQnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEFwcHJvdmFsRmxvd0FwcHJvdmVyRGV0YWlsc0RpYWxvZ1JlZkRhdGEge1xuICAgIG5vZGU/OiBBcHByb3ZhbE5vZGU7XG4gICAgd2F0Y2hlcj86IEFwcHJvdmFsVXNlcjtcbiAgICBhbGxvd1NlbmRSZW1pbmRlcj86IGJvb2xlYW47XG4gICAgdXNlckRhdGFTb3VyY2U6IEFwcHJvdmFsRmxvd1VzZXJEYXRhU291cmNlPEFwcHJvdmFsVXNlcj47XG4gICAgdXNlckRldGFpbHNUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcbiAgICBydGw/OiBib29sZWFuO1xufVxuXG4vKipcbiAqIEBkZXByZWNhdGVkXG4gKiBBcHByb3ZhbEZsb3dBcHByb3ZlckRldGFpbHMgY29tcG9uZW50IGlzIGRlcHJpY2F0ZWQgc2luY2UgdmVyc2lvbiAwLjQwLjBcbiAqL1xuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdmZHAtYXBwcm92YWwtZmxvdy1hcHByb3Zlci1kZXRhaWxzJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vYXBwcm92YWwtZmxvdy1hcHByb3Zlci1kZXRhaWxzLmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnLi4vc3R5bGVzL2FwcHJvdmFsLWZsb3ctZGlhbG9nLnNjc3MnXSxcbiAgICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICAgIGhvc3Q6IHtcbiAgICAgICAgY2xhc3M6ICdmZHAtYXBwcm92YWwtZmxvdy1kaWFsb2cgZmRwLWFwcHJvdmFsLWZsb3ctYXBwcm92ZXItZGV0YWlscydcbiAgICB9XG59KVxuZXhwb3J0IGNsYXNzIEFwcHJvdmFsRmxvd0FwcHJvdmVyRGV0YWlsc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgLyoqIEBoaWRkZW4gKi9cbiAgICBfaXNMaXN0TW9kZSA9IGZhbHNlO1xuXG4gICAgLyoqIEBoaWRkZW4gKi9cbiAgICBfbGlzdEl0ZW1zOiBBcHByb3ZhbFVzZXJbXSA9IFtdO1xuXG4gICAgLyoqIEBoaWRkZW4gKi9cbiAgICBfc2VsZWN0ZWRVc2VyczogQXBwcm92YWxVc2VyW10gPSBbXTtcblxuICAgIC8qKiBAaGlkZGVuICovXG4gICAgX3VzZXJUb1Nob3dEZXRhaWxzPzogQXBwcm92YWxVc2VyO1xuXG4gICAgLyoqIEBoaWRkZW4gKi9cbiAgICBfdXNlclRvU2hvd0RldGFpbHNEYXRhJDogT2JzZXJ2YWJsZTxhbnk+O1xuXG4gICAgLyoqIEBoaWRkZW4gKi9cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHVibGljIGRpYWxvZ1JlZjogRGlhbG9nUmVmPEFwcHJvdmFsRmxvd0FwcHJvdmVyRGV0YWlsc0RpYWxvZ1JlZkRhdGE+LFxuICAgICAgICBwcml2YXRlIF9jZHI6IENoYW5nZURldGVjdG9yUmVmXG4gICAgKSB7fVxuXG4gICAgLyoqIEBoaWRkZW4gKi9cbiAgICBnZXQgX2RhdGEoKTogQXBwcm92YWxGbG93QXBwcm92ZXJEZXRhaWxzRGlhbG9nUmVmRGF0YSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRpYWxvZ1JlZi5kYXRhO1xuICAgIH1cblxuICAgIC8qKiBAaGlkZGVuICovXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuX2lzTGlzdE1vZGUgPSAodGhpcy5fZGF0YS5ub2RlPy5hcHByb3ZlcnMubGVuZ3RoID8/IDApID4gMTtcblxuICAgICAgICBpZiAodGhpcy5faXNMaXN0TW9kZSkge1xuICAgICAgICAgICAgdGhpcy5fc2V0TGlzdEl0ZW1zKHRoaXMuX2RhdGEubm9kZT8uYXBwcm92ZXJzID8/IFtdKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IHVzZXIgPSB0aGlzLl9kYXRhLndhdGNoZXIgfHwgdGhpcy5fZGF0YS5ub2RlPy5hcHByb3ZlcnNbMF07XG4gICAgICAgICAgICBpZiAodXNlcikge1xuICAgICAgICAgICAgICAgIHRoaXMuX3NlZVVzZXJEZXRhaWxzKHVzZXIpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmRpYWxvZ1JlZi5jbG9zZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqIEBoaWRkZW4gKi9cbiAgICBfc2V0TGlzdEl0ZW1zKGl0ZW1zOiBBcHByb3ZhbFVzZXJbXSA9IFtdKTogdm9pZCB7XG4gICAgICAgIHRoaXMuX2xpc3RJdGVtcyA9IFsuLi5pdGVtc107XG4gICAgICAgIHRoaXMuX2Nkci5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgfVxuXG4gICAgLyoqIEBoaWRkZW4gKi9cbiAgICBfZXhpdFVzZXJEZXRhaWxzTW9kZSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5fdXNlclRvU2hvd0RldGFpbHMgPSB1bmRlZmluZWQ7XG4gICAgICAgIHRoaXMuX2lzTGlzdE1vZGUgPSB0cnVlO1xuICAgIH1cblxuICAgIC8qKiBAaGlkZGVuICovXG4gICAgX3NlZVVzZXJEZXRhaWxzKHVzZXI6IEFwcHJvdmFsVXNlcik6IHZvaWQge1xuICAgICAgICB0aGlzLl91c2VyVG9TaG93RGV0YWlscyA9IHVzZXI7XG4gICAgICAgIHRoaXMuX3VzZXJUb1Nob3dEZXRhaWxzRGF0YSQgPSB0aGlzLl9kYXRhLnVzZXJEYXRhU291cmNlLmRhdGFQcm92aWRlci5nZXRPbmUobmV3IE1hcChbWydpZCcsIHVzZXIuaWRdXSkpO1xuICAgICAgICB0aGlzLl9pc0xpc3RNb2RlID0gZmFsc2U7XG4gICAgICAgIHRoaXMuX3NlbGVjdGVkVXNlcnMgPSBbXTtcbiAgICAgICAgdGhpcy5fY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgICB9XG5cbiAgICAvKiogQGhpZGRlbiAqL1xuICAgIF9zZW5kUmVtaW5kZXIoKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IHJlbWluZGVyVGFyZ2V0cyA9IHRoaXMuX2lzTGlzdE1vZGUgPyB0aGlzLl9zZWxlY3RlZFVzZXJzIDogdGhpcy5fZGF0YS5ub2RlPy5hcHByb3ZlcnM7XG4gICAgICAgIHRoaXMuZGlhbG9nUmVmLmNsb3NlKHJlbWluZGVyVGFyZ2V0cyk7XG4gICAgfVxuXG4gICAgLyoqIEBoaWRkZW4gKi9cbiAgICBfb25TZWFyY2hTdHJpbmdDaGFuZ2Uoc2VhcmNoU3RyaW5nOiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgICAgaWYgKCFzZWFyY2hTdHJpbmcpIHtcbiAgICAgICAgICAgIHRoaXMuX3NldExpc3RJdGVtcyh0aGlzLl9kYXRhLm5vZGU/LmFwcHJvdmVycyk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9zZXRMaXN0SXRlbXModGhpcy5fZGF0YS5ub2RlPy5hcHByb3ZlcnMuZmlsdGVyKCh1c2VyKSA9PiBmaWx0ZXJCeU5hbWUodXNlciwgc2VhcmNoU3RyaW5nKSkpO1xuICAgIH1cbn1cbiIsIjxmZC1kaWFsb2c+XG4gICAgPGZkLWRpYWxvZy1oZWFkZXIgW2NsYXNzLnNob3ctc2VhcmNoXT1cIiFfdXNlclRvU2hvd0RldGFpbHMgJiYgX2lzTGlzdE1vZGVcIj5cbiAgICAgICAgPG5nLXRlbXBsYXRlIGZka1RlbXBsYXRlPVwiaGVhZGVyXCI+XG4gICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICA8ZmQtaWNvblxuICAgICAgICAgICAgICAgICAgICAqbmdJZj1cIl91c2VyVG9TaG93RGV0YWlscyAmJiBfZGF0YS5ub2RlPy5hcHByb3ZlcnMgJiYgX2RhdGEubm9kZSEuYXBwcm92ZXJzIS5sZW5ndGggPiAxXCJcbiAgICAgICAgICAgICAgICAgICAgW2dseXBoXT1cIiduYXZpZ2F0aW9uLScgKyAoX2RhdGEucnRsID8gJ3JpZ2h0JyA6ICdsZWZ0JykgKyAnLWFycm93J1wiXG4gICAgICAgICAgICAgICAgICAgIHRhYmluZGV4PVwiMFwiXG4gICAgICAgICAgICAgICAgICAgIHJvbGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAoY2xpY2spPVwiX2V4aXRVc2VyRGV0YWlsc01vZGUoKVwiXG4gICAgICAgICAgICAgICAgICAgIChrZXl1cC5zcGFjZSk9XCJfZXhpdFVzZXJEZXRhaWxzTW9kZSgpXCJcbiAgICAgICAgICAgICAgICAgICAgKGtleXVwLmVudGVyKT1cIl9leGl0VXNlckRldGFpbHNNb2RlKClcIlxuICAgICAgICAgICAgICAgID48L2ZkLWljb24+XG4gICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIl9pc0xpc3RNb2RlICYmICFfdXNlclRvU2hvd0RldGFpbHM7IGVsc2UgZGVmYXVsdEhlYWRlclwiXG4gICAgICAgICAgICAgICAgICAgID57eyBfZGF0YS5ub2RlPy5kZXNjcmlwdGlvbiB9fSAoe3sgX2RhdGEubm9kZT8uYXBwcm92ZXJzPy5sZW5ndGggPz8gMCB9fSk8L25nLWNvbnRhaW5lclxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgIDwvcD5cblxuICAgICAgICAgICAgPGZkcC1zZWFyY2gtZmllbGRcbiAgICAgICAgICAgICAgICAqbmdJZj1cIiFfdXNlclRvU2hvd0RldGFpbHMgJiYgX2lzTGlzdE1vZGVcIlxuICAgICAgICAgICAgICAgIFtwbGFjZWhvbGRlcl09XCIncGxhdGZvcm1BcHByb3ZhbEZsb3cuYWRkTm9kZVNlYXJjaFBsYWNlaG9sZGVyJyB8IGZkVHJhbnNsYXRlXCJcbiAgICAgICAgICAgICAgICBmZENvbXBhY3RcbiAgICAgICAgICAgICAgICBbc3VnZ2VzdGlvbnNdPVwiW11cIlxuICAgICAgICAgICAgICAgIChpbnB1dENoYW5nZSk9XCJfb25TZWFyY2hTdHJpbmdDaGFuZ2UoJGV2ZW50LnRleHQpXCJcbiAgICAgICAgICAgID48L2ZkcC1zZWFyY2gtZmllbGQ+XG4gICAgICAgIDwvbmctdGVtcGxhdGU+XG4gICAgPC9mZC1kaWFsb2ctaGVhZGVyPlxuXG4gICAgPGZkLWRpYWxvZy1ib2R5PlxuICAgICAgICA8ZmRwLWFwcHJvdmFsLWZsb3ctdXNlci1kZXRhaWxzXG4gICAgICAgICAgICAqbmdJZj1cIl91c2VyVG9TaG93RGV0YWlsc1wiXG4gICAgICAgICAgICBbdXNlcl09XCJfdXNlclRvU2hvd0RldGFpbHNcIlxuICAgICAgICAgICAgW2RldGFpbHNUZW1wbGF0ZV09XCJfZGF0YS51c2VyRGV0YWlsc1RlbXBsYXRlXCJcbiAgICAgICAgICAgIFtkZXRhaWxzXT1cIl91c2VyVG9TaG93RGV0YWlsc0RhdGEkXCJcbiAgICAgICAgPjwvZmRwLWFwcHJvdmFsLWZsb3ctdXNlci1kZXRhaWxzPlxuICAgICAgICA8ZmRwLWFwcHJvdmFsLWZsb3ctdXNlci1saXN0XG4gICAgICAgICAgICAqbmdJZj1cIl9pc0xpc3RNb2RlXCJcbiAgICAgICAgICAgIFt1c2Vyc109XCJfbGlzdEl0ZW1zXCJcbiAgICAgICAgICAgIChvblVzZXJDbGljayk9XCJfc2VlVXNlckRldGFpbHMoJGV2ZW50KVwiXG4gICAgICAgICAgICAob25TZWxlY3Rpb25DaGFuZ2UpPVwiX3NlbGVjdGVkVXNlcnMgPSAkZXZlbnRcIlxuICAgICAgICA+PC9mZHAtYXBwcm92YWwtZmxvdy11c2VyLWxpc3Q+XG4gICAgPC9mZC1kaWFsb2ctYm9keT5cblxuICAgIDxmZC1kaWFsb2ctZm9vdGVyIGZkQ29tcGFjdD5cbiAgICAgICAgPGZkLWRpYWxvZy1mb290ZXItYnV0dG9uICpuZ0lmPVwiX2lzTGlzdE1vZGUgfHwgKF91c2VyVG9TaG93RGV0YWlscyAmJiBfZGF0YS5ub2RlPy5hcHByb3ZlcnM/Lmxlbmd0aCA9PT0gMSlcIj5cbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICBmZC1idXR0b25cbiAgICAgICAgICAgICAgICBmZC1kaWFsb2ctZGVjaXNpdmUtYnV0dG9uXG4gICAgICAgICAgICAgICAgZmRUeXBlPVwiZW1waGFzaXplZFwiXG4gICAgICAgICAgICAgICAgW2xhYmVsXT1cIidwbGF0Zm9ybUFwcHJvdmFsRmxvdy51c2VyRGV0YWlsc1NlbmRSZW1pbmRlckJ0bkxhYmVsJyB8IGZkVHJhbnNsYXRlXCJcbiAgICAgICAgICAgICAgICBbZGlzYWJsZWRdPVwiIV9kYXRhLmFsbG93U2VuZFJlbWluZGVyIHx8IChfaXNMaXN0TW9kZSAmJiAhX3NlbGVjdGVkVXNlcnMubGVuZ3RoKVwiXG4gICAgICAgICAgICAgICAgKGNsaWNrKT1cIl9zZW5kUmVtaW5kZXIoKVwiXG4gICAgICAgICAgICA+PC9idXR0b24+XG4gICAgICAgIDwvZmQtZGlhbG9nLWZvb3Rlci1idXR0b24+XG5cbiAgICAgICAgPGZkLWRpYWxvZy1mb290ZXItYnV0dG9uPlxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgIGZkLWJ1dHRvblxuICAgICAgICAgICAgICAgIGZkLWluaXRpYWwtZm9jdXNcbiAgICAgICAgICAgICAgICBmZC1kaWFsb2ctZGVjaXNpdmUtYnV0dG9uXG4gICAgICAgICAgICAgICAgZmRUeXBlPVwidHJhbnNwYXJlbnRcIlxuICAgICAgICAgICAgICAgIFtsYWJlbF09XCIncGxhdGZvcm1BcHByb3ZhbEZsb3cudXNlckRldGFpbHNDYW5jZWxCdG5MYWJlbCcgfCBmZFRyYW5zbGF0ZVwiXG4gICAgICAgICAgICAgICAgKGNsaWNrKT1cImRpYWxvZ1JlZi5jbG9zZSgnQ2FuY2VsJylcIlxuICAgICAgICAgICAgPjwvYnV0dG9uPlxuICAgICAgICA8L2ZkLWRpYWxvZy1mb290ZXItYnV0dG9uPlxuICAgIDwvZmQtZGlhbG9nLWZvb3Rlcj5cbjwvZmQtZGlhbG9nPlxuXG48bmctdGVtcGxhdGUgI2RlZmF1bHRIZWFkZXI+XG4gICAge3sgJ3BsYXRmb3JtQXBwcm92YWxGbG93LnVzZXJEZXRhaWxzSGVhZGVyJyB8IGZkVHJhbnNsYXRlIH19XG48L25nLXRlbXBsYXRlPlxuIl19