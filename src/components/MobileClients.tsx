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
        <a className="link link-hover" href={warpcastMobileUrl()}>
          Warpcast
        </a>
      </p>
      <p>
        <a className="link link-hover" href={recasterUrl()}>
          Recaster
        </a>
      </p>
      <p>
        <a className="link link-hover" href={farquestProUrl()}>
          far.quest Pro
        </a>
      </p>
      <p>
        <a className="link link-hover" href={liteClientUrl()}>
          BCBHShow Lite Client 🌟
        </a>
      </p>
    </>
  )
}
