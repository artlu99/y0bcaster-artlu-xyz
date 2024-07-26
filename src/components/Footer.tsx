import { Link, useLocation } from 'wouter'

import { SignInButton, useProfile, useSignIn } from '@farcaster/auth-kit'

import { RiGithubLine, RiTelegramLine, RiTwitterXLine } from '@remixicon/react'

export const Footer = () => {
  const [location] = useLocation()
  const isBaseUrl = location === '/'

  const { isAuthenticated } = useProfile()
  const { signOut } = useSignIn({})

  return (
    <>
      <footer className="footer bg-base-200 text-base-content p-10 md:mt-2">
        <nav>
          {isBaseUrl ? (
            <>
              <h6 className="footer-title">Tech</h6>
              <a
                className="link link-hover"
                href="https://warpcast.com/artlu/0x732f2bd1"
                alt="Decent Bookmarks"
                target="_blank"
                rel="noreferrer"
              >
                🔖 Decent Bookmarks
              </a>

              <Link className="link link-hover" href="/uses">
                /uses
              </Link>
            </>
          ) : null}
        </nav>
        <nav></nav>
        <nav>
          {isBaseUrl ? (
            <>
              {!isAuthenticated ? (
                <>
                  <h6 className="footer-title">Sign In to Personalize</h6>
                  <SignInButton hideSignOut={true} />
                </>
              ) : (
                <button className="btn btn-neutral" onClick={() => signOut()}>
                  Sign out
                </button>
              )}
            </>
          ) : null}
        </nav>
      </footer>
      <footer className="footer bg-base-200 text-base-content border-base-300 border-t px-10 py-4">
        <aside className="grid-flow-col items-center">
          <div className="avatar">
            <div className="w-8 rounded-full">
              <img
                src="https://beb-public.s3.us-west-1.amazonaws.com/purple.jpg"
                alt="@artlu"
              />
            </div>
          </div>
          <a
            href="https://far.quest/artlu"
            alt="@artlu"
            target="_blank"
            rel="noreferrer"
          >
            <p>
              made by @artlu99
              <br />
              July 2024
            </p>
          </a>
        </aside>
        <nav className="md:place-self-center md:justify-self-end">
          <div className="grid grid-flow-col gap-4">
            <a
              href="https://github.com/artlu99"
              alt="GH:artlu99"
              target="_blank"
              rel="noreferrer"
            >
              <RiGithubLine />
            </a>
            <a
              href="https://t.me/artlu99"
              alt="TG:@artlu99"
              target="_blank"
              rel="noreferrer"
            >
              <RiTelegramLine />
            </a>
            <a
              href="https://x.com/artlu99"
              alt="@artlu99"
              target="_blank"
              rel="noreferrer"
            >
              <RiTwitterXLine size={22} />
            </a>
          </div>
        </nav>
      </footer>
    </>
  )
}
