import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutdoorGalleryItemComponent } from './outdoor-gallery-item.component';

describe('OutdoorGalleryItemComponent', () => {
  let component: OutdoorGalleryItemComponent;
  let fixture: ComponentFixture<OutdoorGalleryItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OutdoorGalleryItemComponent]
    });
    fixture = TestBed.createComponent(OutdoorGalleryItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
