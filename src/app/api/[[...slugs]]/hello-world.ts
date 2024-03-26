import Elysia from "elysia";

export const countController = new Elysia().get("/count", (ctx) => {

  // return the count
  return {
    message: "Hello world! You have visited this page " + 1 + " times.",
  };
});
