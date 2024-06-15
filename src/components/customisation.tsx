import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";

import { useCartStore } from "@/context/pack";
import { useEffect, useState } from "react";

export function Customisation() {
  const {
    content,
    selection,
    setSelection,
    finition,
    finitions,
    ornements,
    setFinition,
    ornement,
    setOrnement,
  } = useCartStore();

  const tooltipClass =
    "absolute -mt-14 rounded-lg rounded-bl-none bg-fg-1 p-2 text-bg-1 opacity-0 shadow-lg transition-all duration-500 group-hover:z-50 group-hover:opacity-100";

  return (
    <div className="container">
      <div className="flex flex-col gap-12 md:flex-row md:gap-20">
        <div className="hidden w-3/4 pt-5 md:block">
          <CarouselObject finition={finition} ornement={ornement} />
        </div>
        <div className="flex flex-col gap-14 lg:max-w-md">
          <div className="flex flex-col gap-4">
            <h2 className="font-tartuffo text-6xl text-fg-1">
              personnalisez votre tototte
            </h2>
            <p className="text-fg-3">
              Vous allez créer la tototte idéale pour vous. À chacun son
              expérience, à chacun sa tototte.
            </p>
          </div>
          <div className="block md:hidden">
            <CarouselObject finition={finition} ornement={ornement} />
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
                  className={`${item.color} group size-[40px] rounded-full ${
                    index === finition && "border-2 border-fg-1"
                  }`}
                  key={index}
                >
                  {(index === 2 || index === 3) && (
                    <span className={tooltipClass}>Bientôt disponible</span>
                  )}
                </button>
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
                  disabled={
                    (finition === 0 && index === 1) ||
                    index === 2 ||
                    index === 3
                  }
                  onClick={() => setOrnement(index)}
                  className={`${item.color} group size-[40px] rounded-full ${
                    index === ornement && "border-2 border-fg-1"
                  }`}
                  key={index}
                >
                  {((finition === 0 && index === 1) ||
                    index === 2 ||
                    index === 3) && (
                    <span className={tooltipClass}>Bientôt disponible</span>
                  )}
                </button>
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
                    <h4 className="text-start text-xl font-bold text-fg-2">
                      {item.title}
                    </h4>
                    <p className="text-start text-sm text-fg-2">
                      {item.description}
                    </p>
                  </div>
                  <p className="flex items-center gap-2 text-start text-fg-2">
                    {item.promo && (
                      <span className="text-xs line-through">60&euro;</span>
                    )}
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

function CarouselObject({
  finition,
  ornement,
}: {
  finition: number;
  ornement: number;
}) {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState<number>(0);
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <div className="flex items-end justify-center md:sticky md:top-32">
      <Carousel
        opts={{ loop: true }}
        plugins={[Autoplay({ delay: 6000 })]}
        setApi={setApi}
      >
        <CarouselContent>
          {Array.from({ length: 3 }).map((_, index) => (
            <CarouselItem key={index}>
              <Image
                src={`/image/carousel/${index + 1}-${finition + 1}-${
                  ornement + 1
                }.png`}
                alt="Prévisualisation de la tototte"
                width={1000}
                height={500}
                className="size-full"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <div className="absolute flex items-center justify-center gap-1 pb-4">
        {Array.from({ length: count }).map((_, index) => (
          <button
            onClick={() => api?.scrollTo(index)}
            className={`size-2 rounded-full ${
              index + 1 === current ? "bg-fg-1" : "bg-fg-3 opacity-50"
            }`}
            key={index}
          />
        ))}
      </div>
    </div>
  );
}
