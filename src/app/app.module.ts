import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { AppNavbarComponent } from './app-navbar/app-navbar.component';
import { TileComponent } from './tile/tile.component';
import { ProfileComponent } from './profile/profile.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { ProfilePicComponent } from './profile-pic/profile-pic.component';
import { MycalendarComponent } from './mycalendar/mycalendar.component';


@NgModule({
  declarations: [
    AppComponent,
    AppNavbarComponent,
    TileComponent,
    ProfileComponent,
    SideNavComponent,
    ProfilePicComponent,
    MycalendarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
