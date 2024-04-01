import ThreeHeaders from "@/components/ThreeHeaders";
import Image from "next/image";

export default function End() {
    return (
        <section className="flex flex-row flex-wrap w-full gap-12 items-center px-60">
            <div className="flex flex-row flex-1 items-start hover:opacity-70 opacity-100 transition-opacity min-w-[500px] ">
                <Image src="/chad.png" alt="chad image" width={260} height={260} className="bg-black rounded-full -ml-20 flex-1"/>
                <ThreeHeaders title="Withdraw" subTitle="Win" paragraph="Once you validated each days of your challenge, you’ll be able to take back your money." align="end" className="w-[344px]" gradient="bg-gradient-to-tr from-[#8D47FF] to-[#B86CF4] bg-clip-text text-transparent"/>
            </div>
            <div className="flex flex-row flex-1 items-start hover:opacity-70 opacity-100 transition-opacity min-w-[500px] ">
                <ThreeHeaders title="Liquidate" subTitle="Lose" paragraph="Lose your stake if you don't  follow through on your commitments. Time to get serious." className=" w-[344px]"  gradient="bg-gradient-to-tr from-[#8D47FF] to-[#B86CF4] bg-clip-text text-transparent"/>
                <Image src="/wojack.png" alt="wojack image" width={260} height={260} className="bg-black rounded-full -mr-20 flex-1"/>
            </div>
        </section>
    )
}