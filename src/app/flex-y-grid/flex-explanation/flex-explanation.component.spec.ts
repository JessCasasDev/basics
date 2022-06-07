import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlexExplanationComponent } from './flex-explanation.component';

describe('FlexExplanationComponent', () => {
  let component: FlexExplanationComponent;
  let fixture: ComponentFixture<FlexExplanationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlexExplanationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlexExplanationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
