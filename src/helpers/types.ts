export interface DecentBookmark {
  timestamp: number;
  fid: number;
  username: string;
  hash: string;
  tags?: string[];
}

export interface DecentBookmarksRequest {
  fid: number;
}

export interface DecentBookmarksResponse {
  bookmarks: DecentBookmark[];
}
