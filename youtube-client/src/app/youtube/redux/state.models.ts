import { Video } from '../models/video.model';

export interface YoutubeState {
  videos: Video[];
  loadingStatus: boolean;
}
