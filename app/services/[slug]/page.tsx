import PageHeroSection from "@/components/shared/PageHeroSection";
import type { Metadata, ResolvingMetadata } from "next";

type Props = {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  // // read route params
  // const id = (await params).id;
  //
  // // fetch data
  // const product = await fetch(`https://.../${id}`).then((res) => res.json());
  //
  // // optionally access and extend (rather than replace) parent metadata
  // const previousImages = (await parent).openGraph?.images || [];
  //
  // return {
  //   title: product.title,
  //   openGraph: {
  //     images: ["/some-specific-page-image.jpg", ...previousImages],
  //   },
  // };
  return {
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
}
const page = ({ params }: { params: { slug: string } }) => {
  return (
    <article className="h-screen bg-white text-black ">
      <PageHeroSection title="Service Content" description="Service Content" />

      <div className="container text-center py-10 md:py-20">
        Service Content
      </div>
    </article>
  );
};

export default page;
