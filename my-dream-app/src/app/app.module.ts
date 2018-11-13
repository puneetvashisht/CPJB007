import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule, Http, RequestOptions } from '@angular/http';

import { AppComponent } from './app.component';
import { BadgeComponent } from './badge.component';
import { JwtModule } from '@auth0/angular-jwt';
import { HttpClientModule } from '@angular/common/http';

export function tokenGetter() {
  console.log('is this working **** ', localStorage.getItem('access_token'))
  return localStorage.getItem('access_token');
}


@NgModule({
  declarations: [
    AppComponent, BadgeComponent
  ],
  imports: [
    BrowserModule, HttpModule, HttpClientModule, JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        whitelistedDomains: ['localhost:8080']
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
