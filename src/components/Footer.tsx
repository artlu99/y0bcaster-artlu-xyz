import { SignInButton, useProfile, useSignIn } from "@farcaster/auth-kit";
import { RiGithubLine, RiTelegramLine, RiTwitterXLine } from "@remixicon/react";
import { useEffect, useState } from "react";
import { Link, useLocation } from "wouter";
import { getLatestCommit } from "../lib/github";

export const Footer = () => {
  const [location] = useLocation();
  const isBaseUrl = location === "/";
  const [lastUpdated, setLastUpdated] = useState<string>();

  const { isAuthenticated } = useProfile();
  const { signOut } = useSignIn({});

  useEffect(() => {
    const fetchLastUpdate = async () => {
      try {
        setLastUpdated(await getLatestCommit("artlu99", "y0bcaster-artlu-xyz"));
      } catch (error) {
        console.error("Error fetching last update:", error);
      }
    };

    fetchLastUpdate();
  }, []);

  return (
    <>
      <footer className="footer bg-base-200 text-base-content p-10 md:mt-2">
        <nav>
          {isBaseUrl ? (
            <>
              <h6 className="footer-title">Tech</h6>
              <a
                className="link link-hover"
                href="https://github.com/artlu99/decent-bookmarks"
                title="Decent Bookmarks"
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
            title="@artlu"
            target="_blank"
            rel="noreferrer"
          >
            <p>
              by @artlu99
              <br />
              july 2024
              {lastUpdated && <span className="italic"> · last updated {lastUpdated}</span>}
            </p>
          </a>
        </aside>
        <nav className="md:place-self-center md:justify-self-end">
          <div className="grid grid-flow-col gap-4">
            <a
              href="https://github.com/artlu99/y0bcaster-artlu-xyz"
              title="GH:artlu99"
              target="_blank"
              rel="noreferrer"
            >
              <RiGithubLine />
            </a>
          </div>
        </nav>
      </footer>
    </>
  );
};
