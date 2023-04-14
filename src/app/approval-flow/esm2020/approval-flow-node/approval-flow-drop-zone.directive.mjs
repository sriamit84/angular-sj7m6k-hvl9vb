import { Directive, ElementRef, Input } from '@angular/core';
import * as i0 from "@angular/core";
export class ApprovalFlowDropZoneDirective {
    /** @hidden */
    constructor(elRef) {
        this.elRef = elRef;
        /** Whether drop zone is active (pointer with dragged node over the drop zone) */
        this.active = false;
    }
    /** @hidden */
    _checkIfNodeDraggedInDropZone(nodeRect) {
        this.active = false;
        const dropZoneRect = this.elRef.nativeElement.getBoundingClientRect();
        if (dropZoneRect.top + dropZoneRect.height > nodeRect.top &&
            dropZoneRect.left + dropZoneRect.width > nodeRect.left &&
            dropZoneRect.bottom - dropZoneRect.height < nodeRect.bottom &&
            dropZoneRect.right - dropZoneRect.width < nodeRect.right) {
            this.active = true;
        }
    }
}
ApprovalFlowDropZoneDirective.ɵfac = function ApprovalFlowDropZoneDirective_Factory(t) { return new (t || ApprovalFlowDropZoneDirective)(i0.ɵɵdirectiveInject(i0.ElementRef)); };
ApprovalFlowDropZoneDirective.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: ApprovalFlowDropZoneDirective, selectors: [["", "fdp-approval-flow-drop-zone", ""]], inputs: { placement: "placement" }, exportAs: ["fdp-approval-flow-drop-zone"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ApprovalFlowDropZoneDirective, [{
        type: Directive,
        args: [{
                // eslint-disable-next-line @angular-eslint/directive-selector
                selector: '[fdp-approval-flow-drop-zone]',
                exportAs: 'fdp-approval-flow-drop-zone'
            }]
    }], function () { return [{ type: i0.ElementRef }]; }, { placement: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwcm92YWwtZmxvdy1kcm9wLXpvbmUuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vbGlicy9wbGF0Zm9ybS9zcmMvbGliL2FwcHJvdmFsLWZsb3cvYXBwcm92YWwtZmxvdy1ub2RlL2FwcHJvdmFsLWZsb3ctZHJvcC16b25lLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBUzdELE1BQU0sT0FBTyw2QkFBNkI7SUFRdEMsY0FBYztJQUNkLFlBQTZCLEtBQWlCO1FBQWpCLFVBQUssR0FBTCxLQUFLLENBQVk7UUFKOUMsaUZBQWlGO1FBQ2pGLFdBQU0sR0FBRyxLQUFLLENBQUM7SUFHa0MsQ0FBQztJQUVsRCxjQUFjO0lBQ2QsNkJBQTZCLENBQUMsUUFBaUI7UUFDM0MsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFFcEIsTUFBTSxZQUFZLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMscUJBQXFCLEVBQUUsQ0FBQztRQUV0RSxJQUNJLFlBQVksQ0FBQyxHQUFHLEdBQUcsWUFBWSxDQUFDLE1BQU0sR0FBRyxRQUFRLENBQUMsR0FBRztZQUNyRCxZQUFZLENBQUMsSUFBSSxHQUFHLFlBQVksQ0FBQyxLQUFLLEdBQUcsUUFBUSxDQUFDLElBQUk7WUFDdEQsWUFBWSxDQUFDLE1BQU0sR0FBRyxZQUFZLENBQUMsTUFBTSxHQUFHLFFBQVEsQ0FBQyxNQUFNO1lBQzNELFlBQVksQ0FBQyxLQUFLLEdBQUcsWUFBWSxDQUFDLEtBQUssR0FBRyxRQUFRLENBQUMsS0FBSyxFQUMxRDtZQUNFLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1NBQ3RCO0lBQ0wsQ0FBQzs7MEdBekJRLDZCQUE2QjtnRkFBN0IsNkJBQTZCO3VGQUE3Qiw2QkFBNkI7Y0FMekMsU0FBUztlQUFDO2dCQUNQLDhEQUE4RDtnQkFDOUQsUUFBUSxFQUFFLCtCQUErQjtnQkFDekMsUUFBUSxFQUFFLDZCQUE2QjthQUMxQzs2REFJRyxTQUFTO2tCQURSLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEFwcHJvdmFsRmxvd05ld05vZGVQbGFjZW1lbnQgfSBmcm9tICcuLi9hcHByb3ZhbC1mbG93LWFkZC1ub2RlL2FwcHJvdmFsLWZsb3ctYWRkLW5vZGUuY29tcG9uZW50JztcblxuQERpcmVjdGl2ZSh7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEBhbmd1bGFyLWVzbGludC9kaXJlY3RpdmUtc2VsZWN0b3JcbiAgICBzZWxlY3RvcjogJ1tmZHAtYXBwcm92YWwtZmxvdy1kcm9wLXpvbmVdJyxcbiAgICBleHBvcnRBczogJ2ZkcC1hcHByb3ZhbC1mbG93LWRyb3Atem9uZSdcbn0pXG5leHBvcnQgY2xhc3MgQXBwcm92YWxGbG93RHJvcFpvbmVEaXJlY3RpdmUge1xuICAgIC8qKiBBcHByb3ZhbCBmbG93IG5ldyBub2RlIHBsYWNlbWVudCAqL1xuICAgIEBJbnB1dCgpXG4gICAgcGxhY2VtZW50OiBBcHByb3ZhbEZsb3dOZXdOb2RlUGxhY2VtZW50O1xuXG4gICAgLyoqIFdoZXRoZXIgZHJvcCB6b25lIGlzIGFjdGl2ZSAocG9pbnRlciB3aXRoIGRyYWdnZWQgbm9kZSBvdmVyIHRoZSBkcm9wIHpvbmUpICovXG4gICAgYWN0aXZlID0gZmFsc2U7XG5cbiAgICAvKiogQGhpZGRlbiAqL1xuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgZWxSZWY6IEVsZW1lbnRSZWYpIHt9XG5cbiAgICAvKiogQGhpZGRlbiAqL1xuICAgIF9jaGVja0lmTm9kZURyYWdnZWRJbkRyb3Bab25lKG5vZGVSZWN0OiBET01SZWN0KTogdm9pZCB7XG4gICAgICAgIHRoaXMuYWN0aXZlID0gZmFsc2U7XG5cbiAgICAgICAgY29uc3QgZHJvcFpvbmVSZWN0ID0gdGhpcy5lbFJlZi5uYXRpdmVFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXG4gICAgICAgIGlmIChcbiAgICAgICAgICAgIGRyb3Bab25lUmVjdC50b3AgKyBkcm9wWm9uZVJlY3QuaGVpZ2h0ID4gbm9kZVJlY3QudG9wICYmXG4gICAgICAgICAgICBkcm9wWm9uZVJlY3QubGVmdCArIGRyb3Bab25lUmVjdC53aWR0aCA+IG5vZGVSZWN0LmxlZnQgJiZcbiAgICAgICAgICAgIGRyb3Bab25lUmVjdC5ib3R0b20gLSBkcm9wWm9uZVJlY3QuaGVpZ2h0IDwgbm9kZVJlY3QuYm90dG9tICYmXG4gICAgICAgICAgICBkcm9wWm9uZVJlY3QucmlnaHQgLSBkcm9wWm9uZVJlY3Qud2lkdGggPCBub2RlUmVjdC5yaWdodFxuICAgICAgICApIHtcbiAgICAgICAgICAgIHRoaXMuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ==