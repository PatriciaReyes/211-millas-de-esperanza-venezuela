# 211 Millas de Esperanza

An independent tracking page for Mauricio Fuentes and Alfredo Millán's John Muir Trail walk — Yosemite to Mt. Whitney — raising funds for children affected by the June 2026 earthquakes in Venezuela.

🔗 **Live site:** [https://211millasdeesperanza.netlify.app](https://211millasdeesperanza.netlify.app/)

## About this page

This is a family-built tracker, not the official foundation site. It does not collect or process any funds — every donation goes directly to [Fundación Proyecto de la Mano](https://fundacionproyectodelamano.org/) through the official channels listed on the page (their donation page, Zelle, or Venmo).

Bilingual (Spanish / English), single self-contained HTML file — no build step, no external dependencies, no API keys.

## Project structure

```
211-millas-de-esperanza/
├── index.html          ← the whole site (HTML, CSS, JS in one file)
├── README.md
└── photos/
    ├── manifest.json    ← list of photos to display (see below)
    └── (image files)
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

## Possible next step: Instagram integration

Not built yet — worth considering later if manually updating the manifest becomes a bottleneck once the trek is underway.
