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
    <section className="bg-white pb-10">
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
            <div className="w-full flex flex-col 2xl:flex-row justify-end items-center gap-4 2xl:relative">
              <div className="container w-full flex-grow flex  flex-wrap justify-center items-center gap-4   z-10">
                {services.map((item, i) => (
                  <ScrollMotionEffect effect="zoom-in" duration={2000}>
                    <div
                      key={i}
                      className="item  bg-gradient-to-r from-[#0aa3e8] to-[#34e1d8] rounded-3xl p-[1px] hover:scale-105 transition-all duration-500 ease-in-out"
                    >
                      <article className="w-[350px]  lg:w-[350px] xl:w-[400px] h-[250px] border bg-white p-4 rounded-3xl flex flex-col justify-center items-center border-transparent hover:bg-gray-100 transition-all duration-500 ease-in-out">
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

              <div className="w-[400px] md:w-auto flex flex-col justify-center items-center relative ">
                <ScrollMotionEffect effect="zoom-in" duration={2000}>
                  <Image
                    src="/assets/BestServices/emptyCircle.png"
                    alt="Patient"
                    width={600}
                    height={608}
                    className="
                  relative -top-16 -left-36 right-0 bottom-0 translate-y-20 scale-125  2xl:scale-150 2xl:translate-y-20 2xl:-translate-x-36 "
                  />
                </ScrollMotionEffect>

                <div className="absolute translate-y-5 md:translate-y-0 scale-105 h-auto md:scale-125  2xl:-translate-x-28">
                  <ScrollMotionEffect effect="zoom-in" duration={2000}>
                    <Image
                      src="/assets/BestServices/patientBack.png"
                      alt="Patient"
                      width={300}
                      height={500}
                    />
                  </ScrollMotionEffect>
                </div>
                <div className="absolute bottom-0 translate-y-20 md:translate-y-0 2xl:-bottom-20 2xl:-translate-x-28">
                  <ScrollMotionEffect effect="zoom-in" duration={2000}>
                    <button className="bg-primary h-32 w-56 text-white font-thin rounded-xl flex flex-col justify-center items-center  hover:scale-105 transition-all duration-250 ease-in-out ">
                      <p className="pb-4  text-lg">
                        We Proudly Give Quality Treatments
                      </p>
                      <Link href="/services">
                        <p className=" text-black flex items-center gap-5 hover:text-white transition-all duration-250 ease-in-out ">
                          View All Services&nbsp;
                          <span>
                            <FaArrowRight />
                          </span>
                        </p>
                      </Link>
                    </button>
                  </ScrollMotionEffect>
                </div>
              </div>
            </div>
          </ScrollMotionEffect>
        </div>
      </div>
    </section>
  );
};

export default BestServices;
