import type { Metadata } from "next";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://ducksungtp.com";

export const DEFAULT_METADATA: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "덕성테크팩 | MRO 구매대행 전문",
    template: "%s | 덕성테크팩",
  },
  description:
    "26년 경험의 MRO 구매대행 전문기업. 전국 물류네트워크와 6,000여 품목으로 기업 구매환경을 최적화합니다.",
  keywords: ["MRO", "구매대행", "소모성자재", "덕성테크팩", "NSO", "산업용품", "익산"],
  authors: [{ name: "(주)덕성테크팩" }],
  creator: "(주)덕성테크팩",
  openGraph: {
    type: "website",
    locale: "ko_KR",
    alternateLocale: "en_US",
    url: SITE_URL,
    siteName: "덕성테크팩",
    title: "덕성테크팩 | MRO 구매대행 전문",
    description:
      "26년 경험의 MRO 구매대행 전문기업. 전국 물류네트워크와 6,000여 품목으로 기업 구매환경을 최적화합니다.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "덕성테크팩 MRO 구매대행 전문",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "덕성테크팩 | MRO 구매대행 전문",
    description: "26년 경험의 MRO 구매대행 전문기업.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export function pageMetadata(title: string, description?: string): Metadata {
  return {
    title,
    description: description ?? DEFAULT_METADATA.description as string,
    openGraph: {
      ...(DEFAULT_METADATA.openGraph as object),
      title: `${title} | 덕성테크팩`,
      description: description ?? DEFAULT_METADATA.description as string,
    },
  };
}
