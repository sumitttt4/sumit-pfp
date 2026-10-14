"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun, Moon, ArrowUp } from "lucide-react";
import PaperAccent from "@/components/ui/PaperAccent";
import BrandLogo from "@/components/ui/BrandLogo";
import { profile } from "@/data/profile";
import { PortfolioButton, PortfolioControlsProvider } from "@/components/ui/PortfolioControls";

export default function MinimalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const path = usePathname();
  const { resolvedTheme, setTheme } = useTheme();
  const [pointerTheme, setPointerTheme] = useState(false);
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
    // Every visit starts with the original design. Ignore old playground preferences.
    delete document.documentElement.dataset.accent;
    delete document.documentElement.dataset.pattern;
    delete document.documentElement.dataset.typeface;
  }, []);
  if (path.startsWith("/keystatic")) return <>{children}</>;
  const links = [
    { label: "Work", href: "/projects" },
    { label: "About", href: "/about" },
    { label: "Writing", href: "/blog" },
  ];
  return (
    <PortfolioControlsProvider><div className="site-shell">
      <PaperAccent accent="default" />
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <header className="site-header">
        <Link className="site-name" href="/" aria-label="Sumit Sharma home">
          <span>Sumit Sharma</span>
        </Link>
        <nav aria-label="Main navigation">
          {links.map((link) => (
            <Link
              href={link.href}
              key={link.href}
              aria-current={path.startsWith(link.href) ? "page" : undefined}
            >
              {link.label}
            </Link>
          ))}
          <a className="icon-button header-github" href={profile.github} target="_blank" rel="noreferrer" aria-label="Sumit Sharma on GitHub">
            <BrandLogo name="github" size={17} />
          </a>
          <PortfolioButton
            variant="secondary"
            shape="circle"
            disabled={!mounted}
            data-pointer={pointerTheme}
            data-theme={mounted && resolvedTheme === "dark" ? "dark" : "light"}
            onPointerDown={() => setPointerTheme(true)}
            onKeyDown={() => setPointerTheme(false)}
            className="icon-button theme-toggle"
            type="button"
            onClick={() =>
              setTheme(resolvedTheme === "dark" ? "light" : "dark")
            }
            aria-label={
              mounted && resolvedTheme === "dark"
                ? "Switch to light theme"
                : "Switch to dark theme"
            }
          >
            <span className="theme-icon theme-icon-sun" aria-hidden="true"><Sun size={17} /></span>
            <span className="theme-icon theme-icon-moon" aria-hidden="true"><Moon size={17} /></span>
          </PortfolioButton>
        </nav>
      </header>
      <main id="main" tabIndex={-1}>
        {children}
      </main>
      <footer className="site-footer">
        <div className="footer-signoff">
          <Link href="/" className="footer-wordmark" aria-label="Sumit Sharma home">sumit<span aria-hidden="true">✳</span></Link>
          <a href="#main" className="footer-back-top">Back to top <ArrowUp size={14} aria-hidden="true" /></a>
        </div>
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Sumit Sharma<span>{profile.location}</span></p>
          <nav aria-label="Footer links">
            <a href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
            <a href={profile.twitter} target="_blank" rel="noreferrer">X</a>
            <a href="https://github.com/sumitttt4/sumit-pfp" target="_blank" rel="noreferrer">Source</a>
          </nav>
        </div>
      </footer>
    </div></PortfolioControlsProvider>
  );
}
