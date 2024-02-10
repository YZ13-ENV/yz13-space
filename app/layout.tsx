import type { Metadata } from "next";
import { Geologica } from "next/font/google";
import "./globals.css";
const font = Geologica({
  subsets: ["latin", "cyrillic"],
  weight: "variable",
  variable: "--root-font",
});

export const metadata: Metadata = {
  title: "YZ13",
  description: "Created by Darkmaterial Team",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${font.className} ${font.variable}`}>
      <body className="dark">{children}</body>
    </html>
  );
}
