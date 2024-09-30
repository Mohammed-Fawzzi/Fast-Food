import { Facebook, Home, Mail, Phone, Twitter, Youtube } from "lucide-react";
import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-[#1A1A1A] text-white relative">
      <Image
        src="/price-badge-yellow.webp"
        alt="price-badge-yellow"
        width={150}
        height={100}
        className="absolute object-cover bottom-14 right-2"
      />
      <div className="container mx-auto grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 py-2 gap-5">
        <div className="border-b sm:border-b md:border-none pb-8 mt-10">
          <Image
            src="/logo.webp"
            alt="footer-logo"
            width={200}
            height={150}
            className="pb-5"
          />
          <p className="text-gray-500 space-y-2">
            Elevate bites, build community, deliver culinary excellence with
            FastFood TNC.
          </p>
          <ul className="mt-4 space-y-3">
            <li className="flex items-center cursor-pointer">
              <Home className="mr-2" />
              <span className="text-gray-500  hover:text-white duration-300">
                4XX7 Washington Ave. Manchester.
              </span>
            </li>
            <li className="flex items-center cursor-pointer">
              <Phone className="mr-2" />
              <span className="text-gray-500  hover:text-white duration-300">
                (406) 5XX-012X
              </span>
            </li>
            <li className="flex items-center cursor-pointer">
              <Mail className="mr-2" />
              <span className="text-gray-500  hover:text-white duration-300">
                FastFood@gmail.com
              </span>
            </li>
          </ul>
        </div>

        <div className="border-b sm:border-b md:border-none py-8 mt-1 ms-0 md:ms-12">
          <h3 className="text-2xl font-bold text-[#FFB700] mb-4">
            Quick Links
          </h3>
          <ul className="space-y-2">
            <li>
              <Link
                href={"#"}
                className="text-gray-500 hover:text-white duration-300"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href={"#"}
                className="text-gray-500 hover:text-white duration-300"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                href={"#"}
                className="text-gray-500 hover:text-white duration-300"
              >
                Shop
              </Link>
            </li>
            <li>
              <Link
                href={"#"}
                className="text-gray-500 hover:text-white duration-300"
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                href={"#"}
                className="text-gray-500 hover:text-white duration-300"
              >
                Licensing
              </Link>
            </li>
          </ul>
        </div>

        <div className="border-b sm:border-b md:border-none py-8">
          <h3 className="text-2xl font-bold text-[#FFB700] mb-4">
            Opening Hours
          </h3>
          <ul className="space-y-2">
            <li>
              Monday to Friday :{" "}
              <span className="text-gray-500 hover:text-white duration-300 cursor-pointer">
                10:00 AM to 12:00 PM
              </span>
            </li>
            <li>
              Saturday :{" "}
              <span className="text-gray-500 hover:text-white duration-300 cursor-pointer">
                12:00 PM to 6:00 PM
              </span>
            </li>
          </ul>
        </div>

        <div className="py-8">
          <h3 className="text-2xl font-bold text-[#FFB700] mb-4">
            Newsletter Subscribe
          </h3>
          <p className="pb-3">
            Stay In the Loop :{" "}
            <span className="text-gray-500 hover:text-white duration-300 cursor-pointer">
              Unlock Exclusive Offers, Culinary Insights, and More.
            </span>
          </p>
          <input
            type="text"
            className="relative w-full md:w-2/2 p-2 mt-2 mb-4 border text-black outline-none"
            placeholder="Enter your email"
          />
          <ul className="flex space-x-4">
            <li>
              <Facebook className="hover:text-[#FFB700] duration-300" />
            </li>
            <li>
              <Twitter className="hover:text-[#FFB700] duration-300" />
            </li>
            <li>
              <Mail className="hover:text-[#FFB700] duration-300" />
            </li>
            <li>
              <Youtube className="hover:text-[#FFB700] duration-300" />
            </li>
          </ul>
        </div>
      </div>

      <div className="text-center">
        <p className="border-t border-slate-700 py-2 text-center">
          © All Rights Reserved
          <Link
            href="https://www.linkedin.com/in/mohamed-fawzzi-72b962280/"
            rel="noopener noreferrer"
            target="_blank"
            className="text-decoration-none text-[#FFB700]"
          >
            <span className="ms-1">Mohamed Fawzzi.</span>
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
