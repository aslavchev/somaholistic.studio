import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Re-export all utility functions
export * from './utils/validation';
export * from './utils/phone';
export * from './utils/booking';
