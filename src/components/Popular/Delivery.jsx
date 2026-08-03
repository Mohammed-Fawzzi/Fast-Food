import Image from "next/image";
import React from "react";
import delivery1 from "@assets/delivery1.webp";
import delivery2 from "@assets/delivery2.webp";
import delivery3 from "@assets/delivery3.webp";

const Delivery = () => {
  return (
    <div className="my-14 py-7 grid md:grid-cols-3 sm:grid-cols-1">
      <Image src={delivery1} alt="Delivery" width={500} height={300} />
      <Image src={delivery2} alt="Delivery" width={500} height={300} />
      <Image src={delivery3} alt="Delivery" width={500} height={300} />
    </div>
  );
};

export default Delivery;
