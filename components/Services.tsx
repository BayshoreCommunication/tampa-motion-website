import Image from "next/image";
import React from "react";
import Easy_Step from "./Easy_Step";

const Services = () => {
  return (
    <div className=" h-fit">
      <div className="flex flex-col justify-between items-center lg:items-start 2xl:px-52 2xl:py-12 bg-doctors bg-cover">
        <h1 className="2xl:text-7xl font-baskerville px-5 2xl:px-52">
          Services
        </h1>
        <h3 className="test-base font-sans px-5 2xl:px-52">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores
          ullam ex labore earum quas saepe enim iure aperiam magni, autem est
          dolore nulla ratione odit quasi libero illum accusantium fugiat!
        </h3>
      </div>
      <div className="inline-grid gap-3 2xl:gap-12 grid-flow-row grid-cols-1 md:grid-cols-2 2xl:grid-cols-3  auto-rows-min py-5 px-5 2xl:px-52  translate-y-12">
        {services.map((service, index) => (
          <div className="bg-gradient-to-r from-[#0aa3e8] to-[#34e1d8] rounded-3xl p-[1px] z-20 ">
            <article className="w-full h-[249px] border bg-white p-1 rounded-3xl flex flex-col justify-center items-center border-transparent">
              <Image
                src={service.image}
                alt="healthCare"
                width={40}
                height={40}
                className="pb-3"
              />

              <div className="text-xl font-bold text-textSecondary font-baskerville">
                {service.service}
              </div>
              <div className="font-sans text-textSecondary text-center pt-3 ">
                {service.text}
              </div>
            </article>
          </div>
        ))}
      </div>
      <div className="bg-gradient-to-r from-[#0aa3e8] to-[#34e1d8] z-20 py-20">
        <h3 className="text-xl text-center 2xl:text-5xl font-baskerville px-5 2xl:px-52">
          If you want avail these services Book an appointment today
        </h3>
        <p className="text-center py-5 text-base 2xl:text-lg font-sans px-5 2xl:px-52">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi alias
          reiciendis, earum autem perspiciatis neque necessitatibus quia nulla.
          Deleniti quos quas aut rem culpa eligendi qui reprehenderit cum animi
          consequatur?
        </p>
      </div>
      <div className=" bg-background2 py-5 ">
        <article className="col-span-4 w-full bg-background2 rounded-3xl grid grid-flow-row grid-cols-1  h-fit z-10 2xl:px-52 ">
          <div className="w-full h-fit text-xl text-textSecondary text-center font-baskerville pb-4 xl:text-3xl bg-white pt-5 rounded-t-3xl">
            Book an appointment today
          </div>
          <form
            action=""
            method="post"
            className="w-full px-2 pt-2 flex flex-col items-stretch  text-black gap-4 xl:flex-row justify-center bg-white pb-5 rounded-b-3xl"
          >
            <input
              type="text"
              className="border border-black p-2 "
              placeholder="Name"
            />
            <input
              type="eamil"
              className="border border-black p-2 "
              placeholder="Email"
            />
            <input
              type="number"
              className="border border-black p-2"
              placeholder="Phone"
            />
            <input
              type="text"
              className="border border-black p-2 "
              placeholder="Select"
            />
            <button className="px-10 py-2 bg-primary text-white font-sans">
              Book Now
            </button>
          </form>
        </article>
      </div>
      <Easy_Step serviceClass="bg-background2 px-10 h-fit inline-grid grid-flow-row grid-cols-1 auto-rows-min pb-16 w-full place-content-center md:32 lg:px-52" />
    </div>
  );
};
const services = [
  {
    service: "Physiotherapy",
    text: "Lorem ipsum dolor sit amet, consectetuer adipiscing. Aenean commodo ligula eget dolor aenean massa cum sociis et natoque penatibus.",
    image: "/trainer.png",
  },
  {
    service: "Massage",
    text: "Lorem ipsum dolor sit amet, consectetuer adipiscing. Aenean commodo ligula eget dolor aenean massa cum sociis et natoque penatibus.",
    image: "/affordable.png",
  },
  {
    service: "Physiotherapy",
    text: "Lorem ipsum dolor sit amet, consectetuer adipiscing. Aenean commodo ligula eget dolor aenean massa cum sociis et natoque penatibus.",
    image: "/friendlyService.png",
  },
  {
    service: "Physiotherapy",
    text: "Lorem ipsum dolor sit amet, consectetuer adipiscing. Aenean commodo ligula eget dolor aenean massa cum sociis et natoque penatibus.",
    image: "/trainer.png",
  },
  {
    service: "Massage",
    text: "Lorem ipsum dolor sit amet, consectetuer adipiscing. Aenean commodo ligula eget dolor aenean massa cum sociis et natoque penatibus.",
    image: "/affordable.png",
  },
  {
    service: "Physiotherapy",
    text: "Lorem ipsum dolor sit amet, consectetuer adipiscing. Aenean commodo ligula eget dolor aenean massa cum sociis et natoque penatibus.",
    image: "/friendlyService.png",
  },
  {
    service: "Physiotherapy",
    text: "Lorem ipsum dolor sit amet, consectetuer adipiscing. Aenean commodo ligula eget dolor aenean massa cum sociis et natoque penatibus.",
    image: "/trainer.png",
  },
  {
    service: "Massage",
    text: "Lorem ipsum dolor sit amet, consectetuer adipiscing. Aenean commodo ligula eget dolor aenean massa cum sociis et natoque penatibus.",
    image: "/affordable.png",
  },
  {
    service: "Physiotherapy",
    text: "Lorem ipsum dolor sit amet, consectetuer adipiscing. Aenean commodo ligula eget dolor aenean massa cum sociis et natoque penatibus.",
    image: "/friendlyService.png",
  },
];

export default Services;
