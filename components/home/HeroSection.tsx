"use client";
import Image from "next/image";
import React from "react";
import BookAnAppointment from "../shared/BookAnAppointment";
import ScrollMotionEffect from "../motion/ScrollMotionEffect";
import { motion } from "framer-motion";

const cardDatas = [
  {
    img: "/assets/home/health-guarantee.png",
    title: "Health Guarantee",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus.",
  },
  {
    img: "/assets/home/trusted-clinic.png",
    title: "Trusted Clinic",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus.",
  },
  {
    img: "/assets/home/expert-therapist.png",
    title: "Expert Therapist",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus.",
  },
];

const h1 = `Physio At
Your Service`.split(" ");
const h2 = "Move better. Feel better. Live better.".split(" ");

const variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const HeroSection = () => {
  return (
    <section className="bg-[#EFEFEF] ">
      <div className="container py-10 md:py-20">
        <div className="flex flex-col-reverse md:flex-row items-end">
          <motion.div
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0, transition: { duration: 1 } }}
            variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
            className="flex-1 mt-10 md:mt-0"
          >
            <h1 className="text-4xl md:text-7xl font-bold leading-tight md:text-left text-center text-black whitespace-pre">
              {h1.map((word, index) => (
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 3, delay: index / 10 }}
                  key={index}
                >
                  {word}{" "}
                </motion.span>
              ))}
            </h1>
            <motion.h6
              variants={variants}
              className="text-lg md:text-2xl font-normal mt-6 md:text-left text-center text-black"
            >
              <ScrollMotionEffect effect="fade-up" duration={2000}>
                {`We empower you to move freely and live fully. Our expert physiotherapists use personalized treatment plans to help you recover from injury, manage pain, and enhance mobility. Whether you're healing from surgery or looking to prevent future issues, we’re here to support every step of your journey to better health.`}
              </ScrollMotionEffect>
            </motion.h6>
            <h2 className="text-lg font-semibold mt-6 md:text-left text-center text-black">
              <ScrollMotionEffect effect="fade-up" duration={2000}>
                {h2.map((word, index) => (
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.25, delay: index / 10 }}
                    key={index}
                  >
                    {word}{" "}
                  </motion.span>
                ))}
              </ScrollMotionEffect>
            </h2>
            {/* Bottom Image */}
            <ScrollMotionEffect effect="fade-up" duration={2000}>
              <div className="bg-[#CEECFB] flex items-center rounded-t-2xl w-full  h-[150px] md:h-[160px] mt-20">
                {/* <ScrollMotionEffect effect="fade-up" duration={2000}> */}
                <Image
                  src={"/assets/home/satisfied-customers-imageone.png"}
                  alt="logo"
                  width={600}
                  height={400}
                  className="w-[180px] h-auto relative ml-6 -top-4"
                />
                {/* </ScrollMotionEffect> */}
                {/* <ScrollMotionEffect effect="fade-up" duration={2000}> */}
                <div className="flex flex-col items-center justify-start space-y-4">
                  <div className="flex items-center justify-start space-x-0 md:space-x-2">
                    <Image
                      className="w-[100px] md:w-[200px] h-auto -ml-4 md:ml-2"
                      width={200}
                      height={100}
                      src="/assets/home/group-image.png"
                      alt="avatar"
                    />

                    <h2 className="text-xl md:text-4xl font-bold leading-tight text-black">
                      18K
                    </h2>
                  </div>
                  <h2 className="text-lg md:text-2xl font-bold leading-tight text-black">
                    Satisfied Customers
                  </h2>
                </div>
                {/* </ScrollMotionEffect> */}
              </div>
            </ScrollMotionEffect>
          </motion.div>
          <div className="flex-1 self-end relative">
            <ScrollMotionEffect effect="fade-up" duration={2000}>
              <Image
                src={"/assets/home/heroimage.png"}
                alt="logo"
                width={2000}
                height={604}
                className="w-full"
              />
              <div
                className="absolute 2xl:top-[22.150%] 2xl:left-[27.5%] xl:top-[21.5%] xl:left-[27%] lg:top-[20.6%] lg:left-[26.1%]  md:top-[17.6%] md:left-[23.2%] 
               top-[20.5%] left-[25.5%]"
              >
                <span className="relative flex h-7 w-7 bottom-[20%] justify-center items-center">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-500 "></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 sm:h-3 sm:w-3 xl:h-3 xl:w-3 lg:h-2 lg:w-2 md:h-1 md:w-1  "></span>
                </span>
              </div>
              <div
                className="absolute 2xl:bottom-[28.2%] 2xl:left-[25.8%] xl:bottom-[27.6%] xl:left-[25.3%] lg:bottom-[26.7%] lg:left-[24.4%] md:bottom-[24%] md:left-[21.4%]
               bottom-[26%] left-[24%]"
              >
                <span className="relative flex h-7 w-7  bottom-[20%] justify-center items-center">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-500 "></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 sm:h-3 sm:w-3 xl:h-3 xl:w-3 lg:h-2 lg:w-2 md:h-1 md:w-1 "></span>
                </span>
              </div>
            </ScrollMotionEffect>
          </div>
        </div>
        <div>
          <ScrollMotionEffect effect="fade-up" duration={2000}>
            <BookAnAppointment />
          </ScrollMotionEffect>
        </div>
        <div className="relative -bottom-40 md:-bottom-48 -mt-24 md:-mt-32 overscroll-none">
          <ScrollMotionEffect effect="fade-up" duration={2000}>
            <div className="grid grid-cols-1 md:grid-cols-3 items-stretch justify-between gap-8">
              {cardDatas?.map((el: any, index: number) => (
                <div className="bg-white  border shadow-2xl rounded-3xl text-black bg-gradient-to-l from-[#0aa3e8] to-[#34e1d8] p-[1px]  ">
                  <div className="bg-white border border-transparent rounded-3xl p-4 h-full hover:bg-gray-100 transition-all ease-in-out duration-500">
                    <div className="flex justify-center items-center ">
                      <Image
                        className="w-20 h-auto flex  justify-center"
                        width={100}
                        height={100}
                        src={el?.img}
                        alt="avatar"
                      />
                    </div>
                    <h2 className="text-2xl md:text-3xl font-semibold leading-tight text-center mt-4">
                      {el?.title}
                    </h2>
                    <p className=" text-center mt-2 text-lg">{el?.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </ScrollMotionEffect>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
