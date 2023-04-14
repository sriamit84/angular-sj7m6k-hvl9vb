import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { AvatarModule } from '@fundamental-ngx/core/avatar';
import { BarModule } from '@fundamental-ngx/core/bar';
import { ButtonModule } from '@fundamental-ngx/core/button';
import { CheckboxModule } from '@fundamental-ngx/core/checkbox';
import { DatePickerModule } from '@fundamental-ngx/core/date-picker';
import { DialogModule } from '@fundamental-ngx/core/dialog';
import { FormModule } from '@fundamental-ngx/core/form';
import { GridListModule } from '@fundamental-ngx/core/grid-list';
import { IconModule } from '@fundamental-ngx/core/icon';
import { IllustratedMessageModule } from '@fundamental-ngx/core/illustrated-message';
import { MenuModule } from '@fundamental-ngx/core/menu';
import { MessageStripModule } from '@fundamental-ngx/core/message-strip';
import { MultiInputModule } from '@fundamental-ngx/core/multi-input';
import { RadioModule } from '@fundamental-ngx/core/radio';
import { SelectModule } from '@fundamental-ngx/core/select';
import { BusyIndicatorModule } from '@fundamental-ngx/core/busy-indicator';
import { PlatformObjectStatusModule } from '@fundamental-ngx/platform/object-status';
import { PlatformSearchFieldModule } from '@fundamental-ngx/platform/search-field';
import { PlatformListModule, StandardListItemModule } from '@fundamental-ngx/platform/list';
import { ApprovalFlowComponent } from './approval-flow.component';
import { ApprovalFlowNodeComponent } from './approval-flow-node/approval-flow-node.component';
import { ApprovalFlowApproverDetailsComponent } from './approval-flow-approver-details/approval-flow-approver-details.component';
import { ApprovalFlowAddNodeComponent } from './approval-flow-add-node/approval-flow-add-node.component';
import { ApprovalFlowUserListComponent } from './approval-flow-user-list/approval-flow-user-list.component';
import { ApprovalFlowUserDetailsComponent } from './approval-flow-user-details/approval-flow-user-details.component';
import { ApprovalFlowDropZoneDirective } from './approval-flow-node/approval-flow-drop-zone.directive';
import { ApprovalFlowTeamListComponent } from './approval-flow-team-list/approval-flow-team-list.component';
import { ApprovalFlowAddNodeViewService } from './services/approval-flow-add-node-view.service';
import { ApprovalFlowSelectTypeComponent } from './approval-flow-select-type/approval-flow-select-type.component';
import { ApprovalFlowMessagesComponent } from './approval-flow-messages/approval-flow-messages.component';
import { ApprovalFlowToolbarActionsComponent } from './approval-flow-toolbar-actions/approval-flow-toolbar-actions.component';
import { I18nModule } from '@fundamental-ngx/i18n';
import * as i0 from "@angular/core";
export class PlatformApprovalFlowModule {
}
PlatformApprovalFlowModule.ɵfac = function PlatformApprovalFlowModule_Factory(t) { return new (t || PlatformApprovalFlowModule)(); };
PlatformApprovalFlowModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: PlatformApprovalFlowModule });
PlatformApprovalFlowModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ providers: [ApprovalFlowAddNodeViewService], imports: [CommonModule,
        FormsModule,
        AvatarModule,
        BarModule,
        ButtonModule,
        IconModule,
        GridListModule,
        DialogModule,
        PlatformObjectStatusModule,
        PlatformListModule,
        StandardListItemModule,
        PlatformSearchFieldModule,
        MultiInputModule,
        MessageStripModule,
        CheckboxModule,
        I18nModule,
        MenuModule,
        SelectModule,
        DatePickerModule,
        BusyIndicatorModule,
        FormModule,
        DragDropModule,
        RadioModule,
        IllustratedMessageModule] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PlatformApprovalFlowModule, [{
        type: NgModule,
        args: [{
                declarations: [
                    ApprovalFlowComponent,
                    ApprovalFlowNodeComponent,
                    ApprovalFlowApproverDetailsComponent,
                    ApprovalFlowAddNodeComponent,
                    ApprovalFlowUserListComponent,
                    ApprovalFlowUserDetailsComponent,
                    ApprovalFlowDropZoneDirective,
                    ApprovalFlowTeamListComponent,
                    ApprovalFlowSelectTypeComponent,
                    ApprovalFlowMessagesComponent,
                    ApprovalFlowToolbarActionsComponent
                ],
                providers: [ApprovalFlowAddNodeViewService],
                imports: [
                    CommonModule,
                    FormsModule,
                    AvatarModule,
                    BarModule,
                    ButtonModule,
                    IconModule,
                    GridListModule,
                    DialogModule,
                    PlatformObjectStatusModule,
                    PlatformListModule,
                    StandardListItemModule,
                    PlatformSearchFieldModule,
                    MultiInputModule,
                    MessageStripModule,
                    CheckboxModule,
                    I18nModule,
                    MenuModule,
                    SelectModule,
                    DatePickerModule,
                    BusyIndicatorModule,
                    FormModule,
                    DragDropModule,
                    RadioModule,
                    IllustratedMessageModule
                ],
                exports: [ApprovalFlowComponent]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(PlatformApprovalFlowModule, { declarations: [ApprovalFlowComponent,
        ApprovalFlowNodeComponent,
        ApprovalFlowApproverDetailsComponent,
        ApprovalFlowAddNodeComponent,
        ApprovalFlowUserListComponent,
        ApprovalFlowUserDetailsComponent,
        ApprovalFlowDropZoneDirective,
        ApprovalFlowTeamListComponent,
        ApprovalFlowSelectTypeComponent,
        ApprovalFlowMessagesComponent,
        ApprovalFlowToolbarActionsComponent], imports: [CommonModule,
        FormsModule,
        AvatarModule,
        BarModule,
        ButtonModule,
        IconModule,
        GridListModule,
        DialogModule,
        PlatformObjectStatusModule,
        PlatformListModule,
        StandardListItemModule,
        PlatformSearchFieldModule,
        MultiInputModule,
        MessageStripModule,
        CheckboxModule,
        I18nModule,
        MenuModule,
        SelectModule,
        DatePickerModule,
        BusyIndicatorModule,
        FormModule,
        DragDropModule,
        RadioModule,
        IllustratedMessageModule], exports: [ApprovalFlowComponent] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwcm92YWwtZmxvdy5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9saWJzL3BsYXRmb3JtL3NyYy9saWIvYXBwcm92YWwtZmxvdy9hcHByb3ZhbC1mbG93Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDN0MsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBRXhELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUM1RCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDdEQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQzVELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUNoRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUNyRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDNUQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQ3hELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUNqRSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDeEQsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDckYsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQ3hELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQ3pFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLG1D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QUFDO2FBQ25DOzt3RkFDWSwwQkFBMEIsbUJBekMvQixxQkFBcUI7UUFDckIseUJBQXlCO1FBQ3pCLG9DQUFvQztRQUNwQyw0QkFBNEI7UUFDNUIsNkJBQTZCO1FBQzdCLGdDQUFnQztRQUNoQyw2QkFBNkI7UUFDN0IsNkJBQTZCO1FBQzdCLCtCQUErQjtRQUMvQiw2QkFBNkI7UUFDN0IsbUNBQW1DLGFBSW5DLFlBQVk7UUFDWixXQUFXO1FBQ1gsWUFBWTtRQUNaLFNBQVM7UUFDVCxZQUFZO1FBQ1osVUFBVTtRQUNWLGNBQWM7UUFDZCxZQUFZO1FBQ1osMEJBQTBCO1FBQzFCLGtCQUFrQjtRQUNsQixzQkFBc0I7UUFDdEIseUJBQXlCO1FBQ3pCLGdCQUFnQjtRQUNoQixrQkFBa0I7UUFDbEIsY0FBYztRQUNkLFVBQVU7UUFDVixVQUFVO1FBQ1YsWUFBWTtRQUNaLGdCQUFnQjtRQUNoQixtQkFBbUI7UUFDbkIsVUFBVTtRQUNWLGNBQWM7UUFDZCxXQUFXO1FBQ1gsd0JBQXdCLGFBRWxCLHFCQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBEcmFnRHJvcE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9kcmFnLWRyb3AnO1xuXG5pbXBvcnQgeyBBdmF0YXJNb2R1bGUgfSBmcm9tICdAZnVuZGFtZW50YWwtbmd4L2NvcmUvYXZhdGFyJztcbmltcG9ydCB7IEJhck1vZHVsZSB9IGZyb20gJ0BmdW5kYW1lbnRhbC1uZ3gvY29yZS9iYXInO1xuaW1wb3J0IHsgQnV0dG9uTW9kdWxlIH0gZnJvbSAnQGZ1bmRhbWVudGFsLW5neC9jb3JlL2J1dHRvbic7XG5pbXBvcnQgeyBDaGVja2JveE1vZHVsZSB9IGZyb20gJ0BmdW5kYW1lbnRhbC1uZ3gvY29yZS9jaGVja2JveCc7XG5pbXBvcnQgeyBEYXRlUGlja2VyTW9kdWxlIH0gZnJvbSAnQGZ1bmRhbWVudGFsLW5neC9jb3JlL2RhdGUtcGlja2VyJztcbmltcG9ydCB7IERpYWxvZ01vZHVsZSB9IGZyb20gJ0BmdW5kYW1lbnRhbC1uZ3gvY29yZS9kaWFsb2cnO1xuaW1wb3J0IHsgRm9ybU1vZHVsZSB9IGZyb20gJ0BmdW5kYW1lbnRhbC1uZ3gvY29yZS9mb3JtJztcbmltcG9ydCB7IEdyaWRMaXN0TW9kdWxlIH0gZnJvbSAnQGZ1bmRhbWVudGFsLW5neC9jb3JlL2dyaWQtbGlzdCc7XG5pbXBvcnQgeyBJY29uTW9kdWxlIH0gZnJvbSAnQGZ1bmRhbWVudGFsLW5neC9jb3JlL2ljb24nO1xuaW1wb3J0IHsgSWxsdXN0cmF0ZWRNZXNzYWdlTW9kdWxlIH0gZnJvbSAnQGZ1bmRhbWVudGFsLW5neC9jb3JlL2lsbHVzdHJhdGVkLW1lc3NhZ2UnO1xuaW1wb3J0IHsgTWVudU1vZHVsZSB9IGZyb20gJ0BmdW5kYW1lbnRhbC1uZ3gvY29yZS9tZW51JztcbmltcG9ydCB7IE1lc3NhZ2VTdHJpcE1vZHVsZSB9IGZyb20gJ0BmdW5kYW1lbnRhbC1uZ3gvY29yZS9tZXNzYWdlLXN0cmlwJztcbmltcG9ydCB7IE11bHRpSW5wdXRNb2R1bGUgfSBmcm9tICdAZnVuZGFtZW50YWwtbmd4L2NvcmUvbXVsdGktaW5wdXQnO1xuaW1wb3J0IHsgUmFkaW9Nb2R1bGUgfSBmcm9tICdAZnVuZGFtZW50YWwtbmd4L2NvcmUvcmFkaW8nO1xuaW1wb3J0IHsgU2VsZWN0TW9kdWxlIH0gZnJvbSAnQGZ1bmRhbWVudGFsLW5neC9jb3JlL3NlbGVjdCc7XG5pbXBvcnQgeyBCdXN5SW5kaWNhdG9yTW9kdWxlIH0gZnJvbSAnQGZ1bmRhbWVudGFsLW5neC9jb3JlL2J1c3ktaW5kaWNhdG9yJztcblxuaW1wb3J0IHsgUGxhdGZvcm1PYmplY3RTdGF0dXNNb2R1bGUgfSBmcm9tICdAZnVuZGFtZW50YWwtbmd4L3BsYXRmb3JtL29iamVjdC1zdGF0dXMnO1xuaW1wb3J0IHsgUGxhdGZvcm1TZWFyY2hGaWVsZE1vZHVsZSB9IGZyb20gJ0BmdW5kYW1lbnRhbC1uZ3gvcGxhdGZvcm0vc2VhcmNoLWZpZWxkJztcbmltcG9ydCB7IFBsYXRmb3JtTGlzdE1vZHVsZSwgU3RhbmRhcmRMaXN0SXRlbU1vZHVsZSB9IGZyb20gJ0BmdW5kYW1lbnRhbC1uZ3gvcGxhdGZvcm0vbGlzdCc7XG5cbmltcG9ydCB7IEFwcHJvdmFsRmxvd0NvbXBvbmVudCB9IGZyb20gJy4vYXBwcm92YWwtZmxvdy5jb21wb25lbnQnO1xuaW1wb3J0IHsgQXBwcm92YWxGbG93Tm9kZUNvbXBvbmVudCB9IGZyb20gJy4vYXBwcm92YWwtZmxvdy1ub2RlL2FwcHJvdmFsLWZsb3ctbm9kZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgQXBwcm92YWxGbG93QXBwcm92ZXJEZXRhaWxzQ29tcG9uZW50IH0gZnJvbSAnLi9hcHByb3ZhbC1mbG93LWFwcHJvdmVyLWRldGFpbHMvYXBwcm92YWwtZmxvdy1hcHByb3Zlci1kZXRhaWxzLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBBcHByb3ZhbEZsb3dBZGROb2RlQ29tcG9uZW50IH0gZnJvbSAnLi9hcHByb3ZhbC1mbG93LWFkZC1ub2RlL2FwcHJvdmFsLWZsb3ctYWRkLW5vZGUuY29tcG9uZW50JztcbmltcG9ydCB7IEFwcHJvdmFsRmxvd1VzZXJMaXN0Q29tcG9uZW50IH0gZnJvbSAnLi9hcHByb3ZhbC1mbG93LXVzZXItbGlzdC9hcHByb3ZhbC1mbG93LXVzZXItbGlzdC5jb21wb25lbnQnO1xuaW1wb3J0IHsgQXBwcm92YWxGbG93VXNlckRldGFpbHNDb21wb25lbnQgfSBmcm9tICcuL2FwcHJvdmFsLWZsb3ctdXNlci1kZXRhaWxzL2FwcHJvdmFsLWZsb3ctdXNlci1kZXRhaWxzLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBBcHByb3ZhbEZsb3dEcm9wWm9uZURpcmVjdGl2ZSB9IGZyb20gJy4vYXBwcm92YWwtZmxvdy1ub2RlL2FwcHJvdmFsLWZsb3ctZHJvcC16b25lLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBBcHByb3ZhbEZsb3dUZWFtTGlzdENvbXBvbmVudCB9IGZyb20gJy4vYXBwcm92YWwtZmxvdy10ZWFtLWxpc3QvYXBwcm92YWwtZmxvdy10ZWFtLWxpc3QuY29tcG9uZW50JztcbmltcG9ydCB7IEFwcHJvdmFsRmxvd0FkZE5vZGVWaWV3U2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvYXBwcm92YWwtZmxvdy1hZGQtbm9kZS12aWV3LnNlcnZpY2UnO1xuaW1wb3J0IHsgQXBwcm92YWxGbG93U2VsZWN0VHlwZUNvbXBvbmVudCB9IGZyb20gJy4vYXBwcm92YWwtZmxvdy1zZWxlY3QtdHlwZS9hcHByb3ZhbC1mbG93LXNlbGVjdC10eXBlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBBcHByb3ZhbEZsb3dNZXNzYWdlc0NvbXBvbmVudCB9IGZyb20gJy4vYXBwcm92YWwtZmxvdy1tZXNzYWdlcy9hcHByb3ZhbC1mbG93LW1lc3NhZ2VzLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBBcHByb3ZhbEZsb3dUb29sYmFyQWN0aW9uc0NvbXBvbmVudCB9IGZyb20gJy4vYXBwcm92YWwtZmxvdy10b29sYmFyLWFjdGlvbnMvYXBwcm92YWwtZmxvdy10b29sYmFyLWFjdGlvbnMuY29tcG9uZW50JztcbmltcG9ydCB7IEkxOG5Nb2R1bGUgfSBmcm9tICdAZnVuZGFtZW50YWwtbmd4L2kxOG4nO1xuXG5ATmdNb2R1bGUoe1xuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBBcHByb3ZhbEZsb3dDb21wb25lbnQsXG4gICAgICAgIEFwcHJvdmFsRmxvd05vZGVDb21wb25lbnQsXG4gICAgICAgIEFwcHJvdmFsRmxvd0FwcHJvdmVyRGV0YWlsc0NvbXBvbmVudCxcbiAgICAgICAgQXBwcm92YWxGbG93QWRkTm9kZUNvbXBvbmVudCxcbiAgICAgICAgQXBwcm92YWxGbG93VXNlckxpc3RDb21wb25lbnQsXG4gICAgICAgIEFwcHJvdmFsRmxvd1VzZXJEZXRhaWxzQ29tcG9uZW50LFxuICAgICAgICBBcHByb3ZhbEZsb3dEcm9wWm9uZURpcmVjdGl2ZSxcbiAgICAgICAgQXBwcm92YWxGbG93VGVhbUxpc3RDb21wb25lbnQsXG4gICAgICAgIEFwcHJvdmFsRmxvd1NlbGVjdFR5cGVDb21wb25lbnQsXG4gICAgICAgIEFwcHJvdmFsRmxvd01lc3NhZ2VzQ29tcG9uZW50LFxuICAgICAgICBBcHByb3ZhbEZsb3dUb29sYmFyQWN0aW9uc0NvbXBvbmVudFxuICAgIF0sXG4gICAgcHJvdmlkZXJzOiBbQXBwcm92YWxGbG93QWRkTm9kZVZpZXdTZXJ2aWNlXSxcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIENvbW1vbk1vZHVsZSxcbiAgICAgICAgRm9ybXNNb2R1bGUsXG4gICAgICAgIEF2YXRhck1vZHVsZSxcbiAgICAgICAgQmFyTW9kdWxlLFxuICAgICAgICBCdXR0b25Nb2R1bGUsXG4gICAgICAgIEljb25Nb2R1bGUsXG4gICAgICAgIEdyaWRMaXN0TW9kdWxlLFxuICAgICAgICBEaWFsb2dNb2R1bGUsXG4gICAgICAgIFBsYXRmb3JtT2JqZWN0U3RhdHVzTW9kdWxlLFxuICAgICAgICBQbGF0Zm9ybUxpc3RNb2R1bGUsXG4gICAgICAgIFN0YW5kYXJkTGlzdEl0ZW1Nb2R1bGUsXG4gICAgICAgIFBsYXRmb3JtU2VhcmNoRmllbGRNb2R1bGUsXG4gICAgICAgIE11bHRpSW5wdXRNb2R1bGUsXG4gICAgICAgIE1lc3NhZ2VTdHJpcE1vZHVsZSxcbiAgICAgICAgQ2hlY2tib3hNb2R1bGUsXG4gICAgICAgIEkxOG5Nb2R1bGUsXG4gICAgICAgIE1lbnVNb2R1bGUsXG4gICAgICAgIFNlbGVjdE1vZHVsZSxcbiAgICAgICAgRGF0ZVBpY2tlck1vZHVsZSxcbiAgICAgICAgQnVzeUluZGljYXRvck1vZHVsZSxcbiAgICAgICAgRm9ybU1vZHVsZSxcbiAgICAgICAgRHJhZ0Ryb3BNb2R1bGUsXG4gICAgICAgIFJhZGlvTW9kdWxlLFxuICAgICAgICBJbGx1c3RyYXRlZE1lc3NhZ2VNb2R1bGVcbiAgICBdLFxuICAgIGV4cG9ydHM6IFtBcHByb3ZhbEZsb3dDb21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIFBsYXRmb3JtQXBwcm92YWxGbG93TW9kdWxlIHt9XG4iXX0=