import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule }    from '@angular/common/http';

import { AppComponent } from './app.component';
import { EmitentsComponent } from './emitents/emitents.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppRoutingModule } from './/app-routing.module';
import { EmitentDetailComponent } from './emitent-detail/emitent-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    EmitentsComponent,
    DashboardComponent,
    EmitentDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
