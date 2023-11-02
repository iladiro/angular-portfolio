import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurriculumBlockComponent } from './curriculum-block.component';

describe('CurriculumBlockComponent', () => {
  let component: CurriculumBlockComponent;
  let fixture: ComponentFixture<CurriculumBlockComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CurriculumBlockComponent]
    });
    fixture = TestBed.createComponent(CurriculumBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
