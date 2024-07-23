import { DesktopClients } from 'components/DesktopClients'
import { MobileClients } from 'components/MobileClients'
import { SignatureImage } from 'components/SignatureImage'
import { UserBar } from 'components/UserBar'

import { useState } from 'preact/hooks'

export default function () {
  const [isMobile, setIsMobile] = useState(false)

  return (
    <>
      <UserBar isMobile={isMobile} setIsMobile={setIsMobile} />
      <div className="container mx-auto max-w-prose p-10 prose">
        {isMobile ? <MobileClients /> : <DesktopClients />}
      </div>
      <SignatureImage />
    </>
  )
}
