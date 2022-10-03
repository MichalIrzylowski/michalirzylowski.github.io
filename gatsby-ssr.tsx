import React from "react";
import { GatsbySSR } from "gatsby";

export const onRenderBody: GatsbySSR["onRenderBody"] = ({
    setHeadComponents,
}) => {
    setHeadComponents([
        <link
            rel="preload"
            href="/fonts/Lato-Regular.ttf"
            as="font"
            type="font/truetype"
            crossOrigin="anonymous"
            key="interFont"
        />,
    ]);
};
