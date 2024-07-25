import { useEffect } from 'preact/hooks'
import { isMobile } from 'react-device-detect'
import { Route, Switch } from 'wouter'

import { AuthKitProvider } from '@farcaster/auth-kit'
import '@farcaster/auth-kit/styles.css'

import { Footer } from 'components/Footer'
import { Main } from 'components/Main'
import { UserBar } from 'components/UserBar'
import { Uses } from 'components/Uses'
import { useStateStore } from 'helpers/stores/zustand'

const config = {
  rpcUrl: import.meta.env['VITE_OPTIMISM_RPC_URL'] ?? '',
  domain: 'y0bcaster.artlu.xyz',
  siweUri: 'https://y0bcaster.artlu.xyz',
}

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
