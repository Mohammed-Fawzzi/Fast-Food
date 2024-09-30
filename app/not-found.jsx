import { CircleArrowRightIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <section className="my-14 pt-10 min-h-screen flex flex-col justify-center items-center">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-5xl">
        <div className="flex justify-center">
          <img
            src="/pro.png"
            alt="not-found"
            className="w-full h-auto max-w-xs md:max-w-md"
          />
        </div>
        <div className="flex flex-col justify-center items-center text-center md:text-left">
          <h1 className="text-6xl md:text-9xl">404</h1>
          <p className="text-2xl md:text-3xl">Page Not Found</p>
          <p className="mt-4 px-4 md:px-0 text-center">
            Oops! It looks like the page you're searching for has taken a
            detour. Let's guide you back to the heart of TNC.
          </p>
          <div className="flex justify-center md:justify-start mt-6">
            <button className="flex items-center py-4 px-6 bg-[#FFB700] border border-[#FFB700] text-black hover:bg-transparent hover:text-[#FFB700] transition duration-300">
              <Link href={'/'} className="flex">
                <span className="me-1">Back To Home</span>
                <CircleArrowRightIcon />
              </Link>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
