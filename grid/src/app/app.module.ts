import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { MembershipComponent } from './membership/membership.component';
import {AuthInterceptor} from './membership/auth.interceptor';
import {MemberService} from './membership/member.service';
import { SillyTextPipe } from './common/silly-text.pipe';
import { PostcodeValueAccessor } from './membership/postcode-value-accessor.directive';
import { PostcodeAsyncValidator} from './membership/postcode-async-validator.directive';
const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path:'', redirectTo:'/home', pathMatch:'full' },
  { path:'**', component: PageNotFoundComponent },
];
@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    HomeComponent,
    MembershipComponent,
    SillyTextPipe,
    PostcodeValueAccessor,
    PostcodeAsyncValidator
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    MemberService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  exports:[FormsModule,ReactiveFormsModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
