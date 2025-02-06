import { formatDistanceToNow } from "date-fns";
import { fetcher } from "itty-fetcher";

const github = fetcher({
  base: "https://api.github.com",
  headers: {
    Accept: "application/vnd.github.v3+json",
  },
});

interface GithubCommit {
  commit: {
    committer: {
      date: string;
    };
  };
}

// Cache for 5 minutes
const CACHE_DURATION = 5 * 60 * 1000;
const cache = new Map<string, { value: string; timestamp: number }>();

export const getLatestCommit = async (
  owner: string,
  repo: string,
  branch = "main"
): Promise<string> => {
  if (!owner || !repo) {
    throw new Error("Owner and repo are required");
  }

  const cacheKey = `${owner}/${repo}/${branch}`;
  const now = Date.now();
  const cached = cache.get(cacheKey);

  if (cached && now - cached.timestamp < CACHE_DURATION) {
    return cached.value;
  }

  const data = await github.get<GithubCommit>(
    `/repos/${owner}/${repo}/commits/${branch}`
  );

  if (!data?.commit?.committer?.date) {
    throw new Error("Invalid response format from GitHub API");
  }

  const date = new Date(data.commit.committer.date);
  const value = formatDistanceToNow(date, { addSuffix: true });

  cache.set(cacheKey, { value, timestamp: now });
  return value;
};
