import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoStatsComponent } from './video-stats.component';

describe('VideoStatsComponent', () => {
  let component: VideoStatsComponent;
  let fixture: ComponentFixture<VideoStatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VideoStatsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(VideoStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
