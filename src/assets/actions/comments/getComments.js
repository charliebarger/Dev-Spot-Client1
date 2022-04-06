const getComments = async (articleId) => {
  try {
    let data = await fetch(
      `https://gentle-wildwood-95976.herokuapp.com/api/posts/${articleId}/comments`,
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
