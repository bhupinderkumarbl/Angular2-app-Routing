import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule, Routes} from '@angular/router';
import {AppComponent}  from './app.component';
import {aboutComponent} from './about/first.component';
import {workComponent} from './works/first.component';
import {portfolioComponent} from './portfolio/first.component';
import {contactComponent} from './contact/first.component';
import {homeComponent} from './homepage/first.component';
import {appService} from './app.service';


const routes: Routes = [

  {path: 'home', component: homeComponent},
  {path: 'about', component: aboutComponent},
  {path: 'works', component: workComponent},
  {path: 'portfolio', component: portfolioComponent},
  {path: 'contact', component: contactComponent}
]

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [appService],
  declarations: [AppComponent, aboutComponent, workComponent, portfolioComponent, contactComponent, homeComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
}
