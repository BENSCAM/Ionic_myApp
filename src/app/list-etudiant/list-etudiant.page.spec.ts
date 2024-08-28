import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListEtudiantPage } from './list-etudiant.page';

describe('ListEtudiantPage', () => {
  let component: ListEtudiantPage;
  let fixture: ComponentFixture<ListEtudiantPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ListEtudiantPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
