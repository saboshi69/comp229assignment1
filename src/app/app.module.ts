// File: app.module.ts
// Student's Name: Wan Kei Hui
// Student ID: 301266228
// Date: 11-6-2023
import { NgModule, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { NgOptimizedImage } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtInterceptor } from '../../jwt.interceptor';
import { AuthGuard } from './ng-guard/auth.guard';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ProjectsPageComponent } from './projects-page/projects-page.component';
import { ServicesPageComponent } from './services-page/services-page.component';
import { ContactMePageComponent } from './contact-me-page/contact-me-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { LoginPanelComponent } from './navigation/login-panel/login-panel.component';
import { BarComponent } from './navigation/bar/bar.component';
import { MapComponent } from './navigation/map/map.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { BusinessListPageComponent } from './business-list-page/business-list-page.component';
import { UpdateBusinessPageComponent } from './update-business-page/update-business-page.component';
import { BusinessListItemComponent } from './business-list-page/business-list-item/business-list-item.component';
import { BusinessUpdateComponent } from './business-list-page/business-update/business-update.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    HomePageComponent,
    ProjectsPageComponent,
    ServicesPageComponent,
    ContactMePageComponent,
    PageNotFoundComponent,
    AboutMeComponent,
    LoginPanelComponent,
    BarComponent,
    MapComponent,
    LoginPageComponent,
    BusinessListPageComponent,
    UpdateBusinessPageComponent,
    BusinessListItemComponent,
    BusinessUpdateComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgOptimizedImage,
    RouterModule.forRoot([
      { path: 'home', component: HomePageComponent },
      { path: 'projects', component: ProjectsPageComponent },
      { path: 'services', component: ServicesPageComponent },
      { path: 'contact', component: ContactMePageComponent },
      { path: 'about', component: AboutMeComponent },
      { path: 'login', component: LoginPageComponent },
      {
        path: 'business',
        component: BusinessListPageComponent,
        canActivate: [AuthGuard],
      },
      { path: 'business/:id/update', component: BusinessUpdateComponent },
      { path: '', redirectTo: '/home', pathMatch: 'full' },
      { path: '**', component: PageNotFoundComponent },
    ]),
  ],
  exports: [RouterModule],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
