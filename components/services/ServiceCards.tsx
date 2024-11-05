import Image from "next/image";
import React from "react";

const services = [
  {
    service: "Physiotherapy",
    text: "Lorem ipsum dolor sit amet, consectetuer adipiscing. Aenean commodo ligula eget dolor aenean massa cum sociis et natoque penatibus.",
    image: "/assets/services/physiotherapy.png",
    alt: "Physiotherapy",
  },
  {
    service: "Joint replacements",
    text: "Lorem ipsum dolor sit amet, consectetuer adipiscing. Aenean commodo ligula eget dolor aenean massa cum sociis et natoque penatibus.",
    image: "/assets/services/joint_replacements.png",
    alt: "Joint replacements",
  },
  {
    service: "Neurological Rehab",
    text: "Lorem ipsum dolor sit amet, consectetuer adipiscing. Aenean commodo ligula eget dolor aenean massa cum sociis et natoque penatibus.",
    image: "/assets/services/neurological_rehab.png",
    alt: "Neurological Rehab",
  },
  {
    service: "Parkinson's Disease",
    text: "Lorem ipsum dolor sit amet, consectetuer adipiscing. Aenean commodo ligula eget dolor aenean massa cum sociis et natoque penatibus.",
    image: "/assets/services/parkinson_disease.png",
    alt: "Parkinson's Disease",
  },
  {
    service: "Pre- and Post-Operative Rehab",
    text: "Lorem ipsum dolor sit amet, consectetuer adipiscing. Aenean commodo ligula eget dolor aenean massa cum sociis et natoque penatibus.",
    image: "/assets/services/operative_rehab.png",
    alt: "Pre- and Post-Operative Rehab",
  },
  {
    service: "Rotator cuff surgery preparation",
    text: "Lorem ipsum dolor sit amet, consectetuer adipiscing. Aenean commodo ligula eget dolor aenean massa cum sociis et natoque penatibus.",
    image: "/assets/services/cuff_surgery.png",
    alt: "Rotator cuff surgery preparation",
  },
  {
    service: "Spine and cosmetic surgeries",
    text: "Lorem ipsum dolor sit amet, consectetuer adipiscing. Aenean commodo ligula eget dolor aenean massa cum sociis et natoque penatibus.",
    image: "/assets/services/surgeries.png",
    alt: "Spine and cosmetic surgeries",
  },
  {
    service: "Ligament and tendon repairs",
    text: "Lorem ipsum dolor sit amet, consectetuer adipiscing. Aenean commodo ligula eget dolor aenean massa cum sociis et natoque penatibus.",
    image: "/assets/services/repairs.png",
    alt: "Ligament and tendon repairs",
  },
  {
    service: "Upper and lower extremities surgeries",
    text: "Lorem ipsum dolor sit amet, consectetuer adipiscing. Aenean commodo ligula eget dolor aenean massa cum sociis et natoque penatibus.",
    image: "/assets/services/extremities_surgeries.png",
    alt: "Upper and lower extremities surgeries",
  },
];

const ServiceCards = () => {
  return (
    <div className=" h-fit inline-grid gap-3 2xl:gap-12 grid-flow-row grid-cols-1 md:grid-cols-2 xl:grid-cols-3  auto-rows-min pt-10 px-5  text-black  translate-y-20">
      {services.map((service) => (
        <div
          className="bg-gradient-to-r from-[#0aa3e8] to-[#34e1d8] rounded-3xl p-[1px] z-20 "
          key={service.service}
        >
          <article className="w-full h-[249px] border bg-white p-4 xl:p-8 rounded-3xl flex flex-col justify-center items-center border-transparent">
            <Image
              src={service.image}
              alt={service.alt}
              width={40}
              height={40}
              className="pb-3"
            />

            <div className="text-xl font-bold  text-center">
              {service.service}
            </div>
            <div className=" text-center pt-3 ">{service.text}</div>
          </article>
        </div>
      ))}
    </div>
  );
};

export default ServiceCards;
