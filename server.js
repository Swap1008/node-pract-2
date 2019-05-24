const express=require('express');
const app=express();
const port=process.env.PORT||3000;


// Routes
app.get('/',(req,res)=>{
    // res.render('index.hbs');
    res.send("Welcome to node 2");
});

// Listen

app.listen(port,()=>{
    console.log(`Server Started at ${port}`);
    
});