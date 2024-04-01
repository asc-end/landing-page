import { ReactNode } from "react";

export default function Goal({ title, description, tag, icon}: { title: string, description: string, tag: string, icon: ReactNode}) {
    return (
        <div className=" p-3 flex flex-col rounded-md border border-white/10 bg-gradient-to-tr from-[#120a886d] to-[#4c1cd04a] backdrop-blur-lg gap-4">
            <div className="  rounded-md  w-56 h-32 flex items-center justify-center">
                {icon}
            </div>
            <h1 className="text-2xl">{title}</h1>
            <p>{description}</p>
            <div className="flex w-full justify-end">
                <p className=" text-white px-3 py-1 rounded-full">{tag}</p>
            </div>
        </div>
    )
}