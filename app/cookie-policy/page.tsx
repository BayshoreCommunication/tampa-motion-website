import PageHeroSection from "@/components/shared/PageHeroSection";
import React from "react";
import Head from "next/head";

export const metadata = {
  title: "Cookie Policy - Tampa Motion",
  description:
    "lorem ipsum dolor sit amet, consectetuer adipiscing. Aenean commodo ligula eget dolor aenean massa cum sociis et natoque penatibus.",
  openGraph: {
    title: "Cookie Policy - Tampa Motion",
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
    <div>
      <PageHeroSection
        title="Cookie Policy"
        description="Lorem ipsum dolor sit amet, consectetuer adipiscing. Aenean commodo ligula eget dolor aenean massa cum sociis et natoque penatibus. Lorem ipsum dolor sit amet, consectetuer adipiscing. Aenean commodo ligula eget dolor aenean massa cum sociis et natoque penatibus."
      />
      <div className="bg-white text-black">
        <section className="container  font-roboto text-base py-10 md:py-20 flex justify-center gap-4 items-start flex-col">
          <h3 className="text-2xl mb-10 w-full font-extrabold">
            Cookie Policy
          </h3>
          <div>{`We use cookies to help improve your experience of our website at https://tampa-motion-website.vercel.app/.  This cookie policy is part of Tampa Motion, PLLC's privacy policy. It covers the use of cookies between your device and our site. We also provide basic information on third-party services we may use, who may also use cookies as part of their service. This policy does not cover their cookies. If you don’t wish to accept cookies from us, you should instruct your browser to refuse cookies from https://tampa-motion-website.vercel.app/. In such a case, we may be unable to provide you with some of your desired content and services.`}</div>
          <div>{`What is a cookie? A cookie is a small piece of data that a website stores on your device when you visit. It typically contains information about the website itself, a unique identifier that allows the site to recognize your web browser when you return, additional data that serves the cookie’s purpose, and the lifespan of the cookie itself.`}</div>
          <div>{`Cookies are used to enable certain features (e.g. logging in), track site usage (e.g. analytics), store your user settings (e.g. time zone, notification preferences), and to personalize your content (e.g. advertising, language). Cookies set by the website you are visiting are usually referred to as first-party cookies. They typically only track your activity on that particular site. Cookies set by other sites and companies (i.e. third parties) are called third-party cookies They can be used to track you on other websites that use the same third-party service.`}</div>
          <div>
            <span className="font-bold">
              Types of cookies and how we use them:
            </span>
            {` Essential cookies: Essential cookies are crucial to your experience of a website, enabling core features like user logins, account management, shopping carts, and payment processing. We use essential cookies to enable certain functions on our website. Performance cookies: Performance cookies track how you use a website during your visit. Typically, this information is anonymous and aggregated, with information tracked across all site users. They help companies understand visitor usage patterns, identify and diagnose problems or errors their users may encounter, and make better strategic decisions in improving their audience’s overall website experience. These cookies may be set by the website you’re visiting (first-party) or by third-party services. They do not collect personal information about you. We use performance cookies on our site. Functionality cookies: Functionality cookies are used to collect information about your device and any settings you may configure on the website you’re visiting (like language and time zone settings). With this information, websites can provide you with customized, enhanced, or optimized content and services. These cookies may be set by the website you’re visiting (first-party) or by third-party services. We use functionality cookies for selected features on our site. Targeting/advertising cookies: Targeting/advertising cookies help determine what promotional content is most relevant and appropriate to you and your interests. Websites may use them to deliver targeted advertising or limit the number of times you see an advertisement. This helps companies improve the effectiveness of their campaigns and the quality of content presented to you. These cookies may be set by the website you’re visiting (first-party) or by third-party services. Targeting/advertising cookies set by third-parties may be used to track you on other websites that use the same third-party service. We do not use this type of cookie on our site.`}
          </div>
          <div className="font-bold">Acceptable Use Policy</div>
          <div>{`This acceptable use policy covers the products, services, and technologies (collectively referred to as the “Products”) provided by Tampa Motion, PLLC under any ongoing agreement. It’s designed to protect us, our customers, and the general Internet community from unethical, irresponsible, and illegal activity. Tampa Motion, PLLC customers found engaging in activities prohibited by this acceptable use policy can be liable for service suspension and account termination. In extreme cases, we may be legally obliged to report such customers to the relevant authorities. This policy was last reviewed on 31 October 2022.`}</div>
          <div>
            <span className="font-bold">Fair use:</span>
            {` We provide our facilities with the assumption your use will be “business as usual”, as per our offer schedule. If your use is considered to be excessive, then additional fees may be charged, or capacity may be restricted. We are opposed to all forms of abuse, discrimination, rights infringement, and/or any action that harms or disadvantages any group, individual, or resource. We expect our customers and, where applicable, their users (“end-users”) to likewise engage our Products with similar intent.`}
          </div>
          <div>
            <span className="font-bold">Customer accountability:</span>
            {` We regard our customers as being responsible for their own actions as well as for the actions of anyone using our Products with the customer’s permission. This responsibility also applies to anyone using our Products on an unauthorized basis as a result of the customer’s failure to put in place reasonable security measures. By accepting Products from us, our customers agree to ensure adherence to this policy on behalf of anyone using the Products as their end users. Complaints regarding the actions of customers or their end-users will be forwarded to the nominated contact for the account in question. If a customer — or their end-user or anyone using our Products as a result of the customer — violates our acceptable use policy, we reserve the right to terminate any Products associated with the offending account or the account itself or take any remedial or preventative action we deem appropriate, without notice. To the extent permitted by law, no credit will be available for interruptions of service resulting from any violation of our acceptable use policy.`}
          </div>
          <div>
            <span className="font-bold">Prohibited activity:</span>
            {` Copyright infringement and access to unauthorized material. Our Products must not be used to transmit, distribute or store any material in violation of any applicable law. This includes but isn’t limited to: any material protected by copyright, trademark, trade secret, or other intellectual property right used without proper authorization, and any material that is obscene, defamatory, constitutes an illegal threat or violates export control laws. The customer is solely responsible for all material they input, upload, disseminate, transmit, create or publish through or on our Products, and for obtaining legal permission to use any works included in such material.`}
          </div>
          <div>
            <span className="font-bold">
              SPAM and unauthorized message activity:
            </span>
            {` Our Products must not be used for the purpose of sending unsolicited bulk or commercial messages in violation of the laws and regulations applicable to your jurisdiction (“spam”). This includes but isn’t limited to sending spam, soliciting customers from spam sent from other service providers, and collecting replies to spam sent from other service providers. Our Products must not be used for the purpose of running unconfirmed mailing lists or telephone number lists (“messaging lists”). This includes but isn’t limited to subscribing email addresses or telephone numbers to any messaging list without the permission of the email address or telephone number owner, and storing any email addresses or telephone numbers subscribed in this way. All messaging lists run on or hosted by our Products must be “confirmed opt-in”. Verification of the address or telephone number owner’s express permission must be available for the lifespan of the messaging list. We prohibit the use of email lists, telephone number lists or databases purchased from third parties intended for spam or unconfirmed messaging list purposes on our Products. This spam and unauthorized message activity policy applies to messages sent using our Products, or to messages sent from any network by the customer or any person on the customer’s behalf, that directly or indirectly refer the recipient to a site hosted via our Products.`}
          </div>
          <div>
            <span className="font-bold">
              Unethical, exploitative, and malicious activity:
            </span>
            {` Our Products must not be used for the purpose of advertising, transmitting, or otherwise making available any software, program, product, or service designed to violate this acceptable use policy, or the acceptable use policy of other service providers. This includes but isn’t limited to facilitating the means to send spam and the initiation of network sniffing, pinging, packet spoofing, flooding, mail-bombing, and denial-of-service attacks. Our Products must not be used to access any account or electronic resource where the group or individual attempting to gain access does not own or is not authorized to access the resource (e.g. “hacking”, “cracking”, “phreaking”, etc.).`}
          </div>
          <div>{`Our Products must not be used for the purpose of intentionally or recklessly introducing viruses or malicious code into our Products and systems. Our Products must not be used for purposely engaging in activities designed to harass another group or individual. Our definition of harassment includes but is not limited to denial-of-service attacks, hate-speech, advocacy of racial or ethnic intolerance, and any activity intended to threaten, abuse, infringe upon the rights of, or discriminate against any group or individual.`}</div>
          <div>
            <span className="font-bold">
              Other activities considered unethical, exploitative, and malicious
              include:
            </span>
            {` Obtaining (or attempting to obtain) services from us with the intent to avoid payment; Using our facilities to obtain (or attempt to obtain) services from another provider with the intent to avoid payment; The unauthorized access, alteration, or destruction (or any attempt thereof) of any information about our customers or end-users, by any means or device; Using our facilities to interfere with the use of our facilities and network by other customers or authorized individuals; Publishing or transmitting any content of links that incite violence, depict a violent act, depict child pornography, or threaten anyone’s health and safety; Any act or omission in violation of consumer protection laws and regulations; Any violation of a person’s privacy.`}
          </div>
          <div>{`Our Products may not be used by any person or entity, which is involved with or suspected of involvement in activities or causes relating to illegal gambling; terrorism; narcotics trafficking; arms trafficking or the proliferation, development, design, manufacture, production, stockpiling, or use of nuclear, chemical or biological weapons, weapons of mass destruction, or missiles; in each case including any affiliation with others whatsoever who support the above such activities or causes.`}</div>
          <div>
            <span className="font-bold">
              Unauthorized use of Tampa Motion, PLLC property:
            </span>
            {` We prohibit the impersonation of Tampa Motion, PLLC, the representation of a significant business relationship with Tampa Motion, PLLC, or ownership of any Tampa Motion, PLLC property (including our Products and brand) for the purpose of fraudulently gaining service, custom, patronage, or user trust.`}
          </div>
          <div>
            <span className="font-bold">About this policy:</span>
            {` This policy outlines a non-exclusive list of activities and intent we deem unacceptable and incompatible with our brand. We reserve the right to modify this policy at any time by publishing the revised version on our website. The revised version will be effective from the earlier of: the date the customer uses our Products after we publish the revised version on our website; or 30 days after we publish the revised version on our website.`}
          </div>
        </section>
      </div>
    </div>
  );
};

export default page;
