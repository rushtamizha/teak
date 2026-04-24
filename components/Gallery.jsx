"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { motion } from "framer-motion";
import { RiCameraLensLine, RiMapPin2Line, RiArrowRightLine, RiArrowLeftLine } from "react-icons/ri";

// Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const galleryImages = [
  {
    title: "Overwater Luxury",
    location: "Maldives",
    img: "/gallery/caption.jpg",
  },
  {
    title: "Misty Tea Plantations",
    location: "Munnar, Kerala",
    img: "/gallery/m_Munnar_main_tv_destination_img_1_l_630_946.avif",
  },
  {
    title: "French Heritage",
    location: "White Town, Pondicherry",
    img: "/gallery/150397901French-quarters.jpg",
  },
  {
    title: "Snowy Alpine Escapes",
    location: "Switzerland",
    img: "/gallery/discover-the-best-places-to-visit-in-switzerland-in-summer-2025-img-2127-960x768.webp",
  },
  {
    title: "Houseboat Romance",
    location: "Alleppey, Kerala",
    img: "/gallery/Alappuzha_Boat_Beauty_W.jpg",
  }
];

const Gallery = () => {
  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="flex items-center gap-2 text-[#007aff] text-[11px] font-black uppercase tracking-[0.3em] mb-4"
            >
              <RiCameraLensLine className="text-lg" /> Captured Memories
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-black text-[#253061] leading-tight"
            >
              Explore Our <span className="text-gray-400 italic font-serif font-medium">Visual Gallery</span>
            </motion.h2>
          </div>


        </div>

        {/* Flat Slider Swiper */}
        <div className="relative">
          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            spaceBetween={24}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            navigation={{
              nextEl: ".gallery-next",
              prevEl: ".gallery-prev",
            }}
            pagination={{
              clickable: true,
              el: ".gallery-pagination",
            }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="rounded-[2.5rem] !overflow-visible"
          >
            {galleryImages.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="relative h-[500px] rounded-[2.5rem] overflow-hidden group">
                  {/* Background Image */}
                  <img 
                    src={item.img} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  
                  {/* Glassmorphism Info Overlay */}
                  <div className="absolute hidden bottom-6 left-6 right-6 p-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-[2rem] translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <div className="flex items-center gap-2 text-white/80 mb-1">
                      <RiMapPin2Line className="text-[#007aff]" />
                      <span className="text-[10px] font-black uppercase tracking-widest">{item.location}</span>
                    </div>
                    <h3 className="text-xl font-bold text-white">{item.title}</h3>
                  </div>

                  {/* Subtle Gradient for better text readability on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#253061]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Pagination Container */}
          <div className="gallery-pagination mt-10 flex justify-center gap-2"></div>
        </div>
      </div>

      <style jsx global>{`
        .gallery-pagination .swiper-pagination-bullet {
          width: 12px;
          height: 6px;
          background: #253061;
          opacity: 0.2;
          border-radius: 10px;
          transition: all 0.3s ease;
        }
        .gallery-pagination .swiper-pagination-bullet-active {
          width: 32px;
          background: #007aff !important;
          opacity: 1;
        }
      `}</style>
    </section>
  );
};

export default Gallery;