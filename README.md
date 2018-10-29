# Material-Design
### Created By Mohammad Tabrez Ansari
This project was generated with [ionic framework](https://ionicframework.com/docs/components/#overview).
## Create your ionic project
First install ionic framework in your pc.
Go to terminal and run.
```bash
 npm install -g ionic
 ```
 Start an app
 ```bash
ionic start Material-Design
 ```
 ## Screenshot

<p>
  <img src="screenshot.png"/>
</p>

Open your code in editor.
Make pages folder and add pages into it by using the code.
```bash
ionic g page menu
ionic g page tab1
ionic g page tab2
ionic g page tab3
ionic g page tab4
ionic g page tab5
ionic g page tab6
ionic g page tabs
```
And also add
```bash
ionic generate provider
```
## settings.ts
```bash
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/Rx';

@Injectable()
export class SettingsProvider {

  private theme: BehaviorSubject<String>;

  constructor() {
    this.theme = new BehaviorSubject('red-theme');
  }

  setActiveTheme(val){
    this.theme.next(val);
  }

  getActiveTheme(){
    return this.theme.asObservable();
  }

}

```
## app.html
```bash
<ion-nav [root]="rootPage" [class]="selectedTheme"></ion-nav>
```

## menu.html
```bash
<ion-menu [content]="content">
<ion-header>

  <ion-navbar>
    <ion-title>Colors</ion-title>
  </ion-navbar>

</ion-header>


<ion-content>
  <ion-list>
      <ion-item menuClose (click)="chooseTheme($event)" id="red">
        <ion-label color="Red">Red</ion-label>
      </ion-item>
      <ion-item menuClose (click)="chooseTheme($event)" id="pink">
        <ion-label color="Pink">Pink</ion-label>
      </ion-item>
      <ion-item menuClose (click)="chooseTheme($event)" id="purple">
        <ion-label color="Purple">Purple</ion-label>
      </ion-item>
      <ion-item menuClose (click)="chooseTheme($event)" id="deeppurple">
        <ion-label color="DeepPurple">Deep Purple</ion-label>
      </ion-item>
      <ion-item menuClose (click)="chooseTheme($event)" id="indigo">
        <ion-label color="Indigo">Indigo</ion-label>
      </ion-item>
      <ion-item menuClose (click)="chooseTheme($event)" id="blue">
        <ion-label color="Blue">Blue</ion-label>
      </ion-item>
      <ion-item menuClose (click)="chooseTheme($event)" id="lightblue">
        <ion-label color="LightBlue">Light Blue</ion-label>
      </ion-item>
      <ion-item menuClose (click)="chooseTheme($event)" id="cyan">
        <ion-label color="Cyan">Cyan</ion-label>
      </ion-item>
      <ion-item menuClose (click)="chooseTheme($event)" id="teal">
        <ion-label color="Teal">Teal</ion-label>
      </ion-item>
      <ion-item menuClose (click)="chooseTheme($event)" id="green">
        <ion-label color="Green">Green</ion-label>
      </ion-item>
      <ion-item menuClose (click)="chooseTheme($event)" id="lightgreen">
        <ion-label color="LightGreen">Light Green</ion-label>
      </ion-item>
      <ion-item menuClose (click)="chooseTheme($event)" id="lime">
        <ion-label color="Lime">Lime</ion-label>
      </ion-item>
      <ion-item menuClose (click)="chooseTheme($event)" id="yellow">
        <ion-label color="Yellow">Yellow</ion-label>
      </ion-item>
      <ion-item menuClose (click)="chooseTheme($event)" id="amber">
        <ion-label color="Amber">Amber</ion-label>
      </ion-item>
      <ion-item menuClose (click)="chooseTheme($event)" id="orange">
        <ion-label color="Orange">Orange</ion-label>
      </ion-item>
      <ion-item menuClose (click)="chooseTheme($event)" id="deeporange">
        <ion-label color="DeepOrange">Deep Orange</ion-label>
      </ion-item>
      <ion-item menuClose (click)="chooseTheme($event)" id="brown">
        <ion-label color="Brown">Brown</ion-label>
      </ion-item>
      <ion-item menuClose (click)="chooseTheme($event)" id="grey">
        <ion-label color="Grey">Grey</ion-label>
      </ion-item>
      <ion-item menuClose (click)="chooseTheme($event)" id="bluegrey">
        <ion-label color="BlueGrey">Blue Grey</ion-label>
      </ion-item>
  </ion-list>
</ion-content>
</ion-menu>
<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>
```
## menu.ts
```bash
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
```
## theme
In theme folder you have to add many themes files like
```bash
.blue-theme {
    .toolbar-background {
      background-color: #2962ff; //primary
    }
    ion-navbar ion-icon{
      color: #ffffff; //text
    }
    ion-icon{
      color: #ffffff; //text
    }
    .title{
      -webkit-text-fill-color: #ffffff; //text
    }
    .fabss{
      background-color: #0039cb //dark
    }
    .t6item2{
      background: #2962ff; //primary
    }
    .range-knob {
      background-color: #0039cb !important //dark
    }
    .range-bar-active {
      background-color: #0039cb !important //dark
    }
    .t5section1{
      background-color: #E1E2E1; 
    }
    .t5section3{
      background-color: #768fff; //light
    }
    .btn{
      background-color: #2962ff; //primary
      -webkit-text-fill-color: #ffffff; //text
    }
    .ccontent{
      background: #2962ff; //primary
      -webkit-text-fill-color: #ffffff; //text
    }
    ion-card-header{
      background-color: #0039cb; //dark
      -webkit-text-fill-color: #ffffff; //text
    }
    .t2section1{
      background-color: #0039cb; //dark
      -webkit-text-fill-color: #ffffff; //text
    }
    .t2section2{
      background-color: #2962ff; //primary
    }
    .t2section3{
      background-color: #768fff; //light
      -webkit-text-fill-color: #ffffff; //text
    }
    .t2section4{
      background-color: #E1E2E1; 
    }
    .hr{
      background-color: #0039cb; //dark
    }
    .t4innersection1{
      background-color: #2962ff; //primary
    }
    .t4innersection2{
      background-color: #E1E2E1; 
    }
  }
```
Similarly make the different themes and save as ```.scss``` format.

## Tabs
### tabs.html
```bash
<ion-tabs [selectedIndex]="myIndex">
  <ion-tab [root]="tab1Root" tabTitle="Tab 1" tabIcon="home"></ion-tab>
  <ion-tab [root]="tab2Root" tabTitle="Tab 2" tabIcon="home"></ion-tab>
  <ion-tab [root]="tab3Root" tabTitle="Tab 3" tabIcon="home"></ion-tab>
  <ion-tab [root]="tab4Root" tabTitle="Tab 4" tabIcon="home"></ion-tab>
  <ion-tab [root]="tab5Root" tabTitle="Tab 5" tabIcon="home"></ion-tab>
  <ion-tab [root]="tab6Root" tabTitle="Tab 6" tabIcon="home"></ion-tab>
</ion-tabs>
```

### tabs.ts
```bash
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

```
### tab1.html
```bash
<ion-header>

  <ion-navbar>
      <ion-buttons start>
          <button ion-button menuToggle>
            <ion-icon name="menu" color="light"></ion-icon>
          </button>
        </ion-buttons>
    <ion-title class="title">Tab 1</ion-title>
  </ion-navbar>

</ion-header>


<ion-content>
  <div class="row t1section1">
    <div class="col"></div>
  </div>
  <ion-fab right middle>
    <button ion-fab class="fabss"><ion-icon name="md-add"></ion-icon></button>
  </ion-fab>
  <div class="row t1section3">
    <div class="col" >
      <ion-range min="-200" max="200" [(ngModel)]="saturation" color="dark" class="range"></ion-range>
    </div>
  </div>
</ion-content>

```
### tab2.html
```bash

<ion-header>

  <ion-navbar>
      <ion-buttons start>
          <button ion-button menuToggle>
            <ion-icon name="menu"></ion-icon>
          </button>
        </ion-buttons>
    <ion-title>Tab 2</ion-title>
  </ion-navbar>

</ion-header>


<ion-content>
  <div class="t2section1" padding><h2 ion-text>Text</h2></div>
  <div class="t2section2"></div>
  <div class="t2section3">
    <h3 ion-text>ITEM 1 <hr class="hr"></h3>
    <h3 ion-text>ITEM 2</h3>
    <h3 ion-text>ITEM 3</h3>
  </div>
  <div class="t2section4">
    <ion-fab right bottom>
      <button ion-fab class="fabss"><ion-icon name="md-add"></ion-icon></button>
    </ion-fab>
  </div>
</ion-content>

```
Similarly in ```bash tab3.html ``` 