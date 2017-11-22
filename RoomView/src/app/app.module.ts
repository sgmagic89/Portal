import { RightnavbarComponent } from './Components/Common/rightnavbar/rightnavbar.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { LocationStrategy, HashLocationStrategy, CommonModule } from '@angular/common';
import { TreeModule } from 'angular-tree-component';

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
import { LeftnavbarComponent } from './Components/Common/leftnavbar/leftnavbar.component';

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
    ConfigurationComponent,
    LeftnavbarComponent,
    RightnavbarComponent
],
  imports: [
    BrowserModule,
    CommonModule,
    RoutingModule,
    FlexLayoutModule,
    NgbModule.forRoot(),
    AngularFontAwesomeModule,
    TreeModule
  ],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }],
  bootstrap: [AppComponent]
})
export class AppModule { }
