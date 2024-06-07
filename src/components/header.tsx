"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import { Button } from "@/components/button";
import { Icons } from "@/components/icons";

export function Header({ className }: { className?: string }) {
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
        <header className="fixed w-full z-50 select-none py-9">
            <div className="container flex items-center justify-between">
                <div className="flex items-center gap-5 lg:gap-16">
                    <div className="flex items-center">
                        <Link href="/" className="flex items-center gap-2">
                            <Icons.tototte className="text-foreground -ml-2" />
                        </Link>
                    </div>
                </div>
                <div className="justify-center flex items-center">
                    {visible && <h1 className="font-tartuffo text-xl">the french tototte</h1>}
                </div>
                <div className="flex items-center">
                    <nav className="flex space-x-2">
                        <Button>Acheter</Button>
                    </nav>
                </div>
            </div>
        </header>
    );
}
