export interface ProjectItem {
  id: string;
  title: string;
  category: "Residential" | "Commercial";
  type: string;
  location: string;
  area: string;
  year: string;
  image: string;
  additionalImages: string[];
  summary: string;
  concept: string;
  materials: string[];
  features: string[];
  clientTestimonialSnippet?: string;
}

export const projectsData: ProjectItem[] = [
  {
    id: "alabaster-sovereign-villa",
    title: "The Sovereign Villa",
    category: "Residential",
    type: "Luxury Family Villa",
    location: "Bengaluru, Karnataka",
    area: "6,800 sq.ft",
    year: "2024",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1400&q=85",
    additionalImages: [
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=80",
    ],
    summary:
      "A spacious luxury villa designed with natural stone, warm wood finishes, and large windows opening into private green courtyards.",
    concept:
      "Designed by Shivam to bring in plenty of natural sunlight and fresh air. Large glass doors and comfortable open rooms connect the indoor living areas directly to the garden.",
    materials: [
      "Natural Italian Marble",
      "Smoked Oak Wood",
      "Warm Bronze Metal Accents",
      "Smooth Seamless Flooring",
    ],
    features: [
      "High-ceiling living room with natural daylight",
      "Custom stone feature wall and modern fireplace",
      "Spacious walk-in dressing room and master wardrobe",
      "Large custom dining table made from solid wood for 14 guests",
    ],
    clientTestimonialSnippet:
      "Shivam and the PARAM SANTI team designed a calm, beautiful home where every detail was carefully planned and finished on time.",
  },
  {
    id: "aura-skyline-penthouse",
    title: "Skyline Duplex Penthouse",
    category: "Residential",
    type: "Duplex Penthouse",
    location: "Worli, Mumbai",
    area: "4,600 sq.ft",
    year: "2024",
    image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1400&q=85",
    additionalImages: [
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&w=1200&q=80",
    ],
    summary:
      "A sea-facing duplex penthouse featuring clean white marble, warm champagne metal trims, and gentle curved ceilings.",
    concept:
      "Planned around open sea views and natural evening light. The two floors are connected by an elegant custom spiral staircase, separating the open living room from private family bedrooms.",
    materials: [
      "White Statuario Marble",
      "Champagne Gold Metal Trims",
      "Soft Fabric Wall Paneling",
      "Light Natural Wood",
    ],
    features: [
      "Elegant custom spiral staircase connecting both floors",
      "Hidden bar area with sliding marble panels",
      "Master bedroom with private balcony and spa bathtub",
      "Smart mood lighting that changes smoothly from day to night",
    ],
    clientTestimonialSnippet:
      "Living here feels peaceful, open, and comfortable. Shivam made sure every corner of our home was built to perfection.",
  },
  {
    id: "nexus-corporate-headquarters",
    title: "Nexus Corporate Headquarters",
    category: "Commercial",
    type: "Corporate Office",
    location: "CyberCity, Gurugram",
    area: "14,500 sq.ft",
    year: "2024",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1400&q=85",
    additionalImages: [
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1200&q=80",
    ],
    summary:
      "A modern corporate office with quiet meeting rooms, comfortable team workspaces, and natural indoor greenery.",
    concept:
      "Designed to create a calm, focused work environment. Soundproof glass cabins, warm wooden panels, and balanced lighting keep employees comfortable and productive all day.",
    materials: [
      "Sound-Absorbing White Oak Panels",
      "Acoustic Double-Glazed Glass",
      "Matte Graphite Metal Trims",
      "Durable Terrazzo Flooring",
    ],
    features: [
      "24-seat boardroom with built-in video conference technology",
      "Indoor green garden with natural plants in the reception lounge",
      "Private executive cabins with personal meeting areas and restrooms",
      "Quick meeting booths with high-speed power and data connections",
    ],
    clientTestimonialSnippet:
      "Our clients and team love the new office. It looks professional, feels welcoming, and provides great privacy for confidential discussions.",
  },
  {
    id: "elysian-minimalist-residence",
    title: "Elysian Modern Apartment",
    category: "Residential",
    type: "Luxury Apartment",
    location: "Jubilee Hills, Hyderabad",
    area: "3,200 sq.ft",
    year: "2023",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1400&q=85",
    additionalImages: [
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=1200&q=80",
    ],
    summary:
      "A clean and modern apartment with smooth textured walls, natural elm wood cabinets, and clutter-free living areas.",
    concept:
      "Designed for a family that loves clean, simple spaces. Every room has plenty of built-in storage to keep surfaces tidy, with warm lighting that highlights art and family photos.",
    materials: [
      "Smooth Textured Wall Plaster",
      "Natural Elm Wood Furniture",
      "Grey Basalt Countertops",
      "Soft Wool Carpets & Rugs",
    ],
    features: [
      "Clean frameless doors and smooth wall finishes",
      "Warm spotlight niches for paintings and sculptures",
      "Hidden ceiling speakers for background music",
      "Custom-made linen sofa set designed for relaxed family lounging",
    ],
  },
  {
    id: "atelier-verve-flagship",
    title: "Verve Fashion Boutique",
    category: "Commercial",
    type: "Fashion Showroom & Store",
    location: "South Extension, New Delhi",
    area: "3,800 sq.ft",
    year: "2024",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1400&q=85",
    additionalImages: [
      "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=1200&q=80",
    ],
    summary:
      "An elegant boutique showroom with soft arched doorways, illuminated display counters, and spacious VIP trial rooms.",
    concept:
      "Designed to offer customers a comfortable and memorable shopping experience. Wide open walkways, soft fabrics, and warm lighting showcase clothing and accessories at their best.",
    materials: [
      "Illuminated Stone Display Tables",
      "Curved Plaster Wall Arches",
      "Aged Brass Hanging Racks",
      "Velvet Curtains & Upholstery",
    ],
    features: [
      "Curved display arches with gentle floor lighting",
      "Spacious VIP trial rooms with full-length daylight mirrors",
      "Custom marble billing and reception desk",
      "Neatly organized back-office storage and inventory room",
    ],
  },
  {
    id: "monolith-gourmet-kitchen",
    title: "Modern Island Kitchen",
    category: "Residential",
    type: "Modular Kitchen & Dining",
    location: "Vasant Vihar, New Delhi",
    area: "1,100 sq.ft",
    year: "2024",
    image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1400&q=85",
    additionalImages: [
      "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=1200&q=80",
    ],
    summary:
      "A large kitchen island made of natural quartzite stone, paired with rich walnut wood cabinets and a separate back pantry.",
    concept:
      "Designed for easy family cooking and hosting friends. Heavy cooking and prep work happen in a neat back pantry, keeping the main kitchen island clean, open, and inviting.",
    materials: [
      "Scratch-Resistant Quartzite Stone",
      "Walnut Wood Cabinets",
      "Soft-Close German Drawer Channels",
      "Tinted Bronze Glass Backsplashes",
    ],
    features: [
      "Breakfast counter with comfortable seating for six people",
      "Hidden appliance garage to keep mixers and toasters out of sight",
      "Built-in smokeless cooking hob with powerful exhaust",
      "Built-in glass chiller and beverage cabinet",
    ],
  },
  {
    id: "santi-wellness-sanctuary",
    title: "Santi Wellness Resort & Spa",
    category: "Commercial",
    type: "Wellness Spa & Resort",
    location: "Udaipur, Rajasthan",
    area: "8,500 sq.ft",
    year: "2023",
    image: "https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=1400&q=85",
    additionalImages: [
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80",
    ],
    summary:
      "A peaceful wellness retreat built with natural brick arches, gentle indoor water fountains, and open garden courtyards.",
    concept:
      "Inspired by traditional Indian courtyards and stone architecture. Natural breeze, soft sunlight through carved stone screens, and earthy materials create an immediate feeling of relaxation.",
    materials: [
      "Natural Terracotta Bricks",
      "Smooth Kotah Stone Flooring",
      "Solid Reclaimed Teak Wood",
      "Handmade Brass Lanterns & Faucets",
    ],
    features: [
      "Indoor warm water therapy pools beneath brick arches",
      "Private massage rooms opening into quiet bamboo courtyards",
      "Quiet relaxation lounge with comfortable daybeds",
      "Herbal tea and welcome counter with handcrafted copper bowls",
    ],
  },
  {
    id: "celeste-primary-suite",
    title: "Celeste Master Bedroom Suite",
    category: "Residential",
    type: "Master Bedroom & Lounge",
    location: "Koregaon Park, Pune",
    area: "1,850 sq.ft",
    year: "2024",
    image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1400&q=85",
    additionalImages: [
      "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1617325247661-675ab4b64ae2?auto=format&fit=crop&w=1200&q=80",
    ],
    summary:
      "A cozy master bedroom with soft velvet wall panels, a walk-in wardrobe, and a freestanding stone bathtub.",
    concept:
      "Designed as a quiet, calming retreat after a long day. Gentle warm lighting and sound-absorbing fabric walls make it easy to sleep deeply and wake up refreshed.",
    materials: [
      "Soft Silk & Fabric Wall Panels",
      "Grey Marble Bathroom Tiles",
      "Smoked Glass Wardrobe Doors",
      "Smooth Stone Soaking Bathtub",
    ],
    features: [
      "Custom king-size upholstered bed with built-in phone charging ports",
      "Attached bathroom with smart glass that turns frosted with a switch",
      "Walk-in dressing room with organized jewelry drawers and safe",
      "Direct sliding door opening to a private terrace garden",
    ],
  },
];
