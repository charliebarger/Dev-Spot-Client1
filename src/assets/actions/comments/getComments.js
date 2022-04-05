const getComments = async (articleId) => {
  try {
    console.log(articleId);
    let data = await fetch(
      `http://localhost:4000/api/posts/${articleId}/comments`,
      {
        method: "GET",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
      },
      []
    );
    if (data.ok) {
      return data;
    } else {
      throw Error;
    }
  } catch (error) {
    console.log(error);
    return error;
  }
};

export default getComments;
