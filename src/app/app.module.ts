import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard.component';
import { HeroesComponent } from './heroes.component';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroService } from './hero.service';
import { FormComponent } from './star-selector.component';
import { StarComponent } from './stars.component';
import { StarItemComponent } from './star.component';

@NgModule({
  imports: [BrowserModule, FormsModule, ReactiveFormsModule, RouterModule.forRoot([
    {
      path: 'heroes',
      component: HeroesComponent
    },
    {
      path: 'details/:id',
      component: HeroDetailComponent
    },
    {
      path: 'dashboard',
      component: DashboardComponent
    },
    {
      path: '',
      redirectTo: '/dashboard',
      pathMatch: 'full'
    }
  ])
  ],
  declarations: [AppComponent,
    DashboardComponent,
    HeroesComponent,
    HeroDetailComponent,
    FormComponent,
    StarItemComponent,
    StarComponent
  ],
  bootstrap: [AppComponent],
  providers: [HeroService]
})
export class AppModule { }

