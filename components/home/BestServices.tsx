import * as React from "react";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa6";
import Link from "next/link";
import Image from "next/image";

import ScrollMotionEffect from "@/components/motion/ScrollMotionEffect";

const services = [
  {
    image: "/assets/BestServices/healthCare.png",
    alt: "Physiotherapy",
    service: "Physiotherapy",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, quae.",
  },
  {
    image: "/assets/BestServices/healthCare.png",
    alt: "Joint replacements",
    service: "Joint replacements",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, quae.",
  },
  {
    image: "/assets/BestServices/healthCare.png",
    alt: "Neurological Rehab",
    service: "Neurological Rehab",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, quae.",
  },
  {
    image: "/assets/BestServices/healthCare.png",
    alt: "Parkinson's Disease",
    service: "Parkinson's Disease",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, quae.",
  },
];

const BestServices = () => {
  return (
    <section className="bg-white">
      <div className="container py-10 md:py-20 pb-20  text-black">
        <div className="flex w-full  flex-col justify-center items-center ">
          <ScrollMotionEffect effect="fade-up" duration={2000}>
            <div className="flex  flex-col   justify-center items-center pb-5">
              <h2 className="text-5xl font-bold">Best Services</h2>
              <p className="text-lg py-8 text-center">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta
                unde aut laudantium voluptate esse vel. Tenetur, tempora ipsum!
                Ut cupiditate numquam deleniti corporis vitae voluptatibus atque
                labore, laudantium tempora sit? Lorem ipsum dolor sit, amet
                consectetur adipisicing elit. Beatae ducimus odit distinctio
                dolorem nisi sint saepe, incidunt necessitatibus earum a iure
                placeat omnis temporibus, animi laudantium ex eum. Voluptate,
                temporibus?
              </p>
            </div>
          </ScrollMotionEffect>
          <ScrollMotionEffect effect="fade-up" duration={2000}>
            <div className="w-full flex flex-col 2xl:flex-row justify-center items-center gap-4 2xl:relative 2xl:left-28">
              <div className="container w-full flex  flex-wrap justify-center items-center gap-4 2xl:p-10  z-10">
                {services.map((item, i) => (
                  <ScrollMotionEffect effect="fade-up" duration={2000}>
                    <div
                      key={i}
                      className="item  bg-gradient-to-r from-[#0aa3e8] to-[#34e1d8] rounded-3xl p-[1px]  "
                    >
                      <article className="w-[350px] md:w-[500px] lg:w-[400px] h-[250px] border bg-white p-4 rounded-3xl flex flex-col justify-center items-center border-transparent hover:bg-gray-100 transition-all duration-500 ease-in-out">
                        <Image
                          src={item.image}
                          alt={item.alt}
                          width={60}
                          height={60}
                          className="pb-3"
                        />
                        <div className="text-xl font-bold ">{item.service}</div>
                        <div className=" text-center pt-3 ">{item.text}</div>
                      </article>
                    </div>
                  </ScrollMotionEffect>
                ))}
              </div>
              <ScrollMotionEffect effect="fade-up" duration={2000}>
                <div className="  flex flex-col justify-center items-center relative -left-[19%]  lg:-left-[13%] xl:-left-[10%] 2xl:-left-[3%]">
                  <Image
                    src="/assets/BestServices/backCircle.png"
                    alt="backCircle"
                    width={900}
                    height={600}
                    className=" w-[900px]
                   relative 2xl:-left-52 lg:px-20 lg:h-[500px] lg:w-[700px] 2xl:w-[900px] 2xl:h-[600px] xl:px-30 2xl:px-0 2xl:-translate-x-9"
                  />
                  <button className="bg-primary h-32 w-56 text-white font-thin rounded-xl flex flex-col justify-center items-center absolute right-0 md:-bottom-4 2xl:-bottom-5 -bottom-8 md:right-[16%]  sm:right-[12%] lg:right-[20%] xl:right-[20%] 2xl:right-[55%]">
                    <p className="pb-4  text-lg">
                      We Proudly Give Quality Treatments
                    </p>
                    <Link href="/services">
                      <p className=" text-black flex items-center gap-5">
                        View All Services&nbsp;
                        <span>
                          <FaArrowRight />
                        </span>
                      </p>
                    </Link>
                  </button>
                </div>
              </ScrollMotionEffect>
            </div>
          </ScrollMotionEffect>
        </div>
      </div>
    </section>
  );
};

export default BestServices;
