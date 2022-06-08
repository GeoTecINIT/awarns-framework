# @AwarNS Framework

[![Build Status](https://dev.azure.com/GeoTecINIT/nativescript-plugins/_apis/build/status/GeoTecINIT.awarns-framework?branchName=main)](https://dev.azure.com/GeoTecINIT/nativescript-plugins/_build/latest?definitionId=5&branchName=main)

The AwarNS Framework (reads like Awareness *[əˈwernəs]* Framework), is a [NativeScript](https://nativescript.org/)-based application development framework created to simplify the development of mobile applications that need to react to the changes in the context of the phone, even when the app is not running. 

Unlike other similar frameworks, this has been developed with background execution in mind. No matter if the app is not open when the change occurs, if there is a listener for the change, a reaction to the change can be implemented and executed in the form of a developer-defined task. This means, the framework is completely background-first.

This is possible thanks to the well-tested [NativeScript Task Dispatcher](https://github.com/GeoTecINIT/nativescript-task-dispatcher) (NTD), which this framework uses at its [core](packages/core/README.md). Indeed, this framework takes the task definition and execution model offered by the NTD and extends it with primitives to ease the development of context-aware plugins and applications. Due to that the NTD only supports the Android platform for now, this framework shares this same limitation (**iOS is not supported**).

AwarNS sits as a modular layer on top of the NTD. This means that it is possible to build applications with just the minimum number of dependencies required by each application use case. Individual modules are available as a separate NPM packages. The modules can be classified in 4 categories, depending on their purpose: common, sense, analyze and act. The following figure depicts how the 4 categories are related:

![AwarNS Framework modules categories](img/overall-structure.png)

## Framework modules

The following tables lists the modules that come with the framework, grouped by the 4 categories: common, sense, analyze and act. However, the possibilities of the framework are not limited to the modules listed here. It is perfectly fine to develop internal (domain-specific) plugins to extend what is offered by the framework in any of these categories (see [Detailed usage and extension](#detailed-usage-and-extension)). Similarly, contributions of new, general-purpose, plugins are welcome (see [Contributing](#contributing)).

### Common

| Module                                        | Summary                                                                                                                                                                                                                                                                                          | Latest release                                                | Downloads                                             |
|-----------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|-------------------------------------------------------|
| [@awarns/core](packages/core/README.md)       | **Always install this plugin.** This will enable your app to configure and use the rest of the plugins. It is required to develop your own features on top of the framework. [[docs](packages/core/README.md)]                                                                                   | ![npm (scoped)](https://img.shields.io/npm/v/@awarns/core)    | ![npm](https://img.shields.io/npm/dm/@awarns/core)    |
| [@awarns/tracing](packages/tracing/README.md) | **(Optional plugin)** We suggest you to install and configure this plugin if your background execution workflow is not trivial (more than a couple of tasks). It facilitates some degree of debugging and profiling while the app is running in production. [[docs](packages/tracing/README.md)] | ![npm (scoped)](https://img.shields.io/npm/v/@awarns/tracing) | ![npm](https://img.shields.io/npm/dm/@awarns/tracing) |

### Sense

| Module                                                      | Summary                                                                                                                                                                                                                                    | Latest release                                                       | Downloads                                                    |
|-------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------|--------------------------------------------------------------|
| [@awarns/battery](packages/battery/README.md)               | Install this plugin if you want to obtain the remaining battery level of the device on a regular basis. [[docs](packages/battery/README.md)]                                                                                               | ![npm (scoped)](https://img.shields.io/npm/v/@awarns/battery)        | ![npm](https://img.shields.io/npm/dm/@awarns/battery)        |
| [@awarns/geolocation](packages/geolocation/README.md)       | Install this plugin if you want to access to the location of the phone, even in background, on a regular basis. [[docs](packages/geolocation/README.md)]                                                                                   | ![npm (scoped)](https://img.shields.io/npm/v/@awarns/geolocation)    | ![npm](https://img.shields.io/npm/dm/@awarns/geolocation)    |
| [@awarns/wifi](packages/wifi/README.md)                     | Install this plugin if you want to scan for nearby Wi-Fi access points (APs) on a regular basis, even in background. [[docs](packages/wifi/README.md)]                                                                                     | ![npm (scoped)](https://img.shields.io/npm/v/@awarns/wifi)           | ![npm](https://img.shields.io/npm/dm/@awarns/wifi)           |
| [@awarns/ble](packages/ble/README.md)                       | Install this plugin if you want to perform regular scans for nearby Bluetooth Low Energy devices, even if the app is not actively running (in background). [[docs](packages/ble/README.md)]                                                | ![npm (scoped)](https://img.shields.io/npm/v/@awarns/ble)            | ![npm](https://img.shields.io/npm/dm/@awarns/ble)            |
| [@awarns/human-activity](packages/human-activity/README.md) | Install and configure this plugin if your app can benefit from listening to updates in the activity being performed by the user (or object) carrying the phone (including background updates). [[docs](packages/human-activity/README.md)] | ![npm (scoped)](https://img.shields.io/npm/v/@awarns/human-activity) | ![npm](https://img.shields.io/npm/dm/@awarns/human-activity) |

### Analyze

| Module                                                      | Summary                                                                                                                                                                   | Latest release                                                       | Downloads                                                    |
|-------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------|--------------------------------------------------------------|
| [@awarns/geofencing](packages/geofencing/README.md)         | Install and configure this plugin if your app requires to be notified of changes in the position relative to an area of interest. [[docs](packages/geofencing/README.md)] | ![npm (scoped)](https://img.shields.io/npm/v/@awarns/geofencing)     | ![npm](https://img.shields.io/npm/dm/@awarns/geofencing)     |

### Act

| Module                                                      | Description                                                                                                                                                                                                                                                                                                              | Latest release                                                       | Downloads                                                    |
|-------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------|--------------------------------------------------------------|
| [@awarns/persistence](packages/persistence/README.md)       | Install and configure this plugin if you want to locally store and remotely synchronize the information resulting of an observation or an analysis conducted by the framework. This can be used to develop your own stateful tasks and plugins in the context of the framework. [[docs](packages/persistence/README.md)] | ![npm (scoped)](https://img.shields.io/npm/v/@awarns/persistence)    | ![npm](https://img.shields.io/npm/dm/@awarns/persistence)    |
| [@awarns/notifications](packages/notifications/README.md)   | Install and configure this plugin if you want to notify the user about some event detected by the framework or your own developed tasks. This contains also some basic constructs to collect information from the user, ingest it and act upon it. [[docs](packages/notifications/README.md)]                            | ![npm (scoped)](https://img.shields.io/npm/v/@awarns/notifications)  | ![npm](https://img.shields.io/npm/dm/@awarns/notifications)  |

## Quickstart

WIP

## Detailed usage and extension

For specific usage and extension instructions, please read [core](packages/core/README.md)'s package README file. For specific usage instructions of each one of the plugin modules, please, refer to the corresponding module README file (use the links from the table above).

## Contributing

### Setting up the development environment

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

### How to add a new package to workspace?

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

### How to focus on just 1 package to develop in isolation

```
npm start
```

- Choose the focus commands for the package you wish to focus on and hit enter.
- All the demo app's will be updated to isolate that 1 package and for supported IDE's (currently VS Code), the source code will also become isolated in the workspace.

Note: _good to always clean the demo you plan to run after focusing. (You can clean any demo from `npm start` as well)_

### How to publish packages?

```
npm run publish-packages
```

- You will be prompted for the package names to publish. Leaving blank and hitting enter will publish them all.
- You will then be prompted for the version to use. Leaving blank will auto bump the patch version (it also handles prerelease types like alpha, beta, rc, etc. - It even auto tags the corresponding prelease type on npm).
- You will then be given a brief sanity check 🧠😊

## Framework maintainers

<a href="https://github.com/agonper" title="Alberto González Pérez">
  <img src="https://avatars3.githubusercontent.com/u/10727467?s=120" alt="Alberto González Pérez" width="120"/>
</a>
<a href="https://github.com/matey97" title="Miguel Matey Sanz">
  <img src="https://avatars3.githubusercontent.com/u/25453537?s=120" alt="Miguel Matey Sanz" width="120"/>
</a>

## Acknowledgements

The development of this plugin has been possible thanks to the Spanish Government. Concretely, the Spanish Ministry of Education, Culture and Sports (grant references FPU17/03832 and FPU19/05352), and the Spanish Ministry of Science and Innovation's programme: "Programa Estatal de I+D+i Orientada a los Retos de la Sociedad" (references RTI2018-099939-BI-00 and PID2020-120250RB-100) [MCIN/AEI/10.13039/501100011033].

This project is an open-sourced excerpt coming from [SyMptOMS](http://geotec.uji.es/projects/symptoms/) and SyMptOMS-ET projects at [Geotec](http://geotec.uji.es/).
