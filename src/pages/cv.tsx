import React from "react";

import IndexPage from ".";

import ShowSensitiveDataContextProvider from "../providers/ShowSensitiveData";

export { Head } from ".";

const Cv = () => (
    <ShowSensitiveDataContextProvider>
        <IndexPage />
    </ShowSensitiveDataContextProvider>
);

export default Cv;
