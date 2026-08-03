"use client";

import { AlignRight, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { navLinks } from "@constants/links";

const Navbar = () => {
  const [IsMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!IsMenuOpen);
  };

  return (
    <nav className="bg-[#1A1A1A] shadow-lg backdrop:blur-md py-4 px-8 fixed start-0 end-0 z-50">
      <div className="flex items-center justify-between">
        <div>
          <Link href={"/"} className="hover:text-[#FFB700] duration-300">
            <Image src="/logo.webp" width={150} height={32} alt="logo" priority />
          </Link>
        </div>

        <div className="text-white flex">
          <ul className="hidden md:flex items-center space-x-7">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="hover:text-[#FFB700] duration-300"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <button className="flex py-2 px-4 bg-[#FFB700] border border-[#FFB700] text-black hover:bg-transparent hover:text-[#FFB700] transition duration-300">
                <span className="me-1">Order Now</span>
                <ArrowRight />
              </button>
            </li>
          </ul>

          <div className="text-white flex md:hidden">
            <button onClick={toggleMenu} className="text-3xl">
              <AlignRight />
            </button>
          </div>
        </div>
      </div>

      {IsMenuOpen ? (
        <div className="text-white mt-5">
          <ul className="flex flex-col md:hidden space-y-3 ms-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="hover:text-[#FFB700] duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="flex justify-center">
              <button className="flex py-2 px-4 bg-[#FFB700] border border-[#FFB700] text-black hover:bg-transparent hover:text-[#FFB700] transition duration-300">
                <span className="me-1">Order Now</span>
                <ArrowRight />
              </button>
            </li>
          </ul>
        </div>
      ) : null}
    </nav>
  );
};

export default Navbar;
