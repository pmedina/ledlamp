import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { Main } from './main';

@NgModule({
  declarations: [
    Main,
  ],
  imports: [
    //IonicModule.forChild(Main),
  ],
  exports: [
    Main
  ]
})
export class MainModule {}
