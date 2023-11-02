import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutdoorGalleryComponent } from './outdoor-gallery.component';

describe('OutdoorGalleryComponent', () => {
  let component: OutdoorGalleryComponent;
  let fixture: ComponentFixture<OutdoorGalleryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OutdoorGalleryComponent]
    });
    fixture = TestBed.createComponent(OutdoorGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
