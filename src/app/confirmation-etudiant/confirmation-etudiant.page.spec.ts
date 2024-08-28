import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConfirmationEtudiantPage } from './confirmation-etudiant.page';

describe('ConfirmationEtudiantPage', () => {
  let component: ConfirmationEtudiantPage;
  let fixture: ComponentFixture<ConfirmationEtudiantPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ConfirmationEtudiantPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
