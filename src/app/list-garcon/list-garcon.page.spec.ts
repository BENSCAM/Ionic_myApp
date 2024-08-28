import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListGarconPage } from './list-garcon.page';

describe('ListGarconPage', () => {
  let component: ListGarconPage;
  let fixture: ComponentFixture<ListGarconPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ListGarconPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
