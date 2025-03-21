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
  parent: ResolvingMetadata
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
      "Experienced Physical Therapist tampa | Physical Rehabilitation Center Tampa| Spine and cosmetic surgeries in tampa | Tampa Motion",
    description:
      data?.shortDescription ||
      "Recover with an experienced physical therapist in Tampa at our leading physical rehabilitation center in Tampa. We specialize in spine and cosmetic surgeries in Tampa, providing expert care at Tampa Motion for optimal healing and mobility.",
    openGraph: {
      title:
        data?.sortTitle ||
        "Experienced Physical Therapist tampa | Physical Rehabilitation Center Tampa| Spine and cosmetic surgeries in tampa | Tampa Motion",
      description:
        data?.shortDescription ||
        "Recover with an experienced physical therapist in Tampa at our leading physical rehabilitation center in Tampa. We specialize in spine and cosmetic surgeries in Tampa, providing expert care at Tampa Motion for optimal healing and mobility.",
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
    (service) => service.slug.toLowerCase() === slug
  );
  // console.log(servicesSlug.map((e) => e.title));

  return (
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
  );
};

export default page;
