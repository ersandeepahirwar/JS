const set = new Set([0, 1, 2, 3, 4, 5, undefined, null]);
console.log("Set :", set);

set.delete();
console.log("Set :", set);

set.delete(null);
console.log("Set :", set);
