import packageJSON from '../package.json';

export function getVersion(name) {
  return packageJSON.dependencies[name] ?? '';
}

export function toHex(array) {
  let result = '';
  for (const value of array) {
    result += value.toString(16).padStart(2, '0');
  }
  return result;
};
