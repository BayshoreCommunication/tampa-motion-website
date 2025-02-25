import React from "react";
import Head from "next/head";
import PageHeroSection from "@/components/shared/PageHeroSection";
import GetAllPostData from "@/lib/GetBlogDataAction";
import ScrollMotionEffect from "@/components/motion/ScrollMotionEffect";
import Image from "next/image";
import Link from "next/link";

export async function generateMetadata({ params }) {
  return {
    title:
      "Tampa orthopedic clinic | Physical rehab Facilities in Tampa Florida | Neurological Rehab in tampa | Certified physical therapists in Florida | Tampa Motion",
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
}

const page = async () => {
  const posts = await GetAllPostData().then((res) => res.data);

  return (
    <section className="w-full flex flex-col justify-start items-center min-h-screen bg-white">
      <PageHeroSection
        title="Blogs"
        description="Welcome to our blog. Here, we share expert advice, tips, and success stories to help you on your journey to a healthy life."
      />
      <article className="bg-white w-full ">
        <div className="container bg-white grid grid-flow-row auto-rows-max grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-10">
          {posts?.map((el, index) => (
            <ScrollMotionEffect effect="fade-up" duration={2000} key={index}>
              <div className=" bg-white !shadow-md !rounded-md border h-full hover:scale-105 transition-all duration-400 ease-in-out">
                <Image
                  src={el?.featuredImage?.image?.url}
                  alt="Custom Icon"
                  width={500}
                  height={400}
                  className="mx-auto h-[400px]"
                />
                <div className="pt-2 pb-8 px-4">
                  <h1 className="font-semibold  text-lg text-black text-center md:text-left mt-5">
                    {el?.title}
                  </h1>
                  <p className="text-base text-black text-center md:text-left mt-2 line-clamp-2 ">
                    {el?.shortTitle}
                  </p>
                  <div className="mt-8">
                    <Link
                      href={`/blog/${el?.slug}`}
                      className="text-secondary font-normal text-lg bg-none px-4 py-2 rounded-full hover:bg-secondary hover:text-white border-2 border-secondary  "
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            </ScrollMotionEffect>
          ))}
        </div>
      </article>
    </section>
  );
};

export default page;
