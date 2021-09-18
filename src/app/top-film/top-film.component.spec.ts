import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopFilmComponent } from './top-film.component';

describe('TopFilmComponent', () => {
  let component: TopFilmComponent;
  let fixture: ComponentFixture<TopFilmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopFilmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopFilmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
