import Get_in_touch_form from "@/components/Get_in_touch_form";
import Link from "next/link";
import React from "react";
import { CiMail, CiTwitter } from "react-icons/ci";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosCall, IoLogoInstagram } from "react-icons/io";

const Contact = () => {
  return (
    <div className="inline-grid grid-cols-1 grid-flow-row auto-rows-min">
      <div className="inline-grid grid-cols-1 grid-flow-row auto-rows-min px-5 2xl:px-52  bg-doctors bg-cover py-5 md:py-8 2xl:py-20">
        <h1 className="text-2xl 2xl:text-7xl font-baskerville text-center md:text-left">
          Contact Us
        </h1>
        <p className="text-textSecondary font-sans text-base text-center md:text-left md:w-1/2 py-4">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat
          magni et laboriosam eligendi soluta, exercitationem omnis animi
          veritatis qui temporibus consequatur itaque perspiciatis, sit maxime
          unde doloribus eos reprehenderit corrupti!
        </p>
      </div>
      <div className="p-5 2xl:px-96 ">
        <div className="inline-grid grid-cols-1 xl:grid-cols-3 grid-flow-row auto-rows-min px-5 p-8 border shadow-2xl rounded-xl ">
          <div className="flex flex-col justify-center items-center rounded-2xl p-4 bg-[#084a4d] text-white xl:col-span-1">
            <div className="p-4 rounded-2xl">
              <h3 className="font-sans text-lg 2xl:text-2xl text-center font-bold 2xl:text-left">
                Contact Information
              </h3>
              <p className="font-sans 2xl:text-base text-sm text-left">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
                dolorum ipsa consequuntur sint id labore voluptatum repellat
                quidem
              </p>
            </div>
            <div className="flex flex-row pt-8 text-left w-full items-center pl-4">
              <div>
                <IoIosCall />
              </div>
              <div>&nbsp;&nbsp;+26&nbsp;123&nbsp;456&nbsp;789</div>
            </div>
            <div className="flex flex-row  text-left w-full items-center pl-4">
              <div>
                <CiMail />
              </div>
              <div>&nbsp;&nbsp;support@chirox.com</div>
            </div>
            <div className="flex flex-row pb-5 2xl:pb-20  text-left w-full items-center pl-4">
              <div>
                <FaLocationDot />
              </div>
              <div>&nbsp;&nbsp;JI Dr. Ir. Soekarno Tabanan - Bali</div>
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
                  <CiTwitter className="w-6 h-6" />
                </button>
              </Link>

              <Link href={"#"}>
                <button className="p-2 rounded-md hover:border-white border border-[#084a4d]">
                  <IoLogoInstagram className="w-6 h-6" />
                </button>
              </Link>
            </section>
          </div>
          <Get_in_touch_form className="xl:col-span-2" />
        </div>
      </div>

      <div>
        <iframe
          src="https://www.google.com/maps/place/20200+W+Dixie+Hwy+%23902,+Miami,+FL+33180,+USA/@25.9631404,-80.1481251,17z/data=!3m1!4b1!4m5!3m4!1s0x88d9ac5e74403639:0x487bf5a8937d27c5!8m2!3d25.9631404!4d-80.1481251?entry=ttu&g_ep=EgoyMDI0MTAyNy4wIKXMDSoASAFQAw%3D%3D"
          frameBorder="0"
          width="100%"
          height="500px"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
