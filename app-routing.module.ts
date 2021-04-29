 import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ErrorComponent } from './error/error.component';
import { ListTodosComponent } from './list-todos/list-todos.component';
import { LogoutComponent } from './logout/logout.component';
import { RouteGuardService } from './service/route-guard.service';
import { RegistrationComponent } from './registration/registration.component';
import { CompleteComponent } from './complete/complete.component';
import { EventComponent } from './event/event.component';
import { Slide1Component } from './slide1/slide1.component';
import { IntoductionComponent } from './intoduction/intoduction.component';
import { LanguageComponent } from './language/language.component';
import { FrontComponent } from './front/front.component';
import { BackendComponent } from './backend/backend.component';
import { DatabaseComponent } from './database/database.component';
import { ConclusionComponent } from './conclusion/conclusion.component';
import { AdminComponent } from './admin/admin.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'welcome/:name',component:WelcomeComponent,canActivate:[RouteGuardService]},
  {path:'',component:LoginComponent},
  {path:'todos',component:ListTodosComponent,canActivate:[RouteGuardService]},
  {path:'logout',component:LogoutComponent,canActivate:[RouteGuardService]},
  {path:'registration',component:RegistrationComponent,canActivate:[RouteGuardService]},
  {path:'complete',component:CompleteComponent,canActivate:[RouteGuardService]},
  {path:'event',component:EventComponent,canActivate:[RouteGuardService]},
  {path:'slide1',component:Slide1Component,canActivate:[RouteGuardService]},
  {path:'introduction',component:IntoductionComponent,canActivate:[RouteGuardService]},
  {path:'language',component:LanguageComponent,canActivate:[RouteGuardService]},
  {path:'front',component:FrontComponent,canActivate:[RouteGuardService]},
  {path:'backend',component:BackendComponent,canActivate:[RouteGuardService]},
  {path:'database',component:DatabaseComponent,canActivate:[RouteGuardService]},
  {path:'conclusion',component:ConclusionComponent,canActivate:[RouteGuardService]},
  {path:'admin',component:AdminComponent},
  {path:'**',component:ErrorComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
