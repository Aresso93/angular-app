import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
//qui sto dichiarando una proprietà dell'header
  title: string = 'Shinku Hadoken'
  version = 3 //non è necessario scrivere che è tipo number, ma male non fa
  userName?:string; //il ? indica che "sì, Typescript, sono sicuro che possa anche essere undefined all'inizio"

  constructor(){
    console.log('Sto costruendo l\'header! It\'s headering time!');

  }



  //void indica che questa funzione non restituisce niente. Se invece ritornasse qualcosa, dovremmo scrivere che tipo di cosa ritorna
  ngOnInit(): void {
    console.log('Stai indietro, sto per inizializzare! It\'s initialising time');

  }

  login():void{
    this.userName = 'Ryu'
  }

}
