import { Cormorant_Garamond, Jost } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

const jost = Jost({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-jost",
  display: "swap",
});

// ─── Site-wide constants ────────────────────────────────────────────────────
const SITE_NAME = "Teakwood Holidays";
const SITE_URL = "https://www.teakwoodholidays.com"; // update to production domain
const SITE_DESCRIPTION =
  "Teakwood Holidays crafts bespoke honeymoon and leisure travel experiences across South India and internationally. Specialists in Pondicherry, Munnar, Alleppey, Maldives, Bali & more. 500+ happy couples served.";
const TWITTER_HANDLE = "@teakwoodholidays"; // update if you have one
const OG_IMAGE = `${SITE_URL}/packages/ao1ukcs09a8qf0toshefyhb6swcz_italy and france honeymoon couple-min.webp`; // place a 1200×630 image in /public

// ─── JSON-LD Schemas ─────────────────────────────────────────────────────────

/** TravelAgency structured data */
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": ["TravelAgency", "LocalBusiness"],
  name: SITE_NAME,
  alternateName: "Teakwood Travels",
  description: SITE_DESCRIPTION,
  url: SITE_URL,
  logo: {
    "@type": "ImageObject",
    url: `${SITE_URL}/logo.png`,
    width: 400,
    height: 100,
  },
  image: OG_IMAGE,
  telephone: ["+919884546406", "+919994474395", "+914132969395"],
  email: ["teakwoodtravels@gmail.com", "Karuna@teakwoodtravels.com"],
  address: {
    "@type": "PostalAddress",
    streetAddress: "Auroville Main Road, Kuyilapalayam",
    addressLocality: "Puducherry",
    addressRegion: "Puducherry",
    postalCode: "605101",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 11.9416,
    longitude: 79.8083,
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ],
    opens: "09:00",
    closes: "20:00",
  },
  currenciesAccepted: "INR",
  paymentAccepted: "Cash, UPI, Bank Transfer, Credit Card",
  priceRange: "₹₹",
  areaServed: [
    "India",
    "Pondicherry",
    "Kerala",
    "Rajasthan",
    "Himachal Pradesh",
    "Kashmir",
    "Andaman",
    "Goa",
    "Meghalaya",
    "Maldives",
    "Bali",
    "Dubai",
    "Thailand",
    "Bangkok",
    "Sri Lanka",
    "Indonesia",
    "Singapore",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Honeymoon & Leisure Tour Packages",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "TouristTrip",
          name: "Misty Munnar Honeymoon",
          description:
            "Explore misty tea gardens, Eravikulam National Park, and romantic lakeside photo stops.",
          touristType: "Couple",
          itinerary: {
            "@type": "ItemList",
            name: "Munnar 3D/2N Itinerary",
          },
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "TouristTrip",
          name: "French Vibes & Beach Bliss — Pondicherry",
          description:
            "Signature specialty. Handpicked stays in White Town and romantic coastal circuits.",
          touristType: "Couple",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "TouristTrip",
          name: "Alleppey Houseboat Romance",
          description:
            "A private houseboat journey through serene backwaters with exclusive on-board dining.",
          touristType: "Couple",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "TouristTrip",
          name: "Kashmir: Heaven on Earth",
          description:
            "Snow, gardens, and houseboats create a strong emotional appeal for couples. 6D/5N.",
          touristType: "Couple",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "TouristTrip",
          name: "Andaman Island Romance",
          description:
            "India's closest feel to a Maldives-type honeymoon with crystal-clear water and private beaches.",
          touristType: "Couple",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "TouristTrip",
          name: "Goa Beach & Nightlife Combo",
          description:
            "A perfect mix of beach, nightlife, and relaxation featuring luxury resorts and private experiences.",
          touristType: "Couple",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "TouristTrip",
          name: "Manali & Kasol Nature Chill",
          description:
            "Snow and cozy stays for a classic romantic vibe with offbeat cafés and riverside charm.",
          touristType: "Couple",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "TouristTrip",
          name: "Royal Udaipur Heritage",
          description:
            "Royal palaces and lakes create a very romantic setting. Ideal for luxury heritage honeymoons.",
          touristType: "Couple",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "TouristTrip",
          name: "Dreamy Meghalaya",
          description:
            "Waterfalls, clouds, and greenery with unique experiences like living root bridges.",
          touristType: "Couple",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "TouristTrip",
          name: "Golden Jaisalmer Desert",
          description:
            "Golden deserts and luxury camps with unique candlelight dinners in the desert.",
          touristType: "Couple",
        },
      },
    ],
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    bestRating: "5",
    worstRating: "1",
    ratingCount: "500",
    reviewCount: "80",
  },
  review: [
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Yuva Raj" },
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      reviewBody:
        "From the very beginning, everything was perfectly planned. Jearaj's exceptional coordination made the journey smooth and enjoyable. Teakwood Travels exceeded our expectations.",
      datePublished: "2025-12-17",
    },
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Indra Balaji" },
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      reviewBody:
        "Ubud and Bali were absolutely iconic. Every recommendation was a perfect fit and the seamless planning let me fully immerse in the experience.",
      datePublished: "2024-09-18",
    },
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Gattu R" },
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      reviewBody:
        "From initial planning to the very last detail, your attention was impeccable. Seamless coordination made the journey entirely stress-free.",
      datePublished: "2024-10-17",
    },
  ],
  founder: {
    "@type": "Person",
    name: "Jearaj",
    jobTitle: "Founder & Director",
  },
  employee: [
    { "@type": "Person", name: "Karunagaran", jobTitle: "Travel Specialist" },
    { "@type": "Person", name: "Subhash", jobTitle: "Visa & Ticketing Expert" },
    {
      "@type": "Person",
      name: "Siva Parvathi",
      jobTitle: "Tour Coordinator",
    },
  ],
  knowsAbout: [
    "Honeymoon Planning",
    "Romantic Travel",
    "South India Tourism",
    "Pondicherry Tourism",
    "Kerala Tourism",
    "Visa Assistance",
    "International Tour Packages",
    "Domestic Tour Packages",
    "Hotel Booking",
    "Airport Transfers",
    "Houseboat Booking Alleppey",
  ],
};

