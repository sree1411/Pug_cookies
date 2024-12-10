 const express = require('express') 
 const app = express();
 const fs = require('fs')
 var reviewRouter = require('./routes/reviewRoutes')
 var users = JSON.parse(fs.readFileSync('users.txt').toString())
 const cookieParser = require("cookie-parser");
 var bodyParser = require('body-parser');
 app.use(express.static(__dirname+'/public'))


app.set('view engine', 'pug')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cookieParser());



 

app.use('/', reviewRouter)

app.post('/registerForm', (req,res)=>{
  users.push(req.body)
  fs.writeFileSync('users.txt', JSON.stringify(users))
  res.redirect('/')
 })


app.post('/loginForm', (req,res)=>{
  let user = users.find((us)=>us.username === req.body.username && us.password === req.body.password)
 
  if(user){
      res.cookie('username', req.body.username)
      res.cookie('password', req.body.password)
      res.render('home', {user})
  }else{
    res.sendFile(__dirname+'/public/login.html')
  }
})

app.use((req,res,next)=>{
  if(req.cookies.username){
     let user = users.find((us)=>us.username === req.cookies.username && us.password === req.cookies.password)
      if(user){
        res.cookie('username', req.body.username)
        res.cookie('password', req.body.password)
        next()
      }else{
        res.sendFile(__dirname+'/public/login.html')
      }
    }else{
      res.sendFile(__dirname+'/public/login.html')
    }
})


app.get('/logout', (req,res)=>{
  res.clearCookie('username', req.body.username)
  res.clearCookie('password', req.body.password)
  res.redirect('/')
})



 app.listen(4500,()=>{
    console.log("port is working on 4500");
 })