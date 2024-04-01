import ThreeHeaders from "@/components/ThreeHeaders";
import Image from "next/image";

export default function Witness() {
    return (
        <section className="flex flex-row w-full gap-12 items-center px-60">
            <div className="flex-1">
                <ThreeHeaders title="Or create your own challenge" subTitle="Set your challenge" paragraph="Enlist a witness to hold you to your word."  gradient="bg-gradient-to-tr from-[#8D47FF] to-[#B86CF4] bg-clip-text text-transparent"/>
            </div>
            <div className="flex-1 h-[500px] items-center justify-center flex">
                <Image src="/witness.png" alt="witness" width={600} height={400} />
            </div>
        </section>
    )
}