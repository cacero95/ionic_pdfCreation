import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule, AngularFireDatabase } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { Firebase } from '@ionic-native/firebase/ngx';

export const firebaseConfig = {
  apiKey: "AIzaSyAFZM0alQjAav-AxG7i4mCJ5r6iw7FlTlY",
    authDomain: "atomic-snow-220819.firebaseapp.com",
    databaseURL: "https://atomic-snow-220819.firebaseio.com",
    projectId: "atomic-snow-220819",
    storageBucket: "",
    messagingSenderId: "660910679754",
    appId: "1:660910679754:web:34fa0511807f61c262b633"
};

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    IonicModule.forRoot(),
    AppRoutingModule],
  providers: [
    StatusBar,
    SplashScreen,
    Firebase,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
