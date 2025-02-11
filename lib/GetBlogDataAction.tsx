export default async function GetAllPostData() {
  const blogData = await fetch(
    "https://backend-tampa-motion.vercel.app/site/blog",
    {
      next: { revalidate: 60 },
    }
  );
  return blogData.json();
}
