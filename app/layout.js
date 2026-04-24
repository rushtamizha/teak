import "./globals.css";
import { Inter, Montserrat } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const montserrat = Montserrat({ 
  subsets: ["latin"], 
  weight: ["400", "700", "900"],
  variable: "--font-montserrat" 
});

export const metadata = {
  title: {
    default: "Teakwood Holidays | Crafting Perfect Honeymoons",
    template: "%s | Teakwood Holidays",
  },
  description: "Premier honeymoon specialists in South India. Expertly curated packages for Pondicherry, Munnar, Maldives, and more. Experience local expertise and premium ground handling.",
  keywords: ["Honeymoon Packages", "Pondicherry Travel Agent", "South India Tours", "Teakwood Holidays", "Munnar Honeymoon"],
  authors: [{ name: "Teakwood Holidays" }],
  creator: "Wepzite",
  metadataBase: new URL("https://teakwoodholidays.com"), // Replace with your actual domain
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/logo.jpg", // This uses the file you mentioned in public
    apple: "/logo.jpg",
  },
  openGraph: {
    title: "Teakwood Holidays | Crafting Perfect Honeymoons",
    description: "Specialized honeymoon planning and luxury travel services across South India and international destinations.",
    url: "https://teakwoodholidays.com",
    siteName: "Teakwood Holidays",
    images: [
      {
        url: "/honey-moon-travel-india-banner.jpg", // Create a social sharing image in public folder
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  // SEO Local Business Data (Simplified)
  other: {
    "contact:address": "Auroville Main Road, Kuyilapalayam, Puducherry-605101",
    "contact:phone": "+91 9884546406",
  }
};

export default function RootLayout({ children }) {
  // Structured Data (JSON-LD) for Local Business SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    "name": "Teakwood Holidays",
    "image": "https://teakwoodholidays.com/logo.jpg",
    "@id": "https://teakwoodholidays.com",
    "url": "https://teakwoodholidays.com",
    "telephone": "+919884546406",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Auroville Main Road, Kuyilapalayam",
      "addressLocality": "Auroville, Puducherry",
      "postalCode": "605101",
      "addressCountry": "IN"
    },
    "description": "Premium honeymoon specialists providing curated travel experiences in South India.",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      "opens": "09:00",
      "closes": "20:00"
    }
  };

  return (
    <html lang="en" className={`${inter.variable} ${montserrat.variable} scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-inter antialiased text-[#253061] selection:bg-[#007aff] selection:text-white">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}