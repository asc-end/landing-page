import ThreeHeaders from "@/components/ThreeHeaders";
import Image from "next/image";

export default function End() {
    return (
        <section className="flex flex-row flex-wrap items-center my-40 gap-4 lg:gap-32">
            <div className="flex flex-1 flex-col items-center justify-center gap-12">
                <ThreeHeaders title="Withdraw" subTitle="Win" paragraph="Once you validated each days of your challenge, you’ll be able to take back your money." align="center" className=" w-48 lg:w-[444px]" gradient="bg-gradient-to-tr from-[#8D47FF] to-[#B86CF4] bg-clip-text text-transparent"/>
                <Image src="/chad.png" alt="chad image" width={260} height={260} className="bg-black rounded-full flex-1 aspect-square w-20 md:w-36 lg:w-72 hover:scale-125 transition-transform" quality={100}/>
            </div>
            <div className="flex flex-1 flex-col items-center justify-center gap-12">
                <ThreeHeaders title="Liquidate" subTitle="Lose" paragraph="Lose your stake if you don't  follow through on your commitments. Time to get serious." className=" w-48 lg:w-[444px]"  gradient="bg-gradient-to-tr from-[#8D47FF] to-[#B86CF4] bg-clip-text text-transparent" align="center"/>
                <Image src="/wojack.png" alt="wojack image" width={260} height={260} className="bg-black rounded-full flex-1 aspect-square w-20 md:w-36 lg:w-72 hover:scale-125 transition-transform" quality={100}/>
            </div>
        </section>
    )
}