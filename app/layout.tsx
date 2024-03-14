import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";
import "./globals.css";
import { Room } from "./Room";

const work_Sans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-work-san",
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  title: "Figma clone",
  description: "Basic Figma app using liveblocks and fabric js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${work_Sans.className} bg-primary-grey-200`}>
        <Room>{children}</Room>
      </body>
    </html>
  );
}
