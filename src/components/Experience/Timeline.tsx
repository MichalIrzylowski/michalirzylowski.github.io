import React, { FC } from "react";
import TimelineItem from "./TimelineItem";

import { TimelineProps } from "./types";

const Timeline: FC<TimelineProps> = ({ items }) => (
    <>
        {items.map((item) => (
            <TimelineItem key={item.companyName} {...item} />
        ))}
    </>
);

export default Timeline;
