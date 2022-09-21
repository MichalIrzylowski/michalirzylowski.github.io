import { colors } from "../../styles/colors";

export interface SectionHeadingStyles {
    borderColor?: keyof typeof colors;
}

export interface SectionHeadingProps extends SectionHeadingStyles {
    children: string;
}
