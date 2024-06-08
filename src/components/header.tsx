"use client";

import Link from "next/link";
import { MutableRefObject, useEffect, useState } from "react";

import { Button } from "@/components/button";
import { Icons } from "@/components/icons";

export function Header({ scrollRef }: { scrollRef: MutableRefObject<HTMLDivElement | null> }) {
    const [visible, setVisible] = useState<boolean>(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 30) {
                setVisible(true);
            } else setVisible(false);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header className="fixed z-50 w-full select-none bg-gradient-to-b from-bg-2 to-transparent pt-9">
            <div className="container flex justify-between">
                <Link href="/" className="flex items-center gap-2">
                    <Icons.tototte className="text-fg-1" />
                </Link>
                <div className="hidden items-center justify-center md:flex">
                    <h2 className="font-tartuffo text-2xl text-fg-2">the french tototte</h2>
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
