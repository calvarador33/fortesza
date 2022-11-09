import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule } from '@angular/common/http';

import { DashboardService } from './core/services/dashboard.service';
import { HttpService } from './core/http/http.service';
import { ReplaceNullPipe } from './shared/pipes/replace-null.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListModule } from './feature/list/list.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    HttpClientModule,

    ReactiveFormsModule,
    FormsModule,



  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
