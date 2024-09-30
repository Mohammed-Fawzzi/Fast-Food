import Image from "next/image";
import React from "react";

const Loading = () => {
  return (
    <section className="bg-[#1A1A1A] flex items-center justify-center">
      <div className="w-screen h-[100vh] flex flex-col items-center justify-center">
        <Image src={"/logo.webp"} width={200} height={200} alt="loading logo" />
      </div>
    </section>
  );
};

export default Loading;
