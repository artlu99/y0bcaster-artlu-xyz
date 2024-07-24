export interface ClientGridItemProps {
  text: string
  url: string
  imgUrl: string
}

export const desktopClients: ClientGridItemProps[] = [
  {
    text: 'warpcast',
    url: 'https://warpcast.com/',
    imgUrl: 'https://i.imgur.com/3d6fFAI.png',
  },
  {
    text: 'supercast',
    url: 'https://supercast.xyz/',
    imgUrl: 'https://www.supercast.xyz/supercast-logo-black.png',
  },
  {
    text: 'herocast',
    url: 'https://app.herocast.xyz/feeds',
    imgUrl:
      'https://imagedelivery.net/BXluQx4ige9GuW0Ia56BHw/41ca8e4a-6129-40be-de09-c93fbfbc6400/original',
  },
  {
    text: 'BCBHShow Lite Client 🌟',
    url: 'https://client-bcbhshow.artlu.xyz/',
    imgUrl:
      'https://imagedelivery.net/BXluQx4ige9GuW0Ia56BHw/9d483fd3-b92b-4bcb-c8f0-95791501d500/original',
  },
]

export const mobileClients: ClientGridItemProps[] = [
  {
    text: 'Warpcast',
    url: 'farcaster://',
    imgUrl: 'https://i.imgur.com/3d6fFAI.png',
  },
  {
    text: 'Recaster',
    url: 'recaster://',
    imgUrl:
      'https://imagedelivery.net/BXluQx4ige9GuW0Ia56BHw/2b83f727-02be-4ff2-c743-ccc5e0390500/original',
  },
  {
    text: 'far.quest Pro',
    url: 'farquest://',
    imgUrl: 'https://i.imgur.com/ZgW9WB7.jpg',
  },
  {
    text: 'BCBHShow Lite Client 🌟',
    url: 'https://client-bcbhshow.artlu.xyz/',
    imgUrl:
      'https://imagedelivery.net/BXluQx4ige9GuW0Ia56BHw/9d483fd3-b92b-4bcb-c8f0-95791501d500/original',
  },
]
