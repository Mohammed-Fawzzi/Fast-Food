import { ArrowRight } from "lucide-react";
import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <section className="bg-[url('/bg.webp')] min-h-screen bg-cover">
      <div className="flex justify-center items-center py-12 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-4 md:gap-8 px-4 md:px-0 w-full max-w-7xl mx-auto">
          {/* Left Content */}
          <div className="text-center md:text-left space-y-5 md:space-y-6 py-8 sm:py-2">
            <p className="text-lg md:text-xl font-bold text-[#FFB700]">
              Discover Delight at Fastfood TNC
            </p>
            <h1 className="font-bold text-4xl sm:text-2xl md:text-5xl text-white">
              Your Go-To Spot for Quick and Tasty Eats!
            </h1>
            <p className="text-gray-400 leading-relaxed text-base sm:text-md md:text-lg">
              Where quick eats and quality collide, crafting a taste sensation.
              Speed meets flavor in every bite, promising a culinary journey
              thats as swift as it is delicious.
            </p>
            <div className="flex justify-center md:justify-start">
              <button className="my-2 py-2 px-4 md:py-3 md:px-6 bg-[#FFB700] border border-[#FFB700] text-black hover:bg-transparent hover:text-[#FFB700] transition duration-300 flex items-center">
                <span className="font-bold mr-2">Order Now</span>
                <ArrowRight />
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div>
            <Image
              src="/hero-2.png"
              alt="slider"
              width={600}
              height={300}
              className="my-6"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
