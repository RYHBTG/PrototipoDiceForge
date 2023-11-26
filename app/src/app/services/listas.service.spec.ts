import { TestBed } from '@angular/core/testing';

import { ListasService } from './listas.service';

describe('ListasService', () => {
  let service: ListasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
