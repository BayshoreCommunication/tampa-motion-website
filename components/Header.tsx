import React from "react";
import Nav from "./Nav";
import Image from "next/image";
import Link from "next/link";
import { Menu } from "./Menu";

const Header = () => {
  return (
    <div className="h-fit px-5 py-3  2xl:px-52 flex flex-row justify-between items-center bg-white 2xl:bg-background2 text-black 2xl:py-6 shadow-lg xl:px-52">
      <Image src={"/motionLogo.png"} alt="logo" width={160} height={46} />
      <Nav />
      <Link href={"#"} className="hidden 2xl:block">
        <button className="bg-primary h-10 w-56 text-white font-thin">
          Make An Appointment
        </button>
      </Link>
      <Menu className="block 2xl:hidden" />
    </div>
  );
};

export default Header;
