# Changelog

## 0.11.2

### Patch Changes

- [#2402](https://github.com/lit/lit/pull/2402) [`a638841d`](https://github.com/lit/lit/commit/a638841d8ba76e43cf83a2516e2cfc7a9c2ce27e) - Trivial: reformat markdown files

## 0.11.1

### Patch Changes

- [#2286](https://github.com/lit/lit/pull/2286) [`52c4f32e`](https://github.com/lit/lit/commit/52c4f32e7aa67120364a9c64a1696909c711ff88) - Update README to point to new full docs at lit.dev

## 0.11.0

### Minor Changes

- [#2188](https://github.com/lit/lit/pull/2188) [`9fc5a039`](https://github.com/lit/lit/commit/9fc5a039dc2b701ac9dbaaea278668172915c80b) - Support emitting generated modules as `.js` files. Adds a new
  `output.language` setting for runtime mode locale generation, and automatically
  detects the filetype based on the file extension when using
  `output.localeCodesModule`.

### Patch Changes

- [#2188](https://github.com/lit/lit/pull/2188) [`9fc5a039`](https://github.com/lit/lit/commit/9fc5a039dc2b701ac9dbaaea278668172915c80b) - Documented vanilla JS usage in README.

## 0.10.4

### Patch Changes

- [#2113](https://github.com/lit/lit/pull/2113) [`5b2f3642`](https://github.com/lit/lit/commit/5b2f3642ff91931b5b01f8bdd2ed98aba24f1047) - Dependency upgrades including TypeScript 4.4.2

* [#1964](https://github.com/lit/lit/pull/1964) [`f43b811`](https://github.com/lit/lit/commit/f43b811405be32ce6caf82e80d25cb6170eeb7dc) - Don't publish src/ to npm.

* Updated dependencies [[`ff0d1556`](https://github.com/lit/lit/commit/ff0d15568fe79019ebfa6b72b88ba86aac4af91b), [`15a8356d`](https://github.com/lit/lit/commit/15a8356ddd59a1e80880a93acd21fadc9c24e14b), [`2b8dd1c7`](https://github.com/lit/lit/commit/2b8dd1c7d687a8613bd97eb68a2dfd9197cde4fa), [`34280cb0`](https://github.com/lit/lit/commit/34280cb0c6ac1dc14ce5cc900f36b4326b0a1d98), [`5768cc60`](https://github.com/lit/lit/commit/5768cc604dc7fcb2c95165399180179d406bb257), [`018f6520`](https://github.com/lit/lit/commit/018f65205ba256e15410f17a69f958607c222a38), [`5fabe2b5`](https://github.com/lit/lit/commit/5fabe2b5ae4ab8fba9dc2d23a69105d32e4c0705), [`0470d86a`](https://github.com/lit/lit/commit/0470d86a2075b401184e5d5d514de3fa8f75dd16), [`5fabe2b5`](https://github.com/lit/lit/commit/5fabe2b5ae4ab8fba9dc2d23a69105d32e4c0705), [`52a47c7e`](https://github.com/lit/lit/commit/52a47c7e25d71ff802083ca9b0751724efd3a4f4), [`5b2f3642`](https://github.com/lit/lit/commit/5b2f3642ff91931b5b01f8bdd2ed98aba24f1047), [`5fabe2b5`](https://github.com/lit/lit/commit/5fabe2b5ae4ab8fba9dc2d23a69105d32e4c0705), [`08f60328`](https://github.com/lit/lit/commit/08f60328abf83113fe82c9d8ee43dc71f10a9b77), [`7adfbb0c`](https://github.com/lit/lit/commit/7adfbb0cd32a7eab82551aa6c9d1434e7c4b563e), [`5fabe2b5`](https://github.com/lit/lit/commit/5fabe2b5ae4ab8fba9dc2d23a69105d32e4c0705), [`24feb430`](https://github.com/lit/lit/commit/24feb4306ec3ddf2996c678a266a211b52f6aff2), [`61fc9452`](https://github.com/lit/lit/commit/61fc9452b40140bbd864317d868a3a663538ebdd), [`5fabe2b5`](https://github.com/lit/lit/commit/5fabe2b5ae4ab8fba9dc2d23a69105d32e4c0705), [`13d137e9`](https://github.com/lit/lit/commit/13d137e96456e8243fa5e3dbfbaf8d8e510016a7), [`5fabe2b5`](https://github.com/lit/lit/commit/5fabe2b5ae4ab8fba9dc2d23a69105d32e4c0705), [`5fabe2b5`](https://github.com/lit/lit/commit/5fabe2b5ae4ab8fba9dc2d23a69105d32e4c0705), [`724a9aab`](https://github.com/lit/lit/commit/724a9aabe263fb9dafee073e74de50a1aeabbe0f), [`0312f3e5`](https://github.com/lit/lit/commit/0312f3e533611eb3f4f9381594485a33ad003b74), [`8b6e2415`](https://github.com/lit/lit/commit/8b6e2415e57df644189a5aac311f58949a1d0971), [`761375ac`](https://github.com/lit/lit/commit/761375ac9ef28dd0ba8a1f9363aaf5f0df725205), [`a791514b`](https://github.com/lit/lit/commit/a791514b426b790de2bfa4c78754fb62815e71d4), [`5fabe2b5`](https://github.com/lit/lit/commit/5fabe2b5ae4ab8fba9dc2d23a69105d32e4c0705)]:
  - @lit/reactive-element@1.0.0
  - lit@2.0.0

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

<!-- ## Unreleased -->

## [0.10.3] - 2021-07-14

### Added

- Added `configureReentrantLocalization` in `init/reentrant.js` which allows for
  safe concurrent rendering across multiple locales by asynchronous tasks, such
  as in an SSR context.

  In this configuration, there is no global `setLocale` function. Instead, the
  caller _provides_ a `getLocale` function, which is then called by every `msg`
  invocation.

  This pairs well with an asynchronous storage manager like
  [`AsyncLocalStorage`](https://nodejs.org/api/async_hooks.html#async_hooks_class_asynclocalstorage).
  See `configureSsrLocalization` from `@lit/localize-tools/lib/ssr.js` which
  does exactly this.

### Fixed

- Removed accidental export of `_msg` (use `msg` instead).

## [0.10.2] - 2021-05-18

### Fixed

- Internal refactoring.

## [0.10.1] - 2021-04-20

### Changed

- Bumped versions of deps

## [0.10.0] - 2021-04-19

### Changed

- **[BREAKING]** Lit dependency upgraded to v2.

- **[BREAKING]** The `Localized` mixin has been replaced with the `@localized`
  decorator and the `updateWhenLocaleChanges` function. These APIs register a
  Lit 2 controller that serves the same purpose as the removed mixin.

  #### Before

  ```ts
  import {LitElement} from 'lit-element';
  import {Localized} from '@lit/localize/localized-element.js';

  class MyElement extends Localized(LitElement) {}
  ```

  #### After

  ###### With decorators

  ```ts
  import {LitElement, customElement} from 'lit';
  import {localized} from '@lit/localize';

  @localized()
  @customElement('my-element');
  class MyElement extends LitElement {}
  ```

  ###### Without decorators

  ```ts
  import {LitElement} from 'lit';
  import {updateWhenLocaleChanges} from '@lit/localize';

  class MyElement extends LitElement {
    constructor() {
      super();
      updateWhenLocaleChanges(this);
    }
  }
  ```

## [0.9.0] - 2021-03-30

### Changed

- **[BREAKING]** Description comments (`// msgdesc:`) have been removed in favor
  of the `desc` option.

Before:

```js
// msgdesc: Home page
class HomePage {
  hello() {
    // msgdesc: Greeting to Earth
    return msg(html`Hello World`);
  }
  goodbye() {
    // msgdesc: Farewell to Earth
    return msg(html`Goodbye World`);
  }
}
```

After:

```js
class HomePage {
  hello() {
    return msg(html`Hello World`, {
      desc: 'Home page / Greeting to Earth',
    });
  }
  goodbye() {
    return msg(html`Goodbye World`, {
      desc: 'Home page / Farewell to Earth',
    });
  }
}
```

## [0.8.0] - 2021-03-24

### Changed

- **[BREAKING]** Lit Localize is now distributed as two packages:

  - `@lit/localize` provides the browser library (`msg`, `LocalizedElement`, etc.)
  - `@lit/localize-tools` provides the `lit-localize` CLI.

## [0.7.0] - 2021-03-12

- **[BREAKING]** Templates can now contain arbitrary expressions, and no longer
  need to be wrapped in a function.

  Before:

  ```ts
  msg((name) => html`Hello <b>${name}</b>!`, {args: [getUsername()]});
  ```

  After:

  ```ts
  msg(html`Hello <b>${getUsername()}</b>!`);
  ```

  Plain strings containing expressions must now be tagged with the new `str`
  tag. This allows lit-localize to access dynamic values at runtime.

  ```ts
  import {msg, str} from 'lit-localize';
  msg(str`Hello ${name}`);
  ```

- **[BREAKING]** The `lit-localize` CLI now must always take one of two
  commands: `extract` or `build`. Previously, both of these steps were always
  performed.

## Added

- Added `@lit/localize/lib/rollup.js` module that exports a `localeTransformers`
  function that can be used to integrate locale transformation into a Rollup
  build.

## [0.6.1] - 2020-12-09

### Fixed

- Fixed missing `.js` files from NPM package.

## [0.6.0] - 2020-12-09

### Changed

- **[BREAKING]** The signature for the `msg` function has changed:

  Before:

  ```ts
  msg(id: string, template: string|TemplateResult|Function, ...args: any[])
  ```

  After:

  ```ts
  msg(template: string|TemplateResult|Function, options?: {id?: string: args?: any[]})
  ```

- It is no longer necessary to provide a message `id`. When omitted, an id will
  be automatically generated from the string contents of the template.

### Fixed

- `// msgdesc` descriptions are now correctly emitted as XLIFF `<note>`
  elements, instead of crashing.

## [0.5.1] - 2020-11-09

### Fixed

- Fixed missing `localized-element.js` and `config.schema.json` NPM files.

## [0.5.0] - 2020-11-09

### Changed

- **[BREAKING]** NPM package moved from `lit-localize` to `@lit/localize`.

### Fixed

- Fixed `main` field of `package.json` so that it resolves to `lit-localize.js`
  instead of non-existent file.

## [0.4.0] - 2020-09-08

### Added

- Add optional `output.localeCodesModule` config file setting which generates a
  TypeScript module that exports `sourceLocale`, `targetLocales`, and
  `allLocales` using the locale codes from your config file. Use for keeping
  your config file and client config in sync.

### Changed

- **[BREAKING]** Published module paths have changed:
  `lib_client/index.js` -> `lit-localize.js`
  `lib_client/localized-element.js` -> `localized-element.js`

- When writing TypeScript, XLIFF, and XLB files, parent directories will now be
  created automatically, instead of erroring.

## [0.3.0] - 2020-08-25

### Changed

- **[BREAKING]** The `msg` function has moved from the generated `localization.ts`
  module to the static `lit-localize` module. `localization.ts` is no longer
  generated, and all of its exports have been replaced by a substantially
  different API (see the README).

- **[BREAKING]** The initial locale is no longer automatically initialized from the
  `locale` URL parameter. Initializing/changing locales is now user-controlled.

- **[BREAKING]** The `tsOut` config file option is replaced by the new `output`
  object, with `mode: "runtime"|"transform"`.

### Added

- Add `transform` output mode, which emits an entire copy of the program in each
  locale, where all `msg` calls have been replaced with the raw translated
  template for that locale.

- Add `configureLocalization` function, which returns a `setLocale` and `getLocale`
  object.

- Add `lit-localize-status` event, which is dispatched to `window` whenever a
  locale change starts, completes, or fails.

- Add `Localized` mixin for `LitElement` components, which automatically
  re-renders whenever the locale changes in `runtime` mode.

### Fixed

- Fix incorrect JSON schema error about `targetLocales` field not being a
  `string[]`.

- Fix bug where `html`templates could not contain`<!-- comments -->`. HTML
  comments are now preserved as placeholders, similar to other HTML markup.

## [0.2.3] - 2020-05-13

- Fix missing `<xliff>` element in XLIFF output.
- Formatting change to XML output (e.g. fewer line breaks).

## [0.2.2] - 2020-05-13

- Fix incorrect path resolution when loading XLB files.
- Fix errors relating to prettier xml plugin resolution.

## [0.2.1] - 2020-05-13

- Add missing dependencies (`fs-extra`, `typescript`, `prettier`).

## [0.2.0] - 2020-05-13

- Add support for the XLIFF localization interchange format:
  https://docs.oasis-open.org/xliff/v1.2/os/xliff-core.html

- [BREAKING] Replaced `xlbDir` config file property with `interchange` property.
  The interchange format is set with `interchange.format` (currently `xliff` or
  `xlb`), and other format-specific configuration is set in that object.

- Fix code generation bug where having more than one `targetLocale` would
  compile to invalid TypeScript (extra commas).

- Disable eslint warnings about camelcase for locale module imports like
  `zh_CN.ts`.

## [0.1.2] - 2020-05-09

- Add support for variables:

  ```typescript
  msg(
    'hello',
    (url: string, name: string) =>
      html`Hello ${name}, click <a href="${url}">here</a>!`,
    'World',
    'https://www.example.com/'
  );
  ```

## [0.1.1] - 2020-05-05

- Interpret paths as relative to the location of the config file, instead of
  relative to the current working directory.

- Move `@types` packages from `dependencies` to `devDependencies` if they aren't
  part of any API. In particular, this fixes an error where any package that depended
  on `lit-localize` would need to add `DOM` to their TypeScript `lib` settings for
  compatibility with `@types/xmldom`.

- Publish `.d.ts` files.

## [0.1.0] - 2020-05-05

- Initial release of `lit-localize`.
