import ThreeHeaders from "@/components/ThreeHeaders";
import Image from "next/image";

export default function Hero() {
    return (
        <section className="section flex-row  h-screen">
            <div className="flex-1 min-w-60">
                <ThreeHeaders title="Transform your life, one SOL at a time!" subTitle="Ascend" paragraph="Build good habits in a fun and social way while insure you get punished if you don't commit" gradient="bg-gradient-to-tr from-[#8D47FF] to-[#B86CF4] bg-clip-text text-transparent" />
            </div>
            <div className="flex-1 flex items-center justify-center -z-30">
                <div className=" -mx-36">
                    <Image src="/shots.png" alt="phone mock up" width={1000} height={2000} className="-ml-20 opacity-50  md:ml-0 md:opacity-100" />
                </div>
            </div>
            <Image src="/blob1.png" alt="blob" width={2000} height={1000} className="absolute inset-0 z-50  "/>
        </section>
    )
}