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
        description="Everybody has their own story, and every recovery is a unique journey. With over 7 years of experience in physiotherapy and rehabilitation, we’ve had the privilege of helping over 600 people overcome injuries, regain function, and live more fully. But it’s not just the numbers that define us; it’s the lives we’ve touched along the way."
      />
      <ExperienceSection />
      <PowerOfPhysiotherapy />
      <BestServices />
    </section>
  );
};

export default page;
