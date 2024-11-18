import React from "react";
import Head from "next/head";

export const metadata = {
  title: "Blogs - Tampa Motion",
  description: "",
};
const page = () => {
  return (
    <article className="h-screen bg-white text-black ">
      <div className="container text-center py-10 md:py-20">Blogs</div>
    </article>
  );
};

export default page;
