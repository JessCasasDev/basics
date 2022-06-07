import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridExplanationComponent } from './grid-explanation.component';

describe('GridExplanationComponent', () => {
  let component: GridExplanationComponent;
  let fixture: ComponentFixture<GridExplanationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GridExplanationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GridExplanationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
