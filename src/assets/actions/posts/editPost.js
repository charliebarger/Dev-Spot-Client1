const editPost = async (articleId) => {
  try {
    let data = await fetch(
      `http://localhost:4000/api/posts/edit/${articleId}`,
      {
        method: "GET",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
          Authorization: localStorage.getItem(`token`),
        },
      }
    );
    console.log(data);
    return data;
  } catch (error) {
    return false;
  }
};

export default editPost;
