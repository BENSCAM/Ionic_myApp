import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CalculatricePage } from './calculatrice.page';

describe('CalculatricePage', () => {
  let component: CalculatricePage;
  let fixture: ComponentFixture<CalculatricePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CalculatricePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
