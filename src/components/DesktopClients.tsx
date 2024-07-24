import {
  herocastUrl,
  liteClientUrl,
  supercastUrl,
  warpcastDesktopUrl,
} from 'helpers/clientLinks'

const renderLink = (text: string, url: string) => (
  <p>
    <a className="link link-hover" href={url} target="_blank" rel="noreferrer">
      {text}
    </a>
  </p>
)
export const DesktopClients = () => {
  return (
    <>
      {renderLink('Warpcast', warpcastDesktopUrl())}
      {renderLink('supercast', supercastUrl())}
      {renderLink('Herocast', herocastUrl())}
      {renderLink('BCBHShow Lite Client 🌟', liteClientUrl())}
    </>
  )
}
