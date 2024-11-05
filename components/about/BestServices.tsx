import Image from "next/image";
import React from "react";

const BestServices = () => {
  return (
    <div className="relative w-full h-[320px] md:h-[880px]">
      <Image
        className="absolute inset-0 object-cover bg-bottom w-full h-full"
        src="/assets/about/servicebg.png"
        alt="Page Hero Image"
        layout="fill"
        priority
      />

      <div className="relative flex flex-col items-center justify-center w-full h-full">
        <div className="container py-10 md:py-14">sdfds</div>
      </div>
    </div>
  );
};

export default BestServices;
