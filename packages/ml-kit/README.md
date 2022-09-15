# @awarns/ml-kit
[![npm (scoped)](https://img.shields.io/npm/v/@awarns/ml-kit)](https://www.npmjs.com/package/@awarns/ml-kit)
[![npm](https://img.shields.io/npm/dm/@awarns/ml-kit)](https://www.npmjs.com/package/@awarns/ml-kit)

This module allows to execute [TensorFlow Lite](https://www.tensorflow.org/lite) machine learning models embedded in the mobile device, 
which is useful to make predictions based on some input data. 

Supported models architectures are *Convolutional Neural Networks* (CNN) and *Multilayer Perceptrons* (MLP), both for classification
and regression problems.

Install the plugin using the following command line instruction:
```bash
ns plugin add @awarns/ml-kit
```

## Usage
After installing this plugin, you will have access to two tasks to perform classification or regression on the provided input data. It also provides an
API to list the models embedded in the application.
But before using the plugin, you must meet the following requirements regarding the machine learning model:

- Have a TensorFlow Lite machine learning model (*\*.tflite*) of the supported architectures (CNN or MLP). Classification models must have
  [metadata](https://www.tensorflow.org/lite/models/convert/metadata) (i.e., name, version, author, etc...) and an [associated labels file](https://www.tensorflow.org/lite/models/convert/metadata#pack_metadata_and_associated_files_into_the_model)
  with each label in a row of the file. While regression models don't have to include an associated labels file, it's recommended to add the metadata with the information of the model.
- Place your TensorFlow Lite models in a folder named *ml-models* inside your app's *src* folder (i.e., same level as {*app*|*main*}.*ts*).
  - The model file name **must follow** the next format: {model_name}-{cnn|mlp}-\[version\].tflite. The file name must contain a name (*model_name*),
    the model's architecture (*cnn* or *mlp*) and, optionally, the model's version (*version*). The file name elements must be splitted by a dash (**-**).

### API

#### ModelManager
You can obtain the singleton instance of the `ModelManager` calling the `getModelManager()` function.

| Method                                                                           | Return type        | Description                                                    |
|----------------------------------------------------------------------------------|--------------------|----------------------------------------------------------------|
| `listModels()`                                                                   | `Promise<Model[]>` | Returns a list of the models that are available for their use. |

### Tasks

| Task name                                 | Description                                                                                                                                                                                                              |
|-------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `{classificationAim}Classification{tag?}` | It performs a classification using the input data contained on the invocation event's payload. `classificationAim` is used to differentiate among classification tasks. An optional `tag` can be added to the task name. |
| `{regressionAim}Regression{tag?}`         | It performs a regression using the input data contained on the invocation event's payload. `regressionAim` is used to differentiate among regression tasks. An optional `tag` can be added to the task name.             |

> **Note**: the input data provided through the invocation event's payload **must be** an array of numbers ready to be feed into the model. 
> In other words, the main application is the one in charge of executing the required data preprocessing techniques (e.g., normalization, feature extraction, etc...) to prepare the data for the model, not this module.

To register these tasks for their use, you just need to import them and call their generator functions inside your application's task list:

```typescript
import { Task } from '@awarns/core/tasks';
import {
  classificationTask,
  regressionTask,
  DelegateType,
} from '@awarns/ml-kit';
import { DelegateType } from './index';

export const demoTasks: Array<Task> = [
  classificationTask('human-activity', 'activity_classifier-mlp', '', { acceleration: 4 }),
  // humanActivityClassification

  classificationTask('human-activity', 'activity_classifier-cnn', 'UsingCNN', { acceleration: DelegateType.GPU }),
  // humanActivityClassificationUsingCNN
  
  regressionTask('stress-level', 'stress_regressor-cnn'),
  // stressLevelRegression
]
```

#### Task generator parameters:

| Parameter name                                   | Type                                                  | Description                                                                                                                                                         |
|--------------------------------------------------|-------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| <code>{classification&vert;regression}Aim</code> | `string`                                              | Objective of the classification/regression. Used to name the task.                                                                                                  |
| `modelName`                                      | <code>string &vert; ModelNameResolver</code>          | Name of the model (without *tflite* extension) stored in the *ml-models* folder to use for this task, or a function that returns the name of the model when called. |
| `tag` *(**Optional**)*                           | `string`                                              | Adds a tag to the name of the task to differentiate it from other tasks with other configurations.                                                                  |
| `modelOptions` *(**Optional**)*                  | <code>ModelOptions &vert; ModelOptionsResolver</code> | Configuration to use with the model or a function that returns the configuration when called.                                                                       |

> **Note**: It's highly recommended to provide the `{classification|regression}Aim` in snake-case format. This string will be used as the type of the output record of the task.
> All the records have their type in snake-case, so providing the `{classification|regression}Aim` in snake-case will keep the consistency of the framework.


##### `ModelNameResolver: () => string`

Useful to change the model used by a task at runtime. You can use the [`ModelManager`](#modelmanager) to obtain a list with the models that are available in the device.

##### `ModelOptions`

| Property       | Type                                    | Description                                                                                                                                                                                                                                                                                               |
|----------------|-----------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `acceleration` | <code>DelegateType &vert; number</code> | Which type of acceleration to use when running the model. It can take the values `DelegateType.GPU` (GPU acceleration), `DelegateType.NNAPI` ([Android Neural Networks API](https://developer.android.com/ndk/guides/neuralnetworks) acceleration) or a number indicating the quantity of threads to use. |

##### `ModelOptionsResolver: () => ModelOptions`

Useful to change the options used by the model of a task at runtime.

#### Tasks output events:

- [`{classificationAim}Predicted`](#events)
- [`{regressionAim}Predicted`](#events)

> Example usage in the application task graph:
> 
> ```typescript
> on('inputDataForHumanActivity', run('humanActivityClassificationUsingCNN'));
> on('humanActivityPredicted', run('writeRecords'));
> 
> on('inputDataStressLevel', run('stressLevelRegression'));
> on('stressLevelPredicted', run('writeRecords'));
> ```
> 
> **Note**: To use the `writeRecords` task, the persistence package must be installed and configured. See [persistence package docs](https://github.com/GeoTecINIT/awarns-framework/blob/main/packages/persistence/README.md).

### Events

| Name                           | Payload                             | Description                                         |
|--------------------------------|-------------------------------------|-----------------------------------------------------|
| `{classificationAim}Predicted` | [`Classification`](#classification) | Indicates that a classification has been completed. |
| `{regressionAim}Predicted`     | [`Regression`](#regression)         | Indicates that a regression has been completed.     |


### Records

#### Classification

| Property               | Type                                            | Description                                                        |
|------------------------|-------------------------------------------------|--------------------------------------------------------------------|
| `id`                   | `string`                                        | Record's unique id.                                                |
| `type`                 | `string`                                        | Always `{classificationAim}-prediction`.                           |
| `change`               | `Change`                                        | Always `NONE`.                                                     |
| `timestamp`            | `Date`                                          | The local time when the model predicted the classification result. |
| `classificationResult` | [`ClassificationResult`](#classificationresult) | Object containing the results of the classification.               |

##### ClassificationResult

| Property       | Type                                                      | Description                                                     |
|----------------|-----------------------------------------------------------|-----------------------------------------------------------------|
| `prediction`   | [`ClassificationPrediction[]`](#classificationprediction) | Array of the classification predictions generated by the model. |
| `modelName`    | `string`                                                  | The name of the model used for the classification.              |
| `architecture` | `string`                                                  | The architecture of the model used for the classification.      |
| `version`      | `string`                                                  | The version of the model used for the classification.           |

##### ClassificationPrediction

| Property | Type     | Description              |
|----------|----------|--------------------------|
| `label`  | `string` | Identifier of the class. |
| `score`  | `number` | Score of the prediction. |


#### Regression

| Property           | Type                                    | Description                                                   |
|--------------------|-----------------------------------------|---------------------------------------------------------------|
| `id`               | `string`                                | Record's unique id.                                           |
| `type`             | `string`                                | Always `{regressionAim}-prediction`.                          |
| `change`           | `Change`                                | Always `NONE`.                                                |
| `timestamp`        | `Date`                                  | The local time when the model predicted the regression result |
| `regressionResult` | [`RegressionResult`](#regressionresult) | Object containing the results of the regression.              |

##### RegressionResult

| Property       | Type       | Description                                               |
|----------------|------------|-----------------------------------------------------------|
| `prediction`   | `number[]` | Array of numbers with the results generated by the model. |
| `modelName`    | `string`   | The name of the model used for the regression.            |
| `architecture` | `string`   | The architecture of the model used for the regression.    |
| `version`      | `string`   | The version of the model used for the regression.         |

## License

Apache License Version 2.0

## Disclaimer
While we state that CNN models are supported, only 1D-CNN models have been tested. The code is general enough to support 2D and 3D CNN models with one input tensor,
but they have not been tested. If you try 2D/3D-CNN models and something is not working as expected, contact us.
