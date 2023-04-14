import { DialogRef } from '@fundamental-ngx/core/dialog';
import { APPROVAL_FLOW_NODE_TYPES } from '../approval-flow-add-node/approval-flow-add-node.component';
import * as i0 from "@angular/core";
export interface SelectTypeDialogFormData {
    type: APPROVAL_FLOW_NODE_TYPES;
    toNextSerial: boolean;
}
/**
 * @deprecated
 * ApprovalFlowSelectType component is depricated since version 0.40.0
 */
export declare class ApprovalFlowSelectTypeComponent {
    readonly _dialogRef: DialogRef;
    /** @hidden */
    _nodeType: APPROVAL_FLOW_NODE_TYPES;
    /** @hidden */
    _nodeTypes: typeof APPROVAL_FLOW_NODE_TYPES;
    /** @hidden */
    _toNextSerial: boolean;
    /** @hidden */
    constructor(_dialogRef: DialogRef);
    /** @hidden */
    _submit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ApprovalFlowSelectTypeComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ApprovalFlowSelectTypeComponent, "fdp-approval-flow-select-type", never, {}, {}, never, never, false, never>;
}
//# sourceMappingURL=approval-flow-select-type.component.d.ts.map