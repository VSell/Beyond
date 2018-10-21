import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomePage } from '../home/home';

@Component({
  selector: 'page-main',
  templateUrl: 'main.html'
})
export class Main {

  constructor(public navCtrl: NavController) {

  }

  begin(){
  	this.navCtrl.push(HomePage, {
  		val: 'home'
  	})
  }

}
