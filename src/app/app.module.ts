import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import  firebase from 'firebase';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';

var config = {
  apiKey: "AIzaSyA9WJPK9Gl_mskHJnPvXBLgHymHGuAFox8",
  authDomain: "phone-authentication-e9513.firebaseapp.com",
  databaseURL: "https://phone-authentication-e9513.firebaseio.com",
  projectId: "phone-authentication-e9513",
  storageBucket: "phone-authentication-e9513.appspot.com",
  messagingSenderId: "1054639775796"
};
firebase.initializeApp(config);

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
