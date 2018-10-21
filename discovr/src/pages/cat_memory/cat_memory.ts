import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';

import { AkvoDialogue } from '../akvo/akvo';
import { MemoryStage1 } from '../memory1/memory1';

@Component({
  selector: 'page-cat_memory',
  templateUrl: 'cat_memory.html'
})
export class CategoriesMem {

	constructor(public navCtrl: NavController, public navParams: NavParams) {
	
  	console.log(navParams.get('val'));

  }

}
