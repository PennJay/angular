import { Component } from '@angular/core';
import { IonicPage, NavController,NavParams} from 'ionic-angular';
import{Contact2Page} from'../contact2/contact2';

/**
 * Generated class for the ContactPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html',
})
export class ContactPage {
items=[];
  constructor(public navCtrl: NavController, public navParams: NavParams,) {  
  
    this.items=[
    {'title':'pjj1',
    'tx':'assets/imgs/xiaoxi.png',
    'content':'hello',
    'time':'8:00'},
    {'title':'pjj2',
    'tx':'assets/imgs/xiaoxi.png',
    'content':'hello',
    'time':'9:00'},
    {'title':'pjj3',
    'tx':'assets/imgs/xiaoxi.png',
    'content':'hello',
    'time':'10:00'},
  
 
  ];

  }
  push(item){
this.navCtrl.push(Contact2Page,{item:item});
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ContactPage');
  }

}
