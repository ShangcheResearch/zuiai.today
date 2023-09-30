

module.exports = {
  reactStrictMode: true,
  env: {
    NEXT_PUBLIC_BACKEND_API: process.env.NEXT_PUBLIC_BACKEND_API,
  },
  serverRuntimeConfig: {
  },
  publicRuntimeConfig: {
    publicApi: process.env.NEXT_PUBLIC_BACKEND_API,
  },
  transpilePackages: ["ui", "yueleme-api", "@app/yueleme-api"]
};
