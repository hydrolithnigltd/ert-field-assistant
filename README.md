# ERT Field Assistant

Single-file web app for logging electrical resistivity (ERT) and induced polarization (IP) field data, with live pseudosections and a built-in 2D inversion.

- `index.html` — minified app (the installable web app)
- `manifest.webmanifest`, `sw.js`, `icons/` — make it installable and usable offline
- `src/ert_field_assistant.html` — readable source of the same app

## Features
- Wenner, Schlumberger, Dipole-Dipole, Pole-Dipole and Pole-Pole arrays
- GPS, manual, base-station + azimuth, and two-point-line positioning
- Resistivity-only or Resistivity + IP logging, QC flags, editable station log
- Pseudosection and 2D inversion (Wenner, Schlumberger, Dipole-Dipole)
- Exports: web map, KML, CSV, RES2DINV, Oasis Montaj
- Session save/resume and automatic backups

## Notes
- Inversion assumes flat topography; chargeability uses a simplified linearised estimate. Verify important interpretations with dedicated inversion software.
- The satellite basemap needs an internet connection (Leaflet and Esri tiles).

© 2026 Asije Labs

## Install on your device
Open the app from its web link (GitHub Pages: Settings → Pages → deploy from `main` / root).
- **Chrome / Edge (computer or Android):** click the **⬇ Install App** button in the top bar (or the install icon in the address bar).
- **iPhone / iPad (Safari):** tap Share → **Add to Home Screen**.

Once installed it opens like a normal app and keeps working without a connection (the satellite map still needs internet).
