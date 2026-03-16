/**
 * CELIA Alliance Interactive Map — Configuration File
 * =====================================================
 * This is the ONLY file you need to edit to update the map.
 * Changes here are reflected immediately on the live map.
 *
 * SECTIONS:
 *   1. BRANDING        — colours, fonts, logo, alliance name
 *   2. MAP SETTINGS    — default view, tile style, behaviour
 *   3. MEMBERS         — firm data: country, city, coordinates, details
 *   4. GROUPS          — regional/practice groups for legend/filter
 */

window.CELIA_CONFIG = {

  /* ─────────────────────────────────────────────
   * 1. BRANDING
   * ───────────────────────────────────────────── */
  branding: {
    allianceName:   "CELIA Alliance",
    tagline:        "International Legal & Professional Network",
    logoUrl:        "",            // URL to logo image, or "" to use text
    faviconUrl:     "",

    colors: {
      // Primary accent — used for markers, highlights, active states
      primary:        "#1a3a5c",
      primaryLight:   "#2d6096",
      primaryMuted:   "rgba(26, 58, 92, 0.15)",

      // Choropleth fill for member countries
      countryFill:    "#2d6096",
      countryFillOpacity: 0.25,
      countryBorder:  "#1a3a5c",
      countryBorderOpacity: 0.6,

      // Hover state for countries
      countryHoverFill:    "#2d6096",
      countryHoverOpacity: 0.45,

      // Firm markers
      markerFill:     "#1a3a5c",
      markerBorder:   "#ffffff",
      markerHoverFill: "#c8a951",   // gold accent on hover

      // UI chrome
      panelBg:        "#ffffff",
      panelBorder:    "#e2e8f0",
      textPrimary:    "#1a202c",
      textSecondary:  "#4a5568",
      textMuted:      "#718096",
      accent:         "#c8a951",    // gold — used for tags, highlights
    },

    fonts: {
      // Google Fonts are loaded automatically. Use any Google Font name.
      display:  "Playfair Display",   // headings, alliance name
      body:     "Source Sans 3",      // body text, labels
    },
  },

  /* ─────────────────────────────────────────────
   * 2. MAP SETTINGS
   * ───────────────────────────────────────────── */
  map: {
    // MapLibre style — free options:
    //   "https://demotiles.maplibre.org/style.json"  (basic, no key needed)
    //   "https://tiles.openfreemap.org/styles/liberty" (detailed, no key needed)
    //   Any MapTiler / Stadia Maps URL if you have a key
    styleUrl: "https://tiles.openfreemap.org/styles/positron",

    // Initial camera
    center:   [15, 25],   // [longitude, latitude]
    zoom:     2.0,
    minZoom:  1.5,
    maxZoom:  14,

    // Restrict panning to a bounding box, or null for none
    // Format: [[minLng, minLat], [maxLng, maxLat]]
    maxBounds: null,

    // Show zoom controls
    showZoomControls: true,

    // Cluster nearby markers when zoomed out
    clusterMarkers: true,
    clusterRadius:  50,    // pixels
    clusterMaxZoom: 6,
  },

  /* ─────────────────────────────────────────────
   * 3. MEMBERS
   * ───────────────────────────────────────────── */
  members: [
    {
      id:      "uk-tlt",
      country: "GB",                   // ISO 3166-1 alpha-2
      countryName: "United Kingdom",
      firm:    "TLT LLP",
      city:    "Bristol",
      lng:     -2.5879,
      lat:     51.4545,
      groups:  ["Europe"],
      website: "https://www.tlt.com",
      email:   "",
      phone:   "",
      description: "Full-service UK law firm with expertise in employment, corporate and commercial law.",
      specialisms: ["Employment", "Corporate", "Real Estate"],
    },
    {
      id:      "de-kliemt",
      country: "DE",
      countryName: "Germany",
      firm:    "Kliemt.HR Lawyers",
      city:    "Düsseldorf",
      lng:     6.7735,
      lat:     51.2217,
      groups:  ["Europe"],
      website: "https://www.kliemt.de",
      email:   "",
      phone:   "",
      description: "Germany's leading employment law firm, advising on all aspects of individual and collective labour law.",
      specialisms: ["Employment", "HR Advisory"],
    },
    {
      id:      "fr-capstan",
      country: "FR",
      countryName: "France",
      firm:    "Capstan Avocats",
      city:    "Paris",
      lng:     2.3522,
      lat:     48.8566,
      groups:  ["Europe"],
      website: "https://www.capstan.fr",
      email:   "",
      phone:   "",
      description: "Leading French employment and labour law practice with offices across France.",
      specialisms: ["Employment", "Labour Law", "Social Security"],
    },
    {
      id:      "es-abdón",
      country: "ES",
      countryName: "Spain",
      firm:    "Abdón Pedrajas & Molero",
      city:    "Madrid",
      lng:     -3.7038,
      lat:     40.4168,
      groups:  ["Europe"],
      website: "https://www.apmlegal.com",
      email:   "",
      phone:   "",
      description: "One of Spain's foremost employment and labour relations law firms.",
      specialisms: ["Employment", "Restructuring", "Pensions"],
    },
    {
      id:      "it-trifiro",
      country: "IT",
      countryName: "Italy",
      firm:    "Trifirò & Partners",
      city:    "Milan",
      lng:     9.1900,
      lat:     45.4654,
      groups:  ["Europe"],
      website: "https://www.trifiro.it",
      email:   "",
      phone:   "",
      description: "One of Italy's most prominent employment and labour law practices.",
      specialisms: ["Employment", "Labour Law", "Corporate"],
    },
    {
      id:      "nl-arena",
      country: "NL",
      countryName: "Netherlands",
      firm:    "ArenaA Advocaten",
      city:    "Amsterdam",
      lng:     4.9041,
      lat:     52.3676,
      groups:  ["Europe"],
      website: "https://www.arenaa.nl",
      email:   "",
      phone:   "",
      description: "Specialist Dutch employment and labour law boutique.",
      specialisms: ["Employment", "HR Advisory"],
    },
    {
      id:      "be-loyens",
      country: "BE",
      countryName: "Belgium",
      firm:    "Loyens & Loeff",
      city:    "Brussels",
      lng:     4.3517,
      lat:     50.8503,
      groups:  ["Europe"],
      website: "https://www.loyensloeff.com",
      email:   "",
      phone:   "",
      description: "Full-service Belgian law firm with a strong employment and tax practice.",
      specialisms: ["Employment", "Tax", "Corporate"],
    },
    {
      id:      "br-demarest",
      country: "BR",
      countryName: "Brazil",
      firm:    "Demarest Advogados",
      city:    "São Paulo",
      lng:     -46.6333,
      lat:     -23.5505,
      groups:  ["Latin America"],
      website: "https://www.demarest.com.br",
      email:   "",
      phone:   "",
      description: "One of Brazil's largest and most respected full-service law firms.",
      specialisms: ["Employment", "Corporate", "Tax"],
    },
    {
      id:      "mx-basham",
      country: "MX",
      countryName: "Mexico",
      firm:    "Basham, Ringe y Correa",
      city:    "Mexico City",
      lng:     -99.1332,
      lat:     19.4326,
      groups:  ["Latin America"],
      website: "https://www.basham.com.mx",
      email:   "",
      phone:   "",
      description: "Leading Mexican law firm with a full-service offering across corporate, employment and tax.",
      specialisms: ["Employment", "Corporate", "Litigation"],
    },
    {
      id:      "ar-allende",
      country: "AR",
      countryName: "Argentina",
      firm:    "Allende & Brea",
      city:    "Buenos Aires",
      lng:     -58.3816,
      lat:     -34.6037,
      groups:  ["Latin America"],
      website: "https://www.allendebrea.com.ar",
      email:   "",
      phone:   "",
      description: "One of Argentina's leading full-service law firms with a strong employment practice.",
      specialisms: ["Employment", "Corporate", "Tax"],
    },
    {
      id:      "us-ogletree",
      country: "US",
      countryName: "United States",
      firm:    "Ogletree Deakins",
      city:    "Atlanta",
      lng:     -84.3880,
      lat:     33.7490,
      groups:  ["North America"],
      website: "https://www.ogletree.com",
      email:   "",
      phone:   "",
      description: "One of the largest labour and employment law firms in the United States.",
      specialisms: ["Employment", "Labour Law", "Immigration"],
    },
    {
      id:      "au-lander",
      country: "AU",
      countryName: "Australia",
      firm:    "Lander & Rogers",
      city:    "Melbourne",
      lng:     144.9631,
      lat:     -37.8136,
      groups:  ["Asia Pacific"],
      website: "https://www.landers.com.au",
      email:   "",
      phone:   "",
      description: "Australian law firm with a market-leading workplace relations and safety practice.",
      specialisms: ["Employment", "Safety", "Insurance"],
    },
    {
      id:      "sg-rajah",
      country: "SG",
      countryName: "Singapore",
      firm:    "Rajah & Tann Asia",
      city:    "Singapore",
      lng:     103.8198,
      lat:     1.3521,
      groups:  ["Asia Pacific"],
      website: "https://www.rajahtannasia.com",
      email:   "",
      phone:   "",
      description: "One of the largest law firms in Southeast Asia, with a comprehensive employment offering.",
      specialisms: ["Employment", "Corporate", "Dispute Resolution"],
    },
  ],

  /* ─────────────────────────────────────────────
   * 4. GROUPS
   * ─────────────────────────────────────────────
   * Define the groups used in the members array above.
   * Each group gets a colour swatch in the legend.
   * The 'color' here is used for the legend only;
   * marker colours are controlled by branding.colors above.
   */
  groups: [
    { id: "Europe",       label: "Europe",        color: "#1a3a5c" },
    { id: "Latin America",label: "Latin America",  color: "#2d6096" },
    { id: "North America",label: "North America",  color: "#c8a951" },
    { id: "Asia Pacific", label: "Asia Pacific",   color: "#4a8a6f" },
    { id: "Africa",       label: "Africa",         color: "#8b5a2b" },
    { id: "Middle East",  label: "Middle East",    color: "#9b2335" },
  ],

};
