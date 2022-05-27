import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { WifiComponent } from './wifi.component';

@NgModule({
  imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: WifiComponent }])],
  declarations: [WifiComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class WifiModule {}
