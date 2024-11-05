import Image from "next/image";
import React from "react";
import BookAnAppointment from "../shared/BookAnAppointment";
import ScrollMotionEffect from "../motion/ScrollMotionEffect";

const cardDatas = [
  {
    img: "/assets/home/health-guarantee.png",
    title: "Health Guarantee",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus.",
  },
  {
    img: "/assets/home/trusted-clinic.png",
    title: "Trusted Clinic",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus.",
  },
  {
    img: "/assets/home/expert-therapist.png",
    title: "Expert Therapist",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus.",
  },
];

const HeroSection = () => {
  return (
    <section className="bg-[#EFEFEF] ">
      <div className="container py-10 md:py-20">
        <div className="flex flex-col-reverse md:flex-row items-end">
          <div className="flex-1 mt-10 md:mt-0">
            {/* Main Title */}

            <h1 className="text-4xl md:text-7xl font-bold leading-tight md:text-left text-center text-black">
              Physio At Your Service
            </h1>
            <h6 className="text-lg md:text-2xl font-normal mt-6 md:text-left text-center text-black">
              {`We empower you to move freely and live fully. Our expert
              physiotherapists use personalized treatment plans to help you
              recover from injury, manage pain, and enhance mobility. Whether
              you're healing from surgery or looking to prevent future issues,
              we’re here to support every step of your journey to better health.`}
            </h6>
            <h2 className="text-lg font-semibold mt-6 md:text-left text-center text-black">
              Move better. Feel better. Live better.
            </h2>

            {/* Bottom Image */}
            <div className="bg-[#CEECFB] flex items-center space-x-6 rounded-t-2xl w-full md:w-[80%] h-[150px] md:h-[160px] mt-20">
              <Image
                src={"/assets/home/satisfied-customers-imageone.png"}
                alt="logo"
                width={600}
                height={400}
                className="w-[180px] h-auto relative ml-6 -top-6"
              />
              <div className="flex flex-col items-center justify-start space-y-4">
                <div className="flex items-center justify-start space-x-0 md:space-x-2">
                  <Image
                    className="w-[100px] md:w-[200px] h-auto -ml-4 md:ml-2"
                    width={200}
                    height={100}
                    src="/assets/home/group-image.png"
                    alt="avatar"
                  />

                  <h2 className="text-xl md:text-4xl font-bold leading-tight text-black">
                    18K
                  </h2>
                </div>
                <h2 className="text-lg md:text-2xl font-bold leading-tight text-black">
                  Satisfied Customers
                </h2>
              </div>
            </div>
          </div>
          <div className="flex-1">
            <Image
              src={"/assets/home/heroimage.png"}
              alt="logo"
              width={2000}
              height={604}
              className="w-full"
            />
          </div>
        </div>
        <div>
          <ScrollMotionEffect effect="fade-up" duration={2000}>
            <BookAnAppointment />
          </ScrollMotionEffect>
        </div>
        <div className="relative -bottom-40 md:-bottom-48 -mt-24 md:-mt-32 overscroll-none">
          <ScrollMotionEffect effect="fade-up" duration={2000}>
            <div className="grid grid-cols-1 md:grid-cols-3 items-center justify-between gap-8">
              {cardDatas?.map((el: any, index: number) => (
                <div className="bg-white border shadow-2xl rounded-xl p-6 text-black">
                  <div className="flex justify-center items-center">
                    <Image
                      className="w-20 h-auto flex  justify-center"
                      width={100}
                      height={100}
                      src={el?.img}
                      alt="avatar"
                    />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-semibold leading-tight text-center mt-4">
                    {el?.title}
                  </h2>
                  <p className=" text-center mt-2 text-lg">{el?.desc}</p>
                </div>
              ))}
            </div>
          </ScrollMotionEffect>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
