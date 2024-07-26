import {
  RiComputerFill,
  RiComputerLine,
  RiHome2Line,
  RiSmartphoneFill,
  RiSmartphoneLine,
} from '@remixicon/react'
import { Link, useLocation } from 'wouter'

import { useProfile } from '@farcaster/auth-kit'

import { useStateStore } from 'helpers/stores/zustand'
import { SelectorModal } from './SelectorModal'

export const UserBar = () => {
  const [location] = useLocation()
  const isBaseUrl = location === '/'

  const { profile } = useProfile()

  const { showMobile, setShowMobile } = useStateStore()

  const username = profile?.username || import.meta.env['VITE_DEFAULT_USERNAME']
  const pfpUrl = profile?.pfpUrl || import.meta.env['VITE_DEFAULT_PFPURL']

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
        {isBaseUrl ? (
          <div role="button" className="btn btn-ghost btn-circle avatar mx-1">
            <div className="w-24 rounded-full">
              <a
                href={`https://seemore.tv/free/fc/${username}`}
                alt="profile"
                target="_blank"
                rel="noreferrer"
              >
                <img src={pfpUrl} alt={`@${username}`} />
              </a>
            </div>
          </div>
        ) : (
          <Link className="link link-hover" href="/">
            <div className="tooltip" data-tip="Home">
              <RiHome2Line />
            </div>
          </Link>
        )}
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
