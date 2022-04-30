/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {ReactiveElement} from '@lit/reactive-element';
import {decorateProperty} from '@lit/reactive-element/decorators/base.js';
import {ContextKey} from '../context-key.js';
import {ContextProvider} from '../controllers/context-provider.js';

/*
 * IMPORTANT: For compatibility with tsickle and the Closure JS compiler, all
 * property decorators (but not class decorators) in this file that have
 * an @ExportDecoratedItems annotation must be defined as a regular function,
 * not an arrow function.
 */

/**
 * A property decorator that adds a ContextConsumer controller to the component
 * which will try and retrieve a value for the property via the Context API.
 *
 * @param context A Context identifier value created via `createContext`
 * @param multiple An optional boolean which when true allows the value to be updated
 *   multiple times.
 *
 * See: https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector
 *
 * @example
 *
 * ```ts
 * import {loggerContext} from 'community-protocols/logger';
 *
 * class MyElement {
 *   @contextProvided(loggerContext)
 *   logger;
 *
 *   doThing() {
 *     this.logger.log('thing was done');
 *   }
 * }
 * ```
 * @category Decorator
 */
export function contextProvider<ValueType>({
  context: context,
}: {
  context: ContextKey<unknown, ValueType>;
}): <K extends PropertyKey>(
  protoOrDescriptor: ReactiveElement & Record<K, ValueType>,
  name?: K
  // Note TypeScript requires the return type to be `void|any`
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
) => void | any {
  return decorateProperty({
    finisher: (ctor: typeof ReactiveElement, name: PropertyKey) => {
      let controller: ContextProvider<ContextKey<unknown, ValueType>>;
      ctor.addInitializer((element: ReactiveElement): void => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        controller = new ContextProvider(element, context);
      });
      // proxy any existing setter for this property and use it to
      // notify the controller of an updated value
      const descriptor = Object.getOwnPropertyDescriptor(ctor.prototype, name);
      const oldSetter = descriptor?.set;
      const newDescriptor = {
        ...descriptor,
        set: function (value: ValueType) {
          controller?.setValue(value);
          if (oldSetter) {
            oldSetter.call(this, value);
          }
        },
      };
      Object.defineProperty(ctor.prototype, name, newDescriptor);
    },
  });
}
