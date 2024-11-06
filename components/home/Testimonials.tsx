"use client";
import Image from "next/image";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import Rating from "../shared/Rating";

import ScrollMotionEffect from "@/components/motion/ScrollMotionEffect";

const Testimonials = () => {
  return (
    <div className="bg-doctors bg-cover text-black pb-8 sm:pb-0">
      <ScrollMotionEffect effect="fade-up" duration={2000}>
        <div className="container">
          <section className="px-5 inline-grid grid-flow-row auto-rows-min grid-cols-1 py-10 md:py-20">
            <div className="col-span-1">
              <h2 className="text-2xl font-bold  text-textSecondary text-center md:text-3xl lg:text-5xl">
                Testimonials
              </h2>
              <h4 className="font-sans py-3 text-black text-center md:py-5 lg:py-8 px-5 lg:px-20 2xl:px-52">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima
                neque repellendus adipisci recusandae, quisquam aliquam
                reiciendis ea? Ex exercitationem rerum ipsa debitis quod error
                accusantium beatae porro eaque quisquam! Ducimus. Lorem ipsum
                dolor sit amet consectetur adipisicing elit. Itaque deleniti
                sapiente, labore asperiores quod ullam voluptatem delectus, quam
                iure veritatis blanditiis maiores quos ut? Reprehenderit
                voluptate assumenda temporibus adipisci cum.
              </h4>
            </div>

            <div className="col-span-1 relative h-60 w-full z-50 opacity-100 px-5 ">
              <div className=" md:hidden lg:hidden">
                <Swiper
                  slidesPerView={1}
                  spaceBetween={30}
                  pagination={{
                    clickable: true,
                  }}
                  modules={[Pagination]}
                  className="mySwiper w-full h-full"
                >
                  {review.map((el, index) => (
                    <SwiperSlide
                      className="text-center flex justify-center items-center  bg-[#EFEFEF] rounded-2xl p-8 "
                      key={index}
                    >
                      <div className="flex justify-start items-start w-full gap-6 ">
                        <div className="basis-5/12">
                          <Image
                            src={el.avatar}
                            alt="avatar"
                            width={72}
                            height={72}
                            className="rounded-full w-full"
                          />
                        </div>
                        <div className="flex flex-col justify-center items-left text-textSecondary">
                          <Rating rating={el.rating} className="pb-3" />
                          <h4 className="font-baskerville text-2xl text-left line-clamp-1">
                            {el.username}
                          </h4>
                          <p className="font-sans text-left line-clamp-6">
                            {el.text}
                          </p>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
              <div className=" hidden md:block lg:hidden">
                <Swiper
                  slidesPerView={2}
                  spaceBetween={30}
                  pagination={{
                    clickable: true,
                  }}
                  modules={[Pagination]}
                  className="mySwiper w-full h-full"
                >
                  {review.map((el, index) => (
                    <SwiperSlide
                      className="text-center flex justify-center items-center bg-[#EFEFEF] rounded-2xl p-8 "
                      key={index}
                    >
                      <div className="flex justify-start items-start w-full gap-6 ">
                        <div className="basis-10/12">
                          <Image
                            src={el.avatar}
                            alt="avatar"
                            width={72}
                            height={72}
                            className="rounded-full w-full"
                          />
                        </div>
                        <div className="flex flex-col justify-center items-left text-textSecondary">
                          <Rating rating={el.rating} className="pb-3" />
                          <h4 className="font-baskerville text-2xl text-left line-clamp-1">
                            {el.username}
                          </h4>
                          <p className="font-sans text-left line-clamp-6">
                            {el.text}
                          </p>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>

              <div className=" hidden lg:block">
                <Swiper
                  slidesPerView={3}
                  spaceBetween={30}
                  pagination={{
                    clickable: true,
                  }}
                  modules={[Pagination]}
                  className="mySwiper w-full h-full"
                >
                  {review.map((el, index) => (
                    <SwiperSlide
                      className="text-center flex justify-center items-center bg-[#EFEFEF] rounded-2xl p-8 "
                      key={index}
                    >
                      <div className="flex justify-start items-start w-full gap-6 ">
                        <div className="basis-5/12">
                          <Image
                            src={el.avatar}
                            alt="avatar"
                            width={72}
                            height={72}
                            className="rounded-full w-full"
                          />
                        </div>
                        <div className="flex flex-col justify-center items-left text-textSecondary">
                          <Rating rating={el.rating} className="pb-3" />
                          <h4 className="font-baskerville text-2xl text-left line-clamp-1">
                            {el.username}
                          </h4>
                          <p className="font-sans text-left line-clamp-6">
                            {el.text}
                          </p>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </section>
        </div>
      </ScrollMotionEffect>
    </div>
  );
};
const review = [
  {
    username: "John Doe",
    avatar: "/assets/Testimonials/avatar.avif",
    text: "Lorem ipsum dolor sit amet, consectetuer adipiscing. Aenean commodo ligula eget dolor aenean massa cum sociis et natoque penatibus.",
    rating: 3,
  },
  {
    username: "Luke Skywalker",
    avatar: "/assets/Testimonials/avatar.avif",
    text: "Lorem ipsum dolor sit amet, consectetuer adipiscing. Aenean commodo ligula eget dolor aenean massa cum sociis et natoque penatibus.",
    rating: 5,
  },
  {
    username: "John Doe",
    avatar: "/assets/Testimonials/avatar.avif",
    text: "Lorem ipsum dolor sit amet, consectetuer adipiscing. Aenean commodo ligula eget dolor aenean massa cum sociis et natoque penatibus.",
    rating: 5,
  },
  {
    username: "John Doe",
    avatar: "/assets/Testimonials/avatar.avif",
    text: "Lorem ipsum dolor sit amet, consectetuer adipiscing. Aenean commodo ligula eget dolor aenean massa cum sociis et natoque penatibus.",
    rating: 5,
  },
  {
    username: "John Doe",
    avatar: "/assets/Testimonials/avatar.avif",
    text: "Lorem ipsum dolor sit amet, consectetuer adipiscing. Aenean commodo ligula eget dolor aenean massa cum sociis et natoque penatibus.",
    rating: 4,
  },
];
export default Testimonials;
