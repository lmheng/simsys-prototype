import { ApiCore } from "./core";

const base = "login";

export const apiLogin = (url: string) =>
  new ApiCore({
    getAll: false,
    getSingle: false,
    post: true,
    put: false,
    delete: false,
    url: base + url,
  });
