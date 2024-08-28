import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PageEtudiantPage } from './page-etudiant.page';

describe('PageEtudiantPage', () => {
  let component: PageEtudiantPage;
  let fixture: ComponentFixture<PageEtudiantPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PageEtudiantPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
