import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sleekengineers.co.zw"),
  title: {
    default: "Sleek Engineers | Digital products from Zimbabwe",
    template: "%s | Sleek Engineers",
  },
  description:
    "Sleek Engineers builds secure, high-performing web and mobile products for ambitious businesses and SMEs in Zimbabwe and beyond.",
  keywords: [
    "software development Zimbabwe",
    "web development Harare",
    "mobile app development Zimbabwe",
    "cybersecurity Zimbabwe",
    "React",
    "Next.js",
    "Laravel",
    "Python",
    "Node.js",
  ],
  authors: [{ name: "Sleek Engineers" }],
  creator: "Sleek Engineers",
  openGraph: {
    type: "website",
    locale: "en_ZW",
    url: "https://sleekengineers.co.zw",
    siteName: "Sleek Engineers",
    title: "Sleek Engineers | Build bold. Move smart.",
    description:
      "Secure digital products and software engineering for ambitious businesses from Zimbabwe.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sleek Engineers | Build bold. Move smart.",
    description:
      "Secure digital products and software engineering for ambitious businesses from Zimbabwe.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
