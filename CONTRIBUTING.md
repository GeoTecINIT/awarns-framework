# Contributing

## Setting up the development environment

What you'll need:
- NodeJS 16+
- NativeScript 8+
- Yarn package manager [installed/enabled](https://yarnpkg.com/getting-started/install)

Upon meeting these requirements, run:

```bash
npm run setup
npm start
```

In general, when in doubt with what to do, just `npm start`.

## How to add a new package to workspace?

```bash
npm run add
```

At the prompt, enter the name of the new package.

- This adds a plugin harness in `packages` with the necessary boilerplate to just start developing
- Updates all demo app flavors to support demoing the new package
- Adds shared code in `tools/demo` where you can write demo code **once** and share across all demo flavors
- Updates build tooling to support the new package
- Updates the `npm start` interactive display
- Updates the README here to list the new package

**Very important**, after generating the new package, do the following:

- Make sure the order of the packages in the [`tsconfig.base.json`](tsconfig.base.json) remains unchanged with respect to its previous state. **Do not place** your plugin in alphabetic order, **place it** right after all its dependencies. This is important, otherwise the demo app won't compile.
- Check the tables from above where the different plugins of the framework are classified in the four categories. Pick a plugin from there which is conceptually similar (feature-wise) to the plugin you want to develop.
- Follow the same internal structure defined by the plugin you've picked.
- If you need to depend on one or more framework plugins update your plugin's `tsconfig.json` file to include the reference(s) to the framework dependencies. Check the `tsconfig.json` file of existing plugins when in doubt. A good example with many dependencies is the geofencing's plugin [tsconfig.json](packages/geofencing/tsconfig.json).
- Move the new entry that the plugin generation tool will have generated in this README to the most apropiate table above.
- Open a PR.

## How to focus on just 1 package to develop in isolation

```
npm start
```

- Choose the focus commands for the package you wish to focus on and hit enter.
- All the demo app's will be updated to isolate that 1 package and for supported IDE's (currently VS Code), the source code will also become isolated in the workspace.

> **Note**: _good to always clean the demo you plan to run after focusing. (You can clean any demo from `npm start` as well)_

## How to publish packages?

```
npm run publish-packages
```

- You will be prompted for the package names to publish. Leaving blank and hitting enter will publish them all.
- You will then be prompted for the version to use. Leaving blank will auto bump the patch version (it also handles prerelease types like alpha, beta, rc, etc. - It even auto tags the corresponding prelease type on npm).
- You will then be given a brief sanity check 🧠😊
