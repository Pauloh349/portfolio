import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "./globals.css";
import { siteUrl } from "./site";

const profileImage = `${siteUrl}/paul-muiruri.webp`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: "Paul Muiruri | Full-Stack Developer & Cloud Architect",

  description:
    "Paul Njuguna Muiruri, known as Paul Muiruri and Pauloh, is a Kenyan full-stack developer and cloud architect building web and mobile applications with Next.js, React, React Native, Node.js, Firebase, and Google Cloud.",

  applicationName: "Paul Muiruri Portfolio",

  authors: [
    {
      name: "Paul Njuguna Muiruri",
      url: siteUrl,
    },
  ],

  creator: "Paul Njuguna Muiruri",
  publisher: "Paul Njuguna Muiruri",

  keywords: [
    "Paul Muiruri",
    "Paul Njuguna Muiruri",
    "Pauloh",
    "software developer Kenya",
    "full-stack developer Kenya",
    "React developer",
    "React Native developer",
    "Next.js developer",
    "cloud architect Kenya",
    "Studyhub Ke",
    "Egerton University",
  ],

  verification: {
    google: "6ZHjrDkkdft6EqtMpUOnAJoCH1WtSrao5GwHl98MWjE",
  },

  openGraph: {
    type: "profile",
    title: "Paul Muiruri | Full-Stack Developer & Cloud Architect",
    description:
      "Paul Njuguna Muiruri (Paul Muiruri / Pauloh) is a Kenyan full-stack developer and cloud architect.",
    firstName: "Paul",
    lastName: "Muiruri",
    username: "Pauloh",
    url: siteUrl,
  },

  twitter: {
    card: "summary",
    title: "Paul Muiruri | Full-Stack Developer & Cloud Architect",
    description:
      "Paul Njuguna Muiruri (Paul Muiruri / Pauloh) is a Kenyan full-stack developer and cloud architect.",
  },

  alternates: {
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${siteUrl}/#person`,

  name: "Paul Njuguna Muiruri",

  alternateName: ["Paul Muiruri", "Pauloh"],

  url: siteUrl,

  image: profileImage,

  jobTitle: "Full-Stack Developer & Cloud Architect",

  description:
    "Paul Njuguna Muiruri, known as Paul Muiruri or Pauloh, is a Kenyan full-stack developer and cloud architect building web and mobile applications.",

  sameAs: [
    "https://github.com/pauloh349",
    "https://www.linkedin.com/in/paul-muiruri-34b734338",
    "https://www.x.com/Plumace1",
    "https://www.instagram.com/thee_pauloh/",
  ],

  knowsAbout: [
    "Next.js",
    "React",
    "React Native",
    "JavaScript",
    "Node.js",
    "Firebase",
    "Google Cloud",
    "PostgreSQL",
    "Web Development",
    "Mobile App Development",
  ],
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0f172a",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/paul-muiruri.webp" />

        <link
          rel="preload"
          as="style"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css"
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personSchema).replace(/</g, "\\u003c"),
          }}
        />
      </head>

      <body className="min-h-full flex flex-col">
        {children}
        <Script id="load-font-awesome" strategy="lazyOnload">
          {`const link = document.createElement("link");
link.rel = "stylesheet";
link.href = "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css";
document.head.appendChild(link);`}
        </Script>
      </body>
    </html>
  );
}
