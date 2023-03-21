import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomComponent } from './custom.component';

describe('CustomComponent', () => {
  let component: CustomComponent;
  let fixture: ComponentFixture<CustomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
