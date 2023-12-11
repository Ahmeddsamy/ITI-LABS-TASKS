"use strict";
function addUser() {
  var title = document.getElementById("title").value;
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var cardType = document.getElementById("cardType").value;

  var user = { title: title, name: name, email: email, cardType: cardType };

  // Get existing users from local storage or initialize an empty array
  var users = JSON.parse(localStorage.getItem("users")) || [];

  users.push(user);

  // Save users to local storage
  localStorage.setItem("users", JSON.stringify(users));

  // Clear the form fields
  document.getElementById("title").value = "";
  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("cardType").value = "";

  // Display users in the table
  displayUsers();
}

function displayUsers() {
  var table = document.getElementById("userTable");
  var users = JSON.parse(localStorage.getItem("users")) || [];

  // Clear the table
  table.innerHTML =
    "<tr><th>Title</th><th>Name</th><th>Email</th><th>Card Type</th><th>Action</th></tr>";

  // Add user data to the table
  for (var i = 0; i < users.length; i++) {
    var row = table.insertRow(-1);
    row.insertCell(0).innerHTML = users[i].title;
    row.insertCell(1).innerHTML = users[i].name;
    row.insertCell(2).innerHTML = users[i].email;
    row.insertCell(3).innerHTML = users[i].cardType;
    row.insertCell(4).innerHTML =
      '<button onclick="editUser(' +
      i +
      ')">Edit</button> <button onclick="deleteUser(' +
      i +
      ')">Delete</button>';
  }
}

function editUser(index) {
  var users = JSON.parse(localStorage.getItem("users")) || [];
  var user = users[index];

  document.getElementById("title").value = user.title;
  document.getElementById("name").value = user.name;
  document.getElementById("email").value = user.email;
  document.getElementById("cardType").value = user.cardType;

  // Remove the edited user from the array
  users.splice(index, 1);

  // Save the updated array to local storage
  localStorage.setItem("users", JSON.stringify(users));

  // Display users in the table
  displayUsers();
}

function deleteUser(index) {
  var users = JSON.parse(localStorage.getItem("users")) || [];

  // Remove the selected user from the array
  users.splice(index, 1);

  // Save the updated array to local storage
  localStorage.setItem("users", JSON.stringify(users));

  // Display users in the table
  displayUsers();
}

function searchUsers() {
  var searchTerm = document.getElementById("search").value.toLowerCase();
  var users = JSON.parse(localStorage.getItem("users")) || [];

  var filteredUsers = users.filter(function (user) {
    return user.name.toLowerCase().includes(searchTerm);
  });

  // Display filtered users in the table
  var table = document.getElementById("userTable");
  table.innerHTML =
    "<tr><th>Title</th><th>Name</th><th>Email</th><th>Card Type</th><th>Action</th></tr>";

  for (var i = 0; i < filteredUsers.length; i++) {
    var row = table.insertRow(-1);
    row.insertCell(0).innerHTML = filteredUsers[i].title;
    row.insertCell(1).innerHTML = filteredUsers[i].name;
    row.insertCell(2).innerHTML = filteredUsers[i].email;
    row.insertCell(3).innerHTML = filteredUsers[i].cardType;
    row.insertCell(4).innerHTML =
      '<button onclick="editUser(' +
      i +
      ')">Edit</button> <button onclick="deleteUser(' +
      i +
      ')">Delete</button>';
  }
}

// Initial display of users in the table
displayUsers();
