import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListFillePage } from './list-fille.page';

describe('ListFillePage', () => {
  let component: ListFillePage;
  let fixture: ComponentFixture<ListFillePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ListFillePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
