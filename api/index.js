import server from "../dist/server/server.js";

export default async function handler(req, res) {
  // Chuyển đổi Node.js request sang Web Request cho TanStack Start
  const protocol = req.headers["x-forwarded-proto"] || "http";
  const host = req.headers["host"];
  const url = new URL(req.url, `${protocol}://${host}`);

  const webReq = new Request(url.href, {
    method: req.method,
    headers: req.headers,
    body: req.method !== "GET" && req.method !== "HEAD" ? req : undefined,
    // @ts-ignore
    duplex: "half",
  });

  try {
    const response = await server.fetch(webReq);

    // Chuyển đổi Web Response ngược lại Node.js response cho Vercel
    res.status(response.status);
    response.headers.forEach((value, key) => {
      res.setHeader(key, value);
    });

    const blob = await response.blob();
    const arrayBuffer = await blob.arrayBuffer();
    res.send(Buffer.from(arrayBuffer));
  } catch (error) {
    console.error("SSR Error:", error);
    res.status(500).send("Internal Server Error");
  }
}
