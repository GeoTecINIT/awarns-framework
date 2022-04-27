export function pascalCase(str: string): string {
  const lowerCase = str.toLowerCase();
  const words = lowerCase.split(/[\s\-_]/);
  for (let i = 0; i < words.length; i++) {
    words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
  }
  return words.join('');
}

export function camelCase(str: string): string {
  const inPascal = pascalCase(str);
  return inPascal.charAt(0).toLowerCase() + inPascal.slice(1);
}
