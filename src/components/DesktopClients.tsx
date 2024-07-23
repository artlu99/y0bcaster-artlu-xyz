import {
  herocastUrl,
  liteClientUrl,
  supercastUrl,
  warpcastDesktopUrl,
} from 'helpers/clientLinks'

export const DesktopClients = () => {
  return (
    <>
      <p>
        <a href={warpcastDesktopUrl()}>Warpcast</a>
      </p>
      <p>
        <a href={supercastUrl()}>supercast</a>
      </p>
      <p>
        <a href={herocastUrl()}>Herocast</a>
      </p>
      <p>
        <a href={liteClientUrl()}>BCBHShow Lite Client 🌟</a>
      </p>
    </>
  )
}
