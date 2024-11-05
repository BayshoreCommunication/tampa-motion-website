import React from "react";
import Image from "next/image";
import Link from "next/link";
import ScrollMotionEffect from "../motion/ScrollMotionEffect";

const AchievingOptimal = () => {
  return (
    <section className="bg-white text-black pt-44">
      <div className="container py-10 md:py-20">
        <div className="flex flex-col xl:flex-row items-center gap-x-16">
          <div className="w-full xl:w-[50%] flex items-center justify-center">
            <ScrollMotionEffect effect="fade-left" duration={2000}>
              <div className="relative">
                <Image
                  src={"/assets/AchievingOptimal/patientBg.png"}
                  alt="logo"
                  width={800}
                  height={500}
                  className="w-[550px] h-auto"
                />
                <div className="bg-primary p-6 rounded-lg w-[250px] h-[150px] flex items-center justify-center flex-col absolute bottom-4 right-24">
                  <h2 className="text-5xl font-semibold text-white">7+</h2>
                  <p className="text-lg  text-white">Years of Experience</p>
                </div>
              </div>
            </ScrollMotionEffect>
          </div>

          <div className="w-full xl:w-[50%] pt-10">
            <ScrollMotionEffect effect="fade-right" duration={2000}>
              <h2 className="text-center xl:text-left text-5xl font-bold leading-snug">
                Achieving Optimal Health with Chirox
              </h2>

              <p className="text-center xl:text-left text-lg font-medium mt-4 border-b-2 border-secondary pb-10">
                Lorem ipsum dolor sit amet, consectetuer adipiscing. Aenean
                commodo ligula eget dolor aenean massa cum sociis et natoque
                penatibus.Lorem ipsum dolor sit amet, consectetuer adipiscing.
                Aenean commodo ligula eget dolor aenean massa cum sociis et
                natoque penatibus.
              </p>
              <div className="flex flex-col xl:flex-row items-center justify-center gap-x-16 gap-y-10 mt-8">
                <div className="flex flex-col items-center justify-center xl:justify-start xl:items-start ">
                  <div className="flex items-center justify-center p-3 bg-secondary rounded-full w-16 h-16">
                    <Image
                      src={"/assets/AchievingOptimal/focus.png"}
                      alt="logo"
                      width={800}
                      height={500}
                      className="w-[60px] h-auto"
                    />
                  </div>
                  <h2 className="text-2xl font-bold leading-snug mt-3">
                    Our Mission
                  </h2>

                  <p className="text-base mt-4 px-5 text-center xl:text-left xl:px-0">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing. Aenean
                    commodo ligula eget dolor aenean massa cum sociis et natoque
                    penatibus.
                  </p>
                </div>
                <div className="flex flex-col items-center justify-center xl:justify-start xl:items-start ">
                  <div className="flex items-center justify-center p-3 bg-secondary rounded-full w-16 h-16">
                    <Image
                      src={"/assets/AchievingOptimal/pointer.png"}
                      alt="logo"
                      width={800}
                      height={500}
                      className="w-[60px] h-auto"
                    />
                  </div>
                  <h2 className="text-2xl font-bold leading-snug mt-3">
                    Our Vision
                  </h2>
                  <p className="text-base mt-4 px-5 text-center xl:text-left xl:px-0">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing. Aenean
                    commodo ligula eget dolor aenean massa cum sociis et
                    penatibus.
                  </p>
                </div>
              </div>
            </ScrollMotionEffect>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AchievingOptimal;
