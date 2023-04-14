import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { trackByFn } from '../helpers';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/forms";
import * as i3 from "@fundamental-ngx/core/content-density";
import * as i4 from "@fundamental-ngx/core/icon";
import * as i5 from "@fundamental-ngx/platform/list";
import * as i6 from "@fundamental-ngx/core/form";
import * as i7 from "@fundamental-ngx/core/radio";
function ApprovalFlowTeamListComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 2)(1, "fd-radio-button", 3);
    i0.ɵɵlistener("ngModelChange", function ApprovalFlowTeamListComponent_div_2_Template_fd_radio_button_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r4); const ctx_r3 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r3.selectedTeamId = $event); })("click", function ApprovalFlowTeamListComponent_div_2_Template_fd_radio_button_click_1_listener() { const restoredCtx = i0.ɵɵrestoreView(_r4); const team_r1 = restoredCtx.$implicit; const ctx_r5 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r5.onTeamRadioClick.emit(team_r1)); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "fdp-standard-list-item", 4);
    i0.ɵɵlistener("click", function ApprovalFlowTeamListComponent_div_2_Template_fdp_standard_list_item_click_2_listener() { const restoredCtx = i0.ɵɵrestoreView(_r4); const team_r1 = restoredCtx.$implicit; const ctx_r6 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r6._showTeamDetails(team_r1)); });
    i0.ɵɵelementEnd();
    i0.ɵɵelement(3, "fd-icon", 5);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const team_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("value", team_r1.id)("name", "team-radio" + i_r2)("ngModel", ctx_r0.selectedTeamId);
    i0.ɵɵattribute("id", "team-radio" + i_r2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("avatarSrc", "")("avatarTitle", team_r1.name)("description", team_r1.description || team_r1.members.length + " members")("title", team_r1.name);
    i0.ɵɵattribute("id", "approval-team-" + team_r1.id);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("glyph", "navigation-" + (ctx_r0.isRtl ? "left" : "right") + "-arrow");
} }
/**
 * @deprecated
 * ApprovalFlowTeamList component is depricated since version 0.40.0
 */
