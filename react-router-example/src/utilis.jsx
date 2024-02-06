import { redirect } from "react-router-dom";

export async function requireAuth() {
  //const isLoggedIn = localStorage.getItem("loggedin");
  const isLoggedIn = true;
  console.log(isLoggedIn);

  console.log("1");
  if (isLoggedIn === null || isLoggedIn === "false" || isLoggedIn === false) {
    console.log("2");
    throw redirect("/login");
  }
  console.log("3");
  return null;
}
