# Changelog

## 0.6.3

### Patch Changes

- [#2732](https://github.com/lit/lit/pull/2732) [`3e181bcb`](https://github.com/lit/lit/commit/3e181bcb3d969775eda799fd6fcae1ead843225b) - Enforce use of file extensions in imports. Fixes an issue with older TypeScript compilers.

## 0.6.2

### Patch Changes

- [#2692](https://github.com/lit/lit/pull/2692) [`c41a92c9`](https://github.com/lit/lit/commit/c41a92c96eeb8c2db4875c94c2eabcd512e044c4) - Fix issue with placing expressions as html attribute values in transform mode

## 0.6.1

### Patch Changes

- [#2561](https://github.com/lit/lit/pull/2561) [`6be4ac29`](https://github.com/lit/lit/commit/6be4ac29d7fe786790471cd3c67217bc7865b4cb) - Reorder xliff `<note>` elements to follow `<target>` elements to be OASIS-compliant

- Updated dependencies [[`2c9d0008`](https://github.com/lit/lit/commit/2c9d00082a416457ee02107013dd4925bf589628)]:
  - lit@2.2.0

## 0.6.0

### Minor Changes

- [#2405](https://github.com/lit/lit/pull/2405) [`4a4afa7b`](https://github.com/lit/lit/commit/4a4afa7bd394938102d8604ec6aff2e9eaf17c88) - **BREAKING** Update analysis to consider messages with same id **and** description to be identical (but no longer checks for expressions to be same) and improve error message on finding incompatible duplicates.

  `lit-localize extract` will now error if multiple messages had the same text but different `desc` option. Be sure to add the same `desc` option for these messages to be considered the same translatable message or add different `id` options to differentiate them.

- [#2405](https://github.com/lit/lit/pull/2405) [`4a4afa7b`](https://github.com/lit/lit/commit/4a4afa7bd394938102d8604ec6aff2e9eaf17c88) - **BREAKING** (XLB format only) Add index to `name` attribute for `<ph>` tags for tracking placeholder locations.

  XLB format users should run `lit-localize extract` to regenerate the `.xlb` file for the source locale and make sure the `<ph>` tags in other locale files have matching `name` attribute values to that of the newly generated source file.

### Patch Changes

- [#2402](https://github.com/lit/lit/pull/2402) [`a638841d`](https://github.com/lit/lit/commit/a638841d8ba76e43cf83a2516e2cfc7a9c2ce27e) - Trivial: reformat markdown files

## 0.5.0

### Minor Changes

- [#2275](https://github.com/lit/lit/pull/2275) [`97f4a3f8`](https://github.com/lit/lit/commit/97f4a3f8f6cd14a8b8ded90ca814335b00ac9a94) - **BREAKING** Placeholders containing HTML markup and dynamic expressions are now
  represented in XLIFF as `<x>` tags instead of `<ph>` tags.

  To preserve the previous behavior of using `<ph>` tags, update your JSON config
  file and set `interchange.placeholderStyle` to `"ph"`:

  ```json
  {
    "interchange": {
      "format": "xliff",
      "placeholderStyle": "ph"
    }
  }
  ```

### Patch Changes

- [#2286](https://github.com/lit/lit/pull/2286) [`52c4f32e`](https://github.com/lit/lit/commit/52c4f32e7aa67120364a9c64a1696909c711ff88) - Update README to point to new full docs at lit.dev

## 0.4.0

### Minor Changes

- [#2188](https://github.com/lit/lit/pull/2188) [`9fc5a039`](https://github.com/lit/lit/commit/9fc5a039dc2b701ac9dbaaea278668172915c80b) - Added output.outputDir setting for transform mode. Required if tsConfig is not specified.

* [#2188](https://github.com/lit/lit/pull/2188) [`9fc5a039`](https://github.com/lit/lit/commit/9fc5a039dc2b701ac9dbaaea278668172915c80b) - Add `inputFiles` field, and make `tsConfig` field optional when `inputFiles` is specified. If both are set, `inputFiles` takes precedence over the input files from `tsConfig`. When `tsConfig` is not specified, a default config is used that will include `.js` files.

### Patch Changes

- [#2188](https://github.com/lit/lit/pull/2188) [`9fc5a039`](https://github.com/lit/lit/commit/9fc5a039dc2b701ac9dbaaea278668172915c80b) - Fixed the `$schema` property that is automatically added to @lit/localize-tools
  config files. It was previously pointing at the incorrect file.
- Updated dependencies [[`9fc5a039`](https://github.com/lit/lit/commit/9fc5a039dc2b701ac9dbaaea278668172915c80b), [`9fc5a039`](https://github.com/lit/lit/commit/9fc5a039dc2b701ac9dbaaea278668172915c80b)]:
  - @lit/localize@0.11.0

## 0.3.7

### Patch Changes

- [#2113](https://github.com/lit/lit/pull/2113) [`5b2f3642`](https://github.com/lit/lit/commit/5b2f3642ff91931b5b01f8bdd2ed98aba24f1047) - Dependency upgrades including TypeScript 4.4.2

* [#2060](https://github.com/lit/lit/pull/2060) [`dddbe0c7`](https://github.com/lit/lit/commit/dddbe0c7627a7c1f750da69c3200d373155b1d74) - Update TypeScript

* Updated dependencies [[`15a8356d`](https://github.com/lit/lit/commit/15a8356ddd59a1e80880a93acd21fadc9c24e14b), [`5fabe2b5`](https://github.com/lit/lit/commit/5fabe2b5ae4ab8fba9dc2d23a69105d32e4c0705), [`5b2f3642`](https://github.com/lit/lit/commit/5b2f3642ff91931b5b01f8bdd2ed98aba24f1047), [`5fabe2b5`](https://github.com/lit/lit/commit/5fabe2b5ae4ab8fba9dc2d23a69105d32e4c0705), [`5fabe2b5`](https://github.com/lit/lit/commit/5fabe2b5ae4ab8fba9dc2d23a69105d32e4c0705), [`0312f3e5`](https://github.com/lit/lit/commit/0312f3e533611eb3f4f9381594485a33ad003b74)]:
  - lit@2.0.0
  - @lit/localize@0.10.4

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

<!-- ## Unreleased -->

## [0.3.6] - 2021-07-28

## Fixed

- Escaped `<`, `>`, and `&` characters in HTML text content are now preserved
  when generating runtime & transform mode output. Previously they sometimes
  were emitted unescaped, generating invalid markup.

## [0.3.5] - 2021-07-14

## Added

- Added `configureSsrLocalization` in `@lit/localize-tools/lib/ssr.js` which
  allows for safe concurrent rendering of localized templates with
  `@lit-labs/ssr` or other renderers using
  [`AsyncLocalStorage`](https://nodejs.org/api/async_hooks.html#async_hooks_class_asynclocalstorage).

  ```ts
  import {configureSsrLocalization} from '@lit/localize-tools/lib/ssr.js';
  import {render} from '@lit-labs/ssr/lib/render-with-global-dom-shim.js';
  import {html} from 'lit';

  const {withLocale} = await configureSsrLocalization({
    sourceLocale: 'en',
    targetLocales: ['es', 'nl'],
    loadLocale: (locale) => import(`./locales/${locale}.js`)),
  });

  const handleHttpRequest = (req, res) => {
    const locale = localeForRequest(req);
    withLocale(locale, async () => {
      // Any async work can happen in this function, and the request's locale
      // context will be safely preserved for every msg() call.
      await doSomeAsyncWork();
      for (const chunk of render(msg(html`Hello World`))) {
        res.write(chunk);
      }
      res.end();
    });
  };
  ```

## [0.3.4] - 2021-05-18

### Fixed

- Fix `Cannot find module '..../@lit/localize/internal/id-generation.js'` error
  by bumping `@lit/localize` dependency.

## [0.3.3] - 2021-05-18

### Fixed

- Fix bugs relating to expression values being substituted in duplicate or
  incorrect order in localized templates.

- Fix bug relating to `START_LIT_LOCALIZE_EXPR_` strings appearing inside
  localized templates.

## [0.3.2] - 2021-05-07

### Fixed

- Fixed missing `str` tag in generated translation templates.

## [0.3.1] - 2021-04-20

- Update dependencies.

## [0.3.0] - 2021-04-19

### Changed

- **[BREAKING]** Lit dependency upgraded to v2.

- **[BREAKING]** Replaces `Localized` mixin transform with `@localized`
  decorator and `updateWhenLocaleChanges` transforms.

## [0.2.1] - 2021-04-02

### Changed

- XLIFF file headers have been simplified to:

```xml
<xliff version="1.2" xmlns="urn:oasis:names:tc:xliff:document:1.2">
```

## [0.2.0] - 2021-03-30

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

## [0.1.1] - 2021-03-30

### Changed

- Bumped dependency versions for `xmldom` and `@lit/localize`

## [0.1.0] - 2021-03-24

### Changed

- Initial release of `@lit/localize-tools` package. This new package provides
  the `lit-localize` binary, while `@lit/localize` continues to provide the
  browser library (`msg`, `LocalizedElement`, etc.).

- **BREAKING** `lit-localize` now uses JS modules instead of CommonJS, so it
  requires Node 14 or higher.
