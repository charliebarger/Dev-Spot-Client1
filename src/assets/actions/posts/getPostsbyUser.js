const getMyPosts = async () => {
  try {
    let data = await fetch(
      "https://gentle-wildwood-95976.herokuapp.com/api/posts/myPosts",
      {
        method: "GET",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
          Authorization: localStorage.getItem(`token`),
        },
      }
    );
    const response = await data.json();
    if (data.ok) {
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
