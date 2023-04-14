import { ChangeDetectorRef, ElementRef, EventEmitter, Injector, OnChanges, OnDestroy, OnInit, QueryList, SimpleChanges, TemplateRef } from '@angular/core';
import { CdkDrag } from '@angular/cdk/drag-drop';
import { RtlService } from '@fundamental-ngx/cdk/utils';
import { GridListComponent, GridListSelectionEvent } from '@fundamental-ngx/core/grid-list';
import { DialogService } from '@fundamental-ngx/core/dialog';
import { ApprovalFlowNodeComponent } from './approval-flow-node/approval-flow-node.component';
import { ApprovalFlowNodeTarget } from './approval-flow-add-node/approval-flow-add-node.component';
import { displayUserFn, trackByFn, userValueFn } from './helpers';
import { ApprovalGraphNode, ApprovalGraphNodeMetadata, ApprovalNode, ApprovalProcess, ApprovalStatus, ApprovalTeam, ApprovalUser, SendRemindersData } from './interfaces';
import { ApprovalFlowGraph, ApprovalGraphMetadata } from './approval-flow-graph';
import { ApprovalFlowMessage } from './approval-flow-messages/approval-flow-messages.component';
import { DataProvider, ApprovalFlowTeamDataSource, ApprovalFlowUserDataSource } from '@fundamental-ngx/platform/shared';
import * as i0 from "@angular/core";
/**
 * @deprecated
 * Approval Flow component is depricated since version 0.40.0
 */
