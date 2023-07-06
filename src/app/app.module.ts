// File: app.module.ts
// Student's Name: Wan Kei Hui
// Student ID: 301266228
// Date: 11-6-2023
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { NgOptimizedImage } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

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
      { path: 'business', component: BusinessListPageComponent },
      { path: '', redirectTo: '/home', pathMatch: 'full' },
      { path: '**', component: PageNotFoundComponent },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
