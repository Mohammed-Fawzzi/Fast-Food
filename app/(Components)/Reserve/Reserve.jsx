import React from "react";

const Reserve = () => {
  return (
    <section>
      <div className="bg-[#1A1A1A] min-h-screen flex items-center justify-center relative">
        <img
          src="/plate.webp"
          alt="plate"
          className="w-60 h-60 absolute bottom-0 right-0"
        />
        <div className="container grid grid-cols-1 lg:grid-cols-2 gap-8 p-6 z-20">
          {/* Left Content */}
          <div className="bg-white p-8 shadow-md">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">
              Seamless Reservations for <br /> Unforgettable Dining Moments
            </h1>
            <div className="text-gray-600 pt-4">
              <form>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="name" className="block font-medium mb-1">
                      Your Name*
                    </label>
                    <input
                      type="text"
                      placeholder="Your full name"
                      id="name"
                      className="w-full outline-none p-2 border border-gray-300"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block font-medium mb-1">
                      Your Email*
                    </label>
                    <input
                      type="email"
                      placeholder="Your email"
                      id="email"
                      className="w-full outline-none p-2 border border-gray-300"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="phone" className="block font-medium mb-1">
                      Phone number*
                    </label>
                    <input
                      type="text"
                      placeholder="Your phone number"
                      id="phone"
                      className="w-full outline-none p-2 border border-gray-300"
                    />
                  </div>
                  <div>
                    <label htmlFor="date" className="block font-medium mb-1">
                      Reservation Date*
                    </label>
                    <input
                      type="date"
                      id="date"
                      className="w-full outline-none p-2 border border-gray-300"
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <label htmlFor="person" className="block font-medium mb-1">
                    Person*
                  </label>
                  <input
                    type="text"
                    placeholder="3 Persons"
                    id="person"
                    className="w-full outline-none p-2 border border-gray-300"
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="note" className="block font-medium mb-1">
                    Notes*
                  </label>
                  <textarea
                    name="note"
                    id="note"
                    rows="4"
                    className="w-full outline-none resize-none p-2 border border-gray-300"
                  ></textarea>
                </div>

                <div>
                  <button className="w-full py-4 text-black bg-[#FFB700] border-[#FFB700] p-2">
                    Request Reservation
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Right Content */}
          <div className="flex flex-col justify-center space-y-7 text-center sm:text-left">
            <p className="text-lg md:text-xl font-bold text-[#FFB700]">
              Reserve your table
            </p>
            <h1 className="font-bold text-4xl sm:text-2xl md:text-5xl text-white">
              Elevate Your Dining Experience with a Reserved Table at FastFood
              TNC
            </h1>
            <p className="text-gray-400 leading-relaxed text-base sm:text-md md:text-lg">
              We prioritize freshness, sourcing locally whenever possible. Each
              dish is a testament to our dedication to using only the finest
              ingredients.
            </p>
            <p className="text-gray-400 leading-relaxed text-base sm:text-md md:text-lg">
              Our chefs infuse creativity into every dish, offering a menu that
              balances contemporary trends with timeless classics. Expect an
              array of flavors that excite and satisfy.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reserve;
