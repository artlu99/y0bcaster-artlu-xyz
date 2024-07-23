import { Dispatch, FC, SetStateAction } from 'react'

import {
  RiComputerFill,
  RiComputerLine,
  RiSmartphoneFill,
  RiSmartphoneLine,
} from '@remixicon/react'

interface BottomNavBarProps {
  isMobile: boolean
  setIsMobile: Dispatch<SetStateAction<boolean>>
}
export const BottomNavBar: FC<BottomNavBarProps> = ({
  isMobile,
  setIsMobile,
}) => {
  return (
    <div className="btm-nav">
      <div className="tooltip" data-tip="mobile">
        <button onClick={() => setIsMobile(true)}>
          {isMobile ? <RiSmartphoneFill /> : <RiSmartphoneLine />}
        </button>
      </div>
      <div className="tooltip" data-tip="desktop">
        <button onClick={() => setIsMobile(false)}>
          {isMobile ? <RiComputerLine /> : <RiComputerFill />}
        </button>
      </div>
    </div>
  )
}
