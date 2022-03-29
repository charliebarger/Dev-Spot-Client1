const getSingleDraft = async (articleId) => {
  try {
    let data = await fetch(`http://localhost:4000/api/drafts/${articleId}`, {
      method: "GET",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
    });
    return data;
  } catch (error) {
    return error;
  }
};

export default getSingleDraft;
