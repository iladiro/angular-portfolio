import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VariabiliInJavascriptComponent } from './variabili-in-javascript.component';

describe('VariabiliInJavascriptComponent', () => {
  let component: VariabiliInJavascriptComponent;
  let fixture: ComponentFixture<VariabiliInJavascriptComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VariabiliInJavascriptComponent]
    });
    fixture = TestBed.createComponent(VariabiliInJavascriptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
