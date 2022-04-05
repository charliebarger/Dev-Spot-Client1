const deleteComment = async (commentId, reset) => {
  try {
    let data = await fetch(
      `http://localhost:4000/api/posts/comments/${commentId}/delete`,
      {
        method: "DELETE",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
          Authorization: localStorage.getItem(`token`),
        },
      }
    );
    const response = await data.json();
    if (data.error) {
      throw new Error(response.error);
    } else {
      reset(Date.now());
    }
  } catch (error) {
    console.log(error);
  }
};

export default deleteComment;
