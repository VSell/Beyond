import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';



@Component({
  selector: 'page-result_trivia',
  templateUrl: 'result_trivia.html'
})
export class ResultTrivia {

	constructor(public navCtrl: NavController, public navParams: NavParams) {
	
  	console.log(navParams.get('val'));

  }

}