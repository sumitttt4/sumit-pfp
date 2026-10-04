"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Check, Copy } from "lucide-react";
import BrandLogo from "./BrandLogo";
import { profile } from "@/data/profile";

export default function ContactSection() {
  const [copied, setCopied] = useState(false);
  const [status, setStatus] = useState("");
  const [pointerCopy, setPointerCopy] = useState(false);
  const copyTimer = useRef<ReturnType<typeof setTimeout>>();

  useEffect(() => () => {
    clearTimeout(copyTimer.current);
  }, []);

  async function copyEmail() {
    clearTimeout(copyTimer.current);
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setStatus("Email copied");
      copyTimer.current = setTimeout(() => {
        setCopied(false);
        setStatus("");
      }, 2500);
    } catch {
      setCopied(false);
      setStatus("Couldn’t copy. Select the email address above.");
    }
  }

  const links = [
    { label: profile.twitterHandle, href: profile.twitter, logo: "x" },
    { label: "GitHub", href: profile.github, logo: "github" },
    { label: "Book a 15m call", href: profile.calendar, logo: "cal" },
  ];

  return (
    <section id="contact" className="section contact-section">
      <div className="section-heading"><h2>Let’s talk</h2></div>
      <div className="contact-panel">
        <div className="contact-top">
          <div>
            <h3>Let’s build something good.</h3>
            <p>A project, an opportunity, or a hello.<br />I’d love to hear from you.</p>
          </div>
        </div>
        <div className="email-actions">
          <a href={`mailto:${profile.email}`} className="email-link">
            <BrandLogo name="gmail" size={18} />
            <span>{profile.email}</span>
            <ArrowUpRight size={16} aria-hidden="true" />
          </a>
          <button
            type="button"
            className="copy-email"
            data-copied={copied}
            data-pointer={pointerCopy}
            onPointerDown={() => setPointerCopy(true)}
            onKeyDown={() => setPointerCopy(false)}
            onClick={copyEmail}
            aria-label={copied ? "Email copied" : "Copy email address"}
          >
            <Copy size={16} className="copy-default" aria-hidden="true" />
            <Check size={18} className="copy-success" aria-hidden="true" />
          </button>
        </div>
        <p className="copy-status" role="status">{status}</p>
        <div className="contact-socials">
          {links.map((link) => (
            <a key={link.logo} href={link.href} target="_blank" rel="noreferrer">
              <BrandLogo name={link.logo} size={16} />
              <span>{link.label}</span>
              <ArrowUpRight size={12} aria-hidden="true" />
            </a>
          ))}
        </div>
      </div>
      <p className="contact-note">{profile.location} <span aria-hidden="true">·</span> Usually replies within 24 hours</p>
    </section>
  );
}