/** WebSite schema with Sitelinks SearchBox */
const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE_NAME,
  url: SITE_URL,
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${SITE_URL}/packages?q={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
};

/** BreadcrumbList for homepage */
const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: SITE_URL,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Honeymoon Packages",
      item: `${SITE_URL}/packages`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Services",
      item: `${SITE_URL}/services`,
    },
    {
      "@type": "ListItem",
      position: 4,
      name: "Contact",
      item: `${SITE_URL}/contact`,
    },
  ],
};

/** FAQ schema targeting high-intent honeymoon & travel queries */
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What honeymoon packages does Teakwood Holidays offer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Teakwood Holidays offers a wide range of honeymoon packages including Misty Munnar Honeymoon (3D/2N), French Vibes & Beach Bliss in Pondicherry (3D/2N), Alleppey Houseboat Romance (3D/2N), Kashmir Heaven on Earth (6D/5N), Andaman Island Romance (6D/5N), Goa Beach & Nightlife Combo (4D/3N), Manali & Kasol Nature Chill (5D/4N), Royal Udaipur Heritage (4D/3N), Dreamy Meghalaya (6D/5N), and Golden Jaisalmer Desert (3D/2N).",
      },
    },
    {
      "@type": "Question",
      name: "Is Teakwood Holidays the best honeymoon travel agency in Pondicherry?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Teakwood Holidays, built on the trusted foundation of Teakwood Travels, is a specialist honeymoon travel agency located on Auroville Main Road, Pondicherry. With 500+ happy couples, a 4.9/5 Google rating, and deep local expertise in Pondicherry's White Town and coastal areas, they are widely regarded as the top honeymoon travel agency in Pondicherry.",
      },
    },
    {
      "@type": "Question",
      name: "Do you arrange international honeymoon packages like Maldives, Bali, or Dubai?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Teakwood Holidays provides complete end-to-end international honeymoon packages including Maldives water villa stays, Bali and Ubud itineraries, Dubai city tours, and Thailand trips. Services include visa assistance, flight booking, hotel accommodation, and 24/7 on-trip support.",
      },
    },
    {
      "@type": "Question",
      name: "Does Teakwood Holidays help with visa services?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Teakwood Travels offers visa assistance for Japan, USA, UK, Schengen, Singapore, Malaysia, Dubai, China, Morocco, and many other countries. Their experienced team guides you through the documentation process to ensure smooth and quick approval.",
      },
    },
    {
      "@type": "Question",
      name: "Can I get a customized honeymoon itinerary?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely. Teakwood Holidays does not use fixed templates. Every honeymoon journey is tailored to your specific expectations, preferences, and budget — from handpicked hotel stays to romantic private arrangements and personalised itineraries.",
      },
    },
    {
      "@type": "Question",
      name: "Where is Teakwood Holidays located?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Teakwood Holidays is located at Auroville Main Road, Kuyilapalayam, Puducherry – 605101. They are conveniently situated on the Auroville main road, making them easily accessible for visitors staying in Auroville without needing to travel to central Pondicherry.",
      },
    },
    {
      "@type": "Question",
      name: "How do I contact Teakwood Holidays to plan my honeymoon?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You can reach Teakwood Holidays at +91 98845 46406, +91 99944 74395, or +91 4132969395. You can also email teakwoodtravels@gmail.com or Karuna@teakwoodtravels.com. The team offers WhatsApp-based quick inquiries and personalized itineraries within minutes.",
      },
    },
    {
      "@type": "Question",
      name: "Do you provide private cab and airport transfer services?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Teakwood Holidays offers door-to-door private cab services with reliable, experienced drivers for stress-free travel. Airport transfers, local sightseeing cabs, and intercity transport are all available as part of their comprehensive travel solutions.",
      },
    },
  ],
};

