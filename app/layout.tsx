import type { Metadata } from "next";
import { Cormorant_Upright, Open_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
const cormorant = Cormorant_Upright({
  variable: "--font-cormorant_upright",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const open = Open_Sans({
  variable: "--font-cormorant_upright",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${cormorant.variable} ${open.variable} antialiased`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}