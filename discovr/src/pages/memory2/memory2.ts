import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';

import { MemoryStage3 } from '../memory3/memory3';

@Component({
  selector: 'page-memory2',
  templateUrl: 'memory2.html'
})
export class MemoryStage2 {

	constructor(public navCtrl: NavController, public navParams: NavParams) {
	
  	console.log(navParams.get('val'));

  }

}
