import Image from "next/image";
import React from "react";
import bannerimage from "@/assets/hero_img.jpg";

const Banner = () => {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100 rounded-[2.5rem] p-8 md:p-16 shadow-sm border border-amber-200/50">
          {/* Text column */}
          <div className="flex flex-col gap-5 text-center md:text-left order-2 md:order-1">
            <span className="inline-flex items-center gap-2 self-center md:self-start text-xs font-semibold tracking-wider uppercase text-amber-800 bg-amber-200/60 px-3 py-1.5 rounded-full w-fit">
              📚 New Arrivals
            </span>

            <h2 className="font-bold text-4xl md:text-5xl leading-tight text-stone-800">
              Books to freshen up
              <br className="hidden md:block" />
              your bookshelf
            </h2>

            <p className="text-stone-600 text-lg max-w-md mx-auto md:mx-0">
              Hand-picked reads to spark your next favorite story — updated
              weekly.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start pt-2">
              <button className="btn bg-amber-700 hover:bg-amber-800 text-white border-none rounded-full px-8 shadow-md hover:shadow-lg transition-all">
                View the list →
              </button>
              <button className="btn btn-ghost text-stone-700 hover:bg-amber-100 rounded-full px-8">
                Learn more
              </button>
            </div>
          </div>

          {/* Image column */}
          <div className="relative order-1 md:order-2">
            <div className="absolute inset-0 bg-amber-300/30 blur-3xl rounded-full -z-10" />
            <Image
              src={bannerimage}
              alt="banner image"
              className="rounded-2xl shadow-xl w-full h-auto object-cover ring-1 ring-amber-900/10"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
