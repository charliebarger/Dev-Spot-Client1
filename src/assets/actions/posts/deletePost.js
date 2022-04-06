const deletePost = async (postId) => {
  try {
    let data = await fetch(
      `https://gentle-wildwood-95976.herokuapp.com/api/posts/delete/${postId}`,
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
    console.log(error);
    return error;
  }
};

export default deletePost;
