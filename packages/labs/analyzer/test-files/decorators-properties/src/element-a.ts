/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {LitElement} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('element-a')
export class ElementA extends LitElement {
  notDecorated: string;

  @property()
  noOptionsString: string;

  @property()
  noOptionsNumber: number;

  @property({type: String})
  typeString: string;

  @property({type: Number})
  typeNumber: number;

  @property({type: Boolean})
  typeBoolean: boolean;

  @property({reflect: true})
  reflectTrue: string;

  @property({reflect: false})
  reflectFalse: string;

  @property({reflect: undefined})
  reflectUndefined: string;

  @property({attribute: true})
  attributeTrue: string;

  @property({attribute: false})
  attributeFalse: string;

  @property({attribute: undefined})
  attributeUndefined: string;

  @property({attribute: 'abc'})
  attributeString: string;

  @property({converter: {fromAttribute() {}, toAttribute() {}}})
  customConverter: string;
}
