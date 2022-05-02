import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { NotificationsComponent } from './notifications.component';

@NgModule({
  imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: NotificationsComponent }])],
  declarations: [NotificationsComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class NotificationsModule {}
