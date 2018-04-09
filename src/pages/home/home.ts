import { Component } from '@angular/core';
import { NavController} from 'ionic-angular';

import { SubpagePage} from '../subpage/subpage';

import { ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';
import { ServicePage } from '../service/service';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  constructor(public navCtrl: NavController) {  }
  @ViewChild(Slides) slides:Slides;
  
  goToSlide(){
    this.slides.slideTo(2,500);
  }

  search="infor";

  infor=[
    {
      'title':'资产转让',
      'icon': 'assets/imgs/zichanbao.png'
    },
    {
      'title':'债券转让',
      'icon':'assets/imgs/zhaiquan.png'
    },
    {
      'title':'固产转让',
      'icon':'assets/imgs/guchan.png'
    },
    {
      'title':'商业保理',
      'icon':'assets/imgs/shangye.png'
    },
    {
      'title':'典当担保',
      'icon':'assets/imgs/diandang.png'
    },
    {
      'title':'债券转让',
      'icon':'assets/imgs/zhaiquan.png'
    },
    {
      'title':'悬赏信息',
      'icon':'assets/imgs/xuanshang.png'
    },
    {
      'title':'尽职调查',
      'icon':'assets/imgs/diaocha.png'
    }
  ]


  servicelist = [
    {
      'title': '资产包转让',
      'number': 'FB001',
      'icon': 'assets/imgs/zichanbao.png',
      'area': '北京',
      'source': '银行',
      'type': '抵押',
      'accont': '500万',
      'exchange': '300万'
    },
    {
      'title': '委外催收',
      'number': 'FB001',
      'icon': 'assets/imgs/xuanshang.png',
      'area': '北京',
      'source': '已诉讼',
      'type': '个人',
      'accont': '100',
      'exchange': '15%-30%'
    },
  ]

  dixian=""

  doInfinite(infiniteScroll) {
    var listdata = {
      'title': '资产包转让',
      'number': 'FB001',
      'icon': 'assets/imgs/zichanbao.png',
      'area': '北京',
      'source': '银行',
      'type': '抵押',
      'accont': '500万',
      'exchange': '300万'
    }

    setTimeout(() => {
      for (let i = 0; i < 2; i++) {
        this.servicelist.push(listdata);
      }

      infiniteScroll.complete();
      if(this.servicelist.length>6){
        this.dixian="我是有底线的"
        infiniteScroll.enable(false);
      }
    }, 500);
  }
 goSub(){
  this.navCtrl.push(SubpagePage);
}
goService(){
  this.navCtrl.push(ServicePage);
}
}
