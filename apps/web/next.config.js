

module.exports = {
  reactStrictMode: true,
  env: {
    NEXT_PUBLIC_BACKEND_API: process.env.NEXT_PUBLIC_BACKEND_API,
    NEXT_PUBLIC_COLLABORATION_API: process.env.NEXT_PUBLIC_COLLABORATION_API
  },
  serverRuntimeConfig: {
    NEXT_PUBLIC_BACKEND_API: process.env.NEXT_PUBLIC_BACKEND_API,
  },
  publicRuntimeConfig: {
    NEXT_PUBLIC_BACKEND_API: process.env.NEXT_PUBLIC_BACKEND_API,
    NEXT_PUBLIC_COLLABORATION_API: process.env.NEXT_PUBLIC_COLLABORATION_API
  },
  transpilePackages: ["ui", "yueleme-api", "@app/yueleme-api"]
};
