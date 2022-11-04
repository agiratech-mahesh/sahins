import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Expense2CardComponent } from './expense2-card.component';

describe('Expense2CardComponent', () => {
  let component: Expense2CardComponent;
  let fixture: ComponentFixture<Expense2CardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Expense2CardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Expense2CardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
