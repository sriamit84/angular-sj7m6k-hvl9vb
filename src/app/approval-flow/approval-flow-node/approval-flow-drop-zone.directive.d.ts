import { ElementRef } from '@angular/core';
import { ApprovalFlowNewNodePlacement } from '../approval-flow-add-node/approval-flow-add-node.component';
import * as i0 from "@angular/core";
export declare class ApprovalFlowDropZoneDirective {
    private readonly elRef;
    /** Approval flow new node placement */
    placement: ApprovalFlowNewNodePlacement;
    /** Whether drop zone is active (pointer with dragged node over the drop zone) */
    active: boolean;
    /** @hidden */
    constructor(elRef: ElementRef);
    /** @hidden */
    _checkIfNodeDraggedInDropZone(nodeRect: DOMRect): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ApprovalFlowDropZoneDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<ApprovalFlowDropZoneDirective, "[fdp-approval-flow-drop-zone]", ["fdp-approval-flow-drop-zone"], { "placement": "placement"; }, {}, never, never, false, never>;
}
//# sourceMappingURL=approval-flow-drop-zone.directive.d.ts.map