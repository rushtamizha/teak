

"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { FaWhatsapp, FaArrowRight, FaArrowLeft, FaGlobeAmericas, FaMapMarkedAlt } from "react-icons/fa";
import { RiMapPin2Line, RiTimeLine } from "react-icons/ri";
import { packages } from "@/data";

// Swiper Styles
import "swiper/css";
import "swiper/css/pagination";

const Packages = () => {
  const [activeTab, setActiveTab] = useState("Domestic");


  const currentPackages = packages.filter((item) => item.type === activeTab);

  const handleWhatsApp = (pkgName) => {
    const message = encodeURIComponent(`Hi Teakwood Holidays, I'm interested in the ${pkgName} package. Please share details.`);
    window.open(`https://wa.me/919884546406?text=${message}`, "_blank");
  };

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Toggle & Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
          <div className="max-w-xl">
            <span className="text-[#007aff] font-semibold uppercase tracking-[0.3em] text-[11px]">Featured Packages</span>
            <h2 className="text-3xl font-semibold text-[#253061] mt-2  font-serif">Curated Collections</h2>
          </div>

          <div className="inline-flex justify-between p-1.5 bg-white border border-gray-100 rounded-full shadow-sm">
            <button
              onClick={() => setActiveTab("Domestic")}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-full transition-all text-sm font-semibold ${activeTab === "Domestic" ? "bg-[#253061] text-white shadow-lg" : "text-gray-500 hover:bg-gray-50"}`}
            >
              <FaMapMarkedAlt /> Domestic
            </button>
            <button
              onClick={() => setActiveTab("International")}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-full transition-all text-sm font-semibold ${activeTab === "International" ? "bg-[#253061] text-white shadow-lg" : "text-gray-500 hover:bg-gray-50"}`}
            >
              <FaGlobeAmericas /> International
            </button>
          </div>
        </div>

        {/* Swiper Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.4 }}
          >
            <Swiper
              modules={[Autoplay, Pagination, Navigation]}
              spaceBetween={30}
              slidesPerView={1}
              breakpoints={{
                640: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
              autoplay={{ delay: 4000, disableOnInteraction: false }}
              pagination={{ clickable: true, el: '.custom-pagination' }}
              navigation={{ nextEl: '.next-btn', prevEl: '.prev-btn' }}
              className="pb-20 !overflow-visible"
            >
              {currentPackages.map((pkg, idx) => (
                <SwiperSlide key={idx}>
                  <div className="bg-white rounded-[2.5rem] overflow-hidden border border-gray-100 hover:shadow-[0_40px_80px_-20px_rgba(37,48,97,0.15)] transition-all duration-500 group h-full">
                    {/* Image Area */}
                    <div className="relative h-72 overflow-hidden">
                      <img 
                        src={pkg.image} 
                        alt={pkg.title} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute top-5 left-5 bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full flex items-center gap-2 shadow-sm">
                        <RiTimeLine className="text-[#007aff]" />
                        <span className="text-[11px] font-semibold text-[#253061] tracking-wider">{pkg.duration}</span>
                      </div>
                    </div>

                    {/* Content Area */}
                    <div className="p-8">
                      <div className="flex items-center gap-2 text-[#007aff] mb-2">
                        <RiMapPin2Line />
                        <span className="text-[11px] font-semibold uppercase tracking-widest">{pkg.location}</span>
                      </div>
                      <h3 className="text-2xl font-semibold text-[#253061] mb-3 group-hover:text-[#007aff] transition-colors">
                        {pkg.title}
                      </h3>
                      <p className="text-gray-500 font-medium text-sm leading-relaxed mb-8">
                        {pkg.description}
                      </p>

                      <button
                        onClick={() => handleWhatsApp(pkg.title)}
                        className="w-full flex items-center justify-center gap-3 bg-[#253061] text-white py-4 rounded-2xl font-semibold hover:bg-[#007aff] transition-all duration-300 shadow-lg shadow-[#253061]/10 group/btn"
                      >
                        <FaWhatsapp className="text-xl" />
                        Enquire Now
                        <FaArrowRight className="text-sm opacity-0 -ml-4 group-hover/btn:opacity-100 group-hover/btn:ml-0 transition-all" />
                      </button>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </motion.div>
        </AnimatePresence>

    
      </div>

      <style jsx global>{`
        .custom-pagination .swiper-pagination-bullet {
          width: 8px;
          height: 8px;
          background: #253061;
          opacity: 0.2;
          border-radius: 4px;
          transition: all 0.3s ease;
        }
        .custom-pagination .swiper-pagination-bullet-active {
          width: 30px;
          opacity: 1;
          background: #007aff;
        }
      `}</style>
    </section>
  );
};

export default Packages;