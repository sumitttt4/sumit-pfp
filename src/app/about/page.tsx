import type { Metadata } from "next";
import ContactSection from "@/components/ui/ContactSection";
import ExperienceSection from "@/components/ui/ExperienceSection";

export const metadata: Metadata = {
  title: "About — Sumit Sharma",
  alternates: { canonical: "/about" },
};

export default function About() {
  return (
    <div className="page-content">
      <div className="page-heading">
        <p className="eyebrow">A little about me</p>
        <h1>
          Curious by default.
          <br />
          <span>Hands-on by choice.</span>
        </h1>
      </div>
      <div className="about-prose">
        <p>
          I’m Sumit Sharma, a frontend engineer based in Gurgaon. I work across
          design and engineering to make products feel simple, even when the
          problems behind them aren’t.
        </p>
        <p>
          At Craon, I’m working on an AI video editor: the mobile experience,
          subtitles, timeline interactions, and the performance details that
          make editing feel responsive.
        </p>
        <p>
          Independently, I’m building{" "}
          <a href="https://glyph.software" target="_blank" rel="noreferrer">
            Glyph
          </a>
          , a brand identity generator for builders. Taking a product from the
          first idea to paying customers has taught me to care about the entire
          experience, beyond the interface.
        </p>
        <p>
          I like thoughtful typography, useful interactions, and finding the
          small detail that makes something click. I’m still learning, still
          experimenting, and happiest when I’m building.
        </p>
        <p>
          Away from the screen, I’m usually watching films. You can find my
          movie diary on{" "}
          <a
            href="https://letterboxd.com/Sumit232/"
            target="_blank"
            rel="noreferrer"
          >
            Letterboxd
          </a>
          .
        </p>
      </div>
      <ExperienceSection />
      <ContactSection />
    </div>
  );
}
