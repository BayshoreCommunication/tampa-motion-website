import ContactForm from "@/components/contact/ContactForm";
import ScrollMotionEffect from "@/components/motion/ScrollMotionEffect";
import PageHeroSection from "@/components/shared/PageHeroSection";
import Link from "next/link";
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
    "Best Physical therapy Tampa | Best Foot and Ankle Ligament and Tendon Repair  in tampa | Expert Cosmetic surgery physical therapyTampa",
  description:
    "Experience the best physical therapy Tampa at Tampa Motion. We specialize in the best foot and ankle ligament and tendon repair in Tampa, along with expert cosmetic surgery physical therapy Tampa for a smooth and effective recovery.",
  openGraph: {
    title:
      "Best Physical therapy Tampa | Best Foot and Ankle Ligament and Tendon Repair  in tampa | Expert Cosmetic surgery physical therapyTampa",
    description:
      "Experience the best physical therapy Tampa at Tampa Motion. We specialize in the best foot and ankle ligament and tendon repair in Tampa, along with expert cosmetic surgery physical therapy Tampa for a smooth and effective recovery.",
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
    <section className=" bg-white">
      <PageHeroSection
        title="Contact Us"
        description="If you have any questions or concerns, don’t hesitate to reach out. Our team will get back to you with answers as soon as we can."
      />
      <div className="container xl:px-40 py-10 md:py-20">
        <ScrollMotionEffect effect="fade-up" duration={2000}>
          <div className="flex flex-col md:flex-row items-start justify-between gap-6 bg-white md:p-10  shadow-xl p-0">
            <div className="w-full p-4">
              <div className="flex flex-col justify-center items-center rounded-2xl p-4 bg-[#084a4d] text-white xl:col-span-1">
                <div className="p-4 rounded-2xl">
                  <h3 className="font-sans text-xl pb-4 2xl:py-8 2xl:text-3xl text-center font-bold 2xl:text-left">
                    Contact Information
                  </h3>
                  <p className="font-sans 2xl:text-base text-sm text-center xl:text-left">
                    We’re here to assist you on your journey to recovery and
                    wellness. Reach out to us using the details below:
                  </p>
                </div>
                <div className="flex flex-row pt-8 text-left w-full items-center pl-4 pb-2">
                  <div>
                    <IoIosCall />
                  </div>
                  <p className="text-sm md:text-base">
                    &nbsp;&nbsp;+1 813-291-3536
                  </p>
                </div>
                <div className="flex flex-row  text-left w-full items-center pl-4 pb-2">
                  <div>
                    <IoMdMailUnread />
                  </div>
                  <p className="text-sm md:text-base">
                    &nbsp;&nbsp;athena.akram@tampamotion.com
                  </p>
                </div>
                <div className="flex flex-row pb-5 lg:pb-20  text-left w-full items-center pl-4">
                  <div className="place-self-start pt-0.5">
                    <FaLocationDot />
                  </div>
                  <p className="text-sm md:text-base pl-2 line-clamp-2 xl:line-clamp-2 ">
                    8333 Gunn Highway, Tampa, FL 33626
                  </p>
                </div>
                <section className="text-white flex flex-row justify-start items-center gap-4 h-fit py-4">
                  <ScrollMotionEffect effect="zoom-in" duration={2000}>
                    <Link
                      href={"https://www.facebook.com/tampamotion"}
                      target="_black"
                    >
                      <button className="p-2 rounded-md hover:border-white border-2 border-[#084a4d] transition-all duration-300 ease-in-out">
                        <FaFacebookF className="w-6 h-6" />
                      </button>
                    </Link>
                  </ScrollMotionEffect>
                  <ScrollMotionEffect effect="zoom-in" duration={2000}>
                    <Link
                      href={"https://www.linkedin.com/company/tampamotionpllc"}
                      target="_black"
                    >
                      <button className="p-2 rounded-md hover:border-white border-2 border-[#084a4d] transition-all duration-300 ease-in-out">
                        <FaLinkedinIn className="w-6 h-6" />
                      </button>
                    </Link>
                  </ScrollMotionEffect>
                  <ScrollMotionEffect effect="zoom-in" duration={2000}>
                    <Link
                      href={"https://x.com/tampamotionpllc"}
                      target="_black"
                    >
                      <button className="p-2 rounded-md hover:border-white border-2 border-[#084a4d] transition-all duration-300 ease-in-out">
                        <FaTwitter className="w-6 h-6" />
                      </button>
                    </Link>
                  </ScrollMotionEffect>
                  <ScrollMotionEffect effect="zoom-in" duration={2000}>
                    <Link href={"#"} target="_black">
                      <button className="p-2 rounded-md hover:border-white border-2 border-[#084a4d] transition-all duration-300 ease-in-out">
                        <IoLogoInstagram className="w-6 h-6" />
                      </button>
                    </Link>
                  </ScrollMotionEffect>
                </section>
              </div>
            </div>
            <div className="w-full p-4">
              <ContactForm />
            </div>
          </div>
        </ScrollMotionEffect>
      </div>
      <div>
        <ScrollMotionEffect effect="fade-in" duration={2000}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3520.0539515447263!2d-82.5781300779631!3d28.083897145566095!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88c2eabbc5fae6bf%3A0xbf90d7555eb0cc4!2s8333%20Gunn%20Hwy%2C%20Tampa%2C%20FL%2033626%2C%20USA!5e0!3m2!1sen!2sbd!4v1737883888923!5m2!1sen!2sbd"
            width="600"
            height="450"
            title="Maps"
            loading="lazy"
            className="w-full"
          ></iframe>
        </ScrollMotionEffect>
      </div>
    </section>
  );
};

export default page;
