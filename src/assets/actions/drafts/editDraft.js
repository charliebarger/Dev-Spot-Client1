const editDraft = async (articleId) => {
  try {
    let data = await fetch(
      `https://gentle-wildwood-95976.herokuapp.com/api/drafts/edit/${articleId}`,
      {
        method: "GET",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
          Authorization: localStorage.getItem(`token`),
        },
      }
    );
    return data;
  } catch (error) {
    return false;
  }
};

export default editDraft;
