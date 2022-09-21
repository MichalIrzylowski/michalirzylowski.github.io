export interface TimelineItemProps {
    period: string;
    companyName: string;
    position: string;
    description: string;
}

export interface TimelineProps {
    items: TimelineItemProps[];
}
