"use client";
import Image from "next/image";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import Rating from "./Rating";

const Testimonials = () => {
  return (
    <section className="inline-grid grid-flow-row auto-rows-min grid-cols-1 py-8  bg-doctors ">
      <div className="col-span-1">
        <h2 className="font-baskerville text-2xl  text-textSecondary text-center">
          Testimonials
        </h2>
        <h4 className="font-sans py-3 text-black font-thin text-sm text-center">
          Lorem ipsum dolor sit amet, consectetuer adipiscing. Aenean commodo
          ligula eget dolor aenean massa cum sociis et natoque penatibus.
        </h4>
      </div>

      <div className="col-span-1 relative h-60 w-full z-50 opacity-100 px-5">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper w-full h-full"
        >
          {reviews.map((review, index) => (
            <SwiperSlide
              className="text-center flex justify-center items-center bg-background2 rounded-2xl p-8 "
              key={index}
            >
              <div className="flex justify-start items-start w-full gap-6 ">
                <div className="basis-5/12">
                  <Image
                    src={review.avatar}
                    alt="avatar"
                    width={72}
                    height={72}
                    className="rounded-full w-full"
                  />
                </div>
                <div className="flex flex-col justify-center items-left text-textSecondary">
                  <Rating rating={review.rating} className="pb-3" />
                  <h4 className="font-baskerville text-2xl text-left">
                    {review.username}
                  </h4>
                  <p className="font-sans text-left">{review.text}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};
const reviews = [
  {
    username: "John Doe",
    avatar: "/avatar.avif",
    text: "Lorem ipsum dolor sit amet, consectetuer adipiscing. Aenean commodo ligula eget dolor aenean massa cum sociis et natoque penatibus.",
    rating: 3,
  },
  {
    username: "Luke Skywalker",
    avatar: "/avatar.avif",
    text: "Lorem ipsum dolor sit amet, consectetuer adipiscing. Aenean commodo ligula eget dolor aenean massa cum sociis et natoque penatibus.",
    rating: 5,
  },
  {
    username: "John Doe",
    avatar: "/avatar.avif",
    text: "Lorem ipsum dolor sit amet, consectetuer adipiscing. Aenean commodo ligula eget dolor aenean massa cum sociis et natoque penatibus.",
    rating: 5,
  },
  {
    username: "John Doe",
    avatar: "/avatar.avif",
    text: "Lorem ipsum dolor sit amet, consectetuer adipiscing. Aenean commodo ligula eget dolor aenean massa cum sociis et natoque penatibus.",
    rating: 5,
  },
  {
    username: "John Doe",
    avatar: "/avatar.avif",
    text: "Lorem ipsum dolor sit amet, consectetuer adipiscing. Aenean commodo ligula eget dolor aenean massa cum sociis et natoque penatibus.",
    rating: 4,
  },
];
export default Testimonials;
