import React, { useState } from 'react';
import { MainContext } from "./MainContext"
import { test } from '../utils/queries';

interface MainContextProps {
    children: JSX.Element | JSX.Element[]
}

export const MainProvider = ({ children }: MainContextProps) => {
    const [message, setMessage] = useState("");

    const getInfo = async () => {
        const res = await test();
        setMessage(res.data.res);
    }

    return (
        <MainContext.Provider value={{
            message,
            setMessage,
            getInfo
        }}>
            { children } 
        </MainContext.Provider>
    )
}