import { EventEmitter } from '@angular/core';
import { trackByFn } from '../helpers';
import * as i0 from "@angular/core";
export type ApprovalFlowMessageType = 'watchersChangeSuccess' | 'approverAddSuccess' | 'teamAddSuccess' | 'nodeEdit' | 'nodeRemove' | 'nodesRemove' | 'teamRemove' | 'error';
export interface ApprovalFlowMessage {
    type: ApprovalFlowMessageType;
}
/**
 * @deprecated
 * ApprovalFlowMessages component is depricated since version 0.40.0
 */
export declare class ApprovalFlowMessagesComponent {
    /** Array of messages */
    messages: ApprovalFlowMessage[];
    /** Whether undo action is available */
    undoLastActionAvailable: boolean;
    /** Event emitted when messages array change */
    messagesChange: EventEmitter<ApprovalFlowMessage[]>;
    /** Event emitted when user click undo button */
    undoLastAction: EventEmitter<void>;
    /** @hidden */
    _trackByFn: typeof trackByFn;
    /** @hidden */
    _dismissMessage(messageIndex: number): void;
    /** @hidden */
    _undoLastAction(messageIndex: number, event: Event): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ApprovalFlowMessagesComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ApprovalFlowMessagesComponent, "fdp-approval-flow-messages", never, { "messages": "messages"; "undoLastActionAvailable": "undoLastActionAvailable"; }, { "messagesChange": "messagesChange"; "undoLastAction": "undoLastAction"; }, never, never, false, never>;
}
//# sourceMappingURL=approval-flow-messages.component.d.ts.map