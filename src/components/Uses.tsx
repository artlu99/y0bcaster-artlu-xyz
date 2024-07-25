export const Uses = () => {
  return (
    <>
      <div className="container mx-auto max-w-prose p-10 prose">
        <h1 className="text-3xl font-bold">/uses</h1>
        <p>This is a list of the technologies used to build this site.</p>
        <ul>
          <li>
            Vite + TypeScript + Preact + TailwindCSS + DaisyUI + Frontend Starter by{' '}
            <a
              href="https://warpcast.com/farcasteradmin.eth"
              alt=""
              target="_blank"
              rel="noreferrer"
            >
              @farcasteradmin.eth
            </a>
          </li>
          <li>Farcaster AuthKit</li>
          <li>Wouter</li>
          <li>Zustand</li>
          <li>RemixIcons</li>
          <li>
            react-farcaster-embed by{' '}
            <a
              href="https://warpcast.com/pugson"
              alt=""
              target="_blank"
              rel="noreferrer"
            >
              @pugson
            </a>
          </li>
          <li>Cloudflare Pages</li>
        </ul>
      </div>
    </>
  )
}
