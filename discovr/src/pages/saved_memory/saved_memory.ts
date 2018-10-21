import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';

import { AkvoDialogue } from '../akvo/akvo';

@Component({
  selector: 'page-saved_memory',
  templateUrl: 'saved_memory.html'
})
export class SavedMemory {

	constructor(public navCtrl: NavController, public navParams: NavParams) {
	
  	console.log(navParams.get('val'));

  }

}