import { data } from "@/Constants/flavors";
import React from "react";

const Flavors = () => {
  return (
    <section className="my-14 py-10">
      <div className="container">
        <div className="flex flex-col items-center justify-center space-y-4 mb-8">
          <h1 className="font-bold text-3xl text-gray-800">
            Why Choose Fastfood TNC?
          </h1>
          <p className="text-center text-slate-500">
            Unmatched Flavors, Quality, and Community Connection.
          </p>
        </div>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 gap-6 py-3">
          {data.map((item) => (
            <div
              className="flex flex-col items-center justify-center border p-3"
              key={item.title}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-20 h-20 my-4"
              />
              <p className="text-center pb-2">{item.title}</p>
              <p className="text-gray-500 text-center">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Flavors;
