# ERT Field Assistant

Single-file web app for logging electrical resistivity (ERT) and induced polarization (IP) field data, with live pseudosections and a built-in 2D inversion.

- `index.html` — minified, self-contained app (open it in a browser, or serve it over HTTPS for GPS)
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
