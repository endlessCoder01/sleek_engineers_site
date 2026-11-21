import type { Metadata } from "next";

export const site = {
  name: "Sleek Engineering",
  alternateName: "SleekEngineering",
  url: "https://www.sleekengineering.co.zw",
  email: "info@sleekengineering.co.zw",
  title: "Sleek Engineering | Software & Web Development Zimbabwe",
  description:
    "Sleek Engineering builds websites, mobile apps and secure business systems in Harare, Zimbabwe. Software development for businesses in Zimbabwe and worldwide.",
  logo: "/sleek-engineering-logo-transparent.png",
} as const;

type PageMetadataOptions = {
  title: string;
  description: string;
  path: string;
};

export function createPageMetadata({
  title,
  description,
  path,
}: PageMetadataOptions): Metadata {
  const fullTitle = path === "/" ? title : `${title} | ${site.name}`;
  const url = new URL(path, site.url).toString();
  const image = new URL(site.logo, site.url).toString();

  return {
    title: { absolute: fullTitle },
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      locale: "en_ZW",
      url,
      siteName: site.name,
      title: fullTitle,
      description,
      images: [
        {
          url: image,
          width: 1448,
          height: 1086,
          alt: `${site.name} logo`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [{ url: image, alt: `${site.name} logo` }],
    },
  };
}
