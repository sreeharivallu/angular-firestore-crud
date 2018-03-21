import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { MycalendarComponent } from './mycalendar/mycalendar.component';

const routes: Routes = [{path: '',
	pathMatch:'full', redirectTo: 'profile'
  }, 
  {path: 'profile', component: ProfileComponent },
  
  {path: 'calendar', component: MycalendarComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
