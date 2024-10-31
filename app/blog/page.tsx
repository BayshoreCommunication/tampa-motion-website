import Best_Services from "@/components/Best_Services";
import Experience from "@/components/Experience";
import Experience2 from "@/components/Experience2";
import React from "react";

const Blog = () => {
  return (
    <section className="w-full ">
      <div className="flex flex-col w-full py-5 bg-doctors bg-cover 2xl:px-52 2xl:py-20">
        <h1 className="font-baskerville text-5xl 2xl:text-7xl 2xl:text-left">
          Blog
        </h1>
        <p className="text-textSecondary font-sans text-base py-4">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus
          commodi quidem sed dolor, quibusdam enim incidunt beatae deleniti
          soluta blanditiis esse, ullam explicabo ipsa, ratione voluptatum
          distinctio corrupti adipisci est.
        </p>
      </div>
      <Experience2 />
      <Experience />
      <Best_Services />
    </section>
  );
};

export default Blog;
