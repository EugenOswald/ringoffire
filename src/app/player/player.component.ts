import { Input } from '@angular/core';
import { Component } from '@angular/core';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss'],
})
export class PlayerComponent {
  @Input() name;
  @Input() playerActive: boolean = false;
}
