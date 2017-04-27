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
import { Main } from '../pages/main/main';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

// Cordova plugins
import { NativeStorage } from '@ionic-native/native-storage';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    Main
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
    //IonicModule.forRoot(Main)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    Main
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    BluetoothDevices,
    LedManager,
    LocalStorage,
    NativeStorage
  ]
})
export class AppModule {}
