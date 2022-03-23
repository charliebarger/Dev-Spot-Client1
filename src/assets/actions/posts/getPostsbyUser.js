const getMyPosts = async () => {
  try {
    console.log("at my posts");
    let data = await fetch("http://localhost:4000/api/posts/myPosts", {
      method: "GET",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem(`token`),
      },
    });
    const response = await data.json();
    if (data.ok) {
      console.log(response);
      return response.posts;
    } else {
      return response.error;
    }
  } catch (error) {
    console.log(error);
    return error;
  }
};

export default getMyPosts;
