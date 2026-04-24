"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import {
  RiDoubleQuotesR,
  RiStarFill,
  RiCheckboxCircleFill,
} from "react-icons/ri";
import { motion } from "framer-motion";
import Image from "next/image"
// Swiper Styles
import "swiper/css";
import "swiper/css/pagination";

const Testimonials = () => {
  const reviews = [
    {
      name: "Arun & Deepa",
      location: "Munnar Package",
      text: "The candlelight dinner arranged by Teakwood was magical. Every detail, from the flower bed decoration to the private cab, was executed perfectly. Truly stress-free!",
      rating: 5,
    },
    {
      name: "Sanjay Kumar",
      location: "Pondicherry Specialist Trip",
      text: "As promised, their local knowledge of Pondicherry is unmatched. The hotel in White Town was handpicked and beautiful. The taxi service was punctual and professional.",
      rating: 5,
    },
    {
      name: "Meera & Rahul",
      location: "Bali International Trip",
      text: "We were worried about international planning, but Teakwood handled our Bali visa and flights seamlessly. The water villa stay was the highlight of our honeymoon.",
      rating: 5,
    },
    {
      name: "Vikram Rathore",
      location: "Alleppey Houseboat",
      text: "Reliable ground handling and very transparent pricing. No hidden costs at the end of the trip. The private houseboat in Alleppey was a premium experience.",
      rating: 5,
    },
  ];

  return (
    <section className="py-14 bg-[#f8fafc]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          {/* Left: Heading Content */}
          <div className="lg:col-span-4">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-[#007aff] font-black uppercase tracking-[0.3em] text-[11px]"
            >
              Guest Experiences
            </motion.span>
            <h2 className="text-4xl md:text-5xl font-black text-[#253061] mt-4 leading-tight">
              What Our <br /> Couples Say.
            </h2>
            <p className="mt-6 text-gray-500 font-medium leading-relaxed">
              We take pride in creating romantic journeys that become lifelong
              memories. Hear from our happy travelers.
            </p>

            <div className="mt-10 flex items-center gap-4 p-5 bg-white rounded-3xl border border-gray-100 shadow-sm w-fit">
              <div className="flex -space-x-3">
                {[
                  "https://static.vecteezy.com/system/resources/thumbnails/049/174/246/small/a-smiling-young-indian-man-with-formal-shirts-outdoors-photo.jpg",
                  "https://plus.unsplash.com/premium_photo-1682092603230-1ce7cf8ca451?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW5kaWFuJTIwbWFufGVufDB8fDB8fHww",
                  "https://i.pinimg.com/736x/9a/21/2b/9a212b50601e724a3bc5bc3881a6c006.jpg",
                  "https://images.unsplash.com/photo-1729157661483-ed21901ed892?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aW5kaWFuJTIwbWFufGVufDB8fDB8fHww",
                ].map((src, i) => (
                  <div
                    key={i}
                    className="relative w-10 h-10 rounded-full border-2 border-white overflow-hidden shadow-sm"
                  >
                    <img
                      src={src}
                      alt={`Client ${i + 1}`}
                      sizes="40px"
                      className="object-cover h-full w-full"
                    />
                  </div>
                ))}
              </div>
              <div>
                <p className="text-[#253061] font-black text-sm">
                  4.9/5 Rating
                </p>
                <p className="text-[11px] text-gray-400 font-bold uppercase tracking-widest">
                  On Google Reviews
                </p>
              </div>
            </div>
          </div>

          {/* Right: Testimonial Swiper */}
          <div className="lg:col-span-8 overflow-hidden lg:overflow-visible">
            <Swiper
              modules={[Pagination, Autoplay]}
              spaceBetween={30}
              slidesPerView={1}
              autoplay={{ delay: 5000 }}
              breakpoints={{
                768: { slidesPerView: 2 },
              }}
              className="pb-16"
            >
              {reviews.map((review, index) => (
                <SwiperSlide key={index}>
                  <motion.div className="bg-white p-10 rounded-[3rem] shadow-xs border border-gray-50 h-full relative m-2">
                    <RiDoubleQuotesR className="absolute top-8 right-10 text-gray-100 text-6xl -z-0" />

                    <div className="relative z-10">
                      <div className="flex gap-1 mb-6">
                        {[...Array(review.rating)].map((_, i) => (
                          <RiStarFill
                            key={i}
                            className="text-yellow-400"
                            size={16}
                          />
                        ))}
                      </div>

                      <p className="text-[#253061] font-medium leading-relaxed italic mb-8">
                        "{review.text}"
                      </p>

                      <div className="flex items-center gap-4 pt-6 border-t border-gray-50">
                        <div className="w-12 h-12 rounded-2xl bg-[#253061]/5 flex items-center justify-center text-[#253061] font-black">
                          {review.name.charAt(0)}
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <h4 className="font-black text-[#253061] text-[15px]">
                              {review.name}
                            </h4>
                            <RiCheckboxCircleFill
                              className="text-green-500"
                              size={14}
                              title="Verified Traveler"
                            />
                          </div>
                          <p className="text-[11px] text-[#007aff] font-bold uppercase tracking-widest">
                            {review.location}
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .swiper-pagination-bullet {
          width: 10px;
          height: 10px;
          background: #cbd5e1;
          opacity: 1;
        }
        .swiper-pagination-bullet-active {
          width: 30px;
          background: #007aff !important;
          border-radius: 20px;
        }
      `}</style>
    </section>
  );
};

export default Testimonials;
