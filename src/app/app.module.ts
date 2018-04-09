import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';

import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
// import { AlertController } from 'ionic-angular';


import { HomePage } from '../pages/home/home';
import { HelloPage} from '../pages/hello/hello';
import { TabsPage} from '../pages/tabs/tabs';
import { AboutPage} from '../pages/about/about';
import { PersonPage } from '../pages/person/person';
import { ContactPage } from '../pages/contact/contact';
import { SubpagePage} from '../pages/subpage/subpage';
import { LoginPage } from '../pages/login/login';
import { ServicePage} from '../pages/service/service';
import { About2Page} from '../pages/about2/about2';
import {Contact2Page} from '../pages/contact2/contact2';
import {SetPage} from '../pages/set/set'; 

@NgModule({ 
  declarations: [
    MyApp,
    HomePage,
    HelloPage,
    TabsPage,
    AboutPage,
    PersonPage,
    ContactPage,
    SubpagePage,
    LoginPage,
    ServicePage,
    About2Page,
    Contact2Page,
    SetPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp,{
      tabsHideOnSubPages:true,
      backButtonText:''
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    HelloPage,
    TabsPage,
    AboutPage,
    PersonPage,
    ContactPage,
    SubpagePage,
    LoginPage,
    ServicePage,
    About2Page,
    Contact2Page,
    SetPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
  ]
})
export class AppModule {}
