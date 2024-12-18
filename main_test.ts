import { color } from "./main.ts";

Deno.test("colorize output", () => {
  color("this outputs a random color"); // random color
  color("this outputs a red color", "red"); // red color
});
