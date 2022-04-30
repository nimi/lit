# @lit-labs/eleventy-plugin-lit

## 0.2.1

### Patch Changes

- [#2797](https://github.com/lit/lit/pull/2797) [`5ae56da2`](https://github.com/lit/lit/commit/5ae56da2c76e9852af26fe387c7c0e689afc76fa) - Fix worker mode by ensuring worker file is run as ES module.

## 0.2.0

### Minor Changes

- [#2591](https://github.com/lit/lit/pull/2591) [`a01ffdf6`](https://github.com/lit/lit/commit/a01ffdf6e58ea1c5269579215a442a53b04040f6) - Add option to use worker threads instead of vm modules for isolated rendering and set this as the default mode which removes the need to use the `--experimental-vm-modules` flag. The vm mode is still available via config option and will require the flag.

  Potentially breaking due to the way Node's worker threads reads .js files as modules. See [here](https://github.com/lit/lit/tree/main/packages/labs/eleventy-plugin-lit#configure-component-modules) for information on configuring components in worker mode.

### Patch Changes

- [#2637](https://github.com/lit/lit/pull/2637) [`3cff5a21`](https://github.com/lit/lit/commit/3cff5a2174abdd453b973ba42f0abe8fa343840f) - Update README to clarify using .cjs extension for eleventy config

## 0.1.1

### Patch Changes

- [#2551](https://github.com/lit/lit/pull/2551) [`3e3aa21d`](https://github.com/lit/lit/commit/3e3aa21db9cdd1cad3ed8c95511684b2d7241892) - Fix issue related to "request for <module> is not yet fulfilled" errors when loading multiple component modules.

## 0.1.0

### Minor Changes

- [#2499](https://github.com/lit/lit/pull/2499) [`3efb256d`](https://github.com/lit/lit/commit/3efb256dc1988f14c65d2bdfd060bdcfcd09f97a) - Initial release of @lit-labs/eleventy-plugin-lit
