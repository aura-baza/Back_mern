import express, { json }  from "express";
import dotenv from "dotenv";
dotenv.config();
import cors from "cors";
import userRoute from "./routes/productRoutes.js";


const server=express();
server.use(cors());
server.use(json());

server.use(userRoute);


server.listen(process.env.PORT,()=>{
console.log('Servidor escuchando en el puerto '+process.env.PORT);
})