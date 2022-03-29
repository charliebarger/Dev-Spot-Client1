const getSinglePost = async (articleId) => {
  try {
    let data = await fetch(`http://localhost:4000/api/posts/${articleId}`, {
      method: "GET",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
    });
    return data;
  } catch (error) {
    return error;
  }
};

export default getSinglePost;
