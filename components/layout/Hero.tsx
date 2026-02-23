"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function HeroSection() {
  return (
    <section className="w-[90%] mx-auto mt-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* BIG SLIDER */}
        <div className="lg:col-span-2 relative">

          {/* PUZZLE CIRCLE */}
          <div className="
            absolute 
            -top-7.5 
            -right-7.5 
            w-30 
            h-30 
            rounded-full 
            bg-white 
            shadow-2xl 
            flex 
            items-center 
            justify-center 
            text-center
            font-bold 
            text-red-500 
            text-lg
            z-20
          ">
            60% <br /> تخفیف
          </div>

          <Swiper
            modules={[Autoplay, Pagination]}
            autoplay={{ delay: 4000 }}
            pagination={{ clickable: true }}
            loop
            className="h-75 lg:h-100 rounded-3xl overflow-hidden"
            style={{
              WebkitMask:
                "radial-gradient(circle 60px at top right, transparent 59px, black 60px)",
              mask:
                "radial-gradient(circle 60px at top right, transparent 59px, black 60px)"
            }}
          >
            <SwiperSlide>
              <div className="h-full bg-linear-to-r from-blue-400 via-pink-400 to-yellow-300 flex items-center justify-center text-white text-3xl font-bold">
                Mega Sale
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="h-full bg-linear-to-r from-purple-500 to-indigo-500 flex items-center justify-center text-white text-3xl font-bold">
                New Collection
              </div>
            </SwiperSlide>
          </Swiper>
        </div>

        {/* SMALL CARDS */}
        <div className="flex flex-col gap-6">
          <div className="h-35 lg:h-47.5 rounded-3xl bg-pink-200 flex items-center justify-center font-semibold text-lg hover:scale-[1.02] transition">
            Special Offer
          </div>

          <div className="h-35 lg:h-47.5 rounded-3xl bg-yellow-200 flex items-center justify-center font-semibold text-lg hover:scale-[1.02] transition">
            Limited Deal
          </div>
        </div>

      </div>
    </section>
  );
}