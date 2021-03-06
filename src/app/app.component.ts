import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { BluetoothDevices} from '../providers/BluetoothDevices';
import { LedManager} from '../providers/LedManager';

import { HomePage } from '../pages/home/home';
import { Main } from '../pages/main/main';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  //rootPage:any = HomePage;
  rootPage:any = Main;

  constructor(
    platform: Platform, 
    statusBar: StatusBar, 
    splashScreen: SplashScreen, 
    devices: BluetoothDevices) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();

      // Maybe the place for the devicesManager to init bluetooth and so on

    });
  }
}

