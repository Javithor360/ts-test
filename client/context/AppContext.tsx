// Realizando importaciones para utilizar contextos
//! IMPORTANTE IMPORTAR `React` SI SE USA ES6 
import React, { createContext, useContext, useState } from 'react'
import { getInfo } from './helpers';

// Definiendo el tipo de estados que se almacenarán en el contexto
interface ContextProps {
    getInfo: () => Promise<void>;
    message: string;
    setMessage: React.Dispatch<React.SetStateAction<string>>;
}

const AppContext = createContext<ContextProps | undefined>(undefined);

interface ProviderProps {
    children: React.ReactNode
}

const AppProvider: React.FC<ProviderProps> = ({ children }) => {
    const [message, setMessage] = useState("");

    // Definiendo getInfo para usar la función getInfo del archivo helpers
    const getInfoData = async () => {
        try {
            const res = await getInfo();
            setMessage(res);
        } catch (error) {
            console.error(error);
        }
    }

    const value = { getInfo: getInfoData, message, setMessage }
    return (
        <AppContext.Provider value={value}>
            { children }
        </AppContext.Provider>
    )
}

const useAppContext = (): ContextProps => {
    const context = useContext(AppContext);
    if(context == null) {
        throw new Error("useAppContext must be used within an AppProvider");
    }
    return context;
}

// eslint-disable-next-line react-refresh/only-export-components
export { AppProvider, useAppContext };