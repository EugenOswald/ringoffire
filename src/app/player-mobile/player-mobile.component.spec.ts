import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerMobileComponent } from './player-mobile.component';

describe('PlayerMobileComponent', () => {
  let component: PlayerMobileComponent;
  let fixture: ComponentFixture<PlayerMobileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayerMobileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlayerMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
