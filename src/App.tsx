import { useEffect } from 'preact/hooks'
import { isMobile } from 'react-device-detect'
import { Route, Switch } from 'wouter'

import { AuthKitProvider } from '@farcaster/auth-kit'
import '@farcaster/auth-kit/styles.css'

import { Footer } from 'components/Footer'
import { Main } from 'components/Main'
import { UserBar } from 'components/UserBar'
import { Uses } from 'components/Uses'
import { config } from 'helpers/config'
import { useStateStore } from 'helpers/stores/zustand'

export default function () {
  const { setShowMobile } = useStateStore()

  useEffect(() => {
    setShowMobile(isMobile)
  }, [isMobile])

  return (
    <AuthKitProvider config={config}>
      <UserBar />

      <Switch>
        <Route path="/" component={Main} />
        <Route path="/uses" component={Uses} />

        {/* Default route in a switch */}
        <Route>404: No such page!</Route>
      </Switch>

      <Footer />
    </AuthKitProvider>
  )
}
