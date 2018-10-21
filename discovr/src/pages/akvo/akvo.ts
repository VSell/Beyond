import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';

import { CategoriesMem } from '../cat_memory/cat_memory';
import { CategoriesPuz } from '../cat_puzzle/cat_puzzle';
import { CategoriesTri } from '../cat_trivia/cat_trivia';


@Component({
  selector: 'page-akvo',
  templateUrl: 'akvo.html'
})
export class AkvoDialogue {

	constructor(public navCtrl: NavController, public navParams: NavParams) {
	
  	console.log(navParams.get('val'));

  }

}
