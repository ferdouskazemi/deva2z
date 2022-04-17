import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from '../pages/about-us/about-us.component';
import { ContactComponent } from '../pages/contact/contact.component';
import { FaqComponent } from '../pages/faq/faq.component';
import { FeedbackComponent } from '../pages/feedback/feedback.component';
import { HomeComponent } from '../pages/home/home.component';
import { ServiceComponent } from '../pages/service/service.component';
import { TeamComponent } from '../pages/team/team.component';
const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'about-us', component: AboutUsComponent, data: { animation: 'aboutUs' } },
  { path: 'service', component: ServiceComponent, data: { animation: 'service' } },
  { path: 'feedback', component: FeedbackComponent, data: { animation: 'feedback' } },
  { path: 'team', component: TeamComponent, data: { animation: 'team' } },
  { path: 'faq', component: FaqComponent, data: { animation: 'faq' } },
  { path: 'contact', component: ContactComponent, data: { animation: 'contact' } },
  { path: '**', component: HomeComponent },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
