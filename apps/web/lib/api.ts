import type { RequestContext, ResponseContext } from "@app/yueleme-api";
import {
  createConfiguration,
  DefaultApi,
  ServerConfiguration,
} from "@app/yueleme-api";

export const oneOneApi = new DefaultApi(
  createConfiguration({
    baseServer: new ServerConfiguration(
      // @ts-ignore
      process.env.NEXT_PUBLIC_BACKEND_API,
      {}
    ),
    promiseMiddleware: [
      {
        post: (req) => {
          return new Promise((resolve, reject) => resolve(req));
        },
        pre: async (req) => {
          const cookie1 = req.getHeaders();
          const cookie = req.getHeaders()["LQ_AUTH"];
          return new Promise((resolve, reject) => {
            resolve(req);
          });
        },
      },
    ],
  })
);
