import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';

/**
 * Generated class for the Main page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-main',
  templateUrl: 'main.html',
})
export class Main {

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public menu: MenuController) {
      menu.enable(true);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Main');
  }

  openMenu() {
    this.menu.toggle();
  }

}
