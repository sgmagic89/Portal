
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './Components/Login/Login.component';

const appRoutes: Routes = [
{
path: 'user/login',
component: LoginComponent
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
