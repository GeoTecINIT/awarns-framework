import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { BleComponent } from './ble.component';

@NgModule({
  imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: BleComponent }])],
  declarations: [BleComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class BleModule {}
