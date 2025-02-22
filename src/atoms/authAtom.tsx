import { atom } from "jotai";
import { IAuth } from "../models/AuthModel";

export const authAtom = atom<IAuth | any>(null);