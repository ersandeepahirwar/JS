const result = "2026-06-17".match(
  /(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})/,
);

console.log(`Year : ${result.groups.year}`);
console.log(`Month : ${result.groups.month}`);
console.log(`Day : ${result.groups.day}`);
