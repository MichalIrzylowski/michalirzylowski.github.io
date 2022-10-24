import { GatsbyBrowser } from "gatsby";
import React from "react";
import CompanyNameProvider from "./providers/CompanyName";

const wrapWithProvider: GatsbyBrowser["wrapPageElement"] = ({ element }) => {
    return <CompanyNameProvider>{element}</CompanyNameProvider>;
};

export default wrapWithProvider;
