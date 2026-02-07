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
        <div className="container py-10 lg:pt-16 lg:pb-8">
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
                  The clinic offers a consultation available by
                  phone or in-person and will gladly discuss your case with you
                  at your convenience. Contact Tampa Motion today to schedule an
                  appointment.
                </p>
              </div>
              <section className="">
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
              </section>
              <section className="">
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
              </section>
              <section className="col-span-2 md:col-span-1">
                <h2 className="font-semibold text-white text-[22px]">
                  Contact us
                </h2>
                <hr className="w-36 mt-2 mb-6 border-white" />
                <ul className="ml-0 text-[15px] font-medium text-white list-none">
                  <li className="mb-4">
                    <div className="flex items-center gap-x-1">
                      <IoLocationSharp className="size-6 text-white" />

                      <h3 className="font-semibold text-white text-[20px]">
                        Location
                      </h3>
                    </div>
                    <Link
                      href={"#"}
                      className=" hover:underline duration-300"
                      target="_blank"
                    >
                      {`8333 Gunn Highway, Tampa, FL 33626`}
                    </Link>
                  </li>
                  <li className="mb-4">
                    <div className="flex items-center gap-x-1">
                      <RiPhoneFill className="size-6 text-white" />

                      <h3 className="font-semibold text-white text-[20px]">
                        Contact
                      </h3>
                    </div>
                    <div className="flex flex-wrap gap-x-3 gap-y-1">+1 (813) 291-3536</div>
                  </li>

                  <li className="mb-4">
                    <div className="flex items-center gap-x-1">
                      <MdMarkEmailUnread className="size-6 text-white" />

                      <h3 className="font-semibold text-white text-[20px]">
                        Email
                      </h3>
                    </div>
                  </li>
                </ul>
              </section>
            </div>
          </div>
          <hr className="my-6 border-white sm:mx-auto lg:my-8" />
          <div className="md:flex :items-center sm:justify-between">
            <div className="text-[18px] font-medium text-center text-white">
              <span>© {new Date().getFullYear()}</span>{" "}
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
