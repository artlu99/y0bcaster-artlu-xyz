interface Env {
  DECENTBOOKMARKS_TOKEN: string;
}

interface Bookmark {
  fid: string;
  hash: `0x${string}`;
  username: string;
  tags?: string[];
  timestamp: number;
}

const isRequestAllowed = (request: Request) => {
  const secFetchSite = request.headers.get("sec-fetch-site");
  return secFetchSite === "same-site" || secFetchSite === "same-origin";
};

export const unauthorized = () => new Response("Unauthorized", { status: 403 });

export const onRequestPost: PagesFunction<Env> = async (context) => {
  const { request } = context;
  if (!isRequestAllowed(request)) return unauthorized();

  const js = (await request.json()) as { fid: number };
  const { fid } = js;

  const basicAuthToken = context.env.DECENTBOOKMARKS_TOKEN;

  const endpoint = `https://decent-bookmarks.artlu.xyz/?fid=${fid}`;
  const res = await fetch(endpoint, {
    headers: { Authorization: `Basic ${basicAuthToken}` },
  });
  if (!res.ok) throw new Error("Failed to fetch data");

  const bmResponse = (await res.json()) as {
    bookmarks: Bookmark[];
  };
  return new Response(JSON.stringify(bmResponse));
};
