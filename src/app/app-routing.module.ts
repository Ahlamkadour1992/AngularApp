import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { RegisterComponent } from './register/register.component';
import { ListComponent } from './list/list.component';
import { CripListingComponent } from './crip-listing/crip-listing.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
  path: 'contact',
  component: ContactComponent
  },
  {
  path: 'register',
  component: RegisterComponent
  },
  {
    path:'list',
    component: ListComponent
  },
  {
    path:'cribs',
    component: CripListingComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
