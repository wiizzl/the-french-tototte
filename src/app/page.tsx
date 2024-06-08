"use client";

import { useRef } from "react";

import { Bento } from "@/components/bento";
import { Flag } from "@/components/flag";
import { Header } from "@/components/header";

export default function Home() {
    const bentoRef = useRef<HTMLDivElement | null>(null);
    const customRef = useRef<HTMLDivElement | null>(null);

    return (
        <>
            <Header scrollRef={customRef} />
            <section className="bg-gradient-to-b from-transparent to-bg-2 to-80%">
                <div className="flex items-end justify-center h-screen overflow-hidden">
                    <div className="flex pb-10 flex-col gap-8">
                        <div className="flex flex-col gap-2 items-center justify-center">
                            <h2 className={"font-tartuffo text-fg-2 text-2xl"}>
                                the french tototte <span className="text-xs align-middle">&reg;</span>
                            </h2>
                            <Flag />
                        </div>
                        <div className="flex flex-col items-center gap-10">
                            <h1 className="font-tartuffo text-center text-fg-2 text-6xl">
                                pour ceux qui osent <br />
                                être différents
                            </h1>
                            <button
                                onClick={() => {
                                    if (bentoRef.current) {
                                        bentoRef.current.scrollIntoView({ behavior: "smooth" });
                                    }
                                }}
                                className="text-fg-2 text-sm font-medium relative transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-500 before:absolute before:bg-fg-2 before:origin-center before:h-[1px] before:w-0 hover:before:w-[50%] before:-bottom-2 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-500 after:absolute after:bg-fg-2 after:origin-center after:h-[1px] after:w-0 hover:after:w-[50%] after:-bottom-2 after:right-[50%]"
                            >
                                découvrir
                            </button>
                        </div>
                    </div>
                    <video src="/video/hero.webm" autoPlay loop muted className="absolute -z-10 object-cover w-full h-full" />
                </div>
                <div className="h-10 bg-bg-2 flex justify-center">
                    <div className="h-[150px] w-[1px] bg-gradient-to-b from-fg-2 to-transparent" />
                </div>
            </section>
            <section ref={bentoRef} className="bg-bg-2 py-52">
                <Bento />
            </section>
            <section ref={customRef}></section>
        </>
    );
}
