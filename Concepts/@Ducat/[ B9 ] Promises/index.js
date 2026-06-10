const firstPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("First Promise is Resolved.");
    reject("First Promise is Rejected.");
  }, 2000);
});

const secondPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Second Promise is Resolved.");
    reject("Second Promise is Rejected.");
  }, 4000);
});

const thirdPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Third Promise is Resolved.");
    reject("Third Promise is Rejected.");
  }, 6000);
});

firstPromise
  .then((value) => {
    console.log(value);
    secondPromise
      .then((value) => {
        console.log(value);
        thirdPromise
          .then((value) => {
            console.log(value);
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        console.log(error);
      });
  })
  .catch((error) => {
    console.log(error);
  });
