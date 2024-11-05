import HeroSection from "@/components/home/HeroSection";
import PageHeroSection from "@/components/shared/PageHeroSection";
import React from "react";

export const metadata = {
  title:
    " Best immigration lawyer lakeland,Florida | Green Card, Visa & Citizenship Attorneys",
  description:
    "Trip Law is a trusted immigration law firm dedicated to helping clients secure Green Cards, family sponsorships, employment visas (H-1B, L-1, EB-1, EB-2), and asylum.Our experienced Florida attorneys provide personalized legal support to guide you through every step of your U.S. immigration journey.",
};
const page = () => {
  return (
    <section className="w-full flex flex-row justify-center items-center">
      <PageHeroSection
        title="Services"
        description="Lorem ipsum dolor sit amet, consectetuer adipiscing. Aenean commodo ligula eget dolor aenean massa cum sociis et natoque penatibus."
      />
    </section>
  );
};

export default page;
