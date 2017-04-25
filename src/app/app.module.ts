import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
// Custom providers
import { BluetoothDevices} from '../providers/BluetoothDevices';
import { LedManager } from '../providers/LedManager';
import { LocalStorage } from '../providers/local-storage';
// Custom pages
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { About } from '../pages/about/about';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    About
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    About
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    BluetoothDevices,
    LedManager,
    LocalStorage
  ]
})
export class AppModule {}
