"use client";
import Image from "next/image";

export default function HeroGradient() {
  return (
    <div className="relative w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden rounded-2xl sm:rounded-3xl max-w-7xl mx-auto px-4 sm:px-6">
      
      {/* Background Image */}
      <Image
        src="/20303 1.webp"
        alt="Doctor"
        fill
        className="object-cover"
        priority
      />

      {/* Black Shade Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 sm:from-black/80 via-black/60 sm:via-black/50 to-transparent"></div>

      {/* Text Content */}
      <div className="absolute inset-0 flex items-center px-4 sm:px-8 md:px-12 lg:px-16">
        <div className="max-w-[280px] sm:max-w-lg lg:max-w-xl text-white">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-3 sm:mb-6">
            Transform Your Healthcare <br className="hidden sm:block" /> Journey With{" "}
            <span className="text-green-400">Medilink</span>
          </h1>

          <p className="text-gray-200 mb-4 sm:mb-8 text-xs sm:text-sm md:text-base lg:text-lg">
            Experience secure health management, personalized medicine tracking,
            and real-time doctor–patient coordination—all in one platform.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <button className="px-4 sm:px-6 py-2 sm:py-3 bg-green-400 text-green-900 text-sm sm:text-base font-medium rounded-full shadow hover:bg-green-300 transition">
              Book A Demo
            </button>
            <button className="px-4 sm:px-6 py-2 sm:py-3 border border-white text-white text-sm sm:text-base rounded-full hover:bg-white hover:text-green-700 transition">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
