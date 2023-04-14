import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { DialogRef } from '@fundamental-ngx/core/dialog';
import { APPROVAL_FLOW_NODE_TYPES } from '../approval-flow-add-node/approval-flow-add-node.component';
import * as i0 from "@angular/core";
import * as i1 from "@fundamental-ngx/core/dialog";
import * as i2 from "@angular/common";
import * as i3 from "@angular/forms";
import * as i4 from "@fundamental-ngx/core/content-density";
import * as i5 from "@fundamental-ngx/core/button";
import * as i6 from "@fundamental-ngx/cdk/utils";
import * as i7 from "@fundamental-ngx/core/checkbox";
import * as i8 from "@fundamental-ngx/core/form";
import * as i9 from "@fundamental-ngx/core/radio";
import * as i10 from "@fundamental-ngx/i18n";
function ApprovalFlowSelectTypeComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p");
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "fdTranslate");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(2, 1, "platformApprovalFlow.selectTypeDialogMoveApproverAs"));
} }
function ApprovalFlowSelectTypeComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 4)(1, "fd-checkbox", 10);
    i0.ɵɵlistener("ngModelChange", function ApprovalFlowSelectTypeComponent_div_16_Template_fd_checkbox_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r3); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2._toNextSerial = $event); });
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "fdTranslate");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngModel", ctx_r1._toNextSerial);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(3, 2, "platformApprovalFlow.addNodeDialogAddToNext"), " ");
} }
/**
 * @deprecated
 * ApprovalFlowSelectType component is depricated since version 0.40.0
 */
