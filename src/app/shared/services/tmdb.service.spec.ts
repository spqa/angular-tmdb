import {inject, TestBed} from '@angular/core/testing';

import {TMDBService} from './tmdb.service';

describe('TMDBService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TMDBService]
    });
  });

  it('should be created', inject([TMDBService], (service: TMDBService) => {
    expect(service).toBeTruthy();
  }));
});
