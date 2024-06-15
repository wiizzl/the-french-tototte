import localFont from "next/font/local";

export const gustavo = localFont({
  src: [
    {
      path: "./gustavo/regular.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "./gustavo/medium.woff",
      weight: "500",
      style: "normal",
    },
    {
      path: "./gustavo/bold.woff",
      weight: "700",
      style: "bold",
    },
  ],
});

export const tartuffo = localFont({
  variable: "--font-tartuffo",
  src: [
    {
      path: "./tartuffo/regular.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "./tartuffo/bold.woff",
      weight: "700",
      style: "bold",
    },
  ],
});
