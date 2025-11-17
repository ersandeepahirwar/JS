const fetchUser = (ID) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof ID !== "number") {
        reject("User ID must be a number");
      } else if (ID <= 0) {
        reject("Invalid User ID");
      } else {
        resolve({ ID: ID, name: "Sandeep Ahirwar" });
      }
    }, 5000);
  });
};

const getUser = async (ID) => {
  try {
    console.log("Fetching User...");

    const user = await fetchUser(ID);
    console.log(user);
  } catch (error) {
    console.log(error);
  } finally {
    console.log("Request completed.");
  }
};

const getUsers = async () => {
  await getUser(0);
  await getUser("17CSECS005");
  await getUser(1714510036);
};

getUsers();
