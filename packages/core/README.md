# @awarns/core
![npm (scoped)](https://img.shields.io/npm/v/@awarns/core)
![npm](https://img.shields.io/npm/dm/@awarns/core)

>**This is the only plugin required for the other plugins to work.** 

This plugin comes as a wrapper on top of the [NativeScript Task Dispatcher](https://github.com/GeoTecINIT/nativescript-task-dispatcher) (NTD), extending it with utilities which ease the development of context-aware applications in several ways:
- A common model to represent entities which represent changes over time, the [Record](internal/entities/record.ts) class. This is meant to be extended and used to encapsulate the information produced by the built-in framework tasks and the developer-defined tasks created using the framework.
- Tools to develop your own data providers, either obtaining internal or external data.
- Predefined tasks to make use of your providers. These offer a unified data acquisition process for all the built-in or custom components that can make use of them.
- Reexports everything offered by the NTD, through a single interface.
- Utilities to facilitate logging, testing, creating unique identifiers, working with strings or serializing dates.

In essence, the main goal of this plugin is to give access to the task model defined by the NTD. And extends it with primitives for the development of data providers and data-providing tasks. It also offers a base model (Record) to be extended by any entity produced or consumed by built-in or custom framework tasks. Here, by extending the Record model, time-consuming tasks, like persistence, become greatly simplified.

Installing the core package only requires one command line instruction:

```bash
ns plugin add @awarns/core
```

## Usage

// TODO

## License

Apache License Version 2.0
