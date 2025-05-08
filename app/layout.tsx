import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import { Link } from "@nextui-org/link";
import clsx from "clsx";
import { Libre_Baskerville } from "next/font/google";

import { Providers } from "./providers";

import { siteConfig } from "@/config/site";
import MainHeader from "@/components/layout/MainHeader";
import MainFooter from "@/components/layout/MainFooter";
import Script from "next/script";

const inter = Libre_Baskerville({ weight: "400", subsets: ["latin"] });

export const metadata = {
  metadataBase: new URL("https://tampa-motion-website.vercel.app"),
  openGraph: {
    title: "Tampa Motion",
    description:
      "lorem ipsum dolor sit amet, consectetuer adipiscing. Aenean commodo ligula eget dolor aenean massa cum sociis et natoque penatibus.",
    url: "https://www.tampamotion.com/",
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head>
        {/* Google Ads Global Site Tag (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-17041654185"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'AW-17041654185', {
              groups: 'default'
            });
          `}
        </Script>
      </head>
      <body className={clsx("antialiased scroll-smooth", inter.className)}>
        <Providers themeProps={{ attribute: "class" }}>
          <MainHeader />
          <div className="">{children}</div>
          <MainFooter />
        </Providers>
      </body>
    </html>
  );
}
