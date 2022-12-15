type If<C, T, F> = C extends true ? T : F;

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from "../utils.ts";

type cases = [
  Expect<Equal<If<true, "a", "b">, "a">>,
  Expect<Equal<If<false, "a", 2>, 2>>
];

// @ts-ignore
type error = If<null, "a", "b">;
