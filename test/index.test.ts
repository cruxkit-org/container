// test/index.test.ts
//
// Made with ❤️ by Maysara.



// ╔════════════════════════════════════════ PACK ════════════════════════════════════════╗

    import { describe, expect, test } from 'bun:test';
    import { JSDOM } from 'jsdom';
    import {
        Container,
        type ContainerProps,
    } from '../src';

// ╚══════════════════════════════════════════════════════════════════════════════════════╝



// ╔════════════════════════════════════════ INIT ════════════════════════════════════════╗

    const dom               = new JSDOM('<!DOCTYPE html><html><body></body></html>');
    global.document         = dom.window.document;
    global.window           = dom.window as any;
    global.HTMLElement      = dom.window.HTMLElement;
    global.Element          = dom.window.Element;
    global.Text             = dom.window.Text;
    global.DocumentFragment = dom.window.DocumentFragment;
    global.Node             = dom.window.Node;

// ╚══════════════════════════════════════════════════════════════════════════════════════╝



// ╔════════════════════════════════════════ TEST ════════════════════════════════════════╗

    describe('@cruxkit/container', () => {
        function renderContainer(props: ContainerProps = {}): unknown {
            return Container(props);
        }

        test('renders with default props without throwing', () => {
            const element = renderContainer();
            expect(element).toBeDefined();
        });

        test('supports basic layout props', () => {
            const element = renderContainer({
                display  : 'flex',
                direction: 'row',
                align    : 'center',
                justify  : 'between',
                wrap     : true,
                gap      : 4,
                gapX     : 2,
                gapY     : 6,
            });

            expect(element).toBeDefined();
        });

        test('supports sizing and max width props', () => {
            const element = renderContainer({
                w    : 'full',
                h    : 'screen',
                maxW : 'lg',
            });

            expect(element).toBeDefined();
        });

        test('supports padding spacing props', () => {
            const element = renderContainer({
                p : 4,
                px: 6,
                py: 8,
                ps: 2,
                pe: 3,
                pt: 5,
                pb: 1,
            });

            expect(element).toBeDefined();
        });

        test('supports margin spacing props including auto', () => {
            const element = renderContainer({
                m : 'auto',
                mx: 4,
                my: 2,
                ms: 1,
                me: 6,
                mt: 8,
                mb: 3,
            });

            expect(element).toBeDefined();
        });

        test('supports visual props', () => {
            const element = renderContainer({
                bg         : 'brand',
                color      : 'warning',
                border     : 2,
                borderColor: 'success',
                radius     : 'lg',
                shadow     : 'md',
            });

            expect(element).toBeDefined();
        });

        test('supports positioning, overflow, tag and className props', () => {
            const element = renderContainer({
                as      : 'section',
                position: 'absolute',
                overflow: 'auto',
                className: 'custom-class',
            });

            expect(element).toBeDefined();
        });

        test('supports flexible dimensions and custom values', () => {
            const element = renderContainer({
                w: 'full',
                h: 16,
                minW: 'min',
                minH: 'screen',
                maxW: 'lg'
            }) as any;

            expect(element.className).toContain('w-full');
            expect(element.className).toContain('h-16');
            expect(element.className).toContain('min-w-min');
            expect(element.className).toContain('min-h-screen');
            expect(element.className).toContain('max-w-lg');

            // Test SCSS extended support (min-w fixed values, fractions)
            const elementExtended = renderContainer({
                w: '1/2',
                minW: 12, // Should be min-w-12 now
                maxW: 64, // Should be max-w-64 now
                minH: 8,  // Should be min-h-8 now
            }) as any;

            expect(elementExtended.className).toContain('w-1/2');
            expect(elementExtended.className).toContain('min-w-12');
            expect(elementExtended.className).toContain('max-w-64');
            expect(elementExtended.className).toContain('min-h-8');

            const element2 = renderContainer({
                w: '60px',
                h: '1.5rem',
                minW: '50%',
                minH: '100vh',
                maxW: '80ch'
            }) as any;

            expect(element2.className).not.toContain('w-60px');
            expect(element2.style.width).toBe('60px');
            expect(element2.style.height).toBe('1.5rem');
            expect(element2.style.minWidth).toBe('50%');
            expect(element2.style.minHeight).toBe('100vh');
            expect(element2.style.maxWidth).toBe('80ch');
        });

        test('supports events and custom attributes', () => {
            let clicked = false;
            const element = renderContainer({
                onClick: () => { clicked = true; },
                'data-testid': 'container-element',
                'aria-label': 'Test Container'
            }) as any;

            expect(element.getAttribute('data-testid')).toBe('container-element');
            expect(element.getAttribute('aria-label')).toBe('Test Container');

            // Simulate click
            element.click();
            expect(clicked).toBe(true);
        });
    });

// ╚══════════════════════════════════════════════════════════════════════════════════════╝
