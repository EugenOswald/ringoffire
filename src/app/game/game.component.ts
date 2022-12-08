import { Component, OnInit } from '@angular/core';
import { Game } from '../../models/game';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
})
export class GameComponent implements OnInit {
  pickCardAnimation = false;
  game: Game;

  ngOnInit() {
    this.newGame();
  }

  newGame() {
    this.game = new Game(); // die Variabel bekommt ein neues von dem, was wir angelegt haben.
    console.log(this.game)
  }

  takeCard() {
    this.pickCardAnimation = true;
  }
}
