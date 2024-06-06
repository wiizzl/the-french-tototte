import Link from "next/link";

export default function Home() {
    return (
        <>
            <section id="hero">
                <div className="flex items-center justify-center h-screen overflow-hidden">
                    <div className="flex flex-col gap-8">
                        <div className="flex flex-col gap-1 items-center justify-center">
                            <h2 className="font-tartuffo text-muted-foreground text-xl">
                                the french tototte <span className="text-xs align-top">&reg;</span>
                            </h2>
                            <div className="flex">
                                <span className="bg-[#003cb2] px-1 h-2" />
                                <span className="bg-white px-1 h-2" />
                                <span className="bg-[#f63c52] px-1 h-2" />
                            </div>
                        </div>
                        <div className="flex items-center flex-col gap-6">
                            <h1 className="font-tartuffo text-center text-6xl text-muted-foreground">
                                pour ceux qui osent <br />
                                etre differents
                            </h1>
                            <Link
                                href={"#bento"}
                                className="relative before:transition-[width] before:ease-in-out before:bg-foreground before:duration-400 before:absolute before:origin-center before:h-[1px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-400 after:absolute after:bg-foreground after:origin-center after:h-[1px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%] text-sm text-foreground font-medium"
                            >
                                decouvrir
                            </Link>
                        </div>
                    </div>
                    <video autoPlay loop muted className="absolute -z-50 object-cover w-full h-full">
                        <source src="/video/hero.mp4" type="video/mp4" />
                        Votre naviguateur ne supporte pas la balise video !
                    </video>
                </div>
            </section>
            <section id="bento"></section>
        </>
    );
}