// ─── Root Metadata Export ─────────────────────────────────────────────────────
export const metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: `${SITE_NAME} | Honeymoon & Leisure Travel Specialists — Pondicherry`,
    template: `%s | ${SITE_NAME}`,
  },

  description: SITE_DESCRIPTION,

  keywords: [
    // Core brand
    "Teakwood Holidays",
    "Teakwood Travels",
    "Teakwood Travels Pondicherry",
    // High-intent honeymoon
    "honeymoon packages India",
    "best honeymoon travel agent Pondicherry",
    "honeymoon packages Pondicherry",
    "romantic travel packages South India",
    "honeymoon specialists India",
    // Destination-specific
    "Munnar honeymoon package",
    "Alleppey houseboat honeymoon",
    "Pondicherry honeymoon package",
    "Kashmir honeymoon package",
    "Andaman honeymoon package",
    "Goa honeymoon package",
    "Manali honeymoon package",
    "Udaipur honeymoon package",
    "Jaisalmer honeymoon package",
    "Meghalaya honeymoon package",
    // International
    "Maldives honeymoon package India",
    "Bali honeymoon package",
    "Dubai tour package",
    "Thailand tour package",
    // Services
    "visa assistance Pondicherry",
    "Japan visa Pondicherry",
    "Schengen visa Pondicherry",
    "travel agent Auroville",
    "private cab Pondicherry",
    "customised tour package Pondicherry",
    // Long-tail
    "best travel agent near Auroville",
    "honeymoon travel agency South India",
    "affordable honeymoon packages Kerala",
    "French Quarter escape Pondicherry honeymoon",
  ],

  authors: [{ name: "Teakwood Holidays", url: SITE_URL }],
  creator: "Teakwood Holidays",
  publisher: "Teakwood Holidays",
  category: "Travel & Tourism",

  // ── Open Graph ──────────────────────────────────────────────────────────────
  openGraph: {
    type: "website",
    locale: "en_IN",
    alternateLocale: ["ta_IN"],
    url: SITE_URL,
    siteName: SITE_NAME,
    title: "Teakwood Holidays — Crafting Perfect Honeymoons Since 2010",
    description:
      "500+ happy couples. 12+ destinations. South India's most trusted honeymoon specialists. Experts in Pondicherry, Munnar, Alleppey, Maldives, Bali & more. Get your personalised itinerary in minutes.",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Teakwood Holidays — Romantic honeymoon and leisure travel specialists in Pondicherry, South India",
        type: "image/jpeg",
      },
    ],
  },

  // ── Twitter / X Card ─────────────────────────────────────────────────────────
  twitter: {
    card: "summary_large_image",
    site: TWITTER_HANDLE,
    creator: TWITTER_HANDLE,
    title: "Teakwood Holidays — Crafting Perfect Honeymoons",
    description:
      "South India's honeymoon specialists. Pondicherry · Munnar · Alleppey · Maldives · Bali. 500+ happy couples. Plan yours today.",
    images: [OG_IMAGE],
  },

  // ── Robots ───────────────────────────────────────────────────────────────────
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // ── Canonical & Alternates ───────────────────────────────────────────────────
  alternates: {
    canonical: SITE_URL,
    languages: {
      "en-IN": SITE_URL,
      "x-default": SITE_URL,
    },
  },

  // ── Verification tags (fill in after Search Console / Bing setup) ────────────
  verification: {
    google: "REPLACE_WITH_GOOGLE_SEARCH_CONSOLE_TOKEN",
    yandex: "REPLACE_WITH_YANDEX_TOKEN",
    bing: "REPLACE_WITH_BING_WEBMASTER_TOKEN",
  },

  // ── App-level meta ───────────────────────────────────────────────────────────
  applicationName: SITE_NAME,
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },

  // ── Icons (place files in /public/icons/) ────────────────────────────────────
  icons: {
    icon: [
      { url: "/logo.jpg", sizes: "16x16", type: "image/png" },
      { url: "/logo.jpg", sizes: "32x32", type: "image/png" },
      {
        url: "/logo.jpg",
        sizes: "96x96",
        type: "image/png",
      },
    ],
    apple: [
      {
        url: "/logo.jpg",
        sizes: "180x180",
        type: "image/png",
      },
    ],
    other: [
      {
        rel: "mask-icon",
        url: "/logo.jpg",
        color: "#1a1209",
      },
    ],
  },

  // ── Web App Manifest ─────────────────────────────────────────────────────────
  manifest: "/site.webmanifest",

  // ── Theme colors ─────────────────────────────────────────────────────────────
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fdf8f0" },
    { media: "(prefers-color-scheme: dark)", color: "#1a1209" },
  ],
};

