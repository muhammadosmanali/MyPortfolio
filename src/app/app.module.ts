import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.moule';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './home/nav/nav.component';
import { ProjectsComponent } from './home/projects/projects.component';
import { SocialsComponent } from './home/socials/socials.component';
import { SkillsComponent } from './home/skills/skills.component';
import { ContactFormComponent } from './home/contact-form/contact-form.component';
import { FooterComponent } from './home/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    ProjectsComponent,
    SocialsComponent,
    SkillsComponent,
    ContactFormComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  providers: [Title],
  bootstrap: [AppComponent],
})
export class AppModule {}
