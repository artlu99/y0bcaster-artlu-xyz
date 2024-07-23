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
        <a className="link link-hover" href={warpcastDesktopUrl()}>
          Warpcast
        </a>
      </p>
      <p>
        <a className="link link-hover" href={supercastUrl()}>
          supercast
        </a>
      </p>
      <p>
        <a className="link link-hover" href={herocastUrl()}>
          Herocast
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
