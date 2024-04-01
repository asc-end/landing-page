import ThreeHeaders from "@/components/ThreeHeaders";
import Image from "next/image";

export default function Lock() {
    return (
        <section className="flex flex-col w-full gap-12 h-[600px] items-center relative ">
            <div className="flex-1">
                <ThreeHeaders title="Stake to hold yourself accountable." subTitle="Stake" paragraph="" align="center" gradient="bg-gradient-to-tr from-[#8D47FF] to-[#fbf5ff] bg-clip-text text-transparent" />
            </div>
            <div className="flex-1"></div>
            <div className="absolute inset-0 w-screen -z-30 -mt-20">
                <Image src={"/lock.png"} alt="lock" width={2000} height={800} className="" />
            </div>
        </section>
    )
}