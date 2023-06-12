// File: app.module.ts
// Student's Name: Wan Kei Hui
// Student ID: 301266228
// Date: 11-6-2023
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { NgOptimizedImage } from '@angular/common';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ProjectsPageComponent } from './projects-page/projects-page.component';
import { ServicesPageComponent } from './services-page/services-page.component';
import { ContactMePageComponent } from './contact-me-page/contact-me-page.component';
import { NavigationComponent } from './navigation/navigation.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AboutMeComponent } from './about-me/about-me.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    HomePageComponent,
    ProjectsPageComponent,
    ServicesPageComponent,
    ContactMePageComponent,
    NavigationComponent,
    PageNotFoundComponent,
    AboutMeComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    NgOptimizedImage,
    RouterModule.forRoot([
      { path: 'home', component: HomePageComponent },
      { path: 'projects', component: ProjectsPageComponent },
      { path: 'services', component: ServicesPageComponent },
      { path: 'contact', component: ContactMePageComponent },
      { path: 'about', component: AboutMeComponent },
      { path: '', redirectTo: '/home', pathMatch: 'full' },
      { path: '**', component: PageNotFoundComponent },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
