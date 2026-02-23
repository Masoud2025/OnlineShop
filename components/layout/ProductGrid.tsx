"use client";

import Image from "next/image";

export default function ProductShowcase({ products = [] }) {
  return (
    <section className="w-[90%] mx-auto mt-20">
      
      {/* Header */}
      <div className="mb-10">
        <h2 className="text-2xl lg:text-3xl font-semibold tracking-tight text-gray-900">
          محصولات منتخب
        </h2>
        <div className="mt-3 w-20 h-[3px] bg-black rounded-full" />
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

        {[1,2,3,4].map((item) => (
          <div
            key={item}
            className="group rounded-2xl bg-white border border-gray-100 
                       hover:border-gray-200 transition duration-300
                       shadow-sm hover:shadow-lg overflow-hidden"
          >
            
            {/* Image */}
            <div className="relative h-56 bg-gray-50">
              <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent" />
              <div className="flex items-center justify-center h-full text-gray-400">
                Image
              </div>

              {/* Badge */}
              <span className="absolute top-4 left-4 
                               text-xs font-medium 
                               bg-white/90 backdrop-blur
                               px-3 py-1 rounded-full shadow-sm">
                تخفیف ویژه
              </span>
            </div>

            {/* Content */}
            <div className="p-5 space-y-3">

              <h3 className="text-base font-medium text-gray-900">
                نام محصول
              </h3>

              <p className="text-sm text-gray-500">
                توضیح کوتاه محصول اینجا قرار میگیرد
              </p>

              <div className="flex items-center justify-between pt-2">

                <span className="text-lg font-semibold text-gray-900">
                  1,200,000 تومان
                </span>

                <button className="text-sm px-4 py-2 rounded-lg 
                                   bg-gray-900 text-white
                                   hover:bg-black transition">
                  افزودن
                </button>

              </div>

            </div>

          </div>
        ))}

      </div>
    </section>
  );
}