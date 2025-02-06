"use client";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@nextui-org/react";
import React, { useMemo, useState } from "react";

import { Libre_Baskerville } from "next/font/google";
import Link from "next/link";
import { usePathname } from "next/navigation";

import Image from "next/image";
//import { areaspracticeData } from "@/config/data";
import { services } from "@/config/serviceData";

const baskerville = Libre_Baskerville({ subsets: ["latin"], weight: "400" });

// // Debounce function to limit the rate of calling the handleScroll function
// const debounce = (func, wait) => {
//   let timeout;
//   return (...args) => {
//     clearTimeout(timeout);
//     timeout = setTimeout(() => func.apply(null, args), wait);
//   };
// };

const MainHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const [navbarColor, setNavbarColor] = useState(false);

  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };

  const menuItemsForMobile = useMemo(
    () => [
      { title: "Home", slug: "/" },
      { title: "About", slug: "/about" },
      { title: "Services", slug: "/services" },
      { title: "Blog", slug: "/blog" },
      { title: "Testimonials", slug: "/testimonials" },
      { title: "Contact Us", slug: "/contact" },
    ],
    [],
  );
  const menuItems = useMemo(
    () => [
      { title: "Home", slug: "/" },
      { title: "About", slug: "/about" },
      { title: "Services", slug: "/services" },
      { title: "Blog", slug: "/blog" },
      { title: "Contact Us", slug: "/contact" },
    ],
    [],
  );

  const setPathSlug = services?.some(
    (el) => pathname === `/services/${el?.service_slug}`,
  );

  return (
    <section className={"relative z-50"}>
      <div className="bg-primary ">
        <div className="bg-white hidden lg:block ">
          <div className="flex items-center container  justify-between ">
            <div className=" flex items-center gap-x-10 2xl:gap-x-16 max-h-[94px]">
              <Link href={"/"}>
                <Image
                  src="/assets/site-logo/tampa-motion-logo1.png"
                  alt="header logo"
                  width={300}
                  height={79}
                  className="cursor-pointer w-[300px] xl:w-[300px]  m-2 max-h-[78px]"
                />
              </Link>
            </div>

            <div className="">
              <div className="flex items-center justify-stretch gap-x-2  xl:gap-x-8">
                {menuItems.map((el, index) =>
                  el?.title === "Services" ? (
                    <div
                      className="relative inline-block"
                      onMouseEnter={toggleDropdown}
                      onMouseLeave={toggleDropdown}
                      key={index}
                    >
                      <div className="group">
                        <div className="flex items-center gap-1 ">
                          <Link
                            href={el?.slug}
                            className={`flex items-center gap-x-1 cursor-pointer text-black text-sm xl:text-[16px] font-medium capitalize hover:text-secondary ${pathname === el.slug || setPathSlug ? " border border-secondary rounded-full text-secondary py-1 lg:py-2 px-2 lg:px-5" : ""} `}
                          >
                            Services
                            <span>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className={`size-4 font-black transform transition-transform duration-200 ${isDropdownVisible ? "rotate-0" : "rotate-180"}`}
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M11.47 7.72a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 1 1-1.06 1.06L12 9.31l-6.97 6.97a.75.75 0 0 1-1.06-1.06l7.5-7.5Z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            </span>
                          </Link>
                        </div>
                        <section className="absolute hidden group-hover:block bg-white shadow-lg rounded p-6  overflow-y-scroll w-[300px] max-h-[400px]">
                          <ul className="py-2 list-none ml-0">
                            {services?.map((el, index) => (
                              <li key={index}>
                                <Link
                                  href={`/services/${el.service_slug}`}
                                  className={`py-2 flex  text-base xl:text-[16px] hover:text-secondary transition-all duration-250 ease-in-out border-b  ${pathname === `/practice-areas/${el?.slug}` ? " text-secondary " : "text-slate-900"}`}
                                >
                                  {el.service}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </section>
                      </div>
                    </div>
                  ) : (
                    <Link
                      key={el.slug}
                      href={`${el.slug}`}
                      className={`cursor-pointer text-black text-sm xl:text-[16px] font-medium capitalize hover:text-secondary ${pathname === el.slug ? " border border-secondary rounded-full text-secondary py-1 lg:py-2 px-2 lg:px-5" : ""} `}
                    >
                      {el.title}
                    </Link>
                  ),
                )}
              </div>
            </div>

            <div className="">
              {/* <Link
                href={"/contact"}
                className="text-white font-normal text-lg bg-secondary px-2 xl:px-16 py-2 xl:py-4 rounded-full hover:bg-orange-400"
              >
                Contact Us
              </Link> */}

              <button className="transition-all hover:scale-110 ease-in-out duration-500 text-white text-[6px]  lg:text-[16px] text-center">
                <Link
                  href="/contact"
                  className="bg-secondary  py-3  md:px-1 xl:px-4 rounded-sm "
                >
                  Make An Appointment
                </Link>
              </button>
            </div>
          </div>
        </div>
        <div className="lg:hidden ">
          <Navbar
            isMenuOpen={isMenuOpen}
            onMenuOpenChange={setIsMenuOpen}
            className={`!mx-0 !px-0 pb-0 pt-0  md:pb-3 md:pt-4 bg-white`}
          >
            <NavbarContent>
              <NavbarBrand>
                <Link href="/">
                  <Image
                    src="/assets/site-logo/tampa-motion-logo1.png"
                    alt="header logo"
                    width={300}
                    height={79}
                    className="w-[200px] h-auto max-h-[51px]"
                  />
                </Link>
              </NavbarBrand>
              <NavbarMenuToggle
                aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                className="lg:hidden text-black"
              />
            </NavbarContent>

            <NavbarMenu className="overflow-hidden">
              {menuItemsForMobile.map((el, index) => (
                <NavbarMenuItem key={el.slug} className="flex flex-row">
                  <Link
                    className={`w-full text-white text-center !text-xl font-medium py-1 hover:scale-110 transition-all ease-in-out duration-500 ${pathname === el.slug ? "!text-primary" : ""} ${index === 0 ? "mt-6" : ""}`}
                    href={el.slug}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {el.title}
                  </Link>
                </NavbarMenuItem>
              ))}
            </NavbarMenu>
          </Navbar>
        </div>
      </div>
    </section>
  );
};

export default React.memo(MainHeader);
