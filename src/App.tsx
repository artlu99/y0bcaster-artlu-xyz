import { useEffect, useState } from 'preact/hooks'
import { isMobile } from 'react-device-detect'

import { DesktopClients } from 'components/DesktopClients'
import { MobileClients } from 'components/MobileClients'
import { SignatureImage } from 'components/SignatureImage'
import { UserBar } from 'components/UserBar'

export default function () {
  const [showMobile, setShowMobile] = useState(isMobile)

  useEffect(() => {
    setShowMobile(isMobile)
  }, [isMobile])

  return (
    <>
      <UserBar showMobile={showMobile} setShowMobile={setShowMobile} />
      <div className="container mx-auto max-w-prose p-10 prose">
        {showMobile ? <MobileClients /> : <DesktopClients />}
      </div>
      <SignatureImage />
    </>
  )
}
