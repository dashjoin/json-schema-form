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

  it('split', () => {
    expect(component.split("/a")).toEqual(["a"])
    expect(component.split("")).toEqual([])
    expect(component.split("/a/b")).toEqual(["a", "b"])
    expect(() => component.split("a")).toThrowError("JSON Pointer must start with /")
    expect(() => component.split("//a")).toThrowError("JSON Pointer must not contain an empty reference token")
  })

  it('json pointer++ err handling', () => {
    expect(component.jsonPointer([1, 2], "/a")).toEqual(undefined)
    expect(component.jsonPointer({ a: 1 }, "/0")).toEqual(undefined)
    expect(component.jsonPointer({ a: 1 }, "/a/4/3/s/v")).toEqual(undefined)
  })

  it('json pointer++', () => {
    expect(component.jsonPointer([1, 2], "")).toEqual([1, 2])
    expect(component.jsonPointer([1, 2], "/*")).toEqual([1, 2])
    expect(component.jsonPointer([1, 2], "/0")).toEqual(1)
    expect(component.jsonPointer([{ a: 1 }], "/0/a")).toEqual(1)
    expect(component.jsonPointer([{ a: 1 }, { a: 2 }], "/*/a")).toEqual([1, 2])
    expect(component.jsonPointer([{ a: [1] }, { a: [2] }], "/*/a")).toEqual([[1], [2]])
    expect(component.jsonPointer([{ a: { b: 1 } }, { a: { b: 2 } }], "/*/a/b")).toEqual([1, 2])
    expect(component.jsonPointer([{ a: [{ b: 1 }] }, { a: [{ b: 2 }] }], "/*/a/0/b")).toEqual([1, 2])
    expect(component.jsonPointer([{ a: [{ b: 1 }] }, { a: [{ b: 2 }] }], "/*/a/*/b")).toEqual([[1], [2]])
    expect(component.jsonPointer([{ a: [{ b: 1 }] }, { a: [{ b: 2 }] }], "/*/a/*")).toEqual([[{ b: 1 }], [{ b: 2 }]])
    expect(component.jsonPointer({ a: "hello" }, "/a/0")).toEqual('h')
    expect(component.jsonPointer({ a: "hello", b: "world" }, "/*")).toEqual(['hello', 'world'])
  })
});
