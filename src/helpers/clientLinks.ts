export interface ClientGridItemProps {
  id: string
  url: string
  pfpUrl: string
}

export const desktopClients: ClientGridItemProps[] = [
  {
    id: 'warpcast',
    url: 'https://warpcast.com/',
    pfpUrl: 'https://i.imgur.com/3d6fFAI.png',
  },
  {
    id: 'supercast',
    url: 'https://supercast.xyz/',
    pfpUrl: 'https://www.supercast.xyz/supercast-logo-black.png',
  },
  {
    id: 'herocast',
    url: 'https://app.herocast.xyz/feeds',
    pfpUrl:
      'https://imagedelivery.net/BXluQx4ige9GuW0Ia56BHw/41ca8e4a-6129-40be-de09-c93fbfbc6400/original',
  },
  {
    id: 'BCBHShow Lite Client 🌟',
    url: 'https://client-bcbhshow.artlu.xyz/',
    pfpUrl:
      'https://imagedelivery.net/BXluQx4ige9GuW0Ia56BHw/9d483fd3-b92b-4bcb-c8f0-95791501d500/original',
  },
]

export const mobileClients: ClientGridItemProps[] = [
  {
    id: 'Warpcast',
    url: 'farcaster://',
    pfpUrl: 'https://i.imgur.com/3d6fFAI.png',
  },
  {
    id: 'Recaster',
    url: 'recaster://',
    pfpUrl:
      'https://imagedelivery.net/BXluQx4ige9GuW0Ia56BHw/2b83f727-02be-4ff2-c743-ccc5e0390500/original',
  },
  {
    id: 'far.quest',
    url: 'farquest://',
    pfpUrl: 'https://i.imgur.com/ZgW9WB7.jpg',
  },
  {
    id: 'BCBHShow Lite Client 🌟',
    url: 'https://client-bcbhshow.artlu.xyz/',
    pfpUrl:
      'https://imagedelivery.net/BXluQx4ige9GuW0Ia56BHw/9d483fd3-b92b-4bcb-c8f0-95791501d500/original',
  },
]
