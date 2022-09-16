import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["index.ts"],
  dts: true,
  splitting: false,
  sourcemap: true,
  clean: true,
});
