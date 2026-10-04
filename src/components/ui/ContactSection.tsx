import { ArrowUpRight } from "lucide-react";
import BrandLogo from "./BrandLogo";
import { profile } from "@/data/profile";

export default function ContactSection() {
  const links = [
    {
      label: "Email",
      value: profile.email,
      href: `mailto:${profile.email}`,
      logo: "gmail",
    },
    { label: "X", value: "@sumitdotme", href: profile.twitter, logo: "x" },
    {
      label: "Cal.com",
      value: "Book a 15-minute call",
      href: profile.calendar,
      logo: "cal",
    },
    {
      label: "GitHub",
      value: "sumitttt4",
      href: profile.github,
      logo: "github",
    },
  ];
  return (
    <section id="contact" className="section contact-section">
      <div className="section-heading">
        <h2>Let’s talk.</h2>
        <span>Always up for a good conversation</span>
      </div>
      <p className="section-intro">
        Have a product in mind, a collaboration, or something interesting to
        share? I’d love to hear about it.
      </p>
      <div className="contact-links">
        {links.map((link) => (
          <a
            key={link.label}
            className="contact-link"
            href={link.href}
            {...(link.logo !== "gmail"
              ? { target: "_blank", rel: "noreferrer" }
              : {})}
          >
            <BrandLogo name={link.logo} size={20} />
            <span>
              <span className="contact-label">{link.label}</span>
              <span className="contact-value">{link.value}</span>
            </span>
            <ArrowUpRight aria-hidden="true" size={15} />
          </a>
        ))}
      </div>
      <p className="contact-note">
        {profile.location} <span aria-hidden="true">·</span> Usually replies
        within 24 hours
      </p>
    </section>
  );
}
