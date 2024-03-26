import { Elysia, t } from "elysia";
import { countController } from "./hello-world";

const apiApp = new Elysia({ prefix: "/api" })
  .get("/", () => "hi")
  .post("/", ({ body }) => body, {
    body: t.Object({
      name: t.String(),
    }),
  })
  .use(countController);

export const GET = apiApp.handle;

export type API = typeof apiApp;
