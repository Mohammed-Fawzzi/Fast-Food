import { PlayCircle } from "lucide-react";
import React from "react";
import Delivery from "./Delivery";
import { mealsData } from "@/Constants/Api";
import Image from "next/image";
export default async function Popular() {
  return (
    <>
      <section>
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-center space-y-4">
            <h1 className="font-bold text-3xl text-gray-800">
              Our Popular Items
            </h1>
            <p className="text-center text-slate-500">
              Inspect background group content align export move. Background
              prototype arrange team inspect clip. Vector comment link frame
              link group.
            </p>
          </div>
          <div className="my-8 grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 gap-6">
            {mealsData.map((item) => (
              <div className="border overflow-hidden" key={item.idMeal}>
                <Image
                  src={item.strMealThumb}
                  alt={item.strMeal}
                  width={500}
                  height={300}
                />
                <div className="p-2">
                  <h3 className="border-b font-bold text-center text-2xl pb-3">
                    {item.strMeal}
                  </h3>
                  <div className="flex justify-between p-1 my-2">
                    <p className="text-lg md:text-sm text-gray-900">
                      <span className="text-red-600">Category:</span>{" "}
                      {item.strCategory}
                    </p>
                    <p className="text-lg md:text-sm text-gray-900">
                      <span className="text-red-600">Area:</span> {item.strArea}
                    </p>
                  </div>
                  <p className="text-center">⭐⭐⭐⭐⭐</p>
                  <a
                    href={item.strYoutube}
                    className="flex justify-center py-2 text-black hover:text-red-500 transition duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <PlayCircle /> <span className="ms-2 c">View Recipe</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Delivery />
    </>
  );
}
