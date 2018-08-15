import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EmitentsComponent } from './emitents/emitents.component';
import { DashboardComponent} from './dashboard/dashboard.component';
import { EmitentDetailComponent} from './emitent-detail/emitent-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: EmitentDetailComponent },
  { path: 'emitents', component: EmitentsComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
