import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

import { AppComponent } from './app.component';
import { LoginComponent } from './Components/Login/Login.component';
import { RoutingModule } from './app-routing.module';
import { NavbarComponent } from './Components/Common/navbar/navbar.component';
import { DashboardComponent } from './Components/Dashboard/Dashboard.component';
import { ControlComponent } from './Components/Dashboard/control/control.component';
import { ProvisionComponent } from './Components/Dashboard/provision/provision.component';
import { UsersComponent } from './Components/Dashboard/users/users.component';
import { FirmwareComponent } from './Components/Dashboard/firmware/firmware.component';
import { ConfigurationComponent } from './Components/Dashboard/configuration/configuration.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    DashboardComponent,
    ControlComponent,
    ProvisionComponent,
    UsersComponent,
    FirmwareComponent,
    ConfigurationComponent
],
  imports: [
    BrowserModule,
    RoutingModule,
    FlexLayoutModule,
    NgbModule.forRoot(),
    AngularFontAwesomeModule
  ],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }],
  bootstrap: [AppComponent]
})
export class AppModule { }
