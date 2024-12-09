import React from "react";
import Head from "next/head";

export const metadata = {
  title: "Privacy Policy - Tampa Motion",
  description:
    "lorem ipsum dolor sit amet, consectetuer adipiscing. Aenean commodo ligula eget dolor aenean massa cum sociis et natoque penatibus.",
  openGraph: {
    title: "Privacy Policy - Tampa Motion",
    description:
      "lorem ipsum dolor sit amet, consectetuer adipiscing. Aenean commodo ligula eget dolor aenean massa cum sociis et natoque penatibus.",
    //url: "https://www.tampamotion.com/privacy-policy",
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
      Privacy Policy
    </h1>
  );
};

export default page;
