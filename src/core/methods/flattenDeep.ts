/**
 * 数组降维
 * @param arr 高阶数组
 */
function flattenDeep(arr: Array<JSONValue> | JSONValue): Array<JSONValue> {
  return Array.isArray(arr) ? arr.reduce((pre: Array<JSONValue>, cur) => [...pre, ...flattenDeep(cur)], []) : [arr];
}

export default flattenDeep;
