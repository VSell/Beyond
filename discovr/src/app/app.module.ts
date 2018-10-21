import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AkvoDialogue } from '../pages/akvo/akvo';
import { Main } from '../pages/main/main';
import { CategoriesMem } from '../pages/cat_memory/cat_memory';
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


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    Main,
    AkvoDialogue,
    CategoriesMem,
    CategoriesTri,
    MemoryStage1,
    MemoryStage2,
    MemoryStage3,
    ResultMemory,
    ResultPuzzle,
    ResultTrivia,
    SavedMemory,
    SavedPuzzle,
    SavedTrivia,
    VideoMemory,
    VideoPuzzle
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    Main,
    AkvoDialogue,
    CategoriesMem,
    CategoriesTri,
    MemoryStage1,
    MemoryStage2,
    MemoryStage3,
    ResultMemory,
    ResultPuzzle,
    ResultTrivia,
    SavedMemory,
    SavedPuzzle,
    SavedTrivia,
    VideoMemory,
    VideoPuzzle
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
