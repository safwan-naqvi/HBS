import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function capitalize(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export const truncateDescription = (
  description: string,
  maxLength: number = 160
): string => {
  if (typeof description !== "string") return "";
  if (description.length <= maxLength) return description;

  const truncated = description.slice(0, maxLength);
  const lastSpaceIndex = truncated.lastIndexOf(" ");

  return lastSpaceIndex === -1
    ? truncated
    : `${truncated.slice(0, lastSpaceIndex)}...`;
};

export const shuffleArray = <T>(array: T[]): T[] => {
  const shuffled = [...array]; // Create a copy to avoid mutating the original array
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

export const getFirstLetter = (name: string): string => {
  return name?.trim().charAt(0).toUpperCase() || "";
};

export const getYearFromDate = (dateStr: string): string => {
  if (!dateStr || typeof dateStr !== "string") return "";

  const date = new Date(dateStr);
  if (isNaN(date.getTime())) return ""; // Check if the date is invalid

  return date.getFullYear().toString();
};

export const formatDateWithTime = (isoString: string): string => {
  const date = new Date(isoString);
  if (isNaN(date.getTime())) return ""; // Check if the date is invalid

  return date.toLocaleString("en-US", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });
};

export const getInitials = (
  fullName: string,
  maxInitials: number = 2
): string => {
  if (!fullName || typeof fullName !== "string") return "";

  const words = fullName.trim().split(/\s+/); // Split by any whitespace
  const initials = words
    .slice(0, maxInitials) // Take only the first `maxInitials` words
    .map((word) => word.charAt(0).toUpperCase()) // Get the first letter of each word
    .join(""); // Combine into a string

  return initials;
};

export const validateString = (
  value: unknown,
  maxLength: number
): value is string => {
  if (!value || typeof value !== "string" || value.length > maxLength) {
    return false;
  }

  return true;
};

export const getErrorMessage = (error: unknown): string => {
  let message: string;

  if (error instanceof Error) {
    message = error.message;
  } else if (error && typeof error === "object" && "message" in error) {
    message = String(error.message);
  } else if (typeof error === "string") {
    message = error;
  } else {
    message = "Something went wrong";
  }

  return message;
};
