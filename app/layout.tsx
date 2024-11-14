import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import { Link } from "@nextui-org/link";
import clsx from "clsx";
import { Libre_Baskerville } from "next/font/google";

import { Providers } from "./providers";

import { siteConfig } from "@/config/site";
import MainHeader from "@/components/layout/MainHeader";
import MainFooter from "@/components/layout/MainFooter";

const inter = Libre_Baskerville({ weight: "400", subsets: ["latin"] });

export const metadata = {
  metadataBase: new URL("https://tampa-motion-website.vercel.app"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
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
