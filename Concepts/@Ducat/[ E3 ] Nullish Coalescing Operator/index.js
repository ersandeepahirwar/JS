const student = {
  ID: 1714510036,
  name: "Sandeep Ahirwar",
  CGPA: 6.9,
  fees: 0,
  isPresent: true,
};

console.log(`
    ID           : ${student.ID ?? "N/A"}
    Name         : ${student.name ?? "N/A"}
    CGPA         : ${student.CGPA ?? "N/A"}
    College Fees : ${student.fees ?? "N/A"}
    Is Present?  : ${student.isPresent ?? "N/A"}
    Address      : ${student.address ?? "N/A"}
    `);
