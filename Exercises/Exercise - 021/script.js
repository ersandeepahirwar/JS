/*

The Magical Sorting Hat

Imagine you are creating a magical Sorting Hat for a wizarding school.
Write a JavaScript function that takes an array of student names
and assigns each student to one of the four houses based on
the length of their name.

Gryffindor : name length greater than 0 and less than 6
Hufflepuff : name length greater than or equal to 6 and less than 8
Ravenclaw : name length greater than or equal to 8 and less than 12
Slytherin : name length greater than or equal to 12

The function should return an array of objects showing each student’s name
and the house they belong to.

*/

const sort = (students) => {
  return students.map((name) => {
    let length = name.length;
    let house = "";

    if (length > 0 && length < 6) {
      house = "Gryffindor";
    } else if (length >= 6 && length < 8) {
      house = "Hufflepuff";
    } else if (length >= 8 && length < 12) {
      house = "Ravenclaw";
    } else {
      house = "Slytherin";
    }

    return { name: name, house: house };
  });
};

console.log(sort(["Luna", "Rohit", "Shivam", "Cho Chang", "Hermione Granger"]));
