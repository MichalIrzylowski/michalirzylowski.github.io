import React from "react";
import Progress from "../progress";
import SectionHeading from "../SectionHeading";

const TechStack = () => (
    <>
        <SectionHeading>Tech Stack:</SectionHeading>
        <Progress label="HTML" max={100} value={95} />
        <Progress label="CSS" max={100} value={90} />
        <Progress label="JavaScript" max={100} value={80} />
        <Progress label="Typescript" max={100} value={75} />
        <Progress label="React.JS" max={100} value={90} />
        <Progress label="Redux.JS" max={100} value={70} />
        <Progress label="Styled Components" max={100} value={90} />
        <Progress label="D3" max={100} value={50} />
        <Progress label="Express.JS" max={100} value={40} />
    </>
);

export default TechStack;
