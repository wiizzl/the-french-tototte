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
        <header className="fixed w-full z-50 bg-gradient-to-b from-bg-2 to-transparent select-none pt-9">
            <div className="container flex justify-between">
                <Link href="/" className="flex items-center gap-2">
                    <Icons.tototte className="text-fg-1" />
                </Link>
                <div className="flex justify-center items-center">
                    <h2 className="font-tartuffo text-fg-2 text-2xl">the french tototte</h2>
                </div>
                <div className="flex justify-center items-center">
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
