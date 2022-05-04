import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { GeofencingComponent } from './geofencing.component';

@NgModule({
  imports: [
    NativeScriptCommonModule,
    NativeScriptRouterModule.forChild([{ path: '', component: GeofencingComponent }]),
  ],
  declarations: [GeofencingComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class GeofencingModule {}
