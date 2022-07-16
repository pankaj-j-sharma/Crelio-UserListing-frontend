import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { UserLayoutComponent } from './layouts/user-layout/user-layout.component';

const routes: Routes = [

  {
    path: "",
    redirectTo: "login",
    pathMatch: "full"
  },
  { path: 'login', component: LoginComponent },
  {
    path: "",
    component: UserLayoutComponent,
    children: [
      {
        path:"",
        loadChildren:()=> import('./layouts/user-layout/user-layout.module').then(m=>m.UserLayoutModule)
      }
    ]
  },   
  {
    path: "**",
    redirectTo: "/",
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
