declare type JSONValue = string | number | boolean | { [x: string]: JSONValue } | Array<JSONValue>;

declare interface SortComparisonMethods<T> {
  (a: T, b: T): boolean;
}

declare interface SortTypes {
  <T>(arr: T[], fun?: SortComparisonMethods<T>): void;
}

declare interface SortHandler {
  <T>(arr: T[], index: number, len: number, fun: SortComparisonMethods<T>): void;
}
