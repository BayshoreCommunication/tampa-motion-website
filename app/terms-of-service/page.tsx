import React from "react";
import Head from "next/head";
import Link from "next/link";

export const metadata = {
  title:
    "Physical Rehabilitation Center Tampa | Best Florida physical rehabilitation center |Top-rated physical therapy clinics tampa",
  description:
    "Tampa Motion is a leading physical rehabilitation center Tampa, recognized as the best Florida physical rehabilitation center. As one of the top-rated physical therapy clinics Tampa, we provide expert care to support recovery and enhance mobility.",
  openGraph: {
    title:
      "Physical Rehabilitation Center Tampa | Best Florida physical rehabilitation center |Top-rated physical therapy clinics tampa",
    description:
      "Tampa Motion is a leading physical rehabilitation center Tampa, recognized as the best Florida physical rehabilitation center. As one of the top-rated physical therapy clinics Tampa, we provide expert care to support recovery and enhance mobility.",
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
        <div className="text-center md:text-left text-md md:text-xl">
          <h2
            className={` !font-semibold text-xl md:text-4xl md:pb-10   text-center  pb-3  uppercase`}
          >
            Terms of Service
          </h2>

          <div className="flex flex-col  pt-5 pb-10">
            <p className="text-base  pb-3 md:text-2xl text-stone-950 text-left font-semibold">
              Services Provided
            </p>
            <p className="text-base text-stone-950  text-left pb-5">
              Tampa Motion offers physical therapy and rehabilitation services,
              focusing on personalized care to enhance mobility, manage pain,
              and improve your overall quality of life. Our expert therapists
              use evidence-based methods to support your recovery journey.
            </p>
            <p className="text-base md:text-2xl text-stone-950 pb-3 text-left font-semibold">
              Appointments and Consultations
            </p>
            <ol className="pl-14 list-disc  pb-5  ">
              <li className="pb-4 text-base">
                <span className="font-semibold">Booking: </span>Appointments can
                be scheduled through our website, phone, or email.
              </li>
              <li className="pb-4 text-base">
                <span className="font-semibold">Cancellations: </span>We kindly
                request 24 hours notice for appointment cancellations or
                rescheduling. Missed appointments without notice may incur a
                cancellation fee.
              </li>
              <li className="pb-4 text-base">
                <span className="font-semibold">Consultations: </span>Initial
                consultations are designed to assess your needs and develop a
                personalized treatment plan.
              </li>
            </ol>
            <p className="text-base  pb-3 md:text-2xl text-stone-950 text-left font-semibold">
              Health Disclaimer
            </p>
            <p className="text-base text-stone-950  pb-5  text-left ">
              Tampa Motion does not provide medical diagnoses or prescribe
              medication. Our physical therapy services complement your overall
              healthcare plan and should not replace advice from your primary
              healthcare provider.
            </p>
            <p className="text-base  pb-3 md:text-2xl text-stone-950 text-left font-semibold">
              User Responsibilities
            </p>
            <ol className="pl-14 list-disc  pb-5  ">
              <li className="pb-4 text-base">
                <span className="font-semibold">Accurate Information: </span>
                Clients must provide accurate health and medical history
                information to ensure safe and effective treatment.
              </li>
              <li className="pb-4 text-base">
                <span className="font-semibold">Compliance: </span>Clients are
                expected to follow their treatment plans and attend scheduled
                sessions to achieve optimal results.
              </li>
            </ol>
            <p className="text-base  pb-3 md:text-2xl text-stone-950 text-left font-semibold">
              Payment and Fees
            </p>
            <ol className="pl-14 list-disc  pb-5  ">
              <li className="pb-4 text-base">
                <span className="font-semibold">Payment Methods: </span>
                Payments for services are due at the time of appointment. We
                accept various payment methods, including credit cards and
                electronic payments.{" "}
              </li>
              <li className="pb-4 text-base">
                <span className="font-semibold">Refunds: </span>Refunds for
                prepaid packages will only be issued for unused sessions and
                must be requested in writing.
              </li>
            </ol>
            <p className="text-base md:text-2xl text-stone-950 pb-3 text-left font-semibold">
              Liability and Limitations
            </p>
            <p className="text-base text-stone-950  text-left pb-5">
              While we strive to provide the highest quality of care, Tampa
              Motion is not responsible for:
            </p>
            <ol className="pl-14 list-disc  pb-5  ">
              <li className="pb-4 text-base">
                Injuries resulting from undisclosed medical conditions.
              </li>
              <li className="pb-4 text-base">
                Unforeseen circumstances beyond our control cause delays or
                cancellations.
              </li>
              <li className="pb-4 text-base">
                Misuse or non-compliance with recommended exercises and
                treatments.
              </li>
            </ol>
            <p className="text-base  pb-3 md:text-2xl text-stone-950 text-left font-semibold">
              Website Use
            </p>
            <ol className="pl-14 list-disc  pb-5 ">
              <li className="pb-4 text-base">
                <span className="font-semibold">Content Ownership: </span>
                All website content, including text, images, and logos, is the
                property of Tampa Motion. Reproduction without permission is
                prohibited.
              </li>
              <li className="pb-4 text-base">
                <span className="font-semibold">Third-Party Links: </span>Our
                website may include links to external resources for your
                convenience. Tampa Motion is not responsible for the content or
                practices of these third-party sites.
              </li>
            </ol>
            <p className="text-base  pb-3 md:text-2xl text-stone-950 text-left font-semibold">
              Privacy and Confidentiality
            </p>
            <p className="text-base text-stone-950  pb-5  text-left ">
              We respect your privacy. All client information shared with Tampa
              Motion is kept confidential and used solely for treatment
              purposes. For details, please review our Privacy Policy.
            </p>

            <p className="text-base  pb-3 md:text-2xl text-stone-950 text-left font-semibold">
              COPYRIGHT INFRINGEMENT
            </p>
            <p className="text-base text-stone-950   pb-5 text-left ">
              Tampa Motion respects intellectual property rights. If you believe
              your copyrighted material has been used improperly, please contact
              us with the relevant details so we can address the issue promptly.
            </p>
            <p className="text-base  pb-3 md:text-2xl text-stone-950 text-left font-semibold">
              MODIFICATIONS AND INTERRUPTIONS
            </p>
            <p className="text-base text-stone-950   pb-5 text-left ">
              Tampa Motion reserves the right to modify, suspend, or discontinue
              its services at any time, without prior notice. We are not liable
              for any interruptions or changes that may affect the availability
              of our services.
            </p>
            <p className="text-base  pb-3 md:text-2xl text-stone-950 text-left font-semibold">
              USER DATA
            </p>
            <p className="text-base text-stone-950   pb-5 text-left ">
              Tampa Motion may retain data related to your use of the services.
              While we take measures to protect your data, you are responsible
              for ensuring the security of any information you transmit to us.
            </p>
            <p className="text-base  pb-3 md:text-2xl text-stone-950 text-left font-semibold">
              CONTACT US{" "}
            </p>
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
      </article>
    </section>
  );
};

export default page;
