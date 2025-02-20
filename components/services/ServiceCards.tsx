import Image from "next/image";
import Link from "next/link";

import ScrollMotionEffect from "@/components/motion/ScrollMotionEffect";
import { serviceMenu, services } from "@/config/serviceData.js";

const ServiceCards = () => {
  let filtered = [];
  function customeFilter(arr: any, condition: any) {
    return arr.reduce((newArr: any, item: any) => {
      if (condition(item)) {
        newArr.push(item);
      }
      return newArr;
    }, []);
  }
  filtered = customeFilter(
    serviceMenu,
    (item: any) => item.service !== "Manual Lymphatic Drainage"
  );
  filtered = customeFilter(
    filtered,
    (item: any) => item.service !== "Pelvic Floor Strengthening"
  );
  return (
    <div className=" h-fit inline-grid gap-3 2xl:gap-12 grid-flow-row grid-cols-1 w-full  items-center auto-rows-min py-10 lg:py-20 px-5  text-black  ">
      {filtered.map((service: any, index: any) => (
        <ScrollMotionEffect effect="fade-up" duration={2000} key={index}>
          <div
            className="bg-gradient-to-r from-[#0aa3e8] to-[#34e1d8] rounded-3xl p-[2px] z-20 "
            key={service.service}
          >
            <article className="w-full   border bg-[#34e1d8]/20 p-4 xl:p-8 rounded-3xl flex flex-col justify-center items-center border-transparent">
              <div className="flex flex-col lg:flex-row justify-center items-center pb-10 xl:pb-16 gap-4">
                <Image
                  src={service.image}
                  alt={service.service}
                  width={40}
                  height={40}
                  className=""
                />

                <p className="text-4xl font-bold  text-center">
                  {service.service}
                </p>
              </div>

              <div className=" flex flex-wrap  gap-5  w-full justify-center items-center align-middle content-center auto-rows-min text-black  ">
                {service.subClass.map((item: any, i: any) => (
                  <div
                    key={i}
                    className="bg-gradient-to-r from-[#0aa3e8] to-[#34e1d8] rounded-3xl p-[2px]  z-20 hover:scale-105  transition-all duration-300 ease-in-out w-full lg:w-[45%] 2xl:w-[30%]"
                  >
                    <Link href={`/services/${item.service_slug.toLowerCase()}`}>
                      <article className="w-full  h-[376px]  lg:h-[340px] border bg-white p-4 xl:p-8 rounded-3xl flex flex-col gap-5 justify-center items-center border-transparent">
                        <Image
                          src={customeFilter(
                            services,
                            (i: any) =>
                              `${i.slug.toLowerCase()}` ==
                              `${item.service_slug.toLowerCase()}`
                          )[0]?.image.toLowerCase()}
                          alt={
                            customeFilter(
                              services,
                              (i: any) =>
                                `${i.slug.toLowerCase()}` ==
                                `${item.service_slug.toLowerCase()}`
                            )[0]?.service
                          }
                          width={40}
                          height={40}
                          className="pb-3"
                        />

                        <p className="text-xl font-bold  text-center">
                          {/* {
                            services.filter((i) => {
                              i.service_slug === item.service_slug;
                              return i.service;
                            })[i].service
                          } */}
                          {item.service}
                        </p>
                        <p className=" text-center pt-3  line-clamp-5">
                          {
                            customeFilter(
                              services,
                              (i: any) =>
                                `${i.slug.toLowerCase()}` ==
                                `${item.service_slug.toLowerCase()}`
                            )[0]?.text
                          }
                          {/* {item.text} */}
                        </p>
                      </article>
                    </Link>
                  </div>
                ))}
              </div>
            </article>
          </div>
        </ScrollMotionEffect>
      ))}
    </div>
  );
};

export default ServiceCards;
