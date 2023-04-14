import { ChangeDetectorRef, OnInit, TemplateRef } from '@angular/core';
import { Observable } from 'rxjs';
import { DialogRef } from '@fundamental-ngx/core/dialog';
import { ApprovalNode, ApprovalUser } from '../interfaces';
import { ApprovalFlowUserDataSource } from '@fundamental-ngx/platform/shared';
import * as i0 from "@angular/core";
export interface ApprovalFlowApproverDetailsDialogRefData {
    node?: ApprovalNode;
    watcher?: ApprovalUser;
    allowSendReminder?: boolean;
    userDataSource: ApprovalFlowUserDataSource<ApprovalUser>;
    userDetailsTemplate: TemplateRef<any>;
    rtl?: boolean;
}
/**
 * @deprecated
 * ApprovalFlowApproverDetails component is depricated since version 0.40.0
 */
export declare class ApprovalFlowApproverDetailsComponent implements OnInit {
    dialogRef: DialogRef<ApprovalFlowApproverDetailsDialogRefData>;
    private _cdr;
    /** @hidden */
    _isListMode: boolean;
    /** @hidden */
    _listItems: ApprovalUser[];
    /** @hidden */
    _selectedUsers: ApprovalUser[];
    /** @hidden */
    _userToShowDetails?: ApprovalUser;
    /** @hidden */
    _userToShowDetailsData$: Observable<any>;
    /** @hidden */
    constructor(dialogRef: DialogRef<ApprovalFlowApproverDetailsDialogRefData>, _cdr: ChangeDetectorRef);
    /** @hidden */
    get _data(): ApprovalFlowApproverDetailsDialogRefData;
    /** @hidden */
    ngOnInit(): void;
    /** @hidden */
    _setListItems(items?: ApprovalUser[]): void;
    /** @hidden */
    _exitUserDetailsMode(): void;
    /** @hidden */
    _seeUserDetails(user: ApprovalUser): void;
    /** @hidden */
    _sendReminder(): void;
    /** @hidden */
    _onSearchStringChange(searchString: string): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ApprovalFlowApproverDetailsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ApprovalFlowApproverDetailsComponent, "fdp-approval-flow-approver-details", never, {}, {}, never, never, false, never>;
}
//# sourceMappingURL=approval-flow-approver-details.component.d.ts.map