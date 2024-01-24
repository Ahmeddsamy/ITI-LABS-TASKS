/* READ ME BEFORE YOUR START



**********Import Postman files included in folder to postman for easier and quicker tests*********


 Enjoy :D

Made By : Ahmed Samy Nashaat
For : Node Js Lab 5 Eng Nourhan

*/
import "dotenv/config";
import express from "express";
import initConnection from "./DB/initConnection.js";
import userRoutes from "./src/modules/users/user.routes.js";
import postRoutes from "./src/modules/posts/post.routes.js";

initConnection();

const server = express();
server.use(express.json());
server.use(userRoutes);
server.use(postRoutes);
server.listen(3000);
