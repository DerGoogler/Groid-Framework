# Groid Storage

An simple class to manage the loacal storage

> Add `https://dergoogler.com/registry` as registry

## Install

```shell
bun add @groid/storage
```

### Setup

```ts
import storage from "@groid/storage";

// Storage object
console.log(storage);

const { setJSON, getJSON } = storage;

const data = {
  sample: "tets",
};

setJSON("test", data);

const get = getJSON<typeof data>("test", {});

get.sample;
```
