import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { CiLocationOn, CiTwitter } from "react-icons/ci";
import { IoLogoInstagram } from "react-icons/io";
import { FiPhone } from "react-icons/fi";
import { FaLocationDot } from "react-icons/fa6";
const Footer = () => {
  return (
    <div className="bg-primary h-fit flex flex-col justify-center items-center  pt-10 px-10 pb-2 text-slate-200">
      <section className="flex flex-col justify-between w-full border-b-2 border-white">
        <div>
          <section className="hidden 2xl:block text-white font-baskerville text-4xl font-bold py-6">
            Tampa Motion <span className="text-base font-bold">PLLC</span>
          </section>
          <section className="2xl:hidden pb-8">
            <Image src={"/motionLogo.png"} alt="logo" width={160} height={46} />
          </section>
          <section className="text-slate-200 font-roboto text-sm font-thin w-[400px] pb-10">
            The firm offers a free consultation and will gladly discuss your
            case with you at your convenience. Contact Melamed Law, PLLC today
            to schedule an appointment.
          </section>
          <section className="text-white flex flex-row justify-start items-center gap-4 h-fit">
            <Link href={"#"}>
              <button className="p-2 rounded-md hover:border-white border border-primary">
                <FaFacebookF className="w-6 h-6" />
              </button>
            </Link>

            <Link href={"#"}>
              <button className="p-2 rounded-md hover:border-white border border-primary">
                <FaLinkedinIn className="w-6 h-6" />
              </button>
            </Link>

            <Link href={"#"}>
              <button className="p-2 rounded-md hover:border-white border border-primary">
                <CiTwitter className="w-6 h-6" />
              </button>
            </Link>

            <Link href={"#"}>
              <button className="p-2 rounded-md hover:border-white border border-primary">
                <IoLogoInstagram className="w-6 h-6" />
              </button>
            </Link>
          </section>
        </div>
        <div className="font-roboto">
          <section className=" p-4 border-b-2 border-slate-200 text-2xl font-medium pt-10 pb-2  w-fit">
            Quick Links
          </section>
          <section className="py-5 px-4 text-base">
            <ul className="text-base">
              <li className="py-2">
                <Link href={"#"}>About us</Link>
              </li>
              <li className="py-2">
                <Link href={"#"}>Practice Areas</Link>
              </li>
              <li className="py-2">
                <Link href={"#"}>Blog</Link>
              </li>
              <li className="py-2">
                <Link href={"#"}>Testimonials</Link>
              </li>
              <li className="py-2">
                <Link href={"#"}>Contact us</Link>
              </li>
            </ul>
          </section>
        </div>
        <div className="font-roboto">
          <section className=" p-4 border-b-2 border-slate-200 text-2xl font-medium pt-10 pb-2  w-fit">
            Legal Areas
          </section>
          <section className="py-5 px-4 text-base">
            <ul className="text-base">
              <li className="py-2">
                <Link href={"#"}>Disclaimer</Link>
              </li>
              <li className="py-2">
                <Link href={"#"}>Privacy Policy</Link>
              </li>
              <li className="py-2">
                <Link href={"#"}>Terms Of Service</Link>
              </li>
              <li className="py-2">
                <Link href={"#"}>Cookie Policy</Link>
              </li>
            </ul>
          </section>
        </div>
        <div className="font-roboto">
          <section className=" p-4 border-b-2 border-slate-200 text-2xl font-medium pt-10 pb-2 w-fit">
            Contact us
          </section>
          <section className="py-5 px-4 text-base">
            <ul className="text-base">
              <li className="py-2 flex flex-col items-start gap-2">
                <div className="flex items-center gap-2  ">
                  <div>
                    <FaLocationDot />
                  </div>
                  <p>Location</p>
                </div>
                <address>
                  20200 West Dixie Highway, Suite 902 Aventura, FL33180
                </address>
              </li>
              <li className="py-2 flex flex-row items-center gap-2">
                <div className="py-2 flex flex-col items-start gap-2">
                  <div className="flex items-center gap-2   ">
                    <div>
                      <FiPhone />
                    </div>
                    <p>Contact</p>
                  </div>
                  <a href="tel:954-529-0695">954-529-0695</a>
                </div>
              </li>
              <li className="py-2 flex flex-row items-center gap-2">
                <div className="py-2 flex flex-col items-start gap-2">
                  <div className="flex items-center gap-2  ">
                    <div>
                      <FaLocationDot />
                    </div>
                    <p>Email</p>
                  </div>
                  <a href="mailto:info@tampamotionpllc.com">
                    info@tampamotionpllc.com
                  </a>
                </div>
              </li>
            </ul>
          </section>
        </div>
      </section>
      <section className="w-full flex flex-col gap-2 justify-between items-center py-4 text-slate-200">
        <div>© 2024 Tampa Motion PLLC All Rights Reserved</div>
        <div>Design and Developed by Bayshore Communication </div>
      </section>
    </div>
  );
};

export default Footer;
