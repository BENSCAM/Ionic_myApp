import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EnquetePage } from './enquete.page';

describe('EnquetePage', () => {
  let component: EnquetePage;
  let fixture: ComponentFixture<EnquetePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EnquetePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
