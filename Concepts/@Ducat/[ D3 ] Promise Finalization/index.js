const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise is resolved.");
    reject("Promise is rejected.");
  }, 2000);
});

promise
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("Finally");
  });
