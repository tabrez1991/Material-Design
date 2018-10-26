import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {
  tab1Root = 'Tab1Page';
  tab2Root = 'Tab2Page';
  tab3Root = 'Tab3Page';
  tab4Root = 'Tab4Page';
  tab5Root = 'Tab5Page';
  tab6Root = 'Tab6Page';
  myIndex: number;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.myIndex = navParams.data.tabIndex || 0;
  }
}
