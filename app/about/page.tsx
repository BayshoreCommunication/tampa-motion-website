import Best_Services from "@/components/Best_Services";
import Experience from "@/components/Experience";
import Experience2 from "@/components/Experience2";
import React from "react";

const About = () => {
  return (
    <section>
      <article className="h-fit w-full bg-doctors bg-cover text-textSecondary py-20 px-52">
        <h1 className="txte-2xl 2xl:text-7xl font-baskerville">About Us</h1>
        <h2
          className="font-sans text-base w-3/6 py-4
        "
        >
          Lorem ipsum dolor sit amet, consectetuer adipiscing. Aenean commodo
          ligula eget dolor aenean massa cum sociis et natoque penatibus. Lorem
          ipsum dolor sit amet, consectetuer adipiscing. Aenean commodo ligula
          eget dolor aenean massa cum sociis et natoque penatibus.
        </h2>
      </article>
      <Experience2 />
      <Experience />
      <Best_Services />
    </section>
  );
};

export default About;
