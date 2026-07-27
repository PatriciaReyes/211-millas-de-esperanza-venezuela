# 211 Millas de Esperanza
 
An independent tracking page for Mauricio Fuentes and Alfredo Millán's John Muir Trail walk — Yosemite to Mt. Whitney — raising funds for children affected by the June 2026 earthquakes in Venezuela.
 
🔗 **Live site:** _(add the Netlify URL here once published)_
 
## About this page
 
This is a family-built tracker, not the official foundation site. It does not collect or process any funds — every donation goes directly
to [Fundación Proyecto de la Mano](https://fundacionproyectodelamano.org/) through the official channels listed on the page (their donation page, Zelle, or Venmo).
 
Bilingual (Spanish / English), single self-contained HTML file — no build step, no dependencies.
 
## Updating progress
 
Everything that changes week to week lives in one place: the `CAMPAIGN_DATA` block near the end of `index.html`.
 
1. Edit directly on GitHub: open `index.html`, click the pencil icon (✏️) in the top right of the file view.
2. Find `CAMPAIGN_DATA` and update:
   - `milesWalked` — miles completed so far
   - `amountRaised` — estimated dollars raised (USD)
   - `lastUpdated` — date of this update (YYYY-MM-DD format)
3. Commit the change — Netlify redeploys automatically, live in under a minute.
The day counter and the route map marker are both calculated automatically from `startDate` and `milesWalked` — no manual updates needed for those.
 
## Adding photos
 
Photos load automatically from the `/photos` folder in this repo — no code changes needed.
 
1. Upload image files (`.jpg`, `.jpeg`, `.png`, or `.webp`) to `/photos`.
2. The page fetches that folder's contents on load and displays the most recent files (by filename), up to the `maxPhotos` limit set in `PHOTOS_REPO` inside `index.html`.
3. Until photos exist, the page shows "coming soon" placeholders instead.
Before this works, `PHOTOS_REPO.owner` in `index.html` needs to be set to this repo's GitHub username (it ships with a placeholder).
 
## Possible next step: Instagram integration
 
Not built yet — worth considering later if manually uploading photos to `/photos` becomes a bottleneck once the trek is underway.
 
