import { useMemo } from "react"

export default function ThreeHeaders({ title, subTitle, paragraph, align = "start", className, gradient }: { title: string, subTitle: string, paragraph: string, align?: "start" | "end" | "center", className?: string, gradient?:string }) {

    const textAlign = useMemo(() => {
        if (align == "center")
            return "text-center"
        if (align == "end")
            return "text-right"
        if (align == "start")
            return "text-left"
    }, [align])
    return (
        <div className={`flex flex-col items-${align} justify-center h-full gap-8 ${className}`}>
            <h2 className={`${textAlign} ${gradient}`}>{subTitle}</h2>
            <div className="flex flex-col gap-3">
                <h1 className={`${textAlign}`}>{title}</h1>
                <p className={`${textAlign}`}>{paragraph}</p>
            </div>
        </div>)
}