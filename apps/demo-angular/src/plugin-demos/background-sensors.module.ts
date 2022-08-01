import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { BackgroundSensorsComponent } from './background-sensors.component';

@NgModule({
  imports: [
    NativeScriptCommonModule,
    NativeScriptRouterModule.forChild([{ path: '', component: BackgroundSensorsComponent }]),
  ],
  declarations: [BackgroundSensorsComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class BackgroundSensorsModule {}
