import Image from "next/image";

export function Heroes() {
    return (
        <div className="flex items-center justify-center max-w-5xl">
            <div className="flex items-center">
                <div className="relative w-[300px] h-[300px] sm:w-[350px] sm:h-[350px] md:h-[400px] md:w-[400px]">
                    <Image className="object-contain" src="/documents.png" fill alt="Documents"/>
                </div>

                <div className="relative h-[400px] w-[400px] hidden md:block">
                    <Image className="object-contain" src="/reading.png" fill alt="Reading"/>
                </div>
            </div>
        </div>
    );
}