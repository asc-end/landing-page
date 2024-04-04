import ThreeHeaders from "@/components/ThreeHeaders";
import Image from "next/image";

export default function Lock() {
    return (
        <section className="section flex-col py-20 lg:py-32">
            <div className="flex-1">
                <ThreeHeaders title="Stake to hold yourself accountable." subTitle="Stake" paragraph="" align="center" gradient="bg-gradient-to-tr from-[#8D47FF] to-[#fbf5ff] bg-clip-text text-transparent" />
            </div>
            <div className="flex-1"></div>
            <div className="absolute inset-0 w-screen -z-30 top-0 mt-40 lg:-mt-20 bottom-0 ">
                <Image src={"/lock.png"} alt="lock" width={2000} height={800} className="" />
            </div>
        </section>
    )
}