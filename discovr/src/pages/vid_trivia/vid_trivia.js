import { Component } from '@angular/core';
Component({
    selector: 'page-vid_trivia',
    templateUrl: 'vid_trivia.html'
});
var VideoTrivia = /** @class */ (function () {
    function VideoTrivia(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        console.log(navParams.get('val'));
    }
    return VideoTrivia;
}());
export { VideoTrivia };
//# sourceMappingURL=vid_trivia.js.map