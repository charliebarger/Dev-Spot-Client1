const getMyDrafts = async () => {
  try {
    let data = await fetch(
      "https://gentle-wildwood-95976.herokuapp.com/api/drafts/myDrafts",
      {
        method: "GET",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
          Authorization: localStorage.getItem(`token`),
        },
      }
    );
    const response = await data.json();
    if (data.ok) {
      return response.drafts;
    } else {
      return response.error;
    }
  } catch (error) {
    console.log(error);
    return error;
  }
};

export default getMyDrafts;
