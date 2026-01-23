<!-- ╔══════════════════════════════ BEG ══════════════════════════════╗ -->

<br>
<div align="center">
    <p>
        <img src="./assets/img/logo.png" alt="logo" style="" height="60" />
    </p>
</div>

<div align="center">
    <img src="https://img.shields.io/badge/v-0.1.0-black"/>
    <a href="https://github.com/cruxkit-org"><img src="https://img.shields.io/badge/🔥-@cruxkit-black"/></a>
    <br>
    <img src="https://img.shields.io/badge/coverage-100%25-brightgreen" alt="Test Coverage" />
    <img src="https://img.shields.io/github/issues/cruxkit-org/container?style=flat" alt="Github Repo Issues" />
    <img src="https://img.shields.io/github/stars/cruxkit-org/container?style=social" alt="GitHub Repo stars" />
</div>
<br>

<!-- ╚═════════════════════════════════════════════════════════════════╝ -->



<!-- ╔══════════════════════════════ DOC ══════════════════════════════╗ -->

- ## Overview 👀
    - #### Why ?
        > A strongly-typed layout primitive that maps a small prop API to
        > mineui-style utility classes, so you configure structure, spacing,
        > and visuals in TypeScript instead of hand-writing long class strings.

    - #### When ?
        > Use it whenever you need a semantic wrapper (`main`, `section`,
        > `article`, etc.) with predictable spacing, alignment, and visual
        > styles, or when you want to reuse layout patterns across your design
        > system as a single “box” component.

    <br>
    <br>

- ## Quick Start 🔥

    > install [`hmm`](https://github.com/minejs-org/hmm) first.

    ```bash
    # in your terminal
    hmm i @cruxkit/container
    ```

    ```ts
    // in your ts files
    import { Container } from `@cruxkit/container`;
    ```

    <div align="center"> <img src="./assets/img/line.png" alt="line" style="display: block; margin-top:20px;margin-bottom:20px;width:500px;"/> </div>
    <br>


    - ### Basic layout

        ```typescript
        export function Page() {
            return (
                <Container p={8} maxW="lg" m="auto">
                    Hello, world
                </Container>
            );
        }
        ```

    - ### Horizontal stack with spacing

        ```typescript
        export function Toolbar() {
            return (
                <Container
                    as="nav"
                    display="flex"
                    direction="row"
                    align="center"
                    justify="between"
                    gap={4}
                    px={6}
                    py={3}
                    bg="surface"
                    border={1}
                    radius="lg"
                >
                    <span>Logo</span>
                    <Container display="flex" direction="row" gap={3}>
                        <button>Docs</button>
                        <button>GitHub</button>
                    </Container>
                </Container>
            );
        }
        ```

    - ### Card with background and shadow

        ```typescript
        export function Card() {
            return (
                <Container
                    as="article"
                    maxW="md"
                    m="auto"
                    p={6}
                    bg="raised"
                    radius="xl"
                    shadow="lg"
                    border={1}
                    borderColor="2"
                >
                    <h2>Container card</h2>
                    <p>
                        Compose layout, spacing, and visuals with a single,
                        type-safe primitive.
                    </p>
                </Container>
            );
        }
        ```

    - ### Flexible Sizing with Custom Values

        ```typescript
        export function Hero() {
            return (
                <Container
                    w="100%"
                    minH="600px"
                    maxW="1200px"
                    m="auto"
                    p="2rem"
                    display="flex"
                    align="center"
                    justify="center"
                >
                    <h1>Flexible Hero Section</h1>
                </Container>
            );
        }
        ```

    <br>
    <br>

- ## Documentation 📑


    - ### API ⛓️

        - #### Functions

            ```typescript
            /**
             * A flexible layout container that maps typed props to @mineui utility classes.
            *
            * @param props - Configuration for display, spacing, sizing, color, borders, and more.
            * @returns A JSX element with computed @mineui/utils classes applied.
            */
            export function Container(props: ContainerProps): JSXElement
            ```

        - #### Types

            ```typescript
            export type ContainerAs =
                | 'div'
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

            export type ContainerScale =
                | 0 | 1 | 2 | 3 | 4 | 6 | 8 | 10 | 12 | 16 | 20 | 24 | 32 | 40 | 48 | 56 | 64;

            export type ContainerFraction =
                | '1/2' | '1/3' | '2/3' | '1/4' | '2/4' | '3/4'
                | '1/5' | '2/5' | '3/5' | '4/5' | '1/6' | '5/6' | '1/12';

            export type ContainerWidth =
                | 'auto'
                | 'full'
                | 'screen'
                | 'min'
                | 'max'
                | 'fit'
                | ContainerScale
                | ContainerFraction
                | (string & {})
                | number;

            export type ContainerMaxWidth =
                | 'none'
                | 'xs'
                | 'sm'
                | 'md'
                | 'lg'
                | 'xl'
                | '2xl'
                | '3xl'
                | '4xl'
                | '5xl'
                | '6xl'
                | '7xl'
                | 'full'
                | 'min'
                | 'max'
                | 'fit'
                | 'prose'
                | ContainerScale
                | (string & {})
                | number;

            export type ContainerMinWidth =
                | 0
                | 'full'
                | 'min'
                | 'max'
                | 'fit'
                | ContainerScale
                | (string & {})
                | number;

            export type ContainerHeight =
                | 'auto'
                | 'full'
                | 'screen'
                | 'min'
                | 'max'
                | 'fit'
                | ContainerScale
                | ContainerFraction
                | (string & {})
                | number;

            export type ContainerMinHeight =
                | 0
                | 'full'
                | 'screen'
                | 'min'
                | 'max'
                | 'fit'
                | ContainerScale
                | (string & {})
                | number;

            export type ContainerMaxHeight =
                | 'none'
                | 'full'
                | 'screen'
                | 'min'
                | 'max'
                | 'fit'
                | ContainerScale
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
                // Allow any other props (events, data-attributes, aria-*, etc.)
                [key: string]: any;

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
                h?: ContainerHeight;
                minW?: ContainerMinWidth;
                minH?: ContainerMinHeight;
                maxW?: ContainerMaxWidth;
                maxH?: ContainerMaxHeight;

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
            ```

        <div align="center"> <img src="./assets/img/line.png" alt="line" style="display: block; margin-top:20px;margin-bottom:20px;width:500px;"/> </div>
        <br>

    - ### Related 🔗

        - ##### [@minejs/jsx](https://github.com/minejs-org/jsx)

        - ##### [@mineui/utils](https://github.com/mineui-org/utils)

        - ##### [@cruxkit/..](https://github.com/cruxkit-org)


<!-- ╚═════════════════════════════════════════════════════════════════╝ -->



<!-- ╔══════════════════════════════ END ══════════════════════════════╗ -->

<br>
<br>

---

<div align="center">
    <a href="https://github.com/maysara-elshewehy"><img src="https://img.shields.io/badge/by-Maysara-black"/></a>
</div>

<!-- ╚═════════════════════════════════════════════════════════════════╝ -->
