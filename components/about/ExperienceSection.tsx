import Image from "next/image";
import Link from "next/link";
import React from "react";
import ScrollMotionEffect from "../motion/ScrollMotionEffect";

const ExperienceSection = () => {
  return (
    <section className="bg-white ">
      <div className="container py-10 md:py-20">
        <ScrollMotionEffect effect="fade-up" duration={2000}>
          <div className="flex flex-col md:flex-row items-center ">
            <div className="flex-1 flex justify-center">
              <Image
                src={"/assets/about/experience.png"}
                alt="logo"
                width={800}
                height={500}
                className="w-[600px] h-auto"
              />
            </div>
            <div className="flex-1">
              <h2 className="text-3xl md:text-5xl font-semibold mt-6 md:text-left text-center text-black  !leading-snug">
                Experience The Healing Power Of Physiotherapy
              </h2>
              <p className="text-base md:text-lg font-medium mt-4  text-black mb-6  md:text-left text-center ">
                Lorem ipsum dolor sit amet, consectetuer adipiscing. Aenean
                commodo ligula eget dolor aenean massa cum sociis et natoque
                penatibus.Lorem ipsum dolor sit amet, consectetuer adipiscing.
                Aenean commodo ligula eget dolor aenean massa cum sociis et
                natoque penatibus.
              </p>
              <div className="flex justify-center md:justify-start">
                <ul className=" list-disc list-outside ml-5 text-black">
                  <li className="text-base md:text-xl font-semibold black py-1">
                    Professional Therapist
                  </li>
                  <li className="text-base md:text-xl font-semibold black py-1">
                    Satisfaction Gurantee
                  </li>
                </ul>
              </div>
              <div className="mt-6 flex justify-center md:justify-start">
                <Link
                  href="/contact"
                  className="bg-secondary  py-3  md:px-1 lg:px-4 rounded-sm w-[200px] md:w-[250px]  text-white text-center"
                >
                  Make An Apponment
                </Link>
              </div>
            </div>
          </div>
        </ScrollMotionEffect>
        <ScrollMotionEffect effect="fade-up" duration={2000}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center justify-between mt-10 md:mt-20 text-black">
            <div className="flex items-center justify-center border bg-white shadow-xl p-10 space-x-6 rounded-lg">
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
            <div className="flex items-center justify-center border bg-white shadow-xl p-10 space-x-6 rounded-lg">
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
            <div className="flex items-center justify-center border bg-white shadow-xl p-10 space-x-6 rounded-lg">
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
