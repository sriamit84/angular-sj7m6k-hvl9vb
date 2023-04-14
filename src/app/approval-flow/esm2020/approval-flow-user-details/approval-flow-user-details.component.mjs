import { ChangeDetectionStrategy, Component, Input, TemplateRef, ViewEncapsulation } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@fundamental-ngx/core/avatar";
const _c0 = function (a0) { return { data: a0 }; };
function ApprovalFlowUserDetailsComponent_ng_container_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0, 5);
    i0.ɵɵpipe(1, "async");
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r0.detailsTemplate)("ngTemplateOutletContext", i0.ɵɵpureFunction1(4, _c0, i0.ɵɵpipeBind1(1, 2, ctx_r0.details)));
} }
/**
 * @deprecated
 * ApprovalFlowUserDetails component is depricated since version 0.40.0
 */
export class ApprovalFlowUserDetailsComponent {
}
ApprovalFlowUserDetailsComponent.ɵfac = function ApprovalFlowUserDetailsComponent_Factory(t) { return new (t || ApprovalFlowUserDetailsComponent)(); };
ApprovalFlowUserDetailsComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ApprovalFlowUserDetailsComponent, selectors: [["fdp-approval-flow-user-details"]], hostAttrs: [1, "fdp-approval-flow-user-details"], inputs: { user: "user", details: "details", detailsTemplate: "detailsTemplate" }, decls: 10, vars: 5, consts: [[1, "fdp-approval-flow-user-details__user-info"], ["size", "s", 3, "image"], [1, "fdp-approval-flow-user-details__name"], [1, "fdp-approval-flow-user-details__description"], [3, "ngTemplateOutlet", "ngTemplateOutletContext", 4, "ngIf"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"]], template: function ApprovalFlowUserDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelement(1, "fd-avatar", 1);
        i0.ɵɵelementStart(2, "div")(3, "div", 2);
        i0.ɵɵtext(4);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(5, "div", 3);
        i0.ɵɵtext(6);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(7, "div", 3);
        i0.ɵɵtext(8);
        i0.ɵɵelementEnd()()();
        i0.ɵɵtemplate(9, ApprovalFlowUserDetailsComponent_ng_container_9_Template, 2, 6, "ng-container", 4);
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("image", ctx.user.imgUrl);
        i0.ɵɵadvance(3);
        i0.ɵɵtextInterpolate(ctx.user.name);
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate(ctx.user.approvedDate);
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate(ctx.user.description);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.detailsTemplate);
    } }, dependencies: [i1.NgIf, i1.NgTemplateOutlet, i2.AvatarComponent, i1.AsyncPipe], styles: [".fdp-approval-flow-user-details__user-info{display:flex;align-items:center;margin-bottom:1rem}.fdp-approval-flow-user-details__name{font-size:1rem}.fdp-approval-flow-user-details__description{color:#6a6d70;color:var(--sapContent_LabelColor, #6a6d70)}\n"], encapsulation: 2, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ApprovalFlowUserDetailsComponent, [{
        type: Component,
        args: [{ selector: 'fdp-approval-flow-user-details', encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, host: {
                    class: 'fdp-approval-flow-user-details'
                }, template: "<div class=\"fdp-approval-flow-user-details__user-info\">\n    <fd-avatar [image]=\"user.imgUrl\" size=\"s\"> </fd-avatar>\n\n    <div>\n        <div class=\"fdp-approval-flow-user-details__name\">{{ user.name }}</div>\n        <div class=\"fdp-approval-flow-user-details__description\">{{ user.approvedDate }}</div>\n        <div class=\"fdp-approval-flow-user-details__description\">{{ user.description }}</div>\n    </div>\n</div>\n\n<ng-container\n    *ngIf=\"detailsTemplate\"\n    [ngTemplateOutlet]=\"detailsTemplate\"\n    [ngTemplateOutletContext]=\"{ data: details | async }\"\n>\n</ng-container>\n", styles: [".fdp-approval-flow-user-details__user-info{display:flex;align-items:center;margin-bottom:1rem}.fdp-approval-flow-user-details__name{font-size:1rem}.fdp-approval-flow-user-details__description{color:#6a6d70;color:var(--sapContent_LabelColor, #6a6d70)}\n"] }]
    }], null, { user: [{
            type: Input
        }], details: [{
            type: Input
        }], detailsTemplate: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwcm92YWwtZmxvdy11c2VyLWRldGFpbHMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vbGlicy9wbGF0Zm9ybS9zcmMvbGliL2FwcHJvdmFsLWZsb3cvYXBwcm92YWwtZmxvdy11c2VyLWRldGFpbHMvYXBwcm92YWwtZmxvdy11c2VyLWRldGFpbHMuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vbGlicy9wbGF0Zm9ybS9zcmMvbGliL2FwcHJvdmFsLWZsb3cvYXBwcm92YWwtZmxvdy11c2VyLWRldGFpbHMvYXBwcm92YWwtZmxvdy11c2VyLWRldGFpbHMuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDOzs7Ozs7SUNVMUcsMkJBS2U7Ozs7SUFIWCx5REFBb0MsNkZBQUE7O0FETnhDOzs7R0FHRztBQVdILE1BQU0sT0FBTyxnQ0FBZ0M7O2dIQUFoQyxnQ0FBZ0M7bUZBQWhDLGdDQUFnQztRQ3BCN0MsOEJBQXVEO1FBQ25ELCtCQUF1RDtRQUV2RCwyQkFBSyxhQUFBO1FBQ2lELFlBQWU7UUFBQSxpQkFBTTtRQUN2RSw4QkFBeUQ7UUFBQSxZQUF1QjtRQUFBLGlCQUFNO1FBQ3RGLDhCQUF5RDtRQUFBLFlBQXNCO1FBQUEsaUJBQU0sRUFBQSxFQUFBO1FBSTdGLG1HQUtlOztRQWRBLGVBQXFCO1FBQXJCLHVDQUFxQjtRQUdzQixlQUFlO1FBQWYsbUNBQWU7UUFDUixlQUF1QjtRQUF2QiwyQ0FBdUI7UUFDdkIsZUFBc0I7UUFBdEIsMENBQXNCO1FBS2xGLGVBQXFCO1FBQXJCLDBDQUFxQjs7dUZEU2IsZ0NBQWdDO2NBVjVDLFNBQVM7MkJBQ0ksZ0NBQWdDLGlCQUczQixpQkFBaUIsQ0FBQyxJQUFJLG1CQUNwQix1QkFBdUIsQ0FBQyxNQUFNLFFBQ3pDO29CQUNGLEtBQUssRUFBRSxnQ0FBZ0M7aUJBQzFDO2dCQUtELElBQUk7a0JBREgsS0FBSztZQUtOLE9BQU87a0JBRE4sS0FBSztZQUtOLGVBQWU7a0JBRGQsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIElucHV0LCBUZW1wbGF0ZVJlZiwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgTnVsbGFibGUgfSBmcm9tICdAZnVuZGFtZW50YWwtbmd4L2Nkay91dGlscyc7XG5pbXBvcnQgeyBBcHByb3ZhbFVzZXIgfSBmcm9tICcuLi9pbnRlcmZhY2VzJztcblxuLyoqXG4gKiBAZGVwcmVjYXRlZFxuICogQXBwcm92YWxGbG93VXNlckRldGFpbHMgY29tcG9uZW50IGlzIGRlcHJpY2F0ZWQgc2luY2UgdmVyc2lvbiAwLjQwLjBcbiAqL1xuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdmZHAtYXBwcm92YWwtZmxvdy11c2VyLWRldGFpbHMnLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9hcHByb3ZhbC1mbG93LXVzZXItZGV0YWlscy5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJy4vYXBwcm92YWwtZmxvdy11c2VyLWRldGFpbHMuY29tcG9uZW50LnNjc3MnXSxcbiAgICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICAgIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICAgIGhvc3Q6IHtcbiAgICAgICAgY2xhc3M6ICdmZHAtYXBwcm92YWwtZmxvdy11c2VyLWRldGFpbHMnXG4gICAgfVxufSlcbmV4cG9ydCBjbGFzcyBBcHByb3ZhbEZsb3dVc2VyRGV0YWlsc0NvbXBvbmVudCB7XG4gICAgLyoqIEFwcHJvdmFsIEZsb3cgdXNlciAqL1xuICAgIEBJbnB1dCgpXG4gICAgdXNlcjogQXBwcm92YWxVc2VyO1xuXG4gICAgLyoqIEFwcHJvdmFsIEZsb3cgdXNlciBkZXRhaWxzICovXG4gICAgQElucHV0KClcbiAgICBkZXRhaWxzOiBOdWxsYWJsZTxPYnNlcnZhYmxlPGFueT4+O1xuXG4gICAgLyoqIEFwcHJvdmFsIEZsb3cgdXNlciBkZXRhaWxzIHRlbXBsYXRlICovXG4gICAgQElucHV0KClcbiAgICBkZXRhaWxzVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG59XG4iLCI8ZGl2IGNsYXNzPVwiZmRwLWFwcHJvdmFsLWZsb3ctdXNlci1kZXRhaWxzX191c2VyLWluZm9cIj5cbiAgICA8ZmQtYXZhdGFyIFtpbWFnZV09XCJ1c2VyLmltZ1VybFwiIHNpemU9XCJzXCI+IDwvZmQtYXZhdGFyPlxuXG4gICAgPGRpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImZkcC1hcHByb3ZhbC1mbG93LXVzZXItZGV0YWlsc19fbmFtZVwiPnt7IHVzZXIubmFtZSB9fTwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZmRwLWFwcHJvdmFsLWZsb3ctdXNlci1kZXRhaWxzX19kZXNjcmlwdGlvblwiPnt7IHVzZXIuYXBwcm92ZWREYXRlIH19PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJmZHAtYXBwcm92YWwtZmxvdy11c2VyLWRldGFpbHNfX2Rlc2NyaXB0aW9uXCI+e3sgdXNlci5kZXNjcmlwdGlvbiB9fTwvZGl2PlxuICAgIDwvZGl2PlxuPC9kaXY+XG5cbjxuZy1jb250YWluZXJcbiAgICAqbmdJZj1cImRldGFpbHNUZW1wbGF0ZVwiXG4gICAgW25nVGVtcGxhdGVPdXRsZXRdPVwiZGV0YWlsc1RlbXBsYXRlXCJcbiAgICBbbmdUZW1wbGF0ZU91dGxldENvbnRleHRdPVwieyBkYXRhOiBkZXRhaWxzIHwgYXN5bmMgfVwiXG4+XG48L25nLWNvbnRhaW5lcj5cbiJdfQ==