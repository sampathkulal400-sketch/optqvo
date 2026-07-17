import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://optqvo.com"),
  title: {
    default: "Optqvo — Build. Automate. Grow. | AI-Powered Software Engineering & Digital Transformation",
    template: "%s | Optqvo",
  },
  description:
    "Optqvo helps businesses build, automate, optimize and scale through modern software, AI solutions, business dashboards, mobile apps and intelligent automation systems.",
  keywords: [
    "AI software development",
    "digital transformation",
    "business automation",
    "custom software",
    "AI solutions",
    "mobile app development",
    "business dashboard",
    "web development",
    "n8n automation",
    "CRM development",
    "ERP systems",
    "AI chatbot",
    "Optqvo",
  ],
  authors: [{ name: "Optqvo", url: "https://optqvo.com" }],
  creator: "Optqvo",
  publisher: "Optqvo",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://optqvo.com",
    siteName: "Optqvo",
    title: "Optqvo — Build. Automate. Grow.",
    description:
      "We design websites, mobile applications, AI solutions, custom business software, automation systems and intelligent dashboards that help businesses operate smarter.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Optqvo — AI-Powered Software Engineering & Digital Transformation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Optqvo — Build. Automate. Grow.",
    description:
      "AI-powered software engineering and digital transformation company. We build websites, mobile apps, AI solutions, automation systems and business dashboards.",
    images: ["/og-image.png"],
    creator: "@optqvo",
    site: "@optqvo",
  },
  alternates: {
    canonical: "https://optqvo.com",
  },
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
  manifest: "/site.webmanifest",
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <meta name="theme-color" content="#09090B" />
        <meta name="color-scheme" content="dark" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Optqvo",
              url: "https://optqvo.com",
              logo: "https://optqvo.com/logo.png",
              description:
                "AI-powered software engineering and digital transformation company helping businesses build, automate, optimize and scale.",
              sameAs: [
                "https://linkedin.com/company/optqvo",
                "https://github.com/optqvo",
                "https://instagram.com/optqvo",
              ],
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "customer service",
                email: "hello@optqvo.com",
              },
              serviceArea: {
                "@type": "Place",
                name: "Global",
              },
              offers: [
                {
                  "@type": "Offer",
                  name: "Website Development",
                  description: "Custom websites, landing pages, web applications and e-commerce.",
                },
                {
                  "@type": "Offer",
                  name: "AI Solutions",
                  description: "AI chatbots, assistants, voice agents and workflow integration.",
                },
                {
                  "@type": "Offer",
                  name: "Business Automation",
                  description: "n8n automation, CRM automation, WhatsApp and email automation.",
                },
              ],
            }),
          }}
        />
      </head>
      <body className="antialiased font-sans">{children}</body>
    </html>
  );
}
