import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListContactPage } from './list-contact.page';

describe('ListContactPage', () => {
  let component: ListContactPage;
  let fixture: ComponentFixture<ListContactPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ListContactPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
