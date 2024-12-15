import Image from "next/image";
import Link from "next/link";
import { FaInstagram } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { MdMarkEmailUnread } from "react-icons/md";
import { RiPhoneFill } from "react-icons/ri";

import { siteConfig } from "@/config/site";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa6";

const MainFooter = () => {
  return (
    <>
      <footer className="bg-secondary">
        <div className="container py-16">
          <div className="md:flex md:justify-center">
            <div className="grid justify-center grid-cols-2 gap-8 sm:gap-6 xl:grid-cols-5 ">
              <div className="col-span-2 mx-auto mb-6 md:mb-0 md:mx-0">
                <Link
                  href="/"
                  className="flex items-center justify-center cursor-pointer md:justify-start"
                >
                  <Image
                    width={320}
                    height={200}
                    src={"/assets/site-logo/tampa-motion-logo-white.png"}
                    alt="tampa-motion-logo"
                    className="object-cover"
                  />
                </Link>
                <p className="py-5 text-[18px] font-normal text-center text-white md:text-left max-w-[450px] leading-8">
                  The firm offers a free consultation and will gladly discuss
                  your case with you at your convenience. Contact Tampa Motion,
                  PLLC today to schedule an appointment.
                </p>

                <div className="text-white  flex justify-center md:justify-start gap-3 mt-4 md:mt-6 ">
                  <Link
                    href="https://www.facebook.com/tampamotion"
                    target="_blank"
                    className="inline-block p-2 rounded  duration-300 border-2 border-secondary hover:border-white"
                  >
                    <FaFacebookF className="size-5" />
                  </Link>
                  <Link
                    href="https://www.linkedin.com/company/tampamotionpllc"
                    target="_blank"
                    className="inline-block p-2 rounded duration-300 border-2 border-secondary hover:border-white"
                  >
                    <FaLinkedinIn className="size-5" />
                  </Link>
                  <Link
                    href="https://x.com/tampamotionpllc"
                    target="_blank"
                    className="inline-block p-2 rounded  duration-300 border-2 border-secondary hover:border-white"
                  >
                    <FaTwitter className="size-5 " />
                  </Link>
                  <Link
                    href="#"
                    target="_blank"
                    className="inline-block p-2 rounded  duration-300 border-2 border-secondary hover:border-white"
                  >
                    <FaInstagram className="size-5 " />
                  </Link>
                  <Link
                    href="https://www.youtube.com/channel/UCTJg34YjVuwolUNmUs8tdJw"
                    target="_blank"
                    className="inline-block p-2 rounded duration-300 border-2 border-secondary hover:border-white"
                  >
                    <FaYoutube className="size-5 " />
                  </Link>
                </div>
              </div>
              <div className="">
                <h2 className="text-[22px] font-semibold text-white">
                  Quick Links
                </h2>
                <hr className="mt-2 mb-6 w-36 border-white" />
                <ul className="ml-0 text-white list-none text-[18px] font-medium">
                  {siteConfig?.footer?.quick_links?.map((el, index) => (
                    <li className="mb-4" key={index}>
                      <Link href={el.slug} className="hover:underline">
                        {el.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="">
                <h2 className="text-[22px] font-semibold text-white">
                  Legal Areas
                </h2>
                <hr className="w-36 mt-2 mb-6 border-white" />
                <ul className="ml-0 text-[18px] font-medium text-white list-none">
                  {siteConfig?.footer?.company?.map((el, index) => (
                    <li className="mb-4" key={index}>
                      <Link href={el.slug} className="hover:underline">
                        {el.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="col-span-2 md:col-span-1">
                <h2 className="font-semibold text-white text-[22px]">
                  Contact us
                </h2>
                <hr className="w-36 mt-2 mb-6 border-white" />
                <ul className="ml-0 text-[18px] font-medium text-white list-none">
                  <li className="mb-4">
                    <div className="flex items-center gap-x-1">
                      <IoLocationSharp className="size-6 text-white" />

                      <h3 className="font-semibold text-white text-[20px]">
                        Location
                      </h3>
                    </div>
                    <Link
                      href="https://www.google.com/maps/place/20200+W+Dixie+Hwy+%23902,+Miami,+FL+33180,+USA/@25.96314,-80.148125,16z/data=!4m5!3m4!1s0x88d9ac5e74403639:0x487bf5a8937d27c5!8m2!3d25.9631404!4d-80.1481251?hl=en&entry=ttu&g_ep=EgoyMDI0MTAyOS4wIKXMDSoASAFQAw%3D%3D"
                      className=" hover:underline duration-300"
                      target="_blank"
                    >
                      {`1900 Highland Oaks Blvd, Lutz, FL 33599`}
                    </Link>
                  </li>
                  <li className="mb-4">
                    <div className="flex items-center gap-x-1">
                      <RiPhoneFill className="size-6 text-white" />

                      <h3 className="font-semibold text-white text-[20px]">
                        Contact
                      </h3>
                    </div>
                    <div className="flex flex-wrap gap-x-3 gap-y-1">
                      <Link
                        href="tel:+1 813-291-3536"
                        className="hover:underline duration-300"
                      >
                        {`+1 813-291-3536`}
                      </Link>
                      {/* <Link
                        href="tel:+18635996735"
                        className="hover:underline duration-300"
                      >
                        (863) 599-6735
                      </Link> */}
                    </div>
                  </li>

                  <li className="mb-4">
                    <div className="flex items-center gap-x-1">
                      <MdMarkEmailUnread className="size-6 text-white" />

                      <h3 className="font-semibold text-white text-[20px]">
                        Email
                      </h3>
                    </div>
                    <Link
                      href="mailto:athena.akram@tampamotion.com"
                      className="hover:athena.akram@tampamotion.com"
                    >
                      athena.akram@tampamotion.com
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr className="my-6 border-white sm:mx-auto lg:my-8" />
          <div className="md:flex :items-center sm:justify-between">
            <div className="text-[18px] font-medium text-center text-white">
              © 2024{" "}
              <Link href="/" className="hover:underline text-white">
                Tampa Motion
              </Link>
              . All Rights Reserved.
            </div>

            <div className="text-[18px] font-medium text-center text-white">
              Design & Developed by{" "}
              <Link
                href="https://www.bayshorecommunication.com/"
                target="_blank"
                className="font-medium hover:underline text-white"
              >
                BayShore Communication
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default MainFooter;
