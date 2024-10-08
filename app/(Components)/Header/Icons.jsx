import { data } from "@/Constants/icons";
import Image from "next/image";
import React from "react";

const Icons = () => {
  return (
    <div className="container grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-6 my-8 p-5">
      {data.map((icon) => (
        <div
          className="flex flex-col items-center justify-center shadow-lg border hover:transform hover:scale-110 duration-300 cursor-pointer"
          key={icon.title}
        >
          <Image
            src={icon.image}
            alt={icon.title}
            width={80}
            height={100}
            className="my-4"
          />
          <p className="font-bold text-center pb-2">{icon.title}</p>
        </div>
      ))}
    </div>
  );
};

export default Icons;
