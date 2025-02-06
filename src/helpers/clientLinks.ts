export interface ClientGridItemProps {
  id: number;
  title: string;
  url: string;
  pfpUrl: string;
  type: "desktop" | "mobile";
}

export const clientsList: ClientGridItemProps[] = [
  {
    id: 0,
    title: "warpcast",
    url: "https://warpcast.com/",
    pfpUrl: "https://i.imgur.com/3d6fFAI.png",
    type: "desktop",
  },
  {
    id: 4,
    title: "supercast",
    url: "https://supercast.xyz/",
    pfpUrl: "https://www.supercast.xyz/supercast-logo-black.png",
    type: "desktop",
  },
  {
    id: 3,
    title: "herocast",
    url: "https://app.herocast.xyz/feeds",
    pfpUrl:
      "https://imagedelivery.net/BXluQx4ige9GuW0Ia56BHw/41ca8e4a-6129-40be-de09-c93fbfbc6400/original",
    type: "desktop",
  },
  {
    id: 6,
    title: "BCBHShow Lite Client 🌟",
    url: "https://client-bcbhshow.artlu.xyz/",
    pfpUrl:
      "https://imagedelivery.net/BXluQx4ige9GuW0Ia56BHw/9d483fd3-b92b-4bcb-c8f0-95791501d500/original",
    type: "desktop",
  },
  {
    id: 1,
    title: "Warpcast",
    url: "farcaster://",
    pfpUrl: "https://i.imgur.com/3d6fFAI.png",
    type: "mobile",
  },
  {
    id: 5,
    title: "Recaster",
    url: "recaster://",
    pfpUrl:
      "https://imagedelivery.net/BXluQx4ige9GuW0Ia56BHw/2b83f727-02be-4ff2-c743-ccc5e0390500/original",
    type: "mobile",
  },
  {
    id: 2,
    title: "far.quest",
    url: "farquest://",
    pfpUrl: "https://i.imgur.com/ZgW9WB7.jpg",
    type: "mobile",
  },
  {
    id: 7,
    title: "BCBHShow Lite Client 🌟",
    url: "https://client-bcbhshow.artlu.xyz/",
    pfpUrl:
      "https://imagedelivery.net/BXluQx4ige9GuW0Ia56BHw/9d483fd3-b92b-4bcb-c8f0-95791501d500/original",
    type: "mobile",
  },
  {
    id: 8,
    title: "Wildcard",
    url: "https://app.wildcard.lol",
    pfpUrl:
      "https://imagedelivery.net/BXluQx4ige9GuW0Ia56BHw/68657e2d-ded8-4bd2-bca2-03779668ac00/original",
    type: "desktop",
  },
  {
    id: 10,
    title: "Firefly",
    url: "https://firefly.mask.social",
    pfpUrl: "https://i.imgur.com/NfzIpwa.jpg",
    type: "desktop",
  },
  {
    id: 11,
    title: "Firefly",
    url: "firefly://",
    pfpUrl: "https://i.imgur.com/NfzIpwa.jpg",
    type: "mobile",
  },
  {
    id: 12,
    title: "degencast",
    url: "https://dev.degencast.wtf/",
    pfpUrl: "https://i.imgur.com/qLrLl4y.png",
    type: "desktop",
  },
];
