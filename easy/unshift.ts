type Unshift<T extends any[], U> = [U, ...T];

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from "../utils.ts";

type cases = [
  Expect<Equal<Unshift<[], 1>, [1]>>,
  Expect<Equal<Unshift<[1, 2], 0>, [0, 1, 2]>>,
  Expect<Equal<Unshift<["1", 2, "3"], boolean>, [boolean, "1", 2, "3"]>>
];
