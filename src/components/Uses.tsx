export const Uses = () => {
  return (
    <>
      <div className="container mx-auto max-w-prose p-10 prose">
        <h1 className="text-3xl font-bold">/uses</h1>
        <p>
          This is a list of the technologies I used to build this site.
        </p>
        <h2 className="text-2xl font-bold">Frontend</h2>
        <ul>
          <li>React</li>
          <li>Tailwind CSS</li>
          <li>RemixIcons</li>
          <li>Zustand</li>
          <li>React-Farcaster-Embed by @pugson</li>
        </ul>
        <h2 className="text-2xl font-bold">Backend</h2>
        <ul>
          <li>Cloudflare Workers</li>
          <li>TypeScript</li>
          <li>Vite</li>
        </ul>
      </div>
    </>
  )
}
