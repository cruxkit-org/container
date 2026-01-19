import { JSXElement } from '@minejs/jsx';

type ContainerAs = 'div' | 'label' | 'section' | 'article' | 'aside' | 'header' | 'footer' | 'main' | 'nav' | 'span' | 'button' | 'a' | 'form' | 'ul' | 'ol' | 'li';
type ContainerDisplay = 'block' | 'inline-block' | 'flex' | 'inline-flex' | 'grid' | 'inline-grid';
type ContainerDirection = 'row' | 'row-reverse' | 'column' | 'column-reverse';
type ContainerAlign = 'start' | 'center' | 'end' | 'stretch' | 'baseline';
type ContainerJustify = 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly';
type ContainerGap = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 8 | 10 | 12 | 16 | 20 | 24;
type ContainerSpace = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 8 | 10 | 12 | 16 | 20 | 24 | 32 | 40 | 48 | 56 | 64;
type ContainerSpaceOrAuto = ContainerSpace | 'auto';
type ContainerScale = 0 | 1 | 2 | 3 | 4 | 6 | 8 | 10 | 12 | 16 | 20 | 24 | 32 | 40 | 48 | 56 | 64;
type ContainerFraction = '1/2' | '1/3' | '2/3' | '1/4' | '2/4' | '3/4' | '1/5' | '2/5' | '3/5' | '4/5' | '1/6' | '5/6' | '1/12';
type ContainerWidth = 'auto' | 'full' | 'screen' | 'min' | 'max' | 'fit' | ContainerScale | ContainerFraction | (string & {}) | number;
type ContainerMaxWidth = 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl' | '7xl' | 'full' | 'min' | 'max' | 'fit' | 'prose' | ContainerScale | (string & {}) | number;
type ContainerMinWidth = 0 | 'full' | 'min' | 'max' | 'fit' | ContainerScale | (string & {}) | number;
type ContainerHeight = 'auto' | 'full' | 'screen' | 'min' | 'max' | 'fit' | ContainerScale | ContainerFraction | (string & {}) | number;
type ContainerMinHeight = 0 | 'full' | 'screen' | 'min' | 'max' | 'fit' | ContainerScale | (string & {}) | number;
type ContainerMaxHeight = 'none' | 'full' | 'screen' | 'min' | 'max' | 'fit' | ContainerScale | (string & {}) | number;
type ContainerBg = 'page' | 'surface' | 'raised' | 'brand' | 'brand-subtle' | 'success' | 'success-subtle' | 'warning' | 'warning-subtle' | 'error' | 'error-subtle' | 'info' | 'info-subtle' | 'current' | 'transparent';
type ContainerTextColor = '1' | '2' | '3' | '4' | 'inverse' | 'brand' | 'success' | 'warning' | 'error' | 'info' | 'current' | 'transparent';
type ContainerBorderColor = '1' | '2' | '3' | 'brand' | 'success' | 'warning' | 'error' | 'current' | 'transparent';
type ContainerBorderWidth = 0 | 1 | 2 | 4 | 8;
type ContainerRadius = 'none' | 'sm' | 'base' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | 'full';
type ContainerShadow = 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'inner';
type ContainerPosition = 'static' | 'relative' | 'absolute' | 'fixed' | 'sticky';
type ContainerOverflow = 'visible' | 'hidden' | 'scroll' | 'auto';
interface ContainerProps {
    as?: ContainerAs;
    display?: ContainerDisplay;
    direction?: ContainerDirection;
    align?: ContainerAlign;
    justify?: ContainerJustify;
    wrap?: boolean;
    gap?: ContainerGap;
    gapX?: ContainerGap;
    gapY?: ContainerGap;
    w?: ContainerWidth;
    h?: ContainerHeight;
    minW?: ContainerMinWidth;
    minH?: ContainerMinHeight;
    maxW?: ContainerMaxWidth;
    maxH?: ContainerMaxHeight;
    p?: ContainerSpace;
    px?: ContainerSpace;
    py?: ContainerSpace;
    ps?: ContainerSpace;
    pe?: ContainerSpace;
    pt?: ContainerSpace;
    pb?: ContainerSpace;
    m?: ContainerSpaceOrAuto;
    mx?: ContainerSpaceOrAuto;
    my?: ContainerSpaceOrAuto;
    ms?: ContainerSpaceOrAuto;
    me?: ContainerSpaceOrAuto;
    mt?: ContainerSpaceOrAuto;
    mb?: ContainerSpaceOrAuto;
    bg?: ContainerBg;
    color?: ContainerTextColor;
    border?: ContainerBorderWidth;
    borderColor?: ContainerBorderColor;
    radius?: ContainerRadius;
    shadow?: ContainerShadow;
    position?: ContainerPosition;
    overflow?: ContainerOverflow;
    children?: JSXElement | JSXElement[];
    className?: string;
    id?: string;
    role?: string;
    href?: string;
    target?: string;
    rel?: string;
    type?: string;
    onClick?: (e: MouseEvent) => void;
    onMouseEnter?: (e: MouseEvent) => void;
    onMouseLeave?: (e: MouseEvent) => void;
}

/**
 * A flexible layout container that maps typed props to Tailwind utility classes.
 *
 * @param props - Configuration for display, spacing, sizing, color, borders, and more.
 * @returns A JSX element with computed Tailwind classes applied.
 */
declare function Container(props: ContainerProps): JSXElement;

export { Container, type ContainerAlign, type ContainerAs, type ContainerBg, type ContainerBorderColor, type ContainerBorderWidth, type ContainerDirection, type ContainerDisplay, type ContainerFraction, type ContainerGap, type ContainerHeight, type ContainerJustify, type ContainerMaxHeight, type ContainerMaxWidth, type ContainerMinHeight, type ContainerMinWidth, type ContainerOverflow, type ContainerPosition, type ContainerProps, type ContainerRadius, type ContainerScale, type ContainerShadow, type ContainerSpace, type ContainerSpaceOrAuto, type ContainerTextColor, type ContainerWidth };
