import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';

import { SavedPuzzle } from '../saved_puzzle/saved_puzzle';
import { AkvoDialogue } from '../akvo/akvo';

@Component({
  selector: 'page-vid_puzzle',
  templateUrl: 'vid_puzzle.html'
})
export class VideoPuzzle {

	constructor(public navCtrl: NavController, public navParams: NavParams) {
	
  	console.log(navParams.get('val'));

  }

}