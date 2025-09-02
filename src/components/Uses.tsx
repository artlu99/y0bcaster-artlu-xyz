export const Uses = () => {
  return (
    <>
      <div className="container mx-auto max-w-prose p-10 prose">
        <h1 className="text-3xl font-bold">/uses</h1>
        <p>This is a list of the technologies used to build this site.</p>
        <ul>
          <li>
            <a
              href="https://github.com/Borodutch/frontend-starter"
              title="frontend-starter"
              target="_blank"
              rel="noreferrer"
            >
              Frontend Starter
            </a>{" "}
            by{" "}
            <a
              href="https://farcaster.xyz/farcasteradmin.eth"
              title="farcasteradmin.eth"
              target="_blank"
              rel="noreferrer"
            >
              borodutch
            </a>
            : Vite + TypeScript + Preact + TailwindCSS + DaisyUI
          </li>
          <li>
            <a
              href="https://github.com/pugson/react-farcaster-embed"
              title="react-farcaster-embed"
              target={"_blank"}
              rel="noreferrer"
            >
              react-farcaster-embed
            </a>{" "}
            by{" "}
            <a
              href="https://farcaster.xyz/pugson"
              title="pugson"
              target="_blank"
              rel="noreferrer"
            >
              @pugson
            </a>
          </li>
          <li>
            <a
              href="https://docs.pmnd.rs/zustand/getting-started/introduction"
              title="Zustand"
              target="_blank"
              rel="noreferrer"
            >
              Zustand
            </a>
            ,{" "}
            <a
              href="https://github.com/molefrog/wouter"
              title="Wouter"
              target="_blank"
              rel="noreferrer"
            >
              Wouter
            </a>
            , and{" "}
            <a
              href="https://remixicon.com"
              title="RemixIcons"
              target="_blank"
              rel="noreferrer"
            >
              RemixIcons
            </a>
          </li>
          <li>
            backend:{" "}
            <a
              href="https://pages.cloudflare.com"
              title="Cloudflare Pages"
              target="_blank"
              rel="noreferrer"
            >
              Cloudflare Pages
            </a>
          </li>
          <li>
            Farcaster{" "}
            <a
              href="http://docs.farcaster.xyz/auth-kit/"
              title="AuthKit"
              target="_blank"
              rel="noreferrer"
            >
              AuthKit
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};
