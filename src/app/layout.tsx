import { gustavo, tartuffo } from "@/fonts/fonts";
import "@/style.css";

import type { Metadata } from "next";
import { PropsWithChildren } from "react";

import { Footer } from "@/components/layout/footer";

import config from "@/config.json";

export const metadata: Metadata = {
  title: {
    default: config.sugar.title,
    template: `%s | ${config.sugar.title}`,
  },
  description: config.sugar.description,
  keywords: config.sugar.keywords,
  authors: config.author,
  creator: config.author[0].name,
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head />
      <body
        className={`selection:bg-fg-3/40 ${gustavo.className} ${tartuffo.variable}`}
      >
        <main className="antialiased">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
