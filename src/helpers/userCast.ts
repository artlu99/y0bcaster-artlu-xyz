import { useProfile } from '@farcaster/auth-kit'

export const userCastUrl = () => {
  const {
    isAuthenticated,
    profile: { fid },
  } = useProfile()

  if (fid === 6546) return 'https://warpcast.com/vgr/0x8ebd4325'

  return 'https://warpcast.com/y0b/0x3e3b437b'
}
