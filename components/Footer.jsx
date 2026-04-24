"use client";

import React from "react";
import Link from "next/link";
import { 
  RiWhatsappLine, 
  RiFacebookCircleFill, 
  RiInstagramLine, 
  RiTwitterXLine,
  RiPhoneLine,
  RiMailLine,
  RiMapPin2Line
} from "react-icons/ri";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#253061] text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Column 1: Brand & Bio */}
          <div className="space-y-6">
            <h2 className="text-2xl font-black tracking-tighter">
              TEAKWOOD<span className="text-[#007aff]">HOLIDAYS</span>
            </h2>
            <p className="text-white/60 text-sm font-medium leading-relaxed">
              Specializing in crafting romantic journeys and personalized honeymoon experiences. 
              Built on the trusted legacy of Teakwood Travels.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center hover:bg-[#007aff] transition-all text-xl">
                <RiInstagramLine />
              </Link>
              <Link href="#" className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center hover:bg-[#007aff] transition-all text-xl">
                <RiFacebookCircleFill />
              </Link>
              <Link href="#" className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center hover:bg-[#007aff] transition-all text-xl">
                <RiWhatsappLine />
              </Link>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="font-black text-sm uppercase tracking-[0.2em] mb-8 text-[#007aff]">Quick Links</h4>
            <ul className="space-y-4 text-sm font-bold text-white/70">
              <li><Link href="/about" className="hover:text-white transition-colors">Our Story</Link></li>
              <li><Link href="/packages" className="hover:text-white transition-colors">Honeymoon Packages</Link></li>
              <li><Link href="/#services" className="hover:text-white transition-colors">Specialist Services</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Column 3: Top Destinations */}
          <div>
            <h4 className="font-black text-sm uppercase tracking-[0.2em] mb-8 text-[#007aff]">Destinations</h4>
            <ul className="space-y-4 text-sm font-bold text-white/70">
              <li><Link href="/packages" className="hover:text-white transition-colors">Pondicherry Specialist</Link></li>
              <li><Link href="/packages" className="hover:text-white transition-colors">Munnar Tea Gardens</Link></li>
              <li><Link href="/packages" className="hover:text-white transition-colors">Alleppey Houseboats</Link></li>
              <li><Link href="/packages" className="hover:text-white transition-colors">Maldives Luxury</Link></li>
            </ul>
          </div>

          {/* Column 4: Contact Details (From your File) */}
          <div className="space-y-6">
            <h4 className="font-black text-sm uppercase tracking-[0.2em] mb-8 text-[#007aff]">Reach Us</h4>
            <div className="space-y-4 text-sm font-medium text-white/70">
              <div className="flex items-start gap-3">
                <RiMapPin2Line className="text-[#007aff] text-xl shrink-0" />
                <p>Auroville Main Road, Kuyilapalayam, <br />Puducherry - 605101</p>
              </div>
              <div className="flex items-center gap-3">
                <RiPhoneLine className="text-[#007aff] text-xl shrink-0" />
                <p>+91 98845 46406</p>
                <p>+91 9994474395</p>
              </div>
              <div className="flex items-center gap-3">
                <RiMailLine className="text-[#007aff] text-xl shrink-0" />
                <p>teakwoodtravels@gmail.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Wepzite Credit */}
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[11px] font-bold text-white/30 uppercase tracking-widest">
            © {currentYear} Teakwood Holidays. All Rights Reserved.
          </p>
          
          <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-white/30">
            <span>Developed by</span>
            <Link 
              href="https://wepzite.in" 
              target="_blank"
              className="text-[#007aff] hover:text-white transition-colors font-black"
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