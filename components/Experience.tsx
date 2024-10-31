import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaArrowRight } from "react-icons/fa";

const Experience = () => {
  return (
    <section className="w-full bg-white px-5 pb-24 pt-16 h-fit inline-grid grid-flow-row auto-cols-min grid-cols-2 items-end gap-6">
      <section className="col-span-2 text-center lg:col-span-1 lg:col-start-2">
        <h2 className="text-2xl font-baskerville leading-normal lg:text-left">
          Experience The Healing Power Of Physiotherapy
        </h2>
        <p className="font-sans font-thin text-sm lg:text-left">
          Lorem ipsum dolor sit amet, consectetuer adipiscing. Aenean commodo
          ligula eget dolor aenean massa cum sociis et natoque penatibus.
        </p>
      </section>
      <article className="relative h-fit w-full place-self-center lg:col-span-1 lg:row-start-1 lg:row-span-2 lg:col-start-1">
        <Image
          src={"/emptyCircle.png"}
          alt="blueCircle"
          width={464}
          height={464}
          className="absolute top-0 left-16 w-[317px] h-[318px] translate-y-28"
        />
        <Image
          src={"/backPainRelif.png"}
          alt="blueCircle"
          width={381}
          height={565}
          className="absolute top-0 left-20 w-[260px] h-[387px] "
        />
        <button className="bg-primary h-32 w-56 text-white font-thin  rounded-3xl flex flex-col justify-center items-center absolute top-60 left-48">
          <p className=" font-baskerville text-base font-thin">
            &quot;Physiotherapy gives me the flexibility I need to keep in the
            game.&quot;
          </p>
        </button>
      </article>
      <article className="col-span-2 flex flex-col justify-start items-center px-5 m-auto gap-6 self-start text-textSecondary pt-[450px] lg:pt-0 lg:col-span-1 lg:col-start-2 lg:row-start-2 lg:pl-0">
        <section className="flex flex-col justify-start items-center lg:pl-10">
          {services.map((service) => (
            <div
              key={service.name}
              className="flex flex-row justify-start items-start gap-6   border-b-2 border-textSecondary last:border-none"
            >
              <Image
                src={service.image}
                alt="Frame1"
                width={40}
                height={36}
                className="pt-6"
              />
              <div className="flex flex-col justify-start items-start pb-4">
                <h4 className="text-2xl py-2">{service.name}</h4>
                <p className="font-sans text-sm">{service.description}</p>
              </div>
            </div>
          ))}
        </section>
        <section className="flex flex-row justify-between items-center w-3/4">
          <button className="bg-primary h-10 w-56 text-white font-thin">
            <Link href={"#"}>Make An Apponment</Link>
          </button>
          <button>
            <Link
              href={"#"}
              className="flex flex-row justify-center items-center gap-2"
            >
              Read More About <FaArrowRight />
            </Link>
          </button>
        </section>
      </article>
    </section>
  );
};

const services = [
  {
    name: "Make an Appointment",
    image: "/trainer.png",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing. Aenean commodo ligula eget dolor.",
  },
  {
    name: "Book an Appointment",
    image: "/affordable.png",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing. Aenean commodo ligula eget dolor.",
  },
  {
    name: "Get a Quote",
    image: "/friendlyService.png",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing. Aenean commodo ligula eget dolor.",
  },
];

export default Experience;
