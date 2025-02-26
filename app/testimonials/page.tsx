import ScrollMotionEffect from "@/components/motion/ScrollMotionEffect";
import PageHeroSection from "@/components/shared/PageHeroSection";
import Image from "next/image";
import React from "react";
import review from "@/config/review.js";
import Rating from "@/components/shared/Rating";
export const metadata = {
  title: "Testimonials - Tampa Motion",
  description: "",
};
const page = () => {
  return (
    <section className="">
      <PageHeroSection
        title="Testimonials "
        description="See how Athena Akram, DPT, has helped people get back on their feet, move with ease, and feel more confident. Her devoted and expert care have made a real difference in so many lives. Got your own story to share ? We’d love to hear it."
      />
      <article className="bg-white w-full">
        <div className="container bg-white">
          <div className=" h-fit inline-grid gap-8 2xl:gap-12 grid-flow-row grid-cols-1 md:grid-cols-2 xl:grid-cols-3  auto-rows-min pt-10 px-5  text-black  py-10 md:py-20">
            {review.map((el, index) => (
              <ScrollMotionEffect effect="fade-up" duration={2000} key={index}>
                <div className="flex 2xl:flex-row h-full flex-col justify-center items-center xl:items-center 2xl:justify-start 2xl:items-start w-full  hover:scale-105 transition-all duration-400 ease-in-out bg-gray-50 px-5 py-8 rounded-2xl border border-gray-100 shadow-md">
                  <div className="w-[20%] ">
                    <Image
                      src={el.avatar}
                      alt="avatar"
                      width={72}
                      height={72}
                      className="rounded-full w-full lg:w-16 "
                    />
                  </div>
                  <div className="flex w-[80%] flex-col h-full justify-start 2  items-center 2xl:items-start text-textSecondary">
                    <Rating
                      rating={el.rating}
                      className="text-center md:text-left py-2 "
                    />
                    <h4 className="font-baskerville text-lg md:text-2xl text-center 2xl:text-left pb-2 w-full">
                      &#x201C;{el.username}&#x201D;
                    </h4>
                    <p className="font-sans text-center 2xl:text-left  ">
                      {el.text}
                    </p>
                  </div>
                </div>
              </ScrollMotionEffect>
            ))}
          </div>
        </div>
      </article>
    </section>
  );
};

export default page;
