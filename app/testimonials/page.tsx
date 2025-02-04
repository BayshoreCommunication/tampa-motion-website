import Testimonials from "@/components/home/Testimonials";
import Head from "next/head";
import React from "react";
export const metadata = {
  title: "Testimonials - Tampa Motion",
  description: "",
};
const page = () => {
  return (
    <div className=" bg-white text-center  text-black">
      <Testimonials extraSpace={"xl:py-44  pb-10"} />
    </div>
  );
};

export default page;
