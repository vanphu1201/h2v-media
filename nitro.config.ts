import { defineNitroConfig } from "nitropack/config";

export default defineNitroConfig({
  publicAssets: [
    {
      dir: "dist/client",
      maxAge: 31536000,
    },
  ],
});
