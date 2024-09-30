import Image from "next/image";
import React from "react";

const Delivery = () => {
  return (
    <div className="my-14 py-7 grid md:grid-cols-3 sm:grid-cols-1">
      <Image src="/delivery1.webp" alt="Delivery" width={500} height={300} />
      <Image src="/delivery2.webp" alt="Delivery" width={500} height={300} />
      <Image src="/delivery3.webp" alt="Delivery" width={500} height={300} />
    </div>
  );
};

export default Delivery;
