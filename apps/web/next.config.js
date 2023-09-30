

module.exports = {
  reactStrictMode: true,
  serverRuntimeConfig: {
    // Will only be available on the server side
    publicApi: process.env.NEXT_PUBLIC_BACKEND_API,
  },
  publicRuntimeConfig: {
    publicApi: process.env.NEXT_PUBLIC_BACKEND_API,
  },
  transpilePackages: ["ui", "yueleme-api", "@app/yueleme-api"]
};
