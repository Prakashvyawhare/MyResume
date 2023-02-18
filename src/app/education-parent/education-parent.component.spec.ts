import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducationParentComponent } from './education-parent.component';

describe('EducationParentComponent', () => {
  let component: EducationParentComponent;
  let fixture: ComponentFixture<EducationParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EducationParentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EducationParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
