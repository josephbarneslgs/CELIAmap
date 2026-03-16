# CELIA Alliance Interactive Map

An embeddable interactive membership map built with [MapLibre GL JS](https://maplibre.org/).  
Shows member firms as markers on a world map with country-level shading, regional filtering, search, and click-through firm detail panels.

---

## Quick Start

### Local development

```bash
# Serve locally (any static server works)
npx serve public/
# → opens at http://localhost:3000
```

### Docker

```bash
# Build
docker build -t celia-map .

# Run
docker run -p 8080:8080 celia-map

# → opens at http://localhost:8080
```

---

## Google Cloud Run Deployment

```bash
# One-command deploy (from this directory)
gcloud run deploy celia-map \
  --source . \
  --region europe-west1 \
  --allow-unauthenticated \
  --port 8080

# Cloud Run will return a URL like:
# https://celia-map-xxxx-ew.a.run.app
```

---

## Embedding on your website

Once deployed, embed the map with a single `<iframe>` tag:

```html
<iframe
  src="https://YOUR-CLOUD-RUN-URL"
  width="100%"
  height="620"
  style="border:none; border-radius:8px;"
  title="CELIA Alliance Member Map"
  loading="lazy"
  allowfullscreen
></iframe>
```

Adjust `height` to taste. The map is fully responsive.

---

## Updating the map data

**Everything is controlled by a single file: `public/config.js`**

You never need to touch `index.html`, the Dockerfile, or nginx config.

### Adding a new member firm

Open `public/config.js` and add an entry to the `members` array:

```js
{
  id:          "ch-homburger",          // unique kebab-case ID
  country:     "CH",                    // ISO 3166-1 alpha-2 code
  countryName: "Switzerland",
  firm:        "Homburger AG",
  city:        "Zurich",
  lng:         8.5417,                  // longitude  (decimal degrees)
  lat:         47.3769,                 // latitude   (decimal degrees)
  groups:      ["Europe"],              // must match a group id below
  website:     "https://homburger.ch",
  email:       "info@homburger.ch",
  phone:       "",
  description: "One of Switzerland's leading business law firms.",
  specialisms: ["Corporate", "Employment", "Tax"],
},
```

**Finding coordinates:** Go to [maps.google.com](https://maps.google.com), right-click on the city, and copy the lat/lng.

### Removing a member

Delete their object from the `members` array.

### Changing branding colours

Edit `branding.colors` in `config.js`:

```js
colors: {
  primary:             "#1a3a5c",   // main dark colour
  primaryLight:        "#2d6096",   // hover/lighter variant
  countryFill:         "#2d6096",   // choropleth fill
  countryFillOpacity:  0.25,        // 0–1
  accent:              "#c8a951",   // gold highlight colour
  // … etc
}
```

### Changing fonts

Edit `branding.fonts` — any [Google Fonts](https://fonts.google.com) name works:

```js
fonts: {
  display: "Cormorant Garamond",   // headings
  body:    "DM Sans",              // body / labels
}
```

### Changing the map style

Edit `map.styleUrl` — free options that need no API key:

| Style | URL |
|-------|-----|
| Positron (light, clean) | `https://tiles.openfreemap.org/styles/positron` |
| Liberty (detailed) | `https://tiles.openfreemap.org/styles/liberty` |
| Dark Matter | `https://tiles.openfreemap.org/styles/dark-matter` |
| Basic demo | `https://demotiles.maplibre.org/style.json` |

For MapTiler styles (more options, free tier available):
1. Sign up at [maptiler.com](https://www.maptiler.com)
2. Use: `https://api.maptiler.com/maps/STYLE/style.json?key=YOUR_KEY`

### Adding a new regional group

Add to the `groups` array:

```js
{ id: "Middle East", label: "Middle East", color: "#9b2335" },
```

Then reference it in the relevant member's `groups: ["Middle East"]`.

---

## File structure

```
celia-map/
├── Dockerfile          # Container definition — no need to edit
├── nginx.conf          # Nginx config — no need to edit
├── README.md
└── public/
    ├── config.js       # ← THE ONLY FILE YOU NEED TO EDIT
    └── index.html      # Map application — no need to edit
```

---

## After updating config.js

Redeploy with the same command:

```bash
gcloud run deploy celia-map --source . --region europe-west1 --allow-unauthenticated --port 8080
```

Cloud Run will build a new container and update the live URL with zero downtime.
