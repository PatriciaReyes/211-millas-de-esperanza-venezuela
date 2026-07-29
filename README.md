# 211 Millas de Esperanza

An independent tracking page for Mauricio Fuentes and Alfredo Millán's John Muir Trail walk — Yosemite to Mt. Whitney — raising funds for children affected by the June 2026 earthquakes in Venezuela.

🔗 **Live site:** [https://johnmuirtrailforvenezuela.netlify.app](https://johnmuirtrailforvenezuela.netlify.app/)

## About this page

This is a family-built tracker, not the official foundation site. It does not collect or process any funds — every donation goes directly to [Fundación Proyecto de la Mano](https://fundacionproyectodelamano.org/) through the official channels listed on the page (their donation page, Zelle, or Venmo).

Bilingual (Spanish / English), single self-contained HTML file — no build step, no external dependencies, no API keys.

## Project structure

```
211-millas-de-esperanza/
├── index.html          ← main site (HTML, CSS, JS in one file)
├── venezuela.html      ← "What Happened in Venezuela" details page
├── README.md
└── photos/
    ├── manifest.json           ← trail photos (see "Adding photos")
    ├── (trail image files)
    └── venezuela/
        ├── manifest.json       ← La Guaira photos (see below)
        └── (La Guaira image files)
```

## Updating progress

Everything that changes week to week lives in one place: the `CAMPAIGN_DATA` block near the end of `index.html`.

1. Edit directly on GitHub: open `index.html`, click the pencil icon (✏️) in the top right of the file view.
2. Find `CAMPAIGN_DATA` near the end of the file and update:
   - `milesWalked` — miles completed so far
   - `amountRaised` — estimated dollars raised (USD)
   - `lastUpdated` — date of this update (YYYY-MM-DD format)
3. Commit the change — Netlify redeploys automatically, live in under a minute.

The day counter and the route map marker are both calculated automatically from `startDate` and `milesWalked` — no manual updates needed for those.

## Adding photos

Photos are listed in `photos/manifest.json` and the page loads them from there — no GitHub API, no rate limits, no branch/casing issues to worry about.

1. Upload the image file (`.jpg`, `.jpeg`, `.png`, or `.webp`) to the `/photos` folder.
2. Add a line for it in `photos/manifest.json`, e.g.:
   ```json
   {
     "file": "day3-tuolumne.jpg",
     "captionEn": "Camp at Tuolumne Meadows",
     "captionEs": "Campamento en Tuolumne Meadows"
   }
   ```
   `file` is required; the two caption fields are optional — leave them as empty strings (`""`) if you don't want a caption.
3. Commit both changes together. The order of entries in the file is the order photos appear on the page.

Until `manifest.json` has entries, the page shows "coming soon" placeholders instead.

## Adding La Guaira photos (venezuela.html)

Same system, separate folder: `photos/venezuela/manifest.json`, loaded by `venezuela.html` only — trail photos and La Guaira photos never mix.

1. Upload the image file to `/photos/venezuela`.
2. Add a line for it in `photos/venezuela/manifest.json`, e.g.:
   ```json
   {
     "file": "caraballeda-01.jpg",
     "wide": true,
     "captionEn": "",
     "captionEs": ""
   }
   ```
   `file` is required. `wide: true` makes the photo span two columns (use it for horizontal/landscape photos — most of these should be). Omit `wide` or set it to `false` for a regular-width photo. Captions are optional.
3. Commit both changes together.

Photo credit ("Andrea Rodríguez") is already set in the page itself — no need to add it per photo.

## About the trail map

The route section shows a real map image, uploaded directly to `/photos/JohnMuirTrail.jpg` (fixed filename, not part of the photo manifest system). If that file is missing, the page shows a simple "coming soon" placeholder instead of breaking.

If you ever need to replace the map, be careful: most JMT map sites (Tom Harrison Maps, National Geographic Trails Illustrated, personal trip-report blogs, jmtwilderness.org) are copyrighted and shouldn't be reposted here.

## Site navigation

Both pages share a top bar with two tabs — Home/Inicio and Earthquake in Venezuela/Terremoto en Venezuela — so visitors can jump between them at any time, plus the language toggle. The active tab highlights itself based on which page you're on; that's hardcoded per file, so it doesn't need any JS configuration.

## Possible next step: Instagram integration

Not built yet — worth considering later if manually updating the manifest becomes a bottleneck once the trek is underway.
