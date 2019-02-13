import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './app-material.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TrainingComponent } from './training/training.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { JwtModule } from '@auth0/angular-jwt';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule} from '@angular/common/http';
import { BsToolbarComponent } from './bs-toolbar/bs-toolbar.component';
import { OffreComponent } from './offre/offre.component';
import { MatnavlistComponent } from './matnavlist/matnavlist.component';
import { EnbedComponent } from './enbed/enbed.component';
import { NgbdCarouselBasic } from './carousel/carousel.component';
import {VideopipePipe} from './videopipe.pipe';
import { MatVideoModule } from 'mat-video';
import { VideoComponent } from './video/video.component';
import { ListtreeComponent } from './listtree/listtree.component';
import { AuthenticationService } from './auth/authentication.service';
import {CoursexosService} from './coursexos.service';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { AlertService } from './auth/alert.service';
//RG3
import { NgxSmartModalModule } from 'src/ngx-smart-modal';

export function tokenGetter() {
  return localStorage.getItem('access_token');
}
@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    TrainingComponent,
    WelcomeComponent,
    BsToolbarComponent,
    MatnavlistComponent,
    OffreComponent,
    EnbedComponent,
    NgbdCarouselBasic,
    VideoComponent,
    ListtreeComponent,
    VideopipePipe,
    SignupComponent,
    LoginComponent,
    OffreComponent
    //NgxSmartModalModule
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot() ,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatVideoModule,
    NgxSmartModalModule.forRoot(),
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        whitelistedDomains: ['localhost:3000'],
        blacklistedRoutes: ['localhost:3000/tokens']
      }
    }),
    NgbModule
  ],
  exports:[VideopipePipe, NgxSmartModalModule],
  entryComponents: [],
  providers: [CoursexosService, AuthenticationService, AlertService],
  bootstrap: [AppComponent]
})
export class AppModule { }
