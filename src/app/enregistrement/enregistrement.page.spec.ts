import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EnregistrementPage } from './enregistrement.page';

describe('EnregistrementPage', () => {
  let component: EnregistrementPage;
  let fixture: ComponentFixture<EnregistrementPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EnregistrementPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
