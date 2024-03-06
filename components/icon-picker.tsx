import { useTheme } from "next-themes"
import EmojiPicker, { Theme } from "emoji-picker-react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { PropsWithChildren } from "react";

type IconPickerProps = {
    onChange(icon: string): void;
    asChild?: boolean;
};

const themeMap = {
    "dark": Theme.DARK,
    "light": Theme.LIGHT,
};

export function IconPicker({ onChange, children, asChild }: PropsWithChildren<IconPickerProps>) {
    const { resolvedTheme } = useTheme();
    const currentTheme = (resolvedTheme || "light") as keyof typeof themeMap;

    const theme = themeMap[currentTheme];

    return (
        <Popover>
            <PopoverTrigger asChild={asChild}>
                {children}
            </PopoverTrigger>

            <PopoverContent className="p-0 w-full border-none shadow-none">
                <EmojiPicker
                    height={350}
                    theme={theme}
                    onEmojiClick={(data) => onChange(data.emoji)}
                />
            </PopoverContent>
        </Popover>
    );
}