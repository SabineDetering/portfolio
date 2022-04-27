import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { FooterComponent } from './footer/footer.component';
import { IntroComponent } from './intro/intro.component';
import { SkillSectionComponent } from './skill-section/skill-section.component';
import { SkillComponent } from './skill/skill.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ProjectComponent } from './project/project.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { CareerStepComponent } from './career-step/career-step.component';
import { ContactComponent } from './contact/contact.component';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LegalNoticeComponent } from './legal-notice/legal-notice.component';
import { PrivacyNoticeComponent } from './privacy-notice/privacy-notice.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent,
    IntroComponent,
    SkillSectionComponent,
    SkillComponent,
    PortfolioComponent,
    ProjectComponent,
    AboutMeComponent,
    CareerStepComponent,
    ContactComponent,
    LegalNoticeComponent,
    PrivacyNoticeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatInputModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
