export const studioMetadata = {
  name: "PARAM SANTI",
  tagline: "Designing Spaces. Creating Experiences.",
  description:
    "PARAM SANTI is an interior design studio led by Shivam. We create beautiful and comfortable spaces for homes and businesses, including villas, apartments, and corporate offices.",
  url: "https://paramsanti.com",
  founder: "Shivam",
  telephone: "+91 97955 34562",
  email: "Shivamgkp220@gmail.com",
  address: {
    streetAddress: "Studio PARAM SANTI",
    addressLocality: "Lucknow and Gorakhpur",
    addressRegion: "Uttar Pradesh",
    postalCode: "273001",
    addressCountry: "IN",
  },
  geo: {
    latitude: "26.7606",
    longitude: "83.3732",
  },
  openingHours: "Mo-Sa 10:00-19:00",
  priceRange: "₹₹₹₹",
  serviceKeywords: [
    "Interior designers in Lucknow",
    "Interior designers in Gorakhpur",
    "Luxury home interior design",
    "Residential interior designers",
    "Commercial interior designers",
    "Office interior design",
    "Villa interiors",
    "Modular kitchen design",
    "Corporate workspace planning",
    "PARAM SANTI Shivam interior studio",
  ],
};

export function generateStudioJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "InteriorDesignStudio",
        "@id": `${studioMetadata.url}/#studio`,
        name: studioMetadata.name,
        alternateName: "PARAM SANTI Interior Studio",
        description: studioMetadata.description,
        url: studioMetadata.url,
        telephone: studioMetadata.telephone,
        email: studioMetadata.email,
        priceRange: studioMetadata.priceRange,
        image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=80",
        address: {
          "@type": "PostalAddress",
          streetAddress: studioMetadata.address.streetAddress,
          addressLocality: studioMetadata.address.addressLocality,
          addressRegion: studioMetadata.address.addressRegion,
          postalCode: studioMetadata.address.postalCode,
          addressCountry: studioMetadata.address.addressCountry,
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: studioMetadata.geo.latitude,
          longitude: studioMetadata.geo.longitude,
        },
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            opens: "10:00",
            closes: "19:00",
          },
        ],
        founder: {
          "@type": "Person",
          name: studioMetadata.founder,
          jobTitle: "Founder & Lead Designer",
        },
        knowsAbout: studioMetadata.serviceKeywords,
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Interior Design Services",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Residential Interior Design",
                description: "Complete interior design for villas, penthouses, and apartments.",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Commercial & Office Interior Design",
                description: "Modern interior design for corporate offices, retail stores, showrooms, and cafés.",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Modular Kitchens & Living Rooms",
                description: "Practical and modern modular kitchens, living rooms, and custom storage solutions.",
              },
            },
          ],
        },
      },
    ],
  };
}
