import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsonSchemaFormComponent } from './json-schema-form.component';

describe('JsonSchemaFormComponent', () => {
  let component: JsonSchemaFormComponent;
  let fixture: ComponentFixture<JsonSchemaFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JsonSchemaFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JsonSchemaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
