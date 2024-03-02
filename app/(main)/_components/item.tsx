"use client";

import { LucideIcon } from "lucide-react";

type ItemProps = {
    onClick(): void;
    label: string;
    icon: LucideIcon
};

export function Item({ onClick, label, icon }: ItemProps) {
    return (
        <div
            onClick={onClick}
            role="button"
            style={{ paddingLeft: "12px"}}
        >{label}</div>
    );
}