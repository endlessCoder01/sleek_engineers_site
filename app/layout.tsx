import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { site } from "./lib/site";
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
  metadataBase: new URL(site.url),
  title: {
    default: site.title,
    template: "%s | Sleek Engineering",
  },
  description: site.description,
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
  authors: [{ name: "Sleek Engineering" }],
  creator: "Sleek Engineering",
  openGraph: {
    type: "website",
    locale: "en_ZW",
    url: site.url,
    siteName: site.name,
    title: site.title,
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.description,
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
