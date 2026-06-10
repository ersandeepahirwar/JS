function sum(A) {
  return function (B) {
    return function (C) {
      return function (D) {
        return function (E) {
          return A + B + C + D + E;
        };
      };
    };
  };
}

console.log("10 + 20 + 30 + 40 + 50 =", sum(10)(20)(30)(40)(50));
