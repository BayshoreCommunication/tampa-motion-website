import React from "react";
import Head from "next/head";

export const metadata = {
  title:
    "tampa orthopedic clinic | Physical rehab Facilities in Tampa Florida | Neurological Rehab in tampa | Certified physical therapists in Florida | Tampa Motion",
  description:
    "Tampa Motion is a leading Tampa orthopedic clinic offering top physical rehab facilities in Tampa, Florida. Our certified physical therapists in Florida specialize in neurological rehab in Tampa, providing expert care for recovery and mobility improvement.",
  openGraph: {
    title:
      "tampa orthopedic clinic | Physical rehab Facilities in Tampa Florida | Neurological Rehab in tampa | Certified physical therapists in Florida | Tampa Motion",
    description:
      "Tampa Motion is a leading Tampa orthopedic clinic offering top physical rehab facilities in Tampa, Florida. Our certified physical therapists in Florida specialize in neurological rehab in Tampa, providing expert care for recovery and mobility improvement.",
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
