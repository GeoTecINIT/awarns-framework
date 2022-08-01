import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { PhoneSensorsComponent } from './phone-sensors.component';

@NgModule({
  imports: [
    NativeScriptCommonModule,
    NativeScriptRouterModule.forChild([{ path: '', component: PhoneSensorsComponent }]),
  ],
  declarations: [PhoneSensorsComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class PhoneSensorsModule {}
