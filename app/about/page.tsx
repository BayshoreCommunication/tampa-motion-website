import ExperienceSection from "@/components/about/ExperienceSection";
import PowerOfPhysiotherapy from "@/components/about/PowerOfPhysiotherapy";
import BestServices from "@/components/home/BestServices";
import PageHeroSection from "@/components/shared/PageHeroSection";
import React from "react";

export const metadata = {
  title: "",
  description: "",
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
