// src/kit/container.tsx
//
// Made with ❤️ by Maysara.



// ╔════════════════════════════════════════ PACK ════════════════════════════════════════╗

    import type { JSXElement } from '@minejs/jsx';
    import type {
        ContainerProps,
        ContainerDisplay,
        ContainerDirection,
        ContainerAlign,
        ContainerJustify,
        ContainerMaxWidth,
        ContainerBorderWidth,
        ContainerRadius,
        ContainerShadow,
        ContainerSpace,
        ContainerSpaceOrAuto
    } from '../types';

// ╚══════════════════════════════════════════════════════════════════════════════════════╝



// ╔════════════════════════════════════════ CORE ════════════════════════════════════════╗

    const displayClassMap: Record<ContainerDisplay, string> = {
        block: 'block',
        'inline-block': 'inline-block',
        flex: 'flex',
        'inline-flex': 'inline-flex',
        grid: 'grid',
        'inline-grid': 'inline-grid'
    };

    const directionClassMap: Record<ContainerDirection, string> = {
        row: 'flex-row',
        'row-reverse': 'flex-row-reverse',
        column: 'flex-col',
        'column-reverse': 'flex-col-reverse'
    };

    const alignClassMap: Record<ContainerAlign, string> = {
        start: 'items-start',
        center: 'items-center',
        end: 'items-end',
        stretch: 'items-stretch',
        baseline: 'items-baseline'
    };

    const justifyClassMap: Record<ContainerJustify, string> = {
        start: 'justify-start',
        center: 'justify-center',
        end: 'justify-end',
        between: 'justify-between',
        around: 'justify-around',
        evenly: 'justify-evenly'
    };

    const maxWidthClassMap: Record<ContainerMaxWidth, string> = {
        xs: 'max-w-xs',
        sm: 'max-w-sm',
        md: 'max-w-md',
        lg: 'max-w-lg',
        xl: 'max-w-xl',
        '2xl': 'max-w-2xl',
        full: 'max-w-full'
    };

    const borderWidthClassMap: Record<ContainerBorderWidth, string> = {
        0: 'border-0',
        1: 'border',
        2: 'border-2',
        4: 'border-4',
        8: 'border-8'
    };

    const radiusClassMap: Record<ContainerRadius, string> = {
        none: 'rounded-none',
        sm: 'rounded-sm',
        base: 'rounded',
        md: 'rounded-md',
        lg: 'rounded-lg',
        xl: 'rounded-xl',
        '2xl': 'rounded-2xl',
        '3xl': 'rounded-3xl',
        full: 'rounded-full'
    };

    const shadowClassMap: Record<ContainerShadow, string> = {
        none: 'shadow-none',
        xs: 'shadow-xs',
        sm: 'shadow-sm',
        md: 'shadow-md',
        lg: 'shadow-lg',
        xl: 'shadow-xl',
        inner: 'shadow-inner'
    };

    function spacingClass(prefix: string, value: ContainerSpace | undefined): string | undefined {
        if (value === undefined) return undefined;
        return `${prefix}-${value}`;
    }

    function marginClass(prefix: string, value: ContainerSpaceOrAuto | undefined): string | undefined {
        if (value === undefined) return undefined;
        if (value === 'auto') return `${prefix}-auto`;
        return `${prefix}-${value}`;
    }

    const resolveSize = (
        key: 'w' | 'h' | 'min-w' | 'min-h' | 'max-w',
        val: string | number | undefined,
        map?: Record<string, string>
    ) => {
        if (val === undefined) return null;

        if (typeof val === 'number') {
            return { class: `${key}-${val}` };
        }

        if (map && val in map) {
            return { class: map[val] };
        }

        if (['auto', 'full', 'screen', 'min', 'max', 'fit'].includes(val)) {
            return { class: `${key}-${val}` };
        }

        const styleProp =
            key === 'w' ? 'width' :
            key === 'h' ? 'height' :
            key === 'min-w' ? 'minWidth' :
            key === 'min-h' ? 'minHeight' :
            'maxWidth';

        return { style: { [styleProp]: val } };
    };

    /**
     * A flexible layout container that maps typed props to Tailwind utility classes.
     *
     * @param props - Configuration for display, spacing, sizing, color, borders, and more.
     * @returns A JSX element with computed Tailwind classes applied.
     */
    export function Container(props: ContainerProps): JSXElement {
        const {
            as: Tag = 'div',
            display = 'block',
            direction,
            align,
            justify,
            wrap,
            gap,
            gapX,
            gapY,
            w,
            h,
            minW,
            minH,
            maxW,
            p,
            px,
            py,
            ps,
            pe,
            pt,
            pb,
            m,
            mx,
            my,
            ms,
            me,
            mt,
            mb,
            bg,
            color,
            border,
            borderColor,
            radius,
            shadow,
            position,
            overflow,
            children,
            className: className,
            ...restProps
        } = props;

        const wRes = resolveSize('w', w);
        const hRes = resolveSize('h', h);
        const minWRes = resolveSize('min-w', minW);
        const minHRes = resolveSize('min-h', minH);
        const maxWRes = resolveSize('max-w', maxW, maxWidthClassMap);

        const computedStyle = {
            ...(restProps as any).style,
            ...wRes?.style,
            ...hRes?.style,
            ...minWRes?.style,
            ...minHRes?.style,
            ...maxWRes?.style,
        };

        const classes = [
            display && displayClassMap[display],
            direction && directionClassMap[direction],
            align && alignClassMap[align],
            justify && justifyClassMap[justify],
            wrap && 'flex-wrap',
            gap !== undefined && `gap-${gap}`,
            gapX !== undefined && `gap-x-${gapX}`,
            gapY !== undefined && `gap-y-${gapY}`,
            wRes?.class,
            hRes?.class,
            minWRes?.class,
            minHRes?.class,
            maxWRes?.class,
            spacingClass('p', p),
            spacingClass('px', px),
            spacingClass('py', py),
            spacingClass('ps', ps),
            spacingClass('pe', pe),
            spacingClass('pt', pt),
            spacingClass('pb', pb),
            marginClass('m', m),
            marginClass('mx', mx),
            marginClass('my', my),
            marginClass('ms', ms),
            marginClass('me', me),
            marginClass('mt', mt),
            marginClass('mb', mb),
            bg && `bg-${bg}`,
            color && `text-${color}`,
            border !== undefined && borderWidthClassMap[border],
            borderColor && `border-${borderColor}`,
            radius && radiusClassMap[radius],
            shadow && shadowClassMap[shadow],
            position,
            overflow && `overflow-${overflow}`,
            className
        ]
            .filter(Boolean)
            .join(' ');

        return <Tag className={classes} {...restProps} style={computedStyle}> {children} </Tag>;
    }

// ╚══════════════════════════════════════════════════════════════════════════════════════╝

