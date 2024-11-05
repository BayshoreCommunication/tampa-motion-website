import PowerOfPhysiotherapy from "@/components/about/PowerOfPhysiotherapy";
import AchievingOptimal from "@/components/home/AchievingOptimal";
import BestServices from "@/components/home/BestServices";
import EasyStep from "@/components/shared/EasyStep";
import HeroSection from "@/components/home/HeroSection";
import Testimonials from "@/components/home/Testimonials";

export const metadata = {
  title:
    " Best immigration lawyer lakeland,Florida | Green Card, Visa & Citizenship Attorneys",
  description:
    "Trip Law is a trusted immigration law firm dedicated to helping clients secure Green Cards, family sponsorships, employment visas (H-1B, L-1, EB-1, EB-2), and asylum.Our experienced Florida attorneys provide personalized legal support to guide you through every step of your U.S. immigration journey.",
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-USA",
    },
  },
  openGraph: {
    images: "/opengraph-image.jpg",
  },
};

export default function Home() {
  return (
    <section className="">
      <HeroSection />
      <AchievingOptimal />
      <BestServices />
      <EasyStep />
      <Testimonials />
      <PowerOfPhysiotherapy />
    </section>
  );
}