export class ApprovalFlowTeamListComponent {
    constructor() {
        /** Approval flow teams */
        this.teams = [];
        /** Whether in RTL mode */
        this.isRtl = false;
        /** Event emitted on team click */
        // eslint-disable-next-line @angular-eslint/no-output-on-prefix
        this.onTeamClick = new EventEmitter();
        /** Event emitted on team selection change */
        // eslint-disable-next-line @angular-eslint/no-output-on-prefix
        this.onTeamRadioClick = new EventEmitter();
        /** @hidden */
        this._trackByFn = trackByFn;
    }
    /** @hidden */
    _showTeamDetails(team) {
        this.onTeamClick.emit(team);
    }
}
ApprovalFlowTeamListComponent.ɵfac = function ApprovalFlowTeamListComponent_Factory(t) { return new (t || ApprovalFlowTeamListComponent)(); };
ApprovalFlowTeamListComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ApprovalFlowTeamListComponent, selectors: [["fdp-approval-flow-team-list"]], hostAttrs: [1, "fdp-approval-flow-team-list"], inputs: { teams: "teams", isRtl: "isRtl", selectedTeamId: "selectedTeamId" }, outputs: { onTeamClick: "onTeamClick", onTeamRadioClick: "onTeamRadioClick" }, decls: 3, vars: 3, consts: [["fdCompact", "", 3, "hasByLine"], ["fd-form-item", "", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["fd-form-item", ""], [3, "value", "name", "ngModel", "ngModelChange", "click"], [3, "avatarSrc", "avatarTitle", "description", "title", "click"], [3, "glyph"]], template: function ApprovalFlowTeamListComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "fdp-list", 0)(1, "fd-form-group");
        i0.ɵɵtemplate(2, ApprovalFlowTeamListComponent_div_2_Template, 4, 10, "div", 1);
        i0.ɵɵelementEnd()();
    } if (rf & 2) {
        i0.ɵɵproperty("hasByLine", true);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngForOf", ctx.teams)("ngForTrackBy", ctx._trackByFn);
    } }, dependencies: [i1.NgForOf, i2.NgControlStatus, i2.NgModel, i3.ContentDensityDirective, i4.IconComponent, i5.ListComponent, i5.StandardListItemComponent, i6.FormItemComponent, i6.FormGroupComponent, i7.RadioButtonComponent], styles: [".fdp-approval-flow-team-list .fd-form-item{position:relative;margin-bottom:0}.fdp-approval-flow-team-list .fd-form-item fd-radio-button{position:absolute;z-index:1;top:1.4rem}.fdp-approval-flow-team-list .fd-form-item .fd-list__item{padding-left:2rem!important;cursor:pointer}.fdp-approval-flow-team-list .fd-form-item fd-icon{position:absolute;right:1rem;top:2rem;color:#0854a0;color:var(--sapButton_IconColor, #0854a0);cursor:pointer}.fdp-approval-flow-team-list .fd-form-item fd-avatar{color:#fff;color:var(--sapBaseColor, #fff)}[dir=rtl] .fdp-approval-flow-team-list .fd-form-item fd-icon,.fdp-approval-flow-team-list[dir=rtl] .fd-form-item fd-icon{right:auto;left:1rem}[dir=rtl] .fdp-approval-flow-team-list .fd-list__item,.fdp-approval-flow-team-list[dir=rtl] .fd-list__item{padding-right:2rem!important;padding-left:0!important}\n"], encapsulation: 2, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ApprovalFlowTeamListComponent, [{
        type: Component,
        args: [{ selector: 'fdp-approval-flow-team-list', changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, host: {
                    class: 'fdp-approval-flow-team-list'
                }, template: "<fdp-list [hasByLine]=\"true\" fdCompact>\n    <fd-form-group>\n        <div *ngFor=\"let team of teams; let i = index; trackBy: _trackByFn\" fd-form-item>\n            <fd-radio-button\n                [value]=\"team.id\"\n                [attr.id]=\"'team-radio' + i\"\n                [name]=\"'team-radio' + i\"\n                [(ngModel)]=\"selectedTeamId\"\n                (click)=\"onTeamRadioClick.emit(team)\"\n            >\n            </fd-radio-button>\n\n            <fdp-standard-list-item\n                [attr.id]=\"'approval-team-' + team.id\"\n                [avatarSrc]=\"''\"\n                [avatarTitle]=\"team.name\"\n                [description]=\"team.description || team.members.length + ' members'\"\n                [title]=\"team.name\"\n                (click)=\"_showTeamDetails(team)\"\n            >\n            </fdp-standard-list-item>\n\n            <fd-icon [glyph]=\"'navigation-' + (isRtl ? 'left' : 'right') + '-arrow'\"></fd-icon>\n        </div>\n    </fd-form-group>\n</fdp-list>\n", styles: [".fdp-approval-flow-team-list .fd-form-item{position:relative;margin-bottom:0}.fdp-approval-flow-team-list .fd-form-item fd-radio-button{position:absolute;z-index:1;top:1.4rem}.fdp-approval-flow-team-list .fd-form-item .fd-list__item{padding-left:2rem!important;cursor:pointer}.fdp-approval-flow-team-list .fd-form-item fd-icon{position:absolute;right:1rem;top:2rem;color:#0854a0;color:var(--sapButton_IconColor, #0854a0);cursor:pointer}.fdp-approval-flow-team-list .fd-form-item fd-avatar{color:#fff;color:var(--sapBaseColor, #fff)}[dir=rtl] .fdp-approval-flow-team-list .fd-form-item fd-icon,.fdp-approval-flow-team-list[dir=rtl] .fd-form-item fd-icon{right:auto;left:1rem}[dir=rtl] .fdp-approval-flow-team-list .fd-list__item,.fdp-approval-flow-team-list[dir=rtl] .fd-list__item{padding-right:2rem!important;padding-left:0!important}\n"] }]
    }], null, { teams: [{
            type: Input
        }], isRtl: [{
            type: Input
        }], selectedTeamId: [{
            type: Input
        }], 
    // eslint-disable-next-line @angular-eslint/no-output-on-prefix
    onTeamClick: [{
            type: Output
        }], 
    // eslint-disable-next-line @angular-eslint/no-output-on-prefix
    onTeamRadioClick: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwcm92YWwtZmxvdy10ZWFtLWxpc3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vbGlicy9wbGF0Zm9ybS9zcmMvbGliL2FwcHJvdmFsLWZsb3cvYXBwcm92YWwtZmxvdy10ZWFtLWxpc3QvYXBwcm92YWwtZmxvdy10ZWFtLWxpc3QuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vbGlicy9wbGF0Zm9ybS9zcmMvbGliL2FwcHJvdmFsLWZsb3cvYXBwcm92YWwtZmxvdy10ZWFtLWxpc3QvYXBwcm92YWwtZmxvdy10ZWFtLWxpc3QuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUluSCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sWUFBWSxDQUFDOzs7Ozs7Ozs7OztJQ0YvQiw4QkFBaUYseUJBQUE7SUFLekUsMlBBQTRCLGlPQUNuQixlQUFBLHFDQUEyQixDQUFBLElBRFI7SUFHaEMsaUJBQWtCO0lBRWxCLGlEQU9DO0lBREcscVBBQVMsZUFBQSxnQ0FBc0IsQ0FBQSxJQUFDO0lBRXBDLGlCQUF5QjtJQUV6Qiw2QkFBbUY7SUFDdkYsaUJBQU07Ozs7O0lBbkJFLGVBQWlCO0lBQWpCLGtDQUFpQiw2QkFBQSxrQ0FBQTtJQUNqQix5Q0FBNEI7SUFTNUIsZUFBZ0I7SUFBaEIsOEJBQWdCLDZCQUFBLDJFQUFBLHVCQUFBO0lBRGhCLG1EQUFzQztJQVNqQyxlQUErRDtJQUEvRCxvRkFBK0Q7O0FEaEJwRjs7O0dBR0c7QUFXSCxNQUFNLE9BQU8sNkJBQTZCO0lBVjFDO1FBV0ksMEJBQTBCO1FBRTFCLFVBQUssR0FBbUIsRUFBRSxDQUFDO1FBRTNCLDBCQUEwQjtRQUUxQixVQUFLLEdBQUcsS0FBSyxDQUFDO1FBTWQsa0NBQWtDO1FBRWxDLCtEQUErRDtRQUMvRCxnQkFBVyxHQUFHLElBQUksWUFBWSxFQUFnQixDQUFDO1FBRS9DLDZDQUE2QztRQUU3QywrREFBK0Q7UUFDL0QscUJBQWdCLEdBQUcsSUFBSSxZQUFZLEVBQWdCLENBQUM7UUFFcEQsY0FBYztRQUNkLGVBQVUsR0FBRyxTQUFTLENBQUM7S0FNMUI7SUFKRyxjQUFjO0lBQ2QsZ0JBQWdCLENBQUMsSUFBa0I7UUFDL0IsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDaEMsQ0FBQzs7MEdBN0JRLDZCQUE2QjtnRkFBN0IsNkJBQTZCO1FDcEIxQyxtQ0FBdUMsb0JBQUE7UUFFL0IsK0VBcUJNO1FBQ1YsaUJBQWdCLEVBQUE7O1FBeEJWLGdDQUFrQjtRQUVFLGVBQVU7UUFBVixtQ0FBVSxnQ0FBQTs7dUZEa0IzQiw2QkFBNkI7Y0FWekMsU0FBUzsyQkFDSSw2QkFBNkIsbUJBR3RCLHVCQUF1QixDQUFDLE1BQU0saUJBQ2hDLGlCQUFpQixDQUFDLElBQUksUUFDL0I7b0JBQ0YsS0FBSyxFQUFFLDZCQUE2QjtpQkFDdkM7Z0JBS0QsS0FBSztrQkFESixLQUFLO1lBS04sS0FBSztrQkFESixLQUFLO1lBS04sY0FBYztrQkFEYixLQUFLOztJQUtOLCtEQUErRDtJQUMvRCxXQUFXO2tCQUZWLE1BQU07O0lBTVAsK0RBQStEO0lBQy9ELGdCQUFnQjtrQkFGZixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT3V0cHV0LCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBOdWxsYWJsZSB9IGZyb20gJ0BmdW5kYW1lbnRhbC1uZ3gvY2RrL3V0aWxzJztcbmltcG9ydCB7IEFwcHJvdmFsVGVhbSB9IGZyb20gJy4uL2ludGVyZmFjZXMnO1xuaW1wb3J0IHsgdHJhY2tCeUZuIH0gZnJvbSAnLi4vaGVscGVycyc7XG5cbi8qKlxuICogQGRlcHJlY2F0ZWRcbiAqIEFwcHJvdmFsRmxvd1RlYW1MaXN0IGNvbXBvbmVudCBpcyBkZXByaWNhdGVkIHNpbmNlIHZlcnNpb24gMC40MC4wXG4gKi9cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnZmRwLWFwcHJvdmFsLWZsb3ctdGVhbS1saXN0JyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vYXBwcm92YWwtZmxvdy10ZWFtLWxpc3QuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWycuL2FwcHJvdmFsLWZsb3ctdGVhbS1saXN0LmNvbXBvbmVudC5zY3NzJ10sXG4gICAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gICAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgICBob3N0OiB7XG4gICAgICAgIGNsYXNzOiAnZmRwLWFwcHJvdmFsLWZsb3ctdGVhbS1saXN0J1xuICAgIH1cbn0pXG5leHBvcnQgY2xhc3MgQXBwcm92YWxGbG93VGVhbUxpc3RDb21wb25lbnQge1xuICAgIC8qKiBBcHByb3ZhbCBmbG93IHRlYW1zICovXG4gICAgQElucHV0KClcbiAgICB0ZWFtczogQXBwcm92YWxUZWFtW10gPSBbXTtcblxuICAgIC8qKiBXaGV0aGVyIGluIFJUTCBtb2RlICovXG4gICAgQElucHV0KClcbiAgICBpc1J0bCA9IGZhbHNlO1xuXG4gICAgLyoqIFNlbGVjdGVkIHRlYW0gSUQgKi9cbiAgICBASW5wdXQoKVxuICAgIHNlbGVjdGVkVGVhbUlkOiBOdWxsYWJsZTxzdHJpbmc+O1xuXG4gICAgLyoqIEV2ZW50IGVtaXR0ZWQgb24gdGVhbSBjbGljayAqL1xuICAgIEBPdXRwdXQoKVxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAYW5ndWxhci1lc2xpbnQvbm8tb3V0cHV0LW9uLXByZWZpeFxuICAgIG9uVGVhbUNsaWNrID0gbmV3IEV2ZW50RW1pdHRlcjxBcHByb3ZhbFRlYW0+KCk7XG5cbiAgICAvKiogRXZlbnQgZW1pdHRlZCBvbiB0ZWFtIHNlbGVjdGlvbiBjaGFuZ2UgKi9cbiAgICBAT3V0cHV0KClcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQGFuZ3VsYXItZXNsaW50L25vLW91dHB1dC1vbi1wcmVmaXhcbiAgICBvblRlYW1SYWRpb0NsaWNrID0gbmV3IEV2ZW50RW1pdHRlcjxBcHByb3ZhbFRlYW0+KCk7XG5cbiAgICAvKiogQGhpZGRlbiAqL1xuICAgIF90cmFja0J5Rm4gPSB0cmFja0J5Rm47XG5cbiAgICAvKiogQGhpZGRlbiAqL1xuICAgIF9zaG93VGVhbURldGFpbHModGVhbTogQXBwcm92YWxUZWFtKTogdm9pZCB7XG4gICAgICAgIHRoaXMub25UZWFtQ2xpY2suZW1pdCh0ZWFtKTtcbiAgICB9XG59XG4iLCI8ZmRwLWxpc3QgW2hhc0J5TGluZV09XCJ0cnVlXCIgZmRDb21wYWN0PlxuICAgIDxmZC1mb3JtLWdyb3VwPlxuICAgICAgICA8ZGl2ICpuZ0Zvcj1cImxldCB0ZWFtIG9mIHRlYW1zOyBsZXQgaSA9IGluZGV4OyB0cmFja0J5OiBfdHJhY2tCeUZuXCIgZmQtZm9ybS1pdGVtPlxuICAgICAgICAgICAgPGZkLXJhZGlvLWJ1dHRvblxuICAgICAgICAgICAgICAgIFt2YWx1ZV09XCJ0ZWFtLmlkXCJcbiAgICAgICAgICAgICAgICBbYXR0ci5pZF09XCIndGVhbS1yYWRpbycgKyBpXCJcbiAgICAgICAgICAgICAgICBbbmFtZV09XCIndGVhbS1yYWRpbycgKyBpXCJcbiAgICAgICAgICAgICAgICBbKG5nTW9kZWwpXT1cInNlbGVjdGVkVGVhbUlkXCJcbiAgICAgICAgICAgICAgICAoY2xpY2spPVwib25UZWFtUmFkaW9DbGljay5lbWl0KHRlYW0pXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgIDwvZmQtcmFkaW8tYnV0dG9uPlxuXG4gICAgICAgICAgICA8ZmRwLXN0YW5kYXJkLWxpc3QtaXRlbVxuICAgICAgICAgICAgICAgIFthdHRyLmlkXT1cIidhcHByb3ZhbC10ZWFtLScgKyB0ZWFtLmlkXCJcbiAgICAgICAgICAgICAgICBbYXZhdGFyU3JjXT1cIicnXCJcbiAgICAgICAgICAgICAgICBbYXZhdGFyVGl0bGVdPVwidGVhbS5uYW1lXCJcbiAgICAgICAgICAgICAgICBbZGVzY3JpcHRpb25dPVwidGVhbS5kZXNjcmlwdGlvbiB8fCB0ZWFtLm1lbWJlcnMubGVuZ3RoICsgJyBtZW1iZXJzJ1wiXG4gICAgICAgICAgICAgICAgW3RpdGxlXT1cInRlYW0ubmFtZVwiXG4gICAgICAgICAgICAgICAgKGNsaWNrKT1cIl9zaG93VGVhbURldGFpbHModGVhbSlcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgPC9mZHAtc3RhbmRhcmQtbGlzdC1pdGVtPlxuXG4gICAgICAgICAgICA8ZmQtaWNvbiBbZ2x5cGhdPVwiJ25hdmlnYXRpb24tJyArIChpc1J0bCA/ICdsZWZ0JyA6ICdyaWdodCcpICsgJy1hcnJvdydcIj48L2ZkLWljb24+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZmQtZm9ybS1ncm91cD5cbjwvZmRwLWxpc3Q+XG4iXX0=