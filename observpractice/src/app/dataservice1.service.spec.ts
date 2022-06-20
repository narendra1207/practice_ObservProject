import { TestBed } from '@angular/core/testing';

import { Dataservice1Service } from './dataservice1.service';

describe('Dataservice1Service', () => {
  let service: Dataservice1Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Dataservice1Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
