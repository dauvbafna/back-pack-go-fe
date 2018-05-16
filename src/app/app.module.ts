import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { AgmCoreModule } from '@agm/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatMenuModule} from '@angular/material/menu';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTabsModule} from '@angular/material/tabs';
import {MatChipsModule} from '@angular/material/chips';

// components
import { TripCardComponent } from './components/trip-card/trip-card.component';
import { ItineraryDetailCardComponent } from './components/itinerary-detail-card/itinerary-detail-card.component';
import { ReservationDetailCardComponent } from './components/reservation-detail-card/reservation-detail-card.component';
import { ExperienceDetailCardComponent } from './components/experience-detail-card/experience-detail-card.component';

// pages
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { SignUpPageComponent } from './pages/sign-up-page/sign-up-page.component';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { TripDetailPageComponent } from './pages/trip-detail-page/trip-detail-page.component';
import { CreateTripPageComponent } from './pages/create-trip-page/create-trip-page.component';
import { ItineraryPageComponent } from './pages/itinerary-page/itinerary-page.component';
import { InvitePageComponent } from './pages/invite-page/invite-page.component';
import { ReservationsPageComponent } from './pages/reservations-page/reservations-page.component';
import { DestinationsPageComponent } from './pages/destinations-page/destinations-page.component';
import { ExperiencesPageComponent } from './pages/experiences-page/experiences-page.component';

// services
import { AuthService } from './services/auth.service';
import { TripService } from './services/trip.service';
import { ItineraryService } from './services/itinerary.service';
import { DestinationService } from './services/destination.service';

// guards
import { InitAuthGuardService } from './guards/init-auth-guard.service';
import { RequireAnonGuardService } from './guards/require-anon-guard.service';
import { RequireUserGuardService } from './guards/require-user-guard.service';



const routes: Routes = [
  { path: '',  component: HomePageComponent, canActivate: [ InitAuthGuardService ] },
  { path: 'login', component: LoginPageComponent, canActivate: [ RequireAnonGuardService ]},
  { path: 'signup', component: SignUpPageComponent, canActivate: [ RequireAnonGuardService ]},
  { path: 'trip', component: ProfilePageComponent, canActivate: [ RequireUserGuardService ]},
  { path: 'trip/create', component: CreateTripPageComponent, canActivate: [ RequireUserGuardService ]},
  { path: 'trip/:id', component: TripDetailPageComponent },
  { path: 'trip/:id/itinerary/:id', component: ItineraryPageComponent },
  { path: 'trip/:id/reservations', component: ReservationsPageComponent },
  { path: 'trip/:id/destinations', component: DestinationsPageComponent },
  { path: 'trip/:id/invite', component: InvitePageComponent }

];


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    LoginPageComponent,
    SignUpPageComponent,
    ProfilePageComponent,
    TripDetailPageComponent,
    CreateTripPageComponent,
    ItineraryPageComponent,
    InvitePageComponent,
    ReservationsPageComponent,
    DestinationsPageComponent,
    ExperiencesPageComponent,
    ItineraryDetailCardComponent,
    ReservationDetailCardComponent,
    ExperienceDetailCardComponent,
    TripCardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBSqhCPvGdIep-riFlAlKyWojxgh3T-BwM',
      libraries: ["places"]
    }),
    RouterModule.forRoot(routes),
    NgbModule.forRoot(),
    BrowserAnimationsModule,
    MatButtonModule,
      MatCardModule,
      MatMenuModule,
      MatInputModule,
      MatFormFieldModule,
      MatTabsModule,
      MatChipsModule
  ],
  providers: [AuthService,
    InitAuthGuardService,
    RequireAnonGuardService,
    RequireUserGuardService,
    TripService,
    ItineraryService,
    DestinationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
