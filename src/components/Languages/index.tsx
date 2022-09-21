import React from "react";
import Progress from "../progress";
import SectionHeading from "../SectionHeading";

const Languages = () => (
    <>
        <SectionHeading>Languages:</SectionHeading>
        <Progress
            max={100}
            value={70}
            label="English"
            scale={["a1", "a2", "b1", "b2", "c1", "c2"]}
        />
    </>
);

export default Languages;
