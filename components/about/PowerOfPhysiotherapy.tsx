"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import ScrollMotionEffect from "../motion/ScrollMotionEffect";
import { motion } from "framer-motion";

const physiotherapyDatas = [
  {
    url: "/assets/about/professional-trainer.png",
    title: "Professional Trainer",
    desc: "Lorem ipsum dolor sit amet, consectetuer adipiscing. Aenean commodo.",
  },
  {
    url: "/assets/about/affordable-prices.png",
    title: "Affordable Prices",
    desc: "Lorem ipsum dolor sit amet, consectetuer adipiscing. Aenean commodo",
  },
  {
    url: "/assets/about/very-friendly-service.png",
    title: "Very Friendly Service",
    desc: "Lorem ipsum dolor sit amet, consectetuer adipiscing. Aenean commodo.",
  },
];

const PowerOfPhysiotherapy = () => {
  return (
    <section className="bg-white">
      <div className="container py-10 md:py-20 xl:px-10">
        <div className="flex flex-col xl:flex-row items-center ">
          <div className="flex-1 flex justify-center lg:-translate-x-10 ">
            <div className=" hidden lg:block pb-20">
              <article className="relative h-fit w-full place-self-center">
                <div className=" absolute scale-125   top-[40%]  left-[18%]  w-full h-full ">
                  <ScrollMotionEffect effect="zoom-in" duration={1000}>
                    <Image
                      src={"/assets/about/emptyCircle.png"}
                      alt="blueCircle"
                      width={464}
                      height={464}
                      className=""
                    />
                  </ScrollMotionEffect>
                </div>
                <div className="relative top-0 left-0 z-20 lg:left-[16%] ">
                  <ScrollMotionEffect effect="zoom-in" duration={2000}>
                    <Image
                      src={"/assets/about/backPainRelif.png"}
                      alt="blueCircle"
                      width={381}
                      height={565}
                      className=""
                    />
                  </ScrollMotionEffect>
                </div>
                <div className="absolute top-60 left-48 z-20 lg:left-[65%] lg:top-[65%]">
                  <ScrollMotionEffect effect="zoom-in" duration={3000}>
                    <button className="bg-gradient-to-b from-[#0aa3e8] to-[#34e1d8] h-32 w-56 text-white font-thin  rounded-3xl flex flex-col justify-center items-center ">
                      <p className=" font-baskerville text-base font-thin">
                        &quot;Physiotherapy gives me the flexibility I need to
                        keep in the game.&quot;
                      </p>
                    </button>
                  </ScrollMotionEffect>
                </div>
              </article>
            </div>
            <div className=" lg:hidden block pb-10 ">
              <article className="relative h-fit w-full place-self-center">
                <div className=" relative pb-8 md:pb-16 top-0 left-0 scale-95 md:scale-110 translate-y-24 md:translate-y-16 w-[325px]  ">
                  <ScrollMotionEffect effect="zoom-in" duration={1000}>
                    <Image
                      src={"/assets/about/emptyCircle.png"}
                      alt="blueCircle"
                      width={464}
                      height={464}
                    />
                  </ScrollMotionEffect>
                </div>

                <div className="absolute w-[250px] top-0 left-[13%] text-center ">
                  <ScrollMotionEffect effect="zoom-in" duration={2000}>
                    <Image
                      src={"/assets/about/backPainRelif.png"}
                      alt="blueCircle"
                      width={381}
                      height={565}
                      className="w-full h-full "
                    />
                  </ScrollMotionEffect>
                </div>
                <div className="absolute z-20 left-[65%] top-[65%] scale-85 -translate-x-20 translate-y-4 md:translate-y-0">
                  <ScrollMotionEffect effect="zoom-in" duration={3000}>
                    <button className="bg-gradient-to-b from-[#0aa3e8] to-[#34e1d8] h-28 p-3 w-52 text-white font-thin  rounded-3xl flex flex-col justify-center items-center ">
                      <p className=" font-baskerville text-sm font-thin">
                        &quot;Physiotherapy gives me the flexibility I need to
                        keep in the game.&quot;
                      </p>
                    </button>
                  </ScrollMotionEffect>
                </div>
              </article>
            </div>
          </div>

          <div className="flex-1 mt-8 md:mt-0">
            <div className=" hidden lg:block">
              <ScrollMotionEffect effect="fade-left" duration={2000}>
                <h2 className="text-3xl md:text-5xl font-semibold md:text-left text-center text-black  !leading-snug">
                  Experience The Healing Power Of Physiotherapy
                </h2>
                <p className="text-base md:text-lg font-medium mt-4  text-black mb-6  md:text-left text-center ">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing. Aenean
                  commodo ligula eget dolor aenean massa cum sociis et natoque
                  penatibus.Lorem ipsum dolor sit amet, consectetuer adipiscing.
                  Aenean commodo ligula eget dolor aenean massa cum sociis et
                  natoque penatibus.
                </p>
                <ul className=" md:text-left text-center list-none">
                  {physiotherapyDatas?.map((el: any, index: number) => (
                    <li className="text-base md:text-xl font-semibold text-gray-800 py-1">
                      <div className="flex md:flex-row flex-col items-center md:items-start justify-center md:justify-start space-x-4">
                        <div className="flex items-center justify-center md:justify-start mx-0 mb-4 md:mb-0">
                          <Image
                            src={el?.url}
                            alt="logo"
                            width={200}
                            height={200}
                            className="w-[50px] h-auto mx-0"
                          />
                        </div>
                        <div className="">
                          <h2 className="text-lg md:text-3xl font-medium md:text-left text-center text-gray-800  !leading-snug">
                            {el?.title}
                          </h2>
                          <p className="text-base md:text-lg font-normal mt-1  text-gray-900 mb-6  md:text-left text-center ">
                            {el?.desc}
                          </p>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 flex flex-col md:flex-row justify-center md:justify-start gap-4 items-center">
                  <Link
                    href="/contact"
                    className="bg-secondary hover:bg-secondary-dark transition-colors duration-200 ease-in-out py-3 px-6 rounded-sm w-full md:w-auto max-w-xs text-white text-center"
                  >
                    Make An Appointment
                  </Link>
                  <Link
                    href="/about"
                    className="flex items-center justify-center py-3 px-6 rounded-sm w-full md:w-auto max-w-xs text-gray-900 text-center hover:bg-secondary hover:text-white transition-colors duration-200 ease-in-out group"
                  >
                    <span>Read More About</span>
                    <FaArrowRightLong className="ml-2 text-gray-900 group-hover:text-white transition-colors duration-200 ease-in-out" />
                  </Link>
                </div>
              </ScrollMotionEffect>
            </div>
            <div className=" lg:hidden block">
              <ScrollMotionEffect effect="fade-up" duration={2000}>
                <h2 className="text-3xl md:text-5xl font-semibold md:text-left text-center text-black  !leading-snug">
                  Experience The Healing Power Of Physiotherapy
                </h2>
                <p className="text-base md:text-lg font-medium mt-4  text-black mb-6  md:text-left text-center ">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing. Aenean
                  commodo ligula eget dolor aenean massa cum sociis et natoque
                  penatibus.Lorem ipsum dolor sit amet, consectetuer adipiscing.
                  Aenean commodo ligula eget dolor aenean massa cum sociis et
                  natoque penatibus.
                </p>
                <ul className=" md:text-left text-center list-none">
                  {physiotherapyDatas?.map((el: any, index: number) => (
                    <li className="text-base md:text-xl font-semibold text-gray-800 py-1">
                      <div className="flex md:flex-row flex-col items-center md:items-start justify-center md:justify-start space-x-4">
                        <div className="flex items-center justify-center md:justify-start mx-0 mb-4 md:mb-0">
                          <Image
                            src={el?.url}
                            alt="logo"
                            width={200}
                            height={200}
                            className="w-[50px] h-auto mx-0"
                          />
                        </div>
                        <div className="">
                          <h2 className="text-lg md:text-3xl font-medium md:text-left text-center text-gray-800  !leading-snug">
                            {el?.title}
                          </h2>
                          <p className="text-base md:text-lg font-normal mt-1  text-gray-900 mb-6  md:text-left text-center ">
                            {el?.desc}
                          </p>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 flex flex-col md:flex-row justify-center md:justify-start gap-4 items-center">
                  <Link
                    href="/contact"
                    className="bg-secondary hover:bg-secondary-dark transition-colors duration-200 ease-in-out py-3 px-6 rounded-sm w-full md:w-auto max-w-xs text-white text-center"
                  >
                    Make An Appointment
                  </Link>
                  <Link
                    href="/about"
                    className="flex items-center justify-center py-3 px-6 rounded-sm w-full md:w-auto max-w-xs text-gray-900 text-center hover:bg-secondary hover:text-white transition-colors duration-200 ease-in-out group"
                  >
                    <span>Read More About</span>
                    <FaArrowRightLong className="ml-2 text-gray-900 group-hover:text-white transition-colors duration-200 ease-in-out" />
                  </Link>
                </div>
              </ScrollMotionEffect>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PowerOfPhysiotherapy;
