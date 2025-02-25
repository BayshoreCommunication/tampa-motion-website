import HeroSection from "@/components/home/HeroSection";
import ScrollMotionEffect from "@/components/motion/ScrollMotionEffect";
import ServiceCards from "@/components/services/ServiceCards";
import BookAnAppointment from "@/components/shared/BookAnAppointment";
import EasyStep from "@/components/shared/EasyStep";
import PageHeroSection from "@/components/shared/PageHeroSection";
import Head from "next/head";
import React from "react";

export const metadata = {
  title:
    "Advanced Physical Therapy Near Me | Sports Physical Therapy Tampa | Orthopedic Physical Therapy Florida| Pediatric Physical Therapy Tampa | Manual Physical Therapy Specialist Tampa | Tampa Motion",
  description:
    "Looking for advanced physical therapy near me? Tampa Motion offers expert care, including sports physical therapy Tampa, orthopedic physical therapy Florida, pediatric physical therapy Tampa, and manual physical therapy specialist Tampa. Get personalized treatment for optimal recovery!",
  openGraph: {
    title:
      "Advanced Physical Therapy Near Me | Sports Physical Therapy Tampa | Orthopedic Physical Therapy Florida| Pediatric Physical Therapy Tampa | Manual Physical Therapy Specialist Tampa | Tampa Motion",
    description:
      "Looking for advanced physical therapy near me? Tampa Motion offers expert care, including sports physical therapy Tampa, orthopedic physical therapy Florida, pediatric physical therapy Tampa, and manual physical therapy specialist Tampa. Get personalized treatment for optimal recovery!",
    url: "https://www.tampamotion.com/blog",
    siteName: "Tampa Motion",
    images: [
      {
        url: "/opengraph-image.jpg",
        width: 1200,
        height: 800,
      },
    ],
  },
};

const page = () => {
  return (
    <section className="w-full flex flex-col justify-center items-center">
      <PageHeroSection
        title="Services"
        description="Nothing matters more than your health. We shape every service with your well being in mind, delivering the best treatments to help you heal, move, and live better."
      />
      <article className="bg-white w-full">
        <div className="container bg-white">
          <ServiceCards />
        </div>
        <div className="bg-gradient-to-r from-[#0aa3e8] to-[#34e1d8] z-20 py-16  lg:py-32 text-black">
          <ScrollMotionEffect effect="fade-up" duration={2000}>
            <h3 className="text-xl  text-center md:text-3xl 2xl:text-5xl font-baskerville px-5 2xl:px-52">
              If you want avail these services{" "}
              <span className="block">Book an appointment today</span>
            </h3>
            <p className="text-center py-5 text-base 2xl:text-lg font-sans px-5 xl:px-52">
              Reserve your consultation and experience the difference of truly
              dedicated physical therapy. Ready to take that first step toward
              feeling better?
            </p>
          </ScrollMotionEffect>
        </div>

        <div className="container relative -top-20 ">
          <ScrollMotionEffect effect="fade-up" duration={2000}>
            <BookAnAppointment />
          </ScrollMotionEffect>
        </div>
      </article>
      <div className="bg-white w-full">
        <EasyStep className={" relative -top-10 "} />
      </div>
    </section>
  );
};

export default page;
