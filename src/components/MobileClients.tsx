import {
  farquestProUrl,
  liteClientUrl,
  recasterUrl,
  warpcastMobileUrl,
} from 'helpers/clientLinks'

export const MobileClients = () => {
  return (
    <>
      <p>
        <a href={warpcastMobileUrl()}>Warpcast</a>
      </p>
      <p>
        <a href={recasterUrl()}>Recaster</a>
      </p>
      <p>
        <a href={farquestProUrl()}>far.quest Pro</a>
      </p>
      <p>
        <a href={liteClientUrl()}>BCBHShow Lite Client 🌟</a>
      </p>
    </>
  )
}
