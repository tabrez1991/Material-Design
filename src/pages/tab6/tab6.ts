import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-tab6',
  templateUrl: 'tab6.html',
})
export class Tab6Page {

  item = {
    itemName: 'First item in the list',
    checked: false
  };
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Tab6Page');
  }

}
