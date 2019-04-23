import { Component } from '@angular/core';

interface Utente {
  nome: string;
  stelle: number;
  color: string;
  attivo?: boolean;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  utenti: Array<Utente> = [
    {
      nome: "Giacomo",
      stelle: 1,
      color: "green",
    },
    {
      nome: "Luigi",
      stelle: 4,
      attivo: true,
      color: "lime",
    },
    {
      nome: "Leonardo",
      stelle: 3,
      attivo: true,
      color: "purple",
    },
    {
      nome: "Giacomo 2",
      stelle: 3,
      attivo: false,
      color: "pink",
    },
    {
      nome: "GiuseppeSimone",
      stelle: 1,
      color: "lightblue",
    },
  ];

  title = 'DifferentSurvey';
  clickMex : string = "click me";
  changeMex(){
    if(this.clickMex == "click me")
      this.clickMex = "well Done";
      else
        this.clickMex = "click me";

  }
}
