import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
export const metadata: Metadata = { title: "Glyph — Sumit Sharma", alternates: { canonical: "/projects/glyph" } };
export default function GlyphProject() { return (
<article className="page-content glyph-project">
<Link className="text-link" href="/projects">
<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-left" aria-hidden="true">
<path d="m12 19-7-7 7-7">
</path>
<path d="M19 12H5">
</path>
</svg> All projects</Link>
<header className="page-heading">
<p className="eyebrow">Independent product · Design &amp; development</p>
<h1>Glyph: an idea becomes a brand system.</h1>
<p>I designed, built, and launched Glyph independently, from the identity generation experience to payments and the public launch.</p>
<div className="project-footnote">
<a className="text-link" href="https://glyph.software" target="_blank" rel="noreferrer">Try Glyph <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-up-right" aria-hidden="true">
<path d="M7 7h10v10">
</path>
<path d="M7 17 17 7">
</path>
</svg>
</a>
<a className="text-link" href="https://x.com/sumitthq/status/2027032028584276128" target="_blank" rel="noreferrer">Watch the launch demo <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-up-right" aria-hidden="true">
<path d="M7 7h10v10">
</path>
<path d="M7 17 17 7">
</path>
</svg>
</a>
<Link className="text-link" href="/blog/building-glyph">Building Glyph <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-up-right" aria-hidden="true">
<path d="M7 7h10v10">
</path>
<path d="M7 17 17 7">
</path>
</svg>
</Link>
</div>
</header>
<figure className="project-visual">
<div className="project-image-frame">
<Image alt="An earlier Glyph interface: a product idea input, the brand generation entry point, and identity previews." fill priority quality={90} sizes="(max-width: 684px) calc(100vw - 40px), 620px" src="/glyph.png" />
</div>
<figcaption>An earlier product entry point, preserved in the project assets.</figcaption>
</figure>
<div className="story-prose">
<section>
<h2>The problem</h2>
<p>A logo alone doesn’t give a builder a usable brand. Colours, typography, guidelines, and the product interface need to work together. Glyph brings those decisions into one flow instead of leaving the builder to piece them together.</p>
</section>
<section>
<h2>What I contributed</h2>
<p>I built Glyph solo over a few months, shaping both the product experience and the implementation. The work covered identity generation, developer handoff, payments, and launch. <Link className="inline-link" href="/blog/building-glyph">Building Glyph</Link> covers the launch and the work that followed the first paying customers.</p>
</section>
</div>
<figure className="glyph-output">
<Image alt="Glyph brand output bringing a logo, colour palette, typography, business cards, and a website preview together in one identity." width={1599} height={1599} sizes="(max-width: 684px) calc(100vw - 40px), 620px" src="/projects/glyph-brand-output.webp" />
<figcaption>Actual Glyph output shared publicly: the identity carried across several applications.</figcaption>
</figure>
<div className="story-prose">
<section>
<h2>From brand decisions to implementation</h2>
<p>The current public product describes a flow from a product brief to an editable visual system, then to code tokens and an AI-builder handoff. The goal is to carry the same design direction into the product being built.</p>
<ol className="glyph-flow">
<li>
<h3>Describe the product</h3>
<p>Start with the idea, audience, and market position.</p>
</li>
<li>
<h3>Shape the identity</h3>
<p>Review the logo, palette, and typography. Each step can be edited, rather than accepting the first result as final.</p>
</li>
<li>
<h3>Carry it into code</h3>
<p>The public product lists Tailwind configuration, CSS variables, a typed React logo component, and a brand-specific AI-builder prompt.</p>
</li>
</ol>
</section>
<section>
<h2>Three decisions behind the product</h2>
<ol className="glyph-decisions">
<li>
<h3 className="decision-heading">Let builders edit the identity in stages</h3>
<p>The current flow lets a builder change the logo concept, palette, and font pairing before handoff. Light and dark previews show how those choices fit together. The aim is to give someone control over a connected identity.</p>
<p className="decision-tradeoff">
<strong>The tradeoff:</strong> More steps ask more of the user. Each stage has to make its effect clear, and a change has to stay consistent through the preview and export.</p>
</li>
<li>
<h3 className="decision-heading">Build the logo as SVG and carry the brand into code</h3>
<p>My early approach used grid-based SVG logos with React and Tailwind exports. A builder can take the identity into their interface, with scalable assets and reusable colour and typography values.</p>
<p className="decision-tradeoff">
<strong>The tradeoff:</strong> A grid-based generator constrains the shapes it can produce. Code exports also serve technical builders better than people who only need brand assets. Whether those exports justify more development is still an open question.</p>
</li>
<li>
<h3 className="decision-heading">Treat paid access as part of the experience</h3>
<p>A monthly subscriber paid but didn’t receive the right account access. I upgraded the account manually and provided an extra month. The generation experience only matters if a paying customer can reach it.</p>
<p className="decision-tradeoff">
<strong>The lesson:</strong> The manual fix helped that customer, but it isn’t a scalable access flow. Payment success, account entitlement, and recovery need to agree. This is a real incident, not a claim that every failure path is now solved.</p>
</li>
</ol>
</section>
</div>
<div className="project-footnote glyph-project-links">
<Link className="text-link" href="/blog/building-glyph">Read Building Glyph <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-up-right" aria-hidden="true">
<path d="M7 7h10v10">
</path>
<path d="M7 17 17 7">
</path>
</svg>
</Link>
<a className="text-link" href="https://x.com/sumitthq/status/2027032028584276128" target="_blank" rel="noreferrer">Watch the launch demo <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-up-right" aria-hidden="true">
<path d="M7 7h10v10">
</path>
<path d="M7 17 17 7">
</path>
</svg>
</a>
</div>
</article>
); }
