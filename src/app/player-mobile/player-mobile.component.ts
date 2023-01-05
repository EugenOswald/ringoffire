import { Input } from '@angular/core';
import { Component } from '@angular/core';
@Component({
  selector: 'app-player-mobile',
  templateUrl: './player-mobile.component.html',
  styleUrls: ['./player-mobile.component.scss'],
})
export class PlayerMobileComponent {
  @Input() name;
  @Input() image = 'player.png';
  @Input() playerActive: boolean = false;
}
