import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';

import { VideoMemory } from '../vid_memory/vid_memory';


@Component({
  selector: 'page-result_memory',
  templateUrl: 'result_memory.html'
})
export class ResultMemory {

	constructor(public navCtrl: NavController, public navParams: NavParams) {
	
  	console.log(navParams.get('val'));

  }

}