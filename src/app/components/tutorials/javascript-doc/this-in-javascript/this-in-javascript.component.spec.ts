import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThisInJavascriptComponent } from './this-in-javascript.component';

describe('ThisInJavascriptComponent', () => {
  let component: ThisInJavascriptComponent;
  let fixture: ComponentFixture<ThisInJavascriptComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ThisInJavascriptComponent]
    });
    fixture = TestBed.createComponent(ThisInJavascriptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
