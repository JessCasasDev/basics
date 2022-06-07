import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlexYGridComponent } from './flex-y-grid.component';

describe('FlexYGridComponent', () => {
  let component: FlexYGridComponent;
  let fixture: ComponentFixture<FlexYGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlexYGridComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlexYGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
