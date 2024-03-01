import { Heading } from "@/app/(marketing)/_components/heading";
import { Heroes } from "@/app/(marketing)/_components/heroes";
import { Footer } from "@/app/(marketing)/_components/footer";

export default function MarketingPage() {
    return (
        <div className="min-h-full flex flex-col">
            <div className="flex flex-col items-center justify-center md:justify-center text-center gap-y-8 flex-1 px-6 pb-10">
                <Heading/>
                <Heroes/>
            </div>

            <Footer/>
        </div>
    );
}