export class ApprovalFlowSelectTypeComponent {
    /** @hidden */
    constructor(_dialogRef) {
        this._dialogRef = _dialogRef;
        /** @hidden */
        this._nodeType = APPROVAL_FLOW_NODE_TYPES.SERIAL;
        /** @hidden */
        this._nodeTypes = APPROVAL_FLOW_NODE_TYPES;
        /** @hidden */
        this._toNextSerial = false;
    }
    /** @hidden */
    _submit() {
        this._dialogRef.close({ type: this._nodeType, toNextSerial: this._toNextSerial });
    }
}
ApprovalFlowSelectTypeComponent.ɵfac = function ApprovalFlowSelectTypeComponent_Factory(t) { return new (t || ApprovalFlowSelectTypeComponent)(i0.ɵɵdirectiveInject(i1.DialogRef)); };
ApprovalFlowSelectTypeComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ApprovalFlowSelectTypeComponent, selectors: [["fdp-approval-flow-select-type"]], hostAttrs: [1, "fdp-approval-flow-dialog", "fdp-approval-flow-select-type"], decls: 25, vars: 20, consts: [["fdkTemplate", "header"], ["fdCompact", ""], [1, "fd-form-label"], [1, "fdp-approval-flow-select-type__form"], ["fd-form-item", ""], ["id", "select-type-parallel", "name", "select-type-parallel", 3, "value", "ngModel", "ngModelChange"], ["id", "select-type-serial", "name", "select-type-serial", 3, "value", "ngModel", "ngModelChange"], ["fd-form-item", "", 4, "ngIf"], ["fd-button", "", "fd-dialog-decisive-button", "", "fdType", "emphasized", 3, "label", "click"], ["fd-button", "", "fd-initial-focus", "", "fd-dialog-decisive-button", "", "fdType", "transparent", 3, "label", "click"], [3, "ngModel", "ngModelChange"]], template: function ApprovalFlowSelectTypeComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "fd-dialog")(1, "fd-dialog-header");
        i0.ɵɵtemplate(2, ApprovalFlowSelectTypeComponent_ng_template_2_Template, 3, 3, "ng-template", 0);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "fd-dialog-body", 1)(4, "span", 2);
        i0.ɵɵtext(5);
        i0.ɵɵpipe(6, "fdTranslate");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(7, "fd-form-group", 3)(8, "div", 4)(9, "fd-radio-button", 5);
        i0.ɵɵlistener("ngModelChange", function ApprovalFlowSelectTypeComponent_Template_fd_radio_button_ngModelChange_9_listener($event) { return ctx._nodeType = $event; });
        i0.ɵɵtext(10);
        i0.ɵɵpipe(11, "fdTranslate");
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(12, "div", 4)(13, "fd-radio-button", 6);
        i0.ɵɵlistener("ngModelChange", function ApprovalFlowSelectTypeComponent_Template_fd_radio_button_ngModelChange_13_listener($event) { return ctx._nodeType = $event; });
        i0.ɵɵtext(14);
        i0.ɵɵpipe(15, "fdTranslate");
        i0.ɵɵelementEnd()();
        i0.ɵɵtemplate(16, ApprovalFlowSelectTypeComponent_div_16_Template, 4, 4, "div", 7);
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(17, "fd-dialog-footer", 1);
        i0.ɵɵelementContainerStart(18);
        i0.ɵɵelementStart(19, "fd-dialog-footer-button")(20, "button", 8);
        i0.ɵɵlistener("click", function ApprovalFlowSelectTypeComponent_Template_button_click_20_listener() { return ctx._submit(); });
        i0.ɵɵpipe(21, "fdTranslate");
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(22, "fd-dialog-footer-button")(23, "button", 9);
        i0.ɵɵlistener("click", function ApprovalFlowSelectTypeComponent_Template_button_click_23_listener() { return ctx._dialogRef.close(); });
        i0.ɵɵpipe(24, "fdTranslate");
        i0.ɵɵelementEnd()();
        i0.ɵɵelementContainerEnd();
        i0.ɵɵelementEnd()();
    } if (rf & 2) {
        i0.ɵɵadvance(5);
        i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(6, 10, "platformApprovalFlow.selectTypeDialogParallelOrSerial"), " ");
        i0.ɵɵadvance(4);
        i0.ɵɵproperty("value", ctx._nodeTypes.PARALLEL)("ngModel", ctx._nodeType);
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(11, 12, "platformApprovalFlow.selectTypeDialogNodeTypeParallel"), " ");
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("value", ctx._nodeTypes.SERIAL)("ngModel", ctx._nodeType);
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(15, 14, "platformApprovalFlow.selectTypeDialogNodeTypeSerial"), " ");
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", ctx._nodeType === ctx._nodeTypes.PARALLEL);
        i0.ɵɵadvance(4);
        i0.ɵɵproperty("label", i0.ɵɵpipeBind1(21, 16, "platformApprovalFlow.selectTypeDialogConfirmButton"));
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("label", i0.ɵɵpipeBind1(24, 18, "platformApprovalFlow.selectTypeDialogCancelButton"));
    } }, dependencies: [i2.NgIf, i3.NgControlStatus, i3.NgModel, i4.ContentDensityDirective, i5.ButtonComponent, i1.DialogComponent, i1.DialogBodyComponent, i1.DialogFooterComponent, i1.DialogHeaderComponent, i1.DialogFooterButtonComponent, i1.DialogDecisiveButtonDirective, i6.TemplateDirective, i6.InitialFocusDirective, i6.DeprecatedInitialFocusDirective, i7.CheckboxComponent, i8.FormItemComponent, i8.FormGroupComponent, i9.RadioButtonComponent, i10.FdTranslatePipe], styles: [".fdp-approval-flow-dialog a{color:#0a6ed1;color:var(--sapLinkColor, #0a6ed1)}.fdp-approval-flow-dialog .fd-list--byline .fd-list__byline-left{width:100%}.fdp-approval-flow-dialog fd-popover{width:100%}.fdp-approval-flow-dialog fd-dialog fd-dialog-header{margin-bottom:1rem}.fdp-approval-flow-dialog fd-dialog fd-dialog-header .fd-bar--header{flex-direction:column;padding-bottom:1rem}.fdp-approval-flow-dialog fd-dialog fd-dialog-header p{font-size:1rem;margin:.65rem 0}.fdp-approval-flow-dialog fd-dialog fd-dialog-header p fd-icon{font-size:.875rem;color:#0854a0;color:var(--sapButton_IconColor, #0854a0);position:relative;cursor:pointer;margin-right:.75rem}.fdp-approval-flow-dialog fd-dialog fd-dialog-header.show-search{margin-bottom:0}.fdp-approval-flow-dialog fd-dialog fd-dialog-header.show-search .fd-bar--header{min-height:2.5rem;height:auto}.fdp-approval-flow-dialog fd-dialog fd-avatar{margin-right:.652rem}.fdp-approval-flow-dialog fd-dialog fd-dialog-body{padding:1rem}.fdp-approval-flow-dialog fd-dialog fd-dialog-body fdp-list{display:block;margin-left:-1rem;margin-right:-1rem}.fdp-approval-flow-dialog fd-dialog fdp-standard-list-item .fd-checkbox__label{position:relative;left:.3125rem}.fdp-approval-flow-dialog fd-dialog fdp-standard-list-item fd-avatar{margin-left:.1875rem}.fdp-approval-flow-dialog .fd-form-item{margin-bottom:1rem}[dir=rtl] .fdp-approval-flow-dialog fd-dialog-header p fd-icon,.fdp-approval-flow-dialog[dir=rtl] fd-dialog-header p fd-icon{margin-right:0;margin-left:.75rem}[dir=rtl] .fdp-approval-flow-dialog fd-avatar,.fdp-approval-flow-dialog[dir=rtl] fd-avatar{margin-right:0;margin-left:.652rem}[dir=rtl] .fdp-approval-flow-dialog fdp-standard-list-item .fd-checkbox__label,.fdp-approval-flow-dialog[dir=rtl] fdp-standard-list-item .fd-checkbox__label{left:auto;right:.3125rem}\n", ".fdp-approval-flow-select-type .fd-dialog__body{width:24rem}.fdp-approval-flow-select-type .fd-dialog__body .fd-form-item{margin-bottom:0}\n"], encapsulation: 2, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ApprovalFlowSelectTypeComponent, [{
        type: Component,
        args: [{ selector: 'fdp-approval-flow-select-type', changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, host: {
                    class: 'fdp-approval-flow-dialog fdp-approval-flow-select-type'
                }, template: "<fd-dialog>\n    <fd-dialog-header>\n        <ng-template fdkTemplate=\"header\">\n            <p>{{ 'platformApprovalFlow.selectTypeDialogMoveApproverAs' | fdTranslate }}</p>\n        </ng-template>\n    </fd-dialog-header>\n    <fd-dialog-body fdCompact>\n        <span class=\"fd-form-label\">\n            {{ 'platformApprovalFlow.selectTypeDialogParallelOrSerial' | fdTranslate }}\n        </span>\n\n        <fd-form-group class=\"fdp-approval-flow-select-type__form\">\n            <div fd-form-item>\n                <fd-radio-button\n                    [value]=\"_nodeTypes.PARALLEL\"\n                    [(ngModel)]=\"_nodeType\"\n                    id=\"select-type-parallel\"\n                    name=\"select-type-parallel\"\n                >\n                    {{ 'platformApprovalFlow.selectTypeDialogNodeTypeParallel' | fdTranslate }}\n                </fd-radio-button>\n            </div>\n\n            <div fd-form-item>\n                <fd-radio-button\n                    [value]=\"_nodeTypes.SERIAL\"\n                    [(ngModel)]=\"_nodeType\"\n                    id=\"select-type-serial\"\n                    name=\"select-type-serial\"\n                >\n                    {{ 'platformApprovalFlow.selectTypeDialogNodeTypeSerial' | fdTranslate }}\n                </fd-radio-button>\n            </div>\n\n            <div *ngIf=\"_nodeType === _nodeTypes.PARALLEL\" fd-form-item>\n                <fd-checkbox [(ngModel)]=\"_toNextSerial\">\n                    {{ 'platformApprovalFlow.addNodeDialogAddToNext' | fdTranslate }}\n                </fd-checkbox>\n            </div>\n        </fd-form-group>\n    </fd-dialog-body>\n\n    <fd-dialog-footer fdCompact>\n        <ng-container>\n            <fd-dialog-footer-button>\n                <button\n                    fd-button\n                    fd-dialog-decisive-button\n                    fdType=\"emphasized\"\n                    [label]=\"'platformApprovalFlow.selectTypeDialogConfirmButton' | fdTranslate\"\n                    (click)=\"_submit()\"\n                ></button>\n            </fd-dialog-footer-button>\n\n            <fd-dialog-footer-button>\n                <button\n                    fd-button\n                    fd-initial-focus\n                    fd-dialog-decisive-button\n                    fdType=\"transparent\"\n                    [label]=\"'platformApprovalFlow.selectTypeDialogCancelButton' | fdTranslate\"\n                    (click)=\"_dialogRef.close()\"\n                ></button>\n            </fd-dialog-footer-button>\n        </ng-container>\n    </fd-dialog-footer>\n</fd-dialog>\n", styles: [".fdp-approval-flow-dialog a{color:#0a6ed1;color:var(--sapLinkColor, #0a6ed1)}.fdp-approval-flow-dialog .fd-list--byline .fd-list__byline-left{width:100%}.fdp-approval-flow-dialog fd-popover{width:100%}.fdp-approval-flow-dialog fd-dialog fd-dialog-header{margin-bottom:1rem}.fdp-approval-flow-dialog fd-dialog fd-dialog-header .fd-bar--header{flex-direction:column;padding-bottom:1rem}.fdp-approval-flow-dialog fd-dialog fd-dialog-header p{font-size:1rem;margin:.65rem 0}.fdp-approval-flow-dialog fd-dialog fd-dialog-header p fd-icon{font-size:.875rem;color:#0854a0;color:var(--sapButton_IconColor, #0854a0);position:relative;cursor:pointer;margin-right:.75rem}.fdp-approval-flow-dialog fd-dialog fd-dialog-header.show-search{margin-bottom:0}.fdp-approval-flow-dialog fd-dialog fd-dialog-header.show-search .fd-bar--header{min-height:2.5rem;height:auto}.fdp-approval-flow-dialog fd-dialog fd-avatar{margin-right:.652rem}.fdp-approval-flow-dialog fd-dialog fd-dialog-body{padding:1rem}.fdp-approval-flow-dialog fd-dialog fd-dialog-body fdp-list{display:block;margin-left:-1rem;margin-right:-1rem}.fdp-approval-flow-dialog fd-dialog fdp-standard-list-item .fd-checkbox__label{position:relative;left:.3125rem}.fdp-approval-flow-dialog fd-dialog fdp-standard-list-item fd-avatar{margin-left:.1875rem}.fdp-approval-flow-dialog .fd-form-item{margin-bottom:1rem}[dir=rtl] .fdp-approval-flow-dialog fd-dialog-header p fd-icon,.fdp-approval-flow-dialog[dir=rtl] fd-dialog-header p fd-icon{margin-right:0;margin-left:.75rem}[dir=rtl] .fdp-approval-flow-dialog fd-avatar,.fdp-approval-flow-dialog[dir=rtl] fd-avatar{margin-right:0;margin-left:.652rem}[dir=rtl] .fdp-approval-flow-dialog fdp-standard-list-item .fd-checkbox__label,.fdp-approval-flow-dialog[dir=rtl] fdp-standard-list-item .fd-checkbox__label{left:auto;right:.3125rem}\n", ".fdp-approval-flow-select-type .fd-dialog__body{width:24rem}.fdp-approval-flow-select-type .fd-dialog__body .fd-form-item{margin-bottom:0}\n"] }]
    }], function () { return [{ type: i1.DialogRef }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwcm92YWwtZmxvdy1zZWxlY3QtdHlwZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9saWJzL3BsYXRmb3JtL3NyYy9saWIvYXBwcm92YWwtZmxvdy9hcHByb3ZhbC1mbG93LXNlbGVjdC10eXBlL2FwcHJvdmFsLWZsb3ctc2VsZWN0LXR5cGUuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vbGlicy9wbGF0Zm9ybS9zcmMvbGliL2FwcHJvdmFsLWZsb3cvYXBwcm92YWwtZmxvdy1zZWxlY3QtdHlwZS9hcHByb3ZhbC1mbG93LXNlbGVjdC10eXBlLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFdEYsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBRXpELE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLDREQUE0RCxDQUFDOzs7Ozs7Ozs7Ozs7O0lDRDFGLHlCQUFHO0lBQUEsWUFBeUU7O0lBQUEsaUJBQUk7O0lBQTdFLGVBQXlFO0lBQXpFLGlHQUF5RTs7OztJQStCNUUsOEJBQTRELHNCQUFBO0lBQzNDLHlQQUEyQjtJQUNwQyxZQUNKOztJQUFBLGlCQUFjLEVBQUE7OztJQUZELGVBQTJCO0lBQTNCLDhDQUEyQjtJQUNwQyxlQUNKO0lBREksb0dBQ0o7O0FEMUJoQjs7O0dBR0c7QUFXSCxNQUFNLE9BQU8sK0JBQStCO0lBVXhDLGNBQWM7SUFDZCxZQUE0QixVQUFxQjtRQUFyQixlQUFVLEdBQVYsVUFBVSxDQUFXO1FBVmpELGNBQWM7UUFDZCxjQUFTLEdBQUcsd0JBQXdCLENBQUMsTUFBTSxDQUFDO1FBRTVDLGNBQWM7UUFDZCxlQUFVLEdBQUcsd0JBQXdCLENBQUM7UUFFdEMsY0FBYztRQUNkLGtCQUFhLEdBQUcsS0FBSyxDQUFDO0lBRzhCLENBQUM7SUFFckQsY0FBYztJQUNkLE9BQU87UUFDSCxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsU0FBUyxFQUFFLFlBQVksRUFBRSxJQUFJLENBQUMsYUFBYSxFQUE4QixDQUFDLENBQUM7SUFDbEgsQ0FBQzs7OEdBaEJRLCtCQUErQjtrRkFBL0IsK0JBQStCO1FDekI1QyxpQ0FBVyx1QkFBQTtRQUVILGdHQUVjO1FBQ2xCLGlCQUFtQjtRQUNuQix5Q0FBMEIsY0FBQTtRQUVsQixZQUNKOztRQUFBLGlCQUFPO1FBRVAsd0NBQTJELGFBQUEseUJBQUE7UUFJL0MscUtBQXVCO1FBSXZCLGFBQ0o7O1FBQUEsaUJBQWtCLEVBQUE7UUFHdEIsK0JBQWtCLDBCQUFBO1FBR1Ysc0tBQXVCO1FBSXZCLGFBQ0o7O1FBQUEsaUJBQWtCLEVBQUE7UUFHdEIsa0ZBSU07UUFDVixpQkFBZ0IsRUFBQTtRQUdwQiw0Q0FBNEI7UUFDeEIsOEJBQWM7UUFDVixnREFBeUIsaUJBQUE7UUFNakIsNkdBQVMsYUFBUyxJQUFDOztRQUN0QixpQkFBUyxFQUFBO1FBR2QsZ0RBQXlCLGlCQUFBO1FBT2pCLDZHQUFTLHNCQUFrQixJQUFDOztRQUMvQixpQkFBUyxFQUFBO1FBRWxCLDBCQUFlO1FBQ25CLGlCQUFtQixFQUFBOztRQXpEWCxlQUNKO1FBREksK0dBQ0o7UUFLWSxlQUE2QjtRQUE3QiwrQ0FBNkIsMEJBQUE7UUFLN0IsZUFDSjtRQURJLGdIQUNKO1FBS0ksZUFBMkI7UUFBM0IsNkNBQTJCLDBCQUFBO1FBSzNCLGVBQ0o7UUFESSw4R0FDSjtRQUdFLGVBQXVDO1FBQXZDLGdFQUF1QztRQWVyQyxlQUE0RTtRQUE1RSxvR0FBNEU7UUFXNUUsZUFBMkU7UUFBM0UsbUdBQTJFOzt1RkRuQ2xGLCtCQUErQjtjQVYzQyxTQUFTOzJCQUNJLCtCQUErQixtQkFHeEIsdUJBQXVCLENBQUMsTUFBTSxpQkFDaEMsaUJBQWlCLENBQUMsSUFBSSxRQUMvQjtvQkFDRixLQUFLLEVBQUUsd0RBQXdEO2lCQUNsRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IERpYWxvZ1JlZiB9IGZyb20gJ0BmdW5kYW1lbnRhbC1uZ3gvY29yZS9kaWFsb2cnO1xuXG5pbXBvcnQgeyBBUFBST1ZBTF9GTE9XX05PREVfVFlQRVMgfSBmcm9tICcuLi9hcHByb3ZhbC1mbG93LWFkZC1ub2RlL2FwcHJvdmFsLWZsb3ctYWRkLW5vZGUuY29tcG9uZW50JztcblxuZXhwb3J0IGludGVyZmFjZSBTZWxlY3RUeXBlRGlhbG9nRm9ybURhdGEge1xuICAgIHR5cGU6IEFQUFJPVkFMX0ZMT1dfTk9ERV9UWVBFUztcbiAgICB0b05leHRTZXJpYWw6IGJvb2xlYW47XG59XG5cbi8qKlxuICogQGRlcHJlY2F0ZWRcbiAqIEFwcHJvdmFsRmxvd1NlbGVjdFR5cGUgY29tcG9uZW50IGlzIGRlcHJpY2F0ZWQgc2luY2UgdmVyc2lvbiAwLjQwLjBcbiAqL1xuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdmZHAtYXBwcm92YWwtZmxvdy1zZWxlY3QtdHlwZScsXG4gICAgdGVtcGxhdGVVcmw6ICcuL2FwcHJvdmFsLWZsb3ctc2VsZWN0LXR5cGUuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWycuLi9zdHlsZXMvYXBwcm92YWwtZmxvdy1kaWFsb2cuc2NzcycsICcuL2FwcHJvdmFsLWZsb3ctc2VsZWN0LXR5cGUuY29tcG9uZW50LnNjc3MnXSxcbiAgICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICAgIGhvc3Q6IHtcbiAgICAgICAgY2xhc3M6ICdmZHAtYXBwcm92YWwtZmxvdy1kaWFsb2cgZmRwLWFwcHJvdmFsLWZsb3ctc2VsZWN0LXR5cGUnXG4gICAgfVxufSlcbmV4cG9ydCBjbGFzcyBBcHByb3ZhbEZsb3dTZWxlY3RUeXBlQ29tcG9uZW50IHtcbiAgICAvKiogQGhpZGRlbiAqL1xuICAgIF9ub2RlVHlwZSA9IEFQUFJPVkFMX0ZMT1dfTk9ERV9UWVBFUy5TRVJJQUw7XG5cbiAgICAvKiogQGhpZGRlbiAqL1xuICAgIF9ub2RlVHlwZXMgPSBBUFBST1ZBTF9GTE9XX05PREVfVFlQRVM7XG5cbiAgICAvKiogQGhpZGRlbiAqL1xuICAgIF90b05leHRTZXJpYWwgPSBmYWxzZTtcblxuICAgIC8qKiBAaGlkZGVuICovXG4gICAgY29uc3RydWN0b3IocHVibGljIHJlYWRvbmx5IF9kaWFsb2dSZWY6IERpYWxvZ1JlZikge31cblxuICAgIC8qKiBAaGlkZGVuICovXG4gICAgX3N1Ym1pdCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5fZGlhbG9nUmVmLmNsb3NlKHsgdHlwZTogdGhpcy5fbm9kZVR5cGUsIHRvTmV4dFNlcmlhbDogdGhpcy5fdG9OZXh0U2VyaWFsIH0gYXMgU2VsZWN0VHlwZURpYWxvZ0Zvcm1EYXRhKTtcbiAgICB9XG59XG4iLCI8ZmQtZGlhbG9nPlxuICAgIDxmZC1kaWFsb2ctaGVhZGVyPlxuICAgICAgICA8bmctdGVtcGxhdGUgZmRrVGVtcGxhdGU9XCJoZWFkZXJcIj5cbiAgICAgICAgICAgIDxwPnt7ICdwbGF0Zm9ybUFwcHJvdmFsRmxvdy5zZWxlY3RUeXBlRGlhbG9nTW92ZUFwcHJvdmVyQXMnIHwgZmRUcmFuc2xhdGUgfX08L3A+XG4gICAgICAgIDwvbmctdGVtcGxhdGU+XG4gICAgPC9mZC1kaWFsb2ctaGVhZGVyPlxuICAgIDxmZC1kaWFsb2ctYm9keSBmZENvbXBhY3Q+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwiZmQtZm9ybS1sYWJlbFwiPlxuICAgICAgICAgICAge3sgJ3BsYXRmb3JtQXBwcm92YWxGbG93LnNlbGVjdFR5cGVEaWFsb2dQYXJhbGxlbE9yU2VyaWFsJyB8IGZkVHJhbnNsYXRlIH19XG4gICAgICAgIDwvc3Bhbj5cblxuICAgICAgICA8ZmQtZm9ybS1ncm91cCBjbGFzcz1cImZkcC1hcHByb3ZhbC1mbG93LXNlbGVjdC10eXBlX19mb3JtXCI+XG4gICAgICAgICAgICA8ZGl2IGZkLWZvcm0taXRlbT5cbiAgICAgICAgICAgICAgICA8ZmQtcmFkaW8tYnV0dG9uXG4gICAgICAgICAgICAgICAgICAgIFt2YWx1ZV09XCJfbm9kZVR5cGVzLlBBUkFMTEVMXCJcbiAgICAgICAgICAgICAgICAgICAgWyhuZ01vZGVsKV09XCJfbm9kZVR5cGVcIlxuICAgICAgICAgICAgICAgICAgICBpZD1cInNlbGVjdC10eXBlLXBhcmFsbGVsXCJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cInNlbGVjdC10eXBlLXBhcmFsbGVsXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIHt7ICdwbGF0Zm9ybUFwcHJvdmFsRmxvdy5zZWxlY3RUeXBlRGlhbG9nTm9kZVR5cGVQYXJhbGxlbCcgfCBmZFRyYW5zbGF0ZSB9fVxuICAgICAgICAgICAgICAgIDwvZmQtcmFkaW8tYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXYgZmQtZm9ybS1pdGVtPlxuICAgICAgICAgICAgICAgIDxmZC1yYWRpby1idXR0b25cbiAgICAgICAgICAgICAgICAgICAgW3ZhbHVlXT1cIl9ub2RlVHlwZXMuU0VSSUFMXCJcbiAgICAgICAgICAgICAgICAgICAgWyhuZ01vZGVsKV09XCJfbm9kZVR5cGVcIlxuICAgICAgICAgICAgICAgICAgICBpZD1cInNlbGVjdC10eXBlLXNlcmlhbFwiXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJzZWxlY3QtdHlwZS1zZXJpYWxcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAge3sgJ3BsYXRmb3JtQXBwcm92YWxGbG93LnNlbGVjdFR5cGVEaWFsb2dOb2RlVHlwZVNlcmlhbCcgfCBmZFRyYW5zbGF0ZSB9fVxuICAgICAgICAgICAgICAgIDwvZmQtcmFkaW8tYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXYgKm5nSWY9XCJfbm9kZVR5cGUgPT09IF9ub2RlVHlwZXMuUEFSQUxMRUxcIiBmZC1mb3JtLWl0ZW0+XG4gICAgICAgICAgICAgICAgPGZkLWNoZWNrYm94IFsobmdNb2RlbCldPVwiX3RvTmV4dFNlcmlhbFwiPlxuICAgICAgICAgICAgICAgICAgICB7eyAncGxhdGZvcm1BcHByb3ZhbEZsb3cuYWRkTm9kZURpYWxvZ0FkZFRvTmV4dCcgfCBmZFRyYW5zbGF0ZSB9fVxuICAgICAgICAgICAgICAgIDwvZmQtY2hlY2tib3g+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9mZC1mb3JtLWdyb3VwPlxuICAgIDwvZmQtZGlhbG9nLWJvZHk+XG5cbiAgICA8ZmQtZGlhbG9nLWZvb3RlciBmZENvbXBhY3Q+XG4gICAgICAgIDxuZy1jb250YWluZXI+XG4gICAgICAgICAgICA8ZmQtZGlhbG9nLWZvb3Rlci1idXR0b24+XG4gICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICBmZC1idXR0b25cbiAgICAgICAgICAgICAgICAgICAgZmQtZGlhbG9nLWRlY2lzaXZlLWJ1dHRvblxuICAgICAgICAgICAgICAgICAgICBmZFR5cGU9XCJlbXBoYXNpemVkXCJcbiAgICAgICAgICAgICAgICAgICAgW2xhYmVsXT1cIidwbGF0Zm9ybUFwcHJvdmFsRmxvdy5zZWxlY3RUeXBlRGlhbG9nQ29uZmlybUJ1dHRvbicgfCBmZFRyYW5zbGF0ZVwiXG4gICAgICAgICAgICAgICAgICAgIChjbGljayk9XCJfc3VibWl0KClcIlxuICAgICAgICAgICAgICAgID48L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZmQtZGlhbG9nLWZvb3Rlci1idXR0b24+XG5cbiAgICAgICAgICAgIDxmZC1kaWFsb2ctZm9vdGVyLWJ1dHRvbj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgIGZkLWJ1dHRvblxuICAgICAgICAgICAgICAgICAgICBmZC1pbml0aWFsLWZvY3VzXG4gICAgICAgICAgICAgICAgICAgIGZkLWRpYWxvZy1kZWNpc2l2ZS1idXR0b25cbiAgICAgICAgICAgICAgICAgICAgZmRUeXBlPVwidHJhbnNwYXJlbnRcIlxuICAgICAgICAgICAgICAgICAgICBbbGFiZWxdPVwiJ3BsYXRmb3JtQXBwcm92YWxGbG93LnNlbGVjdFR5cGVEaWFsb2dDYW5jZWxCdXR0b24nIHwgZmRUcmFuc2xhdGVcIlxuICAgICAgICAgICAgICAgICAgICAoY2xpY2spPVwiX2RpYWxvZ1JlZi5jbG9zZSgpXCJcbiAgICAgICAgICAgICAgICA+PC9idXR0b24+XG4gICAgICAgICAgICA8L2ZkLWRpYWxvZy1mb290ZXItYnV0dG9uPlxuICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICA8L2ZkLWRpYWxvZy1mb290ZXI+XG48L2ZkLWRpYWxvZz5cbiJdfQ==