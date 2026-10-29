# Sumit Sharma — quiet portfolio

Next.js 14, TypeScript and Tailwind, with an editorial portfolio layer shared across Home, Work, About, Writing and Craft. Run `npm ci`, `npm run dev`, or `npm run build`.

## Design

Inter Variable and Manrope (small labels and dates) are bundled locally; Noto Sans Devanagari preserves Hindi shaping. A small rotating greeting reserves its layout and becomes static with reduced motion. The warm paper palette has a pure-black dark variant. Colour comes from authentic inline product/tool marks and real screenshots.

Every page sits in a framed 768px column on a dot-grid canvas, with crosshair marks where section rules meet the rails. The footer signature writes itself as you scroll to it. Press `I` (or the header button) for inspect mode: column guides, tinted gutters, and a live label showing any element's size, padding, type specs and colour.

Home is a hero followed by numbered sections. Glyph, Glyph-Skill, Fedup Studio and Musiclb are expandable rows with screenshots. Other products, early builds and planned work live on Projects. Product and personal-profile links reveal upright previews on hover/focus; separate touch controls preserve the destination link. Work has search and native screenshot disclosures. Craft keeps the wider tool inventory behind a disclosure. Existing writing and the Glyph project page remain available.

## Content boundaries

- Glyph is described as live and paid, based on the owner's supplied copy.
- Proofline is an early build. Its real icon is reused; the portfolio links to an introduction rather than an unverified public app URL.
- Revenue attribution is explicitly planned, not a released product.
- The design article is labelled Draft. The unavailable original nine takes have not been reconstructed as approved quotations.
- LinkedIn is omitted because the repository did not supply a verified address.
- Email copying reports success only after the clipboard write resolves.

Asset provenance lives in `public/brands/SOURCES.md`, `public/previews/SOURCES.md`, and `public/logos/SOURCES.md`. Font licenses live with the fonts.

## Review artifact

After a production build, `python scripts/export-quiet-preview.py /absolute/path/Sumit-Portfolio-Live.html` produces a single offline HTML review file containing the rendered routes, fonts and assets. This adapter provides review interactions without publishing the site or enabling the newsletter.

Glyph-Skill has a front-page description, real site icon and explicit repository link. Its star count is a checked snapshot (25 October 2026), with the date in the link title. Refresh `src/data/glyph-skill.json` after rechecking GitHub; it is not presented as a live counter.
