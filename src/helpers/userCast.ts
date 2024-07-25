import { useProfile } from '@farcaster/auth-kit'
import { useEffect, useState } from 'preact/hooks'

interface DecentBookmark {
  timestamp: number
  fid: number
  username: string
  hash: string
  tags?: string[]
}

interface DecentBookmarksRequest {
  fid: number
}

interface DecentBookmarksResponse {
  bookmarks: DecentBookmark[]
}

export const userCastUrl = () => {
  const [data, setData] = useState<DecentBookmarksResponse | undefined>(
    undefined
  )

  const {
    isAuthenticated,
    profile: { fid },
  } = useProfile()

  useEffect(() => {
    async function fetchData(req: DecentBookmarksRequest) {
      const response = await fetch('/getDecentBookmarks', {
        method: 'POST',
        body: JSON.stringify(req),
      })
      setData((await response.json()) as DecentBookmarksResponse)
    }
    if (fid) {
      const req: DecentBookmarksRequest = { fid }
      fetchData(req)
    }
  }, [fid])

  if (!data || data.bookmarks.length === 0)
    return 'https://warpcast.com/y0b/0x3e3b437b'

  const latestBookmark = data.bookmarks.sort(
    (a, b) => b.timestamp - a.timestamp
  )[0]
  const { username, hash } = latestBookmark
  return `https://warpcast.com/${username}/${hash.slice(0, 10)}`
}
