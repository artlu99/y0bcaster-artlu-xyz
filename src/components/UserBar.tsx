import { Dispatch, FC, SetStateAction } from 'preact/compat'

import {
  RiComputerFill,
  RiComputerLine,
  RiSmartphoneFill,
  RiSmartphoneLine,
} from '@remixicon/react'

interface UserBarProps {
  isMobile: boolean
  setIsMobile: Dispatch<SetStateAction<boolean>>
}
export const UserBar: FC<UserBarProps> = ({ isMobile, setIsMobile }) => {
  const username = 'y0b'
  return (
    <>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="tooltip mx-2" data-tip="mobile">
            <button onClick={() => setIsMobile(true)}>
              {isMobile ? <RiSmartphoneFill /> : <RiSmartphoneLine />}
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
          <div className="tooltip mx-5" data-tip="desktop">
            <button onClick={() => setIsMobile(false)}>
              {isMobile ? <RiComputerLine /> : <RiComputerFill />}
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
