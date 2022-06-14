const express = require('express');
const router = express.Router()
const connection = require('./connection');

// create data --------------------------
router.post('/create',(req,res,next)=>{
    let product = req.body;
  
    query = "insert into product(name,description,price) values(?,?,?)";
    connection.query(query,[product.name,product.description,product.price],(err,results)=>{
        if(err){
            return res.status(500).json(err);
           // console.log(err);
        }else{
            return res.status(200).json({message:"Product added"});
        }
    })
})
// show data -------------------------
router.get('/show',(req,res,next)=>{
   var query = "select * from product";
    connection.query(query,(err,results)=>{
        if(err){
            return res.status(500).json(err);
        }else{
            console.log(results)
            return res.status(200).json(results);
    }
})
})
// update data--------------------------
router.patch('/update/:id',(req,res,next)=>{
    const id = req.params.id;
    let product = req.body;
    var query = "update product set name=?,description=?,price=? where id=?";
    connection.query(query,[product.name,product.description,product.price,id],(err,results)=>{
        if(err){
            return res.status(500).json(err);
        }else{
            if(results.affectedRows == 0){
                return res.status(404).json({message:"Product id does not found"});
            }
            return res.status(200).json({message:"Product updated"});
         
        }
    })
})
//delete data-----------------------------------
router.delete('/delete/:id',(req,res,next)=>{
    const id = req.params.id;
    var query ="delete from product where id=?";
    connection.query(query,[id],(err,results)=>{
        if(err){
            return res.status(500).json(err);
        }else{
            if(results.affectedRows == 0){
                return res.status(404).json({message:"Product id does not found"});
                console.log("Product id does not found");
            }
            return res.status(200).json({message:"Product Deleted"});
            console.log("product is deleted");
         
        }
    })
})
 
module.exports = router;