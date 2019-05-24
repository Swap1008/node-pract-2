const express=require('express');
const app=express();
const port=process.env.PORT||3000;
const path=require('path');
const hbs=require('hbs');

// Middleware
hbs.registerPartials(__dirname + '/views/partials');
app.set('view-engine','hbs');
app.use(express.static(path.join(__dirname,'/public')));


// Routes
app.get('/',(req,res)=>{
    res.render('index.hbs');
});

app.get('/about',(req,res)=>{
    res.render('about.hbs');
});

// Listen

app.listen(port,()=>{
    console.log(`Server Started at ${port}`);
    
});