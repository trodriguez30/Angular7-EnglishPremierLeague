import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamFavoriteCardComponent } from './team-favorite-card.component';

describe('TeamFavoriteCardComponent', () => {
  let component: TeamFavoriteCardComponent;
  let fixture: ComponentFixture<TeamFavoriteCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamFavoriteCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamFavoriteCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
