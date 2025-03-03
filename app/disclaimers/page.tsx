import React from "react";
import Head from "next/head";
import Link from "next/link";
import ScrollMotionEffect from "@/components/motion/ScrollMotionEffect";

export const metadata = {
  title:
    "Spine and cosmetic surgeries in tampa | Orthopedic clinic in Tampa, Florida | Best Foot and Ankle Ligament and Tendon Repair  in tampa",
  description:
    "Tampa Motion provides expert care for spine and cosmetic surgeries in Tampa. As a leading orthopedic clinic in Tampa, Florida, we specialize in the best foot and ankle ligament and tendon repair in Tampa, ensuring effective recovery and rehabilitation.",
  openGraph: {
    title:
      "Spine and cosmetic surgeries in tampa | Orthopedic clinic in Tampa, Florida | Best Foot and Ankle Ligament and Tendon Repair  in tampa",
    description:
      "Tampa Motion provides expert care for spine and cosmetic surgeries in Tampa. As a leading orthopedic clinic in Tampa, Florida, we specialize in the best foot and ankle ligament and tendon repair in Tampa, ensuring effective recovery and rehabilitation.",
    //url: "https://www.tampamotion.com/disclaimers",
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
    <section className="bg-white text-black py-10 md:py-20 min-h-screen">
      <article className="container       mt-16">
        <ScrollMotionEffect effect="fade-in" duration={1500}>
          <div className="text-center md:text-left text-md md:text-xl">
            <h1
              className={` !font-semibold text-xl md:text-4xl pb-5 md:pb-10   text-center  uppercase`}
            >
              Disclaimer
            </h1>
            <p className="text-base text-stone-950   text-left  pb-4 ">
              By accessing and using the website of Tampa Motion, PLLC, you
              acknowledge and agree to the following terms:
            </p>

            <div className="flex flex-col  pt-5 pb-10">
              <ol className="pl-14 list-disc pb-10 text-2xl">
                <li className="pb-6">
                  <p className="text-base md:text-2xl text-stone-950 text-left font-semibold">
                    Communication and Contact
                  </p>
                  <p className="text-base text-stone-950  text-left ">
                    Tampa Motion, PLLC may contact you by phone, email, or text
                    at any number or address you provide. Communications may
                    include appointment reminders, service-related updates, or
                    responses to inquiries. By providing your contact
                    information, you confirm that you are authorized to receive
                    such communications.
                  </p>
                </li>
                <li className="pb-6">
                  <p className="text-base md:text-2xl text-stone-950   text-left font-semibold">
                    Information Only, Not Medical Advice
                  </p>
                  <p className="text-base text-stone-950  text-left ">
                    The content provided on this website is for educational and
                    informational purposes only. It is not and should not be
                    considered medical advice, diagnosis, or treatment. The
                    information on this site is not a substitute for
                    professional consultation with a licensed physiotherapist or
                    healthcare provider. Always consult with a qualified
                    professional for any medical concerns or decisions regarding
                    your health and treatment.
                  </p>
                </li>
                <li className="pb-6">
                  <p className="text-base md:text-2xl text-stone-950   text-left  font-semibold">
                    Website Terms of Use
                  </p>
                  <p className="text-base text-stone-950  text-left ">
                    By using this website, you agree to abide by our Terms of
                    Use. We may update or modify these terms at any time, and
                    the changes will take effect immediately upon posting. It is
                    your responsibility to review these terms periodically for
                    updates. Continued use of the site constitutes your
                    acceptance of these terms. If any part of these terms is
                    found to be invalid or unenforceable, the remainder will
                    remain in effect.
                  </p>
                </li>
                <li className="pb-6">
                  <p className="text-base md:text-2xl text-stone-950   text-left font-semibold">
                    Intellectual Property Rights
                  </p>
                  <p className="text-base text-stone-950  text-left ">
                    Tampa Motion, PLLC owns the site's content, technology, and
                    branding, which are protected by copyright and trademark
                    laws. You are granted a limited, non-exclusive,
                    non-transferable license to use this website solely for
                    personal purposes. You may not reproduce, distribute, or use
                    the content for commercial purposes without prior written
                    permission from Tampa Motion, PLLC.
                  </p>
                </li>
                <li className="pb-6">
                  <p className="text-base md:text-2xl text-stone-950   text-left font-semibold">
                    Limitation of Liability
                  </p>
                  <p className="text-base text-stone-950  text-left ">
                    Tampa Motion, PLLC may modify, suspend, or discontinue the
                    website at any time without notice. While we strive to
                    provide accurate and up-to-date information, we do not
                    guarantee the completeness, accuracy, or functionality of
                    the website. Tampa Motion, PLLC is not liable for any
                    damages resulting from your use or inability to use this
                    website.
                  </p>
                </li>
              </ol>

              <p className="text-base pb-5 text-left">
                For questions or further assistance, please contact us at:
              </p>
              <p className="text-base pb-4 text-left font-semibold">
                Tampa Motion, PLLC
              </p>
              <p className="font-semibold text-base text-stone-950 text-left pb-4 ">
                Location{" "}
                <span className="font-normal text-blue-500 underline block">
                  <Link href="https://www.google.com/maps/place/8333+Gunn+Hwy,+Tampa,+FL+33626,+USA/@28.0838971,-82.5781301,17z/data=!4m6!3m5!1s0x88c2eabbc5fae6bf:0xbf90d7555eb0cc4!8m2!3d28.0833103!4d-82.5771162!16s%2Fg%2F11c0_skph6?entry=ttu&g_ep=EgoyMDI1MDEyMi4wIKXMDSoASAFQAw%3D%3D">
                    8333 Gunn Highway, Tampa, FL 33626
                  </Link>
                </span>{" "}
              </p>
              <p className="text-base font-semibold text-stone-950 text-left pb-4 ">
                Contact{" "}
                <span className="text-blue-500 font-normal underline block">
                  <Link
                    href="tel:+1 813-291-3536"
                    className="hover:underline duration-300 text-base"
                  >
                    {`+1 813-291-3536`}
                  </Link>
                </span>{" "}
              </p>
              <p className="text-base text-stone-950 font-semibold text-left pb-4 ">
                Email{" "}
                <span className="text-blue-500 underline block font-normal">
                  <Link
                    href="mailto: athena.akram@tampamotion.com"
                    className="hover:underline duration-300 text-base"
                  >
                    athena.akram@tampamotion.com
                  </Link>
                </span>{" "}
              </p>
            </div>
          </div>
        </ScrollMotionEffect>
      </article>
    </section>
  );
};

export default page;
