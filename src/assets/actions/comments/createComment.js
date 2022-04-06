const createComment = async (comment, articleId) => {
  try {
    let data = await fetch(
      `https://gentle-wildwood-95976.herokuapp.com/api/posts/${articleId}/comments`,
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
