export interface ServiceItem {
  id: string;
  category: "Residential" | "Commercial";
  title: string;
  tagline: string;
  description: string;
  features: string[];
  deliverables: string[];
  image: string;
  scopeSummary: string;
}

export const servicesData: ServiceItem[] = [
  // Residential Services
  {
    id: "luxury-home-interiors",
    category: "Residential",
    title: "Luxury Home Interiors",
    tagline: "Sanctuaries of quiet elegance crafted around your personal rhythm.",
    description:
      "A complete turnkey approach to sovereign private residences. We harmonize spatial flow, bespoke joinery, acoustic privacy, and architectural lighting to transform expansive houses into warm, breathtaking sanctuaries.",
    features: [
      "Custom Italian marble & natural stone curation",
      "Concealed architectural cove & circadian lighting",
      "Bespoke wall panelling with brass & wood details",
      "Seamless climate and acoustic engineering integration",
    ],
    deliverables: [
      "Complete 3D spatial renders & lighting diagrams",
      "Comprehensive millwork & furniture schematics",
      "Turnkey material procurement & artisan supervision",
      "Post-occupancy acoustic & thermal audit",
    ],
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80",
    scopeSummary: "Full Residence Turnkey | Spatial Architecture | Custom Joinery",
  },
  {
    id: "apartment-interiors",
    category: "Residential",
    title: "Apartment Interiors",
    tagline: "Refined urban living optimized with spatial intelligence.",
    description:
      "Modern luxury apartments demand ingenious spatial zoning without sacrificing grandeur. We engineer fluid sightlines, concealed storage, and tailored palettes to make city homes feel vast, peaceful, and elevated.",
    features: [
      "Multi-functional architectural dividers & glass partitions",
      "Integrated floor-to-ceiling concealed storage suites",
      "Balcony-to-living biophilic fluid transitions",
      "Low-profile acoustic flooring and ceiling suspensions",
    ],
    deliverables: [
      "Ergonomic spatial efficiency layouts",
      "Custom millwork drawings for compact elegance",
      "Lighting choreography plans",
      "Comprehensive material sampling board",
    ],
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
    scopeSummary: "Penthouses & High-Rise Apartments | Intelligent Spatial Zoning",
  },
  {
    id: "villa-interiors",
    category: "Residential",
    title: "Villa Interiors",
    tagline: "Expansive architectural grandeur grounded in timeless materiality.",
    description:
      "Multi-level residences that dialogue with nature, light, and landscape. We treat villa interiors as an organic continuation of architecture, curating double-height atriums, courtyards, and grand entertaining suites.",
    features: [
      "Double-height feature walls in fluted travertine",
      "Indoor-outdoor courtyards with water reflections",
      "Grand sculptural staircases with bronze balustrades",
      "Private home theater, wine cellar, & wellness sanctuaries",
    ],
    deliverables: [
      "Multi-level MEP & HVAC coordinated plans",
      "Landscape & courtyard spatial integration",
      "Artisan stonework fabrication details",
      "Full turnkey execution oversight by Shivam",
    ],
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80",
    scopeSummary: "Estate Villas & Multi-Story Mansions | Architectural Craft",
  },
  {
    id: "bedroom-living-design",
    category: "Residential",
    title: "Bedroom & Living Room Design",
    tagline: "The emotional core of the home: intimate respite and gracious hosting.",
    description:
      "Living areas that invite connection and master suites engineered for restorative sleep. Every fabric, texture, and shadow is curated for tactile comfort, gentle acoustic buffering, and effortless hospitality.",
    features: [
      "Acoustic suede and fluted veneer headboard installations",
      "Custom walk-in wardrobe suites with illuminated displays",
      "Sculptural firebox features & conversation pit styling",
      "Tactile curated fabrics: bouclé, washed linen, raw silk",
    ],
    deliverables: [
      "Custom furniture craftsmanship drawings",
      "Fabrics, upholstery & drapery schedule",
      "Dim-to-warm architectural lighting matrix",
      "Curated art and sculptural accessorizing plan",
    ],
    image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=80",
    scopeSummary: "Master Suites | Formal Salons | Intimate Lounges",
  },
  {
    id: "modular-kitchen-design",
    category: "Residential",
    title: "Modular Kitchen Design",
    tagline: "Where culinary theatre meets precision German & Italian hardware.",
    description:
      "A seamless fusion of aesthetic purity and culinary ergonomics. Our kitchens balance waterfall quartzite islands, hidden appliance garages, silent Blum hardware, and zoned atmospheric illumination.",
    features: [
      "Exotic quartzite & porcelain heat-resistant worktops",
      "Handle-less motorized Blum / Grass servo-drive drawers",
      "Concealed spice pantries & breakfast prep stations",
      "Integrated downdraft ventilation & silent wine chillers",
    ],
    deliverables: [
      "Golden-triangle culinary workflow schematics",
      "Detailed plumbing, electrical & gas safety drawings",
      "Hardware specification & warranty dossier",
      "Cabinetry fabrication shop drawings",
    ],
    image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=80",
    scopeSummary: "Culinary Show Kitchens & Wet Kitchens | Precision Hardware",
  },

  // Commercial Services
  {
    id: "corporate-office-interiors",
    category: "Commercial",
    title: "Corporate Office Interiors",
    tagline: "Environments that express prestige, foster innovation, and inspire leadership.",
    description:
      "We design corporate headquarters that reflect institutional stature while boosting cognitive well-being. Our spaces blend executive boardroom discretion, biophilic central hubs, and high-performance acoustics.",
    features: [
      "Executive suites with hidden video conferencing tech",
      "Acoustic felt ceiling baffles with sound masking",
      "Demountable double-glazed acoustic partitions (STC 48+)",
      "Wellness-certified ergonomic posture furniture",
    ],
    deliverables: [
      "Comprehensive workplace occupancy strategy",
      "HVAC, electrical & structural MEP integration",
      "Brand identity architectural touchpoints",
      "Turnkey statutory compliance and handover documentation",
    ],
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
    scopeSummary: "Corporate Headquarters | Boardrooms | Executive Lounges",
  },
  {
    id: "retail-showroom-interiors",
    category: "Commercial",
    title: "Retail & Showroom Interiors",
    tagline: "Immersive sensory journeys that elevate brand desire and conversion.",
    description:
      "Retail spaces crafted as architectural stage sets. We use directional lighting, tactile materials, and calculated visitor trajectories to highlight products and turn shopping into a memorable brand ritual.",
    features: [
      "Curved Venetian plaster plinths and monolithic displays",
      "CRI 98+ museum-grade directional product lighting",
      "Discreet VIP private viewing suites & hospitality bars",
      "Impact-resistant terrazzo and polished concrete flooring",
    ],
    deliverables: [
      "Customer foot-traffic choreography diagrams",
      "Custom display fixture fabrication drawings",
      "Point-of-sale and security discreet integration",
      "Façade and window vitrine conceptualization",
    ],
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80",
    scopeSummary: "Haute Couture Boutiques | Luxury Showrooms | Flagship Stores",
  },
  {
    id: "hospitality-interiors",
    category: "Commercial",
    title: "Hospitality Interiors",
    tagline: "Atmospheric destinations that captivate guests from dawn to midnight.",
    description:
      "From boutique hotels to signature restaurants and wellness sanctuaries, we craft immersive environments infused with character, mood lighting, and unforgettable tactile finishes.",
    features: [
      "Bespoke bar counters crafted from backlit onyx & fluted brass",
      "Layered atmospheric lighting with circadian transition controls",
      "Heavy-duty commercial fabrics with residential luxury hand-feel",
      "Acoustic isolation between energetic and intimate dining zones",
    ],
    deliverables: [
      "Guest experience journey maps & moodboards",
      "Back-of-house vs. front-of-house operational zoning",
      "Custom hospitality lighting and FF&E schedules",
      "Health, fire, and safety egress coordination",
    ],
    image: "https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=1200&q=80",
    scopeSummary: "Fine Dining | Boutique Hotels | Cocktail Lounges & Spas",
  },
  {
    id: "workspace-planning",
    category: "Commercial",
    title: "Workspace Planning",
    tagline: "Agile, adaptable workplace ecosystems ready for the future of work.",
    description:
      "Strategic workplace programming that reconciles focus, collaboration, and social cohesion. We test and calibrate space ratios to maximize footprint efficiency while giving teams room to create.",
    features: [
      "Dynamic activity-based zoning (Quiet, Agile, Social, Focus)",
      "Modular power & data grid access under floating floors",
      "Soundproof phone booths and modular meeting pods",
      "Circadian biophilic green walls and air-purifying zones",
    ],
    deliverables: [
      "Workplace density & head-count growth projections",
      "Agile zoning layouts & furniture matrices",
      "Employee workflow & collaboration maps",
      "Facility management maintenance manuals",
    ],
    image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=80",
    scopeSummary: "Floorplan Optimization | Agile Zoning | Spatial Strategy",
  },
];
