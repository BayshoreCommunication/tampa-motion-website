"use client";
import { RiArrowDropDownLine } from "react-icons/ri";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@nextui-org/react";
import React, { useEffect, useMemo, useState } from "react";
import { RiArrowDropRightLine } from "react-icons/ri";

import Link from "next/link";
import { usePathname } from "next/navigation";

import Image from "next/image";

import { serviceMenu, insuranceMenu } from "@/config/serviceData";

const MainHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSubClassOpen, setIsSubClassOpen] = useState(false);
  const [className, setClassName] = useState("");
  const pathname = usePathname();

  const [navbarColor, setNavbarColor] = useState(false);

  const [isDropdownVisibleForService, setDropdownVisibleForService] =
    useState(false);
  const [isDropdownVisibleForInsurance, setDropdownVisibleForInsurance] =
    useState(false);

  const toggleDropdownForInsurance = () => {
    setDropdownVisibleForInsurance(!isDropdownVisibleForInsurance);
    setClassName("");
  };
  const toggleDropdownForService = () => {
    setDropdownVisibleForService(!isDropdownVisibleForService);
    setClassName("");
  };
  const toggleSubClass = () => {
    setIsSubClassOpen(!isSubClassOpen);
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
    []
  );
  const menuItems = useMemo(
    () => [
      { title: "Home", slug: "/" },
      { title: "About", slug: "/about" },
      { title: "Services", slug: "/services" },
      { title: "Insurance Coverage", slug: "/#" },
      { title: "Blog", slug: "/blog" },
      { title: "Contact Us", slug: "/contact" },
    ],
    []
  );

  const setPathSlug = serviceMenu?.some((el) => {
    pathname === `/services/${el?.service_slug.toLowerCase()}`;
  });

  const setInsuranceSlug = insuranceMenu?.some(
    (el) => pathname === `/insurance-coverage/${el?.service_slug}`
  );

  useEffect(() => {
    const dynamicNav = document.querySelector(".dynamicNav");
    var prevstate = window.scrollY;
    window.onscroll = () => {
      var currentState = window.scrollY;
      if (currentState < prevstate) {
        dynamicNav.style.top = "0";
      } else {
        dynamicNav.style.top = "-200px";
      }
      prevstate = currentState;
    };
  });

  return (
    <section className={"relative z-50"}>
      <div className="bg-primary ">
        <div className="bg-white hidden xl:block dynamicNav fixed w-full transition-all ease-in-out duration-300">
          <div className="flex items-center container  justify-between ">
            <div className=" flex items-center gap-x-8 2xl:gap-x-16 max-h-[94px]">
              <Link href={"/"}>
                <Image
                  src="/assets/site-logo/tampa-motion-logo1.png"
                  alt="header logo"
                  width={300}
                  height={79}
                  className="cursor-pointer w-[300px] xl:w-[300px]    m-2 max-h-[78px]"
                />
              </Link>
            </div>

            <div className="">
              <div className="flex items-center justify-stretch gap-x-2  2xl:gap-x-8">
                {menuItems.map((el, index) =>
                  el?.title === "Services" ? (
                    <div
                      className="relative inline-block"
                      onMouseEnter={toggleDropdownForService}
                      onMouseLeave={toggleDropdownForService}
                      key={index}
                    >
                      <div className="group">
                        <div className="flex items-center gap-1 ">
                          <Link
                            href={el?.slug}
                            className={`flex items-center gap-x-1 cursor-pointer text-black text-sm  xl:text-[14px] 2xl:text-[16px]  font-medium capitalize hover:text-secondary ${pathname === el.slug || setPathSlug ? " border border-secondary rounded-full text-secondary py-1 lg:py-2 px-2 lg:px-5" : ""} `}
                          >
                            Services
                            <span>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className={`size-4 font-black transform transition-transform duration-200 ${isDropdownVisibleForService ? "rotate-0" : "rotate-180"}`}
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
                        <section className="absolute hidden group-hover:block bg-white shadow-lg rounded pt-6  ">
                          <ul className="cursor-pointer list-none rounded-md">
                            {serviceMenu?.map((el, index) => (
                              <li key={index} className="p-0 m-0">
                                <div
                                  className={`py-2 px-4 flex relative w-full h-full flex-col text-base  xl:text-[14px] 2xl:text-[16px]  hover:text-secondary transition-all duration-250 ease-in-out border-b rounded-md ${pathname === `/services/${el?.service_slug.toLowerCase()}` || setPathSlug ? " text-secondary " : "text-slate-900"}`}
                                  onMouseEnter={() => {
                                    setIsSubClassOpen(!isSubClassOpen);
                                    setClassName(el.service);
                                  }}
                                >
                                  <p className="  w-[285px]">
                                    <Link
                                      className="flex justify-between items-center "
                                      href={`/services/${el.service_slug.toLowerCase()}`}
                                    >
                                      {el.service}
                                      <span className="w-5 h-5">
                                        {className !== el.service ? (
                                          <RiArrowDropDownLine
                                            className={`p-0 y-0 size-5 ${serviceMenu.filter((e) => e.service === el?.service)[0]?.subClass?.length == 0 ? " text-white " : " "}`}
                                          />
                                        ) : (
                                          <RiArrowDropRightLine
                                            className={`size-5 p-0 y-0 size-5${serviceMenu.filter((e) => e.service === el?.service)[0]?.subClass?.length == 0 ? " text-white " : " "}`}
                                          />
                                        )}
                                      </span>
                                    </Link>
                                    {className === el.service ? (
                                      <div
                                        className={`"text-primary absolute top-0 -right-[316px] w-full z-20 bg-white  transition-all duration-250 ease-in-out rounded-md " ${el.subClass.length == 0 ? "" : "border border-gray-200"}`}
                                      >
                                        {serviceMenu
                                          .filter(
                                            (e) => e.service === el.service
                                          )[0]
                                          ?.subClass?.map(
                                            (subService, index) => (
                                              <li
                                                key={index}
                                                className={`"list-none border-b last:border-b-0 rounded-md  p-0 m-0 " ${subService.service === "" ? "hidden" : ""}`}
                                              >
                                                <Link
                                                  href={`/services/${subService.service_slug.toLowerCase()}`}
                                                  className={`py-2 px-4 flex relative w-full h-full flex-col text-base  xl:text-[14px] 2xl:text-[16px]  hover:text-secondary transition-all duration-250 ease-in-out rounded-md text-wrap ${pathname === `/services/${el?.service_slug.toLowerCase()}` ? " text-secondary " : "text-slate-900"}`}
                                                >
                                                  {subService.service}
                                                </Link>
                                              </li>
                                            )
                                          )}
                                      </div>
                                    ) : (
                                      <></>
                                    )}
                                  </p>
                                </div>
                              </li>
                            ))}
                          </ul>
                        </section>
                      </div>
                    </div>
                  ) : el?.title === "Insurance Coverage" ? (
                    <div
                      className="relative inline-block"
                      onMouseEnter={toggleDropdownForInsurance}
                      onMouseLeave={toggleDropdownForInsurance}
                      key={index}
                    >
                      <div className="group">
                        <div className="flex items-center gap-1 ">
                          <p
                            className={`flex items-center gap-x-1 cursor-pointer text-black text-sm xl:text-[14px] 2xl:text-[16px] font-medium capitalize hover:text-secondary ${pathname === el.slug || setInsuranceSlug ? " border border-secondary rounded-full text-secondary py-1 lg:py-2 px-2 lg:px-5" : ""} `}
                          >
                            Insurance Coverage
                            <span>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className={`size-4 font-black transform transition-transform duration-200 ${isDropdownVisibleForInsurance ? "rotate-0" : "rotate-180"}`}
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M11.47 7.72a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 1 1-1.06 1.06L12 9.31l-6.97 6.97a.75.75 0 0 1-1.06-1.06l7.5-7.5Z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            </span>
                          </p>
                        </div>
                        <section className="absolute hidden group-hover:block bg-white shadow-lg rounded pt-6  ">
                          <ul className="cursor-pointer list-none rounded-md">
                            {insuranceMenu?.map((el, index) => (
                              <li key={index} className="p-0 m-0">
                                <div
                                  className={`py-2 px-4 flex relative w-full h-full flex-col text-base  xl:text-[14px] 2xl:text-[16px]  hover:text-secondary transition-all duration-250 ease-in-out border-b rounded-md ${pathname === `/insurance-coverage/${el?.service_slug.toLowerCase()}` ? " text-secondary " : "text-slate-900"}`}
                                  onMouseEnter={() => {
                                    setIsSubClassOpen(!isSubClassOpen);
                                    setClassName(el.service);
                                  }}
                                >
                                  <p className="  w-[285px]">
                                    <Link
                                      className="flex justify-between items-center "
                                      href={`/insurance-coverage/${el.service_slug.toLowerCase()}`}
                                    >
                                      {el.service}
                                      <span className="w-5 h-5">
                                        {className !== el.service ? (
                                          <RiArrowDropDownLine
                                            className={`p-0 y-0 size-5 ${insuranceMenu.filter((e) => e.service === el?.service)[0]?.subClass?.length == 0 ? " text-white " : " "}`}
                                          />
                                        ) : (
                                          <RiArrowDropRightLine
                                            className={`size-5 p-0 y-0 size-5${insuranceMenu.filter((e) => e.service === el?.service)[0]?.subClass?.length == 0 ? " text-white " : " "}`}
                                          />
                                        )}
                                      </span>
                                    </Link>
                                    {className === el.service ? (
                                      <div
                                        className={`"text-primary absolute top-0 -right-[316px] w-full z-20 bg-white  transition-all duration-250 ease-in-out rounded-md " ${el.subClass.length == 0 ? "" : "border border-gray-200"}`}
                                      >
                                        {serviceMenu
                                          .filter(
                                            (e) => e.service === el.service
                                          )[0]
                                          ?.subClass?.map(
                                            (subService, index) => (
                                              <li
                                                key={index}
                                                className={`"list-none border-b last:border-b-0 rounded-md  p-0 m-0 " ${subService.service === "" ? "hidden" : ""}`}
                                              >
                                                <Link
                                                  href={`/insurance-coverage/${subService.service_slug.toLowerCase()}`}
                                                  className={`py-2 px-4 flex relative w-full h-full flex-col text-base  xl:text-[14px] 2xl:text-[16px]  hover:text-secondary transition-all duration-250 ease-in-out rounded-md text-wrap ${pathname === `/practice-areas/${el?.service_slug.toLowerCase()}` ? " text-secondary " : "text-slate-900"}`}
                                                >
                                                  {subService.service}
                                                </Link>
                                              </li>
                                            )
                                          )}
                                      </div>
                                    ) : (
                                      <></>
                                    )}
                                  </p>
                                </div>
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
                      className={`cursor-pointer text-black text-sm xl:text-[14px] 2xl:text-[16px] font-medium capitalize hover:text-secondary ${pathname === el.slug ? " border border-secondary rounded-full text-secondary py-1 lg:py-2 px-2 lg:px-5" : ""} `}
                    >
                      {el.title}
                    </Link>
                  )
                )}
              </div>
            </div>

            <div className="">
              <button className="transition-all hover:scale-110 ease-in-out duration-500 text-white  xl:text-[14px] 2xl:text-[16px] text-center">
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
        <div className="xl:hidden dynamicNav fixed w-full transition-all ease-in-out duration-300">
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
                className="xl:hidden text-black"
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
