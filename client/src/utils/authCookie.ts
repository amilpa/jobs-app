import Cookies from "js-cookie";

const getToken = () => {
  return Cookies.get("token");
};

const createToken = (token: string) => {
  return Cookies.set("token", token, {
    sameSite: "strict",
  });
};

const clearToken = () => {
  return Cookies.remove("token");
};

export { getToken, createToken, clearToken };
