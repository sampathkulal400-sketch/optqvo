import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: "#09090B",
  colorScheme: "dark",
};
import "./globals.css";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://optqvo.com"),
  title: {
    default: "Optqvo Solutions — Build. Automate. Grow. | Practical Software Engineering & Business Automation",
    template: "%s | Optqvo Solutions",
  },
  description:
    "Optqvo Solutions helps businesses build, automate, optimize and scale through custom web applications, WhatsApp automations, operational dashboards, mobile apps, and business software.",
  keywords: [
    "custom software development",
    "business automation",
    "WhatsApp automation",
    "web development",
    "mobile app development",
    "business dashboard",
    "CRM development",
    "ERP systems",
    "QR menu ordering",
    "Optqvo Solutions",
    "Optqvo",
  ],
  authors: [{ name: "Optqvo Solutions", url: "https://optqvo.com" }],
  creator: "Optqvo Solutions",
  publisher: "Optqvo Solutions",
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
    siteName: "Optqvo Solutions",
    title: "Optqvo Solutions — Build. Automate. Grow.",
    description:
      "We build custom business websites, mobile applications, WhatsApp automations, bespoke business tools, and operational dashboards that help businesses run smoother.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Optqvo Solutions — Software Engineering & Business Automation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Optqvo Solutions — Build. Automate. Grow.",
    description:
      "Practical software engineering and business automation. We build custom web apps, mobile apps, WhatsApp automations, and operational dashboards.",
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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Optqvo Solutions",
              url: "https://optqvo.com",
              logo: "https://optqvo.com/logo.png",
              description:
                "Practical software engineering and business automation company helping businesses build custom web applications, WhatsApp automations, and operational tools.",
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
                  name: "Website & Web App Development",
                  description: "Custom websites, business portals, web applications and quick commerce.",
                },
                {
                  "@type": "Offer",
                  name: "Custom Business Portals & CRM",
                  description: "Custom management systems, member portals, and business workflow software.",
                },
                {
                  "@type": "Offer",
                  name: "Business & WhatsApp Automation",
                  description: "WhatsApp notifications, CRM sync, invoice automation, and scheduled alerts.",
                },
              ],
            }),
          }}
        />
      </head>
      <body className="antialiased font-sans">
        {children}
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
