const createComment = async (comment, articleId) => {
  try {
    let data = await fetch(
      `http://localhost:4000/api/posts/${articleId}/comments`,
      {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
          Authorization: localStorage.getItem(`token`),
        },
        body: JSON.stringify({ comment }),
      }
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};

export default createComment;
