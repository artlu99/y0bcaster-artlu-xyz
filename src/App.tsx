import { Blurb } from 'components/Blurb'
import { BottomNavBar } from 'components/BottomNavBar'
import { DesktopClients } from 'components/DesktopClients'
import { MobileClients } from 'components/MobileClients'
import { useState } from 'preact/hooks'

export default function () {
  const [isMobile, setIsMobile] = useState(false)

  return (
    <>
      <div className="container mx-auto max-w-prose p-10 prose">
        <Blurb />
        {isMobile ? <MobileClients /> : <DesktopClients />}
      </div>
      <BottomNavBar isMobile={isMobile} setIsMobile={setIsMobile} />
    </>
  )
}
