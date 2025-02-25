import PageHeroSection from "@/components/shared/PageHeroSection";
import React from "react";
import Head from "next/head";
import Link from "next/link";

export const metadata = {
  title:
    "Expert Physical Therapy in Tampa | Leading Physical Therapy Specialist tampa | Top Physical Therapy Center florida| Experienced Physical Therapist tampa",
  description:
    "Looking for expert physical therapy in Tampa? Visit the leading physical therapy specialist in Tampa at our top physical therapy center in Florida. Our experienced physical therapists are here to help you recover and improve your mobility with personalized care.",
  openGraph: {
    title:
      "Expert Physical Therapy in Tampa | Leading Physical Therapy Specialist tampa | Top Physical Therapy Center florida| Experienced Physical Therapist tampa",
    description:
      "Looking for expert physical therapy in Tampa? Visit the leading physical therapy specialist in Tampa at our top physical therapy center in Florida. Our experienced physical therapists are here to help you recover and improve your mobility with personalized care.",
    //url: "https://www.tampamotion.com/privacy-policy",
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
        <div className="text-center md:text-left text-md md:text-xl">
          <div className="my-2">
            <h2
              className={`text-stone-950 !font-semibold text-xl md:text-4xl mb-10  text-center  uppercase`}
            >
              Cookie Policy
            </h2>
            <p className=" text-base text-stone-950 text-center md:text-left pb-5">
              Tampa Motion, PLLC ("we," "us," or "our") uses cookies on our
              website,{" "}
              <span className="text-blue-500 underline">
                <Link href="https://www.tampamotion.com/">
                  www.tampamotion.com
                </Link>
              </span>{" "}
              . By accessing or using our website, you consent to the use of
              cookies in accordance with this Cookie Policy. This Cookie Policy
              explains how cookies are used, the role of third parties, your
              options for managing cookies, and how to control their usage
              effectively.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <p className=" text-base  md:text-2xl text-stone-950 text-center md:text-left font-semibold">
              {`What Are Cookies?`}
            </p>
            <p className="text-base text-stone-950 text-center md:text-left">
              Cookies are small text files stored in your web browser when you
              visit a website. These files help websites remember details about
              your visit, making future visits more efficient and personalized.
              Cookies can be "persistent" (remaining in your browser after you
              leave the site) or "session" cookies (deleted when you close your
              browser).
            </p>
            <p className="text-base md:text-2xl text-stone-950 text-center md:text-left font-semibold">
              {`How We Use Cookies`}
            </p>
            <p className="text-base text-stone-950 text-center md:text-left">
              When you visit{" "}
              <span className="text-blue-500 underline">
                <Link href="https://www.tampamotion.com/">
                  www.tampamotion.com
                </Link>
              </span>
              , we may use cookies to improve your experience and provide
              specific functions. We use cookies for the following purposes:
            </p>
            <ol className="pl-14 list-disc">
              <li className="pb-4 text-base">
                <span className="font-semibold">Essential Cookies: </span>
                These cookies are required for the core functionality of our
                website, such as enabling secure access to certain features.
                Without them, the website may not work as intended.
              </li>
              <li className="pb-4 text-base">
                <span className="font-semibold">Analytics Cookies: </span>
                We use cookies to gather data on how visitors use our site, such
                as which pages are visited most often or if any errors occur.
                This information helps us improve the site’s functionality.
              </li>
              <li className="pb-4 text-base">
                <span className="font-semibold">Functional Cookies: </span>
                These cookies remember your preferences, like your language
                choice, to provide a more personalized experience during your
                visit.
              </li>
              <li className="pb-4 text-base">
                <span className="font-semibold">Third-Party Cookies: </span>
                We may use cookies from third-party services (e.g., Google
                Analytics, social media platforms) to collect usage statistics
                and display relevant content or advertisements. Please review
                the cookie policies of these third-party providers for
                additional details.
              </li>
            </ol>
            <p className="text-base md:text-2xl text-stone-950 text-center md:text-left font-semibold">
              {`Managing Cookies`}
            </p>
            <p className="text-base text-stone-950 text-center md:text-left">
              You can control how cookies are used on your device. Most web
              browsers allow you to manage cookie preferences, including
              deleting existing cookies or refusing new ones. However, disabling
              cookies may impact the functionality of our website and limit
              access to certain features.
            </p>
            <p className="text-base text-stone-950 text-center md:text-left">
              To manage cookies in your browser, refer to these guides:
            </p>
            <ol className="pl-14 list-disc">
              <li className="pb-4 text-base">
                <span className="text-blue-500 underline">
                  <Link href="https://www.google.com/chrome/">
                    Google Chrome
                  </Link>
                </span>
              </li>
              <li className="pb-4 text-base">
                <span className="text-blue-500 underline">
                  <Link href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09">
                    Microsoft Edge
                  </Link>
                </span>
              </li>
              <li className="pb-4 text-base">
                <span className="text-blue-500 underline">
                  <Link href="https://support.mozilla.org/en-US/kb/enable-and-disable-cookies-website-preferences">
                    Mozilla Firefox
                  </Link>
                </span>
              </li>
              <li className="pb-4 text-base">
                <span className="text-blue-500 underline">
                  <Link href="https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac">
                    Apple Safari
                  </Link>
                </span>
              </li>
            </ol>
            <p className="text-base text-stone-950 text-center md:text-left">
              You can also opt out of Google Analytics tracking by installing
              the Google Analytics Opt-out Browser Add-on.{" "}
            </p>
            <p className="text-base md:text-2xl  text-center md:text-left font-semibold">
              {`Where to Find More Information`}
            </p>
            <p className="text-base text-stone-950 text-center md:text-left">
              To learn more about cookies and how they work, visit these
              resources:{" "}
            </p>
            <ol className="pl-14 list-disc">
              <li className="pb-4 text-base">
                <span className="text-blue-500 underline">
                  <Link href="https://www.allaboutcookies.org/">
                    All About Cookies
                  </Link>
                </span>
              </li>
              <li className="pb-4 text-base">
                <span className="text-blue-500 underline">
                  <Link href="https://www.networkadvertising.org/">
                    Network Advertising Initiative
                  </Link>
                </span>
              </li>
            </ol>
            <p className="text-base md:text-2xl text-stone-950 text-center md:text-left font-semibold">
              Contact Us
            </p>
            <p className="text-base text-stone-950 text-center md:text-left">
              If you have any questions about our Cookie Policy or how we use
              cookies, please reach out to us:{" "}
            </p>
            <p className="text-base text-left font-semibold">
              Tampa Motion, PLLC
            </p>
            <p className="font-semibold text-base text-stone-950 text-left pb-2 ">
              Location{" "}
              <span className="font-normal text-blue-500 underline block">
                <Link href="https://www.google.com/maps/place/8333+Gunn+Hwy,+Tampa,+FL+33626,+USA/@28.0838971,-82.5781301,17z/data=!4m6!3m5!1s0x88c2eabbc5fae6bf:0xbf90d7555eb0cc4!8m2!3d28.0833103!4d-82.5771162!16s%2Fg%2F11c0_skph6?entry=ttu&g_ep=EgoyMDI1MDEyMi4wIKXMDSoASAFQAw%3D%3D">
                  8333 Gunn Highway, Tampa, FL 33626
                </Link>
              </span>{" "}
            </p>
            <p className="text-base font-semibold text-stone-950 text-left pb-2 ">
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
            <p className="text-base text-stone-950 font-semibold text-left pb-2 ">
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
      </article>
    </section>
  );
};

export default page;
