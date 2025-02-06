import { DecentBookmarksResponse } from "./types";

interface UserCastUrlProps {
  isAuthenticated: boolean;
  data: DecentBookmarksResponse | undefined;
  n: number;
}
export const userCastUrl = (props: UserCastUrlProps): string => {
  const { isAuthenticated, data, n } = props;

  if (!isAuthenticated) return import.meta.env["VITE_DEFAULT_EMBED"];

  if (!data || data.bookmarks.length === 0)
    return import.meta.env["VITE_FALLBACK_EMBED"];

  const latestBookmark = data.bookmarks.sort(
    (a, b) => b.timestamp - a.timestamp
  )[n - 1]; // display 1-indexed to user, use 0-indexed in data structure

  const { username, hash } = latestBookmark;
  return `https://warpcast.com/${username}/${hash.slice(0, 10)}`;
};
