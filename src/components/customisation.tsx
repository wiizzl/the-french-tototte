import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

import { useCartStore } from "@/context/pack";

export function Customisation() {
    const { content, selection, setSelection, finition, finitions, ornements, setFinition, ornement, setOrnement } =
        useCartStore();

    return (
        <div className="container">
            <div className="flex gap-20">
                <div className="w-3/4 pt-5">
                    <Carousel className="sticky top-32" opts={{ loop: true }} plugins={[Autoplay({ delay: 8000 })]}>
                        <CarouselContent>
                            {Array.from({ length: 3 }).map((_, index) => (
                                <CarouselItem key={index}>
                                    <Image
                                        src={`/image/carousel/${index + 1}-${finition + 1}-${ornement + 1}.png`}
                                        alt="Prévisualisation de la tototte"
                                        width={1000}
                                        height={500}
                                        className="size-full rounded-md"
                                    />
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious />
                        <CarouselNext />
                    </Carousel>
                </div>
                <div className="flex flex-col gap-14 lg:max-w-md">
                    <div className="flex flex-col gap-4">
                        <h2 className="font-tartuffo text-6xl text-fg-1">personnalisez votre tototte</h2>
                        <p className="text-fg-3">
                            Vous allez créer la tototte idéale pour vous. À chacun son expérience, à chacun sa tototte.
                        </p>
                    </div>
                    <div className="flex flex-col gap-6">
                        <div className="flex flex-col gap-4">
                            <h3 className="font-tartuffo text-5xl text-fg-1">finition</h3>
                            <p className="text-fg-3">Choisissez votre favorite</p>
                        </div>
                        <div className="flex gap-2">
                            {finitions.map((item, index) => (
                                <button
                                    disabled={index === 2 || index === 3}
                                    onClick={() => {
                                        setFinition(index);
                                        setOrnement(0);
                                    }}
                                    className={`${item.color} size-[40px] rounded-full ${
                                        index === finition && "border-2 border-fg-1"
                                    }`}
                                    key={index}
                                />
                            ))}
                        </div>
                    </div>
                    <div className="flex flex-col gap-6">
                        <div className="flex flex-col gap-4">
                            <h3 className="font-tartuffo text-5xl text-fg-1">ornement</h3>
                            <p className="text-fg-3">Choisissez votre pierre précieuse</p>
                        </div>
                        <div className="flex gap-2">
                            {ornements.map((item, index) => (
                                <button
                                    disabled={(finition === 0 && index === 1) || index === 2 || index === 3}
                                    onClick={() => setOrnement(index)}
                                    className={`${item.color} size-[40px] rounded-full ${
                                        index === ornement && "border-2 border-fg-1"
                                    }`}
                                    key={index}
                                />
                            ))}
                        </div>
                    </div>
                    <div className="flex flex-col gap-6">
                        <div className="flex flex-col gap-4">
                            <h3 className="font-tartuffo text-5xl text-fg-1">pack saveur</h3>
                            <p className="text-fg-3">Choisissez votre pack de saveurs</p>
                        </div>
                        <div className="flex flex-col gap-0.5">
                            {content.map((item, index) => (
                                <button
                                    key={index}
                                    className={`flex items-center justify-between p-3 hover:bg-bg-1 ${
                                        selection === index && "border border-fg-1 hover:bg-bg-blue"
                                    }`}
                                    onClick={() => setSelection(index)}
                                >
                                    <div>
                                        <h4 className="text-start text-xl font-bold text-fg-2">{item.title}</h4>
                                        <p className="text-start text-sm text-fg-2">{item.description}</p>
                                    </div>
                                    <p className="flex items-center gap-2 text-start text-fg-2">
                                        {item.promo && <span className="text-xs line-through">60&euro;</span>}
                                        {item.price}
                                    </p>
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
