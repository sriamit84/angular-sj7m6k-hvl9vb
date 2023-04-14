import { EventEmitter, Injectable } from '@angular/core';
import * as i0 from "@angular/core";
export var VIEW_MODES;
(function (VIEW_MODES) {
    VIEW_MODES["SELECT_TEAM"] = "SELECT_TEAM";
    VIEW_MODES["SELECT_USER"] = "SELECT_USER";
    VIEW_MODES["VIEW_TEAM_MEMBERS"] = "VIEW_TEAM_MEMBERS";
    VIEW_MODES["USER_DETAILS"] = "USER_DETAILS";
})(VIEW_MODES || (VIEW_MODES = {}));
export class ApprovalFlowAddNodeViewService {
    constructor() {
        /** @hidden */
        this.onViewChange = new EventEmitter();
    }
    /** @hidden */
    get isUserDetailsMode() {
        return this.currentView === VIEW_MODES.USER_DETAILS;
    }
    /** @hidden */
    get isTeamMembersMode() {
        return this.currentView === VIEW_MODES.VIEW_TEAM_MEMBERS;
    }
    /** @hidden */
    get isSelectUserMode() {
        return this.currentView === VIEW_MODES.SELECT_USER;
    }
    /** @hidden */
    get isSelectTeamMode() {
        return this.currentView === VIEW_MODES.SELECT_TEAM;
    }
    /** @hidden */
    get team() {
        return this.selectedTeam;
    }
    /** @hidden */
    setCurrentView(view) {
        this.currentView = view;
        this.onViewChange.emit();
    }
    /** @hidden */
    resetView() {
        this.currentView = undefined;
        this.onViewChange.emit();
    }
    /** @hidden */
    selectTeam(team) {
        this.selectedTeam = team;
    }
    /** @hidden */
    resetTeam() {
        this.selectedTeam = undefined;
    }
}
ApprovalFlowAddNodeViewService.ɵfac = function ApprovalFlowAddNodeViewService_Factory(t) { return new (t || ApprovalFlowAddNodeViewService)(); };
ApprovalFlowAddNodeViewService.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: ApprovalFlowAddNodeViewService, factory: ApprovalFlowAddNodeViewService.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ApprovalFlowAddNodeViewService, [{
        type: Injectable
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwcm92YWwtZmxvdy1hZGQtbm9kZS12aWV3LnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9saWJzL3BsYXRmb3JtL3NyYy9saWIvYXBwcm92YWwtZmxvdy9zZXJ2aWNlcy9hcHByb3ZhbC1mbG93LWFkZC1ub2RlLXZpZXcuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFHekQsTUFBTSxDQUFOLElBQVksVUFLWDtBQUxELFdBQVksVUFBVTtJQUNsQix5Q0FBMkIsQ0FBQTtJQUMzQix5Q0FBMkIsQ0FBQTtJQUMzQixxREFBdUMsQ0FBQTtJQUN2QywyQ0FBNkIsQ0FBQTtBQUNqQyxDQUFDLEVBTFcsVUFBVSxLQUFWLFVBQVUsUUFLckI7QUFHRCxNQUFNLE9BQU8sOEJBQThCO0lBRDNDO1FBRUksY0FBYztRQUNkLGlCQUFZLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztLQXFEckM7SUE5Q0csY0FBYztJQUNkLElBQUksaUJBQWlCO1FBQ2pCLE9BQU8sSUFBSSxDQUFDLFdBQVcsS0FBSyxVQUFVLENBQUMsWUFBWSxDQUFDO0lBQ3hELENBQUM7SUFFRCxjQUFjO0lBQ2QsSUFBSSxpQkFBaUI7UUFDakIsT0FBTyxJQUFJLENBQUMsV0FBVyxLQUFLLFVBQVUsQ0FBQyxpQkFBaUIsQ0FBQztJQUM3RCxDQUFDO0lBRUQsY0FBYztJQUNkLElBQUksZ0JBQWdCO1FBQ2hCLE9BQU8sSUFBSSxDQUFDLFdBQVcsS0FBSyxVQUFVLENBQUMsV0FBVyxDQUFDO0lBQ3ZELENBQUM7SUFFRCxjQUFjO0lBQ2QsSUFBSSxnQkFBZ0I7UUFDaEIsT0FBTyxJQUFJLENBQUMsV0FBVyxLQUFLLFVBQVUsQ0FBQyxXQUFXLENBQUM7SUFDdkQsQ0FBQztJQUVELGNBQWM7SUFDZCxJQUFJLElBQUk7UUFDSixPQUFPLElBQUksQ0FBQyxZQUFZLENBQUM7SUFDN0IsQ0FBQztJQUVELGNBQWM7SUFDZCxjQUFjLENBQUMsSUFBZ0I7UUFDM0IsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7UUFDeEIsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUM3QixDQUFDO0lBRUQsY0FBYztJQUNkLFNBQVM7UUFDTCxJQUFJLENBQUMsV0FBVyxHQUFHLFNBQVMsQ0FBQztRQUM3QixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQzdCLENBQUM7SUFFRCxjQUFjO0lBQ2QsVUFBVSxDQUFDLElBQWtCO1FBQ3pCLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO0lBQzdCLENBQUM7SUFFRCxjQUFjO0lBQ2QsU0FBUztRQUNMLElBQUksQ0FBQyxZQUFZLEdBQUcsU0FBUyxDQUFDO0lBQ2xDLENBQUM7OzRHQXREUSw4QkFBOEI7b0ZBQTlCLDhCQUE4QixXQUE5Qiw4QkFBOEI7dUZBQTlCLDhCQUE4QjtjQUQxQyxVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXZlbnRFbWl0dGVyLCBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBcHByb3ZhbFRlYW0gfSBmcm9tICcuLi9pbnRlcmZhY2VzJztcblxuZXhwb3J0IGVudW0gVklFV19NT0RFUyB7XG4gICAgU0VMRUNUX1RFQU0gPSAnU0VMRUNUX1RFQU0nLFxuICAgIFNFTEVDVF9VU0VSID0gJ1NFTEVDVF9VU0VSJyxcbiAgICBWSUVXX1RFQU1fTUVNQkVSUyA9ICdWSUVXX1RFQU1fTUVNQkVSUycsXG4gICAgVVNFUl9ERVRBSUxTID0gJ1VTRVJfREVUQUlMUydcbn1cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEFwcHJvdmFsRmxvd0FkZE5vZGVWaWV3U2VydmljZSB7XG4gICAgLyoqIEBoaWRkZW4gKi9cbiAgICBvblZpZXdDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgICAvKiogQGhpZGRlbiAqL1xuICAgIHByaXZhdGUgY3VycmVudFZpZXc/OiBWSUVXX01PREVTO1xuICAgIC8qKiBAaGlkZGVuICovXG4gICAgcHJpdmF0ZSBzZWxlY3RlZFRlYW0/OiBBcHByb3ZhbFRlYW07XG5cbiAgICAvKiogQGhpZGRlbiAqL1xuICAgIGdldCBpc1VzZXJEZXRhaWxzTW9kZSgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY3VycmVudFZpZXcgPT09IFZJRVdfTU9ERVMuVVNFUl9ERVRBSUxTO1xuICAgIH1cblxuICAgIC8qKiBAaGlkZGVuICovXG4gICAgZ2V0IGlzVGVhbU1lbWJlcnNNb2RlKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5jdXJyZW50VmlldyA9PT0gVklFV19NT0RFUy5WSUVXX1RFQU1fTUVNQkVSUztcbiAgICB9XG5cbiAgICAvKiogQGhpZGRlbiAqL1xuICAgIGdldCBpc1NlbGVjdFVzZXJNb2RlKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5jdXJyZW50VmlldyA9PT0gVklFV19NT0RFUy5TRUxFQ1RfVVNFUjtcbiAgICB9XG5cbiAgICAvKiogQGhpZGRlbiAqL1xuICAgIGdldCBpc1NlbGVjdFRlYW1Nb2RlKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5jdXJyZW50VmlldyA9PT0gVklFV19NT0RFUy5TRUxFQ1RfVEVBTTtcbiAgICB9XG5cbiAgICAvKiogQGhpZGRlbiAqL1xuICAgIGdldCB0ZWFtKCk6IEFwcHJvdmFsVGVhbSB8IHVuZGVmaW5lZCB7XG4gICAgICAgIHJldHVybiB0aGlzLnNlbGVjdGVkVGVhbTtcbiAgICB9XG5cbiAgICAvKiogQGhpZGRlbiAqL1xuICAgIHNldEN1cnJlbnRWaWV3KHZpZXc6IFZJRVdfTU9ERVMpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5jdXJyZW50VmlldyA9IHZpZXc7XG4gICAgICAgIHRoaXMub25WaWV3Q2hhbmdlLmVtaXQoKTtcbiAgICB9XG5cbiAgICAvKiogQGhpZGRlbiAqL1xuICAgIHJlc2V0VmlldygpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5jdXJyZW50VmlldyA9IHVuZGVmaW5lZDtcbiAgICAgICAgdGhpcy5vblZpZXdDaGFuZ2UuZW1pdCgpO1xuICAgIH1cblxuICAgIC8qKiBAaGlkZGVuICovXG4gICAgc2VsZWN0VGVhbSh0ZWFtOiBBcHByb3ZhbFRlYW0pOiB2b2lkIHtcbiAgICAgICAgdGhpcy5zZWxlY3RlZFRlYW0gPSB0ZWFtO1xuICAgIH1cblxuICAgIC8qKiBAaGlkZGVuICovXG4gICAgcmVzZXRUZWFtKCk6IHZvaWQge1xuICAgICAgICB0aGlzLnNlbGVjdGVkVGVhbSA9IHVuZGVmaW5lZDtcbiAgICB9XG59XG4iXX0=