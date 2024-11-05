import ContactForm from "@/components/contact/ContactForm";
import ScrollMotionEffect from "@/components/motion/ScrollMotionEffect";
import PageHeroSection from "@/components/shared/PageHeroSection";
import { Content } from "next/font/google";
import Link from "next/link";
import React from "react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaLocationDot,
  FaTwitter,
} from "react-icons/fa6";
import { IoIosCall, IoMdMailUnread } from "react-icons/io";
import { IoLogoInstagram } from "react-icons/io5";

export const metadata = {
  title:
    " Best immigration lawyer lakeland,Florida | Green Card, Visa & Citizenship Attorneys",
  description:
    "Trip Law is a trusted immigration law firm dedicated to helping clients secure Green Cards, family sponsorships, employment visas (H-1B, L-1, EB-1, EB-2), and asylum.Our experienced Florida attorneys provide personalized legal support to guide you through every step of your U.S. immigration journey.",
};
const page = () => {
  return (
    <section className=" bg-white">
      <PageHeroSection
        title="Contact Us"
        description="Lorem ipsum dolor sit amet, consectetuer adipiscing. Aenean commodo ligula eget dolor aenean massa cum sociis et natoque penatibus."
      />
      <div className="container md:px-40 py-10 md:py-20">
        <div className="flex flex-col md:flex-row items-start justify-between gap-4 bg-white md:p-10  shadow-xl p-0">
          <div className="w-full md:w-[40%]">
            <ScrollMotionEffect effect="fade-right" duration={2000}>
              <div className="flex flex-col justify-center items-center rounded-2xl p-4 bg-[#084a4d] text-white xl:col-span-1">
                <div className="p-4 rounded-2xl">
                  <h3 className="font-sans text-xl pb-4 2xl:py-8 2xl:text-3xl text-center font-bold 2xl:text-left">
                    Contact Information
                  </h3>
                  <p className="font-sans 2xl:text-base text-sm text-center xl:text-left">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Amet dolorum ipsa consequuntur sint id labore voluptatum
                    repellat quidem
                  </p>
                </div>
                <div className="flex flex-row pt-8 text-left w-full items-center pl-4 pb-2">
                  <div>
                    <IoIosCall />
                  </div>
                  <div className="text-sm md:text-base">
                    &nbsp;&nbsp;+26&nbsp;123&nbsp;456&nbsp;789
                  </div>
                </div>
                <div className="flex flex-row  text-left w-full items-center pl-4 pb-2">
                  <div>
                    <IoMdMailUnread />
                  </div>
                  <div className="text-sm md:text-base">
                    &nbsp;&nbsp;support@chirox.com
                  </div>
                </div>
                <div className="flex flex-row pb-5 2xl:pb-20  text-left w-full items-center pl-4">
                  <div>
                    <FaLocationDot />
                  </div>
                  <div className="text-sm md:text-base line-clamp-1">
                    &nbsp;&nbsp;JI Dr. Ir. Soekarno Tabanan - Bali
                  </div>
                </div>
                <section className="text-white flex flex-row justify-start items-center gap-4 h-fit py-4">
                  <Link href={"#"}>
                    <button className="p-2 rounded-md hover:border-white border border-[#084a4d]">
                      <FaFacebookF className="w-6 h-6" />
                    </button>
                  </Link>

                  <Link href={"#"}>
                    <button className="p-2 rounded-md hover:border-white border border-[#084a4d]">
                      <FaLinkedinIn className="w-6 h-6" />
                    </button>
                  </Link>

                  <Link href={"#"}>
                    <button className="p-2 rounded-md hover:border-white border border-[#084a4d]">
                      <FaTwitter className="w-6 h-6" />
                    </button>
                  </Link>

                  <Link href={"#"}>
                    <button className="p-2 rounded-md hover:border-white border border-[#084a4d]">
                      <IoLogoInstagram className="w-6 h-6" />
                    </button>
                  </Link>
                </section>
              </div>
            </ScrollMotionEffect>
          </div>
          <div className="w-full md:w-[70%]">
            <ScrollMotionEffect effect="fade-left" duration={2000}>
              <ContactForm />
            </ScrollMotionEffect>
          </div>
        </div>
      </div>
      <div>
        <ScrollMotionEffect effect="fade-in" duration={1000}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3587.1493927564125!2d-80.1481251!3d25.9631404!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9ac5e74403639%3A0x487bf5a8937d27c5!2s20200%20W%20Dixie%20Hwy%20%23902%2C%20Miami%2C%20FL%2033180%2C%20USA!5e0!3m2!1sen!2sbd!4v1730375390755!5m2!1sen!2sbd"
            width="600"
            height="450"
            loading="lazy"
            className="w-full"
          ></iframe>
        </ScrollMotionEffect>
      </div>
    </section>
  );
};

export default page;
