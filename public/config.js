/**
 * CELIA Alliance Interactive Map — Configuration File
 * =====================================================
 * This is the ONLY file you need to edit to update the map.
 * Changes here are reflected immediately on the live map.
 *
 * Member data sourced from celiaalliance.com/member/ — March 2026
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
    logoUrl:        "",
    faviconUrl:     "",

    colors: {
      primary:        "#1a3a5c",
      primaryLight:   "#2d6096",
      primaryMuted:   "rgba(26, 58, 92, 0.15)",
      countryFill:    "#2d6096",
      countryFillOpacity: 0.25,
      countryBorder:  "#1a3a5c",
      countryBorderOpacity: 0.6,
      countryHoverFill:    "#2d6096",
      countryHoverOpacity: 0.45,
      markerFill:     "#1a3a5c",
      markerBorder:   "#ffffff",
      markerHoverFill: "#c8a951",
      panelBg:        "#ffffff",
      panelBorder:    "#e2e8f0",
      textPrimary:    "#1a202c",
      textSecondary:  "#4a5568",
      textMuted:      "#718096",
      accent:         "#c8a951",
    },

    fonts: {
      display:  "Playfair Display",
      body:     "Source Sans 3",
    },
  },

  /* ─────────────────────────────────────────────
   * 2. MAP SETTINGS
   * ───────────────────────────────────────────── */
  map: {
    styleUrl: "https://tiles.openfreemap.org/styles/positron",
    center:   [15, 25],
    zoom:     2.0,
    minZoom:  1.5,
    maxZoom:  14,
    maxBounds: null,
    showZoomControls: true,
    clusterMarkers: true,
    clusterRadius:  50,
    clusterMaxZoom: 6,
  },

  /* ─────────────────────────────────────────────
   * 3. MEMBERS
   * ───────────────────────────────────────────── */
  members: [

    // ── ARGENTINA
    {
      id:          "ar-mbb",
      country:     "AR",
      countryName: "Argentina",
      firm:        "MBB Balado Bevilacqua Abogados",
      city:        "Buenos Aires",
      lng:         -58.3816,
      lat:         -34.6037,
      groups:      ["Latin America"],
      website:     "https://www.baladolaw.com.ar",
      email:       "",
      phone:       "",
      description: "Boutique Buenos Aires firm specialising in labour and employment matters, with corporate, tax and international assignment advice.",
      specialisms: ["Employment Law", "International Assignments", "Compensation & Benefits"],
    },

    // ── BELGIUM
    {
      id:          "be-antaxius",
      country:     "BE",
      countryName: "Belgium",
      firm:        "Antaxius Advocaten BV",
      city:        "Antwerp",
      lng:         4.4025,
      lat:         51.2194,
      groups:      ["Europe"],
      website:     "https://www.antaxius.be",
      email:       "advocaat@antaxius.be",
      phone:       "+32 3 248 55 99",
      description: "Tax specialist law firm with a focus on international assignments, compensation & benefits, employment law and immigration.",
      specialisms: ["International Assignments", "Compensation & Benefits", "Tax", "Employment Law", "Immigration"],
    },
    {
      id:          "be-buyssens",
      country:     "BE",
      countryName: "Belgium",
      firm:        "Buyssens Employment Lawyers",
      city:        "Antwerp",
      lng:         4.4195,
      lat:         51.2254,
      groups:      ["Europe"],
      website:     "https://www.buyssens-law.be/en",
      email:       "info@buyssens-law.be",
      phone:       "+32 3 361 07 50",
      description: "Niche employment law firm with expertise in international assignments, compensation & benefits, social security and pensions.",
      specialisms: ["Employment Law", "International Assignments", "Compensation & Benefits", "Social Security", "Pensions"],
    },

    // ── BRAZIL
    {
      id:          "br-cescon",
      country:     "BR",
      countryName: "Brazil",
      firm:        "Cescon, Barrieu, Flesch & Barreto Advogados",
      city:        "São Paulo",
      lng:         -46.6894,
      lat:         -23.5673,
      groups:      ["Latin America"],
      website:     "https://www.cesconbarrieu.com.br",
      email:       "consultivotrabalhista@cesconbarrieu.com.br",
      phone:       "+55 (11) 3089-6500",
      description: "One of Brazil's leading full-service law firms, covering labour & employment, compensation & benefits, corporate governance, M&A, tax and international assignments.",
      specialisms: ["Labour & Employment", "Compensation & Benefits", "Corporate", "Tax", "International Assignments"],
    },

    // ── CHILE
    {
      id:          "cl-morales-besa",
      country:     "CL",
      countryName: "Chile",
      firm:        "Morales & Besa",
      city:        "Santiago",
      lng:         -70.6019,
      lat:         -33.4172,
      groups:      ["Latin America"],
      website:     "https://www.moralesybesa.cl",
      email:       "comunicaciones@moralesybesa.cl",
      phone:       "",
      description: "Leading Chilean law firm offering compensation & benefits, employment law, immigration, international assignments and tax & social security advice.",
      specialisms: ["Compensation & Benefits", "Employment Law", "Immigration", "International Assignments", "Tax & Social Security"],
    },

    // ── CHINA & HK
    {
      id:          "cn-rsa-asia",
      country:     "CN",
      countryName: "China",
      firm:        "RsA Asia",
      city:        "Shanghai",
      lng:         121.4737,
      lat:         31.2304,
      groups:      ["Asia Pacific"],
      website:     "https://www.rsa-tax.com",
      email:       "info@rsa-tax.com",
      phone:       "+86 (0) 21 633 622 99",
      description: "Leading tax and corporate advisory firm assisting companies and multinational groups in China and East Asia, covering corporate taxation, market advisory, audit and accounting.",
      specialisms: ["International Assignments", "Tax"],
    },

    // ── COLOMBIA
    {
      id:          "co-chapman-wilches",
      country:     "CO",
      countryName: "Colombia",
      firm:        "Chapman Wilches",
      city:        "Bogotá",
      lng:         -74.0721,
      lat:         4.7110,
      groups:      ["Latin America"],
      website:     "https://chapmanwilches.com",
      email:       "info@chw.com.co",
      phone:       "+57 (601) 7945804",
      description: "Colombian law firm providing specialised counsel across international assignments, employment law and tax.",
      specialisms: ["International Assignments", "Compensation & Benefits", "Employment Law", "Immigration", "Tax & Social Security"],
    },

    // ── FRANCE
    {
      id:          "fr-fidere",
      country:     "FR",
      countryName: "France",
      firm:        "Fidere Avocats",
      city:        "Paris",
      lng:         2.3078,
      lat:         48.8736,
      groups:      ["Europe"],
      website:     "https://www.fidereavocats.fr",
      email:       "fidere@fidereavocats.fr",
      phone:       "+33 (0)1 8508 8450",
      description: "Prominent Paris employment law firm experienced in corporate restructurings, high-risk litigation, labour relations and executive compensation. Recognised as 'Excellent' in labour law by Leaders League.",
      specialisms: ["Employment Law"],
    },
    {
      id:          "fr-galahad",
      country:     "FR",
      countryName: "France",
      firm:        "Galahad",
      city:        "Paris",
      lng:         2.3415,
      lat:         48.8664,
      groups:      ["Europe"],
      website:     "https://www.galahad-legal.com",
      email:       "info@galahad-legal.com",
      phone:       "+33 (0) 6 63 52 63 51",
      description: "CELIA's exclusive French member for compensation & benefits, international assignments and tax. Also exclusive IR Global member in France for Employee Benefits & Executive Compensation.",
      specialisms: ["Compensation & Benefits", "International Assignments", "Tax"],
    },

    // ── GERMANY
    {
      id:          "de-keller-menz",
      country:     "DE",
      countryName: "Germany",
      firm:        "Keller Menz",
      city:        "Munich",
      lng:         11.5672,
      lat:         48.1285,
      groups:      ["Europe"],
      website:     "https://www.keller-menz.de/en/home/",
      email:       "info@keller-menz.eu",
      phone:       "+49 (0) 892 422 300",
      description: "Consistently ranked among Germany's top employment law firms by brand eins and Wirtschafts Woche, recommended by in-house lawyers across the country.",
      specialisms: ["Employment Law", "Commercial Law", "Corporate Law", "Tax"],
    },

    // ── ITALY
    {
      id:          "it-lca",
      country:     "IT",
      countryName: "Italy",
      firm:        "LCA Studio Legale",
      city:        "Milan",
      lng:         9.1897,
      lat:         45.4773,
      groups:      ["Europe"],
      website:     "https://www.lcalex.it/en/",
      email:       "info@lcalex.it",
      phone:       "+39 027788751",
      description: "Italian law firm advising on compensation & benefits, employment law and international assignments for domestic and multinational clients.",
      specialisms: ["Compensation & Benefits", "Employment Law", "International Assignments"],
    },

    // ── MEXICO
    {
      id:          "mx-von-wobeser",
      country:     "MX",
      countryName: "Mexico",
      firm:        "Von Wobeser y Sierra",
      city:        "Mexico City",
      lng:         -99.1764,
      lat:         19.4317,
      groups:      ["Latin America"],
      website:     "https://www.vonwobeser.com",
      email:       "avanegas@vwys.com.mx",
      phone:       "+52 (55) 5258 1000",
      description: "One of Mexico's most prominent law firms, providing international assignments, compensation & benefits, employment law, immigration and tax & social security advice.",
      specialisms: ["International Assignments", "Compensation & Benefits", "Employment Law", "Immigration", "Tax & Social Security"],
    },

    // ── NETHERLANDS
    {
      id:          "nl-loyens-loeff",
      country:     "NL",
      countryName: "Netherlands",
      firm:        "Loyens & Loeff",
      city:        "Rotterdam",
      lng:         4.4792,
      lat:         51.9225,
      groups:      ["Europe"],
      website:     "https://www.loyensloeff.com",
      email:       "celia@loyensloeff.com",
      phone:       "+31 (10) 224 64 24",
      description: "Full-service Dutch law firm with deep expertise in employment law, employment tax, social insurances, pensions and expatriate activities.",
      specialisms: ["Employment Law", "Employment Tax", "Social Insurances", "Pensions", "International Assignments"],
    },

    // ── PORTUGAL
    {
      id:          "pt-bas",
      country:     "PT",
      countryName: "Portugal",
      firm:        "BAS – Sociedade de Advogados",
      city:        "Lisbon",
      lng:         -9.1491,
      lat:         38.7223,
      groups:      ["Europe"],
      website:     "https://www.bas.pt",
      email:       "geral@bas.pt",
      phone:       "+351 211 554 330",
      description: "Recognised as a leading Portuguese firm for labour law by Leaders League, and in seven practice areas by Best Lawyers in Portugal. Covers labour law, health law, administrative law, IP and more.",
      specialisms: ["Labour Law", "Health Law", "Administrative Law", "Intellectual Property"],
    },

    // ── SPAIN
    {
      id:          "es-ceca-magan",
      country:     "ES",
      countryName: "Spain",
      firm:        "Ceca Magán Abogados",
      city:        "Madrid",
      lng:         -3.6710,
      lat:         40.4361,
      groups:      ["Europe"],
      website:     "https://www.cecamagan.com/en",
      email:       "info@cecamagan.com",
      phone:       "+34 91 345 48 25",
      description: "Leading Spanish law firm with over 45 years of experience and offices in Madrid, Barcelona, Tenerife and Sevilla. The labour law department is one of the most prominent in Spain.",
      specialisms: ["Employment Law", "Corporate Law"],
    },

    // ── SWITZERLAND
    {
      id:          "ch-convinus",
      country:     "CH",
      countryName: "Switzerland",
      firm:        "CONVINUS Global Mobility Solutions",
      city:        "Zurich",
      lng:         8.5417,
      lat:         47.3728,
      groups:      ["Europe"],
      website:     "https://convinus.com",
      email:       "info@convinus.com",
      phone:       "+41 (0) 44 250 20 20",
      description: "The only global mobility provider in Switzerland offering a comprehensive range of services: international assignments, compensation & benefits, employment law, immigration, tax & social security, compliance, policies and relocation.",
      specialisms: ["International Assignments", "Compensation & Benefits", "Employment Law", "Immigration", "Tax & Social Security", "Relocation"],
    },

    // ── UNITED KINGDOM
    {
      id:          "gb-abbiss-cadres",
      country:     "GB",
      countryName: "United Kingdom",
      firm:        "Abbiss Cadres",
      city:        "London",
      lng:         -0.0872,
      lat:         51.5154,
      groups:      ["Europe"],
      website:     "https://abbisscadres.com",
      email:       "info@abbisscadres.com",
      phone:       "+44 (0) 203 051 5711",
      description: "Multi-disciplinary HR specialist firm based in the City of London, advising on employment law, compensation & benefits, international assignments and tax & social security. Three-time Times Best Law Firm.",
      specialisms: ["Employment Law", "Compensation & Benefits", "International Assignments", "Tax & Social Security"],
    },

  ],

  /* ─────────────────────────────────────────────
   * 4. GROUPS
   * ─────────────────────────────────────────────
   * Define the groups used in the members array above.
   * Each group gets a colour swatch in the legend.
   */
  groups: [
    { id: "Europe",       label: "Europe",        color: "#1a3a5c" },
    { id: "Latin America",label: "Latin America",  color: "#2d8a5e" },
    { id: "Asia Pacific", label: "Asia Pacific",   color: "#c8a951" },
    { id: "North America",label: "North America",  color: "#9b2335" },
    { id: "Africa",       label: "Africa",         color: "#8b5a2b" },
    { id: "Middle East",  label: "Middle East",    color: "#5a3e8b" },
  ],

};
