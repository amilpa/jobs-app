import React, { type Dispatch, type SetStateAction } from "react"


export const auth = React.createContext<[boolean, Dispatch<SetStateAction<boolean>>]>([false, () => { console.log('Hello world') }])

