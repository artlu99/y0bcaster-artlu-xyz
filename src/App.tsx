import { useEffect, useState } from 'preact/hooks'
import { isMobile } from 'react-device-detect'

import { ClientsGrid } from 'components/ClientsGrid'
import { EmbeddedCast } from 'components/EmbeddedCast'
import { UserBar } from 'components/UserBar'
import { clientsList } from 'helpers/clientLinks'
import { useStateStore } from 'helpers/stores/zustand'
import { userCastUrl } from 'helpers/userCast'

export default function () {
  const [showMobile, setShowMobile] = useState(isMobile)

  const { selected } = useStateStore()

  useEffect(() => {
    setShowMobile(isMobile)
  }, [isMobile])

  return (
    <>
      <UserBar showMobile={showMobile} setShowMobile={setShowMobile} />
      <div className="container mx-auto max-w-prose p-10 prose">
        <ClientsGrid
          gridItems={clientsList.filter(
            (c) =>
              c.type === (showMobile ? 'mobile' : 'desktop') &&
              selected.includes(c.id)
          )}
        />
      </div>
      <EmbeddedCast url={userCastUrl()} />
    </>
  )
}
