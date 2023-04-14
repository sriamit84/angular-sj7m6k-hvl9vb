import { EventEmitter } from '@angular/core';
import { Nullable } from '@fundamental-ngx/cdk/utils';
import { ApprovalTeam } from '../interfaces';
import { trackByFn } from '../helpers';
import * as i0 from "@angular/core";
/**
 * @deprecated
 * ApprovalFlowTeamList component is depricated since version 0.40.0
 */
export declare class ApprovalFlowTeamListComponent {
    /** Approval flow teams */
    teams: ApprovalTeam[];
    /** Whether in RTL mode */
    isRtl: boolean;
    /** Selected team ID */
    selectedTeamId: Nullable<string>;
    /** Event emitted on team click */
    onTeamClick: EventEmitter<ApprovalTeam>;
    /** Event emitted on team selection change */
    onTeamRadioClick: EventEmitter<ApprovalTeam>;
    /** @hidden */
    _trackByFn: typeof trackByFn;
    /** @hidden */
    _showTeamDetails(team: ApprovalTeam): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ApprovalFlowTeamListComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ApprovalFlowTeamListComponent, "fdp-approval-flow-team-list", never, { "teams": "teams"; "isRtl": "isRtl"; "selectedTeamId": "selectedTeamId"; }, { "onTeamClick": "onTeamClick"; "onTeamRadioClick": "onTeamRadioClick"; }, never, never, false, never>;
}
//# sourceMappingURL=approval-flow-team-list.component.d.ts.map