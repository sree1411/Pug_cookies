const mongoose = require('mongoose')
const { Schema } = mongoose;
const employeeSchema = new Schema({
    firstname: String,
    lastname:String,
    age:String,
    gender:String
  });

const Employee = mongoose.model('employee', employeeSchema);
module.exports = Employee