// ─── Viewport Export (Next.js 14+) ────────────────────────────────────────────
export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#1a1209",
};

// ─── Root Layout ─────────────────────────────────────────────────────────────
export default function RootLayout({ children }) {
  return (
    <html
      lang="en-IN"
      className={`${cormorant.variable} ${jost.variable}`}
      suppressHydrationWarning
    >
      <head>
        {/* ── Preconnect to critical origins ── */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

        {/* ── DNS prefetch for analytics & maps ── */}
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://maps.googleapis.com" />
        <link rel="dns-prefetch" href="https://wa.me" />

        {/* ── Geo meta for local SEO ── */}
        <meta name="geo.region" content="IN-PY" />
        <meta name="geo.placename" content="Puducherry, India" />
        <meta name="geo.position" content="11.9416;79.8083" />
        <meta name="ICBM" content="11.9416, 79.8083" />

        {/* ── Business contact meta ── */}
        <meta name="contact" content="teakwoodtravels@gmail.com" />
        <meta name="reply-to" content="teakwoodtravels@gmail.com" />

        {/* ── Language & content ── */}
        <meta httpEquiv="content-language" content="en-IN" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
        <meta name="rating" content="general" />
        <meta name="coverage" content="Worldwide" />
        <meta name="distribution" content="Global" />
        <meta name="target" content="all" />

        {/* ── WhatsApp / iMessage link preview (supplement to OG) ── */}
        <meta
          property="og:phone_number"
          content="+919884546406"
        />
        <meta property="business:contact_data:locality" content="Puducherry" />
        <meta property="business:contact_data:region" content="Puducherry" />
        <meta property="business:contact_data:country_name" content="India" />
        <meta
          property="business:contact_data:email"
          content="teakwoodtravels@gmail.com"
        />
        <meta
          property="business:contact_data:website"
          content={SITE_URL}
        />

        {/* ── JSON-LD Structured Data ── */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(breadcrumbSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqSchema),
          }}
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}