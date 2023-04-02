const express = require('express');

// express app
const app = express();

// register view engine (configer some application setting)

app.set('view engine', 'ejs');

// not required in this case because it is the same name but if you 
// want to change it to other folder .. for example myViews
// app.set('views', 'myViews'); 
app.set('views', 'views'); 

// listen for request
app.listen(3000);


app.get('/', (req, res)=>{

    const blogs = [
        {title: 'Yoshi finds eggs', snippet: 'Lorem ipsum dolor sit amet consectetur'},
        {title: 'Mario finds stars', snippet: 'Lorem ipsum dolor sit amet consectetur'},
        {title: 'How to defest bowser', snippet: 'Lorem ipsum dolor sit amet consectetur'},
        {title: 'make me flay to the moon', snippet: 'Lorem ipsum dolor sit amet consectetur'}
    ];

    res.render('index' , {title : 'Home', blogs}); 
})

app.get('/about', (req, res)=>{
    res.render('about' , {title : 'About'});
})

app.get('/blogs/create', (req, res)=>{
    res.render('create' , {title : 'Create a new Blog'});
})

// redirects
app.get('/about-us', (req, res)=>{
    res.redirect('/about');
})

// 404 page
 app.use((req, res)=>{
    res.status(400).render('404' , {title : '404'});
 })