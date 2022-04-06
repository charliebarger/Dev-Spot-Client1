const createPost = async (body, title, imageUrl) => {
  try {
    let data = await fetch(
      `https://gentle-wildwood-95976.herokuapp.com/api/posts`,
      {
        method: "POST",
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
export default createPost;
