import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
    siteMetadata: {
        title: `Michal Irzylowski`,
        siteUrl: `https://www.yourdomain.tld`,
        description: `Hi! My name is Michal and I am a Front-end Developer with ${Math.floor(
            (Date.now() - new Date("2019-09-07").getTime()) /
                1000 /
                60 /
                60 /
                24 /
                365,
        )} years of experience. I specialise in React.js applications. I like what I do, I always try to find better solution for my work.`,
    },
    // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
    // If you use VSCode you can also use the GraphQL plugin
    // Learn more at: https://gatsby.dev/graphql-typegen
    graphqlTypegen: true,
    plugins: [
        "gatsby-plugin-styled-components",
        "gatsby-plugin-image",
        "gatsby-plugin-sharp",
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "staticCvData",
                path: `${__dirname}/static-cv-data`,
            },
        },
        "gatsby-plugin-mdx",
        {
            resolve: "gatsby-plugin-html-attributes",
            options: {
                lang: "en",
            },
        },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `Michal Irzylowski`,
                short_name: `MI`,
                start_url: `/`,
                background_color: `#2480c1`,
                theme_color: `#ffffff`,
                display: `standalone`,
                icons: [
                    {
                        src: `/favicons/favicon-16x16.png`,
                        sizes: `16x16`,
                        type: `image/png`,
                    },
                    {
                        src: `/favicons/favicon-32x32.png`,
                        sizes: `32x32`,
                        type: `image/png`,
                    },
                    {
                        src: `/favicons/android-chrome-192x192.png`,
                        sizes: `192x192`,
                        type: `image/png`,
                    },
                    {
                        src: `/favicons/android-chrome-512x512.png`,
                        sizes: `512x512`,
                        type: `image/png`,
                    },
                ],
            },
        },
        "gatsby-plugin-offline", // this has to be last!
    ],
};

export default config;
