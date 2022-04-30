/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
import {render} from '../../lit-html.js';
import {assert} from '@esm-bundle/chai';
import {stripExpressionComments} from './strip-markers.js';

export const makeAssertRender =
  (getContainer: () => HTMLElement) => (value: unknown, expected: string) => {
    const container = getContainer();
    render(value, container);
    return assert.equal(stripExpressionComments(container.innerHTML), expected);
  };
