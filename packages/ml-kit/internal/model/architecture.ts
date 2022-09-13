export enum ModelArchitecture {
  MLP = 'MLP',
  CNN = 'CNN',
}

export function modelArchitectureFrom(modelName: string): ModelArchitecture {
  const modelNameComponents = modelName.split('-');
  if (modelNameComponents.length < 2) {
    throw new Error('Malformed model name. Required format is {modelName}-{cnn|mlp}-[version].tflite');
  }

  const architecture = modelNameComponents[1];
  switch (architecture.toUpperCase()) {
    case ModelArchitecture.MLP:
      return ModelArchitecture.MLP;
    case ModelArchitecture.CNN:
      return ModelArchitecture.CNN;
    default:
      throw new Error(
        `Malformed model name or unsupported architecture: ${modelName}. Required format is {modelName}-{cnn|mlp}-[version].tflite`
      );
  }
}
