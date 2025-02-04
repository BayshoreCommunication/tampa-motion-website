import PowerOfPhysiotherapy from "@/components/about/PowerOfPhysiotherapy";
import AchievingOptimal from "@/components/home/AchievingOptimal";
import BestServices from "@/components/home/BestServices";
import EasyStep from "@/components/shared/EasyStep";
import HeroSection from "@/components/home/HeroSection";
import Testimonials from "@/components/home/Testimonials";
import ScrollMotionEffect from "@/components/motion/ScrollMotionEffect";

export const metadata = {
  title:
    "Expert physiotherapists  in tampa,florida | Best Physical therapy Tampa | Tampa Motion |  Physical therapy",
  description:
    "Expert physiotherapists in Tampa, Florida, providing top-quality care at Tampa Motion. Experience the best physical therapy Tampa has to offer with personalized treatment plans to enhance recovery and mobility. Visit us for professional physical therapy services tailored to your needs.",
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
    <section className="bg-[#EFEFEF] ">
      <HeroSection />
      <AchievingOptimal />
      <BestServices />
      <EasyStep />
      <Testimonials extraSpace={"lg:pb-16 xl:pb-6 pb-14"} />
      <PowerOfPhysiotherapy />
    </section>
  );
}
