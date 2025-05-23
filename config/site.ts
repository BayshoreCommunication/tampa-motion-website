export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  siteMetadata: {
    title: " ",
    description: "",
  },
  siteLogo: { url: "" },
  mainNav: [
    { title: "Home", slug: "/" },
    { title: "About Us", slug: "/about" },
    { title: "Services", slug: "/services" },
    { title: "Case Studies", slug: "/case-studies" },
    { title: "Blog", slug: "/blog" },
  ],

  footer: {
    footer_logo: "",
    description: "",
    company: [
      {
        title: "Disclaimers",
        slug: "/disclaimers",
      },
      {
        title: "Privacy Policy",
        slug: "/privacy-policy",
      },

      {
        title: "Terms of Service",
        slug: "/terms-of-service",
      },
      {
        title: "Cookie Policy",
        slug: "/cookie-policy",
      },
    ],
    quick_links: [
      {
        title: "About Us",
        slug: "/about",
      },
      {
        title: "Services",
        slug: "/services",
      },
      {
        title: "Blog",
        slug: "/blog",
      },
      {
        title: "Testimonials",
        slug: "/testimonials",
      },
      {
        title: "Contact Us",
        slug: "/contact",
      },
    ],
  },
  socialLinks: [
    {
      title: "Facebook",
      url: "https://www.facebook.com/tampamotion",
    },
    {
      title: "Twitter",
      url: "https://x.com/tampamotionpllc",
    },
    {
      title: "Instagram",
      url: "#",
    },
    {
      title: "LinkedIn",
      url: "https://www.linkedin.com/company/tampamotionpllc",
    },
    {
      title: "Youtube",
      url: "https://www.youtube.com/channel/UCTJg34YjVuwolUNmUs8tdJw",
    },
  ],
};
