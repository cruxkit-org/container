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
    });

// ╚══════════════════════════════════════════════════════════════════════════════════════╝
