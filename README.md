# Tier1Clean - Mockup

Free homepage mockup for Tier1Clean (Festim Elmazi), built by Sutera Sites.

Tier1Clean (TIER1CLEAN PTY LTD) is a Melbourne builders-cleaning business working on commercial, education and residential construction projects. Trade only, no private jobs. Festim is James's soccer teammate at Altona North SC and asked about updating the existing site.

## Status
Pre-launch mockup. Single static page (`index.html`) with assets, CSS, JS. Same design system as the Apollo Surface Solutions build, retinted to the Tier1Clean palette.

## The site it replaces
`tier1clean.com.au` is a one-page Wix site, copyright still 2021, Wix site name never changed off the "My Site" default. No analytics of any kind, no structured data, no service-area content, no job photography (six images total, stock), and a **wrong phone number in the main call to action**. Full audit: `CRM/prospects/Tier1Clean/current-site-audit.md`.

## Stack
- Static HTML/CSS/JS, no build step
- Oswald + Inter via Google Fonts
- No JS dependencies
- All imagery AVIF, total page weight ~1.4 MB

## Brand
Sampled from Festim's own logo: blue `#3C84C0`, black `#1A1A1A`, navy `#101A24`. Oswald display, Inter body.

## Sections
Hero, The Three Stages, Services (6 tiles, real photos), Recent Work (8-tile portrait gallery), About, CTA band, Why Builders Use Tier1Clean, FAQ (8, with FAQPage schema), Contact, Footer.

## Header and hero
Rebuilt 2026-08-12 against a reference James supplied (kudanilexplorer.com). Transparent bar over the hero: wordmark hard left, six links on the page centre line, solid white CTA hard right. No pill, no backdrop blur, no dropdowns. The hero photo runs full bleed with the headline on the centre line and a sentence-case strap directly beneath it, rather than the strap being pinned to the bottom of the viewport.

Two things about the reference were deliberately **not** copied, because they belong to a different type system than the rest of this page:
- **The typeface.** The reference sets its headline in a wide geometric sans. Oswald is condensed, which is close to its opposite. Every other heading, chip and button on this page is Oswald, so the hero uses it too. To go the other way, change `--font-display` in `styles.css` and the Google Fonts `<link>` in `index.html`. That is a whole-page change, not a hero change.
- **Title case.** The reference headline is title case; every heading here is uppercase via the base `h1, h2, h3, h4` rule. Add `text-transform: none` to `.hero h1` for the reference treatment.

The old centre-pill nav with two dropdown menus is in git history at `a79ef18` if it is ever wanted back.

## What the build does differently to the current site
- **Leads with the three-stage offer.** Full Builders Clean / Re-Clean / Final Clean is Festim's real differentiator and maps onto the construction handover process. On the Wix site it is plain text buried mid-page; here it is the first section after the hero.
- **Keeps his positioning, sharpens the framing.** The hero runs on schedule risk ("Handover Ready. On Schedule.") rather than cleanliness, which is the angle his own copy already had in the line about inexperienced cleaners delaying project completion.
- **Shows the work.** 22 real project photos came off his Facebook. The site now proves he works on schools, childcare, sports and community facilities and commercial fitouts, which is a much stronger position than "Melbourne builders clean".
- **Keeps the good part of his form.** Site address, timeframe dropdown and plan upload are all carried over. The plan upload is unusual for this trade and worth keeping.

## Placeholders to swap before/at launch
- **Formspree:** the contact form `action` is `REPLACE_WITH_FORMSPREE_ID`. Wire in the real endpoint before the live URL is shared.
  - Note: the form posts `multipart/form-data` for the plan upload. **File uploads require a paid Formspree plan.** If Festim stays on free, either drop the upload field or point people at `admin@tier1clean.com.au` for drawings.
- **Analytics:** nothing is installed yet. Add GA4 plus the standard `generate_lead` / `click_to_call` events at launch, per the agency GA4 setup.
- **Favicon:** `assets/logo/favicon.svg` is a "T1" tile in the brand palette, built here rather than supplied. Fine to ship, easy to replace.

## Open items (flagged to James)
- **Phone number needs confirming.** The live Wix site shows `0416 090 408` in the contact block and the `tel:` link, but `0416 090 804` in the main call-to-action sentence. Two of three occurrences, including the machine-readable one, say **408**, so that is what this build uses everywhere. Confirm with Festim before launch.
- **No insurance, licence, ABN or years-in-business claims anywhere.** None of it appears on his current site and none is confirmed. Add once Festim supplies real documents.
- **No testimonials.** The "Why builders use Tier1Clean" value props stand in until real ones exist. No fabricated reviews.
- **Project names are not used in copy.** The CTA band photo has "CLARENDON WORKS" signage visible in it, heavily dimmed under the overlay. It is Festim's own photo from his own public page, but check he is happy to be publicly associated with the project before launch.
- **All source photos are portrait.** Every one of the 22 is a 1440px Instagram 4:5 export. The hero and CTA band are centre-cropped to 16:9, which works, but a real landscape shot and the camera originals would be better. Worth asking.
- **Service area is "Melbourne" only.** His current site never gets more specific. Real suburb or corridor coverage would unlock service-area pages later.

## Source material
Everything came from the CRM prospect folder:
- `CRM/prospects/Tier1Clean/current-site-audit.md` - full extraction of the existing site
- `CRM/prospects/Tier1Clean/assets/README.md` - shot-by-shot catalogue of the 22 photos
- `CRM/prospects/Tier1Clean/assets/tier1clean-logo-colour.png` - source logo