export declare class ApprovalFlowComponent implements OnInit, OnChanges, OnDestroy {
    private readonly _dialogService;
    private readonly _cdr;
    private readonly _injector;
    private providers;
    private readonly _rtlService;
    /** Title which is displayed in the header of the Approval Flow component. */
    title: string;
    /** Value of the approval flow component. */
    value: ApprovalProcess;
    /** Data source for the users of Approval Flow component. */
    userDataSource: ApprovalFlowUserDataSource<ApprovalUser>;
    /** Data source for the watchers of Approval Flow component. */
    watcherDataSource: ApprovalFlowUserDataSource<ApprovalUser>;
    /** Data source for the teams of Approval Flow component. */
    teamDataSource: ApprovalFlowTeamDataSource<ApprovalTeam>;
    /** A reference to the user details template */
    userDetailsTemplate: TemplateRef<any>;
    /** Whether to display due date warning in status */
    checkDueDate: boolean;
    /** Number of days before due date when status changes to `warning` with text 'Due in X days'.
     *  Not used if 'checkDueDate' equals false */
    dueDateThreshold: number;
    /** A list of approval statuses that allow sending reminders to their approvers */
    allowSendRemindersForStatuses: ApprovalStatus[];
    /** Whether the approval flow is editable */
    isEditAvailable: boolean;
    /** Text label for watchers list */
    watchersLabel: string;
    /** Enables or disables ability to add parallel nodes */
    allowAddParallelNodes: boolean;
    /** Disables save button, save button is enabled by default */
    disableSaveButton: boolean;
    /** Disables exit button, exit button is enabled by default */
    disableExitButton: boolean;
    /**
     * Name of the entity for which users DataProvider will be loaded.
     * Internally we should be able to do lookup to some registry
     * and retrieve the best matching DataProvider that is set on application level
     */
    usersDataProviderEntityKey?: string;
    /**
     * Name of the entity for which teams DataProvider will be loaded.
     * Internally we should be able to do lookup to some registry
     * and retrieve the best matching DataProvider that is set on application level
     */
    teamsDataProviderEntityKey?: string;
    /**
     * Name of the entity for which approval flow DataProvider will be loaded.
     * Internally we should be able to do lookup to some registry
     * and retrieve the best matching DataProvider that is set on application level
     */
    watchersDataProviderEntityKey?: string;
    /** Event emitted on approval flow node click. */
    nodeClick: EventEmitter<ApprovalNode>;
    /** Event emitted on approval flow node add */
    afterNodeAdd: EventEmitter<ApprovalNode>;
    /** Event emitted on approval flow node edit */
    afterNodeEdit: EventEmitter<ApprovalNode>;
    /** Event emitted whenver save is clicked in edit mode  */
    valueChange: EventEmitter<ApprovalProcess>;
    /** Event emitted whenever reminders should be sent */
    sendReminders: EventEmitter<SendRemindersData>;
    /** Event emitted when data loading is started. */
    onDataRequested: EventEmitter<void>;
    /** Event emitted when data loading is finished. */
    onDataReceived: EventEmitter<void>;
    /** @hidden */
    _graphContainerEl: ElementRef<HTMLDivElement>;
    /** @hidden */
    _graphEl: ElementRef<HTMLDivElement>;
    /** @hidden */
    _gridList: GridListComponent<ApprovalGraphNode>;
    /** @hidden */
    _nodeComponents: QueryList<ApprovalFlowNodeComponent>;
    /** @hidden */
    _approvalProcess: ApprovalProcess;
    /** @hidden */
    _initialApprovalProcess?: ApprovalProcess;
    /** @hidden */
    _previousApprovalProcess?: ApprovalProcess;
    /** @hidden */
    _graph: ApprovalFlowGraph;
    /** @hidden */
    _isCarousel: boolean;
    /** @hidden */
    _graphMetadata: ApprovalGraphMetadata;
    /** @hidden */
    _isEditMode: boolean;
    /** @hidden */
    _usersForWatchersList: ApprovalUser[];
    /** @hidden */
    private _selectedWatchers;
    /** @hidden */
    _selectedWatcherIds: ApprovalUser['id'][];
    /** @hidden */
    _messages: ApprovalFlowMessage[];
    /** @hidden */
    _displayUserFn: typeof displayUserFn;
    /** @hidden */
    _userValueFn: typeof userValueFn;
    /** @hidden */
    _trackByFn: typeof trackByFn;
    /** @hidden */
    _emptyApprovalFlowSpotConfig: {
        spot: {
            url: string;
            id: string;
        };
    };
    /** @hidden */
    _multipleRootNodes: boolean;
    /** @hidden */
    _multipleFinalNodes: boolean;
    /** @hidden */
    _dragDropInProgress: boolean;
    /** @hidden */
    readonly approvalFlowUniqueId: string;
    /** @hidden */
    private _editModeInitSub;
    /** @hidden */
    private _subscriptions;
    /** @hidden */
    private _dataSourceChanged$;
    /** @hidden */
    constructor(_dialogService: DialogService, _cdr: ChangeDetectorRef, _injector: Injector, providers: Map<string, DataProvider<any>>, _rtlService: RtlService);
    /** Returns snapshot of the current and initial states of approval process */
    get approvalProcess(): ApprovalProcess;
    /** @hidden */
    get _rtl(): boolean;
    /** @hidden */
    get _selectedNodes(): ApprovalGraphNode[];
    /** @hidden */
    ngOnInit(): void;
    /** @hidden */
    ngOnChanges(changes: SimpleChanges): void;
    /** @hidden */
    ngOnDestroy(): void;
    /** @hidden */
    _isNextNodeBlank(node: ApprovalGraphNode, columnIndex: number, nodeIndex: number): boolean;
    /** @hidden */
    _isCdkDragDisabled(node: ApprovalGraphNode): boolean;
    /** @hidden Node click handler */
    _onNodeClick(node: ApprovalNode): void;
    /** @hidden */
    _onNodeAdd(node: ApprovalNode): void;
    /** @hidden */
    _onNodeEdit(node: ApprovalNode): void;
    /** @hidden */
    _onNodeSelectionChange(event: GridListSelectionEvent<ApprovalGraphNode>): void;
    /** @hidden Watcher's avatar click handler */
    _onWatcherClick(watcher: ApprovalUser, event: Event): void;
    /** Retrive metadata by node id */
    getNodeMetadataByNodeId(nodeId: string): ApprovalGraphNodeMetadata;
    /** Scroll to the next horizontal slide */
    nextSlide(dir?: number): void;
    /** @hidden */
    _setScrollPosition(pos: number): void;
    /** @hidden */
    private _moveColInView;
    /** @hidden Handle node keydown and focus other node based on which key is pressed */
    _onNodeKeyDown(event: KeyboardEvent, node: ApprovalGraphNode): void;
    /** @hidden Fetch all necessary data and enter edit mode */
    _enterEditMode(): void;
    /** @hidden Send update approval process calls to DataSource and exit edit mode*/
    _saveEditModeChanges(): void;
    /** @hidden Restore initial approval flow state and exit edit mode */
    _exitEditMode(): void;
    /** @hidden */
    _watchersSelectionChanged(selectedIds: ApprovalUser['id'][]): void;
    /** @hidden Restore previously saved approval process state */
    _undoLastAction(): void;
    /** @hidden Open add node dialog */
    _addNode(source: ApprovalGraphNode, type: ApprovalFlowNodeTarget): void;
    /** @hidden Open edit node dialog */
    _editNode(node: ApprovalNode): void;
    /** @hidden "Delete" button click handler */
    _onNodeDelete(nodeToDelete: ApprovalNode): void;
    /** @hidden */
    _deleteSelectedNodes(): void;
    /** @hidden Node drag move handler, used to check if need to highlight a drop zone rectangle */
    _onNodeDragMoved(node: ApprovalGraphNode): void;
    /** @hidden Node drop handler */
    _onNodeDrop(nodeToDrop: ApprovalGraphNode, drag: CdkDrag): void;
    /** @hidden */
    private _finishDragDropProcess;
    /** @hidden */
    private _showMessage;
    /** @hidden Build Approval Flow graph and render it */
    private _buildView;
    /** @hidden Listen window resize and distribute cards on column change */
    private _listenOnResize;
    /** @hidden */
    _focusNode(node: ApprovalGraphNode): void;
    /** @hidden Update node object in local approval process data structure */
    private _updateNode;
    /** @hidden Delete node object in local approval process data structure */
    private _deleteNode;
    /** @hidden */
    private _addParallelTargets;
    /** @hidden Replace all occurrences of "idToReplace" in all nodes' "targets" with ones in "replaceWith" array */
    private _replaceTargets;
    /** @hidden Save current state of approval process data to be able to undo an action made in edit mode */
    private _cacheCurrentApprovalProcess;
    /** @hidden */
    private _getNextHorizontalNode;
    /** @hidden */
    private _getNextVerticalNode;
    /** @hidden */
    private get _carouselStepSize();
    /** @hidden */
    get _scrollDiff(): number;
    /** @hidden */
    get _carouselStepsCount(): number;
    /** @hidden */
    get _carouselStepsLeft(): number;
    /** @hidden */
    get _carouselStepsRight(): number;
    /** @hidden */
    private get _defaultDialogOptions();
    /** @hidden */
    private _findSerialNode;
    /** @hidden */
    private _processAddingParallelNode;
    /** @hidden */
    private _setupDataSourceSubscription;
    static ɵfac: i0.ɵɵFactoryDeclaration<ApprovalFlowComponent, [null, null, null, { optional: true; }, { optional: true; }]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ApprovalFlowComponent, "fdp-approval-flow", never, { "title": "title"; "value": "value"; "userDataSource": "userDataSource"; "watcherDataSource": "watcherDataSource"; "teamDataSource": "teamDataSource"; "userDetailsTemplate": "userDetailsTemplate"; "checkDueDate": "checkDueDate"; "dueDateThreshold": "dueDateThreshold"; "allowSendRemindersForStatuses": "allowSendRemindersForStatuses"; "isEditAvailable": "isEditAvailable"; "watchersLabel": "watchersLabel"; "allowAddParallelNodes": "allowAddParallelNodes"; "disableSaveButton": "disableSaveButton"; "disableExitButton": "disableExitButton"; "usersDataProviderEntityKey": "usersDataProviderEntityKey"; "teamsDataProviderEntityKey": "teamsDataProviderEntityKey"; "watchersDataProviderEntityKey": "watchersDataProviderEntityKey"; }, { "nodeClick": "nodeClick"; "afterNodeAdd": "afterNodeAdd"; "afterNodeEdit": "afterNodeEdit"; "valueChange": "valueChange"; "sendReminders": "sendReminders"; "onDataRequested": "onDataRequested"; "onDataReceived": "onDataReceived"; }, never, never, false, never>;
}
//# sourceMappingURL=approval-flow.component.d.ts.map