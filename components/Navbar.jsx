

"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { 
  RiCompass3Line, 
  RiMapPin2Line, 
  RiServiceLine, 
  RiInformationLine, 
  RiWhatsappLine,
  RiArrowRightSLine,
  RiSendPlaneFill
} from "react-icons/ri";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/", icon: <RiCompass3Line />, desc: "Back to start" },
    { name: "Packages", href: "/packages", icon: <RiCompass3Line />, desc: "Curated romantic getaways" },
    { name: "Services", href: "/#services", icon: <RiServiceLine />, desc: "Specialized travel care" },
    { name: "About", href: "/about", icon: <RiInformationLine />, desc: "Our story and mission" },
    { name: "Contact", href: "/contact", icon: <RiSendPlaneFill />, desc: "Let's plan your trip" },
  ];

  const handleWhatsApp = () => {
    window.open(`https://wa.me/919884546406?text=Hi Teakwood Holidays, I'm interested in planning a honeymoon!`, "_blank");
  };

  const listVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.1, duration: 0.4, ease: "easeOut" }
    })
  };

  return (
    <header className="fixed w-full z-[100] top-0 px-4 sm:px-6">
      <motion.nav 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className={`mx-auto transition-all duration-500 relative mt-4 ${
          scrolled 
            ? "max-w-5xl rounded-full bg-white/90 backdrop-blur-md shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] py-4 border border-white" 
            : "max-w-5xl py-4 bg-white backdrop-blur-sm rounded-full border border-white/20"
        }`}
      >
        <div className="flex justify-between items-center px-5 ">
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-13 h-13 transition-transform duration-500 group-hover:rotate-6 group-hover:border-blue-300 border-2 border-white rounded-full">
              <Image 
                src="/logo.jpg" 
                alt="Teakwood Holidays" 
                width={70} 
                height={70} 
                priority
                className="object-cover rounded-full shadow-md"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-semibold  text-[#253061]">
                TEAKWOOD HOLIDAYS
              </span>
              <span className="text-xs font-medium  text-[#007aff]">
                Best Honeymoon Planners
              </span>
            </div>
          </Link>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href} 
                className={`px-5 py-2 text-[13px] font-medium rounded-full transition-all hover:bg-[#253061]/5 ${
                  scrolled ? 'text-[#253061]' : 'text-[#253061]'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <button
              onClick={handleWhatsApp}
              className={`ml-4 px-7 py-2.5 bg-[#253061] text-white rounded-full text-[13px] font-semibold shadow-lg hover:shadow-[#253061]/30 active:scale-95 transition-all`}
            >
              ENQUIRE
            </button>
          </div>

          {/* Mobile Toggle */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2.5 rounded-full bg-[#253061]/5 text-[#253061] transition-all active:scale-90"
          >
            {isOpen ? <HiX size={22} /> : <HiMenuAlt3 size={22} />}
          </button>
        </div>

        {/* Mobile Drawer */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 5, scale: 0.98 }}
              animate={{ opacity: 1, y: 15, scale: 1 }}
              exit={{ opacity: 0, y: 5, scale: 0.98 }}
              className="absolute top-full left-0 right-0 mx-auto w-full bg-white rounded-[2.5rem] shadow-[0_40px_80px_-20px_rgba(37,48,97,0.2)] border border-gray-100 overflow-hidden lg:hidden"
            >
              <div className="p-4 flex flex-col gap-1">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.name}
                    custom={i}
                    variants={listVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="flex items-center gap-4 p-3 rounded-2xl hover:bg-gray-50 group transition-all"
                    >
                      <div className="w-12 h-12 shrink-0 flex items-center justify-center rounded-xl bg-[#253061]/5 text-[#253061] group-hover:bg-[#007aff] group-hover:text-white transition-all">
                        {React.cloneElement(link.icon, { size: 22 })}
                      </div>
                      <div className="flex-1 text-left">
                        <p className="text-[15px] font-medium text-[#253061] leading-tight">{link.name}</p>
                        <p className="text-[11px] text-gray-500 font">{link.desc}</p>
                      </div>
                      <RiArrowRightSLine size={20} className="text-gray-300" />
                    </Link>
                  </motion.div>
                ))}
              </div>

              <div className="p-4 bg-gray-50/50 border-t border-gray-100">
                <button 
                  onClick={handleWhatsApp}
                  className="w-full py-4 bg-[#253061] text-white rounded-2xl font-semibold flex items-center justify-center gap-3 shadow-xl active:scale-[0.98] transition-all hover:bg-blue-600"
                >
                  <RiWhatsappLine size={20} className="text-[#007aff]" />
                  <span className="text-[14px]">Chat with our Experts</span>
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </header>
  );
};

export default Navbar;