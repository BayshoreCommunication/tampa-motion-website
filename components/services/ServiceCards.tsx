import Image from "next/image";
import Link from "next/link";
import React from "react";

import ScrollMotionEffect from "@/components/motion/ScrollMotionEffect";
import { services } from "@/config/serviceData.js";

const ServiceCards = () => {
  return (
    <div className=" h-fit inline-grid gap-3 2xl:gap-12 grid-flow-row grid-cols-1 md:grid-cols-2 xl:grid-cols-3  auto-rows-min pt-10 px-5  text-black  translate-y-20">
      {services.map((service) => (
        <ScrollMotionEffect effect="fade-up" duration={2000}>
          <div
            className="bg-gradient-to-r from-[#0aa3e8] to-[#34e1d8] rounded-3xl p-[1px] z-20 hover:scale-105  transition-all duration-300 ease-in-out"
            key={service.service}
          >
            <Link href={`/services/${service.slug}`}>
              <article className="w-full h-[249px] border bg-white p-4 xl:p-8 rounded-3xl flex flex-col justify-center items-center border-transparent">
                <Image
                  src={service.image}
                  alt={service.alt}
                  width={40}
                  height={40}
                  className="pb-3"
                />

                <div className="text-xl font-bold  text-center">
                  {service.service}
                </div>
                <div className=" text-center pt-3 ">{service.text}</div>
              </article>
            </Link>
          </div>
        </ScrollMotionEffect>
      ))}
    </div>
  );
};

export default ServiceCards;
