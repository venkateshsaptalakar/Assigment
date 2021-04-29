import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';
import {HttpClientModule} from '@angular/common/http'
import { from } from 'rxjs';
import { ErrorComponent } from './error/error.component';
import { ListTodosComponent } from './list-todos/list-todos.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { LogoutComponent } from './logout/logout.component';
import { ImageUploadComponent } from './image-upload/image-upload.component';
import { RegistrationComponent } from './registration/registration.component';
import { CompleteComponent } from './complete/complete.component';
import { EventComponent } from './event/event.component';
import { Slide1Component } from './slide1/slide1.component';
import { IntoductionComponent } from './intoduction/intoduction.component';
import { LanguageComponent } from './language/language.component';
import { FrontendComponent } from './frontend/frontend.component';
import { FrontComponent } from './front/front.component';
import { BackendComponent } from './backend/backend.component';
import { DatabaseComponent } from './database/database.component';
import { ConclusionComponent } from './conclusion/conclusion.component';
import { AdminComponent } from './admin/admin.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    LoginComponent,
    ErrorComponent,
    ListTodosComponent,
    MenuComponent,
    FooterComponent,
    LogoutComponent,
    ImageUploadComponent,
    RegistrationComponent,
    CompleteComponent,
    EventComponent,
    Slide1Component,
    IntoductionComponent,
    LanguageComponent,
    FrontendComponent,
    FrontComponent,
    BackendComponent,
    DatabaseComponent,
    ConclusionComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
