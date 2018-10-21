import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';

import { CategoriesMem } from '../cat_memory/cat_memory';
import { MemoryStage2 } from '../memory2/memory2';

@Component({
  selector: 'page-memory1',
  templateUrl: 'memory1.html'
})
export class MemoryStage1 {

	constructor(public navCtrl: NavController, public navParams: NavParams) {
	
  	console.log(navParams.get('val'));

  }

}
