import { SettingsProvider } from './../../providers/settings/settings';
import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Nav } from 'ionic-angular';
@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {

  rootPage = 'TabsPage';

  selectedTheme: String;

  @ViewChild(Nav) nav: Nav;
  constructor(public navCtrl: NavController, public navParams: NavParams, private settings: SettingsProvider) {
    this.settings.getActiveTheme().subscribe(val => this.selectedTheme = val);
  }

  chooseTheme(event) {
    switch(event.toElement.attributes.color.value){
      case 'Red': this.settings.setActiveTheme('red-theme');
      break;
      case 'Pink': this.settings.setActiveTheme('pink-theme');
      break;
      case 'Purple': this.settings.setActiveTheme('purple-theme');
      break;
      case 'DeepPurple': this.settings.setActiveTheme('deeppurple-theme');
      break;
      case 'Indigo': this.settings.setActiveTheme('indigo-theme');
      break;
      case 'Blue': this.settings.setActiveTheme('blue-theme');
      break;
      case 'LightBlue': this.settings.setActiveTheme('lightblue-theme');
      break;
      case 'Cyan': this.settings.setActiveTheme('cyan-theme');
      break;
      case 'Teal': this.settings.setActiveTheme('teal-theme');
      break;
      case 'Green': this.settings.setActiveTheme('green-theme');
      break;
      case 'LightGreen': this.settings.setActiveTheme('lightgreen-theme');
      break;
      case 'Lime': this.settings.setActiveTheme('lime-theme');
      break;
      case 'Yellow': this.settings.setActiveTheme('yellow-theme');
      break;
      case 'Amber': this.settings.setActiveTheme('amber-theme');
      break;
      case 'Orange': this.settings.setActiveTheme('orange-theme');
      break;
      case 'DeepOrange': this.settings.setActiveTheme('deeporange-theme');
      break;
      case 'Brown': this.settings.setActiveTheme('brown-theme');
      break;
      case 'Grey': this.settings.setActiveTheme('grey-theme');
      break;
      case 'BlueGrey': this.settings.setActiveTheme('bluegrey-theme');
      break;
    }
  }
}
