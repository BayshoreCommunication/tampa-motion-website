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
    <div className="bg-doctors bg-cover text-black lg:pb-16 xl:pb-6 pb-14">
      <ScrollMotionEffect effect="fade-up" duration={2000}>
        <div className="container">
          <section className="px-5 inline-grid grid-flow-row auto-rows-min grid-cols-1 py-10 md:py-20">
            <div className="col-span-1">
              <h2 className="text-2xl font-bold  text-textSecondary text-center md:text-3xl lg:text-5xl">
                Testimonials
              </h2>
              <h4 className="font-sans py-3 text-black text-center md:py-5 lg:py-8 lg:px-20 2xl:px-52">
                Check out what others have to say about their experience with
                our care and how it’s improved their quality of life. Their
                stories show our dedication to giving you the right support,
                treatment, and results. Got your own story to share? We’d love
                to hear it.
              </h4>
            </div>

            <div className="col-span-1 relative h-60 w-full z-50 opacity-100 ">
              <div className=" md:hidden lg:hidden py-4">
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
                      className="text-center flex justify-center items-center  bg-[#EFEFEF] rounded-2xl py-6 px-4"
                      key={index}
                    >
                      <div className="flex flex-col justify-start items-center w-full gap-3 ">
                        <div className="basis-5/12">
                          <Image
                            src={el.avatar}
                            alt="avatar"
                            width={32}
                            height={32}
                            className="rounded-full w-16"
                          />
                        </div>
                        <div className="flex flex-col justify-center items-center text-textSecondary">
                          <Rating rating={el.rating} className="pb-3" />
                          <h4 className="font-baskerville text-lg text-left line-clamp-1">
                            {el.username}
                          </h4>
                          <p className="font-sans text-sm text-center line-clamp-4">
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
                      className="text-center flex justify-center items-center  bg-[#EFEFEF] rounded-2xl py-6 px-4 "
                      key={index}
                    >
                      <div className="flex flex-col justify-start items-center w-full gap-3 hover:scale-105 transition-all duration-500 ease-in-out">
                        <div className="basis-5/12 ">
                          <Image
                            src={el.avatar}
                            alt="avatar"
                            width={32}
                            height={32}
                            className="rounded-full w-16"
                          />
                        </div>
                        <div className="flex flex-col justify-center items-center text-textSecondary">
                          <Rating rating={el.rating} className="pb-3" />
                          <h4 className="font-baskerville text-lg text-left line-clamp-1">
                            &#x201C; {el.username} &#x201D;
                          </h4>
                          <p className="font-sans text-sm text-center line-clamp-4">
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
                      <div className="flex 2xl:flex-row flex-col justify-center items-center xl:items-center 2xl:justify-start 2xl:items-start w-full gap-6  hover:scale-105 transition-all duration-400 ease-in-out">
                        <div className="basis-5/12 ">
                          <Image
                            src={el.avatar}
                            alt="avatar"
                            width={72}
                            height={72}
                            className="rounded-full w-full lg:w-16 "
                          />
                        </div>
                        <div className="flex flex-col justify-center 2  2xl:items-start lg:items-center text-textSecondary">
                          <Rating rating={el.rating} className="pb-3" />
                          <h4 className="font-baskerville text-2xl text-left  line-clamp-1">
                            &#x201C;{el.username}&#x201D;
                          </h4>
                          <p className="font-sans 2xl:text-left text-center lg:line-clamp-3 2xl:line-clamp-4">
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
    username: "Dedicated",
    avatar: "/assets/Testimonials/avatar.avif",
    text: "The therapists here truly care. They created my recovery plan to fit my needs and adjusted it as I improved. I always felt heard, supported, and in good hands. Grateful for everything they’ve done.",
    rating: 5,
  },
  {
    username: "Welcoming",
    avatar: "/assets/Testimonials/avatar.avif",
    text: "The team here is kind and professional. Booking an appointment is simple, and the clinic is always clean and welcoming. The calm atmosphere made every visit comfortable.",
    rating: 5,
  },
  {
    username: "Life-Changing",
    avatar: "/assets/Testimonials/avatar.avif",
    text: "After months of pain, I finally found relief. I’m truly grateful for their incredible care. Their therapy improved my movements, and now I am enjoying life without much discomfort.",
    rating: 5,
  },
  {
    username: "Professional",
    avatar: "/assets/Testimonials/avatar.avif",
    text: "The team here is amazing. They took the time to explain everything and made sure my treatment was right for me. Their care and support really helped in my recovery. I highly recommend them.",
    rating: 5,
  },
  {
    username: "Reassuring",
    avatar: "/assets/Testimonials/avatar.avif",
    text: "After my joint replacement, I was nervous about recovery, but the team put me at ease from day one. They walked me through every step, answered all my questions, and guided me with patience.",
    rating: 4,
  },
  {
    username: "Very Quick",
    avatar: "/assets/Testimonials/avatar.avif",
    text: "The clinic made scheduling my annual checkup easy. My appointment started on time. Always a great experience coming here.",
    rating: 4,
  },
];
export default Testimonials;
