import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import { Link } from "@nextui-org/link";
import clsx from "clsx";

import { Providers } from "./providers";

import { siteConfig } from "@/config/site";
import MainHeader from "@/components/layout/MainHeader";
import MainFooter from "@/components/layout/MainFooter";

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
      <body className={clsx("antialiased")}>
        <Providers themeProps={{ attribute: "class" }}>
          <MainHeader />
          <div className="overflow-x-hidden">{children}</div>
          <MainFooter />
        </Providers>
      </body>
    </html>
  );
}
