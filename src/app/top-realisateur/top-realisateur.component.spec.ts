import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopRealisateurComponent } from './top-realisateur.component';

describe('TopRealisateurComponent', () => {
  let component: TopRealisateurComponent;
  let fixture: ComponentFixture<TopRealisateurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopRealisateurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopRealisateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
