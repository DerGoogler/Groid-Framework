interface StorageError extends ErrorConstructor {
  new (message?: string): Error;
  (message?: string): Error;
  readonly prototype: Error;
}

class StorageError extends Error implements StorageError {
  public constructor(message?: string) {
    super(message);
    this.name = "StorageError";
  }
}

export default StorageError;
