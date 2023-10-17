import {pool} from "../config/dataBase.js";
export const addProduct=async(req,res)=>{
    try {
        const data=req.body;
        const [result]= await pool.query('insert into productos (codigo,nombre,precio,cantidad ) values (?,?,?,?)',[data.codigo,data.nombre,data.precio, data.cantidad]);
        if (result.affectedRows>0) {
            return res.status(201).json({
                msg:'Producto creado con exito'
            })
        }
        res.send('se creó un producto');
        
     } catch (error) {
        return res.status(201).json({
            msg:'Error en el servidor'
        })
     }
}

export const getProduct= async(req,res)=>{
    console.log(req.params.codigo);
    try {
        const [data]=await pool.query("select * from productos where codigo =?",[parseInt(req.params.codigo)])
        return res.status(200).json({
          code:200,
          msg:"Producto",
          data
      }) 
        } catch (error) {
          return res.status(400).json({
              code:400,
              msg:"algo salió mal",
          })
        }
}
export const getAllProducts=async(req,res)=>{
    try {
        const [data]=await pool.query('select * from productos');
        console.log(data);
        return res.status(200).json({
            code:200,
            msg:'todos los productos',
            data:data
        })
     } catch (error) {
        return res.status(400).json({
            msg:'Error en el servidor'
        })
     }
}

export const upDateProduct=async(req,res)=>{
try {
    const codigo=req.params.codigo;
    const [resultado]=await pool.query('select * from productos where codigo='+codigo);
    if (resultado[0]) {
      const [resultado2]= await pool.query('update productos set nombre=?,precio=?,cantidad=? where codigo=?',[req.body.nombre,req.body.precio,req.body.cantidad,codigo]); 
      if (resultado2.affectedRows>0) {
        return res.status(200).json({
            msg:'El producto fué editado'
        })
       }
       return res.status(400).json({
        msg:'Error al editar'
    })  
    }else{
        return res.status(400).json({
            msg:'producto no registrado en la base de datos' 
        })
    }

} catch (error) {
 console.log(error);
}
}

export const deleteProduct=async(req,res)=>{
try {
    const codigo=req.params.codigo;
    const resultado=await pool.query('delete  from productos where codigo='+codigo);
    return res.status(200).json({
        code:200,
        response:true,
        msg:'producto eliminado con exito',
    }) 

} catch (error) {
    console.log(error);
}
}
