import React, { FC } from "react";
import { graphql, useStaticQuery } from "gatsby";
import TimelineItem from "./TimelineItem";

const Timeline: FC = () => {
    const { allMdx } = useStaticQuery<Queries.TimelineQuery>(query);

    return (
        <>
            {allMdx.nodes.map((node) => (
                <TimelineItem
                    key={node.frontmatter?.companyName}
                    companyName={node.frontmatter?.companyName as string}
                    period={`${node.frontmatter?.start} - ${
                        node.frontmatter?.end || "at present"
                    }`}
                    position={node.frontmatter?.position as string}
                    description={node.body as string}
                />
            ))}
        </>
    );
};

export default Timeline;

export const query = graphql`
    query Timeline {
        allMdx(
            sort: { order: DESC, fields: frontmatter___start }
            filter: { frontmatter: { companyName: { ne: null } } }
        ) {
            nodes {
                frontmatter {
                    companyName
                    start(formatString: "MMMM, YYYY")
                    end(formatString: "MMMM, YYYY")
                    position
                }
                body
            }
        }
    }
`;
