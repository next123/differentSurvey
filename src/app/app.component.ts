import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'DifferentSurvey';
  clickMex : string = "click me";
  changeMex(){
    if(this.clickMex == "click me")
      this.clickMex = "well Done";
      else
        this.clickMex = "click me";

  }
}
