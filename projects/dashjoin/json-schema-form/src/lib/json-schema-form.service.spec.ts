import { TestBed } from '@angular/core/testing';

import { JsonSchemaFormService } from './json-schema-form.service';

describe('JsonSchemaFormService', () => {
  let service: JsonSchemaFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JsonSchemaFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
