import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Utility function for merging Tailwind CSS classes
 * Used by Aceternity UI components
 */
export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}
