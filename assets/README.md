# Tier1Clean - Mockup Assets

All imagery is real client work. Nothing here is stock.

Source photos live in the CRM at `CRM/prospects/Tier1Clean/assets/`, catalogued shot by shot in the README there. They came off Festim's Facebook/Instagram, so they are 1440px-wide 4:5 portrait Instagram exports, not camera originals.

## logo/
| File | Notes |
|---|---|
| `logo-light.png` | 1478 x 160. "TIER1" recoloured to white, "CLEAN" left brand blue. For the dark nav pill over the hero. |
| `logo-dark.png` | 1478 x 160. Original colours, black + blue. For the white footer. |
| `favicon.svg` | "T1" on a navy tile. Built here, not supplied. A white-on-transparent mark would vanish on Google's white SERP, hence the tile. |

Both PNGs are derived from `tier1clean-logo-colour.png` in the CRM, trimmed of transparent padding and scaled to 160px tall.

## hero/
| File | Source | Notes |
|---|---|---|
| `hero.avif` | photo 01 | 1600 x 900. Board-formed concrete facade with arched glazing. Centre band. Encoded at q50 rather than q58 because it is the LCP image and sits under a 0.55 to 0.85 dark overlay that masks fine detail. **The "CLARENDON WORKS" signage is legible in this shot** and it is now the hero, so clear it with Festim before launch. |
| `cta.avif` | photo 13 | 1600 x 900. Two-storey building, sage cladding, finished car park, blue sky. Cropped slightly high (42%) to keep the roofline and drop dead foreground tarmac. |

These two were swapped on 2026-08-11 at James's request. The facade is the stronger opening image; the building and car park works well behind the CTA band's heavier overlay.

## services/
Six 640 x 832 portrait tiles, centre-cropped from the portrait sources with the crop point tuned per image. They fill the left column of each service card, so they run the full height of the card rather than sitting above the copy.

| File | Source | Shows |
|---|---|---|
| `windows-glazing.avif` | photo 14 | Full-height glazing, timber-look floor |
| `kitchens-joinery.avif` | photo 18 | Commercial kitchen, stainless benches, timber overheads |
| `bathrooms-amenities.avif` | photo 05 | Trough basin, timber vanity, full-width mirror |
| `floors-hard-surfaces.avif` | photo 03 | Polished timber sports court |
| `exterior-carparks.avif` | photo 06 | Covered entry, concrete forecourt, bike racks |
| `additional-treatments.avif` | photo 12 | External bluestone stairs and entry |

## stages/
Three 1100 x 825 (4:3) visuals, one per stage card, sitting inside the dark inset frame.

| File | Source | Stage |
|---|---|---|
| `stage-1-full-clean.avif` | photo 16 | Open room, post-construction |
| `stage-2-reclean.avif` | photo 20 | Corridor, after defects |
| `stage-3-final-clean.avif` | photo 10 | Fitted out room, before handover |

## contact/
| File | Source | Notes |
|---|---|---|
| `finished-kitchen.avif` | photo 04 | 1000 x 750 (4:3 centre band). Fills the white space the contact section's left column leaves beside the taller form. |

## gallery/
Eight 700px-wide tiles kept at the source 4:5 portrait ratio, no cropping. Sized for a ~285px display slot at 2x.

21 of the 22 source photos are on the page, each exactly once.

Photo 22 (accessible shower, spotless finish) is the odd one out. It ran full-bleed down the left of the FAQ section until 2026-08-12, when James asked for that image to come out and the FAQ went full width. The encode was deleted with it. Re-encode from the CRM original if a slot opens up.

`education-01` (school entry), `childcare-01` (playground), `education-02` (food tech kitchen), `commercial-01` (foyer, timber ceiling), `detail-01` (timber stair), `education-03` (corridor), `community-01` (community room), `detail-02` (accessible bathroom).

## Encoding
Everything is AVIF at q58 except the logos and the hero (q50). Total asset weight ~1.5 MB, down from 2.6 MB at the first pass, mostly by dropping the gallery from 900px to 700px and moving the service tiles off JPEG.

Re-encode from the CRM originals rather than from these files if sizes ever change.
