import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LegalNoticeComponent } from './legal-notice/legal-notice.component';
import { MainComponent } from './main/main.component';
import { PrivacyNoticeComponent } from './privacy-notice/privacy-notice.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'impressum', component: LegalNoticeComponent },
  { path: 'privacy', component: PrivacyNoticeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    // scrollPositionRestoration: 'enabled',
    anchorScrolling: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
