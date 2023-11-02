import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HobbyItemComponent } from './hobby-item.component';

describe('HobbyItemComponent', () => {
  let component: HobbyItemComponent;
  let fixture: ComponentFixture<HobbyItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HobbyItemComponent]
    });
    fixture = TestBed.createComponent(HobbyItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
