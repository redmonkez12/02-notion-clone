import { PropsWithChildren } from "react";
import { Navbar } from "@/app/(marketing)/_components/navbar";

export default function MarketingLayout({ children }: PropsWithChildren) {
    return (
        <div className="h-full dark:bg-[#1f1f1f]">
            <Navbar/>

            <main className="h-full pt-40">{children}</main>
        </div>
    );
}