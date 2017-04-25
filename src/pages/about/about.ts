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

  public test: string = "Test"

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public ledManager: LedManager) {
      console.debug(navParams);
      this.test = navParams.data.name;
      // object is actually in navParams.data
  }

  // This happens when the component is loaded, not rendered!
  ionViewDidLoad() {
    console.log('ionViewDidLoad About');
  }

  home(){
    this.navCtrl.pop();
  }

}
