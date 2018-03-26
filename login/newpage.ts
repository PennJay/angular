import { Component,NgModule } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { Http} from "@angular/http";
import { Headers } from "@angular/http";
import { HomePage } from '../home/home';

/**
 * Generated class for the NewpagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-newpage',
  templateUrl: 'newpage.html',
})
export class NewpagePage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
              private alertCtrl: AlertController,
              public http:Http,
  ) {
   
  }
  text:string;
  password:number;
  headers = new Headers( {'Content-Type':'application/x-www-form-urlencoded'} );




  E1() {
    let alert = this.alertCtrl.create({
      title: 'Error',
      subTitle: 'your login is not exist!',
      buttons: ['disimiss']
    });
    alert.present();
  }




  E2() {
    let alert = this.alertCtrl.create({
      title: 'Error',
      subTitle: 'your login or password is wrong!',
      buttons: ['disimiss']
    });
    alert.present();
  }
  

  login(){
    this.http.post('http://datainfo.duapp.com/shopdata/userinfo.php',
    JSON.stringify({
      status:'login',
      userID:this.text,
      password:this.password
    }),{
      headers:this.headers
    }).subscribe(data=>{
     
        if(data['_body']==0){
          this.E1();
        }
        else if(data['_body']==2){
          this.E2();
        }
        else{
          // 登陆成功后跳转到主页面去
          this.navCtrl.push(HomePage);
        }   
    }),err=>{
      console.log(err);
    };
  };
}