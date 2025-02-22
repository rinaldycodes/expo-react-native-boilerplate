import { Colors } from "@/constants/Colors";
import { atom } from "jotai";

export const themeAtom = atom<keyof typeof Colors>('light');