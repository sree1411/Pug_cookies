const express = require("express");
const router = express.Router();
var Employee = require('../model/employeModel')


router.post('/', (req,res)=>{
  let newEmp = new Employee(req.body)  
  newEmp.save().then((data)=>res.json(data)).catch((err)=>console.log(err))
})


router.get('/', (req,res)=>{  
    Employee.find({}).then((data)=>res.json(data)).catch((err)=>console.log(err))
  })
  

router.get('/:id', (req,res)=>{  
    let {id} = req.params;
    Employee.findById(id).then((data)=>res.json(data)).catch((err)=>console.log(err))
  })  

  router.put('/:id', (req,res)=>{  
    let {id} = req.params;
    console.log(id)
    Employee.findByIdAndUpdate(id, req.body, { new: true }).then((data)=>res.json(data)).catch((err)=>console.log(err))
  })  

  router.delete('/:id', (req,res)=>{  
    let {id} = req.params;
    console.log(id)
    Employee.findByIdAndDelete(id).then((data)=>res.json(data)).catch((err)=>console.log(err))
  })  

module.exports = router;
