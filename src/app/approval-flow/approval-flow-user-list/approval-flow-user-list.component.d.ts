import { AfterViewInit, ChangeDetectorRef, EventEmitter, OnChanges, OnDestroy, QueryList, SimpleChanges } from '@angular/core';
import { BaseListItem, ListComponent, SelectionChangeEvent, StandardListItemComponent } from '@fundamental-ngx/platform/list';
import { ApprovalUser } from '../interfaces';
import { trackByFn } from '../helpers';
import * as i0 from "@angular/core";
/**
 * @deprecated
 * ApprovalFlowUserList component is depricated since version 0.40.0
 */
export declare class ApprovalFlowUserListComponent implements AfterViewInit, OnChanges, OnDestroy {
    private _cdr;
    /** Approval flow users */
    users: ApprovalUser[];
    /** Approval flow selected users */
    selectedUsers: ApprovalUser[];
    /** Whether the list is selectable */
    isSelectable: boolean;
    /** Event emitted on user click */
    onUserClick: EventEmitter<ApprovalUser>;
    /** Event emitted on selection change */
    onSelectionChange: EventEmitter<ApprovalUser[]>;
    /** @hidden */
    list: ListComponent<ApprovalUser>;
    /** @hidden */
    listItems: QueryList<StandardListItemComponent>;
    /** @hidden */
    _selectedItems: BaseListItem[];
    /** @hidden */
    _idPrefix: string;
    /** @hidden */
    _trackByFn: typeof trackByFn;
    /** @hidden */
    _displayUsers: ApprovalUser[];
    /** @hidden */
    private _intervalID?;
    /** @hidden */
    constructor(_cdr: ChangeDetectorRef);
    /** @hidden */
    ngAfterViewInit(): void;
    /** @hidden */
    ngOnChanges(changes: SimpleChanges): void;
    /** @hidden */
    ngOnDestroy(): void;
    /** @hidden */
    _onSelect(event: SelectionChangeEvent): void;
    /** @hidden */
    private _getUsersFromSelectedItems;
    /** @hidden */
    private _collectDataProgressive;
    /** @hidden */
    private _userCollectorIntervalFn;
    /** @hidden */
    private _killInterval;
    static ɵfac: i0.ɵɵFactoryDeclaration<ApprovalFlowUserListComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ApprovalFlowUserListComponent, "fdp-approval-flow-user-list", never, { "users": "users"; "selectedUsers": "selectedUsers"; "isSelectable": "isSelectable"; }, { "onUserClick": "onUserClick"; "onSelectionChange": "onSelectionChange"; }, never, never, false, never>;
}
//# sourceMappingURL=approval-flow-user-list.component.d.ts.map