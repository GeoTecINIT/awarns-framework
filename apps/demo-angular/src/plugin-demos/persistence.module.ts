import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { PersistenceComponent } from './persistence.component';

@NgModule({
  imports: [
    NativeScriptCommonModule,
    NativeScriptRouterModule.forChild([{ path: '', component: PersistenceComponent }]),
  ],
  declarations: [PersistenceComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class PersistenceModule {}
