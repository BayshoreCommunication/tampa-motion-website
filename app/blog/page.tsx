import React from "react";
import Head from "next/head";
import PageHeroSection from "@/components/shared/PageHeroSection";

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
    <section className="w-full flex flex-col justify-start items-center min-h-screen bg-white">
      <PageHeroSection
        title="Blogs"
        description="lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, quos."
      />
      <article className="bg-white w-full ">
        <div className="container bg-white">
          <div className="w-full">
            <div className="w-full h-[400px] bg-[url('/blog-1.jpg')] bg-cover bg-center bg-no-repeat"></div>
          </div>
        </div>
      </article>
    </section>
  );
};

export default page;
