# Sumit Sharma — quiet portfolio

Next.js 14, TypeScript and Tailwind, with an editorial portfolio layer shared across Home, Work, About, Writing and Craft. Run `npm ci`, `npm run dev`, or `npm run build`.

## Design

Inter Variable and Manrope (small labels and dates) are bundled locally; Noto Sans Devanagari preserves Hindi shaping. A small rotating greeting reserves its layout and becomes static with reduced motion. The warm paper palette has a pure-black dark variant. Colour comes from authentic inline product/tool marks and real screenshots.

Every page sits in a framed 768px column. Sections blur in as they scroll into view, hovering a job, post or project row dims its siblings, and copying the email shows a Sonner toast. Press ⌘K / Ctrl+K (or the search button in the header) for a command menu that jumps to any page or project, copies the email, books a call or switches theme.

Home is a hero followed by numbered sections. It shows six projects (Glyph, Glyph-Skill, Glaze, Slate, Fedup Studio, File Studio) and a Show more button; Work lists every project, adding Proofline and Musiclb. Both use a list/grid toggle that is remembered per visitor. Hello, Hola and नमस्ते rotate in the greeting.

## Content boundaries

- Glyph is described as live and paid, based on the owner's supplied copy.
- Proofline is an early build. Its real icon is reused; the portfolio links to an introduction rather than an unverified public app URL.
- Revenue attribution is explicitly planned, not a released product.
- The design article is labelled Draft. The unavailable original nine takes have not been reconstructed as approved quotations.
- LinkedIn (linkedin.com/in/sumitsharma4) and the location line "India (IST, UTC+5:30)" come from the Glaze/Slate brief. No resume link is shown until a shareable resume URL is confirmed.
- Glyph's revenue ($724 all-time, $57 MRR, 3 active subscriptions) is a dated snapshot from TrustMRR (verified there with Polar) in `src/data/glyph-revenue.json`, checked 3 November 2026. Recheck trustmrr.com/startup/glyph and update the file; it is not a live feed. The older $427 figure is no longer used.
- Only the newer projects are listed; older builds are not pulled in.
- Glaze is open source (MIT) and links to solid-glass.vercel.app.
- The footer visitor count uses Abacus (abacus.jasoncameron.dev): each browser is counted once, and only on sumitsharma.pro; other hosts use a separate preview key.
- Slate is described only by what was checked on 3 November 2026: the brand name, copy lines and colour fields update the live preview. Uploads, export and project download need an account and aren't claimed. "Live · paid" stays on Glyph only.
- Email copying reports success only after the clipboard write resolves.

Asset provenance lives in `public/brands/SOURCES.md`, `public/previews/SOURCES.md`, and `public/logos/SOURCES.md`. Font licenses live with the fonts.

## Review artifact

After a production build, `python scripts/export-quiet-preview.py /absolute/path/Sumit-Portfolio-Live.html` produces a single offline HTML review file containing the rendered routes, fonts and assets. This adapter provides review interactions without publishing the site or enabling the newsletter.

Glyph-Skill has a front-page description, real site icon and explicit repository link. Its star count is a checked snapshot (25 October 2026), with the date in the link title. Refresh `src/data/glyph-skill.json` after rechecking GitHub; it is not presented as a live counter.
