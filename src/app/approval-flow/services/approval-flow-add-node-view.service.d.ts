import { EventEmitter } from '@angular/core';
import { ApprovalTeam } from '../interfaces';
import * as i0 from "@angular/core";
export declare enum VIEW_MODES {
    SELECT_TEAM = "SELECT_TEAM",
    SELECT_USER = "SELECT_USER",
    VIEW_TEAM_MEMBERS = "VIEW_TEAM_MEMBERS",
    USER_DETAILS = "USER_DETAILS"
}
export declare class ApprovalFlowAddNodeViewService {
    /** @hidden */
    onViewChange: EventEmitter<any>;
    /** @hidden */
    private currentView?;
    /** @hidden */
    private selectedTeam?;
    /** @hidden */
    get isUserDetailsMode(): boolean;
    /** @hidden */
    get isTeamMembersMode(): boolean;
    /** @hidden */
    get isSelectUserMode(): boolean;
    /** @hidden */
    get isSelectTeamMode(): boolean;
    /** @hidden */
    get team(): ApprovalTeam | undefined;
    /** @hidden */
    setCurrentView(view: VIEW_MODES): void;
    /** @hidden */
    resetView(): void;
    /** @hidden */
    selectTeam(team: ApprovalTeam): void;
    /** @hidden */
    resetTeam(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ApprovalFlowAddNodeViewService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ApprovalFlowAddNodeViewService>;
}
//# sourceMappingURL=approval-flow-add-node-view.service.d.ts.map