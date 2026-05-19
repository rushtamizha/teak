"use client";

import React from "react";
import Link from "next/link";
import { 
  RiWhatsappLine, 
  RiFacebookCircleFill, 
  RiInstagramLine,
  RiPhoneLine,
  RiMailLine,
  RiMapPin2Line
} from "react-icons/ri";
import Image from "next/image";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#253061] text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Column 1: Brand & Bio */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-3 group w-fit">
              <div className="relative w-14 h-14 transition-transform duration-500 group-hover:rotate-6 group-hover:border-blue-300 border-2 border-white rounded-full flex items-center justify-center overflow-hidden">
                <Image 
                  src="/logo.jpg" 
                  alt="Teakwood Holidays" 
                  fill
                  priority
                  className="object-cover rounded-full shadow-md"
                />
              </div>
              <div className="flex flex-col">
                {/* Fixed: Changed text color from dark blue to white for visibility */}
                <span className="font-semibold text-white tracking-wider">
                  TEAKWOOD HOLIDAYS
                </span>
                <span className="text-xs font-medium text-[#007aff]">
                  Crafting Perfect Honeymoons
                </span>
              </div>
            </Link>
            
            <p className="text-white/60 text-sm font-medium leading-relaxed">
              Specializing in crafting romantic journeys and personalized honeymoon experiences. 
              Built on the trusted legacy of Teakwood Travels.
            </p>
            
            <div className="flex gap-4">
              <Link href="https://www.instagram.com/teakwood_travels/?hl=en" aria-label="Instagram" className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center hover:bg-[#007aff] transition-all text-xl">
                <RiInstagramLine />
              </Link>
              <Link href="https://www.facebook.com/Teakwoodtravelsindia" aria-label="Facebook" className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center hover:bg-[#007aff] transition-all text-xl">
                <RiFacebookCircleFill />
              </Link>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-[0.2em] mb-8 text-[#007aff]">Quick Links</h4>
            <ul className="space-y-4 text-sm font-semibold text-white/70">
              <li><Link href="/about" className="hover:text-white transition-colors">Our Story</Link></li>
              <li><Link href="/packages" className="hover:text-white transition-colors">Honeymoon Packages</Link></li>
              <li><Link href="/#services" className="hover:text-white transition-colors">Specialist Services</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Column 3: Top Destinations */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-[0.2em] mb-8 text-[#007aff]">Destinations</h4>
            <ul className="space-y-4 text-sm font-semibold text-white/70">
              <li><Link href="/packages" className="hover:text-white transition-colors">Pondicherry Specialist</Link></li>
              <li><Link href="/packages" className="hover:text-white transition-colors">Munnar Tea Gardens</Link></li>
              <li><Link href="/packages" className="hover:text-white transition-colors">Alleppey Houseboats</Link></li>
              <li><Link href="/packages" className="hover:text-white transition-colors">Maldives Luxury</Link></li>
            </ul>
          </div>

          {/* Column 4: Contact Details */}
          <div className="space-y-6">
            <h4 className="font-semibold text-sm uppercase tracking-[0.2em] mb-8 text-[#007aff]">Reach Us</h4>
            <div className="space-y-4 text-sm font-medium text-white/70">
              <div className="flex items-start gap-3">
                <RiMapPin2Line className="text-[#007aff] text-xl shrink-0 mt-0.5" />
                <p>Auroville Main Road, Kuyilapalayam, <br />Puducherry - 605101</p>
              </div>
              <div className="flex items-start gap-3">
                <RiPhoneLine className="text-[#007aff] text-xl shrink-0 mt-0.5" />
                <div className="flex flex-col gap-1">
                  <a href="tel:+919884546406" className="hover:text-white transition-colors">+91 98845 46406</a>
                  <a href="tel:+919994474395" className="hover:text-white transition-colors">+91 99944 74395</a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <RiMailLine className="text-[#007aff] text-xl shrink-0" />
                <a href="mailto:teakwoodtravels@gmail.com" className="hover:text-white transition-colors">teakwoodtravels@gmail.com</a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Website Credit */}
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[11px] font-semibold text-white/30 uppercase tracking-widest text-center md:text-left">
            © {currentYear} Teakwood Holidays. All Rights Reserved.
          </p>
          
          <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-widest text-white/30">
            <span>Developed by</span>
            <Link 
              href="https://wepzite.in" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#007aff] hover:text-white transition-colors font-semibold"
            >
              Wepzite.in
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;