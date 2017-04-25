import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LedManager } from '../../providers/LedManager';

/**
 * Generated class for the About page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
})
export class About {

  private _ledManager: LedManager

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public ledManager: LedManager) {
      this._ledManager = ledManager;
  }

  // This happens when the component is loaded, not rendered!
  ionViewDidLoad() {
    console.log('ionViewDidLoad About');
  }

  home(){
    console.log("changing: in about it was set:"+this.ledManager.gettest());
    this._ledManager.settest("from about");
    this.navCtrl.pop();
  }

}
