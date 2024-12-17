 var mongoose = require('mongoose')
 var mcurl = 'mongodb+srv://sreekanthrenati14:srikanth123@cluster0.0bwh7.mongodb.net/rb39?retryWrites=true&w=majority&appName=Cluster0'
 mongoose.connect(mcurl).then(()=>console.log("connected to mongodb")).catch((err)=>console.log(err))
 
 var Employee = require('./model/employeModel')
 Employee.find({}).then((res)=>console.log(res)).catch((err)=>console.log(err));
 Employee.insertMany({firstname:"dhoni", lastname:"mahendra", age:"22", gender:"m"}).then((res)=>console.log(res)).catch((err)=>console.log(err));
 Employee.insertMany({firstname:"kohli", lastname:"virat", age:"22", gender:"m"}).then((res)=>console.log(res)).catch((err)=>console.log(err));
