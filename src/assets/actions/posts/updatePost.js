const updatePost = async (title, body, imageUrl, updateId) => {
  try {
    let data = await fetch(
      `http://localhost:4000/api/posts/update/${updateId}`,
      {
        method: "PUT",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
          Authorization: localStorage.getItem(`token`),
        },
        body: JSON.stringify({
          title,
          imageUrl,
          postBody: body,
        }),
      }
    );
    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export default updatePost;
