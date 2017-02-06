import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { WebApiPage } from '../pages/web-api/web-api';

import { AnimateCssPage } from '../pages/animate-css/animate-css';

import { NativeCssPage } from '../pages/native-css/native-css';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
	WebApiPage,
	AnimateCssPage,
	NativeCssPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
	WebApiPage,
	AnimateCssPage,
	NativeCssPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
