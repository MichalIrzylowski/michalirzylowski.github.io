import React, {
    createContext,
    FC,
    ReactNode,
    useContext,
    useState,
} from "react";

const CompanyNameContext = createContext("");
const SetCompanyNameContext = createContext((value: string) => {});

interface CompanyNameProviderProps {
    children: ReactNode;
}

const CompanyNameProvider: FC<CompanyNameProviderProps> = ({ children }) => {
    const [companyName, setCompanyName] = useState("");

    return (
        <CompanyNameContext.Provider value={companyName}>
            <SetCompanyNameContext.Provider value={setCompanyName}>
                {children}
            </SetCompanyNameContext.Provider>
        </CompanyNameContext.Provider>
    );
};

export default CompanyNameProvider;

export const useCompanyName = () => {
    const companyName = useContext(CompanyNameContext);

    return companyName;
};

export const useSetCompanyName = () => {
    const setCompanyName = useContext(SetCompanyNameContext);

    return setCompanyName;
};
