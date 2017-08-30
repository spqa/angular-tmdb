import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {TvShowPosterComponent} from './tv-show-poster.component';

describe('TvShowPosterComponent', () => {
  let component: TvShowPosterComponent;
  let fixture: ComponentFixture<TvShowPosterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TvShowPosterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TvShowPosterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
