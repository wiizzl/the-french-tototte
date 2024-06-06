import "@/styles/globals.css";

import type { Metadata } from "next";
import localFont from "next/font/local";
import { PropsWithChildren } from "react";

import { Footer } from "@/components/footer";
import { Header } from "@/components/header";

import { cn } from "@/lib/utils";

import config from "@/config.json";

const fontTartuffo = localFont({
    src: "./fonts/Tartuffo.otf",
    display: "swap",
    variable: "--font-tartuffo",
});
const fontGustavo = localFont({
    src: "./fonts/Gustavo.otf",
    display: "swap",
    variable: "--font-gustavo",
});

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
                className={cn(
                    "font-gustavo antialiased selection:bg-primary/30 scroll-smooth",
                    fontTartuffo.variable,
                    fontGustavo.variable,
                )}
            >
                <Header />
                <main className="flex-1">{children}</main>
                <Footer />
            </body>
        </html>
    );
}
