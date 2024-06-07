import Link from "next/link";

import { Button } from "@/components/button";
import { Icons } from "@/components/icons";
import Image from "next/image";

export function Footer() {
    const socials = [
        { href: "https://instagram.com/bastiii/", icons: <Icons.instagram className="text-fg-3" /> },
        { href: "https://youtube.com/c/BastiUI", icons: <Icons.youtube className="text-fg-3" /> },
        { href: "https://threads.net/@bastiii", icons: <Icons.threads className="text-fg-3" /> },
        { href: "https://fr.linkedin.com/in/bastienmarecaux", icons: <Icons.linkedin className="text-fg-3" /> },
        { href: "https://x.com/BastiUi", icons: <Icons.twitter className="text-fg-3" /> },
    ];

    return (
        <footer className="select-none bg-fg-1 py-16 relative">
            <div className="container flex flex-col gap-32 md:gap-96 lg:gap-0">
                <div className="flex justify-end">
                    <div className="flex flex-col gap-6 lg:max-w-md">
                        <h2 className="text-bg-1 text-4xl font-tartuffo">votre panier est prêt</h2>
                        <p className="text-lg text-fg-3">Récapitulatif de votre commande</p>
                        <div className="flex flex-col gap-4">
                            <div className="flex justify-between">
                                <div>
                                    <p className="text-bg-3 text-sm">1 &times; thefrenchtototte</p>
                                    <div className="ml-3">
                                        <p className="text-bg-3 text-sm">+ Finition argent</p>
                                        <p className="text-bg-3 text-sm">+ Ornement obsidiennes</p>
                                    </div>
                                </div>
                                <p className="text-bg-3 text-sm">99,00 &euro;</p>
                            </div>
                            <div className="flex justify-between">
                                <p className="text-bg-3 text-sm">1 &times; Pack Suçoteur Pro</p>
                                <p className="text-bg-3 text-sm">49,00 &euro;</p>
                            </div>
                            <div className="flex justify-between">
                                <p className="text-bg-3 text-sm">Livraison</p>
                                <p className="text-bg-3 text-sm">Offerte</p>
                            </div>
                            <div className="flex justify-between">
                                <p className="text-bg-3 text-sm">Prix</p>
                                <p className="text-bg-3 text-sm">128,00 &euro;</p>
                            </div>
                        </div>
                        <div className="flex flex-col gap-3">
                            <div className="flex justify-between items-center">
                                <p className="text-bg-3 text-sm">Retrait en magasin</p>
                                <div className="flex gap-1 items-center">
                                    <p className="text-bg-1 text-sm">Tototte Store Lille</p>
                                    <Icons.chevrondown className="text-bg-1" />
                                </div>
                            </div>
                            <div className="flex justify-between items-center">
                                <p className="text-bg-3 text-sm">Commandez avant 17h</p>
                                <div className="flex gap-1 items-center">
                                    <p className="text-bg-3 text-sm">
                                        Livrer à <span className="text-bg-1">59000</span>
                                    </p>
                                    <Icons.store className="text-bg-1" />
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-3">
                            <Button>Ajouter au panier</Button>
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
                    <div className="flex justify-start lg:justify-start space-x-5 lg:space-x-3">
                        {socials.map((item, index) => (
                            <Link
                                href={item.href}
                                target="_blank"
                                className="hover:rotate-12 transition duration-300"
                                key={index}
                            >
                                {item.icons}
                            </Link>
                        ))}
                    </div>
                    <div className="flex flex-col lg:flex-row gap-5 lg:items-end">
                        <h1 className="text-fg-3 text-4xl md:text-6xl font-tartuffo text-nowrap">
                            the french tototte <span className="text-lg align-super">&reg;</span>
                        </h1>
                        <div className="flex flex-col pb-1">
                            <p className="text-fg-3 text-xs">
                                Copyright &copy; 2024 <span className="font-tartuffo">the french tototte</span>. Tous droits
                                réservés <span className="text-fg-2"> — Utilisation des cookies — Mention légales.</span>
                            </p>
                            <p className="text-fg-3 text-xs">
                                Sur une idée originale d’Antoine Daniel, concept art par Tera Silver, 3D par Aurélien Thomas, logo
                                par Baloprisonnier, 3D print par Lunath, développement web par Pierre Houllière & packaging par
                                Illusion
                            </p>
                        </div>
                    </div>
                </div>
                <Image
                    src="/image/logo.svg"
                    alt=""
                    width={625}
                    height={625}
                    className="absolute bottom-0 transform -translate-x-1/4 lg:-translate-x-2/4 opacity-50"
                />
            </div>
        </footer>
    );
}
