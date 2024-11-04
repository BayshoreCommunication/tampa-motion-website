import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const physiotherapyDatas = [
  {
    url: "/assets/about/professional-trainer.png",
    title: "Professional Trainer",
    desc: "Lorem ipsum dolor sit amet, consectetuer adipiscing. Aenean commodo.",
  },
  {
    url: "/assets/about/affordable-prices.png",
    title: "Affordable Prices",
    desc: "Lorem ipsum dolor sit amet, consectetuer adipiscing. Aenean commodo.",
  },
  {
    url: "/assets/about/very-friendly-service.png",
    title: "Very Friendly Service",
    desc: "Lorem ipsum dolor sit amet, consectetuer adipiscing. Aenean commodo.",
  },
];

const PowerOfPhysiotherapy = () => {
  return (
    <section className="bg-white">
      <div className="container py-10 md:py-20">
        <div className="flex flex-col md:flex-row items-center ">
          <div className="flex-1 flex justify-center">
            <Image
              src={"/assets/about/physiotherapy.png"}
              alt="logo"
              width={800}
              height={500}
              className="w-[600px] h-auto mx-0"
            />
          </div>
          <div className="flex-1 mt-8 md:mt-0">
            <h2 className="text-3xl md:text-6xl font-semibold md:text-left text-center text-gray-800  !leading-snug">
              Experience The Healing Power Of Physiotherapy
            </h2>
            <p className="text-base md:text-lg font-medium mt-4  text-gray-900 mb-6  md:text-left text-center ">
              Lorem ipsum dolor sit amet, consectetuer adipiscing. Aenean
              commodo ligula eget dolor aenean massa cum sociis et natoque
              penatibus.Lorem ipsum dolor sit amet, consectetuer adipiscing.
              Aenean commodo ligula eget dolor aenean massa cum sociis et
              natoque penatibus.
            </p>
            <ui className=" md:text-left text-center list-none">
              {physiotherapyDatas?.map((el: any, index: number) => (
                <li className="text-base md:text-xl font-semibold text-gray-800 py-1">
                  <div className="flex md:flex-row flex-col items-center md:items-start justify-center md:justify-start space-x-4">
                    <div className="flex items-center justify-center md:justify-start mx-0 mb-4 md:mb-0">
                      <Image
                        src={el?.url}
                        alt="logo"
                        width={200}
                        height={200}
                        className="w-[50px] h-auto mx-0"
                      />
                    </div>
                    <div className="">
                      <h2 className="text-lg md:text-3xl font-medium md:text-left text-center text-gray-800  !leading-snug">
                        {el?.title}
                      </h2>
                      <p className="text-base md:text-lg font-normal mt-1  text-gray-900 mb-6  md:text-left text-center ">
                        {el?.desc}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ui>
            <div className="mt-6 flex flex-col md:flex-row justify-center md:justify-start space-10 items-center">
              <Link
                href="tel:954-529-0695"
                className="bg-secondary  py-3  md:px-1 lg:px-4 rounded-sm w-[200px] md:w-[250px]  text-white text-center"
              >
                Make An Apponment
              </Link>
              <Link
                href="tel:954-529-0695"
                className=" py-3  md:px-1 lg:px-4 rounded-sm w-[200px] md:w-[250px]  text-gray-900 text-center flex items-center space-x-4 hover:bg-secondary hover:text-white group:"
              >
                <span>Make An Apponment</span>

                <FaArrowRightLong className="text-gray-900 size-6 group-hover:text-white" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PowerOfPhysiotherapy;
