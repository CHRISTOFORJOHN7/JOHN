import { NgModule } from '@angular/core';
import { ChildrenOutletContexts, RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './module/login/login.component';
import { RegistationComponent } from './module/registation/registation.component';
import { MainComponent } from './core/main/main.component';
import { HomeComponent } from './module/home/home.component';


const routes: Routes = [
  {path:"login",component:LoginComponent},
  {path:"", redirectTo:"login", pathMatch:"full"},
  {path:"registation",component:RegistationComponent},
  {path:"dashboard",component:MainComponent, 
children:[
  {path:"",component:HomeComponent}
]
},
  {path:"",redirectTo:"login",pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
