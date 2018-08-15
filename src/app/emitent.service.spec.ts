import { TestBed, inject } from '@angular/core/testing';

import { EmitentService } from './emitent.service';

describe('EmitentService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EmitentService]
    });
  });

  it('should be created', inject([EmitentService], (service: EmitentService) => {
    expect(service).toBeTruthy();
  }));
});
