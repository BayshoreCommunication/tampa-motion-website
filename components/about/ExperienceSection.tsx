import Image from "next/image";
import Link from "next/link";
import React from "react";

const ExperienceSection = () => {
  return (
    <section className="bg-white">
      <div className="container py-10 md:py-20">
        <div className="flex flex-col md:flex-row items-center ">
          <div className="flex-1 flex justify-center">
            <Image
              src={"/assets/about/experience.png"}
              alt="logo"
              width={800}
              height={500}
              className="w-[600px] h-auto"
            />
          </div>
          <div className="flex-1">
            <h2 className="text-3xl md:text-6xl font-semibold mt-6 md:text-left text-center text-gray-800  !leading-snug">
              Experience The Healing Power Of Physiotherapy
            </h2>
            <p className="text-base md:text-lg font-medium mt-4  text-gray-900 mb-6  md:text-left text-center ">
              Lorem ipsum dolor sit amet, consectetuer adipiscing. Aenean
              commodo ligula eget dolor aenean massa cum sociis et natoque
              penatibus.Lorem ipsum dolor sit amet, consectetuer adipiscing.
              Aenean commodo ligula eget dolor aenean massa cum sociis et
              natoque penatibus.
            </p>
            <ui className=" md:text-left text-center ">
              <li className="text-base md:text-xl font-semibold text-gray-800 py-1">
                Professional Therapist
              </li>
              <li className="text-base md:text-xl font-semibold text-gray-800 py-1">
                Satisfaction Gurantee
              </li>
            </ui>
            <div className="mt-6 flex justify-center md:justify-start">
              <Link
                href="tel:954-529-0695"
                className="bg-secondary  py-3  md:px-1 lg:px-4 rounded-sm w-[200px] md:w-[250px]  text-white text-center"
              >
                Make An Apponment
              </Link>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center justify-between mt-10 md:mt-20">
          <div className="flex items-center justify-center border bg-white shadow-xl p-10 space-x-6 rounded-lg">
            <Image
              src={"/assets/about/skilled-therapist.png"}
              alt="logo"
              width={200}
              height={200}
              className="w-[60px] md:w-[80px] h-auto"
            />
            <div className="">
              <h2 className="text-4xl md:text-6xl font-semibold text-gray-800">
                100
              </h2>
              <p className="text-base md:text-lg  text-gray-800">
                Skilled Therapist
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center border bg-white shadow-xl p-10 space-x-6 rounded-lg">
            <Image
              src={"/assets/about/solved-cases.png"}
              alt="logo"
              width={200}
              height={200}
              className="w-[45px] md:w-[50px] h-auto"
            />
            <div className="">
              <h2 className="text-4xl md:text-6xl font-semibold text-gray-800">
                880
              </h2>
              <p className="text-base md:text-lg  text-gray-800">
                Solved Cases
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center border bg-white shadow-xl p-10 space-x-6 rounded-lg">
            <Image
              src={"/assets/about/happy-patients.png"}
              alt="logo"
              width={200}
              height={200}
              className="w-[60px] md:w-[80px] h-auto"
            />
            <div className="">
              <h2 className="text-4xl md:text-6xl font-semibold text-gray-800">
                640
              </h2>
              <p className="text-base md:text-lg  text-gray-800">
                Happy Patients
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
