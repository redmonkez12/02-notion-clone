"use client";

import { useTheme } from "next-themes";
import { BlockNoteEditor, PartialBlock } from "@blocknote/core";
import { BlockNoteView, useCreateBlockNote } from "@blocknote/react";
import "@blocknote/core/style.css";

import { useEdgeStore } from "@/lib/edgestore";

type EditorProps = {
    onChange(value: string): void;
    initialContent?: string;
    editable?: boolean;
};

export function Editor({ onChange, editable, initialContent }: EditorProps) {
    const { resolvedTheme } = useTheme();
    const { edgestore } = useEdgeStore();

    const handleUpload = async (file: File) => {
        const response = await edgestore.publicFiles.upload({
            file
        });

        return response.url;
    };

    const editor: BlockNoteEditor = useCreateBlockNote({
        editable,
        initialContent:
            initialContent
                ? JSON.parse(initialContent) as PartialBlock[]
                : undefined,
        uploadFile: handleUpload
    });

    return (
        <div>
            <BlockNoteView
                editor={editor}
                theme={resolvedTheme === "dark" ? "dark" : "light"}
                onChange={() =>  onChange(JSON.stringify(editor.document, null, 2))}
            />
        </div>
    );
}