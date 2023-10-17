import mysql2 from 'mysql2/promise';

export const pool=mysql2.createPool({
    host:'localhost',
    port:3306,
    user:'root',
    database:'inventario',
    password:'1044917779'
});
console.log('conexion exitosa');