import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JsonSchemaFormComponent } from './json-schema-form.component';
import { HttpClientModule } from '@angular/common/http';

describe('JsonSchemaFormComponent', () => {
  let component: JsonSchemaFormComponent;
  let fixture: ComponentFixture<JsonSchemaFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [JsonSchemaFormComponent],
      imports: [HttpClientModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JsonSchemaFormComponent);
    component = fixture.componentInstance;
    component.schema = { type: "string" }
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('filter lowercase', () => {
    component.choices = ["Test1", "test2", "aaaa", null]
    component.filter({ target: { value: "te" } })
    expect(component.filteredChoices).toEqual(["Test1", "test2"])
  });
});
