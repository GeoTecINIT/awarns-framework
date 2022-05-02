import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { NativeScriptRouterModule } from '@nativescript/angular';

import { HomeComponent } from './home.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'core', loadChildren: () => import('./plugin-demos/core.module').then((m) => m.CoreModule) },
  { path: 'tracing', loadChildren: () => import('./plugin-demos/tracing.module').then((m) => m.TracingModule) },
  { path: 'geolocation', loadChildren: () => import('./plugin-demos/geolocation.module').then((m) => m.GeolocationModule) },
  { path: 'geofencing', loadChildren: () => import('./plugin-demos/geofencing.module').then((m) => m.GeofencingModule) },
  { path: 'human-activity', loadChildren: () => import('./plugin-demos/human-activity.module').then((m) => m.HumanActivityModule) },
  { path: 'notifications', loadChildren: () => import('./plugin-demos/notifications.module').then((m) => m.NotificationsModule) },
];

@NgModule({
  imports: [NativeScriptRouterModule.forRoot(routes)],
  exports: [NativeScriptRouterModule],
})
export class AppRoutingModule {}
