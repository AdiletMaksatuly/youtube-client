export interface Video {
  kind: VideoKind;
  etag: string;
  id: string;
  snippet: VideoSnippet;
  statistics: VideoStatistics;
}

export enum VideoKind {
  YoutubeVideo = 'youtube#video',
}

export interface VideoSnippet {
  publishedAt: string;
  channelId: string;
  title: string;
  description: string;
  thumbnails: VideoThumbnails;
  channelTitle: string;
  tags: string[];
  categoryId: string;
  liveBroadcastContent: VideoLiveBroadcastContent;
  localized: VideoLocalized;
  defaultAudioLanguage: VideoDefaultLanguage;
  defaultLanguage?: VideoDefaultLanguage;
}

export enum VideoDefaultLanguage {
  En = 'en',
  EnUS = 'en-US',
  Ru = 'ru',
}

export enum VideoLiveBroadcastContent {
  None = 'none',
}

export interface VideoLocalized {
  title: string;
  description: string;
}

export interface VideoThumbnails {
  default: VideoThumbnail;
  medium: VideoThumbnail;
  high: VideoThumbnail;
  standard: VideoThumbnail;
  maxres: VideoThumbnail;
}

export interface VideoThumbnail {
  url: string;
  width: number;
  height: number;
}

export interface VideoStatistics {
  viewCount: string;
  likeCount: string;
  dislikeCount: string;
  favoriteCount: string;
  commentCount: string;
}

export interface PageInfo {
  totalResults: number;
  resultsPerPage: number;
}

export interface IResponseVideo {
  kind: string;
  etag: string;
  pageInfo: PageInfo;
  items: Video[];
}
