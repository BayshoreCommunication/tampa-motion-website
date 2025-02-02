import React from "react";
import Head from "next/head";
import Link from "next/link";

export const metadata = {
  title: "Privacy Policy - Tampa Motion",
  description:
    "lorem ipsum dolor sit amet, consectetuer adipiscing. Aenean commodo ligula eget dolor aenean massa cum sociis et natoque penatibus.",
  openGraph: {
    title: "Privacy Policy - Tampa Motion",
    description:
      "lorem ipsum dolor sit amet, consectetuer adipiscing. Aenean commodo ligula eget dolor aenean massa cum sociis et natoque penatibus.",
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
      <article className="container">
        <div className="text-center md:text-left text-md md:text-xl">
          <div className="my-2">
            <h2
              className={`text-stone-950 !font-semibold text-xl md:text-4xl mb-10  text-center  uppercase`}
            >
              Privacy Policy
            </h2>
            <p className="text-base text-stone-950 text-center md:text-left font-semibold pb-2 italic">
              Effective Date: 26 January, 2025
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <p className="text-base text-stone-950 text-center md:text-left">
              Welcome to Tampa Motion, PLLC (“Company,” “we,” “our,” or “us”).
              Your privacy is important to us, and we are committed to
              protecting your personal information. This Privacy Policy explains
              how we collect, use, share, and protect your information when you
              use our services,{" "}
              <span className="text-blue-500 underline">
                <Link href="https://www.tampamotion.com/">
                  visit our website
                </Link>
              </span>{" "}
              , or interact with us in any way.
            </p>
            <p className="text-base text-stone-950 text-center md:text-left">
              The{" "}
              <span className="text-blue-500 underline">
                <Link href="/terms-of-service">Terms of Service</Link>
              </span>{" "}
              ("TOS") of this website are incorporated into and form an integral
              part of this policy. By using our website or services, you
              acknowledge and accept the terms of this Privacy Policy. If you do
              not agree, please refrain from using our website or services.{" "}
            </p>
            <p className="text-base md:text-2xl text-stone-950 text-center md:text-left font-semibold">
              {`1) Information We Collect`}
            </p>
            <p className="text-base text-stone-950 text-center md:text-left">
              We collect different types of information to provide you with the
              best possible experience. In addition, we collect and maintain
              this information to ensure you with accurate services. The types
              of information we collect include:
            </p>
            <p className="text-base md:text-2xl text-stone-950 text-center md:text-left font-semibold">
              {`A. Personal Information`}
            </p>
            <p className="text-base text-stone-950 text-center md:text-left">
              This includes data that identifies or can be used to identify you,
              such as:
            </p>
            <ol className="pl-14 list-disc">
              <li className="pb-4 text-base">
                <span className="font-semibold">Contact Details: </span>
                Name, address, email, phone number.
              </li>
              <li className="pb-4 text-base">
                <span className="font-semibold">Appointment Information: </span>
                Scheduled consultations, and treatment history.
              </li>
              <li className="pb-4 text-base">
                <span className="font-semibold">Health Information: </span>
                Medical history, physician referrals, treatment plans.
              </li>
              <li className="pb-4 text-base">
                <span className="font-semibold">
                  Billing and Payment Information:{" "}
                </span>
                Insurance details, and credit card information.
              </li>
              <li className="pb-4 text-base">
                <span className="font-semibold">
                  Emergency Contact Information:{" "}
                </span>
                Details of a person we may contact in case of emergency.
              </li>
            </ol>
            <p className="text-base md:text-2xl text-stone-950 text-center md:text-left font-semibold">
              {`B. Technical Information`}
            </p>
            <p className="text-base text-stone-950 text-center md:text-left">
              When you browse our website, we may automatically gather the
              following information:{" "}
            </p>
            <ol className="pl-14 list-disc">
              <li className="pb-4 text-base">
                <span className="font-semibold">Device Information: </span>
                IP address, browser type, operating system.
              </li>
              <li className="pb-4 text-base">
                <span className="font-semibold">Usage Data: </span>
                Pages viewed, time spent on the website, referring URLs.
              </li>
              <li className="pb-4 text-base">
                <span className="font-semibold">
                  Cookies and Tracking Technologies:{" "}
                </span>
                Small data files to enhance user experience and analytics. Such
                as{" "}
                <span className="text-blue-500 underline">
                  <Link href="https://adssettings.google.com/">
                    Google Ads Settings
                  </Link>
                </span>{" "}
                or{" "}
                <span className="text-blue-500 underline">
                  <Link href="https://adssettings.google.com/">
                    Facebook Ad Preferences
                  </Link>
                </span>
                .
              </li>
            </ol>
            <p className="text-base md:text-2xl text-stone-950 text-center md:text-left font-semibold">
              {`C. Communications`}
            </p>
            <p className="text-base text-stone-950 text-center md:text-left">
              If you contact us via email, phone, or online forms, we may
              collect and store the communication details, including your
              questions, feedback, or requests.{" "}
            </p>
            <p className="text-base md:text-2xl text-stone-950 text-center md:text-left font-semibold">
              {`3. How We Use Your Information`}
            </p>
            <p className="text-base text-stone-950 text-center md:text-left">
              We use the information we collect for the following reasons:
            </p>
            <ol className="pl-14  list-disc">
              <li className="pb-4 text-base">
                <span className="font-semibold">Providing Services: </span>
                Scheduling appointments, developing treatment plans, and
                delivering care.{" "}
              </li>
              <li className="pb-4 text-base">
                <span className="font-semibold">Improving Our Services: </span>
                Enhancing our rehabilitation and physiotherapy offerings based
                on feedback and analytics.
              </li>
              <li className="pb-4 text-base">
                <span className="font-semibold">Communications: </span>Sending
                appointment reminders, updates, or important notices.{" "}
              </li>
              <li className="pb-4 text-base">
                <span className="font-semibold">Billing and Payments: </span>
                Processing transactions and insurance claims.{" "}
              </li>
              <li className="pb-4 text-base">
                <span className="font-semibold">Compliance with Laws: </span>
                Meeting regulatory and legal obligations.{" "}
              </li>
            </ol>
            <p className="text-base md:text-2xl text-stone-950 text-center md:text-left font-semibold">
              {`4) Disclosing and Sharing Your Information`}{" "}
            </p>
            <p className="text-base text-stone-950 text-center md:text-left">
              We do not share, lease, or exchange your personal information for
              commercial purposes However, we may share your data in the
              following circumstances:{" "}
            </p>
            <ol className="pl-14   list-disc">
              <li className="pb-4 text-base">
                <span className="font-semibold">Healthcare Providers: </span>
                We may share your information with medical professionals as
                needed to coordinate your treatment and ensure appropriate care.{" "}
              </li>
              <li className="pb-4 text-base">
                <span className="font-semibold">
                  Third-Party Service Providers:{" "}
                </span>
                We may disclose your data to trusted partners who assist with
                administrative tasks like appointment scheduling, billing, and
                payment processing.
              </li>
              <li className="pb-4 text-base">
                <span className="font-semibold">Legal Compliance: </span>In
                certain circumstances, we may be required to disclose your
                information to comply with legal obligations, If required by
                law, we may provide your information in response to court
                orders, subpoenas, or regulatory investigations.{" "}
              </li>
              <li className="pb-4 text-base">
                <span className="font-semibold">Business Transactions: </span>
                In the event of a merger, acquisition, or sale of Tampa Motion,
                PLLC, your data may be transferred as part of the transition.{" "}
              </li>
            </ol>
            <p className="text-base md:text-2xl text-stone-950 text-center md:text-left font-semibold">
              {`5) Cookies and Tracking Technologies`}{" "}
            </p>
            <p className="text-base text-stone-950 text-center md:text-left">
              We use cookies to:{" "}
            </p>
            <ol className="pl-14  list-disc">
              <li className="pb-4 text-base">
                Enhance website functionality and user experience
              </li>
              <li className="pb-4 text-base">
                Understand how visitors interact with our website
              </li>
              <li className="pb-4 text-base">
                Deliver personalized advertising based on browsing activity
              </li>
            </ol>
            <p className="text-base text-stone-950 text-center md:text-left">
              You can adjust your browser settings to manage cookies, but
              disabling them may affect certain website features. Review our{" "}
              <span className="text-blue-500 underline">
                <Link href="/cookie-policy">Cookie Policy</Link>
              </span>{" "}
              which explains how cookies are used in detail.
            </p>
            <p className="text-base md:text-2xl text-stone-950 text-center md:text-left font-semibold">
              {`6) Data Security Measures`}{" "}
            </p>
            <p className="text-base text-stone-950 text-center md:text-left">
              We take data protection seriously and use industry-standard
              security measures, including:{" "}
            </p>
            <ol className="pl-14  list-disc">
              <li className="pb-4 text-base">
                <span className="font-semibold">Secure Networks: </span>
                Ensuring data is stored safely.{" "}
              </li>
              <li className="pb-4 text-base">
                <span className="font-semibold">Access Controls: </span>
                Restricting who can access your information.
              </li>
              <li className="pb-4 text-base">
                <span className="font-semibold">Encryption: </span>Protecting
                sensitive data.{" "}
              </li>
            </ol>
            <p className="text-base text-stone-950 text-center md:text-left">
              Despite our efforts, no security system is <strong>100% </strong>
              secure. We recommend taking steps to protect your information,
              such as using <strong> strong passwords </strong> and avoiding
              sharing sensitive details via email.{" "}
            </p>
            <p className="text-base md:text-2xl text-stone-950 text-center md:text-left font-semibold">
              {`7) Your Rights and Choices`}{" "}
            </p>
            <p className="text-base text-stone-950 text-center md:text-left">
              You have the following rights regarding your data:
            </p>
            <ol className="pl-14  list-disc">
              <li className="pb-4 text-base">
                <span className="font-semibold">Access: </span>You have the
                right to request a copy of the personal information we have on
                file.{" "}
              </li>
              <li className="pb-4 text-base">
                <span className="font-semibold">Correction: </span>
                If any of your details are incorrect or incomplete, you may ask
                us to update or amend them.
              </li>
              <li className="pb-4 text-base">
                <span className="font-semibold">Restrict Processing: </span>
                Under certain conditions, you can limit how we use your
                information.
              </li>
              <li className="pb-4 text-base">
                <span className="font-semibold">Deletion: </span>
                You may request the removal of your personal data, provided
                there are no legal obligations requiring us to retain it.
              </li>
              <li className="pb-4 text-base">
                <span className="font-semibold">Withdraw Consent: </span>
                If you have previously given consent for data processing, you
                may revoke it at any time.
              </li>
            </ol>{" "}
            <p className="text-base text-stone-950 text-center md:text-left">
              To exercise these rights, please contact us at{" "}
              <span className="text-blue-500 underline">
                <Link href="mailto:athena.akram@tampamotion.com">
                  athena.akram@tampamotion.com
                </Link>
              </span>
              .
            </p>
            <p className="text-base md:text-2xl text-stone-950 text-center md:text-left font-semibold">
              {`8) Data Retention`}{" "}
            </p>
            <p className="text-base text-stone-950 text-center md:text-left">
              We retain your personal data only for as long as necessary to
              fulfill the purposes outlined in this Privacy Policy. This may
              include complying with legal, tax, and regulatory requirements.
            </p>
            <p className="text-base md:text-2xl text-stone-950 text-center md:text-left font-semibold">
              {`9) Third-Party Links`}{" "}
            </p>
            <p className="text-base text-stone-950 text-center md:text-left">
              Our website may contain links to third-party sites. This Privacy
              Policy does not extend to those websites. Those sites have their
              own privacy policies, so we recommend checking those out directly.
            </p>
            <p className="text-base md:text-2xl text-stone-950 text-center md:text-left font-semibold">
              {`10) Children’s Privacy`}{" "}
            </p>
            <p className="text-base text-stone-950 text-center md:text-left">
              We do not intentionally gather personal information from children.
              If we discover that we have inadvertently collected data from a
              child under <strong>13</strong>, we will delete it promptly. If
              you believe we may have information about a child under{" "}
              <strong>13</strong>, please notify us at{" "}
              <span className="text-blue-500 underline">
                <Link href="mailto:athena.akram@tampamotion.com">
                  athena.akram@tampamotion.com
                </Link>
              </span>
              ; our team will take care of it.
            </p>
            <p className="text-base md:text-2xl text-stone-950 text-center md:text-left font-semibold">
              {`11) Updates to This Privacy Policy`}{" "}
            </p>
            <p className="text-base text-stone-950 text-center md:text-left">
              We may revise this Privacy Policy from time to time to align with
              changes in our practices or legal obligations. Any modifications
              or updates will be posted on this page with an updated effective
              date. We encourage you to review this policy regularly.
            </p>
            <p className="text-base md:text-2xl text-stone-950 text-center md:text-left font-semibold">
              Correspond To Us
            </p>
            <p className="text-base text-stone-950 text-center md:text-left">
              If you have any questions or need further assistance regarding
              this Privacy Policy, please contact us:
            </p>
            <p className="text-base pb-2 text-left font-semibold">
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
