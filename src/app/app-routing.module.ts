import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactusPageComponent } from './contactus-page/contactus-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ServicesPageComponent } from './services-page/services-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomePageComponent },
  { path: 'services', component: ServicesPageComponent },
  { path: 'contactus', component: ContactusPageComponent }
]; 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
