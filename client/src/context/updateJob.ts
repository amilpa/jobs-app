
import { createContext, type Dispatch, type SetStateAction } from "react";
import { job } from "../components/Jobs/Layout";

export const edit = createContext<[string, Dispatch<SetStateAction<string>>]>(['No one cares', () => { console.log('Hello world') }])
