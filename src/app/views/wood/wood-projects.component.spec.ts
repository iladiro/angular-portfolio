import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WoodProjectsComponent } from './wood-projects.component';

describe('WoodProjectsComponent', () => {
  let component: WoodProjectsComponent;
  let fixture: ComponentFixture<WoodProjectsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WoodProjectsComponent]
    });
    fixture = TestBed.createComponent(WoodProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
