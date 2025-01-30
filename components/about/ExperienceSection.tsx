import Image from "next/image";
import Link from "next/link";
import React from "react";
import ScrollMotionEffect from "../motion/ScrollMotionEffect";
import { motion } from "framer-motion";

const ExperienceSection = () => {
  return (
    <section className="bg-white ">
      <div className="container py-10 md:py-20">
        <ScrollMotionEffect effect="fade-up" duration={2000}>
          <div className="flex flex-col xl:flex-row items-center gap-6 ">
            <div className="flex-1 flex flex-col justify-center relative">
              <Image
                src={"/assets/about/emptyCircle.png"}
                alt="logo"
                width={552}
                height={552}
                className="w-[600px] h-auto"
              />
              <div className="absolute top-0 left-0 right-0 bottom-0 grid auto-rows-min place-content-center place-items-center grid-cols-12 gap-4">
                <div className="col-span-8 row-span-2 md:col-span-7">
                  <ScrollMotionEffect effect="zoom-in" duration={2000}>
                    <Image
                      src={"/assets/about/patientHand.png"}
                      alt="logo"
                      width={800}
                      height={500}
                      className="w-[600px] h-auto "
                    />
                  </ScrollMotionEffect>
                </div>
                <div className=" col-span-4 row-span-1 md:col-span-5 md:scale-90">
                  <ScrollMotionEffect effect="zoom-in" duration={2000}>
                    <Image
                      src={"/assets/about/patientNeck.png"}
                      alt="logo"
                      width={800}
                      height={500}
                      className="w-[600px] h-auto  "
                    />
                  </ScrollMotionEffect>
                </div>
                <div className="col-span-4 row-span-1 md:col-span-5 md:scale-90">
                  <ScrollMotionEffect effect="zoom-in" duration={2000}>
                    <Image
                      src={"/assets/about/patientBack.png"}
                      alt="logo"
                      width={800}
                      height={500}
                      className="w-[600px] h-auto "
                    />
                  </ScrollMotionEffect>
                </div>
              </div>
            </div>
            <div className="flex-1">
              <h2 className="text-3xl md:text-5xl font-semibold mt-6 md:text-center text-center text-black  !leading-snug  xl:text-left">
                Experience The Healing Power Of Physiotherapy
              </h2>
              <p className="text-base md:text-lg font-medium mt-4  text-black mb-6  md:text-center text-center  lg:text-center xl:text-left">
                Every recovery needs the right support. Your state of health is
                our top priority. With expert care, experience, and personalized
                treatment plans, we’re here to help you move past pain, recover
                from injuries, and rebuild your strength.
              </p>
              <div className="flex justify-center xl:justify-start">
                <ul className=" list-disc list-outside ml-5 text-black">
                  <li className="text-base md:text-xl font-semibold black py-1">
                    Professional Therapist
                  </li>
                  <li className="text-base md:text-xl font-semibold black py-1">
                    Satisfaction Gurantee
                  </li>
                </ul>
              </div>
              <div className="mt-6 flex justify-center xl:justify-start">
                <Link
                  href="/contact"
                  className="bg-secondary  py-3  md:px-1 lg:px-4 rounded-sm w-[200px] md:w-[250px]  text-white text-center transition-all duration-500 ease-in-out hover:scale-105"
                >
                  Make An Appointment
                </Link>
              </div>
            </div>
          </div>
        </ScrollMotionEffect>
        <ScrollMotionEffect effect="fade-up" duration={2000}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch justify-between mt-10 md:mt-20 text-black">
            <div className="flex items-center justify-center border bg-white shadow-xl p-10 space-x-6 rounded-lg hover:scale-105 transition-all duration-500 ease-in-out hover:bg-gray-200">
              <Image
                src={"/assets/about/skilled-therapist.png"}
                alt="logo"
                width={200}
                height={200}
                className="w-[50px] md:w-[60px] h-auto"
              />
              <div className="">
                <h2 className="text-4xl md:text-4xl font-semibold black">
                  100
                </h2>
                <p className="text-base md:text-lg  black">Skilled Therapist</p>
              </div>
            </div>
            <div className="flex items-center justify-center border bg-white shadow-xl p-10 space-x-6 rounded-lg hover:scale-105 transition-all duration-500 ease-in-out hover:bg-gray-200">
              <Image
                src={"/assets/about/solved-cases.png"}
                alt="logo"
                width={200}
                height={200}
                className="w-[45px] md:w-[40px] h-auto"
              />
              <div className="">
                <h2 className="text-4xl md:text-4xl font-semibold black">
                  880
                </h2>
                <p className="text-base md:text-lg  black">Solved Cases</p>
              </div>
            </div>
            <div className="flex items-center justify-center border bg-white shadow-xl p-10 space-x-6 rounded-lg hover:scale-105 transition-all duration-500 ease-in-out hover:bg-gray-200">
              <Image
                src={"/assets/about/happy-patients.png"}
                alt="logo"
                width={200}
                height={200}
                className="w-[40px] md:w-[50px] h-auto"
              />
              <div className="">
                <h2 className="text-4xl md:text-4xl font-semibold black">
                  640
                </h2>
                <p className="text-base md:text-lg  black">Happy Patients</p>
              </div>
            </div>
          </div>
        </ScrollMotionEffect>
      </div>
    </section>
  );
};

export default ExperienceSection;
