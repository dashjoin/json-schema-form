import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdditionalPropertiesComponent } from './additional-properties.component';

describe('AdditionalPropertiesComponent', () => {
  let component: AdditionalPropertiesComponent;
  let fixture: ComponentFixture<AdditionalPropertiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdditionalPropertiesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdditionalPropertiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
