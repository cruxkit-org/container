// src/types.ts
//
// Made with ❤️ by Maysara.



// ╔════════════════════════════════════════ PACK ════════════════════════════════════════╗

    import { type JSXElement } from "@minejs/jsx";

// ╚══════════════════════════════════════════════════════════════════════════════════════╝



// ╔════════════════════════════════════════ TYPE ════════════════════════════════════════╗

    export type ContainerAs =
        | 'div'
        | 'label'
        | 'section'
        | 'article'
        | 'aside'
        | 'header'
        | 'footer'
        | 'main'
        | 'nav'
        | 'span'
        | 'button'
        | 'a'
        | 'form'
        | 'ul'
        | 'ol'
        | 'li';

    export type ContainerDisplay =
        | 'block'
        | 'inline-block'
        | 'flex'
        | 'inline-flex'
        | 'grid'
        | 'inline-grid';

    export type ContainerDirection =
        | 'row'
        | 'row-reverse'
        | 'column'
        | 'column-reverse';

    export type ContainerAlign =
        | 'start'
        | 'center'
        | 'end'
        | 'stretch'
        | 'baseline';

    export type ContainerJustify =
        | 'start'
        | 'center'
        | 'end'
        | 'between'
        | 'around'
        | 'evenly';

    export type ContainerGap =
        | 0
        | 1
        | 2
        | 3
        | 4
        | 5
        | 6
        | 8
        | 10
        | 12
        | 16
        | 20
        | 24;

    export type ContainerSpace =
        | 0
        | 1
        | 2
        | 3
        | 4
        | 5
        | 6
        | 8
        | 10
        | 12
        | 16
        | 20
        | 24
        | 32
        | 40
        | 48
        | 56
        | 64;

    export type ContainerSpaceOrAuto = ContainerSpace | 'auto';

    export type ContainerWidth =
        | 'auto'
        | 'full'
        | 'screen'
        | 'min'
        | 'max'
        | 'fit'
        | (string & {})
        | number;

    export type ContainerMaxWidth =
        | 'xs'
        | 'sm'
        | 'md'
        | 'lg'
        | 'xl'
        | '2xl'
        | 'full'
        | (string & {})
        | number;

    export type ContainerBg =
        | 'page'
        | 'surface'
        | 'raised'
        | 'brand'
        | 'brand-subtle'
        | 'success'
        | 'success-subtle'
        | 'warning'
        | 'warning-subtle'
        | 'error'
        | 'error-subtle'
        | 'info'
        | 'info-subtle'
        | 'current'
        | 'transparent';

    export type ContainerTextColor =
        | '1'
        | '2'
        | '3'
        | '4'
        | 'inverse'
        | 'brand'
        | 'success'
        | 'warning'
        | 'error'
        | 'info'
        | 'current'
        | 'transparent';

    export type ContainerBorderColor =
        | '1'
        | '2'
        | '3'
        | 'brand'
        | 'success'
        | 'warning'
        | 'error'
        | 'current'
        | 'transparent';

    export type ContainerBorderWidth =
        | 0
        | 1
        | 2
        | 4
        | 8;

    export type ContainerRadius =
        | 'none'
        | 'sm'
        | 'base'
        | 'md'
        | 'lg'
        | 'xl'
        | '2xl'
        | '3xl'
        | 'full';

    export type ContainerShadow =
        | 'none'
        | 'xs'
        | 'sm'
        | 'md'
        | 'lg'
        | 'xl'
        | 'inner';

    export type ContainerPosition =
        | 'static'
        | 'relative'
        | 'absolute'
        | 'fixed'
        | 'sticky';

    export type ContainerOverflow =
        | 'visible'
        | 'hidden'
        | 'scroll'
        | 'auto';

    export interface ContainerProps {
        // Layout
        as?: ContainerAs;
        display?: ContainerDisplay;
        direction?: ContainerDirection;
        align?: ContainerAlign;
        justify?: ContainerJustify;
        wrap?: boolean;
        gap?: ContainerGap;
        gapX?: ContainerGap;
        gapY?: ContainerGap;

        // Sizing
        w?: ContainerWidth;
        h?: ContainerWidth;
        minW?: ContainerWidth;
        minH?: ContainerWidth;
        maxW?: ContainerMaxWidth;

        // Spacing - padding
        p?: ContainerSpace;
        px?: ContainerSpace;
        py?: ContainerSpace;
        ps?: ContainerSpace;
        pe?: ContainerSpace;
        pt?: ContainerSpace;
        pb?: ContainerSpace;

        // Spacing - margin
        m?: ContainerSpaceOrAuto;
        mx?: ContainerSpaceOrAuto;
        my?: ContainerSpaceOrAuto;
        ms?: ContainerSpaceOrAuto;
        me?: ContainerSpaceOrAuto;
        mt?: ContainerSpaceOrAuto;
        mb?: ContainerSpaceOrAuto;

        // Visual
        bg?: ContainerBg;
        color?: ContainerTextColor;
        border?: ContainerBorderWidth;
        borderColor?: ContainerBorderColor;
        radius?: ContainerRadius;
        shadow?: ContainerShadow;

        // Positioning / overflow
        position?: ContainerPosition;
        overflow?: ContainerOverflow;

        // Content
        children?: JSXElement | JSXElement[];

        // Styling
        className?: string;

        // HTML attributes
        id?: string;
        role?: string;
        href?: string;
        target?: string;
        rel?: string;
        type?: string;

        // Events
        onClick?: (e: MouseEvent) => void;
        onMouseEnter?: (e: MouseEvent) => void;
        onMouseLeave?: (e: MouseEvent) => void;
    }

// ╚══════════════════════════════════════════════════════════════════════════════════════╝
