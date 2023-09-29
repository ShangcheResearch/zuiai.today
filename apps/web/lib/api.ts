import type { RequestContext, ResponseContext } from "@app/yueleme-api";
import {
  createConfiguration,
  DefaultApi,
  ServerConfiguration,
} from "@app/yueleme-api";
import getConfig from "next/config";
const { publicRuntimeConfig } = getConfig();
console.log("publicRuntimeConfig", publicRuntimeConfig);
console.log("process.env.AUTH0_SECRET\n");
console.log(process.env.AUTH0_SECRET);
export const oneOneApi = new DefaultApi(
  createConfiguration({
    baseServer: new ServerConfiguration(
      // @ts-ignore
      publicRuntimeConfig.publicApi,
      {}
    ),
    promiseMiddleware: [
      {
        post: (req) => {
          return new Promise((resolve) => resolve(req));
        },
        pre: async (req) => {
          req.getHeaders();
          req.getHeaders()["LQ_AUTH"];
          return new Promise((resolve) => {
            resolve(req);
          });
        },
      },
    ],
  })
);
