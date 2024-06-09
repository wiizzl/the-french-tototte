"use client";

import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Icons } from "@/components/ui/icons";

import { useCartStore } from "@/context/pack";

export function Footer() {
    const { content, selection, ornement, finition, ornements, finitions } = useCartStore();

    const socials = [
        { href: "https://instagram.com/bastiii/", icons: <Icons.instagram className="text-fg-3" /> },
        { href: "https://www.youtube.com/watch?v=FVEqE47pOLw", icons: <Icons.youtube className="text-fg-3" /> },
        { href: "https://threads.net/@bastiii", icons: <Icons.threads className="text-fg-3" /> },
        { href: "https://fr.linkedin.com/in/bastienmarecaux", icons: <Icons.linkedin className="text-fg-3" /> },
        { href: "https://x.com/BastiUi", icons: <Icons.twitter className="text-fg-3" /> },
    ];

    const getTotalPrice = () => {
        let totalPrice = 99.0;

        if (content[selection].price !== "Offert") {
            totalPrice += parseFloat(content[selection].price.replace(",", "."));
        }

        return totalPrice;
    };

    return (
        <footer className="relative bg-fg-1 py-16">
            <div className="container flex flex-col gap-32 md:gap-96 lg:gap-0">
                <div className="flex justify-end">
                    <div className="flex flex-col gap-6 lg:max-w-md">
                        <h2 className="font-tartuffo text-4xl text-bg-1">votre panier est prêt</h2>
                        <p className="text-fg-3">Récapitulatif de votre commande</p>
                        <div className="flex flex-col gap-4">
                            <div className="flex justify-between">
                                <div>
                                    <p className="text-sm text-bg-3">1 &times; thefrenchtototte</p>
                                    <div className="ml-3">
                                        <p className="text-sm text-bg-3">
                                            + Finition {finitions[finition].title.toLocaleLowerCase()}
                                        </p>
                                        <p className="text-sm text-bg-3">
                                            + Ornement {ornements[ornement].title.toLocaleLowerCase()}
                                        </p>
                                    </div>
                                </div>
                                <p className="text-sm text-bg-3">99,00 &euro;</p>
                            </div>
                            <div className="flex justify-between">
                                <p className="text-sm text-bg-3">1 &times; {content[selection].title}</p>
                                <p className="text-sm text-bg-3">{content[selection].price}</p>
                            </div>
                            <div className="flex justify-between">
                                <p className="text-sm text-bg-3">Livraison</p>
                                <p className="text-sm text-bg-3">Offerte</p>
                            </div>
                            <div className="flex justify-between">
                                <p className="text-sm text-bg-3">Prix</p>
                                <p className="text-sm text-bg-3">{getTotalPrice()},00 &euro;</p>
                            </div>
                        </div>
                        <div className="flex flex-col gap-3">
                            <div className="flex items-center justify-between">
                                <p className="text-sm text-bg-3">Retrait en magasin</p>
                                <div className="flex items-center gap-1">
                                    <p className="text-sm text-bg-1">Tototte Store Lille</p>
                                    <Icons.chevrondown className="text-bg-1" />
                                </div>
                            </div>
                            <div className="flex items-center justify-between">
                                <p className="text-sm text-bg-3">Commandez avant 17h</p>
                                <div className="flex items-center gap-1">
                                    <p className="text-sm text-bg-3">
                                        Livrer à <span className="text-bg-1">59000</span>
                                    </p>
                                    <Icons.store className="text-bg-1" />
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-3">
                            <Button onClick={() => alert("Sérieusement !?")}>Ajouter au panier</Button>
                            <p className="text-xs/3 text-fg-3">
                                <span className="font-tartuffo">the french tototte</span> est couverte par une garantie limitée
                                contre les défauts de fabrication pour une période de 2 mois à compter de la date d'achat. Cette
                                garantie ne couvre pas les dommages causés par une mauvaise utilisation, une négligence ou une
                                modification non autorisée du produit. Dans les limites permises par la loi, thefrenchtototte
                                décline toute responsabilité pour les dommages directs, indirects, spéciaux, accidentels ou
                                consécutifs découlant de l'utilisation ou de l'incapacité d'utiliser thefrenchtototte, même si
                                thefrenchtototte a été informée de la possibilité de tels dommages. En utilisant thefrenchtototte,
                                l'utilisateur consent à la collecte et à l'utilisation de ses données conformément à la politique
                                de confidentialité de thefrenchtototte. Les informations collectées peuvent inclure, mais ne sont
                                pas limitées à, des données d'utilisation, des informations de localisation et des données
                                personnelles, telles que définies dans ladite politique de confidentialité.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="z-10 flex flex-col gap-2">
                    <div className="flex justify-start space-x-5 lg:justify-start lg:space-x-3">
                        {socials.map((item, index) => (
                            <Link
                                href={item.href}
                                target="_blank"
                                className="transition duration-300 hover:rotate-12"
                                key={index}
                            >
                                {item.icons}
                            </Link>
                        ))}
                    </div>
                    <div className="flex flex-col gap-5 lg:flex-row lg:items-end">
                        <h1 className="text-nowrap font-tartuffo text-4xl text-fg-3 md:text-6xl">
                            the french tototte<span className="align-super text-xl">&reg;</span>
                        </h1>
                        <div className="flex flex-col pb-1">
                            <p className="text-xs text-fg-3">
                                Copyright &copy; 2024 <span className="font-tartuffo">the french tototte</span>. Tous droits
                                réservés <span className="text-fg-2"> — Utilisation des cookies — Mention légales.</span>
                            </p>
                            <p className="text-xs text-fg-3">
                                Sur une idée originale d’Antoine Daniel, concept art par Tera Silver, 3D par Aurélien Thomas, logo
                                par Baloprisonnier, 3D print par Lunath, développement web par Pierre Houllière & packaging par
                                Illusion
                            </p>
                        </div>
                    </div>
                </div>
                <Image
                    src="/image/logo.svg"
                    alt="Logo du footer"
                    width={625}
                    height={625}
                    className="absolute bottom-0 w-auto -translate-x-1/4 opacity-50 lg:-translate-x-2/4"
                />
            </div>
        </footer>
    );
}
