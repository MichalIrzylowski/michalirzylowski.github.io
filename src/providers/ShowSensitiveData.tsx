import React, { createContext, FC, ReactNode, useContext } from "react";

const ShowSensitiveDataContext = createContext<boolean>(false);

interface ShowSensitiveDataContextProviderProps {
    children: ReactNode;
}

const ShowSensitiveDataContextProvider: FC<
    ShowSensitiveDataContextProviderProps
> = ({ children }) => (
    <ShowSensitiveDataContext.Provider value={true}>
        {children}
    </ShowSensitiveDataContext.Provider>
);

export default ShowSensitiveDataContextProvider;

export const useShowSensitiveData = () => useContext(ShowSensitiveDataContext);
