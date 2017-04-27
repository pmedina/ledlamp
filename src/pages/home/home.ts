import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import { BluetoothDevices } from '../../providers/BluetoothDevices';
import { LedManager } from '../../providers/LedManager';

// Pages
import  { About } from '../about/about';

// Native Storage
import { NativeStorage } from '@ionic-native/native-storage';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  private devicesManager: BluetoothDevices
  private ledManager: LedManager
  public navCtrl: NavController

  constructor(
    navCtrl: NavController, 
    devicesService: BluetoothDevices,
    platform: Platform,
    ledManager: LedManager,
    nativeStorage: NativeStorage
    ) {
      platform.ready().then(() => {
        console.log("platform ready");
        console.debug(nativeStorage);
        nativeStorage.setItem("ola", {ledModel: ledManager.getLedModel()});
        this.navCtrl = navCtrl;
        this.ledManager = ledManager;
        this.devicesManager = devicesService;
        this.init();
      })
  }

  init(){
    console.debug(this.navCtrl);
    console.debug(this.devicesManager);
    console.debug(this.ledManager);
    this.navCtrl.push(About);
  }

  // This happens when the component is loaded, not rendered!
  ionViewDidLoad() {
    console.log('ionViewDidLoad Home');
  }

  about(){
    let myled = this.ledManager.getLedById("04");
    console.debug(myled);
    this.navCtrl.push(About, {name: "the Title", description: "The description"});
  }

}
