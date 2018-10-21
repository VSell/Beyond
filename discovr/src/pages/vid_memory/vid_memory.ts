import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';

import { SavedMemory } from '../saved_memory/saved_memory';
import { AkvoDialogue } from '../akvo/akvo';
import { MemoryStage1 } from '../memory1/memory1';

@Component({
  selector: 'page-vid_memory',
  templateUrl: 'vid_memory.html'
})
export class VideoMemory {

	constructor(public navCtrl: NavController, public navParams: NavParams) {
	
  	console.log(navParams.get('val'));

  }

}