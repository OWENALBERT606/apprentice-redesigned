import type { Metadata } from "next";
import { Rethink_Sans } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import Providers from "@/components/Providers";
import { siteConfig } from "@/config/site";
// import FooterBanner from "@/components/Footer";
const inter = Rethink_Sans({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: {
    default: siteConfig.title,
    template: `%s - ${siteConfig.title}`,
  },
  metadataBase: new URL(siteConfig.url),
  description: siteConfig.description,
  keywords: [
    "South Sudan",
"Nonprofit Organization",
"Community Empowerment",
"Economic Well-being",
"Social Equity",
"Environmental Sustainability",
"Sustainable Development",
"NGO in South Sudan",
"Social Justice",
"Economic Growth",
"Environmental Stewardship",
"Community Support",
"Intergenerational Sustainability",
"Community Initiatives",
"Local Development",
"APPRENTICE NGO",
"APPRENTICE South Sudan",
"APPRENTICE nonprofit",
"APPRENTICE community empowerment",
"APPRENTICE social equity",
"APPRENTICE environmental sustainability",
"APPRENTICE economic well-being",
"APPRENTICE sustainable development",
"APPRENTICE South Sudan initiatives",
"APPRENTICE social justice",
"South Sudan nonprofit",
"community development",
"empowering communities",
"nonprofit organization",
"sustainable initiatives",
"economic empowerment",
"social impact",
"environmental conservation",
"local development",
"charity in South Sudan"
  ],
  authors: [
    {
      name: "apprentice",
      url: "https://www.apprenticengo.org",
    },
  ],
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-US",
    },
  },
  creator: "apprentice",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: "@apprentice",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: `${siteConfig.url}/site.webmanifest`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
