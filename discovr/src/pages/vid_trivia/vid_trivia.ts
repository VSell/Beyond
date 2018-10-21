import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';

import { SavedTrivia } from '../saved_trivia/saved_trivia';
import { AkvoDialogue } from '../akvo/akvo';

Component({
  selector: 'page-vid_trivia',
  templateUrl: 'vid_trivia.html'
})
export class VideoTrivia {

	constructor(public navCtrl: NavController, public navParams: NavParams) {
	
  	console.log(navParams.get('val'));

  }

}