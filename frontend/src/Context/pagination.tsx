
'use client';

import { createContext, useContext, Dispatch, SetStateAction, useState } from "react";

interface ContextProps {
    page: number,
    setpage: Dispatch<SetStateAction<number>>,
    totalPages: number,
    setTotalPages: Dispatch<SetStateAction<number>>
}

export const GlobalContext = createContext<ContextProps>({
    page: 1,
    setpage: (): number => 1,
    totalPages: 1,
    setTotalPages: (): number => 1
})

export const GlobalContextProvider = ({ children }: any) => {
    const [page, setpage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    
    return (
        <GlobalContext.Provider value={{ page, setpage, totalPages, setTotalPages }}>
            {children}
        </GlobalContext.Provider>
    )
};

export const useGlobalContext = () => useContext(GlobalContext);