import {
  farquestProUrl,
  liteClientUrl,
  recasterUrl,
  warpcastMobileUrl,
} from 'helpers/clientLinks'

const renderLink = (text: string, url: string) => (
  <p>
    <a className="link link-hover" href={url}>
      {text}
    </a>
  </p>
)

export const MobileClients = () => {
  return (
    <>
      {renderLink('Warpcast', warpcastMobileUrl())}
      {renderLink('Recaster', recasterUrl())}
      {renderLink('far.quest Pro', farquestProUrl())}
      {renderLink('BCBHShow Lite Client 🌟', liteClientUrl())}
    </>
  )
}
