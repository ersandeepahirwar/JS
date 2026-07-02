const A = [
  [10, 20],
  [30, 40],
  [50, 60],
  [70, 80],
  [90, 100],
];

console.log("Original Array :", A);
console.log("Array after use of flat() :", A.flat(1));
console.log(
  "Array after use of flat() and map() :",
  A.flat(1).map((number) => Math.pow(number, 2)),
);

const B = [
  [
    [10, 20],
    [30, 40],
    [50, 60],
    [70, 80],
    [90, 100],
  ],
];

console.log("Original Array :", B);
console.log("Array after use of flat() :", B.flat(2));
console.log(
  "Array after use of flat() and map() :",
  B.flat(2).map((number) => Math.pow(number, 2)),
);

const C = [
  [
    [
      [
        [
          [
            [10, 20],
            [30, 40],
            [50, 60],
            [70, 80],
            [90, 100],
          ],
        ],
      ],
    ],
  ],
];

console.log("Original Array :", C);
console.log("Array after use of flat() :", C.flat(Infinity));
console.log(
  "Array after use of flat() and map() :",
  C.flat(Infinity).map((number) => Math.pow(number, 2)),
);
