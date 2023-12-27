import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JavascriptDocComponent } from './javascript-doc.component';

describe('JavascriptDocComponent', () => {
  let component: JavascriptDocComponent;
  let fixture: ComponentFixture<JavascriptDocComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JavascriptDocComponent]
    });
    fixture = TestBed.createComponent(JavascriptDocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
