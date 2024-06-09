import Image from "next/image";

import { NumberTicker } from "@/components/ui/ticker";

// CREDIT: Stéphane Woutiers - https://github.com/Doelia/the-french-tototte/blob/main/src/app/parts/Pods.tsx
// his code helped me see an approach to making the arrows for speech bubbles

export function Pods() {
    const pods = [
        {
            title: "fraise",
            description: "Une fraise française cueilli dans nos chers régions",
            tooltipPosition: "left-[30px] bottom-[200px]",
            arrowPosition: "left-[7px]",
        },
        {
            title: "menthe",
            description: "Pour une haleine fraiche avant vos réunions",
            tooltipPosition: "left-[-60px] bottom-[200px]",
            arrowPosition: "left-[90px]",
        },
        {
            title: "bubble gum",
            description: "Un goût sucré pour retourner en enfance",
            tooltipPosition: "left-[-175px] bottom-[200px]",
            arrowPosition: "left-[185px] scale-x-[-1]",
        },
        {
            title: "spicy",
            description: "Pour ceux qui aiment vivre des nouvelles chose tout les jours",
            tooltipPosition: "left-[-235px] bottom-[200px]",
            arrowPosition: "left-[240px] scale-x-[-1]",
        },
        {
            title: "bacon fumé",
            description: "Un goût de porc pour honorer nos élevages made in france",
            tooltipPosition: "left-[30px] bottom-[200px]",
            arrowPosition: "left-[7px]",
        },
        {
            title: "france",
            description: "Suçotez la République avec cet étendard bleu blanc rouge",
            tooltipPosition: "left-[-60px] bottom-[200px]",
            arrowPosition: "left-[90px]",
        },
        {
            title: "jus de mynthos",
            description: "Pofitez du gout concentré de la première traite du matin",
            tooltipPosition: "left-[-175px] bottom-[200px]",
            arrowPosition: "left-[185px] scale-x-[-1]",
        },
        {
            title: "montazac et torez",
            description: "Pour retrouver le goût d'un vin unique",
            tooltipPosition: "left-[-235px] bottom-[200px]",
            arrowPosition: "left-[240px] scale-x-[-1]",
        },
    ];

    return (
        <div className="flex flex-col gap-20 pt-20">
            <div className="container grid max-w-[800px] grid-cols-4 grid-rows-2 place-items-center md:grid-cols-8 md:grid-rows-1">
                {pods.map((item, index) => (
                    <Pod
                        title={item.title}
                        description={item.description}
                        tooltipPosition={item.tooltipPosition}
                        arrowPosition={item.arrowPosition}
                        key={index}
                    />
                ))}
            </div>

            {/* TODO: add a gradient behind the pods */}

            <div className="container max-w-xl px-5">
                <div className="flex flex-col items-center gap-10 md:flex-row">
                    <div className="flex gap-10">
                        <div className="flex flex-col gap-5">
                            <p className="text-center text-5xl font-bold text-fg-1 md:text-start">
                                <NumberTicker value={30} />
                            </p>
                            <p className="text-sm text-fg-3">Saveurs disponibles</p>
                        </div>
                        <div className="flex flex-col gap-5">
                            <p className="text-center text-5xl font-bold text-fg-1 md:text-start">
                                <NumberTicker value={11} />
                            </p>
                            <p className="text-sm text-fg-3">Vertues medicinales</p>
                        </div>
                    </div>
                    <div className="text-center text-fg-3 md:text-start">
                        Laissez-vous tenter par les saveurs des différents plugs et{" "}
                        <strong className="text-fg-1">decouvrez un monde de délices</strong> pour chaque envie.
                    </div>
                </div>
            </div>
        </div>
    );
}

interface PodProps {
    title: string;
    description: string;
    tooltipPosition: string;
    arrowPosition: string;
}

function Pod({ title, description, tooltipPosition, arrowPosition }: PodProps) {
    return (
        <div className="group relative">
            <Image
                src="/image/pods/shadow.png"
                width={60}
                height={1}
                className="absolute bottom-[2px] w-auto scale-x-50 blur-[2px] transition duration-300 group-hover:scale-x-90"
                alt="Ombre du pod"
            />
            <Image
                src={`/image/pods/${title.split(" ")[0]}.png`}
                width={60}
                height={1}
                className={"relative w-auto transition duration-300 group-hover:-translate-y-12"}
                alt="Image du pod"
            />
            <div
                className={`absolute w-[300px] translate-y-48 scale-0 border border-fg-1 bg-bg-1 p-5 opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:scale-100 group-hover:opacity-100 ${tooltipPosition}`}
            >
                {/* <Image
                    src={"/image/pods/indicator.png"}
                    width={22}
                    height={22}
                    className={`absolute bottom-[-34px] ${arrowPosition}`}
                    alt="Indicateur du pod"
                /> */}
                <div className="flex flex-col gap-3">
                    <h2 className="text-xl text-fg-1">{title}</h2>
                    <p className="text-fg-3">{description}</p>
                </div>
            </div>
        </div>
    );
}
