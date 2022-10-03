import React, { FC } from "react";

import { graphql, useStaticQuery } from "gatsby";

import GlobalStyles from "../../styles/global";

import favicon from "../../assets/favicon/favicon-16x16.png";

import { HeadProps } from "./types";

const Head: FC<HeadProps> = ({ children }) => {
    const title = useStaticQuery<Queries.HeadQuery>(query);

    return (
        <>
            <title>{title.site?.siteMetadata?.title}</title>
            <link rel="icon" type="image/png" href={favicon} />
            {children}
            <GlobalStyles />
        </>
    );
};

export default Head;

export const query = graphql`
    query Head {
        site {
            siteMetadata {
                title
            }
        }
    }
`;
