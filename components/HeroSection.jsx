"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import { 
  RiWhatsappLine, 
  RiMapPin2Line, 
  RiUser3Line, 
  RiCalendarCheckLine, 
  RiTimeLine,
  RiArrowRightUpLine
} from "react-icons/ri";

// Swiper Styles
import 'swiper/css';
import 'swiper/css/effect-fade';

const HeroWithForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    destination: "",
    date: "",
    duration: ""
  });

  const slides = [
    { img: "https://res.cloudinary.com/the-romantic-tourist/image/upload/v1470837942/uoxpctrtzcvjkpdc5xkq.jpg", title: "Munnar" },
    { img: "https://staging.sntravel.co.uk/wp-content/uploads/2019/01/COUPLE-BOAT.jpg", title: "Pondicherry" },
    { img: "https://www.sntravel.co.uk/wp-content/uploads/2019/02/ROMANCE-BEACH-DINNER-COUPLE.jpg", title: "Alleppey" },
  ];

  const handleWhatsAppInquiry = (e) => {
    e.preventDefault();
    const phoneNumber = "919884546406"; 
    const message = `*New Inquiry: Teakwood Holidays*%0A*Name:* ${formData.name}%0A*Destination:* ${formData.destination}%0A*Travel Date:* ${formData.date}%0A*Duration:* ${formData.duration}%0A*Phone:* ${formData.phone}`;
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  return (
    <section className="relative min-h-screen w-full flex items-center pt-30 pb-12 overflow-hidden bg-[#253061]">
      {/* Background Cinematic Slider */}
      <div className="absolute inset-0 z-0">
        <Swiper
          modules={[Autoplay, EffectFade]}
          effect="fade"
          autoplay={{ delay: 6000 }}
          loop
          className="h-full w-full"
        >
          {slides.map((slide, i) => (
            <SwiperSlide key={i}>
              <div className="relative h-full w-full">
                <img src={slide.img} alt={slide.title} className="h-full w-full object-cover opacity-90 scale-105" />
                <div className="absolute  inset-0 bg-gradient-to-r from-[#253061]/60 via-[#253061]/10 to-transparent" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left: Branding & Copy */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-7 text-white"
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="w-12 h-[2px] bg-[#007aff]" />
              <span className="text-[#007aff] font-black uppercase tracking-[0.3em] text-[11px]">Best Honeymoon Planners</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black leading-[1.05] mb-8">
              Romantic Journeys <br /> 
              <span className="   from-white ">Beyond Maps.</span>
            </h1>
            <p className="text-lg text-white/70 max-w-xl font-medium leading-relaxed mb-10">
              Expertly curated honeymoon experiences across South India. Specialists in Pondicherry, Munnar, and Alleppey.
            </p>
            <div className="flex flex-wrap gap-6">
              <div className="flex flex-col">
                <span className="text-2xl font-black">12+</span>
                <span className="text-[10px] uppercase font-bold text-white/40 tracking-widest">Destinations</span>
              </div>
              <div className="h-10 w-[1px] bg-white/10 hidden sm:block" />
              <div className="flex flex-col">
                <span className="text-2xl font-black">24/7</span>
                <span className="text-[10px] uppercase font-bold text-white/40 tracking-widest">Local Support</span>
              </div>
            </div>
          </motion.div>

          {/* Right: Premium Form Container */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="lg:col-span-5 bg-white rounded-[3rem] p-8 lg:p-10 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.4)] relative"
          >
            <div className="mb-8">
              <h3 className="text-[#253061] text-2xl font-black">Quick Inquiry</h3>
              <p className="text-gray-400 text-[13px] font-bold mt-1">Personalized itineraries in minutes</p>
            </div>

            <form onSubmit={handleWhatsAppInquiry} className="space-y-4">
              {/* Name Field */}
              <div className="relative">
                <RiUser3Line className="absolute left-4 top-1/2 -translate-y-1/2 text-[#007aff]" />
                <input 
                  required
                  type="text" 
                  placeholder="Full Name"
                  className="w-full pl-11 pr-4 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:bg-white focus:border-[#007aff] outline-none transition-all text-[14px] font-bold text-[#253061]"
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>

              {/* Grid for Small Fields */}
              <div className="grid grid-cols-2 gap-4">
                <div className="relative">
                  <RiWhatsappLine className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input 
                    required
                    type="tel" 
                    placeholder="WhatsApp"
                    className="w-full pl-11 pr-4 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:bg-white focus:border-[#007aff] outline-none transition-all text-[14px] font-bold text-[#253061]"
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  />
                </div>
                <div className="relative">
                  <RiCalendarCheckLine className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input 
                    required
                    type="text" 
                    placeholder="Date"
                    className="w-full pl-11 pr-4 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:bg-white focus:border-[#007aff] outline-none transition-all text-[14px] font-bold text-[#253061]"
                    onChange={(e) => setFormData({...formData, date: e.target.value})}
                  />
                </div>
              </div>

              {/* Destination Dropdown */}
              <div className="relative">
                <RiMapPin2Line className="absolute left-4 top-1/2 -translate-y-1/2 text-[#007aff]" />
                <select 
                  required
                  className="w-full pl-11 pr-10 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:bg-white focus:border-[#007aff] outline-none transition-all text-[14px] font-bold text-[#253061] appearance-none cursor-pointer"
                  onChange={(e) => setFormData({...formData, destination: e.target.value})}
                >
                 <option>Munnar</option>
                  <option>Alleppey</option>
                  <option>Pondicherry</option>
                  <option>Coorg</option>
                  <option>Ooty</option>
                  <option>Kodaikanal</option>
                  <option>Wayanad</option>
                  <option>Gokarna</option>
                  <option>Yercaud</option>
                  <option>Kovalam</option>
                  <option>Chikmagalur</option>
                  <option>Araku Valley</option>
                </select>
              </div>

              {/* Duration Field */}
              <div className="relative">
                <RiTimeLine className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                <input 
                  required
                  type="text" 
                  placeholder="Duration (e.g. 3N / 4D)"
                  className="w-full pl-11 pr-4 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:bg-white focus:border-[#007aff] outline-none transition-all text-[14px] font-bold text-[#253061]"
                  onChange={(e) => setFormData({...formData, duration: e.target.value})}
                />
              </div>

              {/* Premium Button */}
              <button 
                type="submit"
                className="w-full py-5 bg-[#253061] text-white rounded-2xl font-black text-[14px] flex items-center justify-center gap-3 shadow-2xl shadow-[#253061]/30 hover:bg-[#007aff] transition-all group"
              >
                PLAN MY TRIP
                <RiArrowRightUpLine size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default HeroWithForm;