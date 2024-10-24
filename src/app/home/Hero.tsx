import { EmailInput } from "@/components/EmailInput";
import ThreeHeaders from "@/components/ThreeHeaders";
import Image from "next/image";

export default function Hero() {
    return (
        <section className="h-screen flex flex-col-reverse md:flex-row w-full gap-8 md:gap-12 items-center px-4 sm:px-6 lg:px-16 xl:px-32 relative py-20 md:py-0">
            <div className="flex-1 flex flex-col items-start gap-8 md:gap-12 flex-grow min-w-60 max-w-2/3 max-w-[800px] z-10">
                <ThreeHeaders
                    subTitle="Ascend"
                    title="Hack your mind"
                    paragraph="A social network designed to help you build better habits through competition, social pressure, and monetary incentives."
                    gradient="bg-gradient-to-tr from-[#8D47FF] to-[#B86CF4] bg-clip-text text-transparent" />
                <a href="https://discord.gg/ymVPRnpuqC" target="_blank" rel="noreferrer" className="  text-white bg-gradient-to-r from-[#6663FF] to-[#7F00FE] rounded-full px-6 py-2 hover:opacity-80 transition-opacity cursor-pointer">
                    Join Discord
                </a>
            </div>
            <div className="flex-1 w-full -mb-20 md:mb-0 md:-mx-36 lg:-mx-36 lg:scale-125 pointer-events-none">
                <Image src="/shots.png" alt="phone mock up" width={1000} height={2000} className=" h-full object-cover" />
            </div>
            <div className="absolute inset-0 z-50 pointer-events-none">
                <Image src="/blob1.png" alt="blob" width={2000} height={1000} className="w-full object-contain" />
            </div>
        </section>
    )
}