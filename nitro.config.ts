import { defineNitroConfig } from "nitropack/config";

export default defineNitroConfig({
  srcDir: "src",
  handlers: [
    {
      route: "/**",
      handler: "./server.ts",
    },
  ],
  publicAssets: [
    {
      dir: "../dist/client",
      maxAge: 31536000,
    },
  ],
});
