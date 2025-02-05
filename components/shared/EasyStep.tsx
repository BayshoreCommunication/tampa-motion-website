import Image from "next/image";
import React from "react";
import ScrollMotionEffect from "@/components/motion/ScrollMotionEffect";

const EasyStep = ({ className }: { className?: string }) => {
  return (
    <section className={" bg-white m-auto  py-10 md:py-20 " + className}>
      <div className="container">
        <div
          className={
            " bg-white px-2 h-fit inline-grid grid-flow-row grid-cols-1 auto-rows-min pb-16 w-full place-content-center md:px-20 lg:px-32 2xl:px-80 text-black m-auto"
          }
        >
          <ScrollMotionEffect effect="fade-up" duration={2000}>
            <div className="col-span-1 text-2xl text-center md:text-3xl  2xl:text-5xl 2xl:px-52 w-full   2xl:leading-normal pb-16 font-semibold">
              Easy Step to Get Physiotherapy
            </div>
          </ScrollMotionEffect>
          <ScrollMotionEffect effect="fade-up" duration={2000}>
            <div className="relative col-span-1 place-self-center px-14">
              <ol className="relative border-s-2 border-secondary  pl-10 ml-2 h-fit m-auto w-full mx-5  ">
                <li className="mb-10 ms-6 pb-5" key={1}>
                  <span className="absolute flex items-center justify-center w-14 h-10 bg-secondary rounded-full -start-7  ring-8 ring-white  translate-y-2  xl:-start-8 xl:w-16">
                    <Image
                      src={"/assets/EasyStep/Frame1.png"}
                      alt="Make an Appointment"
                      width={84}
                      height={84}
                    />
                  </span>
                  <ScrollMotionEffect effect="fade-up" duration={2000}>
                    <h3 className="flex items-center mb-4 text-lg  md:text-xl lg:text-2xl">
                      Make an Appointment
                    </h3>

                    <p className="mb-4 text-sm lg:text-base font-normal ">
                      Simply reach out to schedule your visit, and we’ll find a
                      time that works for you.
                    </p>
                  </ScrollMotionEffect>
                </li>
                <li className="mb-10 ms-6 pb-5" key={2}>
                  <span className="absolute flex items-center justify-center w-14 h-10 bg-secondary rounded-full -start-7 ring-8 ring-white  translate-y-2  xl:-start-8 xl:w-16">
                    <Image
                      src={"/assets/EasyStep/Frame2.png"}
                      alt="Get Consultation"
                      width={84}
                      height={84}
                    />
                  </span>{" "}
                  <ScrollMotionEffect effect="fade-up" duration={2000}>
                    <h3 className="flex items-center mb-4 text-lg   md:text-xl  lg:text-2xl">
                      Get Consultation
                    </h3>

                    <p className="mb-4 text-sm lg:text-base font-normal ">
                      When you arrive, our team will listen to your concerns and
                      assess your needs.
                    </p>
                  </ScrollMotionEffect>
                </li>
                <li className="mb-10 ms-6 pb-5" key={3}>
                  <span className="absolute flex items-center justify-center w-14 h-10 bg-secondary rounded-full -start-7 ring-8 ring-white  translate-y-2  xl:-start-8 xl:w-16">
                    <Image
                      src={"/assets/EasyStep/Frame3.png"}
                      alt="Meet Our Physiotherapist"
                      width={84}
                      height={84}
                    />
                  </span>{" "}
                  <ScrollMotionEffect effect="fade-up" duration={2000}>
                    <h3 className="flex items-center mb-4 text-lg  md:text-xl   lg:text-2xl">
                      Meet Our Physical Therapist
                    </h3>

                    <p className="mb-4 text-sm lg:text-base font-normal ">
                      You'll meet with a skilled physiotherapist who’ll create a
                      treatment plan just for you.
                    </p>
                  </ScrollMotionEffect>
                </li>
                <li className=" ms-6" key={4}>
                  <span className="absolute flex items-center justify-center w-14 h-10 bg-secondary rounded-full -start-7 ring-8 ring-white  translate-y-3  xl:-start-8 xl:w-16">
                    <Image
                      src={"/assets/EasyStep/Frame4.png"}
                      alt="Enjoy Your Therapy"
                      width={84}
                      height={84}
                    />
                    <div className=" absolute w-5 h-28 top-full translate-y-2 bg-white md:translate-y-2 lg:translate-y-2 xl:translate-y-3"></div>
                  </span>
                  <ScrollMotionEffect effect="fade-up" duration={2000}>
                    <h3 className="flex items-center mb-5 text-lg   md:text-xl  lg:text-2xl">
                      Enjoy Your Therapy
                    </h3>

                    <p className=" font-normal  text-sm lg:text-base">
                      Start your sessions and experience the relief as you move
                      toward recovery.
                    </p>
                  </ScrollMotionEffect>
                </li>
              </ol>
            </div>
          </ScrollMotionEffect>
        </div>
      </div>
    </section>
  );
};

export default EasyStep;
