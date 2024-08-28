import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GestEtudiantPage } from './gest-etudiant.page';

describe('GestEtudiantPage', () => {
  let component: GestEtudiantPage;
  let fixture: ComponentFixture<GestEtudiantPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(GestEtudiantPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
