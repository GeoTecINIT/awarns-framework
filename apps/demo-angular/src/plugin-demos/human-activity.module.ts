import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { HumanActivityComponent } from './human-activity.component';

@NgModule({
  imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: HumanActivityComponent }])],
  declarations: [HumanActivityComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class HumanActivityModule {}
