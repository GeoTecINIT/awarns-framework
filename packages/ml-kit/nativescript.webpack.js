module.exports = (webpack) => {
  webpack.Utils.addCopyRule('ml-models/*.tflite');
};
