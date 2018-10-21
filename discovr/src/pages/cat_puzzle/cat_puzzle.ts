import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';

import { AkvoDialogue } from '../akvo/akvo';

@Component({
  selector: 'page-cat_puzzle',
  templateUrl: 'cat_´puzzle.html'
})
export class CategoriesPuz {

	constructor(public navCtrl: NavController, public navParams: NavParams) {
	
  	console.log(navParams.get('val'));

  }

}