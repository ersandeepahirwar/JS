const first = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("1st Promise is resolved.");
    reject("1st Promise is rejected due to an error.");
  }, 1000);
});

const second = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("2nd Promise is resolved.");
    reject("2nd Promise is rejected due to an error.");
  }, 2000);
});

const third = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve("3rd Promise is resolved.");
    reject("3rd Promise is rejected due to an error.");
  }, 3000);
});

Promise.any([first, second, third])
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
