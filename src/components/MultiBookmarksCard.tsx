import { useProfile } from '@farcaster/auth-kit'
import { useEffect, useState } from 'preact/hooks'

import { DecentBookmarksRequest, DecentBookmarksResponse } from 'helpers/types'
import { userCastUrl } from 'helpers/userCast'
import { EmbeddedCast } from './EmbeddedCast'

export const MultiBookmarksCard = () => {
  const [n, setN] = useState(1)
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

  const increment = () => setN((n) => n + 1)
  const decrement = () => setN((n) => n - 1)

  const maxN = data?.bookmarks.length || 10
  const url = userCastUrl({ isAuthenticated, data, n })

  return (
    <>
      <div className="container mx-auto flex justify-center">
        <div className="artboard phone-5 overflow-auto">
          {maxN ? (
            <div className="card-body card-compact">
              <div className="card-actions justify-center">
                <a
                  className="btn btn-circle"
                  disabled={n === 1}
                  onClick={() => setN(1)}
                >
                  ❮❮
                </a>
                <a
                  className="btn btn-circle"
                  disabled={n === 1}
                  onClick={decrement}
                >
                  ❮
                </a>
                <button className="btn">
                  {n} of {maxN}
                </button>
                <a
                  className="btn btn-circle"
                  disabled={n === maxN}
                  onClick={increment}
                >
                  ❯
                </a>
                <a
                  className="btn btn-circle"
                  disabled={n === maxN}
                  onClick={() => setN(maxN)}
                >
                  ❯❯
                </a>
              </div>
            </div>
          ) : null}
          <figure>
            <EmbeddedCast url={url} />
          </figure>
        </div>
      </div>
    </>
  )
}
