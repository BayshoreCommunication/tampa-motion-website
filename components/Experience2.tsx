import Image from "next/image";
import Link from "next/link";
import React from "react";

const Experience2 = () => {
  return (
    <section className="inline-grid grid-cols-2 grid-flow-row auto-rows-min pt-32 pb-20 px-52 bg-white text-textSecondary font-baskerville ">
      <div className="col-start-1">
        <div className="relative">
          <Image
            src={"/emptyCircle.png"}
            alt="blueCircle"
            width={552}
            height={552}
            className="absolute -top-12 left-10"
          />
          <Image
            src={"/group.png"}
            alt="blueCircle"
            width={638}
            height={446}
            className="absolute top-0 left-0"
          />
        </div>
      </div>
      <div className="col-start-2 flex flex-col justify-start items-start">
        <h3 className="text-5xl leading-snug ">
          Experience The <br />
          Healing Power Of Physiotherapy
        </h3>
        <p className="text-base py-4">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes nascetur ridiculus mus.
        </p>
        <ul className="text-2xl list-disc translate-x-5 pb-6">
          <li key={1}>Professional Therapist</li>
          <li key={2}>Satisfaction Gurantee</li>
        </ul>
        <Link href={"#"}>
          <button className="bg-primary h-10 w-56 text-white font-thin ">
            Make An Apponment
          </button>
        </Link>
      </div>

      <div className="col-start-1 col-span-2 flex justify-around items-center pt-36">
        {experties.map((exp) => (
          <div
            key={exp.title}
            className="h-28 w-80 rounded-2xl bg-gradient-to-r from-[#0aa3e8] to-[#34e1d8] p-[1px]"
          >
            <div className="inline-grid grid-cols-2 grid-flow-row auto-rows-min h-full w-full bg-white rounded-2xl place-content-center gap-2">
              <Image
                src={exp.image}
                alt="logo"
                width={44}
                height={48}
                className="place-self-end translate-y-2 -translate-x-2 object-scale-down h-12"
              />
              <div className="font-baskerville text-5xl">{exp.title}</div>
              <div className="col-start-2 text-sm font-sans">
                {exp.subTitle}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
const experties = [
  {
    image: "/trophy.png",
    title: "100",
    subTitle: "Skilled Therapist",
  },
  {
    image: "/human.png",
    title: "880",
    subTitle: "Solved Cases",
  },
  {
    image: "/arm.png",
    title: "640",
    subTitle: "Happy Patients",
  },
];

export default Experience2;
