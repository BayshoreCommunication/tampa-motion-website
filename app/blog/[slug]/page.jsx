import React from "react";
import Head from "next/head";
import PageHeroSection from "@/components/shared/PageHeroSection";
import GetAllPostData from "@/lib/GetBlogDataAction";
import ScrollMotionEffect from "@/components/motion/ScrollMotionEffect";
import Image from "next/image";
import Link from "next/link";
import parse from "html-react-parser";

const css = `
 h1, h2, p, br, nav {
  padding-top: 10px;
  padding-bottom: 10px;
  line-height: normal;
}

h1, h2 {
  font-family: inherit;
}

h1 {
  font-size: 40px;
}

h2 {
  font-size: 25px;
}

p {
  font-size: 17px;
  padding-top: 6px;
  padding-bottom: 6px;
}

ul {
  list-style-type: disc;
}
`;

function extractTextFromHtml(htmlString) {
  return htmlString.replace(/<\/?[^>]+(>|$)/g, "");
}

function truncateText(text, wordLimit) {
  const words = text.split(/\s+/);
  if (words.length > wordLimit) {
    return words.slice(0, wordLimit).join(" ") + "...";
  }
  return text;
}

export async function generateMetadata({ params }) {
  const blogPostData = await GetAllPostData();

  const blogDetails = blogPostData?.data?.find(
    (blogs) => blogs.slug === params.slug
  );

  if (!blogDetails) {
    return {
      title: "Blog not found",
      description: "No blog post available.",
    };
  }

  const rawDescription = blogDetails?.body || "";
  const plainTextDescription = extractTextFromHtml(rawDescription);
  const shortDescription = truncateText(plainTextDescription, 120);

  return {
    title: blogDetails?.title,
    description: shortDescription,
    openGraph: {
      title: blogDetails?.title,
      description: shortDescription,
      images: blogDetails?.featuredImage?.image?.url,
      url: `https://www.melamedlawpllc.com/blog/${blogDetails?.slug}`,
      type: "article",
      site_name: "melamedlawpllc.com",
    },
  };
}

const Page = async ({ params }) => {
  const blogPostData = await GetAllPostData().then((res) => res.data);

  const blogDetails = blogPostData?.find((blogs) => blogs.slug === params.slug);

  if (!blogDetails) {
    return (
      <div className="container py-10 text-center">
        <h1 className="text-3xl font-bold">Blog not found</h1>
        <p className="mt-4">The blog you are looking for does not exist.</p>
      </div>
    );
  }

  const postDate = (date) => {
    return new Date(date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <>
      <style>{css}</style>
      <article className="bg-white text-black">
        <PageHeroSection
          title={blogDetails?.title}
          description={blogDetails?.shortDescription}
        />
        <ScrollMotionEffect effect="fade-up" duration={1500}>
          <div className="container grid gap-12 py-5 grid-cols-1 sm:grid-cols-3">
            {/* Main Blog Content */}
            <div className="col-span-2">
              <div className="flex items-center justify-between">
                <p className="text-[.9rem] md:text-[1rem] italic mt-4">
                  {blogDetails?.category || "Blog Post"}
                </p>
                <p className="text-[.9rem] md:text-[1rem] italic mt-4">
                  {postDate(blogDetails?.createdAt)}
                </p>
              </div>

              <h2 className="mb-4 text-2xl md:text-4xl font-bold tracking-normal text-left text-[#1B2639]">
                {blogDetails?.title}
              </h2>

              {blogDetails?.featuredImage?.image?.url && (
                <Image
                  width={1000}
                  height={300}
                  src={blogDetails.featuredImage.image.url}
                  alt={blogDetails?.featuredImage?.altText || "Blog image"}
                  className="w-full bg-center bg-cover rounded-md"
                />
              )}

              <div className="mt-4 text-md">
                {parse(blogDetails?.body || "")}
              </div>
            </div>

            {/* Sidebar */}
            <div className="col-span-2 sm:col-span-1 h-full max-h-[1000px] overflow-y-auto p-3 rounded-lg">
              <h2 className="font-medium text-4xl text-black border-b-2 border-gray-500 pb-4 mb-6">
                Recent Blogs
              </h2>
              {blogPostData
                ?.filter(
                  (pub) => pub.published === true && pub.slug !== params.slug
                )
                ?.map((blogs, index) => (
                  <Link
                    key={index}
                    href={`/blog/${blogs?.slug}`}
                    className="flex items-start gap-3 p-3 rounded-md bg-white shadow-sm hover:shadow-md transition"
                  >
                    {blogs?.featuredImage?.image?.url && (
                      <Image
                        width={100}
                        height={100}
                        src={blogs.featuredImage.image.url}
                        alt={blogs?.featuredImage?.altText || "Blog thumbnail"}
                        className="w-[100px] h-[100px] object-cover rounded-md"
                      />
                    )}
                    <div>
                      <div className="text-lg font-bold text-black line-clamp-2">
                        {blogs?.title}
                      </div>
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        </ScrollMotionEffect>
      </article>
    </>
  );
};

export default Page;
