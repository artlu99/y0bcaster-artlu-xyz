import { useEffect, useState } from 'preact/hooks'
import { isMobile } from 'react-device-detect'

import { ClientsGrid } from 'components/ClientsGrid'
import { SignatureImage } from 'components/SignatureImage'
import { UserBar } from 'components/UserBar'
import { desktopClients, mobileClients } from 'helpers/clientLinks'

export default function () {
  const [showMobile, setShowMobile] = useState(isMobile)

  useEffect(() => {
    setShowMobile(isMobile)
  }, [isMobile])

  return (
    <>
      <UserBar showMobile={showMobile} setShowMobile={setShowMobile} />
      <div className="container mx-auto max-w-prose p-10 prose">
        <ClientsGrid gridItems={showMobile ? mobileClients : desktopClients} />
      </div>
      <SignatureImage />
    </>
  )
}
