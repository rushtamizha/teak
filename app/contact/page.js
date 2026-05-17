"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  RiWhatsappLine, 
  RiMailSendLine, 
  RiMapPinLine, 
  RiPhoneLine,
  RiTimeLine,
  RiSendPlaneFill
} from "react-icons/ri";

const ContactPage = () => {
  const contactInfo = [
    {
      icon: <RiPhoneLine />,
      title: "Call Us",
      detail: "+91 9884546406",
      subDetail: "Direct Line & Support"
    },
    {
      icon: <RiWhatsappLine />,
      title: "WhatsApp",
      detail: "+91 9884546406",
      subDetail: "Instant Inquiry & Quotes"
    },
    {
      icon: <RiMailSendLine />,
      title: "Email",
      detail: "teakwoodtravels@gmail.com",
      subDetail: "General Inquiries"
    },
    {
      icon: <RiTimeLine />,
      title: "Working Hours",
      detail: "09:00 AM - 08:00 PM",
      subDetail: "Monday to Saturday"
    }
  ];

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // In a real app, you'd handle form submission here
    const message = "Hi Teakwood Holidays, I would like to plan a trip.";
    window.open(`https://wa.me/919884546406?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <section className="bg-white pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Header Section */}
        <div className="mb-20 text-center lg:text-left">
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-[#007aff] font-semibold uppercase tracking-[0.4em] text-[11px]"
          >
            Get In Touch
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-3xl font-semibold text-[#253061] mt-4"
          >
            Let’s Plan Your <br /> <span className="text-[#007aff]">Dream Journey.</span>
          </motion.h1>
        </div>

        <div className="grid lg:grid-cols-12 gap-16 ">
          
          {/* Left Side: Contact Information Cards */}
          <div className="lg:col-span-5 space-y-6 order-2 ">
            <div className="grid sm:grid-cols-2 lg:grid-cols-1 gap-6">
              {contactInfo.map((info, idx) => (
                <motion.div 
                  key={idx}
                  whileHover={{ x: 10 }}
                  className="p-8 bg-gray-50 rounded-[2.5rem] border border-gray-100 flex items-center gap-6 group transition-all"
                >
                  <div className="w-10 h-10 md:w-15 md:h-15 bg-white rounded-2xl flex items-center justify-center text-xl md:text-2xl text-[#007aff] shadow-sm group-hover:bg-[#253061] group-hover:text-white transition-all">
                    {info.icon}
                  </div>
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-widest text-gray-400 mb-1">{info.title}</p>
                    <h4 className="text-[#253061] font-semibold text-sm md:text-base">{info.detail}</h4>
                    <p className="text-[11px] font-medium text-gray-400">{info.subDetail}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Address Box */}
            <div className="p-8 bg-[#253061] rounded-[3rem] text-white relative overflow-hidden mt-8">
              <RiMapPinLine className="absolute -right-6 -top-6 text-white/5 text-9xl" />
              <div className="relative z-10">
                <h4 className="font-semibold text-xl mb-4">Our Office</h4>
                <p className="text-white/60 text-sm font-medium leading-relaxed">
                  Teakwood Holidays <br />
                  (A Division of Teakwood Travels) <br />
                  Auroville Main Road, <br/>Kuyilapalayam, <br/>
                  Puducherry - 605101
                </p>
              </div>
            </div>
          </div>

          {/* Right Side: High-End Contact Form */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="lg:col-span-7 bg-white rounded-[3.5rem] p-10 lg:p-14 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.08)] border border-gray-50 "
          >
            <h3 className="text-2xl font-semibold text-[#253061] mb-2">Send us a Message</h3>
            <p className="text-gray-400 text-sm font-semibold mb-10 uppercase tracking-widest">Typical response time: &lt; 15 mins</p>

            <form onSubmit={handleFormSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[11px] font-semibold text-[#253061] uppercase tracking-widest ml-2">Your Name</label>
                  <input 
                    type="text" 
                    placeholder="E.g. John Doe"
                    className="w-full px-6 py-4 bg-gray-50 border border-transparent rounded-2xl focus:bg-white focus:border-[#007aff] outline-none transition-all text-sm font-semibold text-[#253061]"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[11px] font-semibold text-[#253061] uppercase tracking-widest ml-2">Phone Number</label>
                  <input 
                    type="tel" 
                    placeholder="+91 00000 00000"
                    className="w-full px-6 py-4 bg-gray-50 border border-transparent rounded-2xl focus:bg-white focus:border-[#007aff] outline-none transition-all text-sm font-semibold text-[#253061]"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[11px] font-semibold text-[#253061] uppercase tracking-widest ml-2">Destination of Interest</label>
                <select className="w-full px-6 py-4 bg-gray-50 border border-transparent rounded-2xl focus:bg-white focus:border-[#007aff] outline-none transition-all text-sm font-semibold text-[#253061] appearance-none">
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

              <div className="space-y-2">
                <label className="text-[11px] font-semibold text-[#253061] uppercase tracking-widest ml-2">Message</label>
                <textarea 
                  rows="4" 
                  placeholder="Tell us about your dream honeymoon..."
                  className="w-full px-6 py-4 bg-gray-50 border border-transparent rounded-2xl focus:bg-white focus:border-[#007aff] outline-none transition-all text-sm font-semibold text-[#253061] resize-none"
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full py-5 bg-[#253061] text-white rounded-2xl font-semibold text-[14px] flex items-center justify-center gap-3 shadow-2xl shadow-[#253061]/20 hover:bg-[#007aff] transition-all group"
              >
                SEND VIA WHATSAPP
                <RiSendPlaneFill size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default ContactPage;