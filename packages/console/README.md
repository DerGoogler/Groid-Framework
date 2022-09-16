# Groid Console

An simple class to manage the loacal storage

> Add `https://dergoogler.com/registry` as registry

## Install

```shell
bun add @groid/console
```

## Example

```ts
import console, { Console } from "@groid/console";

const logger = new Console({
  kur: "\x1b[3m",
});

logger.log("This is <fg-yellow><kur>important!<r><r>");
```
