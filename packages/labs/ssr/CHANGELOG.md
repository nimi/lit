# Change Log

## 2.1.0

### Minor Changes

- [#2662](https://github.com/lit/lit/pull/2662) [`1d51ed8b`](https://github.com/lit/lit/commit/1d51ed8b7eb991e151759f9dbf8643b4ed781457) - Adds HTMLElement.shadowRoot property to dom-shim.

## 2.0.4

### Patch Changes

- [#2580](https://github.com/lit/lit/pull/2580) [`b8ceafb0`](https://github.com/lit/lit/commit/b8ceafb00651b9a4b5021ac5a3d1d960ceb10e6b) - Handle rendering of null and undefined element attribute values

## 2.0.3

### Patch Changes

- [#2510](https://github.com/lit/lit/pull/2510) [`937388e2`](https://github.com/lit/lit/commit/937388e247a26ee201f58be1c4fa536635b2fc5c) - Replace window proxy with reference to globalThis in global DOM shim

## 2.0.2

### Patch Changes

- [#2488](https://github.com/lit/lit/pull/2488) [`28d856e3`](https://github.com/lit/lit/commit/28d856e3d737bf0a9f7930d2349671efdd1c0bbb) - Fix typo in README import statements.

- [#2456](https://github.com/lit/lit/pull/2456) [`0b774e0e`](https://github.com/lit/lit/commit/0b774e0e9e8b42bf28ea6107ebd7062d3c0a36ab) - Fix TypeScript typing issues when using @lit-labs/ssr. Adds a dependency on @types/node for URL, which is part of the public ModuleLoader API. Adds a new VmModule interface for the ModuleLoader API, whose return type was previously completely missing.

- [#2480](https://github.com/lit/lit/pull/2480) [`c9022d53`](https://github.com/lit/lit/commit/c9022d53c62a372af5447f58cafbb2a7866b6d70) - Fix bug which could cause errors resolving lit modules with isolated vm modules.

- [#2406](https://github.com/lit/lit/pull/2406) [`5d77f893`](https://github.com/lit/lit/commit/5d77f893c6debb3fb09f2fb81b99ac2aadefe09c) - [@lit-labs/ssr] Fix typo in ssr readme. Fixes #2381

## 2.0.1

### Patch Changes

- [#2386](https://github.com/lit/lit/pull/2386) [`734d8890`](https://github.com/lit/lit/commit/734d88909eb285d935cb583c016242d634fa2c75) - Unpin SSR's dependency on reactive-element

## 2.0.0

### Major Changes

- [#2288](https://github.com/lit/lit/pull/2288) [`b42f6f0f`](https://github.com/lit/lit/commit/b42f6f0f8b18e7efade96ce32a045374fe10530c) - Refactor the import-module into a class-based ModuleLoader API. Adds a module cache that tracks dependencies between modules.

### Minor Changes

- [#2294](https://github.com/lit/lit/pull/2294) [`dcab56b0`](https://github.com/lit/lit/commit/dcab56b0eeef6e05969c3682d3275a30ddf18d97) - Add customElementRendered callback to RenderInfo so that callers can know what elements were rendered.

### Patch Changes

- [#2346](https://github.com/lit/lit/pull/2346) [`53e64286`](https://github.com/lit/lit/commit/53e642868d2f06429dfd9bb33e89e2baa3b45b64) - Remove dependency on escape-html (which is not an ES module)

* [#2344](https://github.com/lit/lit/pull/2344) [`bc46ddd6`](https://github.com/lit/lit/commit/bc46ddd669047e2ce592a680c14f09b7681132e3) - Fix bug where static attributes did not render for unknown elements

- [#2345](https://github.com/lit/lit/pull/2345) [`4edf4f3b`](https://github.com/lit/lit/commit/4edf4f3b93d41c24a79814c303abc7281449d44b) - Remove unnecessary dependencies: `koa`, `koa-node-resolve`, `koa-static`,
  `@webcomponents/template-shadowroot`

* [#2334](https://github.com/lit/lit/pull/2334) [`93d8751a`](https://github.com/lit/lit/commit/93d8751a28237521380ddd6b2a3c1294962ba84e) - add tests for reflected properties

* Updated dependencies [[`08e7fc56`](https://github.com/lit/lit/commit/08e7fc566894d1916dc768c0843fce962ca4d6d4), [`fcc2b3d0`](https://github.com/lit/lit/commit/fcc2b3d0054e69e6f76588ea9f440117b6d0deed), [`eb5c5d2b`](https://github.com/lit/lit/commit/eb5c5d2b2159dcd8b2321fa9a221b8d56d127a11), [`49ecf623`](https://github.com/lit/lit/commit/49ecf6239033e9578184d46116e6b89676d091db), [`26e3fb7b`](https://github.com/lit/lit/commit/26e3fb7ba1d3ef778a9862ff73374802b4b4eb2e), [`d319cf5f`](https://github.com/lit/lit/commit/d319cf5fde1c2b70185ee9a6252067ed0edaf2fc), [`1d563e83`](https://github.com/lit/lit/commit/1d563e830c02a2d1a22e1e939f1ace971b1d1ae7), [`221cb0a9`](https://github.com/lit/lit/commit/221cb0a90787631dcc867959de19febd2ebd3fd0)]:
  - @lit/reactive-element@1.1.0
  - lit@2.1.0
  - lit-html@2.1.0
  - lit-element@3.1.0

## 1.0.0

### Patch Changes

- [#2034](https://github.com/lit/lit/pull/2034) [`5768cc60`](https://github.com/lit/lit/commit/5768cc604dc7fcb2c95165399180179d406bb257) - Reverts the change in Lit 2 to pause ReactiveElement's update cycle while the element is disconnected. The update cycle for elements will now run while disconnected as in Lit 1, however AsyncDirectives must now check the `this.isConnected` flag during `update` to ensure that e.g. subscriptions that could lead to memory leaks are not made when AsyncDirectives update while disconnected.

* [#2113](https://github.com/lit/lit/pull/2113) [`5b2f3642`](https://github.com/lit/lit/commit/5b2f3642ff91931b5b01f8bdd2ed98aba24f1047) - Dependency upgrades including TypeScript 4.4.2

- [#2141](https://github.com/lit/lit/pull/2141) [`d8ff5901`](https://github.com/lit/lit/commit/d8ff590120c2ac4830a1e4917a57a839c8011e39) - Add `LICENSE` files to public packages without one.

* [#2120](https://github.com/lit/lit/pull/2120) [`2043eb0f`](https://github.com/lit/lit/commit/2043eb0fc245f90620ec563aa7df90d7e3a2fa41) - Don't assign DOM shim window.global (and hence globalThis.global) to window

  This means that globalThis.global will retain its Node built-ins, whereas
  before it would lose anything we didn't explicitly set on window.

  Fixes https://github.com/lit/lit/issues/2118

- [#1881](https://github.com/lit/lit/pull/1881) [`a83f616`](https://github.com/lit/lit/commit/a83f616c493b745eb74f19db727731ae5a1f4e49) - Add demo for using global DOM shim instead of isolated VM contexts

* [#2077](https://github.com/lit/lit/pull/2077) [`88d8608f`](https://github.com/lit/lit/commit/88d8608fedb8817edea6ca106f3cf49ed5b896e1) - fixed import in README

- [#1972](https://github.com/lit/lit/pull/1972) [`a791514b`](https://github.com/lit/lit/commit/a791514b426b790de2bfa4c78754fb62815e71d4) - Properties that must remain unminified are now compatible with build tools other than rollup/terser.

- Updated dependencies [[`ff0d1556`](https://github.com/lit/lit/commit/ff0d15568fe79019ebfa6b72b88ba86aac4af91b), [`b3121ab7`](https://github.com/lit/lit/commit/b3121ab7ce71d6947d1081995e962806f32bc5ea), [`15a8356d`](https://github.com/lit/lit/commit/15a8356ddd59a1e80880a93acd21fadc9c24e14b), [`d6b385e3`](https://github.com/lit/lit/commit/d6b385e3e4ae2ff23c1ecc3164fa7bb1a20c7dd5), [`5768cc60`](https://github.com/lit/lit/commit/5768cc604dc7fcb2c95165399180179d406bb257), [`8189f094`](https://github.com/lit/lit/commit/8189f09406a5ee2f2c7351884486944fd46e1d5b), [`b4bd9f7c`](https://github.com/lit/lit/commit/b4bd9f7c7d036da8667cbd7075af4f6d6f27bc32), [`69389958`](https://github.com/lit/lit/commit/69389958ab41b2ad3074fd86926ed18dc9968302), [`5fabe2b5`](https://github.com/lit/lit/commit/5fabe2b5ae4ab8fba9dc2d23a69105d32e4c0705), [`52a47c7e`](https://github.com/lit/lit/commit/52a47c7e25d71ff802083ca9b0751724efd3a4f4), [`5b2f3642`](https://github.com/lit/lit/commit/5b2f3642ff91931b5b01f8bdd2ed98aba24f1047), [`08f60328`](https://github.com/lit/lit/commit/08f60328abf83113fe82c9d8ee43dc71f10a9b77), [`7adfbb0c`](https://github.com/lit/lit/commit/7adfbb0cd32a7eab82551aa6c9d1434e7c4b563e), [`d8ff5901`](https://github.com/lit/lit/commit/d8ff590120c2ac4830a1e4917a57a839c8011e39), [`5fabe2b5`](https://github.com/lit/lit/commit/5fabe2b5ae4ab8fba9dc2d23a69105d32e4c0705), [`24feb430`](https://github.com/lit/lit/commit/24feb4306ec3ddf2996c678a266a211b52f6aff2), [`5fabe2b5`](https://github.com/lit/lit/commit/5fabe2b5ae4ab8fba9dc2d23a69105d32e4c0705), [`5fabe2b5`](https://github.com/lit/lit/commit/5fabe2b5ae4ab8fba9dc2d23a69105d32e4c0705), [`0b4d6eda`](https://github.com/lit/lit/commit/0b4d6eda5220aeb53abe250217d70dcb8f45fe43), [`13d137e9`](https://github.com/lit/lit/commit/13d137e96456e8243fa5e3dbfbaf8d8e510016a7), [`f05be301`](https://github.com/lit/lit/commit/f05be301e36fce93ae887007c0bdd328e5434225), [`01353317`](https://github.com/lit/lit/commit/013533178ded7fb5e533e15f6dc982de25d12b94), [`a48f39c8`](https://github.com/lit/lit/commit/a48f39c8d5872dbc9a19a9bc72b22692950071f5), [`5fabe2b5`](https://github.com/lit/lit/commit/5fabe2b5ae4ab8fba9dc2d23a69105d32e4c0705), [`724a9aab`](https://github.com/lit/lit/commit/724a9aabe263fb9dafee073e74de50a1aeabbe0f), [`0d703bfb`](https://github.com/lit/lit/commit/0d703bfbc9eb515a6bba8bf5ca608bbcd60fee98), [`56e8efd3`](https://github.com/lit/lit/commit/56e8efd3fc654396421e7024f82f0eac9d2c4d33), [`0312f3e5`](https://github.com/lit/lit/commit/0312f3e533611eb3f4f9381594485a33ad003b74), [`e5667d66`](https://github.com/lit/lit/commit/e5667d66f4da58e74206fdef526b1c21a6e45925), [`cc5c3a09`](https://github.com/lit/lit/commit/cc5c3a09a150bd19ce5445333dfb3799d33e03de), [`662209c3`](https://github.com/lit/lit/commit/662209c370d2f5f58cb2f24e558125f91baeebd0), [`043a16fb`](https://github.com/lit/lit/commit/043a16fbfbd55c71fbee399691537765277694ea), [`761375ac`](https://github.com/lit/lit/commit/761375ac9ef28dd0ba8a1f9363aaf5f0df725205), [`a791514b`](https://github.com/lit/lit/commit/a791514b426b790de2bfa4c78754fb62815e71d4), [`5fabe2b5`](https://github.com/lit/lit/commit/5fabe2b5ae4ab8fba9dc2d23a69105d32e4c0705)]:
  - lit-html@2.0.0
  - @lit-labs/ssr-client@1.0.0
  - lit@2.0.0
  - lit-element@3.0.0

## 1.0.0-rc.3

### Patch Changes

- [#2113](https://github.com/lit/lit/pull/2113) [`5b2f3642`](https://github.com/lit/lit/commit/5b2f3642ff91931b5b01f8bdd2ed98aba24f1047) - Dependency upgrades including TypeScript 4.4.2

* [#2120](https://github.com/lit/lit/pull/2120) [`2043eb0f`](https://github.com/lit/lit/commit/2043eb0fc245f90620ec563aa7df90d7e3a2fa41) - Don't assign DOM shim window.global (and hence globalThis.global) to window

  This means that globalThis.global will retain its Node built-ins, whereas
  before it would lose anything we didn't explicitly set on window.

  Fixes https://github.com/lit/lit/issues/2118

- [#2077](https://github.com/lit/lit/pull/2077) [`88d8608f`](https://github.com/lit/lit/commit/88d8608fedb8817edea6ca106f3cf49ed5b896e1) - fixed import in README

## 1.0.0-rc.2

### Patch Changes

- [#2034](https://github.com/lit/lit/pull/2034) [`5768cc60`](https://github.com/lit/lit/commit/5768cc604dc7fcb2c95165399180179d406bb257) - Reverts the change in Lit 2 to pause ReactiveElement's update cycle while the element is disconnected. The update cycle for elements will now run while disconnected as in Lit 1, however AsyncDirectives must now check the `this.isConnected` flag during `update` to ensure that e.g. subscriptions that could lead to memory leaks are not made when AsyncDirectives update while disconnected.

* [#1881](https://github.com/lit/lit/pull/1881) [`a83f616`](https://github.com/lit/lit/commit/a83f616c493b745eb74f19db727731ae5a1f4e49) - Add demo for using global DOM shim instead of isolated VM contexts

- [#1972](https://github.com/lit/lit/pull/1972) [`a791514b`](https://github.com/lit/lit/commit/a791514b426b790de2bfa4c78754fb62815e71d4) - Properties that must remain unminified are now compatible with build tools other than rollup/terser.

- Updated dependencies [[`ff0d1556`](https://github.com/lit/lit/commit/ff0d15568fe79019ebfa6b72b88ba86aac4af91b), [`5768cc60`](https://github.com/lit/lit/commit/5768cc604dc7fcb2c95165399180179d406bb257), [`69389958`](https://github.com/lit/lit/commit/69389958ab41b2ad3074fd86926ed18dc9968302), [`5fabe2b5`](https://github.com/lit/lit/commit/5fabe2b5ae4ab8fba9dc2d23a69105d32e4c0705), [`52a47c7e`](https://github.com/lit/lit/commit/52a47c7e25d71ff802083ca9b0751724efd3a4f4), [`5fabe2b5`](https://github.com/lit/lit/commit/5fabe2b5ae4ab8fba9dc2d23a69105d32e4c0705), [`5fabe2b5`](https://github.com/lit/lit/commit/5fabe2b5ae4ab8fba9dc2d23a69105d32e4c0705), [`5fabe2b5`](https://github.com/lit/lit/commit/5fabe2b5ae4ab8fba9dc2d23a69105d32e4c0705), [`f05be301`](https://github.com/lit/lit/commit/f05be301e36fce93ae887007c0bdd328e5434225), [`5fabe2b5`](https://github.com/lit/lit/commit/5fabe2b5ae4ab8fba9dc2d23a69105d32e4c0705), [`56e8efd3`](https://github.com/lit/lit/commit/56e8efd3fc654396421e7024f82f0eac9d2c4d33), [`662209c3`](https://github.com/lit/lit/commit/662209c370d2f5f58cb2f24e558125f91baeebd0), [`a791514b`](https://github.com/lit/lit/commit/a791514b426b790de2bfa4c78754fb62815e71d4), [`5fabe2b5`](https://github.com/lit/lit/commit/5fabe2b5ae4ab8fba9dc2d23a69105d32e4c0705)]:
  - lit-html@2.0.0-rc.4

---

Changes below were based on the [Keep a Changelog](http://keepachangelog.com/) format. All changes above are generated automatically by [Changesets](https://github.com/atlassian/changesets).

---

<!--
   PRs should document their user-visible changes (if any) in the
   Unreleased section, uncommenting the header as necessary.
-->

<!-- ## [x.y.z] - YYYY-MM-DD -->
<!-- ## Unreleased -->
<!-- ### Changed -->
<!-- ### Added -->
<!-- ### Removed -->
<!-- ### Fixed -->

## 1.0.0-rc.1 - 2021-04-20

### Added

- Added `render-global` module for non-sandboxed rendering.

- Added `elementRenderers` option to `RenderInfo`, along with `static matchesClass()` method to `ElementRenderer`, allowing the default renderer(s) to be overridden.

- Added `defer-hydration` attribute handling, which helps coordinate ordered wakeup of custom elements during hydration.
