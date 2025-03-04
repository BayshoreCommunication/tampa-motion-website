import ExperienceSection from "@/components/about/ExperienceSection";
import Healing from "@/components/about/Healing";
import BestServices from "@/components/home/BestServices";
import PageHeroSection from "@/components/shared/PageHeroSection";
import React from "react";
import Head from "next/head";
import ScrollMotionEffect from "@/components/motion/ScrollMotionEffect";
import Image from "next/image";
export const metadata = {
  title:
    "Experienced Physical Therapist tampa | Physical Rehabilitation Center Tampa | Tampa Motion | Best Ligament repair therapy sessions Tampa | ExpertTendon injury physical therapy Florida",
  description:
    "Experience top-quality care at Tampa Motion, your trusted physical rehabilitation center Tampa. Our experienced physical therapist Tampa specializes in the best ligament repair therapy sessions Tampa and expert tendon injury physical therapy Florida. Recover stronger with personalized treatment!",
  openGraph: {
    title:
      "Experienced Physical Therapist tampa | Physical Rehabilitation Center Tampa | Tampa Motion | Best Ligament repair therapy sessions Tampa | ExpertTendon injury physical therapy Florida",
    description:
      "Experience top-quality care at Tampa Motion, your trusted physical rehabilitation center Tampa. Our experienced physical therapist Tampa specializes in the best ligament repair therapy sessions Tampa and expert tendon injury physical therapy Florida. Recover stronger with personalized treatment!",
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

const page = () => {
  return (
    <section className="w-full flex flex-col justify-start items-center min-h-screen bg-white">
      <PageHeroSection
        title="About Us"
        description="Everybody has their own story, and every recovery is a unique journey. With over 15 years of experience in physical therapy and rehabilitation, we’ve had the privilege of helping over 600 people overcome injuries, regain function, and live more fully. But it’s not just the numbers that define us; it’s the lives we’ve touched along the way."
      />
      <article className="bg-white w-full pb-10 pt-10 lg:pt-20">
        <ScrollMotionEffect effect="fade-in" duration={2500}>
          <div className="container bg-white">
            <div className="w-full">
              <div className="flex flex-col  gap-4 lg:gap-8 xl:gap-14">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-4 lg:gap-8 xl:gap-14">
                  <Image
                    src="/assets/about/athena-akram-2.png"
                    alt="Athena Akram"
                    width={600}
                    height={1000}
                    className="w-full lg:w-[30%] "
                  ></Image>
                  <div className="  ">
                    <div className=" mt-5">
                      <h2 className="text-3xl lg:text-5xl font-semibold text-gray-900 mb-4 ">
                        About Athena Akram, DPT
                      </h2>
                      <p className="text-gray-700 mb-4 leading-relaxed text-justify">
                        {`Dr Akram treats all Orthopedic and Neurological conditions from ages 6 and above. She has a strong background in Sports Medicine, manual therapy, and Pre- and Post-op recovery. She also treats patient with dysfunction of the pelvic floor, lymphatics, and balance. Dr Akram’s uses only evidence-based techniques and products which have proven to help muscles, nerves, and joints, some of which include mechanical traction, Ultrasound, Cold Laser, and Kinesiotaping.`}
                      </p>
                    </div>
                    <div className=" mt-5 lg:mt-12">
                      <h2 className="text-2xl  font-semibold text-gray-900  mb-4">
                        Credentials{" "}
                      </h2>
                      <ul className="list-decimal -pl-8 list-inside text-gray-700 mb-4 leading-relaxed space-y-2">
                        <li>
                          Bachelor’s degree in Biological Science (Wayne State
                          University, MI)
                        </li>
                        <li>
                          Doctorate of Physical Therapy (Wayne State University,
                          MI)
                        </li>
                        <li>Certified in Kinesiology Taping</li>
                        <li>Certified in Manual Lymphatic Drainage</li>
                        <li>
                          Board Licensed to practice Physical Therapy in
                          Michigan and Florida, USA (FSBPT)
                        </li>
                        <li>Outpatient-based physical therapist since 2011</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="">
                  <video
                    className="lg:w-[30%] 2xl:w-[21%]  ml-12 mb-5  float-right hidden lg:block rounded-2xl border-1  border-[#08A1E9]"
                    controls
                    autoPlay
                    muted
                    loop
                    src="/assets/about/athena-akram.mp4"
                  ></video>

                  <div className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-900 mb-4 relative inline-block after:content-[''] after:block after:w-[265px] after:h-[2px] after:bg-[#08A1E9] after:mt-1">
                      Previous Experiences
                    </h2>
                    <ul className="list-disc pl-4 list-inside text-gray-700 mb-4 leading-relaxed space-y-2">
                      <li>Staff Physical Therapist - Detroit Medical Center</li>
                      <li>
                        Senior Physical Therapist - All-Pro Physical Therapy
                      </li>
                      <li>Staff Physical Therapist - Henry Ford Hospital</li>
                      <li>
                        Staff Physical Therapy - Specialists in Rehab Medicine
                      </li>
                      <li>
                        Owner and Senior Physical Therapist - Tampa Motion
                      </li>
                    </ul>
                    <p className="text-gray-700 leading-relaxed">
                      Dr. Akram grew up in Michigan, while completing a
                      Bachelor’s degree and Doctorate at Wayne State University.
                      She has practiced Physical Therapy in the highest regarded
                      hospital systems in Michigan, including Detroit Medical
                      Center and Henry Ford Hospital. She has also held Senior
                      PT positions at multiple practices.
                    </p>
                  </div>
                  <video
                    className="mb-12  text-center m-auto lg:hidden block rounded-2xl border-1  border-[#08A1E9]"
                    controls
                    autoPlay
                    muted
                    loop
                    src="/assets/about/athena-akram.mp4"
                  ></video>

                  <div className="lg:col-span-2">
                    <h2 className="text-2xl font-semibold text-gray-900 mb-4 relative inline-block after:content-[''] after:block after:w-[100px] after:h-[2px] after:bg-[#08A1E9]">
                      Mission
                    </h2>
                    <p className="text-gray-700 leading-relaxed text-justify">
                      To provide efficient, ethical, and evidence-based
                      rehabilitation services to clients aging from 6+ years of
                      age to geriatrics. Establish a comprehensive physical
                      rehabilitation clinic for orthopedic, neurological,
                      vestibular, post-surgical, oncological, pelvic floor,
                      sport-related, and personal injury problems. Treatment
                      plans are custom to each individual treatment plan for
                      each patient for all acute and chronic diagnoses. Aside
                      from Physical Therapy, a growth of this clinic is expected
                      by offering additional services for Occupational Therapy,
                      Speech Therapy, and Massage Therapy.
                    </p>
                    <p className="text-gray-700 leading-relaxed mt-4">
                      Tampa Motion will proudly accept Medicare, Medicaid, major
                      commercial insurances, and healthshare insurances.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollMotionEffect>
      </article>
    </section>
  );
};

export default page;
