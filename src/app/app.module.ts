import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {
  SocialLoginModule,
  AuthServiceConfig,
  GoogleLoginProvider,
  FacebookLoginProvider,
} from 'angular5-social-login';
import { LoginsComponent } from './logins/logins.component';


// Configs
export function getAuthServiceConfigs() {
const config = new AuthServiceConfig(
    [
      {
        id: FacebookLoginProvider.PROVIDER_ID,
        provider: new FacebookLoginProvider('479505915784919')
      },
      {
        id: GoogleLoginProvider.PROVIDER_ID,
        provider: new GoogleLoginProvider('1063054719053-0l5l7q9ia802l1oojf7ae3ai91afanmh.apps.googleusercontent.com')
      }
    ]
);
return config;
}

@NgModule({
  declarations: [
    AppComponent,
    LoginsComponent
  ],
  imports: [
    BrowserModule,
    SocialLoginModule
  ],
  providers: [{
    provide: AuthServiceConfig,
    useFactory: getAuthServiceConfigs
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
