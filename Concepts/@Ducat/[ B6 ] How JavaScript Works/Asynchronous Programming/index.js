const first = () => {
  setTimeout(() => {
    console.log("In first()");
  }, 5000);
};

const second = () => {
  setTimeout(() => {
    console.log("In second()");
  }, 4000);
};

const third = () => {
  setTimeout(() => {
    console.log("In third()");
  }, 3000);
};

const fourth = () => {
  setTimeout(() => {
    console.log("In fourth()");
  }, 2000);
};

const fifth = () => {
  setTimeout(() => {
    console.log("In fifth()");
  }, 1000);
};

first();
second();
third();
fourth();
fifth();
