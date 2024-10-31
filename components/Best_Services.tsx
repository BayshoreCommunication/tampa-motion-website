import Link from "next/link";
import Image from "next/image";
import React from "react";
import { FaArrowRight } from "react-icons/fa";

const Best_Services = () => {
  return (
    <section className="h-fit bg-background2 inline-grid grid-flow-row grid-cols-1 auto-rows-min px-5 w-full">
      <div className="flex flex-col justify-satrt py-14 items-center text-textSecondary">
        <h2 className="font-baskerville text-5xl">Best Services</h2>
        <p className="font-sans w-3/4 text-center">
          Lorem ipsum dolor sit amet, consectetuer adipiscing. Aenean commodo
          ligula eget dolor aenean massa cum sociis et natoque penatibus.
        </p>
      </div>
      <div className="place-self-center w-full ">
        <div className="flex flex-col justify-center items-center xl:inline-grid xl:grid-flow-row xl:grid-cols-3 xl:aurto-rows-min xl:content-center gap-5 flex-wrap pb-28 w-full ">
          <div className="bg-gradient-to-r from-[#0aa3e8] to-[#34e1d8] rounded-3xl p-[1px] z-20">
            <article className="w-80 h-[249px] border bg-white p-1 rounded-3xl flex flex-col justify-center items-center border-transparent">
              <Image
                src="/healthCare.png"
                alt="healthCare"
                width={40}
                height={40}
                className="pb-3"
              />

              <div className="text-xl font-bold text-textSecondary font-baskerville">
                Physiotherapy
              </div>
              <div className="font-sans text-textSecondary text-center pt-3 ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus.
              </div>
            </article>
          </div>
          <div className="bg-gradient-to-r from-[#0aa3e8] to-[#34e1d8] rounded-3xl p-[1px] z-20">
            <article className="w-80 h-[249px] border bg-white p-1 rounded-3xl flex flex-col justify-center items-center border-transparent">
              <Image
                src="/healthCare.png"
                alt="healthCare"
                width={40}
                height={40}
                className="pb-3"
              />

              <div className="text-xl font-bold text-textSecondary font-baskerville">
                Joint replacements
              </div>
              <div className="font-sans text-textSecondary text-center pt-3 ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus.
              </div>
            </article>
          </div>
          <div className="bg-gradient-to-r from-[#0aa3e8] to-[#34e1d8] rounded-3xl p-[1px] z-20">
            <article className="w-80 h-[249px] border bg-white p-1 rounded-3xl flex flex-col justify-center items-center border-transparent">
              <Image
                src="/healthCare.png"
                alt="healthCare"
                width={40}
                height={40}
                className="pb-3"
              />

              <div className="text-xl font-bold text-textSecondary font-baskerville">
                Neurological Rehab
              </div>
              <div className="font-sans text-textSecondary text-center pt-3 ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus.
              </div>
            </article>
          </div>
          <div className="bg-gradient-to-r from-[#0aa3e8] to-[#34e1d8] rounded-3xl p-[1px] z-20">
            <article className="w-80 h-[249px] border bg-white p-1 rounded-3xl flex flex-col justify-center items-center border-transparent">
              <Image
                src="/healthCare.png"
                alt="healthCare"
                width={40}
                height={40}
                className="pb-3"
              />

              <div className="text-xl font-bold text-textSecondary font-baskerville">
                Parkinson's Disease
              </div>
              <div className="font-sans text-textSecondary text-center pt-3 ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus.
              </div>
            </article>
          </div>
        </div>
        <div className="relative flex flex-col justify-center items-center">
          <Image
            src={"/emptyCircle.png"}
            alt="logo"
            width={608}
            height={608}
            className="w-[608px] h-[608px] -translate-x-28 -translate-y-56"
          />
          <Image
            src={"/patientBack.png"}
            alt="patient back"
            width={386}
            height={521}
            className="w-[328px] h-[442px] absolute -translate-y-40"
          />
          <button className="bg-primary h-32 w-56 text-white font-thin rounded-3xl flex flex-col justify-center items-center absolute translate-y-10">
            <p className="pb-4 font-baskerville text-lg">
              We Proudly Give Quality Treatments
            </p>
            <Link href="/services">
              <p className="font-sans text-black flex items-center gap-5">
                View All Services&nbsp;
                <span>
                  <FaArrowRight />
                </span>
              </p>
            </Link>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Best_Services;
