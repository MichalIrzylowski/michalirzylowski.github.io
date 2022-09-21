import React from "react";
import SectionHeading from "../SectionHeading";
import Timeline from "./Timeline";
import { TimelineItemProps } from "./types";

const items: TimelineItemProps[] = [
    {
        period: "July 2022 - At present",
        companyName: "Grid Dynamics",
        position: "Front-end Developer",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe voluptate voluptatum est culpa ducimus accusantium tenetur impedit fuga suscipit veniam. Possimus in magnam animi, dolore inventore aliquid ea reiciendis placeat!",
    },
    {
        period: "July 2021 - July - 2022",
        companyName: "Netguru SA",
        position: "Front-end Developer",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe voluptate voluptatum est culpa ducimus accusantium tenetur impedit fuga suscipit veniam. Possimus in magnam animi, dolore inventore aliquid ea reiciendis placeat!",
    },
    {
        period: "September 2019 - July 2021",
        companyName: "Bank Millennium",
        position: "Front-end Developer",
        description: "Description",
    },
];

const Experience = () => (
    <>
        <SectionHeading>Experience:</SectionHeading>
        <Timeline items={items} />
    </>
);

export default Experience;
