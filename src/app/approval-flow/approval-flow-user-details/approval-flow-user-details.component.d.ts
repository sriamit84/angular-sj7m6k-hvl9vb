import { TemplateRef } from '@angular/core';
import { Observable } from 'rxjs';
import { Nullable } from '@fundamental-ngx/cdk/utils';
import { ApprovalUser } from '../interfaces';
import * as i0 from "@angular/core";
/**
 * @deprecated
 * ApprovalFlowUserDetails component is depricated since version 0.40.0
 */
export declare class ApprovalFlowUserDetailsComponent {
    /** Approval Flow user */
    user: ApprovalUser;
    /** Approval Flow user details */
    details: Nullable<Observable<any>>;
    /** Approval Flow user details template */
    detailsTemplate: TemplateRef<any>;
    static ɵfac: i0.ɵɵFactoryDeclaration<ApprovalFlowUserDetailsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ApprovalFlowUserDetailsComponent, "fdp-approval-flow-user-details", never, { "user": "user"; "details": "details"; "detailsTemplate": "detailsTemplate"; }, {}, never, never, false, never>;
}
//# sourceMappingURL=approval-flow-user-details.component.d.ts.map