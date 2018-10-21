import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';

import { VideoPuzzle } from '../vid_puzzle/vid_puzzle';


@Component({
  selector: 'page-result_puzzle',
  templateUrl: 'result_puzzle.html'
})
export class ResultPuzzle {

	constructor(public navCtrl: NavController, public navParams: NavParams) {
	
  	console.log(navParams.get('val'));

  }

}