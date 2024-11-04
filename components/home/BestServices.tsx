import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import Link from "next/link";
import Image from "next/image";

const BestServices = () => {
  return (
    // <section className="bg-[#EFEFEF] text-black h-fit bg-background2 inline-grid grid-flow-row grid-cols-10 auto-rows-min px-5 w-full py-8 items-center">
    //   <div className="col-span-10  text-textSecondary row-start-1">
    //     <h2 className="font-baskerville text-5xl text-center">Best Services</h2>
    //     <p className="font-sans text-center px-10 ">
    //       Lorem ipsum dolor sit amet, consectetuer adipiscing. Aenean commodo
    //       ligula eget dolor aenean massa cum sociis et natoque penatibus.
    //     </p>
    //   </div>

    //   <div className="bg-gradient-to-r from-[#0aa3e8] to-[#34e1d8] rounded-3xl p-[1px] z-20 col-span-10 md:col-span-5 xl:col-span-3">
    //     <article className="w-full h-[249px] border bg-white p-1 rounded-3xl flex flex-col justify-center items-center border-transparent">
    //       <Image
    //         src="/assets/BestServices/healthCare.png"
    //         alt="healthCare"
    //         width={40}
    //         height={40}
    //         className="pb-3"
    //       />

    //       <div className="text-xl font-bold text-textSecondary font-baskerville">
    //         Physiotherapy
    //       </div>
    //       <div className="font-sans text-textSecondary text-center pt-3 ">
    //         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
    //         tellus.
    //       </div>
    //     </article>
    //   </div>
    //   <div className="bg-gradient-to-r from-[#0aa3e8] to-[#34e1d8] rounded-3xl p-[1px] z-20  col-span-10 md:col-span-5 xl:col-span-3">
    //     <article className="w-full h-[249px] border bg-white p-1 rounded-3xl flex flex-col justify-center items-center border-transparent">
    //       <Image
    //         src="/assets/BestServices/healthCare.png"
    //         alt="healthCare"
    //         width={40}
    //         height={40}
    //         className="pb-3"
    //       />

    //       <div className="text-xl font-bold text-textSecondary font-baskerville">
    //         Joint replacements
    //       </div>
    //       <div className="font-sans text-textSecondary text-center pt-3 ">
    //         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
    //         tellus.
    //       </div>
    //     </article>
    //   </div>
    //   <div className="bg-gradient-to-r from-[#0aa3e8] to-[#34e1d8] rounded-3xl p-[1px] z-20 col-span-10 md:col-span-5 xl:col-span-3">
    //     <article className="w-full h-[249px] border bg-white p-1 rounded-3xl flex flex-col justify-center items-center border-transparent">
    //       <Image
    //         src="/assets/BestServices/healthCare.png"
    //         alt="healthCare"
    //         width={40}
    //         height={40}
    //         className="pb-3"
    //       />

    //       <div className="text-xl font-bold text-textSecondary font-baskerville">
    //         Neurological Rehab
    //       </div>
    //       <div className="font-sans text-textSecondary text-center pt-3 ">
    //         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
    //         tellus.
    //       </div>
    //     </article>
    //   </div>
    //   <div className="bg-gradient-to-r from-[#0aa3e8] to-[#34e1d8] rounded-3xl p-[1px] z-20  col-span-10 md:col-span-5 xl:col-span-3">
    //     <article className="w-full h-[249px] border bg-white p-1 rounded-3xl flex flex-col justify-center items-center border-transparent">
    //       <Image
    //         src="/assets/BestServices/healthCare.png"
    //         alt="healthCare"
    //         width={40}
    //         height={40}
    //         className="pb-3"
    //       />

    //       <div className="text-xl font-bold text-textSecondary font-baskerville">
    //         Parkinson&apos;s Disease
    //       </div>
    //       <div className="font-sans text-textSecondary text-center pt-3 ">
    //         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
    //         tellus.
    //       </div>
    //     </article>
    //   </div>

    //   <div className="relative justify-self-center mx-auto flex items-center justify-center col-span-10  h-[500px] text-center md:col-span-10 xl:col-span-6">
    //     <Image
    //       src={"/assets/BestServices/emptyCircle.png"}
    //       alt="logo"
    //       width={608}
    //       height={608}
    //       className="absolute w-[608px] h-[608px] -top-40 overflow-hidden -left-40 "
    //     />
    //     <div className="w-full flex flex-col justify-center items-center relative">
    //       <Image
    //         src={"/assets/BestServices/patientBack.png"}
    //         alt="patient back"
    //         width={386}
    //         height={521}
    //         className="w-[328px] h-[442px] relative  "
    //       />
    //       <button className="bg-primary h-32 w-56 text-white font-thin rounded-3xl flex flex-col justify-center items-center absolute -bottom-12">
    //         <p className="pb-4 font-baskerville text-lg">
    //           We Proudly Give Quality Treatments
    //         </p>
    //         <Link href="/services">
    //           <p className="font-sans text-black flex items-center gap-5">
    //             View All Services&nbsp;
    //             <span>
    //               <FaArrowRight />
    //             </span>
    //           </p>
    //         </Link>
    //       </button>
    //     </div>
    //   </div>
    // </section>
    <section className="bg-white text-black pt-44">
      <div className="container py-10 md:py-20"></div>
    </section>
  );
};

export default BestServices;
