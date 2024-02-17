/* READ ME BEFORE YOUR START



**********Import Postman files included in folder to postman for easier and quicker tests*********


 Enjoy :D

Made By : Ahmed Samy Nashaat
For : Node Js Lab 4 Eng Nourhan

*/

import express from "express";
import initConnection from "./DB/initConnection.js";
import userRoutes from "./src/modules/users/user.routes.js";
import messageRoutes from "./src/modules/messages/message.routes.js";
initConnection();

const server = express();
server.use(express.json());
server.use(userRoutes);
server.use(messageRoutes);
server.listen(3000);

export default server;
