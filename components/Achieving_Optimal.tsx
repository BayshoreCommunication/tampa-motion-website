import Image from "next/image";
import Link from "next/link";
import React from "react";

const Grid2 = () => {
  return (
    <section className="h-fit w-full bg-white grid grid-flow-row grid-cols-4 auto-rows-min px-5 py-20 m-auto xl:px-20">
      <article className="col-span-4 flex flex-col justify-start items-left text-textSecondary xl:col-span-2 xl:col-start-3 xl:row-span-2 xl:row-start-1 ">
        <div className="text-2xl text-center font-baskerville pt-4 pb-2 xl:text-5xl xl:text-left">
          Achieving Optimal
        </div>
        <div className="text-2xl text-center font-baskerville pb-1 xl:text-5 xl:text-left">
          Health with Chirox
        </div>
        <div className=" font-sans text-center p-3 text-base xl:text-left">
          Lorem ipsum dolor sit amet, consectetuer adipiscing. Aenean commodo
          ligula eget dolor aenean massa cum sociis et natoque penatibus.
        </div>
      </article>
      <article className="col-span-4 py-4 h-80 w-full md:row-span-2 md:row-start-2 md:col-start-1 lg:row-span-2 lg:row-start-2 lg:col-start-1 xl:row-span-4 xl:col-start-1 xl:row-start-1 xl:col-span-2 place-content-center xl:h-fit xl:translate-x-12 xl:translate-y-6">
        <div className="relative">
          <Image
            src={"/rectangleBg.png"}
            alt="logo"
            width={366}
            height={579}
            className="sticky -top-6 left-40 object-cover h-[327px] w-[206px] md:row-span-2 xl:h-[561px] xl:w-[366px]"
          />
          <Image
            src={"/patient.png"}
            alt="logo"
            width={577}
            height={538}
            className="absolute top-0 left-20  z-10 object-cover h-[303px] w-[325px] xl:h-[538px] xl:w-[577px]"
          />

          <div className="flex flex-col items-center justify-center absolute top-56 left-48 -translate-x-2 z-30 xl:left-[400px] xl:top-[420px] xl:w-44 xl:h-24">
            <button className="bg-[#05a3e6] w-fit p-2 rounded-3xl z-20  cursor-default">
              <div className="text-3xl font-bold font-sans text-white z-10 flex flex-row items-center justify-center relative">
                <p>7+</p>
              </div>
              <span className="font-baskerville text-base text-white">
                years of experience
              </span>
            </button>
          </div>
        </div>
      </article>

      <article className="col-span-4 px-5 md:row-start-2 md:col-start-3 md:col-span-2 lg:row-start-2 lg:col-start-3 lg:col-span-2 xl:col-start-3 xl:col-span-2 xl:row-span-2  xl:row-start-3">
        <div className="hidden xl:block h-[1px] w-[470px] bg-primary mt-auto pt-[1px]"></div>
        <article className=" pt-8 pb-4 w-full"></article>
        <section className=" text-textSecondary grid grid-rows-2 grid-cols-2 pt-16">
          <div className="pr-8">
            <div className="relative -top-20 left-0 w-full">
              <Image
                src={"/blueCircle.png"}
                alt={"Blue Circle"}
                width={64}
                height={64}
                className="absolute top-0 left-0"
              />
              <Image
                src={"/focus.png"}
                alt={"Blue Circle"}
                width={44}
                height={44}
                className="absolute top-2.5 left-2.5"
              />
            </div>
            <h2 className="font-baskerville text-2xl">Our Mission</h2>
            <p className="">
              Lorem ipsum dolor sit amet, consectetuer adipiscing. Aenean
              commodo ligula eget dolor aenean massa cum sociis et natoque
              penatibus.
            </p>
          </div>
          <div>
            <div className=" relative -top-20 left-0 w-full ">
              <Image
                src={"/blueCircle.png"}
                alt={"Blue Circle"}
                width={64}
                height={64}
                className="absolute top-0 left-0"
              />
              <Image
                src={"/pointer.png"}
                alt={"Blue Circle"}
                width={44}
                height={44}
                className="absolute top-2.5 left-2.5"
              />
            </div>
            <h2 className="font-baskerville text-2xl">Our Vision</h2>
            <p className="">
              Lorem ipsum dolor sit amet, consectetuer adipiscing. Aenean
              commodo ligula eget dolor aenean massa cum sociis et natoque
              penatibus.
            </p>
          </div>
          <div className="pt-6">
            <Link href={"#"}>
              <button className="bg-primary h-10 w-48 text-white font-thin">
                About Us
              </button>
            </Link>
          </div>
        </section>
      </article>
    </section>
  );
};

export default Grid2;
