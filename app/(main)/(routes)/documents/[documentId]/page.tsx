"use client";

import { useQuery } from "convex/react";
import { Id } from "@/convex/_generated/dataModel";
import { api } from "@/convex/_generated/api";
import { Toolbar } from "@/components/toolbar";
import { Cover } from "@/components/cover";

type DocumentIdPageProps = {
    params: {
      documentId: Id<"documents">;
    };
};

export default function DocumentIdPage({ params }: DocumentIdPageProps) {
    const document = useQuery(api.documents.getById, {
        documentId: params.documentId,
    });

    if (document === undefined) {
        return (
            <div>
                Loading...
            </div>
        );
    }

    return (
        <div className="pb-40">
            <Cover url={document.coverImage}/>
            <div className="md:max-x-3xl lg:md-max-w-4xl mx-auto">
                <div className="h-[35vh]"/>
                <Toolbar initialData={document}/>
            </div>
        </div>
    );
}