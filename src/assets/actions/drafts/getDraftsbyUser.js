const getMyDrafts = async () => {
  try {
    let data = await fetch("http://localhost:4000/api/drafts/myDrafts", {
      method: "GET",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem(`token`),
      },
    });
    const response = await data.json();
    console.log(data);
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
