import { createContext, useContext, useState } from "react"
import Component1 from "./components/Component1"

const NamaContext = createContext()

export default function NamaProvider() {

    const [nama, setNama] = useState('Jonathan')

    return (
        <NamaContext.Provider value={nama}>
            <h1>{`Halo namaku ${nama}`}</h1>
            <Component1 />
        </NamaContext.Provider>
    )
}

export function useNamaContext() {
    return useContext(NamaContext)
}