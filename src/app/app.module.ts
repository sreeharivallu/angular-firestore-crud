import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

//firebase starts
import { AngularFireModule } from 'angularfire2';
import { FirebaseConfig } from '../environments/firebase.config';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';


//firebase ends

import { AppComponent } from './app.component';
import { TileComponent } from './tile/tile.component';
import { ProfileComponent } from './profile/profile.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { ProfilePicComponent } from './profile-pic/profile-pic.component';
import { MycalendarComponent } from './mycalendar/mycalendar.component';
import { MymodalComponent } from './mymodal/mymodal.component';
import { MymodelFromTsComponent } from './mymodel-from-ts/mymodel-from-ts.component';
import { FilterPipe } from './filter.pipe';

//Services
import { FirebaseServiceService } from './services/firebase-service.service';
import { SkillsListComponent } from './skills-list/skills-list.component';
import { LoadingIndicatorComponent } from './helpers/loading-indicator/loading-indicator.component';

@NgModule({
  declarations: [
    AppComponent,    
    TileComponent,
    ProfileComponent,
    SideNavComponent,
    ProfilePicComponent,
    MycalendarComponent,
    MymodalComponent,
    MymodelFromTsComponent,
    FilterPipe,
    SkillsListComponent,
    LoadingIndicatorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFontAwesomeModule,
    HttpClientModule,
    AngularFireModule.initializeApp(FirebaseConfig.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireDatabaseModule    
  ],
  providers: [FirebaseServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
