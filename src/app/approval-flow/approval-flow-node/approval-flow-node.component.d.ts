import { ChangeDetectorRef, ElementRef, EventEmitter, OnChanges, OnDestroy, OnInit, QueryList, TemplateRef } from '@angular/core';
import { RtlService } from '@fundamental-ngx/cdk/utils';
import { MenuComponent } from '@fundamental-ngx/core/menu';
import { ObjectStatus } from '@fundamental-ngx/core/object-status';
import { GridListItemComponent } from '@fundamental-ngx/core/grid-list';
import { ApprovalFlowDropZoneDirective } from './approval-flow-drop-zone.directive';
import { ApprovalGraphNode, ApprovalGraphNodeMetadata } from '../interfaces';
import { ApprovalFlowNodeTarget } from '../approval-flow-add-node/approval-flow-add-node.component';
import * as i0 from "@angular/core";
/**
 * @deprecated
 * ApprovalFlowNode component is depricated since version 0.40.0
 */
export declare class ApprovalFlowNodeComponent implements OnInit, OnChanges, OnDestroy {
    private readonly _elRef;
    private readonly _cdr;
    private readonly _rtlService;
    /** Approval flow graph node */
    node: ApprovalGraphNode;
    /** Node metadata */
    meta: ApprovalGraphNodeMetadata;
    /** Whether node element has arrow on the left side pointing to the node */
    renderArrow: boolean;
    /** Whether to display due date warning in status */
    checkDueDate: boolean;
    /** Number of days before due date when status changes to `warning` with text 'Due in X days'.
     *  Not used if 'checkDueDate' equals false */
    dueDateThreshold: number;
    /** Whether nodes in column in which current node placed are approved
     *  Used to render appropriate vertical line after (dashed/solid)
     */
    allNodesInColumnApproved: boolean;
    /** Whether the node is in edit mode */
    isEdit: boolean;
    /** Whether the node after is blank */
    isNextNodeBlank: boolean;
    /** @hidden */
    get _blank(): boolean;
    /** @hidden */
    get _space(): boolean;
    /** @hidden */
    get _isRoot(): boolean;
    /** @hidden */
    get _isFinal(): boolean;
    /** @hidden */
    get _renderLineBefore(): boolean;
    /** @hidden */
    get _renderLineAfter(): boolean;
    /** @hidden */
    get _isApproved(): boolean;
    /** @hidden */
    get _isParentApproved(): boolean;
    /** @hidden */
    get _isNodeSelected(): boolean;
    /** @hidden */
    get _isParallelStart(): boolean;
    /** @hidden */
    get _isParallelEnd(): boolean;
    /** @hidden */
    get _isFirstInParallel(): boolean;
    /** @hidden */
    get _isLastInParallel(): boolean;
    /** Whether the node is blank and the final */
    get _lastBlank(): boolean;
    /** @hidden */
    get _isSelected(): boolean;
    /** @hidden */
    _objectStatus: ObjectStatus;
    /** @hidden */
    _showDueDateWarning: boolean;
    /** @hidden */
    _dueIn: number;
    /** Event emitted on add node button clicked, value is the placement for the new node */
    onAdd: EventEmitter<ApprovalFlowNodeTarget>;
    /** Event emitted on edit node button clicked */
    onEdit: EventEmitter<void>;
    /** Event emitted on delete node button clicked */
    onDelete: EventEmitter<void>;
    /** @hidden */
    _menu: MenuComponent;
    /** @hidden */
    _overflowMenuButton: TemplateRef<any>;
    /** @hidden */
    _nodeContent: TemplateRef<any>;
    /** @hidden */
    _dropZones: QueryList<ApprovalFlowDropZoneDirective>;
    /** @hidden */
    _gridListItem: GridListItemComponent<ApprovalGraphNode>;
    /** @hidden */
    readonly approvalFlowNodeId: string;
    /** @hidden */
    private _subscriptions;
    /** @hidden */
    private _translationResolver;
    /** @hidden */
    constructor(_elRef: ElementRef, _cdr: ChangeDetectorRef, _rtlService: RtlService);
    /** @hidden */
    get _nativeElement(): HTMLElement;
    /** @hidden */
    get _isNotStarted(): boolean;
    /** @hidden */
    get _isEditActionsAvailable(): boolean;
    /** @hidden */
    get _activeDropZones(): ApprovalFlowDropZoneDirective[];
    /** @hidden */
    get _isAnyDropZoneActive(): boolean;
    /** @hidden */
    get _isVerticalLineBeforeSolid(): boolean;
    /** @hidden */
    get _isVerticalLineAfterSolid(): boolean;
    /** @hidden */
    get _showAddButton(): boolean;
    /** @hidden */
    get _showAfterAllAddButton(): boolean;
    /** @hidden */
    _dropZonePartial(placement: ApprovalFlowNodeTarget): boolean;
    /** @hidden */
    ngOnInit(): void;
    /** @hidden */
    ngOnChanges(): void;
    /** @hidden */
    ngOnDestroy(): void;
    /** @hidden */
    _onMenuOpen(): void;
    /** @hidden */
    _focus(options?: FocusOptions): void;
    /** @hidden */
    _deactivateDropZones(): void;
    /** @hidden */
    _checkIfNodeDraggedInDropZone(nodeRect: DOMRect): void;
    /** @hidden */
    private _checkNodeStatus;
    static ɵfac: i0.ɵɵFactoryDeclaration<ApprovalFlowNodeComponent, [null, null, { optional: true; }]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ApprovalFlowNodeComponent, "fdp-approval-flow-node", never, { "node": "node"; "meta": "meta"; "renderArrow": "renderArrow"; "checkDueDate": "checkDueDate"; "dueDateThreshold": "dueDateThreshold"; "allNodesInColumnApproved": "allNodesInColumnApproved"; "isEdit": "isEdit"; "isNextNodeBlank": "isNextNodeBlank"; }, { "onAdd": "onAdd"; "onEdit": "onEdit"; "onDelete": "onDelete"; }, ["_gridListItem"], ["*"], false, never>;
}
//# sourceMappingURL=approval-flow-node.component.d.ts.map