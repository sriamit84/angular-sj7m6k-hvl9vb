import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, Output, QueryList, ViewChild, ViewChildren, ViewEncapsulation } from '@angular/core';
import { ListComponent, StandardListItemComponent } from '@fundamental-ngx/platform/list';
import { trackByFn } from '../helpers';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/forms";
import * as i3 from "@fundamental-ngx/platform/list";
import * as i4 from "@fundamental-ngx/i18n";
function ApprovalFlowUserListComponent_div_0_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "fdTranslate");
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(2, 1, "platformApprovalFlow.userListSelectedItemsCountSingular"), " ");
} }
const _c0 = function (a0) { return { count: a0 }; };
function ApprovalFlowUserListComponent_div_0_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0);
    i0.ɵɵpipe(1, "fdTranslate");
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext(2);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind2(1, 1, "platformApprovalFlow.userListSelectedItemsCountPlural", i0.ɵɵpureFunction1(4, _c0, ctx_r4._selectedItems.length)), " ");
} }
function ApprovalFlowUserListComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 3);
    i0.ɵɵtemplate(1, ApprovalFlowUserListComponent_div_0_ng_container_1_Template, 3, 3, "ng-container", 4);
    i0.ɵɵtemplate(2, ApprovalFlowUserListComponent_div_0_ng_template_2_Template, 2, 6, "ng-template", null, 5, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const _r3 = i0.ɵɵreference(3);
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0._selectedItems.length === 1)("ngIfElse", _r3);
} }
function ApprovalFlowUserListComponent_fdp_standard_list_item_2_Template(rf, ctx) { if (rf & 1) {
    const _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "fdp-standard-list-item", 6);
    i0.ɵɵlistener("click", function ApprovalFlowUserListComponent_fdp_standard_list_item_2_Template_fdp_standard_list_item_click_0_listener($event) { const restoredCtx = i0.ɵɵrestoreView(_r7); const _user_r5 = restoredCtx.$implicit; const ctx_r6 = i0.ɵɵnextContext(); $event.stopPropagation(); return i0.ɵɵresetView(ctx_r6.onUserClick.emit(_user_r5)); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const _user_r5 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("avatarSrc", _user_r5.imgUrl)("avatarTitle", _user_r5.name)("description", _user_r5.description)("ariaLabel", _user_r5.name)("title", _user_r5.name);
    i0.ɵɵattribute("id", ctx_r1._idPrefix + _user_r5.id);
} }
const ITEMS_RENDERED_AT_ONCE = 100;
const INTERVAL_IN_MS = 10;
/**
 * @deprecated
 * ApprovalFlowUserList component is depricated since version 0.40.0
 */
export class ApprovalFlowUserListComponent {
    /** @hidden */
    constructor(_cdr) {
        this._cdr = _cdr;
        /** Approval flow users */
        this.users = [];
        /** Approval flow selected users */
        this.selectedUsers = [];
        /** Whether the list is selectable */
        this.isSelectable = true;
        /** Event emitted on user click */
        // eslint-disable-next-line @angular-eslint/no-output-on-prefix
        this.onUserClick = new EventEmitter();
        /** Event emitted on selection change */
        // eslint-disable-next-line @angular-eslint/no-output-on-prefix
        this.onSelectionChange = new EventEmitter();
        /** @hidden */
        this._selectedItems = [];
        /** @hidden */
        this._idPrefix = 'approval-node-user-';
        /** @hidden */
        this._trackByFn = trackByFn;
        /** @hidden */
        this._displayUsers = [];
    }
    /** @hidden */
    ngAfterViewInit() {
        if (this.selectedUsers.length) {
            const selectedApproversNames = this.selectedUsers.map((approver) => approver.name);
            this._selectedItems = this.listItems.filter((item) => !!item.avatar?.ariaLabel && selectedApproversNames.includes(item.avatar.ariaLabel));
            this._selectedItems.forEach((item) => {
                item._selected = true;
                this.list._selectItem(item);
            });
            this._cdr.detectChanges();
        }
    }
    /** @hidden */
    ngOnChanges(changes) {
        if (changes.users) {
            this._collectDataProgressive();
        }
    }
    /** @hidden */
    ngOnDestroy() {
        this._killInterval();
    }
    /** @hidden */
    _onSelect(event) {
        this._selectedItems = event.selectedItems;
        this.onSelectionChange.emit(this._getUsersFromSelectedItems(event.selectedItems));
    }
    /** @hidden */
    _getUsersFromSelectedItems(items) {
        return items
            .map((item) => this.users.find((user) => `${this._idPrefix + user.id}` === item.itemEl.nativeElement.id))
            .filter((u) => !!u);
    }
    /** @hidden */
    _collectDataProgressive() {
        this._killInterval();
        this._displayUsers = [];
        if (!this.users?.length) {
            return;
        }
        const collectionTracker = { currentIndex: 0 };
        this._userCollectorIntervalFn(collectionTracker);
        this._intervalID = window.setInterval(this._userCollectorIntervalFn.bind(this), INTERVAL_IN_MS, collectionTracker);
    }
    /** @hidden */
    _userCollectorIntervalFn(tracker) {
        const nextIndex = tracker.currentIndex + ITEMS_RENDERED_AT_ONCE;
        const collectedUsers = [];
        for (let i = tracker.currentIndex; i <= nextIndex; i++) {
            if (i >= this.users.length) {
                this._killInterval();
                break;
            }
            collectedUsers.push(this.users[i]);
        }
        tracker.currentIndex += ITEMS_RENDERED_AT_ONCE;
        this._displayUsers.push(...collectedUsers);
        this._cdr.markForCheck();
    }
    /** @hidden */
    _killInterval() {
        if (this._intervalID) {
            clearInterval(this._intervalID);
        }
    }
}
ApprovalFlowUserListComponent.ɵfac = function ApprovalFlowUserListComponent_Factory(t) { return new (t || ApprovalFlowUserListComponent)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
ApprovalFlowUserListComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ApprovalFlowUserListComponent, selectors: [["fdp-approval-flow-user-list"]], viewQuery: function ApprovalFlowUserListComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(ListComponent, 5);
        i0.ɵɵviewQuery(StandardListItemComponent, 5);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.list = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.listItems = _t);
    } }, hostAttrs: [1, "fdp-approval-flow-user-list"], inputs: { users: "users", selectedUsers: "selectedUsers", isSelectable: "isSelectable" }, outputs: { onUserClick: "onUserClick", onSelectionChange: "onSelectionChange" }, features: [i0.ɵɵNgOnChangesFeature], decls: 3, vars: 9, consts: [["class", "fdp-approval-flow-user-list__selected-count", 4, "ngIf"], [3, "selectionMode", "selection", "navigationIndicator", "hasByLine", "ngModel", "selectedItems", "ngModelChange", "selectedItemChange"], [3, "avatarSrc", "avatarTitle", "description", "ariaLabel", "title", "click", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "fdp-approval-flow-user-list__selected-count"], [4, "ngIf", "ngIfElse"], ["multipleItems", ""], [3, "avatarSrc", "avatarTitle", "description", "ariaLabel", "title", "click"]], template: function ApprovalFlowUserListComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, ApprovalFlowUserListComponent_div_0_Template, 4, 2, "div", 0);
        i0.ɵɵelementStart(1, "fdp-list", 1);
        i0.ɵɵlistener("ngModelChange", function ApprovalFlowUserListComponent_Template_fdp_list_ngModelChange_1_listener($event) { return ctx._selectedItems = $event; })("selectedItemChange", function ApprovalFlowUserListComponent_Template_fdp_list_selectedItemChange_1_listener($event) { return ctx._onSelect($event); });
        i0.ɵɵtemplate(2, ApprovalFlowUserListComponent_fdp_standard_list_item_2_Template, 1, 6, "fdp-standard-list-item", 2);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", ctx._selectedItems.length);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("selectionMode", ctx.isSelectable ? "multi" : "none")("selection", ctx.isSelectable)("navigationIndicator", true)("hasByLine", true)("ngModel", ctx._selectedItems)("selectedItems", ctx._selectedItems);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngForOf", ctx._displayUsers)("ngForTrackBy", ctx._trackByFn);
    } }, dependencies: [i1.NgForOf, i1.NgIf, i2.NgControlStatus, i2.NgModel, i3.ListComponent, i3.StandardListItemComponent, i4.FdTranslatePipe], styles: [".fdp-approval-flow-user-list{display:block;margin-top:-1rem}.fdp-approval-flow-user-list__selected-count{line-height:2rem;margin:0 -1rem;padding:0 1rem;background:#f2f2f2;background:var(--sapList_HeaderBackground, #f2f2f2)}\n"], encapsulation: 2, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ApprovalFlowUserListComponent, [{
        type: Component,
        args: [{ selector: 'fdp-approval-flow-user-list', encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, host: {
                    class: 'fdp-approval-flow-user-list'
                }, template: "<div class=\"fdp-approval-flow-user-list__selected-count\" *ngIf=\"_selectedItems.length\">\n    <ng-container *ngIf=\"_selectedItems.length === 1; else multipleItems\">\n        {{ 'platformApprovalFlow.userListSelectedItemsCountSingular' | fdTranslate }}\n    </ng-container>\n\n    <ng-template #multipleItems>\n        {{ 'platformApprovalFlow.userListSelectedItemsCountPlural' | fdTranslate: { count: _selectedItems.length } }}\n    </ng-template>\n</div>\n\n<fdp-list\n    [selectionMode]=\"isSelectable ? 'multi' : 'none'\"\n    [selection]=\"isSelectable\"\n    [navigationIndicator]=\"true\"\n    [hasByLine]=\"true\"\n    [(ngModel)]=\"_selectedItems\"\n    [selectedItems]=\"_selectedItems\"\n    (selectedItemChange)=\"_onSelect($event)\"\n>\n    <fdp-standard-list-item\n        *ngFor=\"let _user of _displayUsers; trackBy: _trackByFn\"\n        [attr.id]=\"_idPrefix + _user.id\"\n        [avatarSrc]=\"_user.imgUrl\"\n        [avatarTitle]=\"_user.name\"\n        [description]=\"_user.description\"\n        [ariaLabel]=\"_user.name\"\n        [title]=\"_user.name\"\n        (click)=\"$event.stopPropagation(); onUserClick.emit(_user)\"\n    ></fdp-standard-list-item>\n</fdp-list>\n", styles: [".fdp-approval-flow-user-list{display:block;margin-top:-1rem}.fdp-approval-flow-user-list__selected-count{line-height:2rem;margin:0 -1rem;padding:0 1rem;background:#f2f2f2;background:var(--sapList_HeaderBackground, #f2f2f2)}\n"] }]
    }], function () { return [{ type: i0.ChangeDetectorRef }]; }, { users: [{
            type: Input
        }], selectedUsers: [{
            type: Input
        }], isSelectable: [{
            type: Input
        }], 
    // eslint-disable-next-line @angular-eslint/no-output-on-prefix
    onUserClick: [{
            type: Output
        }], 
    // eslint-disable-next-line @angular-eslint/no-output-on-prefix
    onSelectionChange: [{
            type: Output
        }], list: [{
            type: ViewChild,
            args: [ListComponent]
        }], listItems: [{
            type: ViewChildren,
            args: [StandardListItemComponent]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwcm92YWwtZmxvdy11c2VyLWxpc3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vbGlicy9wbGF0Zm9ybS9zcmMvbGliL2FwcHJvdmFsLWZsb3cvYXBwcm92YWwtZmxvdy11c2VyLWxpc3QvYXBwcm92YWwtZmxvdy11c2VyLWxpc3QuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vbGlicy9wbGF0Zm9ybS9zcmMvbGliL2FwcHJvdmFsLWZsb3cvYXBwcm92YWwtZmxvdy11c2VyLWxpc3QvYXBwcm92YWwtZmxvdy11c2VyLWxpc3QuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUVILHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFlBQVksRUFDWixLQUFLLEVBR0wsTUFBTSxFQUNOLFNBQVMsRUFFVCxTQUFTLEVBQ1QsWUFBWSxFQUNaLGlCQUFpQixFQUNwQixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBRUgsYUFBYSxFQUViLHlCQUF5QixFQUM1QixNQUFNLGdDQUFnQyxDQUFDO0FBRXhDLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxZQUFZLENBQUM7Ozs7Ozs7SUN2Qm5DLDZCQUFzRTtJQUNsRSxZQUNKOztJQUFBLDBCQUFlOztJQURYLGVBQ0o7SUFESSxnSEFDSjs7OztJQUdJLFlBQ0o7Ozs7SUFESSx3S0FDSjs7O0lBUEosOEJBQXVGO0lBQ25GLHNHQUVlO0lBRWYscUlBRWM7SUFDbEIsaUJBQU07Ozs7SUFQYSxlQUFtQztJQUFuQyx5REFBbUMsaUJBQUE7Ozs7SUFrQmxELGlEQVNDO0lBREcsd1FBQVMsd0JBQXdCLFNBQUUsZUFBQSxpQ0FBdUIsQ0FBQSxJQUFDO0lBQzlELGlCQUF5Qjs7OztJQU50QiwyQ0FBMEIsOEJBQUEscUNBQUEsNEJBQUEsd0JBQUE7SUFEMUIsb0RBQWdDOztBREt4QyxNQUFNLHNCQUFz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YTtRQUNqQixJQUFJLElBQUksQ0FBQyxXQUFXLEVBQUU7WUFDbEIsYUFBYSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztTQUNuQztJQUNMLENBQUM7OzBHQTFJUSw2QkFBNkI7Z0ZBQTdCLDZCQUE2Qjt1QkF3QjNCLGFBQWE7dUJBSVYseUJBQXlCOzs7Ozs7UUN2RTNDLDhFQVFNO1FBRU4sbUNBUUM7UUFIRyxpS0FBNEIsK0hBRU4scUJBQWlCLElBRlg7UUFJNUIsb0hBUzBCO1FBQzlCLGlCQUFXOztRQTdCK0MsZ0RBQTJCO1FBV2pGLGVBQWlEO1FBQWpELG1FQUFpRCwrQkFBQSw2QkFBQSxtQkFBQSwrQkFBQSxxQ0FBQTtRQVMzQixlQUFrQjtRQUFsQiwyQ0FBa0IsZ0NBQUE7O3VGRHVCL0IsNkJBQTZCO2NBVnpDLFNBQVM7MkJBQ0ksNkJBQTZCLGlCQUd4QixpQkFBaUIsQ0FBQyxJQUFJLG1CQUNwQix1QkFBdUIsQ0FBQyxNQUFNLFFBQ3pDO29CQUNGLEtBQUssRUFBRSw2QkFBNkI7aUJBQ3ZDO29FQUtELEtBQUs7a0JBREosS0FBSztZQUtOLGFBQWE7a0JBRFosS0FBSztZQUtOLFlBQVk7a0JBRFgsS0FBSzs7SUFLTiwrREFBK0Q7SUFDL0QsV0FBVztrQkFGVixNQUFNOztJQU1QLCtEQUErRDtJQUMvRCxpQkFBaUI7a0JBRmhCLE1BQU07WUFNUCxJQUFJO2tCQURILFNBQVM7bUJBQUMsYUFBYTtZQUt4QixTQUFTO2tCQURSLFlBQVk7bUJBQUMseUJBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgICBBZnRlclZpZXdJbml0LFxuICAgIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICAgIENoYW5nZURldGVjdG9yUmVmLFxuICAgIENvbXBvbmVudCxcbiAgICBFdmVudEVtaXR0ZXIsXG4gICAgSW5wdXQsXG4gICAgT25DaGFuZ2VzLFxuICAgIE9uRGVzdHJveSxcbiAgICBPdXRwdXQsXG4gICAgUXVlcnlMaXN0LFxuICAgIFNpbXBsZUNoYW5nZXMsXG4gICAgVmlld0NoaWxkLFxuICAgIFZpZXdDaGlsZHJlbixcbiAgICBWaWV3RW5jYXBzdWxhdGlvblxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHtcbiAgICBCYXNlTGlzdEl0ZW0sXG4gICAgTGlzdENvbXBvbmVudCxcbiAgICBTZWxlY3Rpb25DaGFuZ2VFdmVudCxcbiAgICBTdGFuZGFyZExpc3RJdGVtQ29tcG9uZW50XG59IGZyb20gJ0BmdW5kYW1lbnRhbC1uZ3gvcGxhdGZvcm0vbGlzdCc7XG5pbXBvcnQgeyBBcHByb3ZhbFVzZXIgfSBmcm9tICcuLi9pbnRlcmZhY2VzJztcbmltcG9ydCB7IHRyYWNrQnlGbiB9IGZyb20gJy4uL2hlbHBlcnMnO1xuXG5jb25zdCBJVEVNU19SRU5ERVJFRF9BVF9PTkNFID0gMTAwO1xuY29uc3QgSU5URVJWQUxfSU5fTVMgPSAxMDtcblxuLyoqXG4gKiBAZGVwcmVjYXRlZFxuICogQXBwcm92YWxGbG93VXNlckxpc3QgY29tcG9uZW50IGlzIGRlcHJpY2F0ZWQgc2luY2UgdmVyc2lvbiAwLjQwLjBcbiAqL1xuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdmZHAtYXBwcm92YWwtZmxvdy11c2VyLWxpc3QnLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9hcHByb3ZhbC1mbG93LXVzZXItbGlzdC5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJy4vYXBwcm92YWwtZmxvdy11c2VyLWxpc3QuY29tcG9uZW50LnNjc3MnXSxcbiAgICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICAgIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICAgIGhvc3Q6IHtcbiAgICAgICAgY2xhc3M6ICdmZHAtYXBwcm92YWwtZmxvdy11c2VyLWxpc3QnXG4gICAgfVxufSlcbmV4cG9ydCBjbGFzcyBBcHByb3ZhbEZsb3dVc2VyTGlzdENvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQsIE9uQ2hhbmdlcywgT25EZXN0cm95IHtcbiAgICAvKiogQXBwcm92YWwgZmxvdyB1c2VycyAqL1xuICAgIEBJbnB1dCgpXG4gICAgdXNlcnM6IEFwcHJvdmFsVXNlcltdID0gW107XG5cbiAgICAvKiogQXBwcm92YWwgZmxvdyBzZWxlY3RlZCB1c2VycyAqL1xuICAgIEBJbnB1dCgpXG4gICAgc2VsZWN0ZWRVc2VyczogQXBwcm92YWxVc2VyW10gPSBbXTtcblxuICAgIC8qKiBXaGV0aGVyIHRoZSBsaXN0IGlzIHNlbGVjdGFibGUgKi9cbiAgICBASW5wdXQoKVxuICAgIGlzU2VsZWN0YWJsZSA9IHRydWU7XG5cbiAgICAvKiogRXZlbnQgZW1pdHRlZCBvbiB1c2VyIGNsaWNrICovXG4gICAgQE91dHB1dCgpXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEBhbmd1bGFyLWVzbGludC9uby1vdXRwdXQtb24tcHJlZml4XG4gICAgb25Vc2VyQ2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyPEFwcHJvdmFsVXNlcj4oKTtcblxuICAgIC8qKiBFdmVudCBlbWl0dGVkIG9uIHNlbGVjdGlvbiBjaGFuZ2UgKi9cbiAgICBAT3V0cHV0KClcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQGFuZ3VsYXItZXNsaW50L25vLW91dHB1dC1vbi1wcmVmaXhcbiAgICBvblNlbGVjdGlvbkNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8QXBwcm92YWxVc2VyW10+KCk7XG5cbiAgICAvKiogQGhpZGRlbiAqL1xuICAgIEBWaWV3Q2hpbGQoTGlzdENvbXBvbmVudClcbiAgICBsaXN0OiBMaXN0Q29tcG9uZW50PEFwcHJvdmFsVXNlcj47XG5cbiAgICAvKiogQGhpZGRlbiAqL1xuICAgIEBWaWV3Q2hpbGRyZW4oU3RhbmRhcmRMaXN0SXRlbUNvbXBvbmVudClcbiAgICBsaXN0SXRlbXM6IFF1ZXJ5TGlzdDxTdGFuZGFyZExpc3RJdGVtQ29tcG9uZW50PjtcblxuICAgIC8qKiBAaGlkZGVuICovXG4gICAgX3NlbGVjdGVkSXRlbXM6IEJhc2VMaXN0SXRlbVtdID0gW107XG5cbiAgICAvKiogQGhpZGRlbiAqL1xuICAgIF9pZFByZWZpeCA9ICdhcHByb3ZhbC1ub2RlLXVzZXItJztcblxuICAgIC8qKiBAaGlkZGVuICovXG4gICAgX3RyYWNrQnlGbiA9IHRyYWNrQnlGbjtcblxuICAgIC8qKiBAaGlkZGVuICovXG4gICAgX2Rpc3BsYXlVc2VyczogQXBwcm92YWxVc2VyW10gPSBbXTtcblxuICAgIC8qKiBAaGlkZGVuICovXG4gICAgcHJpdmF0ZSBfaW50ZXJ2YWxJRD86IG51bWJlcjtcblxuICAgIC8qKiBAaGlkZGVuICovXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfY2RyOiBDaGFuZ2VEZXRlY3RvclJlZikge31cblxuICAgIC8qKiBAaGlkZGVuICovXG4gICAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5zZWxlY3RlZFVzZXJzLmxlbmd0aCkge1xuICAgICAgICAgICAgY29uc3Qgc2VsZWN0ZWRBcHByb3ZlcnNOYW1lcyA9IHRoaXMuc2VsZWN0ZWRVc2Vycy5tYXAoKGFwcHJvdmVyKSA9PiBhcHByb3Zlci5uYW1lKTtcblxuICAgICAgICAgICAgdGhpcy5fc2VsZWN0ZWRJdGVtcyA9IHRoaXMubGlzdEl0ZW1zLmZpbHRlcihcbiAgICAgICAgICAgICAgICAoaXRlbSkgPT4gISFpdGVtLmF2YXRhcj8uYXJpYUxhYmVsICYmIHNlbGVjdGVkQXBwcm92ZXJzTmFtZXMuaW5jbHVkZXMoaXRlbS5hdmF0YXIuYXJpYUxhYmVsKVxuICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgdGhpcy5fc2VsZWN0ZWRJdGVtcy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgaXRlbS5fc2VsZWN0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMubGlzdC5fc2VsZWN0SXRlbShpdGVtKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB0aGlzLl9jZHIuZGV0ZWN0Q2hhbmdlcygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqIEBoaWRkZW4gKi9cbiAgICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgICAgIGlmIChjaGFuZ2VzLnVzZXJzKSB7XG4gICAgICAgICAgICB0aGlzLl9jb2xsZWN0RGF0YVByb2dyZXNzaXZlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKiogQGhpZGRlbiAqL1xuICAgIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgICAgICB0aGlzLl9raWxsSW50ZXJ2YWwoKTtcbiAgICB9XG5cbiAgICAvKiogQGhpZGRlbiAqL1xuICAgIF9vblNlbGVjdChldmVudDogU2VsZWN0aW9uQ2hhbmdlRXZlbnQpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5fc2VsZWN0ZWRJdGVtcyA9IGV2ZW50LnNlbGVjdGVkSXRlbXM7XG5cbiAgICAgICAgdGhpcy5vblNlbGVjdGlvbkNoYW5nZS5lbWl0KHRoaXMuX2dldFVzZXJzRnJvbVNlbGVjdGVkSXRlbXMoZXZlbnQuc2VsZWN0ZWRJdGVtcykpO1xuICAgIH1cblxuICAgIC8qKiBAaGlkZGVuICovXG4gICAgcHJpdmF0ZSBfZ2V0VXNlcnNGcm9tU2VsZWN0ZWRJdGVtcyhpdGVtczogQmFzZUxpc3RJdGVtW10pOiBBcHByb3ZhbFVzZXJbXSB7XG4gICAgICAgIHJldHVybiBpdGVtc1xuICAgICAgICAgICAgLm1hcCgoaXRlbSkgPT4gdGhpcy51c2Vycy5maW5kKCh1c2VyKSA9PiBgJHt0aGlzLl9pZFByZWZpeCArIHVzZXIuaWR9YCA9PT0gaXRlbS5pdGVtRWwubmF0aXZlRWxlbWVudC5pZCkpXG4gICAgICAgICAgICAuZmlsdGVyKCh1KTogdSBpcyBBcHByb3ZhbFVzZXIgPT4gISF1KTtcbiAgICB9XG5cbiAgICAvKiogQGhpZGRlbiAqL1xuICAgIHByaXZhdGUgX2NvbGxlY3REYXRhUHJvZ3Jlc3NpdmUoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuX2tpbGxJbnRlcnZhbCgpO1xuICAgICAgICB0aGlzLl9kaXNwbGF5VXNlcnMgPSBbXTtcblxuICAgICAgICBpZiAoIXRoaXMudXNlcnM/Lmxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgY29sbGVjdGlvblRyYWNrZXIgPSB7IGN1cnJlbnRJbmRleDogMCB9O1xuXG4gICAgICAgIHRoaXMuX3VzZXJDb2xsZWN0b3JJbnRlcnZhbEZuKGNvbGxlY3Rpb25UcmFja2VyKTtcbiAgICAgICAgdGhpcy5faW50ZXJ2YWxJRCA9IHdpbmRvdy5zZXRJbnRlcnZhbChcbiAgICAgICAgICAgIHRoaXMuX3VzZXJDb2xsZWN0b3JJbnRlcnZhbEZuLmJpbmQodGhpcyksXG4gICAgICAgICAgICBJTlRFUlZBTF9JTl9NUyxcbiAgICAgICAgICAgIGNvbGxlY3Rpb25UcmFja2VyXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgLyoqIEBoaWRkZW4gKi9cbiAgICBwcml2YXRlIF91c2VyQ29sbGVjdG9ySW50ZXJ2YWxGbih0cmFja2VyOiB7IGN1cnJlbnRJbmRleDogbnVtYmVyIH0pOiB2b2lkIHtcbiAgICAgICAgY29uc3QgbmV4dEluZGV4ID0gdHJhY2tlci5jdXJyZW50SW5kZXggKyBJVEVNU19SRU5ERVJFRF9BVF9PTkNFO1xuXG4gICAgICAgIGNvbnN0IGNvbGxlY3RlZFVzZXJzOiBBcHByb3ZhbFVzZXJbXSA9IFtdO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSB0cmFja2VyLmN1cnJlbnRJbmRleDsgaSA8PSBuZXh0SW5kZXg7IGkrKykge1xuICAgICAgICAgICAgaWYgKGkgPj0gdGhpcy51c2Vycy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9raWxsSW50ZXJ2YWwoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29sbGVjdGVkVXNlcnMucHVzaCh0aGlzLnVzZXJzW2ldKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRyYWNrZXIuY3VycmVudEluZGV4ICs9IElURU1TX1JFTkRFUkVEX0FUX09OQ0U7XG5cbiAgICAgICAgdGhpcy5fZGlzcGxheVVzZXJzLnB1c2goLi4uY29sbGVjdGVkVXNlcnMpO1xuICAgICAgICB0aGlzLl9jZHIubWFya0ZvckNoZWNrKCk7XG4gICAgfVxuXG4gICAgLyoqIEBoaWRkZW4gKi9cbiAgICBwcml2YXRlIF9raWxsSW50ZXJ2YWwoKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLl9pbnRlcnZhbElEKSB7XG4gICAgICAgICAgICBjbGVhckludGVydmFsKHRoaXMuX2ludGVydmFsSUQpO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiPGRpdiBjbGFzcz1cImZkcC1hcHByb3ZhbC1mbG93LXVzZXItbGlzdF9fc2VsZWN0ZWQtY291bnRcIiAqbmdJZj1cIl9zZWxlY3RlZEl0ZW1zLmxlbmd0aFwiPlxuICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJfc2VsZWN0ZWRJdGVtcy5sZW5ndGggPT09IDE7IGVsc2UgbXVsdGlwbGVJdGVtc1wiPlxuICAgICAgICB7eyAncGxhdGZvcm1BcHByb3ZhbEZsb3cudXNlckxpc3RTZWxlY3RlZEl0ZW1zQ291bnRTaW5ndWxhcicgfCBmZFRyYW5zbGF0ZSB9fVxuICAgIDwvbmctY29udGFpbmVyPlxuXG4gICAgPG5nLXRlbXBsYXRlICNtdWx0aXBsZUl0ZW1zPlxuICAgICAgICB7eyAncGxhdGZvcm1BcHByb3ZhbEZsb3cudXNlckxpc3RTZWxlY3RlZEl0ZW1zQ291bnRQbHVyYWwnIHwgZmRUcmFuc2xhdGU6IHsgY291bnQ6IF9zZWxlY3RlZEl0ZW1zLmxlbmd0aCB9IH19XG4gICAgPC9uZy10ZW1wbGF0ZT5cbjwvZGl2PlxuXG48ZmRwLWxpc3RcbiAgICBbc2VsZWN0aW9uTW9kZV09XCJpc1NlbGVjdGFibGUgPyAnbXVsdGknIDogJ25vbmUnXCJcbiAgICBbc2VsZWN0aW9uXT1cImlzU2VsZWN0YWJsZVwiXG4gICAgW25hdmlnYXRpb25JbmRpY2F0b3JdPVwidHJ1ZVwiXG4gICAgW2hhc0J5TGluZV09XCJ0cnVlXCJcbiAgICBbKG5nTW9kZWwpXT1cIl9zZWxlY3RlZEl0ZW1zXCJcbiAgICBbc2VsZWN0ZWRJdGVtc109XCJfc2VsZWN0ZWRJdGVtc1wiXG4gICAgKHNlbGVjdGVkSXRlbUNoYW5nZSk9XCJfb25TZWxlY3QoJGV2ZW50KVwiXG4+XG4gICAgPGZkcC1zdGFuZGFyZC1saXN0LWl0ZW1cbiAgICAgICAgKm5nRm9yPVwibGV0IF91c2VyIG9mIF9kaXNwbGF5VXNlcnM7IHRyYWNrQnk6IF90cmFja0J5Rm5cIlxuICAgICAgICBbYXR0ci5pZF09XCJfaWRQcmVmaXggKyBfdXNlci5pZFwiXG4gICAgICAgIFthdmF0YXJTcmNdPVwiX3VzZXIuaW1nVXJsXCJcbiAgICAgICAgW2F2YXRhclRpdGxlXT1cIl91c2VyLm5hbWVcIlxuICAgICAgICBbZGVzY3JpcHRpb25dPVwiX3VzZXIuZGVzY3JpcHRpb25cIlxuICAgICAgICBbYXJpYUxhYmVsXT1cIl91c2VyLm5hbWVcIlxuICAgICAgICBbdGl0bGVdPVwiX3VzZXIubmFtZVwiXG4gICAgICAgIChjbGljayk9XCIkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7IG9uVXNlckNsaWNrLmVtaXQoX3VzZXIpXCJcbiAgICA+PC9mZHAtc3RhbmRhcmQtbGlzdC1pdGVtPlxuPC9mZHAtbGlzdD5cbiJdfQ==