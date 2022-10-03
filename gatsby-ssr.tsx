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
            type="font/ttf"
            crossOrigin="anonymous"
            key="interFont"
        />,
        <link
            rel="preload"
            href="/fonts/Lato-Bold.ttf"
            as="font"
            type="font/ttf"
            crossOrigin="anonymous"
            key="boldFont"
        />,
    ]);
};
