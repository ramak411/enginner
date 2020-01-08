import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ServiceService } from './services/service.service';
import { StorylistComponent } from './storylist/storylist.component';

import {TableModule} from 'primeng/table';
import {DialogModule} from 'primeng/dialog';

import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';

@NgModule({
  declarations: [
    AppComponent,
    StorylistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    TableModule,
    DialogModule,
    InputTextModule,
    ButtonModule
   

  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
