
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './Components/Login/Login.component';
import { DashboardComponent } from './Components/Dashboard/Dashboard.component';
import { ControlComponent } from './Components/Dashboard/control/control.component';
import { ProvisionComponent } from './Components/Dashboard/provision/provision.component';
import { UsersComponent } from './Components/Dashboard/users/users.component';
import { FirmwareComponent } from './Components/Dashboard/firmware/firmware.component';
import { ConfigurationComponent } from './Components/Dashboard/configuration/configuration.component';
const appRoutes: Routes = [
{
path: 'login',
component: LoginComponent
},
{
path: 'dashboard',
component: DashboardComponent,
children: [
    { path: '', component: ControlComponent },
    { path: 'control', component: ControlComponent },
    { path: 'provision', component: ProvisionComponent },
    { path: 'users', component: UsersComponent },
    { path: 'firmware', component: FirmwareComponent },
    { path: 'configuration', component: ConfigurationComponent }
    ]
},
{
path: '',
component: LoginComponent
}
];

@NgModule({
imports: [RouterModule.forRoot(appRoutes)],
exports: [RouterModule],
providers: []
})
export class RoutingModule { }
