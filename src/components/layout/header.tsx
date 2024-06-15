"use client";

import Link from "next/link";
import { MutableRefObject, useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { Icons } from "@/components/ui/icons";

export function Header({
  scrollRef,
}: {
  scrollRef: MutableRefObject<HTMLDivElement | null>;
}) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 580) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed z-50 w-full select-none pt-9 ${
        scrolled && "bg-gradient-to-b from-bg-2 to-transparent"
      }`}
    >
      <div className="container flex justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Icons.tototte className="text-fg-1" />
        </Link>
        <div
          className={`hidden items-center justify-center transition-all duration-700 md:flex ${
            scrolled ? "opacity-100" : "opacity-0"
          }`}
        >
          <h2 className="ml-16 font-tartuffo text-2xl text-fg-2">
            the french tototte
          </h2>
        </div>
        <div className="flex items-center justify-center">
          <Button
            onClick={() => {
              if (scrollRef.current) {
                scrollRef.current.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            Acheter
          </Button>
        </div>
      </div>
    </header>
  );
}
