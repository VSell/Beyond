import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';

import { ResultMemory } from '../result_memory/result_memory';

@Component({
  selector: 'page-memory3',
  templateUrl: 'memory3.html'
})
export class MemoryStage3 {

	constructor(public navCtrl: NavController, public navParams: NavParams) {
	
  	console.log(navParams.get('val'));

  }

}
