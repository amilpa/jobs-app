
import { createContext, type Dispatch, type SetStateAction } from "react";

export type editJob = {
  _id: string
  company: string,
  position: string,
  status: string
}

export const edit = createContext<[editJob, Dispatch<SetStateAction<editJob>>]>([<editJob>{}, () => { console.log('Hello world') }])
