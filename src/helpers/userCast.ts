import { useProfile } from '@farcaster/auth-kit'

export const userCastUrl = () => {
  const {
    isAuthenticated,
    profile: { fid },
  } = useProfile()

  return 'https://warpcast.com/y0b/0x3e3b437b'
}
