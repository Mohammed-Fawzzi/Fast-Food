import { categoriesData } from "@/Constants/Api";
import Image from "next/image";
import React from "react";

const Categories = () => {
  return (
    <section className="my-14 pt-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center space-y-4">
          <h1 className="font-bold text-3xl text-gray-800">Our Categories</h1>
        </div>
        <div className="my-8 grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 gap-6">
          {categoriesData.map((item) => (
            <div
              className="relative border overflow-hidden group shadow-lg"
              key={item.idCategory}
            >
              <Image
                src={item.strCategoryThumb}
                alt={item.strCategory}
                width={500}
                height={200}
                layout="responsive"
                className="transform transition-transform duration-500 ease-in-out group-hover:rotate-3 group-hover:scale-105"
              />
              {/* Layer */}
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white p-4 opacity-0 transform translate-y-full group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-in-out">
                <h3 className="font-bold text-center text-2xl pb-2 text-[#FFB700]">
                  {item.strCategory}
                </h3>
                <p className="text-center text-sm md:text-base">
                  {item.strCategoryDescription.substring(0, 100)}...
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
