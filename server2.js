 var mongoose = require('mongoose')
 var mcurl = 'mongodb+srv://sreekanthrenati14:srikanth123@cluster0.0bwh7.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
 mongoose.connect(mcurl).then(()=>console.log("connected to mongodb")).catch((err)=>console.log(err))