import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-subpage',
  templateUrl: 'subpage.html',
})
export class SubpagePage {

  constructor(public navCtrl: NavController, 
  ) {} 

  ionViewDidLoad() {
    console.log('ionViewDidLoad SubpagePage');
  }

}
