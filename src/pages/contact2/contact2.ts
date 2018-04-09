import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { assert } from 'ionic-angular/util/util';

/**
 * Generated class for the Contact2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-contact2',
  templateUrl: 'contact2.html',
})
export class Contact2Page {
items=[];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.items=[
      {'title':'pennjay',
      'tx':'assets/imgs/wode.png',
      'content':'hello',
      'time':'8:00'},
      {'title':'hhhhhh',
      'tx':'assets/imgs/wode.png',
      'content':'hi',
      'time':'8:30'},
    
   
    ];
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad Contact2Page');
  }

}
