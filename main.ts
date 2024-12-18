import randomColor from "jsr:@openjs/random-color@1.0.1";
/**
 * Logs a string with specified color styling to the console
 * @param str - The string to be colored
 * @param color - CSS color value to apply to the string, defaults to a random color
 */
export function color(str: string, color: string = randomColor() as string) {
  console.log(`%c${str}`, `color: ${color}`);
}
