export const ensureArray = (val: object | object[]) =>
  Array.isArray(val) ? val : [val]
