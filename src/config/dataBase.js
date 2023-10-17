import mysql2 from 'mysql2/promise';
import dotenv from 'dotenv';
dotenv.config();
export const pool=mysql2.createPool({
    host:process.env.HOST_DB,
    port:process.env.PORT_DB,
    user:process.env.USER,
    database:process.env.DATABASE,
    password:process.env.PASSWORD
});
console.log('conexion exitosa');