import ExperienceSection from "@/components/about/ExperienceSection";
import PowerOfPhysiotherapy from "@/components/about/PowerOfPhysiotherapy";
import BestServices from "@/components/home/BestServices";
import PageHeroSection from "@/components/shared/PageHeroSection";
import React from "react";
import Head from "next/head";
export const metadata = {
  title: "About Us - Tampa Motion",
  description:
    "lorem ipsum dolor sit amet, consectetuer adipiscing. Aenean commodo ligula eget dolor aenean massa cum sociis et natoque penatibus.",
  openGraph: {
    title: "About Us - Tampa Motion",
    description:
      "lorem ipsum dolor sit amet, consectetuer adipiscing. Aenean commodo ligula eget dolor aenean massa cum sociis et natoque penatibus.",
    url: "https://www.tampamotion.com/about",
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
    <section className="">
      <PageHeroSection
        title="About Us"
        description="Lorem ipsum dolor sit amet, consectetuer adipiscing. Aenean commodo ligula eget dolor aenean massa cum sociis et natoque penatibus. Lorem ipsum dolor sit amet, consectetuer adipiscing. Aenean commodo ligula eget dolor aenean massa cum sociis et natoque penatibus."
      />
      <ExperienceSection />
      <PowerOfPhysiotherapy />
      <BestServices />
    </section>
  );
};

export default page;
