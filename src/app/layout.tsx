import type { Metadata, Viewport } from "next";
import { Archivo, Azeret_Mono } from "next/font/google";

import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { MotionProvider } from "@/components/motion-provider";
import { person } from "@/lib/profile";

import "./globals.css";

const archivo = Archivo({
  subsets: ["latin"],
  axes: ["wdth"],
  display: "swap",
  variable: "--font-archivo",
});

const azeret = Azeret_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-azeret",
});

const description =
  "Victor Starkov is an international tax and accounting professional in Chicago — MAcc candidate at Gies College of Business, incoming Tax Associate at PwC, and CPA candidate. He builds the reporting and AI workflows that make complex tax data decision-ready.";

export const metadata: Metadata = {
  metadataBase: new URL("http://localhost:3000"),
  title: {
    default: `${person.name} — International Tax & Accounting`,
    template: `%s — ${person.name}`,
  },
  description,
  keywords: [
    "Victor Starkov",
    "international tax",
    "tax associate",
    "PwC",
    "CPA candidate",
    "accounting",
    "Gies College of Business",
    "Chicago",
    "financial reporting",
    "executive dashboards",
  ],
  authors: [{ name: person.name, url: person.linkedin }],
  creator: person.name,
  openGraph: {
    type: "profile",
    title: `${person.name} — International Tax & Accounting`,
    description,
    siteName: person.name,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: `${person.name} — International Tax & Accounting`,
    description,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
  colorScheme: "light",
};

/**
 * Runs synchronously as the first thing in <body>, so revealed content never
 * paints visible and then snaps hidden. Deliberately a raw inline script and
 * not next/script: `beforeInteractive` queues onto `self.__next_s` and only
 * executes once the framework bundle loads, which is far too late to prevent
 * the flash.
 *
 * It writes its own attribute rather than touching className, which React
 * owns. It is guarded on IntersectionObserver support and disarms itself after
 * 4s if MotionProvider never hydrates — the page must never ship blank.
 */
const motionBootstrap = `(function(){try{if(!("IntersectionObserver" in window))return;var d=document.documentElement;d.setAttribute("data-motion","ready");setTimeout(function(){if(!d.hasAttribute("data-motion-live"))d.removeAttribute("data-motion");},4000);}catch(e){}})();`;

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${archivo.variable} ${azeret.variable}`}
      suppressHydrationWarning
    >
      <body className="min-h-screen bg-paper text-ink antialiased">
        <script dangerouslySetInnerHTML={{ __html: motionBootstrap }} />
        <MotionProvider />
        <a
          href="#main"
          className="t-meta sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-60 focus:bg-ink focus:px-4 focus:py-3 focus:text-paper"
        >
          Skip to content
        </a>
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
