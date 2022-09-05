import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { WearOsComponent } from './wear-os.component';

@NgModule({
  imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: WearOsComponent }])],
  declarations: [WearOsComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class WearOsModule {}
