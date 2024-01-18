/* READ ME BEFORE YOUR START









1- All task operations had been integrated with MongoDB Atlas

2- Install packages before you start

3- You can import (Node Day 2 Task.postman_collection.json) file which is included in the folder to Postman for faster Request Test

4- Alternatively you can use the following link for documentation https://documenter.getpostman.com/view/32422144/2s9YsRdVPg

5- Make Sure to add a user before trying update and delete operations since they are done on the user added

6- Use Port 3000

7- Search UserByID Can be done using the following URL http://localhost:3000/SearchUserById/59b99e09cfa9a34dcd78866b (UserID is written after the endpoint change it to any userid from the database)

8- Enjoy :D






Made By : Ahmed Samy Nashaat
For : Node Js Lab 2 Eng Nourhan






*/
const http = require("http");
const { MongoClient, ObjectId } = require("mongodb");

// Your MongoDB initialization
const uri =
  "mongodb+srv://sononame:brnXHYz9BIz1oBvT@cluster0.6cavapm.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri);
const dbname = "sample_mflix";
const collection_name = "users";

let db;
client.connect((err) => {
  if (err) throw err;
  db = client.db(dbname);
});

//////////////////////////////////////////////////////////////////////////
let newUser = [{ name: "Ahmed", age: 26, email: "sononamex@gmail.com" }];

const server = http.createServer(async (req, res) => {
  if (req.url == "/GetAllUsers" && req.method === "GET") {
    // Get all users
    const usersCollection = client.db(dbname).collection(collection_name);
    const users = await usersCollection.find({}).toArray();
    res.end(JSON.stringify(users));
  }
  //
  else if (req.url == "/GetSortedUsers" && req.method === "GET") {
    // Get all users sorted alphabetically by name
    const usersCollection = client.db(dbname).collection(collection_name);
    const users = await usersCollection.find({}).sort({ name: 1 }).toArray();
    res.end(JSON.stringify(users));
  }
  //
  else if (req.url == "/AddUser" && req.method === "POST") {
    // Add new "Ahmed" user from array
    const usersCollection = client.db(dbname).collection(collection_name);
    await usersCollection.insertMany(newUser);
    res.end("Users added successfully");
  }
  //
  else if (req.url == "/DeleteUser" && req.method === "DELETE") {
    // Delete user with name "Ahmed"
    const usersCollection = client.db(dbname).collection(collection_name);
    await usersCollection.deleteOne({ name: "Ahmed" });
    res.end("User deleted successfully");
  }
  //
  else if (req.url == "/UpdateUser" && req.method === "PUT") {
    // Update user with name "Ahmed" by adding a password field
    const usersCollection = client.db(dbname).collection(collection_name);
    await usersCollection.updateOne(
      { name: "Ahmed" },
      { $set: { password: "HelloWorld" } }
    );
    res.end("User password added/updated successfully");
  }
  //
  else if (req.url.startsWith("/SearchUserById/") && req.method === "GET") {
    // Search user by ID
    const usersCollection = client.db(dbname).collection(collection_name);
    const id = req.url.split("/")[2];
    const user = await usersCollection.findOne({ _id: new ObjectId(id) });
    res.end(JSON.stringify(user));
  }
  //
  else {
    res.writeHead(404);
    res.end("404 Not Found");
  }
});

server.listen(3000);
