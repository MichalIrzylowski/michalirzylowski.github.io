declare module '*.module.scss' {
    const classes: { [key: string]: string };
    export default classes;
}

declare module 'typography-theme-fairy-gates' {
    import { TypographyOptions } from 'typography';
    const Theme: TypographyOptions;

    export = Theme;
}
