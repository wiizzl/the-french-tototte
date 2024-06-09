"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

import { Bento } from "@/components/bento";
import { Customisation } from "@/components/customisation";
import { Header } from "@/components/layout/header";
import { Pods } from "@/components/pods";
import { Testimonials } from "@/components/testimonials";
import { ButtonOutline, ButtonRef } from "@/components/ui/button";
import { Flag } from "@/components/ui/flag";
import { Icons } from "@/components/ui/icons";
import { MiddleLine } from "@/components/ui/line";

export default function Home() {
    const bentoRef = useRef<HTMLDivElement | null>(null);
    const podsRef = useRef<HTMLDivElement | null>(null);
    const customRef = useRef<HTMLDivElement | null>(null);

    return (
        <>
            <Header scrollRef={customRef} />
            <section className="bg-gradient-to-b from-transparent to-bg-2 to-80% pb-52">
                <div className="flex h-screen items-end justify-center overflow-hidden">
                    <div className="flex flex-col gap-8 pb-10">
                        <div className="flex flex-col items-center justify-center gap-2">
                            <h2 className={"font-tartuffo text-2xl text-fg-2"}>
                                the french tototte<span className="align-super text-xs">&reg;</span>
                            </h2>
                            <Flag />
                        </div>
                        <div className="flex flex-col items-center gap-10">
                            <div className="relative">
                                <h1 className="text-center font-tartuffo text-6xl tracking-tight text-fg-2">
                                    pour ceux qui osent <br />
                                    être différents
                                </h1>
                            </div>
                            <ButtonRef
                                onClick={() => {
                                    if (bentoRef.current) {
                                        bentoRef.current.scrollIntoView({ behavior: "smooth" });
                                    }
                                }}
                            >
                                découvrir
                            </ButtonRef>
                        </div>
                    </div>
                    <video src="/video/hero.webm" autoPlay loop muted className="absolute -z-10 size-full object-cover" />
                </div>
                <MiddleLine />
            </section>
            <section ref={bentoRef} className="bg-bg-2 pb-32">
                <Bento />
            </section>
            <section className="relative bg-bg-2 pb-52">
                <div className="flex items-center justify-center">
                    <Image src="/video/plugandtote.webp" alt="Technologie Plug'n'tote" width={550} height={550} unoptimized />
                </div>
                {/* <div className="absolute top-60 flex min-h-screen w-full bg-gradient-to-b from-bg-3 to-bg-2 to-30%" /> */}
                <div className="container flex max-w-[700px] flex-col gap-10">
                    <h2 className="font-tartuffo text-6xl text-fg-1">
                        technologie <br />
                        plug'n'tote<span className="align-super text-xl">&reg;</span>
                    </h2>
                    <div className="flex flex-col gap-8 md:flex-row">
                        <p className="text-fg-3">
                            La tototte est équipée de la <span className="font-bold text-fg-1">technologie plug'n'tote</span>,
                            permettant de changer de plug à volonté, offrant ainsi un accès à une{" "}
                            <span className="text-fg-1">gamme infinie de saveurs de suçotage</span> pour satisfaire tous les
                            goûts.
                        </p>
                        <p className="text-fg-3">
                            Cette technologie vous permet de changer en un clin d'oeil de saveur pour{" "}
                            <span className="font-bold text-fg-1">voyager du bout des lèvres</span>.
                        </p>
                    </div>
                    <div className="flex items-center justify-center">
                        <ButtonRef
                            onClick={() => {
                                if (podsRef.current) {
                                    podsRef.current.scrollIntoView({ behavior: "smooth" });
                                }
                            }}
                        >
                            découvrir les saveurs
                        </ButtonRef>
                    </div>
                    <MiddleLine />
                </div>
            </section>
            <section ref={podsRef} className="bg-bg-2 pb-60">
                <Pods />
            </section>
            <section className="group bg-bg-2">
                <div className="container flex max-w-[700px] flex-col gap-10">
                    <h2 className="font-tartuffo text-6xl text-fg-1">
                        suçotez <br />
                        sans soucis
                    </h2>
                    <p className="max-w-xs text-fg-3">
                        La tototte offre une <span className="font-bold text-fg-1">autonomie impressionnante</span> de 50 heures
                        de suçotage grâce à sa batterie au lithium, assurant ainsi{" "}
                        <span className="font-bold text-fg-1">des heures de plaisir ininterrompu</span> pour encore plus de
                        confort et de tranquillité.
                    </p>
                </div>
                <div className="flex items-center justify-center py-16">
                    <Image
                        src="/image/bluetooth.png"
                        alt="Technologie Plug'n'tote"
                        width={700}
                        height={700}
                        className="w-auto -rotate-45 scale-90 transition duration-1000 group-hover:-rotate-12 md:scale-100"
                    />
                </div>
                <div className="container flex max-w-[700px] justify-end">
                    <div className="flex flex-col gap-5">
                        <div className="flex flex-col gap-3">
                            <h2 className="text-6xl font-medium text-fg-1">50h</h2>
                            <p className="text-xs font-medium text-fg-3">
                                de suçotage Bluetooth <br />
                                sans interruption
                            </p>
                        </div>
                        <p className="max-w-xs text-fg-3">
                            Grâce aux <span className="font-bold text-fg-1">technologies sans contact</span> profitez d’une
                            recharge rapide sur son socle à induction.
                        </p>
                    </div>
                </div>
            </section>
            <section className="bg-gradient-to-b from-bg-2 via-bg-3 to-bg-2 pb-52">
                <div className="flex justify-center overflow-hidden">
                    <video
                        src="/video/spotify.webm"
                        autoPlay
                        loop
                        muted
                        className="scale-75 rounded-xl border-2 border-fg-1 md:scale-50"
                    />
                </div>
                <div className="container flex max-w-[700px] flex-col items-center gap-8 md:-mt-20 md:flex-row md:gap-32 lg:-mt-32">
                    <h2 className="font-tartuffo text-4xl text-fg-1 md:text-6xl">suçotez vos titres préférés</h2>
                    <div className="flex flex-col gap-3">
                        <div>
                            <Link href="https://support.spotify.com/fr/article/spotify-connect/" target="_blank">
                                <ButtonOutline>
                                    <Icons.spotify />
                                    Spotify Connect&reg;
                                </ButtonOutline>
                            </Link>
                            <p className="max-w-xs text-sm text-fg-3">En partenariat exclusif avec Spotify</p>
                        </div>
                        <p className="text-fg-3">
                            En connectant votre tototte à votre smartphone par la technologie bluetooth,{" "}
                            <span className="font-bold text-fg-1">dégustez vos morceaux</span> et vos vidéos préférées directement
                            dans votre bouche.
                        </p>
                    </div>
                </div>
            </section>
            <section className="bg-bg-2 pb-52">
                <div className="flex items-center justify-center gap-20">
                    <div className="relative overflow-hidden">
                        <Image
                            src="/image/mynthos/mynthos.png"
                            alt="Le jus de Mynthos"
                            width={250}
                            height={250}
                            className="w-auto"
                        />
                        <Image
                            src="/image/mynthos/light.png"
                            alt=""
                            width={250}
                            height={250}
                            className="absolute top-0 animate-mynthos rounded-full mix-blend-overlay"
                        />
                    </div>
                    <div className="flex max-w-xs flex-col gap-8">
                        <div className="flex flex-col gap-2">
                            <h2 className="font-tartuffo text-6xl">
                                le jus de <br />
                                mynthos
                            </h2>
                            <Link href="https://x.com/Mynthos" target="_blank">
                                <ButtonOutline>Collaboration exclusive</ButtonOutline>
                            </Link>
                        </div>
                        <p className="text-fg-3">
                            Découvrez l'exclusivité : la fusion inédite entre{" "}
                            <span className="font-bold text-fg-1">Le Jus de Mynthos</span> et{" "}
                            <span className="font-tartuffo text-fg-1">the french tototte&reg;</span>, offrant un goût rare et
                            recherché. Une collaboration qui révèle l'essence de l'excellence et de l'originalité, à savourer sans
                            plus attendre.
                        </p>
                    </div>
                </div>
            </section>
            <section className="bg-gradient-to-b from-bg-2 to-bg-blue pb-52">
                <div className="flex flex-col gap-20">
                    <div className="flex justify-center">
                        <div className="flex flex-col gap-5">
                            <h2 className="text-center font-tartuffo text-6xl text-fg-1">
                                ils ont suçoté, <br />
                                ils ont adoré
                            </h2>
                            <p className="max-w-md text-center text-fg-2">
                                Nos totottes sont utilisées par les plus grands de ce monde et si vous voulez mon avis, ce n'est
                                pas un hasard.
                            </p>
                        </div>
                    </div>
                    <Testimonials />
                </div>
            </section>
            <section ref={customRef} className="bg-bg-blue pb-20">
                <Customisation />
            </section>
        </>
    );
}
