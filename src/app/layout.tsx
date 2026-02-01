import type { Metadata } from "next";
import { Inter, Source_Serif_4 } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
})

const ptSerif = Source_Serif_4({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "700"],
})

export const metadata: Metadata = {
  title: "Mike Rudolph",
  description:
    "Software developer from Canada, currently leading Innovation at REDspace.",
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.mikerudolph.ca"
  ),
  openGraph: {
    title: "Mike Rudolph",
    description:
      "Mike Rudolph is a software developer from Canada, currently leading Innovation at REDspace.",
    url: "/",
    siteName: "Mike Rudolph",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/img/avatar.png",
        width: 1200,
        height: 630,
        alt: "Mike Rudolph",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Mike Rudolph",
    description:
      "Mike Rudolph is a software developer from Canada, currently leading Innovation at REDspace.",
    images: ["/img/avatar.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
    >
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body
        className={`${inter.variable} ${ptSerif.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
