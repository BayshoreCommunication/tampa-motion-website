import Link from "next/link";
import Image from "next/image";
import React from "react";
import { FaArrowRight } from "react-icons/fa";

const Best_Services = () => {
  return (
    <section className="h-fit bg-background2 inline-grid grid-flow-row grid-cols-3 auto-rows-min px-5 w-full gap-8 py-8 items-center md:px-52 lg:px-32">
      <div className="col-span-3  text-textSecondary row-start-1">
        <h2 className="font-baskerville text-5xl text-center">Best Services</h2>
        <p className="font-sans text-center px-10 ">
          Lorem ipsum dolor sit amet, consectetuer adipiscing. Aenean commodo
          ligula eget dolor aenean massa cum sociis et natoque penatibus.
        </p>
      </div>

      <div className="bg-gradient-to-r from-[#0aa3e8] to-[#34e1d8] rounded-3xl p-[1px] z-20 col-span-3 lg:col-span-1 lg:row-start-2">
        <article className="w-full h-[249px] border bg-white p-1 rounded-3xl flex flex-col justify-center items-center border-transparent">
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
      <div className="bg-gradient-to-r from-[#0aa3e8] to-[#34e1d8] rounded-3xl p-[1px] z-20  col-span-3 lg:col-span-1 lg:row-start-2">
        <article className="w-full h-[249px] border bg-white p-1 rounded-3xl flex flex-col justify-center items-center border-transparent">
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
      <div className="bg-gradient-to-r from-[#0aa3e8] to-[#34e1d8] rounded-3xl p-[1px] z-20 col-span-3 lg:col-span-1 lg:row-start-3">
        <article className="w-full h-[249px] border bg-white p-1 rounded-3xl flex flex-col justify-center items-center border-transparent">
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
      <div className="bg-gradient-to-r from-[#0aa3e8] to-[#34e1d8] rounded-3xl p-[1px] z-20  col-span-3 lg:col-span-1 lg:row-start-3 ">
        <article className="w-full h-[249px] border bg-white p-1 rounded-3xl flex flex-col justify-center items-center border-transparent">
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

      <div className="relative col-span-3 row-span-1 xl:row-start-2 xl:col-start-3 h-[500px] text-center lg:col-start-3 lg:row-start-2 lg:col-span-1">
        <Image
          src={"/emptyCircle.png"}
          alt="logo"
          width={608}
          height={608}
          className="w-[608px] h-[608px] sticky -translate-x-40  -translate-y-1/4"
        />
        <Image
          src={"/patientBack.png"}
          alt="patient back"
          width={386}
          height={521}
          className="w-[328px] h-[442px] sticky  lg:-translate-y-[600px] translate-x-16"
        />
        <button className="bg-primary h-32 w-56 text-white font-thin rounded-3xl flex flex-col justify-center items-center sticky translate-x-[350px] -translate-y-[650px] ">
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
    </section>
  );
};

export default Best_Services;
