/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {assert} from '@esm-bundle/chai';
import type {Test1, Child1, Child2} from './router_test_code.js';

const canTest =
  window.ShadowRoot &&
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  !(window as any).ShadyDOM?.inUse;

(canTest ? suite : suite.skip)('Router', () => {
  let container: HTMLIFrameElement;

  setup(async () => {
    container = document.createElement('iframe');
    document.body.appendChild(container);
  });

  teardown(() => {
    container?.remove();
  });

  /**
   * Loads a test module into the iframe container and resolves
   * when the frame has fully loaded.
   */
  const loadTestModule = async (filename: string) => {
    const testModuleUrl = new URL(filename, import.meta.url);
    container.src = testModuleUrl.href;
    await new Promise<void>((res) => {
      const loadListener = () => {
        container.removeEventListener('load', loadListener);
        res();
      };
      container.addEventListener('load', loadListener);
    });
  };

  test('Basic routing', async () => {
    await loadTestModule('./router_test.html');
    const el = container.contentDocument!.createElement(
      'router-test-1'
    ) as Test1;
    const {contentWindow, contentDocument} = container;

    //
    // Initial location
    //

    // Set the iframe URL to / before appending the element
    contentWindow!.history.pushState({}, '', '/');
    contentDocument!.body.append(el);
    await el.updateComplete;

    // Verify the root route rendered
    assert.include(el.shadowRoot!.innerHTML, '<h2>Root</h2>');

    //
    // Link navigation
    //
    const test1Link = el.shadowRoot!.querySelector(
      '#test1'
    ) as HTMLAnchorElement;
    test1Link.click();
    await el.updateComplete;
    assert.include(
      stripExpressionComments(el.shadowRoot!.innerHTML),
      '<h2>Test 1: abc</h2>'
    );

    //
    // Back navigation
    //
    contentWindow!.history.back();
    await new Promise<void>((res) => {
      const listener = () => {
        contentWindow!.removeEventListener('popstate', listener);
        res();
      };
      contentWindow!.addEventListener('popstate', listener);
    });
    await el.updateComplete;
    // Verify the root route rendered
    assert.include(el.shadowRoot!.innerHTML, '<h2>Root</h2>');
  });

  test('Nested routing', async () => {
    await loadTestModule('./router_test.html');
    const el = container.contentDocument!.createElement(
      'router-test-1'
    ) as Test1;
    const {contentWindow, contentDocument} = container;

    //
    // Initial location
    //

    // Set the iframe URL to / before appending the element
    contentWindow!.history.pushState({}, '', '/child1/def');
    contentDocument!.body.append(el);
    await el.updateComplete;
    const child1 = el.shadowRoot!.querySelector('child-1') as Child1;
    await child1.updateComplete;

    // Verify the child route rendered
    assert.include(
      stripExpressionComments(child1.shadowRoot!.innerHTML),
      '<h3>Child 1: def</h3>'
    );

    //
    // Link navigation
    //
    const child1Link = child1.shadowRoot!.querySelector(
      '#abc'
    ) as HTMLAnchorElement;
    child1Link.click();
    await child1.updateComplete;
    assert.include(
      stripExpressionComments(child1.shadowRoot!.innerHTML),
      '<h3>Child 1: abc</h3>'
    );

    //
    // Sibling navigation
    //
    const child2Link = el.shadowRoot!.querySelector(
      '#child2'
    ) as HTMLAnchorElement;
    child2Link.click();
    await el.updateComplete;
    const child2 = el.shadowRoot!.querySelector('child-2') as Child2;
    await child2.updateComplete;

    assert.include(
      stripExpressionComments(child2.shadowRoot!.innerHTML),
      '<h3>Child 2: xyz</h3>'
    );
  });

  test('Fallback and dynamic routes', async () => {
    // This tests that we can install routes asynchronously from within a
    // fallback route handler. This is the kind of flow we might need in
    // order to do client-side transitions based on server-side conventional
    // routing - such as file-based routing.
    await loadTestModule('./router_test.html');
    const el = container.contentDocument!.createElement(
      'router-test-1'
    ) as Test1;
    const {contentWindow, contentDocument} = container;

    //
    // Initial location
    //

    // Set the iframe URL to / before appending the element
    contentWindow!.history.pushState({}, '', '/');
    contentDocument!.body.append(el);
    await el.updateComplete;

    //
    // Fallback
    //

    // '/server-route' is not pre-configured, is dynamically installed
    await el._router.goto('/server-route');

    await el.updateComplete;
    assert.include(
      stripExpressionComments(el.shadowRoot!.innerHTML),
      '<h2>Server</h2>'
    );
  });
});

export const stripExpressionComments = (html: string) =>
  html.replace(/<!--\?lit\$[0-9]+\$-->|<!--\??-->/g, '');
