import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SetPage } from '../set/set';



@IonicPage()
@Component({
  selector: 'page-hello',
  templateUrl: 'hello.html',
})
export class HelloPage {
  items=[];
imgSrc:string;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.items=[
      {'wode':'assets/imgs/shezhi.png',
        'title':'芽币'
      },
      {'wode':'assets/imgs/shezhi.png',
        'title':'我发布的'
      },
      {'wode':'assets/imgs/shezhi.png',
        'title':'我合作的'
      },
      {'wode':'assets/imgs/shezhi.png',
        'title':'我的收藏'
      },
      {'wode':'assets/imgs/shezhi.png',
        'title':'我的草稿箱'
      },
      {'wode':'assets/imgs/shezhi.png',
        'title':'视频发布'
      },
      {'wode':'assets/imgs/shezhi.png',
        'title':'完善信息'
      },
      {'wode':'assets/imgs/shezhi.png',
        'title':'VIP等级'
      },
      {'wode':'assets/imgs/shezhi.png',
        'title':'账户安全'
      },
      {'wode':'assets/imgs/shezhi.png',
        'title':'帮助与反馈'
      },
      {'wode':'assets/imgs/shezhi.png',
        'title':'设置'
      },
    ];
  }
  
push(){
  this.navCtrl.push(SetPage);
}
  // takePhoto(){
  //   const options: CameraOptions = {
  //     quality: 100,
  //     destinationType: this.camera.DestinationType.DATA_URL,
  //     encodingType: this.camera.EncodingType.JPEG,
  //     mediaType: this.camera.MediaType.PICTURE
  //   }

  //   this.camera.getPicture(options).then((imageData) => {
  //     let base64Image = 'data:image/jpeg;base64,' + imageData;
  //     this.imgSrc=base64Image;
  //    }, (err) => {
  //    });
  // }
  ionViewDidLoad() {
    console.log('ionViewDidLoad HelloPage');
  }
}
