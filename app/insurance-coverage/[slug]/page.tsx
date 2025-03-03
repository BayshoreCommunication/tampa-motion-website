import PageHeroSection from "@/components/shared/PageHeroSection";
import type { Metadata, ResolvingMetadata } from "next";
import { insuranceSlug } from "@/config/serviceData.js";
import parse from "html-react-parser";
import BookAnAppointment from "@/components/shared/BookAnAppointment";
import EasyStep from "@/components/shared/EasyStep";
import ScrollMotionEffect from "@/components/motion/ScrollMotionEffect";

const css = `
# h1, h2, p, br, nav {
  padding-top: 10px;
  padding-bottom: 10px;
  line-height: normal;
}

h1, h2 {
  font-style: blog;
}

h1 {
  font-size: 40px;
}

h2 {
  font-size: 40px;
}

#service p {
  font-size: 18px;
  padding-top: 6px;
  padding-bottom: 6px;
}

#service ul {
  list-style-type: disc;
  
}

#service div>ul{
padding-left:40px

}


#service li{
  padding-bottom:8px;font-size: 18px;
}

`;

type Props = {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const slug = (await params).slug;

  // fetch data
  const data = insuranceSlug.find((insurance) => insurance.slug === slug);

  // optionally access and extend (rather than replace) parent metadata
  // const previousImages = (await parent).openGraph?.images || [];

  return {
    title:
      data?.sortTitle ||
      `Best Physical therapy Tampa | Best Foot and Ankle Ligament and Tendon Repair  in tampa`,
    description:
      data?.shortDescription ||
      "Experience the best physical therapy Tampa at Tampa Motion. We specialize in the best foot and ankle ligament and tendon repair in Tampa, along with expert cosmetic surgery physical therapy Tampa for a smooth and effective recovery.",
    openGraph: {
      title:
        data?.sortTitle ||
        `Best Physical therapy Tampa | Best Foot and Ankle Ligament and Tendon Repair  in tampa`,
      description:
        data?.shortDescription ||
        "Experience the best physical therapy Tampa at Tampa Motion. We specialize in the best foot and ankle ligament and tendon repair in Tampa, along with expert cosmetic surgery physical therapy Tampa for a smooth and effective recovery.",
      url: "https://www.tampamotion.com/services/" + slug,
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
const page = ({ params }: { params: { slug: string } }) => {
  // read route params
  const slug = params.slug;

  // fetch data
  const data = insuranceSlug.find(
    (insurance) => insurance.slug.toLowerCase() === slug
  );
  // console.log(servicesSlug.map((e) => e.title));

  return (
    <>
      <article id="service" className=" bg-white text-black ">
        <style>{css}</style>

        <PageHeroSection
          title={data?.title || ""}
          description={data?.heroDescription || ""}
        />

        <ScrollMotionEffect effect="fade-up" duration={1500}>
          <div className="container py-10 md:py-16">
            {parse(data?.description || "")}
          </div>
        </ScrollMotionEffect>
      </article>

      <article className="bg-white w-full">
        <div className="bg-gradient-to-r from-[#0aa3e8] to-[#34e1d8] z-20 py-16  lg:py-32 text-black">
          <ScrollMotionEffect effect="fade-up" duration={2000}>
            <h3 className="text-xl  text-center md:text-3xl 2xl:text-5xl font-baskerville px-5 2xl:px-52">
              If you want avail these services{" "}
              <span className="block">Book an appointment today</span>
            </h3>
            <p className="text-center py-5 text-base 2xl:text-lg font-sans px-5 xl:px-52">
              Reserve your consultation and experience the difference of truly
              dedicated physical therapy. Ready to take that first step toward
              feeling better?
            </p>
          </ScrollMotionEffect>
        </div>

        <div className="container relative -top-20 ">
          <ScrollMotionEffect effect="fade-up" duration={2000}>
            <BookAnAppointment />
          </ScrollMotionEffect>
        </div>
      </article>
      <div className="bg-white w-full">
        <EasyStep className={" relative -top-10 "} />
      </div>
    </>
  );
};

export default page;
