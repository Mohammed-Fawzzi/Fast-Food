import { HomeIcon, PhoneCall } from "lucide-react";
import React from "react";

const ContactUs = () => {
  return (
    <section className="my-14 pt-14">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center space-y-4">
          <h1 className="font-bold text-3xl sm:text-4xl md:text-4xl text-gray-800 text-center">
            Lets Connect and Create Memorable Experiences Together
          </h1>
          <p className="text-center text-slate-500 text-base sm:text-lg md:text-xl">
            Reach Out for Reservations, Inquiries, or Just to Say Hello – We are
            Here to Serve You.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 my-7">
          <div className="flex flex-col items-center space-y-3 p-6 bg-orange-100 shadow-lg text-center">
            <HomeIcon className="w-10 h-10 text-gray-700" />
            <h3 className="font-bold text-xl sm:text-2xl">Visit our Restaurant</h3>
            <p className="text-gray-500 text-sm sm:text-base">
              93X Hilgard Ave, Los Angeles, CA 900XX, United States.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-3 p-6 bg-orange-100 shadow-lg text-center">
            <PhoneCall className="w-10 h-10 text-gray-700" />
            <h3 className="font-bold text-xl sm:text-2xl">Contact number</h3>
            <p className="text-gray-500 text-sm sm:text-base">+ 123 456 7XX 000</p>
            <p className="text-gray-500 text-sm sm:text-base">+ 2XX 000 111 00</p>
          </div>
          <div className="flex flex-col items-center space-y-3 p-6 bg-orange-100 shadow-lg text-center">
            <HomeIcon className="w-10 h-10 text-gray-700" />
            <h3 className="font-bold text-xl sm:text-2xl">Mail Us</h3>
            <p className="text-gray-500 text-sm sm:text-base">FastFood@gmail.com</p>
            <p className="text-gray-500 text-sm sm:text-base">tnc@contact-us.com</p>
          </div>
        </div>

        <div className="bg-orange-50 p-8 my-10 shadow-lg">
          <div className="flex flex-col items-center justify-center space-y-4">
            <h1 className="font-bold text-3xl sm:text-4xl md:text-4xl text-gray-800">
              Get in Touch with FastFood TNC
            </h1>
          </div>
          <div className="mt-4">
            <form>
              <div className="py-2">
                <label htmlFor="name" className="text-xl sm:text-2xl font-bold">Name :</label>
                <input
                  type="text"
                  className="w-full outline-none p-2 border border-gray-300"
                  id="name"
                  placeholder="Enter your full name"
                />
              </div>
              <div className="py-2">
                <label htmlFor="phone" className="font-bold text-xl sm:text-2xl">Phone :</label>
                <input
                  type="text"
                  className="w-full outline-none p-2 border border-gray-300"
                  id="phone"
                />
              </div>
              <div className="mb-4 py-2">
                <label htmlFor="message" className="block mb-1 text-xl sm:text-2xl font-bold">
                  Message :
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows="4"
                  className="w-full outline-none resize-none p-2 border border-gray-300"
                ></textarea>
              </div>
              <div>
                <button className="w-full py-4 font-bold text-black bg-[#FFB700] border-[#FFB700] p-2">
                  Request Reservation
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
