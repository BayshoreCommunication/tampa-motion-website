import ExperienceSection from "@/components/about/ExperienceSection";
import Healing from "@/components/about/Healing";
import BestServices from "@/components/home/BestServices";
import PageHeroSection from "@/components/shared/PageHeroSection";
import React from "react";
import Head from "next/head";
export const metadata = {
  title:
    "Experienced Physical Therapist tampa | Physical Rehabilitation Center Tampa | Tampa Motion | Best Ligament repair therapy sessions Tampa | ExpertTendon injury physiotherapy Florida",
  description:
    "Experience top-quality care at Tampa Motion, your trusted physical rehabilitation center Tampa. Our experienced physical therapist Tampa specializes in the best ligament repair therapy sessions Tampa and expert tendon injury physiotherapy Florida. Recover stronger with personalized treatment!",
  openGraph: {
    title:
      "Experienced Physical Therapist tampa | Physical Rehabilitation Center Tampa | Tampa Motion | Best Ligament repair therapy sessions Tampa | ExpertTendon injury physiotherapy Florida",
    description:
      "Experience top-quality care at Tampa Motion, your trusted physical rehabilitation center Tampa. Our experienced physical therapist Tampa specializes in the best ligament repair therapy sessions Tampa and expert tendon injury physiotherapy Florida. Recover stronger with personalized treatment!",
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
        description="Everybody has their own story, and every recovery is a unique journey. With over 15 years of experience in physiotherapy and rehabilitation, we’ve had the privilege of helping over 600 people overcome injuries, regain function, and live more fully. But it’s not just the numbers that define us; it’s the lives we’ve touched along the way."
      />
      <ExperienceSection />
      <Healing />
      <BestServices />
    </section>
  );
};

export default page;
