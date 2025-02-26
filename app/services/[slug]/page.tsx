import PageHeroSection from "@/components/shared/PageHeroSection";
import type { Metadata, ResolvingMetadata } from "next";
import { servicesSlug } from "@/config/serviceData.js";
import parse from "html-react-parser";
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
  parent: ResolvingMetadata,
): Promise<Metadata> {
  // read route params
  const slug = (await params).slug;

  // fetch data
  const data = servicesSlug.find((service) => service.slug === slug);

  // optionally access and extend (rather than replace) parent metadata
  // const previousImages = (await parent).openGraph?.images || [];

  return {
    title:
      data?.sortTitle ||
      "Best Physical Therapists Near Me in Tampa, FL | Trusted clinic for physical therapy in tampa fl | Parkinson's Disease Care in Tampa | Top Plastic Surgeon Tampa, FL | Top Medical Spa Tampa, FL | Tampa Motion",
    description:
      data?.shortDescription ||
      "Looking for the best physical therapists near me in Tampa, FL? Tampa Motion is a trusted clinic for physical therapy in Tampa, FL, specializing in Parkinson's disease care in Tampa. We collaborate with top plastic surgeons Tampa, FL, and top medical spas Tampa, FL, for comprehensive recovery solutions.",
    openGraph: {
      title:
        data?.sortTitle ||
        "Best Physical Therapists Near Me in Tampa, FL | Trusted clinic for physical therapy in tampa fl | Parkinson's Disease Care in Tampa | Top Plastic Surgeon Tampa, FL | Top Medical Spa Tampa, FL | Tampa Motion",
      description:
        data?.shortDescription ||
        "Looking for the best physical therapists near me in Tampa, FL? Tampa Motion is a trusted clinic for physical therapy in Tampa, FL, specializing in Parkinson's disease care in Tampa. We collaborate with top plastic surgeons Tampa, FL, and top medical spas Tampa, FL, for comprehensive recovery solutions.",
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
  const data = servicesSlug.find(
    (service) => service.slug.toLowerCase() === slug,
  );
  // console.log(servicesSlug.map((e) => e.title));

  return (
    <article id="service" className=" bg-white text-black ">
      <style>{css}</style>

      <PageHeroSection
        title={data?.title || ""}
        description={data?.heroDescription || ""}
      />

      <div className="container py-10 md:py-16">
        {parse(data?.description || "")}
      </div>
    </article>
  );
};

export default page;
