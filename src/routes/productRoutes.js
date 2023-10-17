//importamos router desde expres y query para poder realizar consultas.
import  {Router} from "express";
import { addProduct, deleteProduct, getAllProducts, getProduct, upDateProduct } from '../controllers/productControllers.js';
// guardamos en una constante 
const userRoute= Router();

//ruta crear producto
userRoute.post('/addProducts',addProduct);

//obtener todos los productos
userRoute.get('/getAllProducts', getAllProducts);

//obtener un producto especifico
userRoute.get('/getProduct/:codigo',getProduct);

//actualizar un producto
userRoute.put('/upDataProduct/:codigo',upDateProduct);

//eliminar un producto
userRoute.delete('/deleteProduct/:codigo',deleteProduct);

export default userRoute;