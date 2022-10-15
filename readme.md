# TSlib
This is a very basic Javascript/Typescript core library (understand: no React/Vue/Svelte/etc.) that bundles into a UMD module as well as a ES module and that exports types, so that it can be imported to a Typescript codebase.

# What is it using?
- [Rollup](https://rollupjs.org/guide/en/)
- [Esbuild](https://esbuild.github.io/)
- [Terser](https://terser.org/)
- [Typescript](https://www.typescriptlang.org/)

# How to make it yours?
- In `package.json`, find/replace all the occurances of `tslib` to your lib name
- Remove all the files in the `dist` folder (keep `dist` empty)
- Add your own code in src
- Update/remove the examples in the folder `examples`