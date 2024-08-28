import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PageListEtudiantPage } from './page-list-etudiant.page';

describe('PageListEtudiantPage', () => {
  let component: PageListEtudiantPage;
  let fixture: ComponentFixture<PageListEtudiantPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PageListEtudiantPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
