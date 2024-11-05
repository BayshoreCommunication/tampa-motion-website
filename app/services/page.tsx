import HeroSection from "@/components/home/HeroSection";
import ServiceCards from "@/components/services/ServiceCards";
import EasyStep from "@/components/shared/EasyStep";
import PageHeroSection from "@/components/shared/PageHeroSection";
import React from "react";

export const metadata = {
  title:
    " Best immigration lawyer lakeland,Florida | Green Card, Visa & Citizenship Attorneys",
  description:
    "Trip Law is a trusted immigration law firm dedicated to helping clients secure Green Cards, family sponsorships, employment visas (H-1B, L-1, EB-1, EB-2), and asylum.Our experienced Florida attorneys provide personalized legal support to guide you through every step of your U.S. immigration journey.",
};
const page = () => {
  return (
    <section className="w-full flex flex-col justify-center items-center">
      <PageHeroSection
        title="Services"
        description="Lorem ipsum dolor sit amet, consectetuer adipiscing. Aenean commodo ligula eget dolor aenean massa cum sociis et natoque penatibus."
      />
      <article className="bg-white ">
        <div className="container">
          <ServiceCards />
        </div>
        <div className="bg-gradient-to-r from-[#0aa3e8] to-[#34e1d8] z-20  py-32 text-black">
          <h3 className="text-xl  text-center md:text-3xl 2xl:text-5xl font-baskerville px-5 2xl:px-52">
            If you want avail these services Book an appointment today
          </h3>
          <p className="text-center py-5 text-base 2xl:text-lg font-sans px-5 xl:px-52">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi alias
            reiciendis, earum autem perspiciatis neque necessitatibus quia
            nulla. Deleniti quos quas aut rem culpa eligendi qui reprehenderit
            cum animi consequatur?
          </p>
        </div>
        <div className="container py-5 px-5 text-black relative -top-20 ">
          <article className="w-full  rounded-3xl grid grid-flow-row grid-cols-1  h-fit z-10 shadow-2xl">
            <div className="w-full h-fit text-2xl text-center  pb-4 xl:text-3xl bg-white pt-5 rounded-t-3xl">
              Book an appointment today
            </div>
            <form
              action=""
              method="post"
              className="w-full px-2 pt-2 flex flex-col xl:items-center gap-4  xl:flex-row justify-center  bg-white pb-5 rounded-b-3xl  md:px-28 lg:px-36"
            >
              <input
                type="text"
                className="border border-black p-2 bg-white rounded-lg"
                placeholder="Name"
              />
              <input
                type="eamil"
                className="border border-black p-2  bg-white rounded-lg"
                placeholder="Email"
              />
              <input
                type="text"
                className="border border-black p-2 bg-white rounded-lg"
                placeholder="Phone"
              />
              <input
                type="text"
                className="border border-black p-2  bg-white rounded-lg"
                placeholder="Select"
              />
              <button className="px-10 py-2 bg-primary text-white rounded-lg">
                Book Now
              </button>
            </form>
          </article>
        </div>
      </article>
      <div className="bg-white w-full">
        <EasyStep className={" relative -top-10 "} />
      </div>
    </section>
  );
};

export default page;
