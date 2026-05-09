import { defineNitroConfig } from "nitropack/config";

export default defineNitroConfig({
  compatibilityDate: "2024-04-03",
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
