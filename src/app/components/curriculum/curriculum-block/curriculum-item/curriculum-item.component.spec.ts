import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurriculumItemComponent } from './curriculum-item.component';

describe('CurriculumItemComponent', () => {
  let component: CurriculumItemComponent;
  let fixture: ComponentFixture<CurriculumItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CurriculumItemComponent]
    });
    fixture = TestBed.createComponent(CurriculumItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
