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
  metadataBase: new URL("https://sleekengineering.co.zw"),
  title: {
    default: "Sleek Engineering | Digital products from Zimbabwe",
    template: "%s | Sleek Engineering",
  },
  description:
    "Sleek Engineering builds secure, high-performing web and mobile products for ambitious businesses and SMEs in Zimbabwe and beyond.",
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
    url: "https://sleekengineering.co.zw",
    siteName: "Sleek Engineering",
    title: "Sleek Engineering | Build bold. Move smart.",
    description:
      "Secure digital products and software engineering for ambitious businesses from Zimbabwe.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sleek Engineering | Build bold. Move smart.",
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
