import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

export function generateId(text: string): string {
    return text
        .toLowerCase()
        .replace(/[^a-z0-9\u0980-\u09FF]+/g, "-") // Allow Bengali characters (\u0980-\u09FF)
        .replace(/^-+|-+$/g, "")
}
