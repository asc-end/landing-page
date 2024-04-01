import ThreeHeaders from "@/components/ThreeHeaders";
import Image from "next/image";

export default function Hero() {
    return (
        <section className="section flex-row  h-screen">
            <div className="flex-1">
                <ThreeHeaders title="Transform your life, one SOL at a time!" subTitle="Ascend" paragraph="Build good habits in a fun and social way while insure you get punished if you don't commit" gradient="bg-gradient-to-tr from-[#8D47FF] to-[#B86CF4] bg-clip-text text-transparent" />
            </div>
            <div className="flex-1 flex items-center justify-center">
                <div className="-mx-56">
                    <Image src="/phone.png" alt="phone mock up" width={2000} height={2000} className=" " />
                </div>
            </div>
            <Image src="/blob1.png" alt="blob" width={2000} height={1000} className="absolute inset-0 -z-50 "/>
        </section>
    )
}