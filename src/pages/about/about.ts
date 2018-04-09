import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { About2Page } from '../about2/about2';


/**
 * Generated class for the AboutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
})
export class AboutPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AboutPage');
  }
  search = 'infor';
  infor=[
    {
      'title':'资产包转让',
      'icon':'assets/imgs/zichanbao.png'
    },
    {
      'title':'债权转让',
      'icon':'assets/imgs/zhaiquan.png'
    },
    {
      'title':'固产转让',
      'icon':'assets/imgs/guchan.png'
    },
    {
      'title':'典当担保',
      'icon':'assets/imgs/diandang.png'
    },
    {
      'title':'融资借贷',
      'icon':'assets/imgs/zichanbao.png'
    },
    {
      'title':'悬赏信息',
      'icon':'assets/imgs/xuanshang.png'
    },
    {
      'title':'商业保理',
      'icon':'assets/imgs/diandang.png'
    },
    {
      'title':'尽职调查',
      'icon':'assets/imgs/diaocha.png'
    },
    {
      'title':'资产求购',
      'icon':'assets/imgs/'
    },
    {
      'title':'委外催收',
      'icon':'assets/imgs/zhaiquan.png'
    },
    {
      'title':'法律服务',
      'icon':'assets/imgs/diaocha.png'
    },
 
  ]
  push(){
    this.navCtrl.push(About2Page);
  }
}

