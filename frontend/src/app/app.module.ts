import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { UserDetailComponent } from './components/user-detail/user-detail.component';
import { FooterComponent } from './components/_shared/footer/footer.component';
import { NavbarComponent } from './components/_shared/navbar/navbar.component';
import { UserLayoutComponent } from './layouts/user-layout/user-layout.component';
import { FormsModule } from '@angular/forms';
import { ApiInterceptorService } from './services/api-interceptor/api-interceptor.service';
import { LoginComponent } from './components/login/login.component';
import { LoadDataComponent } from './components/load-data/load-data.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserDetailComponent,
    UserLayoutComponent,
    NavbarComponent,
    FooterComponent,
    LoginComponent,
    LoadDataComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    RouterModule,
    HttpClientModule,
    AppRoutingModule,
    NgxPaginationModule,
    FormsModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: ApiInterceptorService, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
