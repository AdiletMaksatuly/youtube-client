export interface Video {
  kind: ResponseKind.VIDEOS_LIST_VIDEO;
  etag: string;
  id: VideosListVideoID;
  snippet: VideoSnippet;
  statistics: VideoStatistics;
}

export interface SearchListVideo extends Omit<Video, 'kind' | 'id'> {
  kind: ResponseKind.SEARCH_LIST_VIDEO;
  id: SearchListVideoID;
}

export interface SearchListVideoID {
  kind: ResponseKind.VIDEOS_LIST_VIDEO;
  videoId: string;
}

export interface VideosListVideoID {
  id: string;
}

export enum ResponseKind {
  SEARCH_LIST = 'youtube#searchListResponse',
  SEARCH_LIST_VIDEO = 'youtube#searchResult',
  VIDEOS_LIST = 'youtube#videoListResponse',
  VIDEOS_LIST_VIDEO = 'youtube#video',
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
  EN = 'en',
  EN_US = 'en-US',
  RU = 'ru',
}

export enum VideoLiveBroadcastContent {
  NONE = 'none',
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

export interface SearchListResponse {
  kind: ResponseKind.SEARCH_LIST;
  etag: string;
  pageInfo: PageInfo;
  items: SearchListVideo[];
}

export interface VideosListResponse {
  kind: ResponseKind.VIDEOS_LIST;
  etag: string;
  pageInfo: PageInfo;
  items: Video[];
}
