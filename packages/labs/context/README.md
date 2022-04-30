# @lit-labs/context

## Overview

This module defines an implementation of controllers and decorators for using the [Context Protocol](https://github.com/webcomponents-cg/community-protocols/blob/main/proposals/context.md) as defined by the Web Components Community Group.

This protocol facilitates the communication between components lower in the DOM hierarchy with their ancestors, allowing data to be passed down the tree without having to be passed via 'prop drilling' where each element in the path passes on the data.

For further explanation of the Context Protocol please see the [community protocol documentation](https://github.com/webcomponents-cg/community-protocols/blob/main/proposals/context.md).

## Usage

There are several different usages of the Context API.

### Creating a Context

First lets define a context key we can use elsewhere in our examples:

#### **`logger.ts`**:

```ts
import {createContext} from '@lit-labs/context';

export interface Logger {
  log: (msg: string) => void;
}

export const loggerContext = createContext<Logger>('logger');
```

### Consuming a Context

Now we can define a consumer for this context - some component in our app needs the logger.

Here we're using the `@contextRequest` property decorator to make a `ContextConsumer` controller
and update its value when the context changes:

#### **`my-element.ts`**:

```ts
import {contextRequest} from '@lit-labs/context';
import {LitElement, property} from 'lit';
import {Logger, loggerContext} from './logger.js';

export class MyElement extends LitElement {
  @contextRequest({context: loggerContext, subscribe: true})
  @property({attribute: false})
  public logger?: Logger;

  private doThing() {
    this.logger?.log('a thing was done');
  }
}
```

Another way we can use a context in a component is via the `ContextConsumer` controller directly:

#### **`my-element.ts`**:

```ts
import {ContextConsumer, property} from '@lit-labs/context';
import {LitElement} from 'lit';
import {Logger, loggerContext} from './logger.js';

export class MyElement extends LitElement {
  public logger = new ContextConsumer(
    this,
    loggerContext,
    undefined, // don't need to pass a callback
    true // pass true to get updates if the logger changes
  );

  private doThing() {
    this.logger.value?.log('a thing was done');
  }
}
```

### Providing a Context

Finally we want to be able to provide this context from somewhere higher in the DOM.

Here we're using a `@contextProvider` property decorator to make a `ContextProvider`
controller and update its value when the property value changes.

#### **`my-app.ts`**:

```ts
import {LitElement} from 'lit';
import {contextProvider} from '@lit-labs/context';
import {loggerContext, Logger} from './my-logger.js';

export class MyApp extends LitElement {
  @contextProvider({context: loggerContext})
  @property({attribute: false})
  public logger: Logger = {
    log: (msg) => {
      console.log(`[my-app] ${msg}`);
    },
  });

  protected render(): TemplateResult {
    return html`<my-thing></my-thing>`;
  }
}
```

We can also use the `ContextProvider` controller directly:

#### **`my-app.ts`**:

```ts
import {LitElement} from 'lit';
import {ContextProvider} from '@lit-labs/context';
import {loggerContext, Logger} from './my-logger.js';

export class MyApp extends LitElement {
  // create a provider controller and a default logger
  private provider = new ContextProvider(this, loggerContext, {
    log: (msg) => {
      console.log(`[my-app] ${msg}`);
    },
  });

  protected render(): TemplateResult {
    return html`<my-thing></my-thing>`;
  }

  public setLogger(newLogger: Logger) {
    // update the provider with a new logger value
    this.provider.setValue(newLogger);
  }
}
```

## Known Issues

### Late upgraded Context Providers

In some cases you might have a context providing element that is upgraded late. LightDOM content below this provider may end up requesting a context that is currently not provided by any provider.

To solve this case we provide a `ContextRoot` class which can intercept and track unsatisfied `context-request` events and then redispatch these requests when providers are updated.

Example usage:

#### **`index.ts`**:

```ts
import {ContextRoot} from '@lit-labs/context';
const root = new ContextRoot();
root.attach(document.body);
```

The `ContextRoot` can be attached to any element and it will gather a list of any context requests which are received at the attached element. The `ContextProvider` controllers will emit `context-provider` events when they are connected to the DOM. These events act as triggers for the `ContextRoot` to redispatch these `context-request` events from their sources.

This solution has a small overhead, in that if a provider is not within the DOM hierarchy of the unsatisfied requests we are unnecessarily refiring these requests, but this approach is safest and most correct in that it is very hard to manage stable DOM hierarchies with the semantics of slotting and reparenting that is common in web components implementations.

## Contributing

Please see [CONTRIBUTING.md](../../../CONTRIBUTING.md).
