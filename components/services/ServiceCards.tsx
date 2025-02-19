import Image from "next/image";
import Link from "next/link";

import ScrollMotionEffect from "@/components/motion/ScrollMotionEffect";
import { serviceMenu, services } from "@/config/serviceData.js";

const ServiceCards = () => {
  return (
    <div className=" h-fit inline-grid gap-3 2xl:gap-12 grid-flow-row grid-cols-1 w-full  items-center auto-rows-min py-10 lg:py-20 px-5  text-black  ">
      {serviceMenu.map((service, index) => (
        <ScrollMotionEffect effect="fade-up" duration={2000} key={index}>
          <div
            className="bg-gradient-to-r from-[#0aa3e8] to-[#34e1d8] rounded-3xl p-[2px] z-20 "
            key={service.service}
          >
            <article className="w-full   border bg-white p-4 xl:p-8 rounded-3xl flex flex-col justify-center items-center border-transparent">
              {/* <Image
                src={
                  service.service
                }
                alt={
                  service.service
                }
                width={40}
                height={40}
                className="pb-3"
              /> */}

              <p className="text-4xl font-bold  pb-10 text-center">
                {service.service}
              </p>
              <div className=" grid grid-flow-row grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-5  w-full justify-center items-center align-middle content-center auto-rows-min   text-black  ">
                {service.subClass.map((item, i) => (
                  <div
                    key={i}
                    className="bg-gradient-to-r from-[#0aa3e8] to-[#34e1d8] rounded-3xl p-[2px] z-20 hover:scale-105  transition-all duration-300 ease-in-out"
                  >
                    <Link href={`/services/${item.service_slug.toLowerCase()}`}>
                      <article className="w-full  h-[376px]  lg:h-[340px] border bg-white p-4 xl:p-8 rounded-3xl flex flex-col gap-5 justify-center items-center border-transparent">
                        <Image
                          src={
                            services.filter((i) => {
                              i.service_slug === item.service_slug;
                              return i.image;
                            })[i]?.image
                          }
                          alt={
                            services.filter((i) => {
                              i.service_slug === item.service_slug;
                              return i.alt;
                            })[i]?.alt
                          }
                          width={40}
                          height={40}
                          className="pb-3"
                        />

                        <p className="text-xl font-bold  text-center">
                          {
                            services.filter((i) => {
                              i.service_slug === item.service_slug;
                              return i.service;
                            })[i].service
                          }
                        </p>
                        <p className=" text-center pt-3  line-clamp-5">
                          {
                            services.filter((i) => {
                              i.service_slug === item.service_slug;
                              return i.text;
                            })[i]?.text
                          }
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
