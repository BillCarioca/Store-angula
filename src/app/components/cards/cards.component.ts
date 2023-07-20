import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  @Input()
  gameCover:string = ""
  @Input()
  gameType:string = "Digital PS4"
  @Input()
  gamePrice:string = "R$ 129,99"
  @Input()
  gameLabel:string=""

  constructor() { }

  ngOnInit(): void {
  }

}
