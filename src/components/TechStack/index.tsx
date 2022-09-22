import React from "react";
import { graphql, useStaticQuery } from "gatsby";

import Progress from "../progress";
import SectionHeading from "../SectionHeading";

const TechStack = () => {
    const stack = useStaticQuery<Queries.TechStackQuery>(query);

    return (
        <>
            <SectionHeading>Tech Stack:</SectionHeading>
            {stack.mdx?.frontmatter?.techStack?.map((tech) => (
                <Progress
                    key={tech?.tech}
                    label={tech?.tech as string}
                    value={tech?.level as number}
                />
            ))}
        </>
    );
};

export default TechStack;

export const query = graphql`
    query TechStack {
        mdx(frontmatter: { techStack: { elemMatch: { level: { gt: 0 } } } }) {
            frontmatter {
                techStack {
                    level
                    tech
                }
            }
        }
    }
`;
