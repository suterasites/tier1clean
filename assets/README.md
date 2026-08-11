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
| `hero.avif` | photo 13 | 1600 x 900. Two-storey building, sage cladding, finished car park, blue sky. Centre band cropped slightly high (42%) to keep the roofline and drop dead foreground tarmac. |
| `cta.avif` | photo 01 | 1600 x 900. Board-formed concrete facade with arched glazing. Sits under a heavy dark overlay in the CTA band. |

## services/
Six 1200 x 750 (16:10) tiles, centre-cropped from portrait sources with the crop point tuned per image.

| File | Source | Shows |
|---|---|---|
| `windows-glazing.avif` | photo 14 | Full-height glazing, timber-look floor |
| `kitchens-joinery.avif` | photo 18 | Commercial kitchen, stainless benches, timber overheads |
| `bathrooms-amenities.avif` | photo 05 | Trough basin, timber vanity, full-width mirror |
| `floors-hard-surfaces.avif` | photo 03 | Polished timber sports court |
| `exterior-carparks.avif` | photo 06 | Covered entry, concrete forecourt, bike racks |
| `additional-treatments.avif` | photo 12 | External bluestone stairs and entry |

## gallery/
Eight 700px-wide tiles kept at the source 4:5 portrait ratio, no cropping. Sized for a ~285px display slot at 2x.

`education-01` (school entry), `childcare-01` (playground), `education-02` (food tech kitchen), `commercial-01` (foyer, timber ceiling), `detail-01` (timber stair), `education-03` (corridor), `community-01` (community room), `detail-02` (accessible bathroom).

## Encoding
Everything is AVIF at q58 except the logos. Total asset weight ~1.4 MB, down from 2.6 MB at the first pass, mostly by dropping the gallery from 900px to 700px and moving the service tiles off JPEG.

Re-encode from the CRM originals rather than from these files if sizes ever change.
