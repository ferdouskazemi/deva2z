import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NavbarGridComponent } from './components/navbar-grid/navbar-grid.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ServiceComponent } from './pages/service/service.component';
import { TeamComponent} from './pages/team/team.component'
import { FeedbackComponent } from './pages/feedback/feedback.component';
import { FaqComponent } from './pages/faq/faq.component';
import { ContactComponent } from './pages/contact/contact.component';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'  
import { HomeComponent } from './pages/home/home.component';
import { NgxScrollTopModule } from 'ngx-scrolltop';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainModule } from "./main/main.module";
@NgModule({
  declarations: [
    AppComponent,
    NavbarGridComponent,
    AboutUsComponent,
    ServiceComponent,
    FeedbackComponent,
    FaqComponent,
    ContactComponent,
    TeamComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MainModule,
    RouterModule.forRoot([
    ]),
    NgxScrollTopModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
