import Image from "next/image";

import { Icons } from "@/components/ui/icons";
import { useEffect, useRef, useState } from "react";

export function Testimonials() {
  function useIsVisible(ref: any) {
    const [isIntersecting, setIntersecting] = useState<boolean>(false);

    useEffect(() => {
      const observer = new IntersectionObserver(([entry]) => {
        setIntersecting(entry.isIntersecting);
      });

      observer.observe(ref.current);
      return () => {
        observer.disconnect();
      };
    }, [ref]);

    return isIntersecting;
  }

  function Client({ children }: { children: React.ReactNode }) {
    const ref = useRef(null);
    const isVisible = useIsVisible(ref);

    const revealAnimation = `transition duration-500 transform ${
      isVisible ? "translate-x-0 opacity-100" : "translate-y-20 opacity-0"
    }`;

    return (
      <div className={revealAnimation} ref={ref}>
        {children}
      </div>
    );
  }

  const testimonials = [
    {
      title: "Baghera Jones",
      image: "baghera.webp",
      role: "Streamer",
      icon: <Icons.twitch className="size-8 text-fg-1" />,
      top: "md:mt-20",
      description: "J'ai arrêté de vape depuis que j'ai découvert",
    },
    {
      title: "Joueur du Grenier",
      image: "jdg.webp",
      role: "Youtuber",
      icon: <Icons.youtube className="text-fg-1" />,
      top: "md:mt-72",
      description:
        "J'ai commandé un pack pour toute la famille et même mon fils Légolas San Goku adore sa",
    },
    {
      title: "Etoiles",
      image: "etoiles.webp",
      role: "Streamer",
      icon: <Icons.twitch className="size-8 text-fg-1" />,
      top: "md:mt-0",
      description:
        "Je régule mon taux d'insuline parfaitement et je n'achète plus de saumon ni de nutella grâce à",
    },
  ];

  return (
    <div className="container flex max-w-[950px] flex-col justify-between gap-32 md:flex-row">
      {testimonials.map((item, index) => (
        <Client key={index}>
          <div className={`flex flex-col items-center gap-3 ${item.top} mt-0`}>
            <Image
              src={`/image/testimonials/${item.image}`}
              alt={`Client : ${item.title}`}
              width={180}
              height={180}
              className="rounded-full"
            />
            <div className="flex flex-col items-center gap-3 md:items-start">
              <h2 className="font-tartuffo text-xl text-fg-1">/{item.title}</h2>
              <div className="flex gap-1">
                {item.icon}
                <h3 className="text-fg-1">{item.role}</h3>
              </div>
              <p className="max-w-xs text-center text-sm text-fg-3 md:text-start">
                {item.description}{" "}
                <span className="font-tartuffo text-fg-1">
                  the french tototte&reg;
                </span>
              </p>
            </div>
          </div>
        </Client>
      ))}
    </div>
  );
}
