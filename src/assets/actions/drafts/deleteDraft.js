const deleteDraft = async (postId) => {
  try {
    console.log("at delete post");
    let data = await fetch(
      `http://localhost:4000/api/posts/draft/delete/${postId}`,
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
    if (data.ok) {
      return response;
    } else {
      throw new Error(response.error);
    }
  } catch (error) {
    return error;
  }
};

export default deleteDraft;
