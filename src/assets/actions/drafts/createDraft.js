const createDraft = async (body, title, imageUrl) => {
  try {
    const postBody = body ? body : "";
    let data = await fetch(
      `https://gentle-wildwood-95976.herokuapp.com/api/drafts`,
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
          postBody,
        }),
      }
    );
    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
};
export default createDraft;
