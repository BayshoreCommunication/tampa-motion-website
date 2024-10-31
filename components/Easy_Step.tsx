import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

const Easy_Step = ({ serviceClass }: { serviceClass?: string }) => {
  return (
    <section
      className={cn(
        serviceClass
          ? serviceClass
          : "bg-white px-10 h-fit inline-grid grid-flow-row grid-cols-1 auto-rows-min pb-16 w-full place-content-center md:32 lg:px-52"
      )}
    >
      <div className="col-span-1 text-2xl font-baskerville p-8 text-textSecondary text-center leading-normal md:text-3xl lg:text-5xl">
        Easy Step to Get Physiotherapy
      </div>
      <div className="col-span-1 place-self-center">
        <ol className="relative border-s border-primary text-textSecondary pl-6 ml-2 h-fit m-auto w-full mx-5 ">
          <li className="mb-10 ms-6" key={1}>
            <span className="absolute flex items-center justify-center w-14 h-10 bg-secondary rounded-full -start-7 ring-8 ring-white dark:ring-primary dark:bg-primary translate-y-2">
              <Image
                src={"/Frame1.png"}
                alt="Make an Appointment"
                width={84}
                height={84}
              />
            </span>
            <h3 className="flex items-center mb-1 text-base font-baskerville md:text-xl lg:text-2xl">
              Make an Appointment
            </h3>

            <p className="mb-4 text-sm font-normal text-gray-500 dark:text-gray-400">
              Lorem ipsum dolor sit amet, consectetuer adipiscing. Aenean
              commodo ligula eget dolor aenean massa cum sociis et natoque
              penatibus.
            </p>
          </li>
          <li className="mb-10 ms-6" key={2}>
            <span className="absolute flex items-center justify-center w-14 h-10 bg-secondary rounded-full -start-7 ring-8 ring-white dark:ring-primary dark:bg-primary translate-y-2">
              <Image
                src={"/Frame2.png"}
                alt="Get Consultation"
                width={84}
                height={84}
              />
            </span>
            <h3 className="flex items-center mb-1 text-base font-baskerville md:text-xl  lg:text-2xl">
              Get Consultation
            </h3>

            <p className="mb-4 text-sm font-normal text-gray-500 dark:text-gray-400">
              Lorem ipsum dolor sit amet, consectetuer adipiscing. Aenean
              commodo ligula eget dolor aenean massa cum sociis et natoque
              penatibus.
            </p>
          </li>
          <li className="mb-10 ms-6" key={3}>
            <span className="absolute flex items-center justify-center w-14 h-10 bg-secondary rounded-full -start-7 ring-8 ring-white dark:ring-primary dark:bg-primary translate-y-2">
              <Image
                src={"/Frame3.png"}
                alt="Meet Our Physiotherapist"
                width={84}
                height={84}
              />
            </span>
            <h3 className="flex items-center mb-1 text-base font-baskerville md:text-xl   lg:text-2xl">
              Meet Our Physiotherapist
            </h3>

            <p className="mb-4 text-sm font-normal text-gray-500 dark:text-gray-400">
              Lorem ipsum dolor sit amet, consectetuer adipiscing. Aenean
              commodo ligula eget dolor aenean massa cum sociis et natoque
              penatibus.
            </p>
          </li>
          <li className=" ms-6" key={4}>
            <span className="absolute flex items-center justify-center w-14 h-10 bg-secondary rounded-full -start-7 ring-8 ring-white dark:ring-primary dark:bg-primary translate-y-3">
              <Image
                src={"/Frame4.png"}
                alt="Enjoy Your Therapy"
                width={84}
                height={84}
              />
            </span>
            <h3 className="flex items-center mb-1 text-base font-baskerville  md:text-xl  lg:text-2xl">
              Enjoy Your Therapy
            </h3>

            <p className=" font-normal text-gray-500 dark:text-gray-400 text-sm">
              Lorem ipsum dolor sit amet, consectetuer adipiscing. Aenean
              commodo ligula eget dolor aenean massa cum sociis et natoque
              penatibus.
            </p>
          </li>
        </ol>
      </div>
    </section>
  );
};

export default Easy_Step;
