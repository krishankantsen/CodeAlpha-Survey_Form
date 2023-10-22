const express = require('express');
const app=express()
const router =express.Router()
const port =process.env.port || 8000
const cors = require('cors');
const user =require("./models/user")
const path=require("path")


app.use(cors());

app.use(express.json())
app.use(router)






const mongoose = require('mongoose');



const uri=`mongodb+srv://senjade:sen123@cluster0.3g1qzo8.mongodb.net/user?retryWrites=true&w=majority`


mongoose.connect(uri)

mongoose.connection.on("connected",async ()=>
{
    console.log("databse connected");
    const fetched_data= mongoose.connection.db.collection("food_items")//fetching data
    const data = await fetched_data.find({}).toArray();
   
})
mongoose.connection.on("error",()=>
{
    console.log("error connecting to database ");
   //find all data
}) 


router.post("/submit",(req,res)=>
{
    console.log(req.body)
    
    
        const namer=user.create({
          name: req.body.name,
          
          email: req.body.email,
          response:req.body.response
          
        })
        res.json({message:"saves success"})
    



})
app.use(express.static(path.join(__dirname,"./frontend/build")))
app.get("*",(req,res)=>
{
    res.sendFile(path.join(__dirname,"./frontend/build/index.html"),function (err){res.status(500).send(err)})
})

app.listen(port,()=>{
    console.log(`Listening on port ${port}`)
})

