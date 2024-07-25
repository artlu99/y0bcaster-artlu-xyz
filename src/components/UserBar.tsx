import {
  RiComputerFill,
  RiComputerLine,
  RiSmartphoneFill,
  RiSmartphoneLine,
} from '@remixicon/react'
import { useStateStore } from 'helpers/stores/zustand'
import { SelectorModal } from './SelectorModal'

export const UserBar = () => {
  const { showMobile, setShowMobile } = useStateStore()

  const username = 'y0b'
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="tooltip tooltip-bottom mx-2" data-tip="mobile">
          <button onClick={() => setShowMobile(true)}>
            {showMobile ? <RiSmartphoneFill /> : <RiSmartphoneLine />}
          </button>
        </div>
      </div>
      <div className="navbar-center">
        <div role="button" className="btn btn-ghost btn-circle avatar mx-1">
          <div className="w-24 rounded-full">
            <a
              href={'https://seemore.tv/free/fc/y0b'}
              alt="profile"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={'https://i.imgur.com/jHTn4Qp.jpg'}
                alt={`@${username}`}
              />
            </a>
          </div>
        </div>
      </div>
      <div className="navbar-end">
        <div className="tooltip tooltip-bottom mx-5" data-tip="settings">
          <SelectorModal showMobile={showMobile} />
        </div>
        <div className="tooltip tooltip-bottom mx-5" data-tip="desktop">
          <button onClick={() => setShowMobile(false)}>
            {showMobile ? <RiComputerLine /> : <RiComputerFill />}
          </button>
        </div>
      </div>
    </div>
  )
}
