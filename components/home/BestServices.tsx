import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import Link from "next/link";
import Image from "next/image";

import ScrollMotionEffect from "@/components/motion/ScrollMotionEffect";

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
    <section className="bg-[#EFEFEF] text-black ">
      <div className="container py-10 md:py-20 pb-20">
        <div className="flex w-full  flex-col justify-center items-center ">
          <ScrollMotionEffect effect="fade-down" duration={2000}>
            <div className="flex  flex-col   justify-center items-center pb-20">
              <h2 className="text-5xl font-bold">Best Services</h2>
              <p className="text-lg py-4 text-center">
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
            <div className="flex flex-col xl:flex-row justify-center items-center gap-4 2xl:relative 2xl:left-28">
              <div className=" flex justify-center items-center gap-4 flex-wrap z-10">
                {[1, 2, 3, 4].map((item) => (
                  <div className="  bg-gradient-to-r from-[#0aa3e8] to-[#34e1d8] rounded-3xl p-[1px] ">
                    <article className="w-[350px] h-[250px] border bg-white p-4 rounded-3xl flex flex-col justify-center items-center border-transparent">
                      <Image
                        src="/assets/BestServices/healthCare.png"
                        alt="healthCare"
                        width={60}
                        height={60}
                        className="pb-3"
                      />
                      <div className="text-xl font-bold ">Physiotherapy</div>
                      <div className=" text-center pt-3 ">
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Perspiciatis soluta nemo dolorum, eum ipsum dolor
                        illum.
                      </div>
                    </article>
                  </div>
                ))}
              </div>
              <div className="w-[90%]  md:w-[60%] xl:w-[69%] flex flex-col justify-center items-center relative  -left-20 sm:-left-24 md:-left-20 ">
                <Image
                  src="/assets/BestServices/backCircle.png"
                  alt="backCircle"
                  width={900}
                  height={600}
                  className=" w-[900px] relative 2xl:-left-52"
                />
                <button className="bg-primary h-32 w-56 text-white font-thin rounded-xl flex flex-col justify-center items-center absolute md:-bottom-12 2xl:-bottom-5 -bottom-8 md:right-5  sm:right-14 right-4 lg:right-14 xl:right-2.5 2xl:right-72">
                  <p className="pb-4  text-lg">
                    We Proudly Give Quality Treatments
                  </p>
                  <Link href="/services">
                    <p className=" text-black flex items-center gap-5">
                      View All Services&nbsp;
                      <span>
                        <FaArrowRight />
                      </span>
                    </p>
                  </Link>
                </button>
              </div>
            </div>
          </ScrollMotionEffect>
        </div>
      </div>
    </section>
  );
};

export default BestServices;
