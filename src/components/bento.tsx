import Image from "next/image";

import { Flag } from "@/components/flag";

export function Bento() {
    const bentoClass = {
        grid: "group flex rounded-md py-8 relative",
        title: "font-tartuffo text-3xl text-fg-2",
        description: "text-fg-3 text-sm",
        transition: "transition-translate duration-500",
    };

    return (
        <div className="grid h-[52rem] grid-cols-3 gap-3 grid-rows-3 px-[30rem]">
            <div className={`items-end col-span-1 row-span-2 bg-gradient-to-b from-white to-bg-blue ${bentoClass.grid}`}>
                <Image
                    src="/image/bento/elegante.png"
                    alt="élégante et sophistiquée"
                    width={250}
                    height={250}
                    className={`absolute top-10 origin-left group-hover:translate-y-2 group-hover:scale-110 ${bentoClass.transition}`}
                />
                <div className="container">
                    <h3 className={bentoClass.title}>élégante et sophistiquée</h3>
                    <p className={bentoClass.description}>
                        Design raffiné et ornements exclusifs pour une expérience de vapotage distinguée et élégante.
                    </p>
                </div>
            </div>
            <div
                className={`col-span-2 row-span-1 bg-[#EEEEEE] hover:bg-[#E0E0E0] items-center justify-between ${bentoClass.grid} ${bentoClass.transition}`}
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
                        Ornements et accessoires premium pour créer une vapoteuse unique qui reflète votre style personnel.
                    </p>
                </div>
            </div>
            <div
                className={`items-end col-span-1 row-span-1 bg-gradient-to-r from-bg-blue via-bg-1 to-[#FDEFF1] ${bentoClass.grid}`}
            >
                <Image
                    src="/image/bento/madeinfrance.png"
                    alt="madeinfrance"
                    width={200}
                    height={200}
                    className={`absolute top-10 left-14 group-hover:-rotate-6 group-hover:scale-110 ${bentoClass.transition}`}
                />
                <div className="container">
                    <h3 className={bentoClass.title}>made in france</h3>
                    <p className={bentoClass.description}>
                        Savoir-faire francais pour une expérience de suçotage authentique et exceptionnelle.
                    </p>
                </div>
            </div>
            <div
                className={`items-start col-span-1 row-span-1 bg-gradient-to-b from-bg-1 from-20% to-bg-3 overflow-hidden ${bentoClass.grid}`}
            >
                <Image
                    src="/image/bento/innovante.png"
                    alt="innovante"
                    width={400}
                    height={400}
                    className={`absolute -bottom-10 scale-125 left-20 group-hover:-translate-y-6 ${bentoClass.transition}`}
                />
                <div className="container">
                    <h3 className={bentoClass.title}>innovante</h3>
                    <p className={bentoClass.description}>
                        Technologies de pointe offrant une expérience de suçotage révolutionnaire et inégalée.
                    </p>
                </div>
            </div>
            <div className={`items-start col-span-2 row-span-1 bg-bg-blue overflow-hidden ${bentoClass.grid}`}>
                <Image
                    src="/image/bento/savoureuse.png"
                    alt="savoureuse"
                    width={450}
                    height={450}
                    className={`absolute bottom-0 right-0 group-hover:translate-x-0 translate-x-16 ${bentoClass.transition}`}
                />
                <div className="container">
                    <h3 className={bentoClass.title}>savoureuse</h3>
                    <p className={bentoClass.description}>
                        Palette de saveurs exquises pour une expérience de suçotage délicieusement satisfaisante et immersive.
                    </p>
                </div>
            </div>
            <div className={`items-end col-span-1 row-span-1 bg-bg-3 hover:bg-bg-1 ${bentoClass.grid} ${bentoClass.transition}`}>
                <div className="absolute container top-5">
                    <Flag hover transition={`group-hover:h-20 ${bentoClass.transition}`} />
                </div>
                <div className="container">
                    <h3 className={bentoClass.title}>
                        hébergement <br />
                        100% français
                    </h3>
                    <p className={bentoClass.description}>
                        Notre site web est hébergé en france grâce à notre partenaire o2switch.
                    </p>
                </div>
            </div>
        </div>
    );
}
