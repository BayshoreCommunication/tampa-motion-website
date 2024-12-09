import React from "react";
import Head from "next/head";

export const metadata = {
  title: "Blogs - Tampa Motion",
  description:
    "lorem ipsum dolor sit amet, consectetuer adipiscing. Aenean commodo ligula eget dolor aenean massa cum sociis et natoque penatibus.",
  openGraph: {
    title: "Blogs - Tampa Motion",
    description:
      "lorem ipsum dolor sit amet, consectetuer adipiscing. Aenean commodo ligula eget dolor aenean massa cum sociis et natoque penatibus.",
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
    <article className="h-screen bg-white text-black ">
      <div className="container text-center py-10 md:py-20">
        <h1>Blogs</h1>
      </div>
    </article>
  );
};

export default page;
