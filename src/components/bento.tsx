import Image from "next/image";

import { Flag } from "@/components/ui/flag";

export function Bento() {
  const bentoClass = {
    grid: "group flex rounded-md py-8 relative",
    title: "font-tartuffo text-2xl lg:text-3xl text-fg-2",
    description: "text-fg-3 text-sm",
    transition: "transition-translate duration-500",
  };

  return (
    <div className="container grid min-h-[52rem] max-w-[1000px] grid-cols-1 grid-rows-3 gap-3 md:grid-cols-3">
      <div
        className={`col-span-1 row-span-2 items-end overflow-hidden bg-gradient-to-b from-bg-1 to-bg-blue ${bentoClass.grid}`}
      >
        <Image
          src="/image/bento/elegante.png"
          alt="élégante et sophistiquée"
          width={300}
          height={300}
          className={`absolute -left-3/4 top-32 origin-left scale-[1.6] group-hover:translate-y-2 group-hover:rotate-1 group-hover:scale-[1.7] ${bentoClass.transition}`}
        />
        <div className="container">
          <h3 className={bentoClass.title}>élégante et sophistiquée</h3>
          <p className={bentoClass.description}>
            Design raffiné et ornements exclusifs pour une expérience de
            vapotage distinguée et élégante.
          </p>
        </div>
      </div>
      <div
        className={`col-span-1 row-span-1 items-center justify-between bg-[#EEEEEE] hover:bg-[#E0E0E0] md:col-span-2 ${bentoClass.grid} ${bentoClass.transition}`}
      >
        <Image
          src="/image/bento/personnalisable.png"
          alt="personnalisable"
          width={300}
          height={300}
          className={`origin-left group-hover:scale-110 ${bentoClass.transition}`}
        />
        <div className="container">
          <h3 className={bentoClass.title}>personnalisable</h3>
          <p className={bentoClass.description}>
            Ornements et accessoires premium pour créer une vapoteuse unique qui
            reflète votre style personnel.
          </p>
        </div>
      </div>
      <div
        className={`col-span-1 row-span-1 items-end bg-gradient-to-r from-bg-blue via-bg-1 to-[#FDEFF1] ${bentoClass.grid}`}
      >
        <Image
          src="/image/bento/madeinfrance.png"
          alt="made in france"
          width={200}
          height={200}
          className={`absolute inset-x-0 top-10 m-auto group-hover:-rotate-12 group-hover:scale-125 ${bentoClass.transition}`}
        />
        <div className="container mt-20 md:mt-0">
          <h3 className={bentoClass.title}>made in france</h3>
          <p className={bentoClass.description}>
            Savoir-faire francais pour une expérience de suçotage authentique et
            exceptionnelle.
          </p>
        </div>
      </div>
      <div
        className={`col-span-1 row-span-1 items-start overflow-hidden bg-gradient-to-b from-bg-1 from-20% to-bg-3 ${bentoClass.grid}`}
      >
        <Image
          src="/image/bento/innovante.png"
          alt="innovante"
          width={400}
          height={400}
          className={`absolute -bottom-10 left-20 scale-125 group-hover:-translate-y-6 group-hover:rotate-3 ${bentoClass.transition}`}
        />
        <div className="container mb-36 md:mb-0">
          <h3 className={bentoClass.title}>innovante</h3>
          <p className={bentoClass.description}>
            Technologies de pointe offrant une expérience de suçotage
            révolutionnaire et inégalée.
          </p>
        </div>
      </div>
      <div
        className={`col-span-1 row-span-1 items-start overflow-hidden bg-bg-blue md:col-span-2 ${bentoClass.grid}`}
      >
        <Image
          src="/image/bento/savoureuse.png"
          alt="savoureuse"
          width={450}
          height={450}
          className={`absolute bottom-0 right-0 translate-x-16 group-hover:translate-x-0 ${bentoClass.transition}`}
        />
        <div className="container mb-28 md:mb-0">
          <h3 className={bentoClass.title}>savoureuse</h3>
          <p className={bentoClass.description}>
            Palette de saveurs exquises pour une expérience de suçotage
            délicieusement satisfaisante et immersive.
          </p>
        </div>
      </div>
      <div
        className={`col-span-1 row-span-1 items-end bg-bg-3 hover:bg-bg-1 ${bentoClass.grid} ${bentoClass.transition}`}
      >
        <div className="container absolute top-5">
          <Flag
            hover
            transition={`md:group-hover:h-20 ${bentoClass.transition}`}
          />
        </div>
        <div className="container">
          <h3 className={bentoClass.title}>
            hébergement <br />
            100% français
          </h3>
          <p className={bentoClass.description}>
            Notre site web est hébergé en france grâce à notre partenaire
            o2switch.
          </p>
        </div>
      </div>
    </div>
  );
}
