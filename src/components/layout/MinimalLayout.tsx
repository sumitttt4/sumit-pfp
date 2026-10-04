"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun, Moon, ArrowUpRight } from "lucide-react";
import { profile } from "@/data/profile";

export default function MinimalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const path = usePathname();
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (path.startsWith("/keystatic")) return <>{children}</>;
  const links = [
    { label: "Work", href: "/projects" },
    { label: "About", href: "/about" },
    { label: "Writing", href: "/blog" },
  ];
  return (
    <div className="site-shell">
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <header className="site-header">
        <Link className="site-name" href="/" aria-label="Sumit Sharma home">
          <span className="name-mark" aria-hidden="true">
            s.
          </span>
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
          <button
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
            {mounted && resolvedTheme === "dark" ? (
              <Sun size={17} />
            ) : (
              <Moon size={17} />
            )}
          </button>
        </nav>
      </header>
      <main id="main" tabIndex={-1}>
        {children}
      </main>
      <footer className="site-footer">
        <div>
          <span>Sumit Sharma</span>
          <p>Thoughtfully designed. Always a work in progress.</p>
        </div>
        <a
          href={profile.github}
          target="_blank"
          rel="noreferrer"
          className="text-link"
        >
          Find me on GitHub <ArrowUpRight size={14} aria-hidden="true" />
        </a>
        <span className="copyright">© {new Date().getFullYear()}</span>
      </footer>
    </div>
  );
}
