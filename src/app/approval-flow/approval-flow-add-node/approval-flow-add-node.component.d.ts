import { ChangeDetectorRef, OnDestroy, OnInit, TemplateRef } from '@angular/core';
import { Observable } from 'rxjs';
import { FdDate } from '@fundamental-ngx/core/datetime';
import { DialogRef } from '@fundamental-ngx/core/dialog';
import { ApprovalFlowAddNodeViewService } from '../services/approval-flow-add-node-view.service';
import { displayTeamFn, displayUserFn, trackByFn } from '../helpers';
import { ApprovalNode, ApprovalTeam, ApprovalUser } from '../interfaces';
import { ApprovalFlowTeamDataSource, ApprovalFlowUserDataSource } from '@fundamental-ngx/platform/shared';
import { Nullable } from '@fundamental-ngx/cdk/utils';
import * as i0 from "@angular/core";
export interface AddNodeDialogRefData {
    isEdit?: boolean;
    showNodeTypeSelect?: boolean;
    node?: ApprovalNode;
    nodeTarget?: ApprovalFlowNodeTarget;
    teamDataSource: ApprovalFlowTeamDataSource<ApprovalTeam>;
    userDataSource: ApprovalFlowUserDataSource<ApprovalUser>;
    userDetailsTemplate: TemplateRef<any>;
    checkDueDate?: boolean;
    rtl: boolean;
}
export interface AddNodeDialogFormData {
    node: ApprovalNode;
    nodeType: APPROVAL_FLOW_NODE_TYPES;
    toNextSerial: boolean;
}
export type ApprovalFlowNewNodePlacement = 'before' | 'after' | 'before-all' | 'after-all';
export type ApprovalFlowNodeTarget = ApprovalFlowNewNodePlacement | 'empty' | 'parallel';
export declare enum APPROVAL_FLOW_NODE_TYPES {
    SERIAL = "SERIAL",
    PARALLEL = "PARALLEL"
}
export declare enum APPROVAL_FLOW_APPROVER_TYPES {
    SINGLE_USER = "SINGLE_USER",
    ANYONE = "ANYONE",
    EVERYONE = "EVERYONE"
}
/**
 * @deprecated
 * ApprovalFlowAddNode component is depricated since version 0.40.0
 */
export declare class ApprovalFlowAddNodeComponent implements OnInit, OnDestroy {
    dialogRef: DialogRef<AddNodeDialogRefData>;
    viewService: ApprovalFlowAddNodeViewService;
    private _cdr;
    /** @hidden */
    _nodeType: APPROVAL_FLOW_NODE_TYPES;
    /** @hidden */
    _nodeTypes: typeof APPROVAL_FLOW_NODE_TYPES;
    /** @hidden */
    _nodeTypesArray: string[];
    /** @hidden */
    _approverType: APPROVAL_FLOW_APPROVER_TYPES;
    /** @hidden */
    _approverTypes: typeof APPROVAL_FLOW_APPROVER_TYPES;
    /** @hidden */
    _approverTypesArray: string[];
    /** @hidden */
    _dueDate: FdDate;
    /** @hidden */
    _selectMode: boolean;
    /** @hidden */
    _approvers: ApprovalUser[];
    /** @hidden */
    _teams: ApprovalTeam[];
    /** @hidden */
    _selectedApprovers: ApprovalUser[];
    /** @hidden */
    _selectedTeam: Nullable<ApprovalTeam>;
    /** @hidden */
    _selectedTeamArray: ApprovalTeam[];
    /** @hidden */
    _selectedTeamMembers: ApprovalUser[];
    /** @hidden */
    _filteredTeamMembers: ApprovalUser[];
    /** @hidden */
    _userToShowDetails?: ApprovalUser;
    /** @hidden */
    _userToShowDetailsData$?: Observable<any>;
    /** @hidden */
    _checkDueDate: boolean;
    /** @hidden */
    _displayUserFn: typeof displayUserFn;
    /** @hidden */
    _displayTeamFn: typeof displayTeamFn;
    /** @hidden */
    _trackByFn: typeof trackByFn;
    /** @hidden */
    _addToNextSerial: boolean;
    /** @hidden */
    private _viewChangeSub;
    /** @hidden */
    private _dataSourceSub;
    /** @hidden */
    constructor(dialogRef: DialogRef<AddNodeDialogRefData>, viewService: ApprovalFlowAddNodeViewService, _cdr: ChangeDetectorRef);
    /** @hidden */
    get _data(): AddNodeDialogRefData;
    /** @hidden */
    get _isSingleUserMode(): boolean;
    /** @hidden */
    get _isMainSubmitButtonDisabled(): boolean;
    /** @hidden */
    get _headerArrowGlyph(): string;
    /** @hidden */
    ngOnInit(): void;
    /** @hidden */
    ngOnDestroy(): void;
    /** @hidden */
    _goToSelectMode(): void;
    /** @hidden */
    _exitSelectMode(): void;
    /** @hidden */
    _setSelectedApprovers(approvers: ApprovalUser[]): void;
    /** @hidden */
    _confirmSelectedApprovers(): void;
    /** @hidden */
    _setSelectedTeam(team: ApprovalTeam): void;
    /** @hidden */
    _confirmSelectedTeam(): void;
    /** @hidden */
    _seeUserDetails(user: ApprovalUser): void;
    /** @hidden */
    _exitUserDetailsMode(): void;
    /** @hidden */
    _viewTeamMembers(team: ApprovalTeam): void;
    /** @hidden */
    _exitTeamMembersMode(): void;
    /** @hidden */
    _submit(): void;
    /** @hidden */
    _onSearchStringChange(searchString?: string): void;
    /** @hidden */
    _setFilteredTeamMembers(users: ApprovalUser[]): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ApprovalFlowAddNodeComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ApprovalFlowAddNodeComponent, "fdp-approval-flow-add-node", never, {}, {}, never, never, false, never>;
}
//# sourceMappingURL=approval-flow-add-node.component.d.ts.map