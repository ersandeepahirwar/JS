const getPost = async () => {
  console.log("Fetching Data...");

  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts/1"
    );
    const post = await response.json();
    console.log(post);
  } catch (error) {
    console.log(error);
  }
};

getPost();
