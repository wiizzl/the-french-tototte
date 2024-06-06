import { Instagram, Linkedin, Store, Twitter, Youtube } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import Image from "next/image";

export function Footer() {
    return (
        <footer className="z-50 select-none bg-foreground py-20">
            <div className="container flex justify-between">
                <div>
                    <p className="text-accent">salut</p>
                </div>
                <div className="flex flex-col gap-6 max-w-md">
                    <h2 className="text-background text-4xl font-tartuffo">votre panier est pret</h2>
                    <p className="text-lg text-muted-foreground">Récapitulatif de votre commande</p>
                    <div className="flex flex-col gap-4">
                        <div className="flex justify-between">
                            <div>
                                <p className="text-accent text-sm">1 &times; thefrenchtototte</p>
                                <div className="ml-3">
                                    <p className="text-accent text-sm">+ Finition argent</p>
                                    <p className="text-accent text-sm">+ Ornement obsidiennes</p>
                                </div>
                            </div>
                            <p className="text-accent text-sm">99,00 &euro;</p>
                        </div>
                        <div className="flex justify-between">
                            <p className="text-accent text-sm">1 &times; Pack Suçoteur Pro</p>
                            <p className="text-accent text-sm">49,00 &euro;</p>
                        </div>
                        <div className="flex justify-between">
                            <p className="text-accent text-sm">Livraison</p>
                            <p className="text-accent text-sm">Offerte</p>
                        </div>
                        <div className="flex justify-between">
                            <p className="text-accent text-sm">Prix</p>
                            <p className="text-accent text-sm">128,00 &euro;</p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3">
                        <div>
                            <p className="text-accent text-sm">Retrait en magasin</p>
                            <p className="text-background text-sm">Tototte Store Lille</p>
                        </div>
                        <p className="text-accent text-sm">Commandez avant 17h</p>
                        <p className="text-accent text-sm flex gap-1">
                            Livrer à
                            <span className="flex gap-2 text-background items-center">
                                59000 <Store className="text-accent" size={15} />
                            </span>
                        </p>
                    </div>
                    <div className="flex flex-col gap-3">
                        <Button>Ajouter au Panier</Button>
                        <p className="text-xs/3 text-muted-foreground">
                            <span className="font-tartuffo">thefrenchtototte</span> est couverte par une garantie limitée contre
                            les défauts de fabrication pour une période de 2 mois à compter de la date d'achat. Cette garantie ne
                            couvre pas les dommages causés par une mauvaise utilisation, une négligence ou une modification non
                            autorisée du produit. Dans les limites permises par la loi, thefrenchtototte décline toute
                            responsabilité pour les dommages directs, indirects, spéciaux, accidentels ou consécutifs découlant de
                            l'utilisation ou de l'incapacité d'utiliser thefrenchtototte, même si thefrenchtototte a été informée
                            de la possibilité de tels dommages. En utilisant thefrenchtototte, l'utilisateur consent à la collecte
                            et à l'utilisation de ses données conformément à la politique de confidentialité de thefrenchtototte.
                            Les informations collectées peuvent inclure, mais ne sont pas limitées à, des données d'utilisation,
                            des informations de localisation et des données personnelles, telles que définies dans ladite
                            politique de confidentialité.
                        </p>
                    </div>
                </div>
            </div>
            <div className="mx-10 flex flex-col gap-3">
                <div className="flex gap-2.5">
                    <Link href="https://www.instagram.com/bastiii/" target="_blank">
                        <Instagram className="text-muted-foreground" />
                    </Link>
                    <Link href="https://fr.linkedin.com/in/bastienmarecaux" target="_blank">
                        <Linkedin className="text-muted-foreground" />
                    </Link>
                    <Link href="https://www.youtube.com/c/BastiUI" target="_blank">
                        <Youtube className="text-muted-foreground" />
                    </Link>
                    <Link href="https://x.com/BastiUi" target="_blank">
                        <Twitter className="text-muted-foreground" />
                    </Link>
                </div>
                <div className="flex gap-5">
                    <h1 className="text-muted-foreground text-6xl font-tartuffo">
                        the french tototte <span className="text-lg align-middle">&reg;</span>
                    </h1>
                    <div className="flex flex-col gap-2 justify-center">
                        <p className="text-muted-foreground text-xs">
                            Copyright &copy; 2024 TheFrenchTototte. Tous droits réservés — Utilisation des cookies — Mention
                            légales.
                        </p>
                        <p className="text-muted-foreground text-xs">
                            Sur une idée originale d’Antoine Daniel, concept art par Tera Silver, 3D par Aurélien Thomas, logo par
                            Baloprisonnier, 3D print par Lunath & Packaging par Illusion
                        </p>
                    </div>
                </div>
            </div>
            <Image src="/image/logo.svg" color="red" alt="" width={700} height={700} className="absolute" />
        </footer>
    );
}
