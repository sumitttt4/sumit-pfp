import type { Metadata } from "next";
import ContactSection from "@/components/ui/ContactSection";
import ExperienceSection from "@/components/ui/ExperienceSection";
import SpotifyNowPlaying from "@/components/ui/SpotifyNowPlaying";

export const metadata: Metadata = {
  title: "About — Sumit Sharma",
  alternates: { canonical: "/about" },
};

export default function About() {
  return (
    <div className="page-content">
      <div className="page-heading">
        <p className="eyebrow">A little about me</p>
        <h1>About me</h1>
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
      </div>
      <section className="section about-interests">
        <div className="section-heading"><h2>Away from the screen</h2></div>
        <div className="about-interest">
          <h3>Films</h3>
          <p>I keep a movie diary on{" "}
          <a
            href="https://letterboxd.com/Sumit232/"
            target="_blank"
            rel="noreferrer"
          >
            Letterboxd
          </a>
          .</p>
        </div>
        <div className="about-interest">
          <h3>Music</h3>
          <div><p>I have a soft spot for ’90s Bollywood.</p><SpotifyNowPlaying /></div>
        </div>
        <div className="about-interest">
          <h3>Learning</h3>
          <p>I’m learning Spanish, and exploring the small details of design engineering.</p>
        </div>
      </section>
      <ExperienceSection />
      <ContactSection />
    </div>
  );
}
