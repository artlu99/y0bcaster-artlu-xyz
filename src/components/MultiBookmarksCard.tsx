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
    if (isAuthenticated && fid) {
      const req: DecentBookmarksRequest = { fid }
      fetchData(req)
    } else {
      setData(undefined)
    }
  }, [fid, isAuthenticated])

  const increment = () => setN((n) => n + 1)
  const decrement = () => setN((n) => n - 1)

  const maxN = data?.bookmarks.length ?? 0
  const url = userCastUrl({ isAuthenticated, data, n })

  return (
    <>
      <div className="container mx-auto flex justify-center">
        <div className="card bg-base-100 w-96 border-base-300 border-2 ">
          <figure>
            <div className="artboard phone-5 overflow-auto">
              <EmbeddedCast url={url} />
            </div>
          </figure>
          {maxN > 1 ? (
            <div className="card-body card-compact">
              <div className="card-actions justify-center">
                {maxN > 2 ? (
                  <a
                    className="btn btn-circle btn-sm"
                    disabled={n === 1}
                    onClick={() => setN(1)}
                  >
                    ❮❮
                  </a>
                ) : null}
                <a
                  className="btn btn-circle btn-sm"
                  disabled={n === 1}
                  onClick={decrement}
                >
                  ❮
                </a>
                <button className="btn btn-sm">
                  {n} of {maxN}
                </button>
                <a
                  className="btn btn-circle btn-sm"
                  disabled={n === maxN}
                  onClick={increment}
                >
                  ❯
                </a>
                {maxN > 2 ? (
                  <a
                    className="btn btn-circle btn-sm"
                    disabled={n === maxN}
                    onClick={() => setN(maxN)}
                  >
                    ❯❯
                  </a>
                ) : null}
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </>
  )
}
