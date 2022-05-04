import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { TracingComponent } from './tracing.component';

@NgModule({
  imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: TracingComponent }])],
  declarations: [TracingComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class TracingModule {}
