export enum ModelType {
  MLP = 'MLP',
  CNN = 'CNN',
}

export function modelTypeFrom(modelName: string): ModelType {
  const modelNameComponents = modelName.split('-');
  if (modelNameComponents.length < 2) {
    throw new Error('Malformed model name. Required format is {modelName}-{cnn|mlp}-[version].tflite`');
  }

  const architecture = modelNameComponents[1];
  switch (architecture.toUpperCase()) {
    case ModelType.MLP:
      return ModelType.MLP;
    case ModelType.CNN:
      return ModelType.CNN;
    default:
      throw new Error(
        `Malformed model name or unsupported architecture: ${modelName}. Required format is {modelName}-{cnn|mlp}-[version].tflite`
      );
  }
}
