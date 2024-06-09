import Image from "next/image";

import { Icons } from "@/components/ui/icons";

export function Testimonials() {
    const testimonials = [
        {
            title: "Baghera Jones",
            image: "baghera.webp",
            role: "Streamer",
            icon: <Icons.twitch className="size-8 text-fg-1" />,
            top: "mt-20",
            description: "J'ai arrêté de vape depuis que j'ai découvert",
        },
        {
            title: "Joueur du Grenier",
            image: "jdg.webp",
            role: "Youtuber",
            icon: <Icons.youtube className="text-fg-1" />,
            top: "mt-72",
            description: "J'ai commandé un pack pour toute la famille et même mon fils Légolas San Goku adore sa",
        },
        {
            title: "Etoiles",
            image: "etoiles.webp",
            role: "Streamer",
            icon: <Icons.twitch className="size-8 text-fg-1" />,
            top: "mt-0",
            description: "Je régule mon taux d'insuline parfaitement et je n'achète plus de saumon ni de nutella grâce à",
        },
    ];

    return (
        <div className="container flex max-w-[950px] justify-between gap-32">
            {testimonials.map((item, index) => (
                <div className={`flex flex-col gap-3 ${item.top}`} key={index}>
                    <Image
                        src={`/image/testimonials/${item.image}`}
                        alt={`Client : ${item.title}`}
                        width={180}
                        height={180}
                        className="rounded-full"
                    />
                    <div className="flex flex-col gap-3">
                        <h2 className="font-tartuffo text-xl text-fg-1">/{item.title}</h2>
                        <div className="flex gap-1">
                            {item.icon}
                            <h3 className="text-fg-1">{item.role}</h3>
                        </div>
                        <p className="max-w-xs text-sm text-fg-3">
                            {item.description} <span className="font-tartuffo text-fg-1">the french tototte&reg;</span>
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
}
