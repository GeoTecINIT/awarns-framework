import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { CoreComponent } from './core.component';

@NgModule({
  imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: CoreComponent }])],
  declarations: [CoreComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class CoreModule {}
