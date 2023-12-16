"use strict";
// fetch users
async function getUsers() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await response.json();
  return users;
}
// fetch posts
async function getPosts(userId) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${userId}/posts`
  );
  const posts = await response.json();
  return posts;
}
// display users and their posts

async function displayPosts() {
  // fetch array of users
  const users = await getUsers();

  // get the element from the HTML
  const userPosts = document.getElementById("posts");

  // iterate over each user in array
  for (const user of users) {
    // fetch the posts for the current user
    const posts = await getPosts(user.id);

    // create an item for the user with their posts
    const item = document.createElement("li");

    // set the HTML content of the item
    item.innerHTML = `<p>${user.name}</p><ol>${posts
      .map((post) => `<li>${post.title}</li>`)
      .join("")}</ol>`;

    // append the item to the ordered list element
    userPosts.appendChild(item);
  }
}
displayPosts();
