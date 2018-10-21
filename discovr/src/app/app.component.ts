import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


import { HomePage } from '../pages/home/home';
import { AkvoDialogue } from '../pages/akvo/akvo';

import { CategoriesMem } from '../pages/cat_memory/cat_memory';
import { CategoriesPuz } from '../pages/cat_puzzle/cat_puzzle';
import { CategoriesTri } from '../pages/cat_trivia/cat_trivia';
import { MemoryStage1 } from '../pages/memory1/memory1';
import { MemoryStage2 } from '../pages/memory2/memory2';
import { MemoryStage3 } from '../pages/memory3/memory3';
import { ResultMemory } from '../pages/result_memory/result_memory';
import { ResultPuzzle } from '../pages/result_puzzle/result_puzzle';
import { ResultTrivia } from '../pages/result_trivia/result_trivia';
import { SavedMemory } from '../pages/saved_memory/saved_memory';
import { SavedPuzzle } from '../pages//saved_puzzle/saved_puzzle';
import { SavedTrivia } from '../pages/saved_trivia/saved_trivia';
import { VideoMemory } from '../pages/vid_memory/vid_memory';
import { VideoPuzzle } from '../pages/vid_puzzle/vid_puzzle';
import { VideoTrivia } from '../pages/vid_trivia/vid_trivia';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}

