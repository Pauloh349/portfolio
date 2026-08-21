import type { Metadata, Viewport } from "next";
import "./globals.css";
import { siteUrl } from "./site";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Paul Muiruri (Pauloh) | Full-Stack Developer & Cloud Architect",
  description:
    "Paul Muiruri (Pauloh) is a full-stack developer and cloud architect in Nakuru, Kenya, building scalable web and mobile applications with React, React Native, Node.js, Firebase, and Google Cloud.",
  applicationName: "Paul Muiruri Portfolio",
  authors: [{ name: "Paul Muiruri", url: "https://github.com/pauloh349" }],
  creator: "Paul Muiruri",
  publisher: "Paul Muiruri",
  category: "Portfolio",
  keywords: [
    "Paul Muiruri",
    "Pauloh",
    "full-stack developer",
    "cloud architect",
    "React developer",
    "React Native developer",
    "Nakuru",
    "Kenya",
  ],
  verification: { google: "6ZHjrDkkdft6EqtMpUOnAJoCH1WtSrao5GwHl98MWjE" },
  openGraph: {
    type: "profile",
    title: "Paul Muiruri Pauloh | Full-Stack Developer & Cloud Architect",
    description:
      "Full-stack web, mobile, and cloud engineer based in Nakuru, Kenya.",
    firstName: "Paul",
    lastName: "Muiruri",
    url: siteUrl,
  },
  twitter: {
    card: "summary",
    title: "Paul Muiruri (Pauloh) | Full-Stack Developer & Cloud Architect",
    description:
      "Full-stack web, mobile, and cloud engineer based in Nakuru, Kenya.",
  },
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: "#0f172a",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/me.webp" />
        <link rel="preconnect" href="https://cdnjs.cloudflare.com" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css"
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
