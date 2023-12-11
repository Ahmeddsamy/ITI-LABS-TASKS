"use strict";
//Set Cookie
function setCookie(name, value) {
  document.cookie = name + "=" + value;
}
setCookie("Name", "Ahmed");
setCookie("Age", "26");
setCookie("City", "Cairo");
setCookie("FavoriteColor", "Blue");
// Get Cookie
function getCookie(name) {
  const cookieString = document.cookie;
  const cookies = cookieString.split("; ");

  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i];
    const [Name, Value] = cookie.split("=");

    if (Name === name) {
      return [Name, Value];
    }
  }

  return null; // Return null if the cookie with the given name is not found
}

const nameCookie = getCookie("Name");
const ageCookie = getCookie("Age");
const cityCookie = getCookie("City");
const favoriteColorCookie = getCookie("FavoriteColor");

console.log(nameCookie);
console.log(ageCookie);
console.log(cityCookie);
console.log(favoriteColorCookie);
