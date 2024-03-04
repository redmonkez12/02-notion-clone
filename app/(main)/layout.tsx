"use client";

import { PropsWithChildren } from "react";
import { useConvexAuth } from "convex/react";
import { redirect } from "next/navigation";

import { Spinner } from "@/components/spinner";
import Navigation from "@/app/(main)/_components/navigation";
import { SearchCommand } from "@/components/search-command";

export default function MainLayout({ children }: PropsWithChildren) {
    const { isAuthenticated, isLoading } = useConvexAuth();

    if (isLoading) {
       return (
           <div className="h-full flex items-center justify-center">
               <Spinner size="lg"/>
           </div>
       );
    }

    if (!isAuthenticated) {
        return redirect("/");
    }

    return (
        <div className="h-full flex dark:bg-[#1f1f1f]">
            <Navigation/>
            <main className="flex-1 h-full overflow-y-auto">
                <SearchCommand/>
                {children}
            </main>
        </div>
    );
}