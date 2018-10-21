import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AkvoDialogue } from '../akvo/akvo';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  load(){
  	this.navCtrl.push(AkvoDialogue, {
  		val: 'akvo'
  	})
  }

}
