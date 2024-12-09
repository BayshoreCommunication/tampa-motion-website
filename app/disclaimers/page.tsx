import React from "react";
import Head from "next/head";

export const metadata = {
  title: "Disclaimers - Tampa Motion",
  description:
    "lorem ipsum dolor sit amet, consectetuer adipiscing. Aenean commodo ligula eget dolor aenean massa cum sociis et natoque penatibus.",
  openGraph: {
    title: "Disclaimers - Tampa Motion",
    description:
      "lorem ipsum dolor sit amet, consectetuer adipiscing. Aenean commodo ligula eget dolor aenean massa cum sociis et natoque penatibus.",
    //url: "https://www.tampamotion.com/disclaimers",
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
    <h1 className="h-screen bg-white text-center py-20 text-black">
      Disclaimers
    </h1>
  );
};

export default page;
