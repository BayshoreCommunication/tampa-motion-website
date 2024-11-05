import PowerOfPhysiotherapy from "@/components/about/PowerOfPhysiotherapy";
import AchievingOptimal from "@/components/home/AchievingOptimal";
import BestServices from "@/components/home/BestServices";
import EasyStep from "@/components/home/EasyStep";
import HeroSection from "@/components/home/HeroSection";
import Testimonials from "@/components/home/Testimonials";

export const metadata = {
  title: "Tampa Motion",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi imperdiet, mauris vitae molestie gravida, libero lorem fermentum elit, eu placerat nunc elit id massa. Morbi interdum lectus ut mauris vehicula",
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
