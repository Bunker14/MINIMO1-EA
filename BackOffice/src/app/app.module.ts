import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//Modulos
import {ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'
import { ToastrModule } from 'ngx-toastr';

//Components
import { NavbarComponent } from './components/navbar/navbar.component';
import { ListLogsComponent } from './components/list-logs/list-logs.component';
import { AddEditLogsComponent } from './components/add-edit-logs/add-edit-logs.component';
import { ProgressBarComponent } from './shared/progress-bar/progress-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ListLogsComponent,
    AddEditLogsComponent,
    ProgressBarComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot({
      timeOut: 10000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
    }), // ToastrModule added
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
