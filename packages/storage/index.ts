import StorageError from "./error";

export type GetStringFunction = (key: string, defValue: string) => string;
export type GetNumberFunction = (key: string, defValue: number) => number;
export type GetBooleanFunction = (key: string, defValue: boolean) => boolean;
export type GetJSONFunction = <T = Partial<any>>(
  key: string,
  defValue: Partial<T>
) => Partial<T>;
export type SetStringFunction = (key: string, value: string) => void;
export type SetNumberFunction = (key: string, value: number) => void;
export type SetBooleanFunction = (key: string, value: boolean) => void;
export type SetJSONFunction = <T = Partial<any>>(
  key: string,
  value: Partial<T>
) => void;

/** This Web Storage API interface provides access to a particular domain's session or local storage. It allows, for example, the addition, modification, or deletion of stored data items. */
interface Storage {
  /** Returns the number of key/value pairs. */
  readonly length: number;
  /**
   * Removes all key/value pairs, if there are any.
   *
   * Dispatches a storage event on Window objects holding an equivalent Storage object.
   */
  clearPrefs(): void;
  /** Returns the name of the nth key, or null if n is greater than or equal to the number of key/value pairs. */
  key(index: number): string | null;
  /**
   * Removes the key/value pair with the given key, if a key/value pair with the given key exists.
   *
   * Dispatches a storage event on Window objects holding an equivalent Storage object.
   */
  removePref(key: string): void;

  /** Returns the current value associated with the given key, or null if the given key does not exist. */
  getItem(key: string): string | null;
  /**
   * Sets the value of the pair identified by key to value, creating a new key/value pair if none existed for key previously.
   *
   * Throws a "QuotaExceededError" DOMException exception if the new value couldn't be set. (Setting could fail if, e.g., the user has disabled storage for the site, or if the quota has been exceeded.)
   *
   * Dispatches a storage event on Window objects holding an equivalent Storage object.
   */
  setItem(key: string, value: string): void;

  getString: GetStringFunction;
  getStr: GetStringFunction;
  getStd: GetStringFunction;
  getBoolean: GetBooleanFunction;
  getBool: GetBooleanFunction;
  getNumber: GetNumberFunction;
  getNumb: GetNumberFunction;
  getNum: GetNumberFunction;
  getInt: GetNumberFunction;
  getJSON: GetJSONFunction;

  setString: SetStringFunction;
  setBoolean: SetBooleanFunction;
  setNumber: SetNumberFunction;
  setJSON: SetJSONFunction;
  setItem(key: string, value: string): void;
  [name: string]: any;
}

export function setString(key: string, value: string): void {
  localStorage.setItem(key, String(value));
}

export function setBoolean(key: string, value: boolean): void {
  localStorage.setItem(key, String(value));
}

export function setNumber(key: string, value: number): void {
  localStorage.setItem(key, String(value));
}

export function setJSON<T = Partial<any>>(
  key: string,
  value: Partial<T>
): void {
  localStorage.setItem(key, JSON.stringify(value));
}

export function getString(key: string, defValue: string): string {
  try {
    const get = localStorage.getItem(key);
    if (get === null) {
      return defValue;
    } else {
      return String(get);
    }
  } catch (e) {
    throw new StorageError(e.message);
  }
}

export function getBoolean(key: string, defValue: boolean): boolean {
  try {
    const get = localStorage.getItem(key);
    if (get === null) {
      return defValue;
    } else {
      return get === "true";
    }
  } catch (e) {
    throw new StorageError(e.message);
  }
}

export function getNumber(key: string, defValue: number): number {
  try {
    const get = localStorage.getItem(key);
    if (get === null) {
      return defValue;
    } else {
      return Number(get);
    }
  } catch (e) {
    throw new StorageError(e.message);
  }
}

export function getJSON<T = Partial<any>>(
  key: string,
  defValue: Partial<T>
): Partial<T> {
  try {
    const get = localStorage.getItem(key);
    if (get === null) {
      return defValue;
    } else {
      return JSON.parse(get);
    }
  } catch (e) {
    throw new StorageError(e.message);
  }
}

const storage: Storage = {
  getString: getString,
  getStr: getString,
  getStd: getString,
  getNumber: getNumber,
  getNumb: getNumber,
  getNum: getNumber,
  getInt: getNumber,
  getBoolean: getBoolean,
  getBool: getBoolean,
  getJSON: getJSON,

  setString: setString,
  setStr: setString,
  setStd: setString,
  setNumber: setNumber,
  setNumb: setNumber,
  setNum: setNumber,
  setInt: setNumber,
  setBoolean: setBoolean,
  setBool: setBoolean,
  setJSON: setJSON,

  setItem: localStorage.setItem,
  getItem: localStorage.getItem,
  key: localStorage.key,
  length: localStorage.length,

  removePref: localStorage.removeItem,
  clearPrefs: localStorage.clear,
  [""]: localStorage,
};

export default storage;
