import Image from "next/image";
// import GetAllPostData from "@/lib/GetAllPostData";
import parse from "html-react-parser";
import Head from "next/head";
import Link from "next/link";

const css = `
 h1, h2, p, br, nav {
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

export const metadata = {
  title: "Blog - Tampa Motion",
  description: "",
};

// function extractTextFromHtml(htmlString) {
//   // Use regex to strip HTML tags and extract plain text
//   const plainText = htmlString.replace(/<\/?[^>]+(>|$)/g, "");
//   return plainText;
// }

// function truncateText(text, wordLimit) {
//   const words = text.split(/\s+/);
//   if (words.length > wordLimit) {
//     return words.slice(0, wordLimit).join(" ") + "...";
//   }
//   return text;
// }

// export async function generateMetadata({ params }) {
//   const blogPostData = await GetAllPostData();

//   const blogDetails = blogPostData?.data?.find(
//     (blogs) => blogs.slug === params.slug
//   );

//   if (!blogDetails) {
//     return {
//       title: "Blog not found",
//       description: "No blog post available.",
//     };
//   }

//   const rawDescription = blogDetails?.body || "";
//   const plainTextDescription = extractTextFromHtml(rawDescription);
//   const shortDescription = truncateText(plainTextDescription, 120);

//   return {
//     title: blogDetails?.title,
//     description: shortDescription,
//     openGraph: {
//       title: blogDetails?.title,
//       description: shortDescription,
//       images: blogDetails?.featuredImage?.image?.url,
//       url: `https://www.melamedlawpllc.com/blog/${blogDetails?.slug}`,
//       type: "article",
//       site_name: "melamedlawpllc.com",
//     },
//   };
// }

// const page = async ({ params }) => {
// const blogPostData = await GetAllPostData();

// const blogDetails = blogPostData?.data?.filter(
//   (blogs) => blogs.slug === params.slug
// );

// const postDate = (date) => {
//   const formattedDate = new Date(date).toLocaleDateString("en-US", {
//     year: "numeric",
//     month: "long",
//     day: "numeric",
//   });
//   return formattedDate;
// };
const page = async () => {
  return (
    <article className="h-screen bg-white text-black ">
      <div className="container text-center py-10 md:py-20">Blog Content</div>
    </article>
  );
};

export default page;
