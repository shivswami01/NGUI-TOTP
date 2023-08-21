import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ValidateTotpComponent } from './validate-totp/validate-totp.component';

const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'', redirectTo:'/home',pathMatch:'full'},
  {component:ValidateTotpComponent, path:'validate'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
