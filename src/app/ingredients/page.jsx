"use client";

import { useIngredients } from "@hooks/useMeals";
import Image from "next/image";
import React from "react";

const Ingredients = () => {
  const { data: ingredientsData = [], isLoading, isError, error } =
    useIngredients();

  if (isLoading) {
    return (
      <section className="my-14 pt-10 text-center">
        <p className="text-slate-500">Loading ingredients...</p>
      </section>
    );
  }

  if (isError) {
    return (
      <section className="my-14 pt-10 text-center">
        <p className="text-red-500">{error.message}</p>
      </section>
    );
  }

  return (
    <section className="my-14 pt-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center space-y-4">
          <h1 className="font-bold text-3xl text-gray-800">Our Ingredients</h1>
        </div>
        <div className="my-8 grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 gap-6">
          {ingredientsData.map((item) => (
            <div
              className="relative border overflow-hidden group shadow-lg bg-white"
              key={item.idIngredient}
            >
              <Image
                src={item.image}
                alt={item.strIngredient}
                width={500}
                height={300}
                className="object-contain w-full h-48 p-4 transform transition-transform duration-500 ease-in-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white p-4 opacity-0 transform translate-y-full group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-in-out">
                <h3 className="font-bold text-center text-3xl pb-2 text-[#FFB700]">
                  {item.strIngredient}
                </h3>
              </div>
              <p className="text-center font-bold text-lg pb-3 text-gray-800">
                {item.strIngredient}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Ingredients;
