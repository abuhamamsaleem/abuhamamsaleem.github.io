import type { Metadata } from "next";
import { fonts } from "./utils/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Abuhamamsaleem",
  description: "Personal website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${fonts.inter.variable} ${fonts.arefRuqaa.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
