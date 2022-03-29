const getUserInfo = async () => {
  try {
    console.log("at my posts");
    let data = await fetch("http://localhost:4000/api/users", {
      method: "GET",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem(`token`),
      },
    });
    const response = await data.json();
    if (data.ok) {
      return response.user;
    } else {
      throw new Error(response.error);
    }
  } catch (error) {
    console.log(error);
    return error;
  }
};

export default getUserInfo;
